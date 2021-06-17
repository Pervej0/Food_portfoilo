import React from "react";

const PortfolioMenu = (props) => {
  return (
    <>
      {props.cata.map((value, ind) => {
        return (
          <React.Fragment key={ind}>
            <button
              className="btn btn-primary m-3"
              onClick={() => {
                props.fun(value);
              }}
            >
              {value}
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PortfolioMenu;
