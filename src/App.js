import React, { useState, useEffect } from 'react';

// [전략적 가격 설정] 실제 현지가보다 마진(인건비/보험료)을 붙여서 등록하세요!
const WHISKY_DATA = [
  { 
    id: 1, 
    name: "닷사이 23 (Dassai 23)", 
    price: 7800, // 현지가 6,000엔 + 사장님 마진 포함
    isHot: true, 
    image: "https://images.unsplash.com/photo-1602069338573-0498788f8d9b?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 2, 
    name: "야마자키 12년", 
    price: 28500, 
    isHot: true, 
    image: "https://images.unsplash.com/photo-1527281405159-3b0a2108b301?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 3, 
    name: "히비키 하모니", 
    price: 19800, 
    isHot: true, 
    image: "https://images.unsplash.com/photo-1628142340551-4d9434857476?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    id: 4, 
    name: "산토리 가쿠빈", 
    price: 2500, 
    isHot: false, 
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80" 
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [orderMode, setOrderMode] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/JPY")
      .then(res => res.json())
      .then(data => {
        // [5% 마진 적용] 실시간 환율 + 5% (환전수수료/리스크 관리비)
        const businessRate = data.rates.KRW * 1.05; 
        setExchangeRate(businessRate);
        setLoading(false);
      })
      .catch(() => {
        setExchangeRate(9.5); // 실패 시 대비용
        setLoading(false);
      });
  }, []);

  const totalJpy = cart.reduce((sum, item) => sum + item.price, 0);
  const totalKrw = Math.floor(totalJpy * exchangeRate);

  if (loading) return <div style={{textAlign:'center', padding:'100px'}}>🌐 실시간 안전 환율 및 보안 서버 연결 중...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f4f7', minHeight: '100vh', maxWidth: '500px', margin: '0 auto' }}>
      
      {/* 상단 헤더: 신뢰도 강조 */}
      <header style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#111' }}>🥃 JP Whisky Direct</h1>
        <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>일본 현지 정품 바잉 & 안전 배송 전문</p>
        
        <div style={{ backgroundColor: '#03c75a', color: '#fff', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9 }}>N 실시간 송금 환율: 100엔 = {Math.floor(exchangeRate * 100).toLocaleString()}원</p>
          <p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '1rem' }}>🛡️ 전 상품 파손 100% 책임 보상제</p>
        </div>
      </header>

      {!orderMode ? (
        <>
          {/* 상품 리스트 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '120px' }}>
            {WHISKY_DATA.map((whisky) => (
              <div key={whisky.id} style={{ background: '#fff', padding: '12px', borderRadius: '15px', position: 'relative', border: whisky.isHot ? '1.5px solid #03c75a' : '1px solid #eee' }}>
                {whisky.isHot && <span style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#e11d48', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold' }}>인기상품</span>}
                <img src={whisky.image} alt={whisky.name} style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '10px' }} />
                <h3 style={{ fontSize: '0.9rem', margin: '12px 0 5px 0', height: '35px', overflow: 'hidden' }}>{whisky.name}</h3>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#aaa', fontSize: '0.75rem' }}>현지 공급가: ¥{whisky.price.toLocaleString()}</span>
                  <p style={{ fontWeight: 'bold', color: '#c2410c', fontSize: '1.15rem', margin: '2px 0' }}>{Math.floor(whisky.price * exchangeRate).toLocaleString()}원</p>
                  <span style={{ fontSize: '0.65rem', color: '#03c75a' }}>● 보험 및 검수비 포함</span>
                </div>
                <button 
                  onClick={() => { setCart([...cart, whisky]); alert('장바구니에 담겼습니다!'); }} 
                  style={{ width: '100%', padding: '10px', backgroundColor: '#222', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  장바구니 담기
                </button>
              </div>
            ))}
          </div>

          {/* 하단 구매 바 (고정형) */}
          {cart.length > 0 && (
            <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '500px', backgroundColor: '#fff', padding: '20px', boxSizing: 'border-box', borderTop: '1px solid #eee', boxShadow: '0 -10px 20px rgba(0,0,0,0.05)', zIndex: 100 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#666' }}>총 {cart.length}개 상품 합계</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#03c75a' }}>{totalKrw.toLocaleString()}원</span>
              </div>
              <button 
                onClick={() => setOrderMode(true)} 
                style={{ width: '100%', padding: '16px', backgroundColor: '#03c75a', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
              >
                주문하기 (계좌이체 안내)
              </button>
            </div>
          )}
        </>
      ) : (
        /* 주문 완료 섹션 */
        <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>✅</div>
          <h2 style={{ color: '#03c75a', margin: '0 0 10px 0' }}>주문이 접수되었습니다</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
            입금이 확인되면 즉시 일본 현지 바잉과<br/>꼼꼼한 안전 포장이 진행됩니다.
          </p>
          
          <div style={{ backgroundColor: '#f9fafb', padding: '25px', borderRadius: '15px', margin: '25px 0', border: '1px solid #eee' }}>
            <p style={{ fontSize: '1.4rem', color: '#e11d48', margin: '0 0 15px 0' }}>최종 입금액: <strong>{totalKrw.toLocaleString()}원</strong></p>
            <div style={{ textAlign: 'left', fontSize: '0.95rem', color: '#444', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <p style={{ margin: '5px 0' }}>🏦 <strong>은행:</strong> OO은행 (계좌를 입력하세요)</p>
              <p style={{ margin: '5px 0' }}>👤 <strong>예금주:</strong> 이예준</p>
            </div>
          </div>

          <button 
            onClick={() => window.open('https://open.kakao.com/o/sXXXXX')} 
            style={{ width: '100%', padding: '16px', backgroundColor: '#fee500', color: '#3c1e1e', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginBottom: '12px' }}
          >
            카카오톡으로 입금 확인 요청
          </button>
          <button onClick={() => setOrderMode(false)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', textDecoration: 'underline' }}>쇼핑 계속하기</button>
          
          <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '30px' }}>
            * 파손 시 100% 환불 보장 (단, 박스 개봉 영상 필수)<br/>
            * 현지 사정으로 품절 시 즉시 전액 환불됩니다.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;