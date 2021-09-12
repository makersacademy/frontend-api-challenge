import { render, screen } from "@testing-library/react";
import Feed from "../Feed";

it("should render a refresh feed button", async () => {
  render(<Feed />);
  const refresh = screen.getByText("Refresh feed");
  expect(refresh).toBeInTheDocument();
});

// it("clicking the refresh feed button should return tweets")
// can't find button pls send help
// how to mock api oh no
