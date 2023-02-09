import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import { AspectRatio } from "./ui/aspect-ratio";
import LoadingSpinner from "./ui/spinner";
import {
  Card,
  ProductInformation,
  ProductImage,
  ProductPrice,
} from "./ui/card";

interface MenuItemCardProps {
  productKey: string;
  productName: string;
  productDescription: string;
  productImageUrl: string | null;
  productPrice: number;
}

import placeholderImage from "./../assets/placeholder-image.svg";

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  productName,
  productDescription,
  productImageUrl,
  productPrice,
}) => {
  return (
    <Card className="flex flex-row w-full max-h-40 min-h-[90px] my-2 transition duration-400 hover:scale-105 hover:bg-secondary/80 cursor-pointer">
      <ProductImage>
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <ProgressiveImage src={productImageUrl || placeholderImage} placeholder="">
            {(src, loading) => {
              return loading ? (
                <div>
                  <LoadingSpinner />
                </div>
              ) : (
                <img
                  className={`image${loading ? " loading" : " loaded"}`}
                  src={src}
                  alt={productName}
                />
              );
            }}
          </ProgressiveImage>
        </AspectRatio>
      </ProductImage>

      <ProductInformation>
        <span className="font-semibold md:text-3xl">{productName}</span>
        <span className="hidden md:inline-block text-xs text-gray-600 font-light md:text-sm md:px-5">
          {productDescription}
        </span>
      </ProductInformation>

      <ProductPrice>€{productPrice.toFixed(2)}</ProductPrice>
    </Card>
  );
};

export default MenuItemCard;


// 🎯 You should copy the code format of exisitng websites that have proffessionals designing the UI
// 🎯 -  the cards come accross too large and 
// 🎯 -  doesn't have a modern/proffessional feel to it. 
// 🎯 -  the hovering effect should have less of a scale diff.