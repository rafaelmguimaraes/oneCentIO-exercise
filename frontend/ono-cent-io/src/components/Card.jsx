import React from "react";

const Card = ({ title, image, price }) => {
  return (
    <div className="card-body">
      <div className="card-title">{title}</div>
      <div className="card-image">
        <img src={image} alt="product" className="image-product" />
      </div>
      <div className="card-price">{price}</div>
      <div className="card-button">
        <button type="button" className="btn-bid">
          Dar lance
        </button>
      </div>
    </div>
  );
};

export default Card;
