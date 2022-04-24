import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import Main from './Main';

it('renders the title', () => {
  render(<Main />);

  const titleHeading = screen.getByText(/awesome astronomy pod app/i);

  expect(titleHeading).toBeInTheDocument();
});

it('renders the footer', () => {
  render(<Main />);

  const footerText = screen.getByText(/project created during wizeline academy react testing bootcamp/i);

  expect(footerText).toBeInTheDocument();
});