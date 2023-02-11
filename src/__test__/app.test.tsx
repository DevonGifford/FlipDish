import "@testing-library/jest-dom";
import "intersection-observer";
import { test, expect, describe, vi } from "vitest";
import { screen, render } from "@testing-library/react";

import menuDataRaw from "../../public/test-data.json";
import { useMenuData } from "./../lib/fetchData";

import App from "../App";
import { Header } from "../components/Header";

vi.mock("./../lib/fetchData");

describe("Testing w/vitest", () => {
  test("Testing case Fetch Fail / No Data", async () => {
    useMenuData.mockReturnValue({
      menuData: null,
      loading: false,
      error: null,
    });
    render(<App />);

    screen.debug();

    const errorUI = screen.getByText(
      "Apologies, we're experiencing technical difficulties."
    );

    expect(errorUI).toBeInTheDocument();
  });

  test("Testing case Loading Animation ", async () => {
    useMenuData.mockReturnValue({
      menuData: null,
      loading: true,
      error: null,
    });
    render(<App />);
    const LoaderCheck = screen.getByText("Loading...");

    expect(LoaderCheck).toBeInTheDocument;
  });

  test("Testing case Error Message ", async () => {
    const errorMessage = { message: "TEST ERROR" };

    useMenuData.mockReturnValue({
      menuData: null,
      loading: false,
      error: errorMessage,
    });
    render(<App />);

    screen.debug();

    const errorUI = screen.getByText(
      "Apologies, we're experiencing technical difficulties."
    );
    const checkErrorMessage = screen.getByText("TEST ERROR");

    expect(errorUI).toBeInTheDocument();
    expect(checkErrorMessage).toBeInTheDocument();
  });

  test("Data renders w/ correct category names are rendered", async () => {
    const mockData = menuDataRaw;

    useMenuData.mockReturnValue({
      menuData: mockData,
      loading: false,
      error: null,
    });
    render(<App />);

    const categoriesDemo = screen.getByText("Demo");
    const categoriesMains = screen.getByText("Mains");
    const categoriesTest = screen.getByText("Test new section");

    expect(categoriesDemo).toBeInTheDocument();
    expect(categoriesMains).toBeInTheDocument();
    expect(categoriesTest).toBeInTheDocument();
  });

  test("Data renders w/ correct Item/Product names are rendered", async () => {
    const mockData = menuDataRaw;

    useMenuData.mockReturnValue({
      menuData: mockData,
      loading: false,
      error: null,
    });
    render(<App />);

    //-normal item name
    const itemSalad = screen.getByText("Salad");
    const itemBurger = screen.getByText("Burger");
    //-masterItemOption item names
    const itemChips = screen.getByText("Chips: Small");

    expect(itemSalad).toBeInTheDocument();
    expect(itemBurger).toBeInTheDocument();
    expect(itemChips).toBeInTheDocument();
  });

  test("Data renders w/ correct product/item description text is rendered", async () => {
    const mockData = menuDataRaw;

    useMenuData.mockReturnValue({
      menuData: mockData,
      loading: false,
      error: null,
    });
    render(<App />);

    const itemDescriptions = screen.getAllByText("Fresh cut potato chips.");

    itemDescriptions.forEach((itemDescription) => {
      expect(itemDescription).toBeInTheDocument();
    });
  });

  test("Data renders w/ correct item pricing is rendered", async () => {
    const mockData = menuDataRaw;

    useMenuData.mockReturnValue({
      menuData: mockData,
      loading: false,
      error: null,
    });
    render(<App />);

    const itemPrice1 = screen.getByText("€1.00");
    const itemPrice2 = screen.getByText("€4.50");
    const itemPrice3 = screen.getAllByText("€10.00");

    expect(itemPrice1).toBeInTheDocument();
    expect(itemPrice2).toBeInTheDocument();
    itemPrice3.forEach((itemPrice3) => {
      expect(itemPrice3).toBeInTheDocument();
    });
  });

  test("Testing the header component", () => {
    const { getByText, getByRole } = render(<Header />);

    const Button = getByRole("button", { name: "Project Source Code" });
    const Text = getByText("Technical Assessment");

    expect(Button).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
  });
});
