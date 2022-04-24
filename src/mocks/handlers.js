import { rest } from 'msw';

export const handlers = [
  rest.get('/api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
          apod: 'bla',
        }),
      )
  }),
];
