import { ItemProps } from '@/models/item';
import { useState, useEffect } from 'react';

const useFetchItems = (search: string, author: { name: string, lastname: string }) => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/search?q=${search}&name=${author.name}&lastname=${author.lastname}`);
        if (!response.ok) {
          throw new Error('Error fetching items');
        }
        const data = await response.json();
        const items = data?.items.slice(0, 4);
        setItems(items || []);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        setError(errorMessage || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (search !== ' ') fetchItems();
  }, [search]);

  return { items, loading, error };
};

export default useFetchItems;
