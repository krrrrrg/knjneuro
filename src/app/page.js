"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
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

          // 초기에 정보창 표시
          infowindow.open(map, marker);
        }
      } catch (e) {
        console.error("네이버 지도 API 로드 중 오류 발생:", e);
      }
    }

    // 네이버 지도 스크립트 로드
    const loadNaverMap = () => {
      const script = document.createElement("script");
      script.src =
        "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4h549yr3fc";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadNaverMap();

    // 서비스 상세 모달 기능
    function showServiceDetail(serviceType) {
      const modal = document.getElementById("serviceModal");
      const details = document.querySelectorAll(".service-detail");

      details.forEach((detail) => {
        detail.style.display = "none";
      });

      const selectedDetail = document.getElementById(`${serviceType}Detail`);
      if (selectedDetail) {
        selectedDetail.style.display = "block";
      }

      if (modal) {
        modal.style.display = "flex";
      }
    }

    // 서비스 카드 클릭 이벤트 추가
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        const serviceType = card.getAttribute("data-service");
        showServiceDetail(serviceType);
      });
    });

    // 모달 닫기 버튼
    const closeButton = document.querySelector(".close-button");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        const modal = document.getElementById("serviceModal");
        if (modal) {
          modal.style.display = "none";
        }
      });
    }

    // 모달 외부 클릭 시 닫기
    window.addEventListener("click", (e) => {
      const modal = document.getElementById("serviceModal");
      if (modal && e.target === modal) {
        modal.style.display = "none";
      }
    });

    // 전역 함수로 등록
    window.showServiceDetail = showServiceDetail;
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
              data-service="headache"
              onClick={() => window.showServiceDetail("headache")}
            >
              <img src="/images/두통.png" alt="두통" />
              <h3>뇌 신경계 질환</h3>
              <p>뇌졸중, 치매, 파킨슨씨병 , 떨림 등</p>
            </div>
            <div
              className="service-card"
              data-service="sleep"
              onClick={() => window.showServiceDetail("sleep")}
            >
              <img src="/images/수면.png" alt="수면장애" />
              <h3>두통 및 어지럼증</h3>
              <p>편두통 및 이석증 , 메니에르병</p>
            </div>
            <div
              className="service-card"
              data-service="dementia"
              onClick={() => window.showServiceDetail("dementia")}
            >
              <img src="/images/치매.png" alt="치매" />
              <h3>신경 통증 클리닉</h3>
              <p>손발 저림, 근골격계 통증, 안면마비</p>
            </div>
            <div
              className="service-card"
              data-service="dementia"
              onClick={() => window.showServiceDetail("dementia")}
            >
              <img src="/images/치매.png" alt="치매" />
              <h3>내과 진료</h3>
              <p>협압, 당뇨, 비만, 영양요법</p>
            </div>
          </div>
        </div>

        {/* 진료분야 상세 모달 */}
        <div id="serviceModal" className="modal">
          <div className="modal-content">
            <span className="close-button"></span>
            <div id="headacheDetail" className="service-detail">
              <h2>두통 클리닉</h2>
              <div className="detail-content">
                <div className="detail-section">
                  <h3>주요 증상</h3>
                  <ul>
                    <li>만성 편두통</li>
                    <li>긴장성 두통</li>
                    <li>군발성 두통</li>
                    <li>경추성 두통</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>진단 방법</h3>
                  <ul>
                    <li>정밀 두통 검사</li>
                    <li>뇌 MRI/MRA</li>
                    <li>경추부 X-ray</li>
                    <li>전문의 상담</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="sleepDetail" className="service-detail">
              <h2>수면 클리닉</h2>
              <div className="detail-content">
                <div className="detail-section">
                  <h3>주요 증상</h3>
                  <ul>
                    <li>수면무호흡증</li>
                    <li>불면증</li>
                    <li>하지불안증후군</li>
                    <li>과다수면</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>진단 방법</h3>
                  <ul>
                    <li>수면다원검사</li>
                    <li>수면잠복기검사</li>
                    <li>활동기록계검사</li>
                    <li>수면 설문평가</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>치료 방법</h3>
                  <ul>
                    <li>양압기 치료</li>
                    <li>수면위생교육</li>
                    <li>인지행동치료</li>
                    <li>맞춤형 약물치료</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="dementiaDetail" className="service-detail">
              <h2>치매 클리닉</h2>
              <div className="detail-content">
                <div className="detail-section">
                  <h3>주요 증상</h3>
                  <ul>
                    <li>기억력 저하</li>
                    <li>판단력 감퇴</li>
                    <li>언어능력 저하</li>
                    <li>일상생활 어려움</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>진단 방법</h3>
                  <ul>
                    <li>신경인지검사</li>
                    <li>뇌 CT/MRI</li>
                    <li>혈액검사</li>
                    <li>치매선별검사</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>치료 방법</h3>
                  <ul>
                    <li>약물치료</li>
                    <li>인지재활치료</li>
                    <li>가족상담</li>
                    <li>생활수칙 교육</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
