import React, { useState } from "react";
import Stats19 from "./statics/PlacementStats2019";
import Stats20 from "./statics/PlacementStats2020";
import Stats21 from "./statics/PlacementStats2021";
import Stats22 from "./statics/PlacementStats2022";
// import Stats23 from "./components/statics/PlacementStats2023";

const DynamicContent = () => {
  const [activePage, setActivePage] = useState("stats19");

  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleLinkClick("stats19")}>Stats 2019</button>
        <button onClick={() => handleLinkClick("stats20")}>Stats 2020</button>
        <button onClick={() => handleLinkClick("stats21")}>Stats 2021</button>
        <button onClick={() => handleLinkClick("stats22")}>Stats 2022</button>
        {/* <button onClick={() => handleLinkClick("stats23")}>Stats 2023</button> */}
      </nav>

      {activePage === "stats19" && <Stats19 />}
      {activePage === "stats20" && <Stats20 />}
      {activePage === "stats21" && <Stats21 />}
      {activePage === "stats22" && <Stats22 />}
      {/* {activePage === "stats23" && <Stats23 />} */}
    </div>
  );
};

export default DynamicContent;
