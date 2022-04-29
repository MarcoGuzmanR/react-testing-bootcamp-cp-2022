import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import ImageContainer from './imageContainer';

import { mockImage } from '../../../mocks/data';

describe('ImageContainer Component', () => {
  it('renders the image, the date, and the title', () => {
    render(
      <ImageContainer
        date={mockImage.date}
        imageUrl={mockImage.url}
        title={mockImage.title}
      />
    );

    const photoTitle = screen.getByText(mockImage.title);
    const photoDate = screen.getByText(mockImage.date);

    expect(photoTitle).toBeInTheDocument();
    expect(photoDate).toBeInTheDocument();
  });
});
