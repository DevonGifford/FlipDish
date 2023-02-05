import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Card,
  ProductInformation,
  ProductImage,
  ProductPrice,
} from "./ui/card";

interface MenuItemCardPropsTakeTwo {
  productKey: string;
  productName: string;
  productDescription: string;
  productImageUrl: string | null;
  productPrice: number;
}

const MenuItemCardNEWVERSION: React.FC<MenuItemCardPropsTakeTwo> = (props) => {
  const { productName, productDescription, productImageUrl, productPrice } = props;
  
  // 🎯 MANAGE THE PRICE BETTER

  // 🎯 FUNCTION TO HANDLE PLACEHOLDER IMAGE INCASE OF NO IMAGE URL/DATA

  return (
    <Card className="flex flex-row w-full max-h-40 min-h-[90px] my-2">

      <ProductImage>
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          {/* 🎯 HANDLE NO IMAGE URL */}
          <img src={productImageUrl!} alt={productName} />
        </AspectRatio>
      </ProductImage>

      <ProductInformation>
        <span className="font-semibold md:text-3xl">
          {productName}
        </span>
        <span className="text-xs text-gray-600 font-light md:text-sm md:px-5">
          {productDescription}
        </span>
      </ProductInformation>

      <ProductPrice>€{productPrice}</ProductPrice>

    </Card>
  );
};

export default MenuItemCardNEWVERSION;
