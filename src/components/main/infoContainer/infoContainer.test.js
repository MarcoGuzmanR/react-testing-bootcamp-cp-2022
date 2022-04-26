import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import InfoContainer from '../infoContainer';

import { mockImage } from '../../../mocks/data';

it('renders the explanation of the image', () => {
  render(
    <InfoContainer explanation={mockImage.explanation} />
  );

  const photoExplanation = screen.getByText(mockImage.explanation);

  expect(photoExplanation).toBeInTheDocument();
});