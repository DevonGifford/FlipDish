"use server";

import { Header } from "./components/Header";
import MenuItemCard from "./components/MenuItemCard";
import { Menu } from "./types/menuData";

async function fetchMenuData() {
  const response = await fetch(
    `https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json`,
  );
  if (!response.ok) {
    throw new Error(`Network response was not ok (Status: ${response.status})`);
  }

  const menuData = await response.json();
  return menuData;
}

export default async function App() {
  const menuData: Menu = await fetchMenuData();

  return (
    <>
      <Header />
      <main className="flex flex-col w-full max-h-36 min-h-[90px] my-2 gap-3 lg:gap-5 pb-10">
        {menuData.MenuSections.map((section) => (
          <section
            className="text-card-foreground py-3"
            key={section.MenuSectionId}
          >
            <header className="flex flex-col space-y-1.5 lg:p-6 gap-1 font-bold md:flex-col">
              <h4 className="text-xs md:text-sm uppercase font-extrabold text-gray-500">
                Section:
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-4xl items-center capitalize tracking-wider pb-2">
                {section.Name}
              </h2>
            </header>
            <div className="flex flex-col">
              {section.MenuItems.flatMap((product) => {
                //👇 Conditional check & render for MenuItems
                const {
                  Price,
                  PublicId,
                  Name,
                  Description,
                  ImageUrl,
                  MenuItemOptionSets,
                } = product;

                // 👇 If IsMasterOptionSet then return MenuItemOptionnSetItems via MenuItemCard component
                const checkMasterToggle = MenuItemOptionSets.find(
                  (masterItem) => masterItem.IsMasterOptionSet,
                );
                if (checkMasterToggle) {
                  return checkMasterToggle.MenuItemOptionSetItems.map(
                    (secretItem) => (
                      <MenuItemCard
                        key={secretItem.PublicId}
                        productKey={PublicId}
                        productName={`${Name}: ${secretItem.Name}`}
                        productDescription={Description || ""}
                        productImageUrl={ImageUrl || ""}
                        productPrice={secretItem.Price || Price}
                      />
                    ),
                  );
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
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
