'use client';
import { formatSearchQuery, AUTHOR } from '@/utils';
import styles from "./search.module.css";
import Image from "next/image";
import Link from 'next/link';
import { redirect } from 'next/navigation';


const Search = () => {

  const handleSearch = (search: string) => {
    const formattedSearch = formatSearchQuery(search);
    if (formattedSearch) {
      redirect(`/items?search=${formattedSearch}&name=${AUTHOR.name}&lastname=${AUTHOR.lastname}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchInput = form.querySelector('input[name="search"]') as HTMLInputElement;
    const searchValue = searchInput?.value || '';
    handleSearch(searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Image src="/images/Logo_ML@2x.png" alt="logo" width={53} height={36} priority/>
        </Link>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.searchInput} type="text" placeholder="Nunca dejes de buscar" name='search' data-testid="search-input"/>
          <button type="submit" className={styles.searchButton}>
            <Image src="/images/ic_Search@2x.png" alt="search" width={18} height={18} priority/>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Search;
