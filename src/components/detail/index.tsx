import styles from './detail.module.css';
import { ItemProps } from '@/models/item';
import Image from 'next/image';

export const Detail: React.FC<ItemProps> = (props) => {
  const { picture, title, description, condition, price } = props;
  return <section className={styles.detail}>
    <div>
      <Image src={picture} alt={title} width={180} height={180} className={styles.detailImage} priority/>
    </div>
    <div className={styles.detailInfo}>
      <span className={styles.detailCondition}>{condition.toUpperCase()} - 256 vendidos</span>
      <h1 className={styles.detailTitle}>{title}</h1>
      <h2 className={styles.detailPrice}>
        <span>{price?.amount}</span><span>{price?.decimals}</span>
        <span className={styles.detailCurrency}>{price?.currency} </span>
      </h2>
      <button className={styles.detailButton}>Comprar</button>
    </div>
    <div className={styles.detailDescription}>
      <h2 className={styles.detailDescriptionTitle}>Descripción del producto</h2>
      <p className={styles.detailDescriptionText}>{description}</p>
    </div>
  </section>;
};
