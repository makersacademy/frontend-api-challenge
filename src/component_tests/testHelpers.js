import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const signIn = () => {
  userEvent.click(screen.getByText(/Log In/i))
  userEvent.type(screen.getByLabelText(/Username/i), 'jaskier')
  userEvent.type(screen.getByLabelText(/Password/i), 'beremy')
  userEvent.click(screen.getByRole(/button/i))
}

export default signIn