import { render, screen } from "@testing-library/react";
import Home from "./Home";
test("renders Home component", () => {
  render(<Home />);
  expect(screen.getByText("This is home page")).toBeInTheDocument();
});