"use client";
import { Breadcrumb } from '@/components/breadcrumb';
import { Grid } from '@/components/grid';
import { Item } from '@/components/Item';
import Search from '@/components/search';
import { ItemProps } from '@/models/item';
import { useEffect, useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<ItemProps[]>([]);
  const author = { name: "Arnold", lastname: "Restrepo" };


  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:3001/api/search?q=${search}&name=${author.name}&lastname=${author.lastname}`);
      const data = await response.json();
      setItems(data?.items);
    };
    fetchItems();
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      <Breadcrumb />
      <Grid>
        {
          items.length > 0 ? (
            items.map((item) => (
              <Item key={item.id} {...item} />
            ))
          ) : (
            <p>No items found</p>
          )
        }
      </Grid>
  
    </div>
  );
}
