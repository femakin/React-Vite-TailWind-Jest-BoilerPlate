import { render, screen, fireEvent } from '@testing-library/react';
import ToggleBtn from '../components/ToggleBtn'; // Ensure the correct import path
import { useTheme } from '../contexts/ThemeContext';

// Mock the `useTheme` function
jest.mock('../contexts/ThemeContext', () => ({
  useTheme: jest.fn(), // Use a mock implementation for the context
}));

describe('ToggleBtn Component', () => {
  it('renders the button correctly', () => {
    const mockToggleMode = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      toggleMode: mockToggleMode,
    });

    render(<ToggleBtn />);

    // Check if the button is in the document
    const toggleButton = screen.getByTestId('toggle-btn');
    expect(toggleButton).toBeInTheDocument();

    // Check if the aria-label is set
    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle Theme');
  });

  it('calls toggleMode when clicked', () => {
    const mockToggleMode = jest.fn(); // Create a mock function

    // Mock the `useTheme` return value
    (useTheme as jest.Mock).mockReturnValue({
      toggleMode: mockToggleMode,
    });

    render(<ToggleBtn />);

    // Get the button element
    const toggleButton = screen.getByTestId('toggle-btn');

    // Simulate a click event
    fireEvent.click(toggleButton);

    // Verify if the mock function was called
    expect(mockToggleMode).toHaveBeenCalledTimes(1);
  });
});
