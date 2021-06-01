import React, {useEffect, useState} from 'react'
import Header from '../components/header';
import Card from '../components/Card';

// import client from '../util/socketClient';

const Home = () => {
  const [cardData, setCardData] = useState([{name:'test', image:'', price:'0,00'}]);

  
  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then((response) => response.json())
    .then((products) => {
      setCardData(products); 
    });
    }, []) 
    
    return(
      <div className="container-fluid">
          <div className="container-header">
            <Header />
          </div>
          <div className="container-card">
            {cardData && cardData.map((product => (
              <Card 
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))) }
            
          </div>
      </div>
    )
}

export default Home;