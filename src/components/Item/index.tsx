import styles from './item.module.css';
import { ItemProps } from "@/models/item";
import Image from "next/image";
import Link from "next/link";

export const Item: React.FC<ItemProps> = (props) => {
  const { id, title, price, picture, condition, free_shipping } = props;
  return (
    <Link href={`/items/${id}`} id={id} className={styles.itemLink}>
    <article id={id} className={styles.item}>
      <Image src={picture} alt={title} width={180} height={180} className={styles.itemImage} priority/>
      <div className={styles.itemTitleContainer}>
        <h1 className={styles.itemPrice}>
          {price.amount}
          {free_shipping && <Image src="/images/ic_shipping@2x.png" alt="Envío gratis" width={18} height={18} />}
        </h1>
        <p className={styles.itemTitle}>{title}</p>
      </div>
      <div className={styles.itemConditionContainer}>
        <p>{condition}</p>
      </div>
      </article>
    </Link>
  )
}