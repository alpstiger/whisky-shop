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
{/* 2. 이용 안내 & FAQ 섹션 */}
<section className="guide-section" id="guide">
  <h2 className="section-title">💡 이용 안내 & FAQ</h2>
  <div className="guide-container">
    <div className="guide-item">
      <h4>Q. 배송 기간은 얼마나 걸리나요?</h4>
      <p>결제 완료 후 일본 현지 바잉 및 발송까지 평일 기준 5~7일, 통관을 거쳐 수령까지 총 10일 내외가 소요됩니다.</p>
    </div>
    <div className="guide-item">
      <h4>Q. 관부가세는 포함된 가격인가요?</h4>
      <p>아니요. 주류 특성상 관세청 안내에 따라 고객님이 직접 납부하셔야 합니다. (150달러 이하 1병까지는 면세 혜택이 있을 수 있으나 주세/교육세는 발생할 수 있습니다.)</p>
    </div>
    <div className="guide-item">
      <h4>Q. 개인통관고유부호가 무엇인가요?</h4>
      <p>해외 물품 수입 시 본인 확인을 위한 번호입니다. 관세청 유니패스 사이트에서 본인 인증 후 즉시 발급 가능합니다.</p>
    </div>
  </div>
</section>

{/* 3. 취소 및 환불 규정 섹션 */}
<section className="policy-section" id="policy">
  <h2 className="section-title">🛡️ 취소 및 환불 규정</h2>
  <div className="policy-card">
    <div className="policy-item">
      <strong>1. 주문 취소:</strong> 일본 현지에서 상품 구매가 완료된 이후에는 단순 변심으로 인한 취소가 불가합니다.
    </div>
    <div className="policy-item">
      <strong>2. 파손 보상:</strong> 배송 중 파손이 발생한 경우, <strong>택배 박스를 개봉하는 영상</strong>과 함께 연락 주시면 100% 환불 또는 재발송해 드립니다.
    </div>
    <div className="policy-item">
      <strong>3. 반품 및 교환:</strong> 해외 배송 특성상 단순 변심에 의한 반품 시 왕복 국제 운송료가 청구되오니 신중한 구매 부탁드립니다.
    </div>
  </div>
</section>
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