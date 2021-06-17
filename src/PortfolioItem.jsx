import React from "react";

const PortfolioItem = (props) => {
  return (
    <>
      <div className="container">
        <div className="portfolio_field my-4 row justify-content-center align-items-center">
          {props.Item.map((array) => {
            const { id, image, name, catagory, price, discription } = array;
            return (
              <React.Fragment key={id}>
                <div className="col-lg-4 row portfolio_item my-3">
                  <div className="imgBox col-4">
                    <img src={image} alt={name} className="img-fluid" />
                  </div>
                  <div className="portfolio_info col-8">
                    <h1 className="name">{name}</h1>
                    <p className="discription">{discription}</p>
                    <p className="catagory">
                      <strong>Catagory:</strong> {catagory}
                    </p>
                    <p className="price">
                      <span className="doller">$</span>
                      {price}
                    </p>
                    <button className="btn btn-warning">Order now</button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
