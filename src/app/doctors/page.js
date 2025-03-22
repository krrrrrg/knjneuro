"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Doctors() {
  useEffect(() => {
    // AOS 초기화 (필요한 경우)
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="doctors" className="doctor-profile-section">
          <div className="container">
            <br />
            <h2 className="section-title">의료진 소개</h2>

            <div className="doct`or-card">
              <div className="doctor-image-wrapper">
                <img src="/5.png" alt="강남제 원장" />
              </div>
              <h3 style={{ textAlign: 'center', width: '100%' }}>강남제 <span style={{ fontSize: '0.8em' }}>원장</span></h3>
              <p className="doctor-specialty">신경과 전문의</p>

              <div className="doctor-credentials-card">
                <p>부산대학교 의과대학, 대학원 졸업</p>
                <p>대한 신경과학회 정회원</p>
              </div>

              <div className="doctor-expertise">
                <h4 className="doctor-philosophy-title"> </h4>
                <div className="doctor-philosophy-content">
                  <p>강남제신경과는 내 주치의 진료를 표방합니다.</p>
                  <p>진료 받으시면서 타과 질환에 대해 상담하시면 최선을 다해 안내하여 타병원에서 원활한 진료를 받을 수 있도록 도와 드리고자 합니다.</p>
                  <p>건강검진결과나 타 병원검사 결과, 영상 자료 등을 가지고 오시면 이에 대한 적합한 방법을 찾아드리겠습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
