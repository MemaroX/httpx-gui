
import websockets
import asyncio
import os
from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Path to the frontend build directory
FRONTEND_DIR = os.path.join(os.path.dirname(__file__), "..", "frontend", "build")

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            logger.info(f"Received command: {data}")
            
            # Security check: Ensure the command starts with "httpx"
            if not data.strip().startswith("httpx"):
                await websocket.send_text("Error: Invalid command. Only httpx commands are allowed.")
                continue

            process = await asyncio.create_subprocess_shell(
                f"/home/maher/go/bin/{data}",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )

            # Stream stdout
            async for line in process.stdout:
                await websocket.send_text(line.decode())

            # Stream stderr
            async for line in process.stderr:
                await websocket.send_text(line.decode())

            await process.wait()
            await websocket.send_text("--- End of command ---")

    except Exception as e:
        logger.error(f"WebSocket Error: {e}")
        await websocket.send_text(f"Error: {e}")
    finally:
        await websocket.close()

# Serve the React frontend
if os.path.exists(FRONTEND_DIR):
    app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="static")

    @app.exception_handler(404)
    async def not_found(request, exc):
        return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))
else:
    @app.get("/")
    def read_root():
        return {"message": "Frontend not built yet. Please run `npm run build` in the frontend directory."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
