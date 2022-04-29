import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer with its content', () => {
    render(<Footer />);

    const footerText = screen.getByText(/project created during wizeline academy react testing bootcamp/i);

    expect(footerText).toBeInTheDocument();
  });
});