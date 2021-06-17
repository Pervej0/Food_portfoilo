import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Details from "./Details";
import PortfolioItem from "./PortfolioItem";
import PortfolioMenu from "./PortfolioMenu";

function App() {
  const CatagoryItem = [
    ...new Set(
      Details.map((val) => {
        return val.catagory;
      })
    ),
  ];

  const [Item, setItem] = useState(Details);
  const [Catagory, setCatagory] = useState(CatagoryItem);

  console.log(Catagory);

  const clickFun = (value) => {
    const updatedValue = Details.filter((val, ind) => {
      return value === val.catagory;
    });
    setItem(updatedValue);
    console.log(updatedValue);
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="heading">Portfolio</h1>

          {/* Portfolio menuvar */}
          <div className="text-center d-flex justify-content-center align-item-center">
            <PortfolioMenu fun={clickFun} cata={Catagory} />
            <button
              className="btn btn-primary m-3"
              onClick={() => {
                setItem(Details);
              }}
            >
              Friday
            </button>
          </div>

          {/* ---Portfolio field start------ */}
          <PortfolioItem Item={Item} />
        </div>
      </div>
    </>
  );
}

export default App;
