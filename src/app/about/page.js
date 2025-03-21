"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="about" data-aos="fade-up">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">병원소개</h2>
              <p className="section-subtitle">강남제신경과의원에 오신 것을 환영합니다</p>
            </div>
            
            <div className="about-content">
              <div className="about-text">
                <div className="about-intro">
                  <h3>몸과 마음의 불편함을 편안히 상담할 수 있도록, 한 분 한 분께 정성을 다해 진료하겠습니다.</h3>
                  
                  <p>20년 이상의 풍부한 임상경험을 바탕으로 정확한 진단과 치료를 제공합니다. 편안한 진료환경에서 여러분의 건강을 책임지겠습니다.</p>
                </div>
                
                <div className="feature-list-wrapper">
                  <h4 className="feature-title">진료 특징</h4>
                  <ul className="about-features">
                    <li><span>신경과 전문의의 정확한 진단</span></li>
                    <li><span>처음부터 끝까지, 대표원장의 섬세한 진료</span></li>
                    <li><span>질환의 원인별 맞춤 진료</span></li>
                    <li><span>충분한 진료시간</span></li>
                    <li><span>물리치료 가능</span></li>
                  </ul>
                </div>
                
                <div className="about-cta">
                  <a href="/reservation" className="btn-primary">진료 예약하기</a>
                </div>
              </div>
              
              <div className="about-image">
                <div className="image-wrapper">
                  <Image
                    src="/2-1.jpeg"
                    alt="강남제신경과의원 내부"
                    width={500}
                    height={350}
                    priority
                    className="main-image"
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="experience-badge">
                  <div className="experience-number">20<span>년</span></div>
                  <div className="experience-text">풍부한 임상경험</div>
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
