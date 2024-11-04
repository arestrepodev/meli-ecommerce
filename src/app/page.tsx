"use client";
import Search from '@/components/search';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Search setSearch={setSearch}/>
    </div>
  );
}
