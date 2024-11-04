import styles from "./search.module.css";
import Image from "next/image";
import { SearchProps } from "@/models/search";

const Search = ({ setSearch }: SearchProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.search.value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/images/Logo_ML@2x.png" alt="logo" width={53} height={36} priority/>
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
