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
            <h2 className="section-title">의료진 소개</h2>

            <div className="doctor-card">
              <div className="doctor-image-wrapper">
                <img src="/5.png" alt="강남제 원장" />
              </div>
              <h3>강남제 원장</h3>
              <p className="doctor-specialty">신경과 전문의</p>

              <div className="doctor-credentials-card">
                <p>부산대학교 의과대학, 대학원 졸업</p>
                <p>前 대동병원 신경과장</p>
                <p>前 광혜병원 신경과장</p>
                <p>前 행복한병원 신경과장</p>
                <p>前 서호병원 신경과장 겸 진료부장</p>
                <p>대한 신경과학회 정회원</p>
                <p>대한 뇌졸중학회 정회원</p>
                <p>대한 치매학회 정회원</p>
                <p>대한 두통학회 정회원</p>
                <p>대한 간질학회 정회원</p>
                <p>대한 신경생리학회 정회원</p>
                <p>대한 노인신경의학회 정회원</p>
                <p>대한 MG학회 정회원</p>
              </div>

              <div className="doctor-expertise">
                <h4>전문 진료분야</h4>
                <p>두통 / 수면장애 / 뇌졸중 / 어지럼증</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
