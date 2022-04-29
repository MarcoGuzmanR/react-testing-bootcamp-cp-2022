import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import DateSelection from './dateSelection';

const handleOnChange = jest.fn();
const handleOnClick = jest.fn();

const setup = () => render(
  <DateSelection handleOnChange={handleOnChange} handleOnClick={handleOnClick}/>
);

describe(('DateSelection Component'), () => {
  it('renders the input and the show button', () => {
    setup();

    const dateInput = screen.getByLabelText(/date/i);
    const showBtn = screen.getByText(/show/i);

    expect(dateInput).toBeInTheDocument();
    expect(showBtn).toBeInTheDocument();
  });

  it('calls the onClick function', async () => {
    setup();

    const showBtn = screen.getByText(/show/i);
    await userEvent.click(showBtn);

    expect(handleOnClick).toBeCalled();
  });
});
