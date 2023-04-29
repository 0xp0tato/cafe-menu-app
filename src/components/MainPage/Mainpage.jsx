import React, { useEffect, useState } from "react";

import menuData from "../../data/menuData.json";
import appLogo from "../../images/app-logo.png";
import ProductCard from "../ProductCard/ProductCard";

import "./MainPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Mainpage = () => {
  const searchIcon = (
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
  );

  const cartIcon = (
    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
  );

  const [category, setcategory] = useState("all");

  const showveg = () => {
    {
      return menuData.menu.map(
        (item) =>
          item.type === category && <ProductCard key={item.id} data={item} />
      );
    }
  };

  const shownonveg = () => {
    {
      return menuData.menu.map(
        (item) =>
          item.type === category && <ProductCard key={item.id} data={item} />
      );
    }
  };

  const showall = () => {
    {
      return menuData.menu.map((item) => (
        <ProductCard key={item.id} data={item} />
      ));
    }
  };

  return (
    <div className="Mainpage">
      <div className="header">
        <div className="upper-header">
          <div className="app-icon-app-name">
            <img src={appLogo} />
            <p>Sacred Earth Cafe</p>
          </div>
          <div className="search-and-cart-buttons">
            <a href="/search">
              <button>{searchIcon}</button>
            </a>
            <a href="/cart">
              <button>{cartIcon}</button>
            </a>
          </div>
        </div>
        <div className="navbar">
          <button onClick={() => setcategory("all")}>All Items</button>
          <button onClick={() => setcategory("veg")}>Veg</button>
          <button onClick={() => setcategory("non veg")}>Non-Veg</button>
        </div>
      </div>
      <div className="banner">
        <p>
          Welcome to
          <br />
          Sacred Earth Cafe
        </p>
      </div>
      <p>Today's Special</p>
      <div className="products-container">
        {category === "veg" ? showveg() : null}
        {category === "non veg" ? shownonveg() : null}
        {category === "all" ? showall() : null}
      </div>
    </div>
  );
};

export default Mainpage;
