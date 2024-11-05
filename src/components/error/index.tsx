import styles from './error.module.css';

export default function Error({ message }: { message: string | null }) {
  return <div className={styles.error}>
    <p className={styles.errorText}>Error {message || ''}</p>
  </div>;
}
