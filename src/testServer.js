import { rest } from "msw"
import { setupServer } from "msw/node";


const server = setupServer(
  // Create Session / Sign In
  rest.post("https://chitter-backend-api-v2.herokuapp.com/sessions", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({user_id: 835, session_key: '_2a_12_9hRKeEGk6cm4Cod0yWz0U_'}) 
    )
  }),

  // Fetch Feed
  rest.get('https://chitter-backend-api-v2.herokuapp.com/peeps', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(
            [
              {
                "id": 3,
                "body": "let us peep! :)",
                "created_at": "2018-06-23T13:21:23.317Z",
                "updated_at": "2018-06-23T13:21:23.317Z",
                "user": {
                  "id": 1,
                  "handle": "boris"
                },
                "likes": [{
                  "user": {
                    "id": 1,
                    "handle": "bay"
                  }
                }]
              }
            ]
          )
        )
      }),

  rest.post('*', (req, res, ctx) => {
    console.log(`${req.url.toString()} request intercepted, add request handle if necessary`);
    return res(
      ctx.status(200),
      ctx.json({ response: `${req.url.toString()} request intercepted` }) 
    )
  }),

  rest.get('*', (req, res, ctx) => {
    console.log(`${req.url.toString()} request intercepted, add request handle if necessary`);
    return res(
      ctx.status(200),
      ctx.json({ response: `${req.url.toString()} request intercepted` }) 
    )
  }),

);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers()
  localStorage.removeItem('user')
});

export { server, rest }