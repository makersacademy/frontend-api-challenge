import { render, screen } from "@testing-library/react";
import ListPeeps from "../ListPeeps";

const MockList = ({ feed }) => {
  return <ListPeeps feed={feed} />;
};

it("should render all peeps", async () => {
  render(<MockList feed={["Hello!", "This is a test!"]}></MockList>);
  const peep1 = screen.getByText(/Hello!/i);
  expect(peep1).toBeInTheDocument();
  const peep2 = screen.getByText(/This is a test!/i);
  expect(peep2).toBeInTheDocument();
});

// it("should render all like buttons", async () => {
//   render(<MockList feed={["Hello!", "This is a test!"]}></MockList>);
// });
