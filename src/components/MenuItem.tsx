import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MenuItem } from '../lib/types';

interface MenuItemCardProps {
  menuItemData: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ menuItemData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{menuItemData.Name}</CardTitle>
          <CardDescription className="text-gray-600">{menuItemData.Description?.toString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={menuItemData.ImageUrl!} alt={menuItemData.Name} className="w-full h-auto rounded-md" />
          <div className="flex justify-between mt-4">
            <span className="text-xl font-semibold">Price: ${menuItemData.Price.toFixed(2)}</span>
            {/* Add any other price formatting or content you need */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenuItemCard;
