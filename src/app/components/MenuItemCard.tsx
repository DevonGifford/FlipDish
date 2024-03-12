import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <Link href="/" passHref>
      <article className="flex flex-row w-full justify-between max-h-36 min-h-[90px] py-4 pb-5 gap-2 md:gap-5 border-b  cursor-pointer transition duration-400 hover:scale-99">
        <div className="flex h-20 rounded-lg pb-4">
          {productImageUrl && (
            <Image
              src={productImageUrl}
              alt={`${productName} image`}
              width="100"
              height="200"
              layout="fixed"
              objectFit="cover"
              className="rounded-2xl"
              blurDataURL={productImageUrl}
            />
          )}
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-col w-full grow items-start space-y-1.5">
            <h3 className="font-semibold">{productName}</h3>
            <p className="text-xs text-gray-600 text-start font-light w-4/5">
              {productDescription}
            </p>
          </div>

          <div className="flex-none h-full text-sm font-semibold">
            <div className="flex flex-col h-full w-full justify-between items-center">
              <p>{productPrice.toFixed(2)} €</p>
              <button
                type="button"
                aria-label={`Add ${productName} to cart`}
                className="cursor-pointer transition duration-400 hover:scale-105 "
              >
                <PlusCircleIcon
                  className="bg-blue-900/30 rounded-full translate-x-3 -translate-y-2"
                  size={18}
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MenuItemCard;
