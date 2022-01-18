import { render, screen, cleanup } from "@testing-library/react";
import Feed from '../components/Feed'


test("should render todo component", () => {
  render(<Feed />)
    const feedElement = screen.getByTestId('feed');
    expect(feedElement).toBeInTheDocument();
    expect(feedElement).toHaveTextContent('Feed')
});