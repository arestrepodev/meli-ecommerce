import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home/>)
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
