import React, { useEffect, useState, useMemo } from "react";
// @ts-ignore
import productImage from "../../../../assets/images/image-product-mobile.jpg";
// @ts-ignore
import productImageDesktop from "../../../../assets/images/image-product-desktop.jpg";

const ProductPreviewImage = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="w-[343px] h-[240px]  md:w-[300px] md:h-[450px] md:mb-0 transition-all duration-500">
      {width! < 768 ? (
        <img
          alt="product"
          className="bg-white rounded-t-[10px] h-full md:rounded-l-[10px] md:rounded-tr-[0px] w-full md:h-full"
          src={productImage}
        />
      ) : (
        <img
          alt="product"
          className="bg-white rounded-t-[10px] h-full md:rounded-l-[10px] md:rounded-tr-[0px] w-full md:h-full"
          src={productImageDesktop}
        />
      )}
    </div>
  );
};

export default ProductPreviewImage;
