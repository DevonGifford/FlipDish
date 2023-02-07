import { useEffect, useState } from "react";
import { Menu } from "./lib/types";
import { Header } from "./components/Header";
import MenuCategory from "./components/MenuCategoryCard";
import LoadingSpinner from "./components/ui/spinner";

import "./App.css";

function App() {
  //✅ Fetching JSON data from api endpoint
  const [menuData, setMenuData] = useState<Menu | null>(null);  //-State to hold menu data
  const [loading, setIsLoading] = useState<boolean>(true);

  //-Fetches the data on mount
  useEffect(() => {   
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json"
        );
        const data = await response.json(); //-Parse response as JSON
        setIsLoading(false);
        setMenuData(data);  //-Set menu data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <LoadingSpinner />  //-Render spinner while waiting for data to load
  ) : (
    <>
      <Header />
      <div className="flex flex-col gap-3 lg:gap-5 pb-20">
        {menuData ? (
          menuData.MenuSections.map((section) => (
            <MenuCategory key={section.MenuSectionId} section={section} />
          ))
        ) : (
          <LoadingSpinner />  //-Render spinner under header if data fails to load
        )}
      </div>
    </>
  );
}

export default App;
