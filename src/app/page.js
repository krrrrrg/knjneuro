"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // 모달을 열기 위한 함수 (각 모달마다 분리)
  const showModal = (modalId) => {
    console.log(`모달 열기: ${modalId}`);
    const modal = document.getElementById(modalId);
    
    if (modal) {
      // 현재 스크롤 위치 저장
      const currentScrollPos = window.scrollY;
      
      // 배경 스크롤 방지 (스크롤 위치는 유지)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollPos}px`;
      document.body.style.width = '100%';
      
      // 모달 표시
      modal.style.display = 'flex';
      
      // 모달 내용의 스크롤 위치만 재설정 (페이지 스크롤은 변경하지 않음)
      setTimeout(() => {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.scrollTop = 0;
      }, 10);
    } else {
      console.error(`모달을 찾을 수 없음: ${modalId}`);
    }
  };
  
  // 모달을 닫기 위한 함수 (모든 모달에 공통으로 사용)
  const hideModal = (modalId) => {
    console.log(`모달 닫기: ${modalId}`);
    const modal = document.getElementById(modalId);
    
    if (modal) {
      // 현재 고정된 위치 값 가져오기
      const scrollY = document.body.style.top;
      
      // 모달 닫기
      modal.style.display = 'none';
      
      // 스크롤 복원
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // 스크롤 위치 복원
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  useEffect(() => {
    // 햄버거 메뉴 기능
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    }

    // 네이버 지도 초기화 함수
    function initMap() {
      try {
        if (typeof naver !== "undefined" && document.getElementById("map")) {
          var mapOptions = {
            center: new naver.maps.LatLng(35.1678376, 129.115742),
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
              position: naver.maps.Position.TOP_RIGHT,
            },
          };

          var map = new naver.maps.Map("map", mapOptions);

          var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(35.1678376, 129.115742),
            map: map,
          });

          var contentString = [
            '<div class="iw_inner" style="padding:10px;">',
            '   <h3 style="margin-bottom:10px;">강남제신경과</h3>',
            "   <p>부산시 수영구 수영로 697<br/>",
            "   홍인빌딩 5층<br/>",
            "   Tel: 051-759-7676</p>",
            "</div>",
          ].join("");

          var infowindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
            backgroundColor: "#fff",
            borderColor: "#888",
            borderWidth: 2,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            pixelOffset: new naver.maps.Point(20, -20),
          });

          naver.maps.Event.addListener(marker, "click", function (e) {
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(map, marker);
            }
          });

          infowindow.open(map, marker);
        }
      } catch (error) {
        console.error("지도 초기화 중 오류 발생:", error);
      }
    }

    // 지도 로드
    function loadNaverMap() {
      if (typeof window !== "undefined" && document.getElementById("map")) {
        if (typeof naver === "undefined") {
          // 네이버 지도 스크립트 로드
          const script = document.createElement("script");
          script.src =
            "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7kndwl5egx";
          script.async = true;
          script.onload = initMap;
          document.head.appendChild(script);
        } else {
          initMap();
        }
      }
    }

    loadNaverMap();
    
    // 모달 외부 클릭 시 닫기 이벤트 (모든 모달에 공통으로 적용)
    const handleModalClick = (event) => {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        if (event.target === modal) {
          // 현재 고정된 위치 값 가져오기
          const scrollY = document.body.style.top;
          
          // 모달 닫기
          modal.style.display = 'none';
          
          // 스크롤 복원
          document.body.style.overflow = '';
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          
          // 스크롤 위치 복원
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      });
    };
    
    window.addEventListener('click', handleModalClick);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('click', handleModalClick);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo2.png" alt="강남제신경과의원" />
            </Link>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/about">병원소개</Link>
            </li>
            <li>
              <Link href="/services">진료안내</Link>
            </li>
            <li>
              <Link href="/doctors">의료진</Link>
            </li>
            <li>
              <Link href="/reservation">진료문의</Link>
            </li>
            <li>
              <Link href="/map">오시는 길</Link>
            </li>
            <li>
              <a
                href="https://blog.naver.com/kangnamjeneurology"
                target="_blank"
                rel="noopener noreferrer"
              >
                블로그
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>
            당신의 건강한 삶을 위한
            <br />
            최상의 신경과 진료
          </h1>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              fontSize: "clamp(16px, 4vw, 32px)",
            }}
          >
            강남제신경과는 내 주치의 진료를 표방합니다.
          </p>
          <br />
          <Link href="/reservation" className="cta-button">
            진료문의
          </Link>
        </div>
      </section>

      <section id="services" data-aos="fade-up">
        <div className="container">
          <h2>주요 진료분야</h2>
          <div className="service-grid">
            <div
              className="service-card"
              onClick={() => showModal('headacheModal')}
            >
              <img src="/images/두통.png" alt="두통" />
              <h3>뇌 신경계 질환</h3>
              <p>뇌졸중, 치매, 파킨슨씨병, 떨림 등</p>
            </div>
            <div
              className="service-card"
              onClick={() => showModal('sleepModal')}
            >
              <img src="/images/수면.png" alt="수면장애" />
              <h3>두통 및 어지럼증</h3>
              <p>편두통 및 이석증, 메니에르병</p>
            </div>
            <div
              className="service-card"
              onClick={() => showModal('dementiaModal')}
            >
              <img src="/images/치매.png" alt="치매" />
              <h3>신경 통증 클리닉</h3>
              <p>손발 저림, 근골격계 통증, 안면마비</p>
            </div>
            <div
              className="service-card"
              onClick={() => showModal('internalModal')}
            >
              <img src="/images/치매.png" alt="내과" />
              <h3>내과 진료</h3>
              <p>협압, 당뇨, 비만, 영양요법</p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 상세 모달들 - 각 모달을 완전히 분리 */}
      
      {/* 뇌 신경계 질환 모달 */}
      <div id="headacheModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('headacheModal')}></span>
          <h2>뇌 신경계 질환</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 질환</h3>
              </div>
              <ul>
                <li>뇌졸중</li>
                <li>치매</li>
                <li>파킨슨씨병</li>
                <li>떨림</li>
                <li>골다공증</li>
                <li>자율신경계 이상</li>
                <li>스트레스</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>동맥경화도검사</li>
                <li>뇌혈류초음파검사</li>
                <li>경동맥초음파검사</li>
                <li>자율신경기능검사</li>
                <li>스트레스검사</li>
                <li>심전도검사</li>
                <li>골밀도검사</li>
                <li>인지기능(치매)검사</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 두통 및 어지럼증 모달 */}
      <div id="sleepModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('sleepModal')}></span>
          <h2>두통 및 어지럼증</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 질환</h3>
              </div>
              <ul>
                <li>편두통</li>
                <li>긴장성 두통</li>
                <li>군발성 두통</li>
                <li>편두통성 어지럼증</li>
                <li>이석증</li>
                <li>메니에르병</li>
                <li>전정신경염</li>
                <li>자율신경실조증</li>
                <li>기립성저혈압</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>뇌혈류 초음파</li>
                <li>비디오 안진검사</li>
                <li>자율신경기능검사</li>
                <li>기립 경사 테이블검사</li>
                <li>혈액검사</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 신경 통증 클리닉 모달 */}
      <div id="dementiaModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('dementiaModal')}></span>
          <h2>신경 통증 클리닉</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 질환</h3>
              </div>
              <ul>
                <li>손발 저림 <br /> (손목터널, 발목터널 증후군)</li>
                <li>근골격계 통증 <br /> (목, 허리, 어깨통증,오십견, 근막 통증 증후군 등)</li>                <li>요추, 경추간판장애</li>
                <li>삼차신경통 (안면마비, 구안와사)</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>신경전도검사</li>
                <li>근전도검사</li>
                <li>신경, 근 골격 초음파</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 내과 진료 모달 */}
      <div id="internalModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('internalModal')}></span>
          <h2>내과 진료</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진료 분야</h3>
              </div>
              <ul>
                <li>고혈압</li>
                <li>당뇨</li>
                <li>고지혈증</li>
                <li>비만</li>
                <li>영양요법</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>혈액검사</li>
                <li>소변검사</li>
                <li>심전도검사</li>
                <li>체성분 분석</li>
                <li>당화혈색소 검사</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="about" data-aos="fade-up">
        <div className="container">
          <h2>병원소개</h2>
          <br />
          <div className="about-content">
            <div className="about-text">
              <h3>
                최첨단 장비와 전문의료진이 함께하는
                <br />
                강남제신경과의원
              </h3>
              <p>
                20년 이상의 풍부한 임상경험을 바탕으로 정확한 진단과 치료를
                제공합니다. 최신 의료장비와 편안한 진료환경에서 여러분의 건강을
                책임지겠습니다.
              </p>
              <ul className="about-features">
                <li>✓ 최신 의료장비 보유</li>
                <li>✓ 전문의 1:1 맞춤 상담</li>
                <li>✓ 빠르고 정확한 진단</li>
                <li>✓ 충분한 진료시간</li>
                <li>✓ 물리치료 병행</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/2.jpg" alt="병원 내부" />
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" data-aos="fade-up">
        <div className="container">
          <h2>의료진 소개</h2>
          <div className="doctor-profile">
            <img src="/5.png" alt="강남제 원장" className="doctor-image" />
            <div className="doctor-info">
              <h3>강남제 원장</h3>
              <p className="doctor-title">신경과 전문의</p>
              <p
                className="doctor-brief"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                  fontSize: "clamp(12px, 3vw, 16px)",
                }}
              >
                두통 / 수면장애 / 뇌졸중 전문
              </p>
              <Link href="/doctors" className="more-btn">
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" data-aos="fade-up">
        <div className="container">
          <h2>진료문의</h2>
          <br />
          <div className="reservation-content">
            <div className="reservation-info">
              <div className="info-card">
                <h3>진료시간</h3>
                <ul>
                  <li>평일: 09:00 - 17:40</li>
                  <li>수/토요일: 09:00 - 12:30</li>
                  <li>점심시간: 12:50 - 14:00</li>
                  <li>일요일/공휴일: 휴진</li>
                </ul>
              </div>
              <div className="info-card">
                <h3>예약문의</h3>
                <a href="tel:051-759-7676" className="phone">
                  051-759-7676
                </a>
                <a
                  href="https://pf.kakao.com/_UxhvRn"
                  className="kakao-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  카카오톡: 강남제신경과의원
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" data-aos="fade-up">
        <div className="container">
          <div className="map-content">
            <div className="map-container">
              <div id="map" style={{ width: "100%", height: "400px" }}></div>
            </div>
            <div className="location-info">
              <div className="info-card">
                <h3>주소</h3>
                <p>부산시 수영구 수영로 697</p>
                <p>홍인빌딩 5층</p>
              </div>
              <div className="info-card">
                <h3>대중교통</h3>
                <div className="transport-info">
                  <h4>지하철</h4>
                  <p>2호선, 3호선 수영역 3번 출구 도보 1분</p>

                  <h4>버스</h4>
                  <p>
                    <strong>일반버스</strong>
                    <br />
                    수영교차로 / 수영역 하차 <br />
                    5-1, 20, 39, 40, 42, 49, 51, 54, 62, 63, 131, 141,
                    141(심야), 155, 210, 1001, 1003, 1003(심야), 2026
                  </p>
                  <p>
                    <strong>마을버스</strong>
                    <br />
                    수영교차로.팔도시장 : 해운대구3
                  </p>
                </div>
              </div>
              <div className="info-card">
                <h3>주차</h3>
                <p>지정주차장 : 남강민물장어 주차장</p>
                <p>
                  부산시 수영구 수영로 725번길 55 (병원 뒷편, 킹마트 맞은편
                  가게)
                </p>
                <p>※ 주차 후 접수대에 말씀해주시면 주차권 드립니다.</p>
                <p>
                  ※ 건물 내에 주차장이 없어서 불편 드린 점 너른 양해
                  부탁드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>강남제신경과의원</h3>
              <p>부산시 수영구 수영로 697, 홍인빌딩 5층</p>
              <p style={{ color: "white", WebkitTextFillColor: "white" }}>
                Tel:{" "}
                <a
                  href="tel:051-759-7676"
                  style={{
                    color: "white",
                    WebkitTextFillColor: "white",
                    textDecoration: "none",
                  }}
                >
                  051-759-7676
                </a>
              </p>
            </div>
            <div className="footer-links">
              <Link href="/privacy">개인정보보처리방침</Link>
              <Link href="/terms">이용약관</Link>
              <Link href="/map">오시는 길</Link>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 강남제신경과의원. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://blog.naver.com/kangnamjeneurology"
        className="blog-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        블로그
      </a>
    </>
  );
}
