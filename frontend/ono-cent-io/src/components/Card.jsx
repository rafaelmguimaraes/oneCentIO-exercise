import React, {useEffect, useState} from "react";

import client from '../util/socketClient';
const Card = ({ id, name, image, price }) => {
  const [currentPrice, setCurrentPrice] = useState(price);
  useEffect(() => {
    client.on('updatePriceClient', (product) => {
      if (product._id === id) setCurrentPrice(product.price);
    });
  }, [id]);

  const handleClick = () => {
    client.emit('updatePrice', { id });
  }


  return (
    <div className="card-body">
      <div className="card-title">{name}</div>
      <div className="card-image">
        <img src={image} alt="product" className="image-product" />
      </div>
      <div className="card-price">{currentPrice}</div>
      <div className="card-button">
        {currentPrice < 100 
        ? (<button type="button" className="btn-bid" onClick={handleClick}>
            Dar lance
          </button>) :
          (<button type="button" className="btn-bid">
          Produto Arrematado
        </button>)}
        
      </div>
    </div>
  );
};

export default Card;
