import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import DateSelection from './dateSelection';

it('renders the input and the show button', () => {
  render(<DateSelection />);

  const dateInput = screen.getByLabelText(/date/i);
  const showBtn = screen.getByText(/show/i);

  expect(dateInput).toBeInTheDocument();
  expect(showBtn).toBeInTheDocument();
});
