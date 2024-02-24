"use client";

import { useMenuData } from "../utils/fetchData";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Header } from "../components/Header";
import LoadingSpinner from "../components/ui/spinner";
import MenuItemCard from "../components/MenuItemCard";


export default function App() {
  const { menuData, loading, error } = useMenuData();

  return (
    <>
      {/* CONDITIONAL RENDER MENU DATA */}
      {loading ? (
        // 👇 Renders Loading animation while waiting for fetch (data/error)
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <main className="flex flex-col gap-3 lg:gap-5 pb-20">
            {menuData ? (
              // 👇 Renders Menu data or Renders Error Message
              menuData.MenuSections.map((section) => (
                <Card className="p-5 bg-secondary" key={section.MenuSectionId}>
                  <CardHeader className="flex gap-1 font-bold md:flex-col">
                    <span className="text-xs md:text-sm uppercase font-extrabold text-gray-500 translate-y-3">
                      Section:
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl items-center capitalize tracking-wider pb-2">
                      {section.Name}
                    </span>
                  </CardHeader>
                  <Separator className="h-1 bg-flipdish-blue my-3 rounded-full" />
                  <CardContent>
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
                        (masterItem) => masterItem.IsMasterOptionSet
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
                          )
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
                  </CardContent>
                </Card>
              ))
            ) : (
              // 👇 Fallback UI for Failed API Request:
              <Card className="flex flex-col gap-10 h-[50vh]  justify-center items-center text-center bg-secondary mx-4 md:mx-10">
                <div>
                  <h1 className="text-xl font-bold">
                    Apologies, we're experiencing technical difficulties.
                  </h1>
                  <h2>Please try again later.</h2>
                  <span>🙈</span>
                </div>
                <div className="flex flex-col text-sm text-gray-500 ">
                  <span className="font-semibold">Error message:</span>
                  <span>{error?.message}</span>
                </div>
              </Card>
            )}
          </main>
        </>
      )}
    </>
  );
}
