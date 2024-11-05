import { Breadcrumb } from '@/components/breadcrumb';
import Search from '@/components/search';
import { ItemProps } from "@/models/item";
import { redirect } from 'next/navigation';
import { Detail } from '@/components/detail';


export async function getItem(id: string): Promise<ItemProps> {
  const response = await fetch(`http://localhost:3001/api/items/${id}`);
  if (response.status === 404) {
    redirect('/404');
  }
  const data = await response.json();
  return data.item;
}

export default async function Item({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = await getItem(id);
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div>
      <Search />
      <Breadcrumb />
      <Detail {...item}/>
    </div>
  );
}


