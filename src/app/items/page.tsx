"use client";
import { Breadcrumb } from '@/components/breadcrumb';
import Empty from '@/components/empty';
import { Grid } from '@/components/grid';
import { Item } from '@/components/Item';
import Error from '@/components/error';
import Loading from '@/components/loading';
import Search from '@/components/search';
import useFetchItems from '@/hooks/useFetchItems';
import { ItemProps } from '@/models/item';
import { useSearchParams } from 'next/navigation'

export default function Items() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const author = { name: "Arnold", lastname: "Restrepo" };

  const { items, loading, error } = useFetchItems(search, author);

  return (
    <div>
      <Search />
      {items.length > 0 && <Breadcrumb />}
      {loading && <Loading />}
      {error && <Error message={error} />}
      {items.length === 0 && ( <Empty /> )}
      <Grid>
        {items.map((item: ItemProps) => (
          <Item key={item.id} {...item} />
        ))}
      </Grid>
    </div>
  );
}
