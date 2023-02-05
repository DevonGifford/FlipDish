import { useEffect, useState } from "react";
import MenuCategory from "./components/MenuCategory";
import { Footer } from "./components/ui/footer";
import { Header } from "./components/ui/header";

import { Menu } from "./lib/types";
import "./App.css";

function App() {
  //✅ Fetching the data
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

      <div className="text-2xl font-semibold py-10">Today's Menu</div>
      <div>
        {menuData ? (
          menuData.MenuSections.map((section) => (
            <MenuCategory key={section.MenuSectionId} section={section} />
          ))
        ) : (
          <span>Insert Loading Animation...</span>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
