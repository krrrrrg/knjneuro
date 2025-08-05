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
            <br />
            <h2>진료과목</h2>
            <div className="service-grid">
              <div 
                className="service-card" 
                onClick={() => showModal('brainModal')}
              >
                <Image
                  src="/images/치매.png"
                  alt="치매"
                  width={100}
                  height={100}
                />
              <h3>뇌 질환</h3>
              <p>뇌졸중, 치매, 파킨슨씨병</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('headacheModal')}
              >
                <Image
                  src="/images/어지럼증.png"
                  alt="어지럼증"
                  width={100}
                  height={100}
                />
              <h3>두통 및 어지럼증</h3>
              <p>편두통, 이석증, 경추두개증후군 등</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('autonomicModal')}
              >
                <Image
                  src="/images/두통.png"
                  alt="두통"
                  width={100}
                  height={100}
                />
              <h3>자율신경계 질환</h3>
              <p>자율신경병증, 기립성 저혈압</p>
              </div>
              <div 
                className="service-card" 
                onClick={() => showModal('nerveModal')}
              >
                <Image
                  src="/images/손발저림.png"
                  alt="손발저림"
                  width={100}
                  height={100}
                />
              <h3>신경계 질환</h3>
              <p>손발저림, 안면신경마비</p>
              </div>

              <div 
                className="service-card" 
                onClick={() => showModal('painModal')}
              >
                <Image
                  src="/images/근골격계.png"
                  alt="근골격계"
                  width={100}
                  height={100}
                />
              <h3>통증 클리닉</h3>
              <p>근골격계 통증, 말초신경병증</p>
              </div>

              <div 
                className="service-card" 
                onClick={() => showModal('internalModal')}
              >
                <Image
                  src="/images/내과2.png"
                  alt="내과"
                  width={100}
                  height={100}
                />
              <h3>내과 진료</h3>
              <p>혈압, 당뇨, 고지혈증, 비만, 영양요법</p>
              </div>
            </div>
          </div>
        </section>

        {/* 의료장비 섹션 추가 */}
        <section id="medical-equipment" data-aos="fade-up">
          <div className="container">
            <br />
            <h2>검사 항목 및 기기 안내</h2>
            <p className="section-description">
            강남제신경과는 여러 의료 장비들을 통해 정확한 진단을 위해 노력합니다.
            </p>
            
            <div className="equipment-grid">
              {/* 첫번째 줄 - 5개 */}
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>동맥경화도 검사</h3>
                <p>사지 혈압 및 동맥경화도 측정</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>뇌혈류 초음파</h3>
                <p>뇌로 가는 큰 혈관의 속도 및 이상 확인</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <h3>경동맥 초음파</h3>
                <p>경동맥의 협착, 두께 등 확인</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-spinner"></i>
                </div>
                <h3>어지럼증 검사</h3>
                <p>이석증 및 어지럼증 확인</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>자율신경계 검사</h3>
                <p>스트레스 검사 및 기립성 저혈압 검사</p>
              </div>
            </div>
            
            {/* 두번째 줄 - 5개 */}
            <div className="equipment-grid" style={{ marginTop: "20px" }}>
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>신경전도, 근전도검사</h3>
                <p>신경의 전도 속도 및 근육 반응 평가</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h3>근골격계, 신경계 초음파</h3>
                <p>근육과 신경의 이상 확인</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-bone"></i>
                </div>
                <h3>골다공증 검사</h3>
                <p>뼈의 밀도를 측정</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>인지기능(치매)검사</h3>
                <p>인지기능장애부터 치매까지 인지기능의 정도 확인</p>
              </div>
              
              <div 
                className="equipment-card"
              >
                <div className="equipment-icon">
                  <i className="fas fa-vial"></i>
                </div>
                <h3>종합피검사</h3>
                <p>피검사, 소변검사 등 총 80여 가지 항목 검사</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 서비스 상세 모달들 - 각 모달을 완전히 분리 */}
      
      {/* 뇌 질환 모달 */}
      <div id="brainModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('brainModal')}></span>
          <h2>뇌 질환</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진료 분야</h3>
              </div>
              <ul>
                <li>뇌졸중 (중풍)</li>
                <li>치매</li>
                <li>파킨슨씨병</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>동맥경화도 검시</li>
                <li>뇌혈류 초음파 검사</li>
                <li>경동맥 초음파 검사</li>
                <li>인지기능(치매) 검사</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 두통 및 어지럼증 모달 */}
      <div id="headacheModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('headacheModal')}></span>
          <h2>두통 및 어지럼증</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진료 분야</h3>
              </div>
              <ul>
                <li>편두통</li>
                <li>긴장성 두통</li>
                <li>군발성 두통</li>
                <li>편두통성 어지럼증</li>
                <li>이석증</li>
                <li>메니에르병</li>
                <li>전정신경염</li>
                <li>경추두개증후군</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>뇌혈류 초음파 검사</li>
                <li>비디오 안전 검사 MRI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 자율신경계질환 모달 */}
      <div id="autonomicModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('autonomicModal')}></span>
          <h2>자율신경계 질환</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 질환</h3>
              </div>
              <ul>
                <li>자율신경병증</li>
                <li>기립성저혈압</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>자율신경 기능 검사</li>
                <li>기립 경사 테이블 검사</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 신경계 질환 모달 */}
      <div id="nerveModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('nerveModal')}></span>
          <h2>신경계 질환</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진료 분야</h3>
              </div>
              <ul>
                <li>손발저림</li>
                <li>손목터널 증후군</li>
                <li>발목터널 징후군</li>
                <li>삼차신경통</li>
                <li>안면마비</li>
                <li>구안와사</li>

              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>신경전도 검사</li>
                <li>근전도 검사</li>
                <li>신경 초음파 검사</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>


            {/* 통증 클리닉 모달 */}
            <div id="painModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('painModal')}></span>
          <h2>통증 클리닉</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진료 분야</h3>
              </div>
              <ul>
                <li>근골격계 통증</li>
                <li>목 통증</li>
                <li>경추간판장애 (목디스크)</li>
                <li>허리 통증</li>
                <li>요추간판장애 (허리디스크)</li>
                <li>어깨통증, 오십견</li>
                <li>근막 통증 증후군</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>신경전도 검사</li>
                <li>근전도 검사</li>
                <li>근 골격 초음파 검사</li>
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
                <li>골다공증</li>
                <li>대사증후군</li>
                <li>비만상담</li>
                <li>영양요법상담</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>관련 검사</h3>
              </div>
              <ul>
                <li>동맥경화도 검사</li>
                <li>경동맥 초음파 검사</li>
                <li>골밀도 검사</li>
                <li>일반, 특수 피검사</li>
                <li>종합 피검사 (약80종)</li>
                <li>수액 치료</li>
                <li>영양요법 치료</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 의료장비 모달들 */}
      {/* 근전도 검사 모달 */}
      <div id="emgModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('emgModal')}></span>
          <h2>근전도 검사 (EMG)</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                근전도 검사는 신경과 근육의 전기적 활동을 측정하여 신경 및 근육 질환을 진단하는 검사입니다.
                신경전도검사(NCS)와 함께 시행되어 말초신경병증, 근육병, 신경근병증 등을 진단하는 데 중요한 역할을 합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 진단 질환</h3>
              </div>
              <ul>
                <li>손목터널 증후군</li>
                <li>척추 디스크로 인한 신경 압박</li>
                <li>말초신경병증</li>
                <li>근육병</li>
                <li>운동신경원 질환</li>
                <li>신경근병증</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 과정</h3>
              </div>
              <p>
                검사는 약 30-60분 정도 소요되며, 통증은 경미합니다. 
                신경전도검사에서는 작은 전기 자극을 통해 신경의 전도 속도를 측정하고, 
                근전도검사에서는 가는 바늘 전극을 이용해 근육의 전기적 활동을 기록합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 초음파 검사 모달 */}
      <div id="ultrasoundModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('ultrasoundModal')}></span>
          <h2>초음파 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                초음파 검사는 고주파 음파를 이용하여 체내 구조물을 실시간으로 영상화하는 비침습적 검사입니다.
                방사선 노출 없이 안전하게 신경, 근육, 혈관 등의 상태를 확인할 수 있습니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 종류</h3>
              </div>
              <ul>
                <li>신경 초음파: 손목터널 증후군, 척골신경 포착 등 진단</li>
                <li>근골격계 초음파: 근육, 힘줄, 인대 손상 평가</li>
                <li>경동맥 초음파: 경동맥 협착, 동맥경화 평가</li>
                <li>심장 초음파: 심장 구조 및 기능 평가</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>장점</h3>
              </div>
              <p>
                통증이 없고 방사선 노출이 없어 안전합니다. 실시간으로 영상을 확인할 수 있어 
                동적 평가가 가능하며, 필요에 따라 반복 검사가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 자율신경 검사 모달 */}
      <div id="autonomicTestModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('autonomicTestModal')}></span>
          <h2>자율신경 기능 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                자율신경 기능 검사는 심장 박동, 혈압, 발한, 체온 조절 등을 담당하는 자율신경계의 
                기능을 평가하는 검사입니다. 다양한 생리적 자극에 대한 신체 반응을 측정합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 검사 항목</h3>
              </div>
              <ul>
                <li>기립 경사 테이블 검사: 기립성 저혈압 평가</li>
                <li>심박변이도 검사: 심장 자율신경 기능 평가</li>
                <li>발한 검사: 땀샘 기능 평가</li>
                <li>혈관운동 반응 검사: 혈관 조절 기능 평가</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>적용 질환</h3>
              </div>
              <ul>
                <li>자율신경병증</li>
                <li>기립성 저혈압</li>
                <li>실신</li>
                <li>당뇨병성 자율신경병증</li>
                <li>만성 피로 증후군</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 골밀도 검사 모달 */}
      <div id="boneDensityModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('boneDensityModal')}></span>
          <h2>골밀도 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                골밀도 검사는 뼈의 밀도를 측정하여 골다공증을 진단하고 골절 위험을 평가하는 검사입니다.
                저선량 X선을 이용하여 주로 척추와 고관절의 골밀도를 측정합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 대상</h3>
              </div>
              <ul>
                <li>65세 이상 여성, 70세 이상 남성</li>
                <li>폐경 후 여성</li>
                <li>골절 위험 요인이 있는 성인</li>
                <li>스테로이드 장기 복용자</li>
                <li>골다공증 치료 중인 환자 (치료 효과 모니터링)</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 결과 해석</h3>
              </div>
              <p>
                T-점수를 기준으로 골밀도 상태를 평가합니다:
                <br />-1.0 이상: 정상
                <br />-1.0 ~ -2.5: 골감소증
                <br />-2.5 미만: 골다공증
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 동맥경화도 검사 모달 */}
      <div id="arterialStiffnessModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('arterialStiffnessModal')}></span>
          <h2>동맥경화도 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                동맥경화도 검사는 혈관의 탄력성과 경직도를 측정하여 심혈관 질환의 위험을 평가하는 검사입니다.
                맥파 속도(PWV)와 맥파 증강 지수(AI)를 측정하여 혈관 건강 상태를 확인합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 방법</h3>
              </div>
              <p>
                팔과 발목에 혈압 커프를 착용하고 맥파를 측정합니다. 비침습적이고 통증이 없으며 
                약 5-10분 정도 소요됩니다. 검사 전 30분간 카페인, 흡연을 피하고 안정을 취하는 것이 좋습니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>임상적 의의</h3>
              </div>
              <ul>
                <li>조기 동맥경화 발견</li>
                <li>심혈관 질환 위험 예측</li>
                <li>고혈압, 당뇨병 환자의 혈관 건강 모니터링</li>
                <li>심혈관 질환 예방 및 치료 효과 평가</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 종합 혈액검사 모달 */}
      <div id="bloodTestModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('bloodTestModal')}></span>
          <h2>종합 혈액검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                종합 혈액검사는 약 80여 가지 항목을 검사하여 전반적인 건강 상태와 질병 위험을 평가합니다.
                혈액 샘플을 통해 다양한 생화학적 지표, 호르몬, 염증 지표, 영양 상태 등을 확인할 수 있습니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 검사 항목</h3>
              </div>
              <ul>
                <li>일반 혈액검사: 적혈구, 백혈구, 혈소판 등</li>
                <li>간 기능 검사: AST, ALT, GGT 등</li>
                <li>신장 기능 검사: BUN, 크레아티닌 등</li>
                <li>지질 검사: 총 콜레스테롤, HDL, LDL, 중성지방</li>
                <li>당뇨 관련: 공복혈당, 당화혈색소</li>
                <li>갑상선 기능: TSH, Free T4</li>
                <li>염증 지표: CRP, ESR</li>
                <li>비타민 및 미네랄: 비타민 D, B12, 철분 등</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 준비</h3>
              </div>
              <p>
                정확한 결과를 위해 검사 전 8-12시간 금식이 필요합니다. 
                물은 마실 수 있으나 카페인, 알코올은 피해야 합니다.
                복용 중인 약물이 있다면 의사와 상담 후 검사를 진행하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 뇌혈류 초음파 모달 */}
      <div id="cerebralBloodFlowModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('cerebralBloodFlowModal')}></span>
          <h2>뇌혈류 초음파</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                뇌혈류 초음파는 초음파를 이용하여 두개내 혈관의 혈류 속도와 패턴을 측정하는 비침습적 검사입니다.
                뇌졸중 위험 평가, 혈관 협착 진단, 두개내 혈류 상태 평가 등에 유용합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 방법</h3>
              </div>
              <p>
                초음파 프로브를 측두골 창(temporal window)이나 안와(orbit), 후두하(suboccipital) 부위에 위치시켜
                두개내 혈관의 혈류를 측정합니다. 통증이 없고 방사선 노출이 없는 안전한 검사입니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>임상적 의의</h3>
              </div>
              <ul>
                <li>뇌졸중 위험 평가</li>
                <li>두개내 혈관 협착 진단</li>
                <li>뇌혈관 반응성 평가</li>
                <li>뇌혈류 역학적 상태 모니터링</li>
                <li>미세 색전증 감지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 경동맥 초음파 모달 */}
      <div id="carotidUltrasoundModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('carotidUltrasoundModal')}></span>
          <h2>경동맥 초음파</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                경동맥 초음파는 목 부위의 주요 혈관인 경동맥의 구조와 혈류를 평가하는 비침습적 검사입니다.
                동맥경화, 협착, 혈류 이상 등을 감지하여 뇌졸중 위험을 평가하는 데 중요합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 방법</h3>
              </div>
              <p>
                초음파 프로브를 목 부위에 위치시켜 경동맥의 내막-중막 두께, 플라크 유무, 협착 정도, 혈류 속도 등을 측정합니다. 
                약 15-20분 소요되며 통증이나 부작용 없이 안전하게 진행됩니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>임상적 의의</h3>
              </div>
              <ul>
                <li>경동맥 협착 진단</li>
                <li>동맥경화 조기 발견</li>
                <li>뇌졸중 위험 예측</li>
                <li>심혈관 질환 위험 평가</li>
                <li>혈관 수술 전후 평가</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 어지럼증 검사 모달 */}
      <div id="vertigoTestModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('vertigoTestModal')}></span>
          <h2>어지럼증 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                어지럼증 검사는 평형기능과 전정기능을 평가하여 어지럼증의 원인을 파악하는 검사입니다.
                전정안구반사, 안진, 자세 안정성 등을 측정하여 어지럼증의 유형과 원인을 감별합니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 검사 항목</h3>
              </div>
              <ul>
                <li>Dix-Hallpike 검사: 이석증 진단</li>
                <li>비디오안진검사(VNG): 안구 움직임 기록 및 분석</li>
                <li>자세검사: 체위성 어지럼증 평가</li>
                <li>동적자세검사: 균형 기능 평가</li>
                <li>회전의자검사: 전정기능 평가</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>적용 질환</h3>
              </div>
              <ul>
                <li>양성돌발성체위성현훈(이석증)</li>
                <li>메니에르병</li>
                <li>전정신경염</li>
                <li>편두통성 어지럼증</li>
                <li>중추성 어지럼증</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 인지기능(치매) 검사 모달 */}
      <div id="cognitiveModal" className="modal">
        <div className="modal-content">
          <span className="close-button" title="닫기" onClick={() => hideModal('cognitiveModal')}></span>
          <h2>인지기능(치매) 검사</h2>
          <div className="detail-content">
            <div className="detail-section">
              <div className="service-section">
                <h3>검사 개요</h3>
              </div>
              <p>
                인지기능 검사는 기억력, 집중력, 언어능력, 시공간 능력, 실행기능 등 다양한 인지 영역을 평가하여
                치매나 경도인지장애의 조기 발견 및 진단에 활용되는 검사입니다.
              </p>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>주요 검사 항목</h3>
              </div>
              <ul>
                <li>간이정신상태검사(MMSE): 전반적 인지기능 선별</li>
                <li>몬트리올 인지평가(MoCA): 경도인지장애 감별</li>
                <li>임상치매평가척도(CDR): 치매 중증도 평가</li>
                <li>전산화 인지기능검사: 다양한 인지영역 세부 평가</li>
                <li>일상생활수행능력 평가: 기능적 능력 평가</li>
              </ul>
            </div>
            <div className="detail-section">
              <div className="service-section">
                <h3>임상적 의의</h3>
              </div>
              <ul>
                <li>치매 조기 발견 및 진단</li>
                <li>경도인지장애(MCI) 감별</li>
                <li>인지장애 유형 분류</li>
                <li>인지기능 변화 추적</li>
                <li>치료 효과 평가</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
