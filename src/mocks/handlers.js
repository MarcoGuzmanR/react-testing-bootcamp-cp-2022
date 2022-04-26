import { rest } from 'msw';

import { mockImage, otherMockImage } from './data';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    const mockResponse = req.url.searchParams.get('date') ? otherMockImage : mockImage;

    return res(
        ctx.status(200),
        ctx.json(mockResponse)
      )
  }),
];
