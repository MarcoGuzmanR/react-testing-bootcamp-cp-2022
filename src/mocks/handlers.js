import { rest } from 'msw';

import { mockImage } from './data';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(mockImage)
      )
  }),
];
