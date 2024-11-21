import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { useTheme } from "../contexts/ThemeContext";

// Mock the useTheme hook
jest.mock('../contexts/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

describe("Home Page", () => {
  it("renders the Home page correctly", () => {
    // Mock the toggleMode function
    const toggleModeMock = jest.fn();

    // Provide mock implementation for useTheme
    (useTheme as jest.Mock).mockReturnValue({ toggleMode: toggleModeMock });

    render(<Home />);

    // Assert that the "Home" heading is rendered
    const heading = screen.getByRole("heading", { name: /Home/i });
    expect(heading).toBeInTheDocument();

    // Assert that the ToggleBtn is rendered
    const toggleBtn = screen.getByTestId("toggle-btn"); // Ensure `ToggleBtn` has `data-testid="toggle-btn"`
    expect(toggleBtn).toBeInTheDocument();
  });
});
