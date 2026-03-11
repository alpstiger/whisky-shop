import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "야마자키 12년", price: 18500, img: "https://via.placeholder.com/200", tag: "인기" },
    { id: 2, name: "히비키 하모니", price: 12400, img: "https://via.placeholder.com/200", tag: "추천" },
  ];

  return (
    <div className="shop-container">
      {/* 1. 헤더 영역 */}
      <header className="main-header">
        <div className="logo">DRUNKEN MONKEY <span>CLONE</span></div>
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요..." />
          <button>🔍</button>
        </div>
      </header>

      {/* 2. 상단 네비게이션 */}
      <nav className="top-nav">
        <ul>
          <li>일본 위스키</li>
          <li>싱글몰트</li>
          <li>블렌디드</li>
          <li>버번/아메리칸</li>
          <li>기타 위스키</li>
          <li className="exchange">오늘의 환율: 100¥ = 915원</li>
        </ul>
      </nav>

      {/* 3. 메인 콘텐츠 */}
      <div className="main-content">
        {/* 특별 주문 배너 */}
        <div className="special-order-banner">
          <div className="banner-content">
            <h3>🔍 찾으시는 위스키가 없나요?</h3>
            <p>야후옥션, 메르카리 입찰 대행부터 현지 희귀 보틀 탐색까지!</p>
          </div>
          <button className="inquiry-btn">1:1 경매 대행 문의</button>
        </div>

        {/* 상품 그리드 */}
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

      {/* 4. 플로팅 메뉴 */}
      <div className="floating-menu">
        <button className="float-btn kakao">💬</button>
        <button className="float-btn top" onClick={() => window.scrollTo(0,0)}>↑</button>
      </div>
    </div>
  );
}

export default App;