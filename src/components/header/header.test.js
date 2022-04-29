import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import Header from './Header';

describe('Header Component', () => {
  it('renders the main title for the header', () => {
    render(<Header />);

    const titleHeading = screen.getByText(/awesome astronomy pod app/i);

    expect(titleHeading).toBeInTheDocument();
  });
});