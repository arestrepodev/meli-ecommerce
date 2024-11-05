// __tests__/components/Search.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '@/components/search';
import '@testing-library/jest-dom';
import { redirect } from 'next/navigation';

// Mock de next/navigation
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('Search Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input', () => {
    render(<Search />);
    
    expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
  });

  it('submits a basic search query', async () => {
    const user = userEvent.setup();
    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, 'test search');
    await user.keyboard('{Enter}');

    expect(redirect).toHaveBeenCalledWith(
      '/items?search=test%20search&name=Arnold&lastname=Restrepo'
    );
  });

  it('trims whitespace from search query', async () => {
    const user = userEvent.setup();
    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, '  test search  ');
    await user.keyboard('{Enter}');

    expect(redirect).toHaveBeenCalledWith(
      '/items?search=test%20search&name=Arnold&lastname=Restrepo'
    );
  });

  it('handles special characters in search query', async () => {
    const user = userEvent.setup();
    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, 'test & search');
    await user.keyboard('{Enter}');

    expect(redirect).toHaveBeenCalledWith(
      '/items?search=test%20%26%20search&name=Arnold&lastname=Restrepo'
    );
  });

  it('prevents empty search submission', async () => {
    const user = userEvent.setup();
    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, '   ');
    await user.keyboard('{Enter}');

    expect(redirect).not.toHaveBeenCalled();
  });
});