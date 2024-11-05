import { renderHook, act } from '@testing-library/react';
import useFetchItems from '@/hooks/useFetchItems';

// Mock fetch globally
global.fetch = jest.fn();

describe('useFetchItems', () => {
  const mockAuthor = { name: 'John', lastname: 'Doe' };
  const mockSearch = 'test';
  const mockItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch items successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ items: mockItems }),
    });

    const { result } = renderHook(() => useFetchItems(mockSearch, mockAuthor));

    expect(result.current.loading).toBe(true);
    expect(result.current.items).toEqual([]);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.items).toEqual(mockItems);
    expect(result.current.error).toBe(null);

    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:3001/api/search?q=${mockSearch}&name=${mockAuthor.name}&lastname=${mockAuthor.lastname}`
    );
  });

  it('should handle fetch error', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    const { result } = renderHook(() => useFetchItems(mockSearch, mockAuthor));

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.items).toEqual([]);
    expect(result.current.error).toBe('Fetch failed');
  });

  it('should handle non-ok response', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });


    const { result } = renderHook(() => useFetchItems(mockSearch, mockAuthor));

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.items).toEqual([]);
    expect(result.current.error).toBe('Error fetching items');
  });

  it('should limit items to 4', async () => {
    const manyItems = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
    }));

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ items: manyItems }),
    });

    const { result } = renderHook(() => useFetchItems(mockSearch, mockAuthor));

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.items.length).toBe(4);
    expect(result.current.items).toEqual(manyItems.slice(0, 4));
  });

  it('should not fetch if search is blank space', async () => {
    renderHook(() => useFetchItems(' ', mockAuthor));

    expect(global.fetch).not.toHaveBeenCalled();
  });
});