import React from "react";
// @ts-ignore
import ProductPreviewImage from "./ui/ProductPreviewImage/ProductPreviewImage.tsx";
// @ts-ignore
import ProductPreviewText from "./ui/ProductPreviewText/ProductPreviewText.tsx";

const ProductPreview = () => {
  return (
    <div className="grid justify-center w-[375px] my-5 md:flex md:w-[600px] m-[0_auto]">
      <ProductPreviewImage />
      <ProductPreviewText />
    </div>
  );
};

export default ProductPreview;
