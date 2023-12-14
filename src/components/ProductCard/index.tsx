import React from "react";
import Styles from "./index.module.css";

interface ProductCardProps {
  image: string;
  name: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, id }) => {
  return (
    <div className={Styles.productCard}>
      <img src={image} alt={name} className={Styles.productImage} />
      <h3 className={Styles.productName}>{name}</h3>
      <p className={Styles.productId}>{id}</p>
    </div>
  );
};

export default ProductCard;
