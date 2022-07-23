import React from "react";
// @ts-ignore
import styles from "./ProductPreviewText.module.css";
// @ts-ignore
import { ReactComponent as CartIcon } from "../../../../assets/images/icon-cart.svg";

const ProductPreviewText = () => {
  return (
    <div className="flex flex-col bg-white p-[20px] text-left md:gap-[7px] md:py-4 rounded-b-[10px] md:rounded-bl-[0px] md:rounded-r-[10px] ">
      <h1 className={styles["product-type"]}>Perfume</h1>
      <p className={styles["product-title"]}>Gabrielle Essence Eau De Parfum</p>
      <p className={styles["product-description"]}>
        A floral, solar and voluptuous<br></br> interpretation composed by
        Olivier<br></br> Polge, Perfumer-Creator for the House of CHANEL.
      </p>
      <div className={styles["product-price-container"]}>
        <p className={styles["product-price-discount"]}>$149.99</p>
        <p className={styles["product-price-regular"]}>$169.99</p>
      </div>
      <button className={styles["product-button"]}>
        <CartIcon />
        <span className={styles["product-button-text"]}>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductPreviewText;
