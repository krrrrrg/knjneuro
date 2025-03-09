"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Doctors() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="doctors">
          <div className="container">
            <h2>의료진 소개</h2>
            <div className="doctor-profile detailed">
              <div className="doctor-image-container">
                <Image
                  src="/5.png"
                  alt="신경과 전문의 강남제 원장"
                  className="doctor-image"
                  width={300}
                  height={400}
                  priority
                />
              </div>
              <div className="doctor-info">
                <h3>강남제 원장</h3>
                <p className="doctor-title">신경과 전문의</p>
                <div className="doctor-credentials">
                  <p>부산대학교 의과대학, 대학원 졸업</p>
                  <p>대한 신경과학회 정회원</p>
                </div>
                <div className="doctor-specialties">
                  <h4>전문 진료분야</h4>
                  <p>두통 / 수면장애 / 뇌졸중 / 어지럼증</p>
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
