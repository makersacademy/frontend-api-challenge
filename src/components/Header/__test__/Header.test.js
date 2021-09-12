import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same test passed into title prop", async () => {
  render(<Header title="Testing header" />);
  const headingElement = screen.getByText(/Testing header/i);
  expect(headingElement).toBeInTheDocument();
});
