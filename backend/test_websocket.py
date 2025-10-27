
import asyncio
import websockets

async def test_websocket():
    uri = "ws://localhost:8000/ws"
    async with websockets.connect(uri) as websocket:
        await websocket.send("httpx -h")
        while True:
            try:
                message = await websocket.recv()
                print(f"> {message}")
                if message == "--- End of command ---":
                    break
            except websockets.ConnectionClosed:
                print("Connection closed")
                break

if __name__ == "__main__":
    asyncio.run(test_websocket())
