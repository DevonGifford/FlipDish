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

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  productName,
  productDescription,
  productImageUrl,
  productPrice,
}) => {
  return (
    <Card className="flex flex-row w-full max-h-36 min-h-[90px] my-2 transition duration-400 hover:scale-95 hover:bg-secondary/80 cursor-pointer">
      <ProductImage>
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <ProgressiveImage
            src={productImageUrl || "/placeholder-image.svg"}
            placeholder=""
          >
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
