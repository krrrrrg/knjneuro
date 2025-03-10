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
              <div className="doctor-profile">
                <div className="doctor-image-container">
                  <img
                    src="/5.png"
                    alt="강남제 원장"
                    className="doctor-image"
                  />
                </div>
                <div className="doctor-info">
                  <h3>강남제 원장</h3>
                  <p className="doctor-specialty">신경과 전문의</p>

                  <div className="doctor-education">
                    <p>부산대학교 의과대학, 대학원 졸업</p>
                    <p>대한 신경과학회 정회원</p>
                  </div>

                  <div className="doctor-expertise">
                    <h4>전문 진료분야</h4>
                    <p>두통 / 수면장애 / 뇌졸중 / 어지럼증</p>
                  </div>
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
