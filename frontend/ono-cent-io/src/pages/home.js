import React, {useEffect, useState} from 'react'
import Header from '../components/header';
import Card from '../components/Card';

const Home = () => {
  const [cardData, setCardData] = useState({name:'test', image:'', price:'0,00'});

  
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
            <Card 
            title={cardData.title}
            image={cardData.image}
            price={cardData.price}
            />
          </div>
      </div>
    )
}

export default Home;