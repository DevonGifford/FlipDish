import { Menu } from "../types/menuData";
import Header from "./components/Header";
import MenuItemCard from "./components/MenuItemCard";

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
      <main className="flex flex-col w-full my-2 gap-3 md:pr-2 md:px-4">
        {menuData.MenuSections.map((section) => (
          <section
            className="text-card-foreground pb-4 md:px-48 md:container"
            key={section.MenuSectionId}
          >
            <h2 className="flex flex-col font-semibold items-start text-lg md:text-xl capitalize tracking-wider">
              {section.Name}
            </h2>
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

                // 👇 "If IsMasterOptionSet then return MenuItemOptionSetItems via MenuItemCard component"
                const checkMasterToggle = MenuItemOptionSets.find(
                  (masterItem) => masterItem.IsMasterOptionSet,
                );
                if (checkMasterToggle) {
                  return checkMasterToggle.MenuItemOptionSetItems.map(
                    (secretItem) => (
                      <MenuItemCard
                        key={secretItem.PublicId}
                        productName={`${Name}: ${secretItem.Name}`}
                        productDescription={Description || ""}
                        productImageUrl={ImageUrl || ""}
                        productPrice={secretItem.Price || Price}
                      />
                    ),
                  );
                }
                // 👇"Otherwise return all other MenuItems via MenuItemCard component"
                return (
                  <MenuItemCard
                    key={PublicId}
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
