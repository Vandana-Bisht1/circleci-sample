import { render, screen } from "@testing-library/react";
import Home from "./Home";
test("renders Main component", () => {
  render(<Home />);
  expect(screen.getByText("This is home page")).toBeInTheDocument();
});