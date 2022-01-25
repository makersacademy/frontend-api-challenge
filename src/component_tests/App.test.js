import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw"
import { setupServer } from "msw/node";
import App from "../components/App";
import signIn from "./testHelpers";

const server = setupServer(
  rest.post("https://chitter-backend-api-v2.herokuapp.com/sessions", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({user_id: 835, session_key: '_2a_12_9hRKeEGk6cm4Cod0yWz0U_'}) 
    )
  }),

  rest.post('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" }) 
    )
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers()
  console.log('clearing local storage...')
  localStorage.removeItem('user')
});

describe("App", () => {

  test.todo('user can sign up')

  test('user can sign in', async () => {
    render(<App />);
    signIn()
    await waitFor(() => expect(screen.getByTestId('user')).toHaveTextContent('jaskier'))

  })

  test('user can sign out', async () => {
    render(<App />);
    signIn()
    userEvent.click(await screen.findByText('Sign Out'))
    expect(screen.getByTestId('user')).toHaveTextContent('Log In')
  })

  test('user can post peep', async () => {
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
              }]}
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
    expect(await screen.findByText(/Hi Planet!/i)).toBeInTheDocument()
  
  })


});

// Sign Up Test
// Refactor test api calls
// Put CSS in separate folder
// --detectOpenHandles
// ReadMe
// keep pic on reload
// Host on Vercel





