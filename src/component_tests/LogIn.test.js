import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogIn from "../components/LogIn";

describe("LogIn", () => {

  test("renders Sign In form by default", () => {
    render(<LogIn />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Sign In/i);
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/Sign In/i);
  });

  test("allows user to toggle between 'Sign In' and 'Sign Up' forms", () => {
    render(<LogIn />);
    // loads sign in by default
    expect(screen.getByRole("heading")).toHaveTextContent(/Sign In/i);
    // user clicks sign up
    userEvent.click(screen.getByText(/Sign Up/i))
    expect(screen.getByRole("heading")).toHaveTextContent(/Sign Up/i);
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/Create Account/i);
    // user clicks sign in
    userEvent.click(screen.getByText(/Sign In/i))
    expect(screen.getByRole("heading")).toHaveTextContent(/Sign In/i);
  });

});









