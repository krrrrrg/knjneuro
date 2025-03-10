"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Services() {
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
      modal.style.display = 'block';
      
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
    // AOS 초기화
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }
    
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
    
    // 모달 닫기 버튼 이벤트 (자동으로 onClick으로 처리됨)
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('click', handleModalClick);
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
              <div 
                className="service-card" 
                onClick={() => showModal('headacheModal')}
              >
                <Image
                  src="/images/두통.png"
                  alt="두통"
                  width={100}
                  height={100}
                />
                <h3>뇌 신경계 질환</h3>
                <p>뇌졸중, 치매, 파킨슨씨병, 떨림 등</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('sleepModal')}
              >
                <Image
                  src="/images/수면.png"
                  alt="수면장애"
                  width={100}
                  height={100}
                />
                <h3>두통 및 어지럼증</h3>
                <p>편두통 및 이석증, 메니에르병</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('dementiaModal')}
              >
                <Image
                  src="/images/치매.png"
                  alt="치매"
                  width={100}
                  height={100}
                />
                <h3>신경 통증 클리닉</h3>
                <p>손발 저림, 근골격계 통증, 안면마비</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('internalModal')}
              >
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
                <li>손발 저림</li>
                <li>경추통증</li>
                <li>요통</li>
                <li>근골격계 통증</li>
                <li>안면마비</li>
                <li>삼차신경통</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>신경전도검사</li>
                <li>근전도검사</li>
                <li>자율신경검사</li>
                <li>척추 MRI</li>
                <li>X-ray 검사</li>
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

      <Footer />
    </>
  );
}
