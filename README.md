# httpx-gui

A graphical user interface (GUI) for the `httpx` command-line tool, built with a FastAPI backend and a React frontend. This application allows users to easily interact with `httpx`'s extensive features through a user-friendly web interface.

## Features

-   **Comprehensive `httpx` Integration:** Access almost all `httpx` command-line options through a categorized tabbed interface.
-   **Real-time Output:** View `httpx` command output directly in the browser via WebSocket communication.
-   **User-friendly Interface:** Intuitive design with Bootstrap for a clean and responsive experience.
-   **Cross-platform:** Run the GUI on any system that supports Python and Node.js.

## Installation

Follow these steps to set up and run the `httpx-gui` application locally.

### Prerequisites

Before you begin, ensure you have the following installed:

-   **`httpx` command-line tool:** Make sure the `httpx` executable is available in your system's PATH or provide its absolute path in the backend configuration.
    *   You can download `httpx` from [ProjectDiscovery's GitHub](https://github.com/projectdiscovery/httpx).
-   **Python 3.8+**
-   **Node.js and npm** (or yarn)

### 1. Clone the Repository

```bash
git clone https://github.com/MemaroX/httpx-gui.git
cd httpx-gui
```

### 2. Backend Setup (FastAPI)

Navigate to the `backend` directory, create a Python virtual environment, and install the dependencies.

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt
pip install -r requirements-dev.txt # For testing purposes
```

### 3. Frontend Setup (React)

Navigate to the `frontend` directory and install the Node.js dependencies.

```bash
cd ../frontend
npm install
npm run build
```

### 4. Configure `httpx` Path (Optional)

By default, the backend expects the `httpx` executable to be in `/home/maher/go/bin/httpx`. If your `httpx` executable is located elsewhere, you need to update the `main.py` file in the `backend` directory:

Open `backend/main.py` and modify the line:

```python
                f"/home/maher/go/bin/{data}",
```

Replace `/home/maher/go/bin/` with the actual path to your `httpx` executable.

## Usage

### 1. Start the Backend Server

From the `backend` directory (with your virtual environment activated):

```bash
python main.py
```

The server will start on `http://0.0.0.0:8000`.

### 2. Access the Frontend

Open your web browser and navigate to `http://localhost:8000`.

You will see the `httpx GUI` with various tabs for different `httpx` options. Select your desired options, enter target information, and click the "Run" button to execute the `httpx` command.

## Running Tests

### Backend Tests

From the `backend` directory (with your virtual environment activated):

```bash
pytest
```

### Frontend Tests

From the `frontend` directory:

```bash
npm test
```

## Contributing

Feel free to fork the repository, open issues, or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (Note: A `LICENSE` file is not yet created, but this is a placeholder.)
