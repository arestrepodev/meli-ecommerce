import styles from './loading.module.css';

export default function Loading() {
  return <div className={styles.loading}>
    <p className={styles.loadingText}>Loading...</p>
  </div>;
}
