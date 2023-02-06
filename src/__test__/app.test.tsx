import "@testing-library/jest-dom";
import "intersection-observer";
import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";

import App from "../App";
import MenuCategoryCard from "../components/MenuCategoryCard";
import LoadingSpinner from "../components/ui/spinner";

import { Header } from "../components/Header";
import { Menu } from "../lib/types";

import menuDataRaw from "../../public/test-data.json";


const menuData: Menu = menuDataRaw as Menu;

describe("Testing MenuCategoryCard & MenuItemCard with test-data", () => {
  test("correct category names are rendered", () => {
    const { getByText } = render(
      <>
        <div className="flex flex-col gap-3 lg:gap-5 pb-20">
          {menuData ? (
            menuData.MenuSections.map((section) => (
              <MenuCategoryCard key={section.MenuSectionId} section={section} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </>
    );

    const categoriesDemo = getByText("Demo");
    const categoriesMains = getByText("Mains");
    const categoriesTest = getByText("Test new section");

    expect(categoriesDemo).toBeInTheDocument();
    expect(categoriesMains).toBeInTheDocument();
    expect(categoriesTest).toBeInTheDocument();
  });

  test("correct Item/Product names are rendered", () => {
    const { getByText } = render(
      <>
        <div className="flex flex-col gap-3 lg:gap-5 pb-20">
          {menuData ? (
            menuData.MenuSections.map((section) => (
              <MenuCategoryCard key={section.MenuSectionId} section={section} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </>
    );

    //-normal item name
    const itemSalad = getByText("Salad");
    const itemBurger = getByText("Burger");
    //-masterItemOption item names
    const itemChips = getByText("Chips: Small");

    expect(itemSalad).toBeInTheDocument();
    expect(itemBurger).toBeInTheDocument();
    expect(itemChips).toBeInTheDocument();
  });

  test("correct product/item description text is rendered", () => {
    const { getAllByText } = render(
      <>
        <div className="flex flex-col gap-3 lg:gap-5 pb-20">
          {menuData ? (
            menuData.MenuSections.map((section) => (
              <MenuCategoryCard key={section.MenuSectionId} section={section} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </>
    );


    const itemDescriptions = getAllByText("Fresh cut potato chips.");

    itemDescriptions.forEach((itemDescription) => {
      expect(itemDescription).toBeInTheDocument();
    });
  });

  test("correct item pricing is rendered", () => {
    const { getByText, getAllByText } = render(
      <>
        <div className="flex flex-col gap-3 lg:gap-5 pb-20">
          {menuData ? (
            menuData.MenuSections.map((section) => (
              <MenuCategoryCard key={section.MenuSectionId} section={section} />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </>
    );

    const itemPrice1 = getByText("€1.00");
    const itemPrice2 = getByText("€4.50");
    const itemPrice3 = getAllByText("€10.00");

    expect(itemPrice1).toBeInTheDocument();
    expect(itemPrice2).toBeInTheDocument();
    itemPrice3.forEach((itemPrice3) => {
      expect(itemPrice3).toBeInTheDocument();
    });
  });
});

test("Testing Page Loading Animation", async () => {
    render(<App />);
    const LoaderCheck = screen.getByText("Loading...");

    expect(LoaderCheck).toBeInTheDocument;
});

test("Testing the header component", () => {
    const { getByText, getByRole } = render(<Header />);

    const Button = getByRole("button", { name: "Project Source Code" });
    const Text = getByText("Technical Assessment");

    expect(Button).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
});
