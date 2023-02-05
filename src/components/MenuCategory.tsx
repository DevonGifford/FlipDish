import MenuItemCard from "./MenuItemCard";
import { MenuSection } from "../lib/types";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader } from "./ui/card";

interface MenuCategoryProps {
  section: MenuSection;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ section }) => {
  // 🎯 MANAGE THE PRICE BETTER

  //👇 Conditional check & render for if IsMaterOptionSet
  const menuItemsToRender = section.MenuItems.flatMap((menuItem) => {
    
    const { Price, PublicId, Name, Description, ImageUrl, MenuItemOptionSets } = menuItem;

    const checkMasterToggle = MenuItemOptionSets.find((option) => option.IsMasterOptionSet);

    if (checkMasterToggle) {
      return checkMasterToggle.MenuItemOptionSetItems.map((option) => (
        <MenuItemCard
          key={option.PublicId}
          productKey={PublicId}
          productName={`${Name} ~ ${option.Name}`}
          productDescription={Description || ""}
          productImageUrl={ImageUrl || ""}
          productPrice={option.Price || Price}
        />
      ));
    }
    return (
      <MenuItemCard
        key={PublicId}
        productKey={PublicId}
        productName={Name}
        productDescription={Description || ""}
        productImageUrl={ImageUrl || ""}
        productPrice={Price}
      />
    );
  });

  return (
    <Card className="p-5 bg-secondary">
      <CardHeader className="flex gap-1 font-bold md:flex-col">
        <span className="text-xs md:text-sm uppercase font-extrabold text-gray-500 translate-y-3">
          Section:
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl items-center capitalize tracking-wider pb-2">
          {section.Name}
        </span>
      </CardHeader>

      <Separator className="h-1 bg-flipdish-blue my-3 rounded-full" />

      <CardContent>{menuItemsToRender}</CardContent>
    </Card>
  );
};

export default MenuCategory;
