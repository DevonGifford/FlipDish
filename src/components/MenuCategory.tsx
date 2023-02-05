import MenuItem from './MenuItem';
import { MenuSection } from './../lib/types'

interface MenuCategoryProps {
    section: MenuSection;
  }

  const MenuCategory: React.FC<MenuCategoryProps> = ({ section }) => {
    return (
      <div>
        <h2>CategoryName:  {section.Name}</h2>
        <ul>
          {section.MenuItems.map((menuItem) => (
            <MenuItem key={menuItem.MenuItemId} menuItemData={menuItem} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default MenuCategory;