import { render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { server } from '../../mocks/server';
import Main from './main';

import { mockImage, otherMockImage } from '../../mocks/data';

const setup = () => render(<Main />);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(('Main Component'), () => {
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

  it.todo('shows an error message when the API call fails');

  it.todo('shows an error message when there is an invalid date');
});