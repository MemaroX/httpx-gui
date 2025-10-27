
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

@pytest.mark.asyncio
async def test_websocket_endpoint():
    with client.websocket_connect("/ws") as websocket:
        # Test invalid command
        websocket.send_text("invalid command")
        data = websocket.receive_text()
        assert "Error: Invalid command" in data

        # Test valid command
        websocket.send_text("httpx -h")
        # Receive the output until the end message
        output = []
        while True:
            data = websocket.receive_text()
            if data == "--- End of command ---":
                break
            output.append(data)
        
        # Check if the output contains some expected help text
        assert any("fast and multi-purpose HTTP toolkit" in s for s in output)
