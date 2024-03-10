import Image from "next/image";

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
    <div className="gap-3 lg:gap-5 rounded-xl border bg-card text-card-foreground shadow flex flex-row w-full max-h-36 min-h-[150px] my-2 transition duration-400 hover:bg-gray-100 cursor-pointer">
      <div className="flex grow flex-col justify-center w-fill">
        <span className="font-semibold md:text-3xl">{productName}</span>
        <span className="hidden md:inline-block text-xs text-gray-600 font-light md:text-sm md:px-5">
          {productDescription}
        </span>
        <div className="text-xs md:text-2xl font-semibold justify-center rounded-md rounded-l-none">
          €{productPrice.toFixed(2)}
        </div>
      </div>

      {productImageUrl && (
        <Image
          src={productImageUrl}
          alt={productDescription}
          height="100"
          width="200"
          objectFit="cover"
        />
      )}
    </div>
  );
};

export default MenuItemCard;
