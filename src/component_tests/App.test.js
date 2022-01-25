import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import signIn from "./testHelpers";
import { server, rest } from '../testServer'

// Test behaviours that span multiple App components

describe("App", () => {

  test('user can sign in', async () => {
    render(<App />);
    signIn()
    await waitFor(() => expect(screen.getByTestId('user')).toHaveTextContent('jaskier'))
  })

  test('user can sign up', async () => {
    server.use(
      rest.post('https://chitter-backend-api-v2.herokuapp.com/users', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(
            {"user": {"handle":"jeremy", "password":"yourpassword"}}
          )
        )
      })
    )
    render(<App />)
    userEvent.click(screen.getByText(/Log In/i))
    userEvent.click(screen.getByText(/Sign Up/i))
    userEvent.type(screen.getByLabelText(/Username/i), 'james')
    userEvent.type(screen.getByLabelText("Password"), 'yourpassword')
    userEvent.type(screen.getByLabelText("Confirm Password"), 'yourpassword')
    userEvent.click(screen.getByRole(/button/i))
    expect(await screen.findByText(/Registration Successful/i)).toBeInTheDocument() 
  })

  test('user can sign out', async () => {
    render(<App />);
    signIn()
    userEvent.click(await screen.findByText('Sign Out'))
    expect(screen.getByTestId('user')).toHaveTextContent('Log In')
  })

  test('user can post peep and is redirected to feed', async () => {
    server.use(
      rest.post('https://chitter-backend-api-v2.herokuapp.com/peeps', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(
            {
              "id": 3,
              "body": "Hi Planet! :)",
              "created_at": "2018-06-23T13:21:23.317Z",
              "updated_at": "2018-06-23T13:21:23.317Z",
              "user": {
                "id": 1,
                "handle": "jaskier"
              },
              "likes": [{
                "user": {
                  "id": 1,
                  "handle": "kay"
                }
            } ]}
          ) 
        )
      })
    )

    render(<App />)
    signIn()
    expect(await screen.findByText('Sign Out')).toBeInTheDocument()
    userEvent.click(await screen.findByText(/Peep/i))
    expect(screen.getByTestId('user')).toHaveTextContent('jaskier')
    userEvent.type(screen.getByPlaceholderText(/What's happening/i), 'Hi Planet!')
    userEvent.click(screen.getByRole('button'))
    await waitForElementToBeRemoved(() => screen.queryByRole('button'))
    expect(await screen.findByText(/let us peep!/i)).toBeInTheDocument()
  })

});


// ReadMe
// Host on Vercel





