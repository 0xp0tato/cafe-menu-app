import React, { useEffect, useState } from "react";
import "./SearchPage.css";

import menuData from "../../data/menuData.json";
import SearchedItem from "../SearchedItem/SearchedItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const leftArrowIcon = (
  <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{ color: "#ffffff" }} />
);

const SearchPage = () => {
  const [filter, setfilter] = useState("");

  return (
    <div className="SearchPage">
      <div className="searchpage-header">
        <a href="/">
          <button>{leftArrowIcon}</button>
        </a>
        <input
          placeholder="Search Your Food"
          onChange={(e) => setfilter(e.target.value)}
        ></input>
      </div>
      <div className="searched-items-container">
        {menuData.menu.map(
          (item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()) && (
              <SearchedItem key={item.id} data={item} />
            )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
