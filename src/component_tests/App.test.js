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
afterEach(() => server.resetHandlers());

describe("App", () => {

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

});







