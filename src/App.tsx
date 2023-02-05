import { useEffect, useState } from "react";
import { Footer } from "./components/ui/footer";
import { Header } from "./components/ui/header";
import { Menu } from "./lib/types";

import MenuCategory from "./components/MenuCategory";
import "./App.css";

function App() {
  //✅ Fetching JSON data from api endpoint
  const [menuData, setMenuData] = useState<Menu | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json"
        );
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col gap-3 lg:gap-5 pb-20">
        {menuData ? (
          menuData.MenuSections.map((section) => (
            <MenuCategory key={section.MenuSectionId} section={section} />
          ))
        ) : (
          <span>🎯 Insert Loading Animation...</span>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
