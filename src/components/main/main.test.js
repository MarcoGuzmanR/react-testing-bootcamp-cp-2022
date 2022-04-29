import { rest } from 'msw';
import { render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { server } from '../../mocks/server';
import { mockServerError } from '../../mocks/data';
import { parseDate } from '../../utils/parseDate';
import Main from './main';

import { mockImage, otherMockImage } from '../../mocks/data';

const setup = () => render(<Main />);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(('Main Component'), () => {
  describe('Success', () => {
    it('renders the title', () => {
      setup();

      const titleHeading = screen.getByText(/awesome astronomy pod app/i);

      expect(titleHeading).toBeInTheDocument();
    });

    it('renders the footer', () => {
      setup();

      const footerText = screen.getByText(/project created during wizeline academy react testing bootcamp/i);

      expect(footerText).toBeInTheDocument();
    });

    it('shows the Picture of the Day by default', async () => {
      setup();

      await waitFor(() => {
        const imageTitle = screen.getByText(mockImage.title);

        expect(imageTitle).toBeInTheDocument();
      });
    });

    it('shows the Picture of the Day when entering a previous date', async () => {
      setup();

      const dateInput = screen.getByLabelText(/date/i);
      const showBtn = screen.getByText(/show/i);

      await userEvent.type(dateInput, '2022-04-23');
      await userEvent.click(showBtn);

      expect(dateInput).toHaveValue('2022-04-23');
      expect(showBtn).toBeInTheDocument();

      await waitFor(() => {
        const imageTitle = screen.getByText(otherMockImage.title);

        expect(imageTitle).toBeInTheDocument();
      });
    });
  });

  describe('Errors', () => {
    it('renders error when the API call fails', async () => {
      server.use(
        rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json(mockServerError)
          );
        })
      );

      setup();

      await waitFor(() => {
        const errorText = screen.getByText(/there was an error, please try again./i);

        expect(errorText).toBeInTheDocument();
      });

    });

    it('renders error when there is a date one year ahead', async () => {
      setup();

      const dateOneYearAhead = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

      const dateInput = screen.getByLabelText(/date/i);
      const showBtn = screen.getByText(/show/i);

      await userEvent.type(dateInput, parseDate(dateOneYearAhead));
      await userEvent.click(showBtn);

      await waitFor(() => {
        const errorText = screen.getByText(/date must be between Jun 16, 1995 and Apr 26, 2022./i);

        expect(errorText).toBeInTheDocument();
      });
    });

    it('renders error when there is a wrong date', async () => {
      setup();

      const dateInput = screen.getByLabelText(/date/i);
      const showBtn = screen.getByText(/show/i);

      await userEvent.type(dateInput, 'abcde');
      await userEvent.click(showBtn);

      await waitFor(() => {
        const errorText = screen.getByText(/time data 'abcde' does not match format '%Y-%m-%d'/i);

        expect(errorText).toBeInTheDocument();
      });
    });

  });
});