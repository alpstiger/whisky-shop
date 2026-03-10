import React, { useState, useEffect } from 'react';
import './App.css'; 
import initialData from './data/products.json'; 
// 후기 데이터 가져오기 (파일을 만드신 후 주석을 해제하세요)
// import reviewData from './data/reviews.json'; 

function App() {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]); // 후기 상태 추가

  useEffect(() => {
    setProducts(initialData);
    // 임시 후기 데이터 (나중에 json 파일로 관리하세요)
    setReviews([
      {
        id: 1,
        user: "위스키매니아",
        content: "야마자키 안전하게 잘 받았습니다! 포장이 대박이네요.",
        images: ["https://images.unsplash.com/photo-1569158063958-38f07079203c", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"],
        date: "2024.03.10"
      }
    ]);
  }, []);

  return (
    <div className="shop-container">
      <nav className="shop-nav">
        <a href="#products">상품목록</a>
        <a href="#reviews">구매후기</a>
      </nav>

      <header className="shop-header" id="products">
        <h1>WHISKY SHOP</h1>
        <p>일본 위스키 수출 대행 서비스</p>
      </header>

      {/* 상품 목록 (기존 코드와 동일) */}
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price-krw">약 {(item.price * 9.1).toLocaleString()}원</p>
            </div>
          </div>
        ))}
      </div>

      {/* 후기 섹션 추가 */}
      <section className="review-section" id="reviews">
        <h2>실시간 구매 후기</h2>
        <div className="review-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-images">
                {rev.images.map((img, idx) => (
                  <img key={idx} src={img} alt="후기사진" className="review-img" />
                ))}
              </div>
              <div className="review-content">
                <p className="review-text">{rev.content}</p>
                <div className="review-meta">
                  <span>{rev.user}</span> | <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;