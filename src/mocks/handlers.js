import { rest } from 'msw';

import { unParseDate } from '../utils/parseDate';
import {
  mockImage,
  otherMockImage,
  wrongDateImage
} from './data';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    if (req.url.searchParams.get('date')) {
      const date = unParseDate(req.url.searchParams.get('date'));

      if (date > new Date()) {
        return res(
          ctx.status(400),
          ctx.json(wrongDateImage)
        );
      }

      return res(
        ctx.status(200),
        ctx.json(otherMockImage)
      );
    }

    return res(
      ctx.status(200),
      ctx.json(mockImage)
    );
  }),
];
