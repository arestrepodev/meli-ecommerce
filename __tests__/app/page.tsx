import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a Search component', () => {
    render(<Home />);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});