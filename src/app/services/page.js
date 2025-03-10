"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Services() {
  useEffect(() => {
    // AOS 초기화
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }

    // 모달 기능 구현
    const modal = document.getElementById("serviceModal");
    const serviceCards = document.querySelectorAll(".service-card");
    const closeButton = document.querySelector(".close-button");

    const showServiceDetail = (serviceId) => {
      modal.style.display = "block";
      document.querySelectorAll(".service-detail").forEach((detail) => {
        detail.style.display = "none";
      });
      document.getElementById(`${serviceId}Detail`).style.display = "block";
    };

    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        const serviceId = card.getAttribute("data-service");
        showServiceDetail(serviceId);
      });
    });

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("click", () => {});
      });
      if (closeButton) {
        closeButton.removeEventListener("click", () => {});
      }
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="services" data-aos="fade-up">
          <div className="container">
            <br />
            <h2>진료안내</h2>
            <div className="service-grid">
              <div className="service-card" data-service="headache">
                <Image
                  src="/images/두통.png"
                  alt="두통"
                  width={100}
                  height={100}
                />
                <h3>뇌 신경계 질환</h3>
                <p>뇌졸중, 치매, 파킨슨씨병, 떨림 등</p>
              </div>
              <div className="service-card" data-service="sleep">
                <Image
                  src="/images/수면.png"
                  alt="수면장애"
                  width={100}
                  height={100}
                />
                <h3>두통 및 어지럼증</h3>
                <p>편두통 및 이석증, 메니에르병</p>
              </div>
              <div className="service-card" data-service="dementia">
                <Image
                  src="/images/치매.png"
                  alt="치매"
                  width={100}
                  height={100}
                />
                <h3>신경 통증 클리닉</h3>
                <p>손발 저림, 근골격계 통증, 안면마비</p>
              </div>
              <div className="service-card" data-service="internal">
                <Image
                  src="/images/치매.png"
                  alt="내과"
                  width={100}
                  height={100}
                />
                <h3>내과 진료</h3>
                <p>협압, 당뇨, 비만, 영양요법</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 서비스 상세 모달 */}
      <div id="serviceModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기"></span>

          {/* 두통 클리닉 상세 */}
          <div id="headacheDetail" className="service-detail">
            <h2>뇌 신경계 질환</h2>
            <div className="detail-content">
              <div className="detail-section">
                <div className="service-section">
                  <h3>주요 증상</h3>
                </div>
                <ul>
                  <li>만성 편두통</li>
                  <li>긴장성 두통</li>
                  <li>군발성 두통</li>
                  <li>경추성 두통</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>진단 방법</h3>
                </div>
                <ul>
                  <li>두통 일기를 통한 분석</li>
                  <li>신경학적 검사</li>
                  <li>필요시 MRI, CT 검사</li>
                  <li>혈액 검사</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>치료 방법</h3>
                </div>
                <ul>
                  <li>약물 치료</li>
                  <li>주사 치료</li>
                  <li>생활습관 개선</li>
                  <li>스트레스 관리</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 수면 클리닉 상세 */}
          <div id="sleepDetail" className="service-detail">
            <h2>수면 클리닉</h2>
            <div className="detail-content">
              <div className="detail-section">
                <div className="service-section">
                  <h3>주요 증상</h3>
                </div>
                <ul>
                  <li>수면무호흡증</li>
                  <li>불면증</li>
                  <li>하지불안증후군</li>
                  <li>과다수면</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>진단 방법</h3>
                </div>
                <ul>
                  <li>수면다원검사</li>
                  <li>수면 일기 분석</li>
                  <li>활동기록계 검사</li>
                  <li>수면 설문지</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>치료 방법</h3>
                </div>
                <ul>
                  <li>양압기 치료</li>
                  <li>약물 치료</li>
                  <li>수면위생 교육</li>
                  <li>인지행동치료</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 치매 클리닉 상세 */}
          <div id="dementiaDetail" className="service-detail">
            <h2>치매 클리닉</h2>
            <div className="detail-content">
              <div className="detail-section">
                <div className="service-section">
                  <h3>주요 증상</h3>
                </div>
                <ul>
                  <li>기억력 저하</li>
                  <li>판단력 감퇴</li>
                  <li>언어능력 저하</li>
                  <li>일상생활 수행의 어려움</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>진단 방법</h3>
                </div>
                <ul>
                  <li>신경인지검사</li>
                  <li>뇌 MRI 검사</li>
                  <li>혈액검사</li>
                  <li>치매선별검사</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>치료 방법</h3>
                </div>
                <ul>
                  <li>약물 치료</li>
                  <li>인지재활치료</li>
                  <li>생활습관 개선</li>
                  <li>가족 교육</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 내과 클리닉 상세 */}
          <div id="internalDetail" className="service-detail">
            <h2>내과 진료</h2>
            <div className="detail-content">
              <div className="detail-section">
                <div className="service-section">
                  <h3>주요 진료 분야</h3>
                </div>
                <ul>
                  <li>고혈압</li>
                  <li>당뇨</li>
                  <li>비만</li>
                  <li>영양요법</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>진단 방법</h3>
                </div>
                <ul>
                  <li>혈액검사</li>
                  <li>소변검사</li>
                  <li>체성분 분석</li>
                  <li>혈압 모니터링</li>
                </ul>
              </div>
              <div className="detail-section">
                <div className="service-section">
                  <h3>치료 방법</h3>
                </div>
                <ul>
                  <li>약물 치료</li>
                  <li>식이요법</li>
                  <li>생활습관 개선</li>
                  <li>정기적 건강 체크</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
