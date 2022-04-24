import { rest } from 'msw';

import { photo } from './data';

export const handlers = [
  rest.get('/api.nasa.gov/planetary/apod', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(photo),
      )
  }),
];
