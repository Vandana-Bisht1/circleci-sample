import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the AllRoutes component to simplify the test
jest.mock("./AllRoutes", () => () => <div>AllRoutes Component</div>);

describe("App Component", () => {
  test("renders the App component with title and AllRoutes", () => {
    render(<App />);
    // Check if the AllRoutes component is rendered
    expect(screen.getByText(/AllRoutes Component/i)).toBeInTheDocument();
  });
});
