import React, { useState, useEffect } from 'react';
import './App.css'; 
import initialData from './data/products.json'; 

// 1. 환율 설정 (1엔당 원화 가격, 필요할 때 이 숫자만 바꾸면 됩니다)
const EXCHANGE_RATE = 9.1; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(initialData);
  }, []);

  // 2. 카카오톡이나 문의 페이지로 연결하는 함수
  const handleBuyClick = (itemName) => {
    const message = `안녕하세요! [${itemName}] 구매 문의드립니다.`;
    // 아래 링크의 '본인아이디' 부분을 실제 카카오톡 채널이나 오픈채팅 주소로 바꾸시면 됩니다.
    window.open(`https://open.kakao.com/o/syourid?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>WHISKY SHOP</h1>
        <p>일본 위스키 수출 대행 서비스</p>
        <div className="exchange-info">
          현재 적용 환율: 1¥ = {EXCHANGE_RATE}원 (관세 별도)
        </div>
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
              
              {/* 엔화 가격 표시 */}
              <p className="price-jpy">¥{item.price.toLocaleString()}</p>
              
              {/* 3. 예상 한화 가격 표시 (자동 계산) */}
              <p className="price-krw">
                약 {(item.price * EXCHANGE_RATE).toLocaleString()}원
              </p>

              <button 
                className="buy-button" 
                onClick={() => handleBuyClick(item.name)}
              >
                구매 문의하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;