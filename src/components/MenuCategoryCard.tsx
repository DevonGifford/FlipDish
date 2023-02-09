import MenuItemCard from "./MenuItemCard";
import { MenuSection } from "../lib/types";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader } from "./ui/card";

export interface MenuCategoryProps {
  section: MenuSection;
}

const MenuCategoryCard: React.FC<MenuCategoryProps> = ({ section }) => {
  
  // 🎯 Don't do this sub-rendering shit, just write it in the return and move 
  // 🎯 This enire component should be in the app.tsx

  //👇 Conditional check & render for MenuItems
  const menuItemsToRender = section.MenuItems.flatMap((product) => {
    const { Price, PublicId, Name, Description, ImageUrl, MenuItemOptionSets } = product;
   
    // 👇 If IsMasterOptionSet then return MenuItemOptionnSetItems via MenuItemCard component
    const checkMasterToggle = MenuItemOptionSets.find((masterItem) => masterItem.IsMasterOptionSet);
    if (checkMasterToggle) {
      return checkMasterToggle.MenuItemOptionSetItems.map((secretItem) => (
        <MenuItemCard
          key={secretItem.PublicId}
          productKey={PublicId}
          productName={`${Name}: ${secretItem.Name}`}
          productDescription={Description || ""}
          productImageUrl={ImageUrl || ""}
          productPrice={secretItem.Price || Price}
        />
      ));
    }
   
    // 👇 Otherwise return all other MenuItems via MenuItemCard component
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

export default MenuCategoryCard;
