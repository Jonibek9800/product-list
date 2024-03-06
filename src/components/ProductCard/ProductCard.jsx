import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productCardImg}
        src={product.image}
        alt={product.title}
      />
      <h3 className={styles.productCardName}>{product.title}</h3>
    </div>
  );
};

export default ProductCard;
