import styles from './grid.module.css';

interface GridProps {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <section className={styles.grid}>{children}</section>;
};
