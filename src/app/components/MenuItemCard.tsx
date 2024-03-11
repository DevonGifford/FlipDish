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
    <article className="gap-3 lg:gap-5 rounded-xl border bg-card text-card-foreground shadow flex flex-row w-full max-h-36 min-h-[150px] my-2 transition duration-400 hover:bg-gray-100 cursor-pointer">
      {productImageUrl && (
        <Image
          src={productImageUrl}
          alt={productDescription}
          height="100"
          width="220"
          objectFit="cover"
        />
      )}

      <div className="flex grow flex-col justify-center w-fill">
        <h3 className="font-semibold md:text-3xl">{productName}</h3>
        <p className="hidden md:inline-block text-xs text-gray-600 font-light md:text-sm md:px-5">
          {productDescription}
        </p>
      </div>

      <div className="text-xs md:text-2xl font-semibold justify-center rounded-md rounded-l-none">
        €{productPrice.toFixed(2)}
      </div>
    </article>
  );
};

export default MenuItemCard;
