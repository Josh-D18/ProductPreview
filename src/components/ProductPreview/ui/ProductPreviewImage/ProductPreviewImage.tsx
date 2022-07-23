import React from "react";
// @ts-ignore
import productImage from "../../../../assets/images/image-product-mobile.jpg";
// @ts-ignore
import productImageDesktop from "../../../../assets/images/image-product-desktop.jpg";

const ProductPreviewImage = () => {
  return (
    <div className="w-[343px] h-[240px]">
      <img
        src={productImage}
        alt="product"
        className="bg-white rounded-[10px]"
      />
    </div>
  );
};

export default ProductPreviewImage;
