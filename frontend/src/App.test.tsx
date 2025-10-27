import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock WebSocket
global.WebSocket = jest.fn();

describe('App', () => {
  beforeEach(() => {
    (global.WebSocket as jest.Mock).mockClear();
  });

  test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText('httpx GUI')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter httpx command')).toBeInTheDocument();
    expect(screen.getByText('Run')).toBeInTheDocument();
  });

  test('runs a command when the Run button is clicked', () => {
    const mockSend = jest.fn();
    const mockClose = jest.fn();
    (global.WebSocket as jest.Mock).mockImplementation(() => ({
      send: mockSend,
      close: mockClose,
      onopen: jest.fn(),
      onmessage: jest.fn(),
      onerror: jest.fn(),
      onclose: jest.fn(),
    }));

    render(<App />);
    const input = screen.getByPlaceholderText('Enter httpx command');
    const runButton = screen.getByText('Run');

    fireEvent.change(input, { target: { value: 'httpx -u example.com' } });
    fireEvent.click(runButton);

    expect(global.WebSocket).toHaveBeenCalledWith('ws://localhost:8000/ws');
    const socketInstance = (global.WebSocket as jest.Mock).mock.results[0].value;
    socketInstance.onopen();
    expect(socketInstance.send).toHaveBeenCalledWith('httpx -u example.com');
  });
});