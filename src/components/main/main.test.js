import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Main from './main';

import { photo } from '../../mocks/data';

const setup = () => render(<Main />);

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

  const photoTitle = screen.getByText(photo.title);
  const photoDate = screen.getByText(photo.date);
  const photoExplanation = screen.getByText(photo.explanation);

  expect(photoTitle).toBeInTheDocument();
  expect(photoDate).toBeInTheDocument();
  expect(photoExplanation).toBeInTheDocument();
});

it('shows the Picture of the Day when entering a previous date', async () => {
  setup();

  const dateInput = screen.getByLabelText(/date/i);
  const showBtn = screen.getByText(/show/i);

  await userEvent.type(dateInput, '2022-04-24');
  await userEvent.click(showBtn);

  expect(dateInput).toHaveValue('2022-04-24');
  expect(showBtn).toBeInTheDocument();
});

it.todo('shows an error message when the API call fails');

it.todo('shows an error message when there is an invalid date');