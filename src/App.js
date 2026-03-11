import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "야마자키 12년", price: 18500, img: "https://via.placeholder.com/200", tag: "인기" },
    { id: 2, name: "히비키 하모니", price: 12400, img: "https://via.placeholder.com/200", tag: "추천" },
    // 상품 데이터를 더 추가하세요
  ];

  return (
    <div className="shop-container">
      {/* 1. 상단 헤더 */}
      <header className="main-header">
        <div className="logo">DRUNKEN MONKEY <span>CLONE</span></div>
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요..." />
          <button>🔍</button>
        </div>
      </header>
      import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "야마자키 12년", price: 18500, img: "https://via.placeholder.com/200", tag: "인기" },
    { id: 2, name: "히비키 하모니", price: 12400, img: "https://via.placeholder.com/200", tag: "추천" },
  ];

  return (
    <div className="shop-container">
      <header className="main-header">
        <div className="logo">DRUNKEN MONKEY <span>CLONE</span></div>
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요..." />
          <button>🔍</button>
             {/* 상단 카테고리 메뉴 */}
      <nav className="top-nav">
        <ul>
          <li>일본 위스키</li>
          <li>싱글몰트</li>
          <li>블렌디드</li>
          <li>버번/아메리칸</li>
          <li>기타 위스키</li>
          <li>오늘의 환율: 100¥ = 915원</li>
        </ul>
      </nav>
        </div>
      </header>

   

      <div className="main-content">
        {/* 특별 주문 배너 */}
        <div className="special-order-banner">
          <div className="banner-content">
            <h3>🔍 찾으시는 위스키가 없나요?</h3>
            <p>야후옥션, 메르카리 입찰 대행부터 현지 희귀 보틀 탐색까지!</p>
          </div>
          <button className="inquiry-btn">1:1 경매 대행 문의</button>
        </div>

        <main className="product-section">
          <div className="product-grid">
            {products.map(p => (
              <div key={p.id} className="product-card">
                <div className="badge">{p.tag}</div>
                <img src={p.img} alt={p.name} />
                <div className="p-info">
                  <h4>{p.name}</h4>
                  <p className="p-jpy">¥{p.price.toLocaleString()}</p>
                  <p className="p-krw">약 {(p.price * 9.15).toLocaleString()}원</p>
                  <button className="buy-btn">구매 문의</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="floating-menu">
        <button className="float-btn kakao">💬</button>
        <button className="float-btn top">↑</button>
      </div>
    </div>
  );
}

export default App;

      <div className="main-content">
        {/* 2. 좌측 사이드바 (카테고리) */}
       
{/* 경매 및 특별 주문 안내 배너 */}
<div className="special-order-banner">
  <div className="banner-content">
    <h3>🔍 찾으시는 위스키가 없나요?</h3>
    <p>야후옥션, 메르카리 입찰 대행부터 현지 희귀 보틀 탐색까지!</p>
    <p><strong>카톡으로 링크만 보내주시면 실시간 상담 후 낙찰 도와드립니다.</strong></p>
  </div>
  <button className="inquiry-btn">1:1 경매 대행 문의</button>
</div>
        {/* 3. 상품 리스트 영역 */}
        <main className="product-section">
          <div className="product-grid">
            {products.map(p => (
              <div key={p.id} className="product-card">
                <div className="badge">{p.tag}</div>
                <img src={p.img} alt={p.name} />
                <div className="p-info">
                  <h4>{p.name}</h4>
                  <p className="p-jpy">¥{p.price.toLocaleString()}</p>
                  <p className="p-krw">약 {(p.price * 9.15).toLocaleString()}원</p>
                  <button className="buy-btn">구매 문의</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 4. 우측 퀵 메뉴 (둥둥 떠다니는 버튼) */}
      <div className="floating-menu">
        <button className="float-btn kakao">💬</button>
        <button className="float-btn insta">📸</button>
        <button className="float-btn top">↑</button>
      </div>
    </div>
  );
}

export default App;