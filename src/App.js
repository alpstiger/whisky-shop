import React, { useState, useEffect } from 'react';
import './App.css'; 
import initialData from './data/products.json'; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(initialData);
  }, []);

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>WHISKY SHOP</h1>
        <p>일본 위스키 수출 대행 서비스</p>
      </header>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="image-placeholder">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-info">
              {item.isHot && <span className="badge">HOT</span>}
              <h3>{item.name}</h3>
              <p className="price">¥{item.price.toLocaleString()}</p>
              <button className="buy-button">상세 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;