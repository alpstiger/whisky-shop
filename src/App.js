import React, { useState, useEffect } from 'react';
import './App.css'; 
// 방금 만든 JSON 파일을 가져옵니다. 경로를 꼭 확인하세요!
import initialData from './data/products.json'; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 앱이 실행되면 JSON 데이터를 state에 저장합니다.
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
              {/* 이미지가 있다면 img 태그를, 없다면 이름을 표시합니다 */}
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


.shop-container { padding: 20px; max-width: 1000px; margin: 0 auto; font-family: sans-serif; }
.shop-header { text-align: center; margin-bottom: 40px; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.product-card { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; transition: 0.3s; }
.product-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.product-card img { width: 100%; height: 200px; object-fit: cover; }
.product-info { padding: 15px; }
.badge { background: #ff4d4f; color: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
.price { font-weight: bold; color: #333; margin: 10px 0; }
.buy-button { width: 100%; padding: 8px; background: #000; color: #fff; border: none; cursor: pointer; }

export default App;