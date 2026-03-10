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
{/* 배송 프로세스 섹션 */}
<section className="process-section" id="process">
  <h2 className="section-title">📦 배송 프로세스</h2>
  <div className="process-container">
    <div className="process-step">
      <div className="step-number">01</div>
      <h4>현지 바잉</h4>
      <p>일본 현지 공식 리쿼샵에서 직접 정품을 구매합니다.</p>
    </div>
    <div className="process-step">
      <div className="step-number">02</div>
      <h4>안심 검수</h4>
      <p>병 상태와 패키지를 확인하고 꼼꼼히 검수합니다.</p>
    </div>
    <div className="process-step">
      <div className="step-number">03</div>
      <h4>특수 완충 포장</h4>
      <p>위스키 전용 에어캡으로 파손 걱정 없이 포장합니다.</p>
    </div>
    <div className="process-step">
      <div className="step-number">04</div>
      <h4>국제 항공 운송</h4>
      <p>가장 빠른 항공편을 통해 한국으로 발송합니다.</p>
    </div>
    <div className="process-step">
      <div className="step-number">05</div>
      <h4>통관 및 국내배송</h4>
      <p>안전하게 통관 후 집 앞까지 배송해 드립니다.</p>
    </div>
  </div>
</section>
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