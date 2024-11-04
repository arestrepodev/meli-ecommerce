"use client";
import Search from '@/components/search';
import { redirect } from 'next/navigation'
export default function Home() {
  const author = { name: "Arnold", lastname: "Restrepo" };

  const handleSearch = (search: string) => {
    redirect(`/items?search=${search}&name=${author.name}&lastname=${author.lastname}`);
  };

  return (
    <div>
      <Search setSearch={handleSearch} />
    </div>
  );
}
