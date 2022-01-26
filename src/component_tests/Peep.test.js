import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Peep from '../components/Peep'
import './testHelpers'

describe('Peep', () => {

  test('user must sign in to post new peep', async () => {
    render(<Peep />)
    userEvent.type(screen.getByPlaceholderText(/What's happening/i), 'Hello World!')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByPlaceholderText(/Sign In/i)).toBeInTheDocument()
  })

  test('user cannot post an empty peep', async () => {
    render(<Peep />)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByPlaceholderText(/write something/i)).toBeInTheDocument()
  })

})

