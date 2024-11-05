import styles from './empty.module.css';

export default function Empty() {
  return <div className={styles.empty}>
    <p className={styles.emptyText}>¡Desde lo esencial hasta lo inesperado, encuentra lo que buscas aquí! 🚀</p>
    <p className={styles.emptyText}>Usa el buscador para encontrar productos ☝️</p>
  </div>;
}
