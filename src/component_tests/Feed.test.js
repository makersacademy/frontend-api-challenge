import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw"
import { setupServer } from "msw/node";
import Feed from '../components/Feed'

const server = setupServer(
  rest.get("https://chitter-backend-api-v2.herokuapp.com/peeps", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          "id": 3,
          "body": "my first peep :)",
          "created_at": "2018-06-23T13:21:23.317Z",
          "updated_at": "2018-06-23T13:21:23.317Z",
          "user": {
            "id": 1,
            "handle": "kay"
          },
          "likes": [{
            "user": {
              "id": 1,
              "handle": "kay"
            }
          }]
        }
      ]) 
    )
  }),

  rest.get('*', (req, res, ctx) => {
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

describe('Feed', () => {
  test('fetches and displays peeps', async () => {

    render(<Feed />)
    expect(screen.queryByText('my first peep :)')).toBeNull()
    expect(await screen.findByText('my first peep :)')).toBeInTheDocument()
   
  })
})
