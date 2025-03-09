"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "올바른/경로/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="page-content">
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
                  제공합니다. 최신 의료장비와 편안한 진료환경에서 여러분의
                  건강을 책임지겠습니다.
                </p>
                <ul className="about-features">
                  <li>✓ 대학병원급 최신 의료장비 보유</li>
                  <li>✓ 전문의 1:1 맞춤 상담</li>
                  <li>✓ 빠르고 정확한 진단</li>
                  <li>✓ 충분한 진료시간</li>
                </ul>
              </div>
              <div className="about-image">
                <Image
                  src="/2.jpg"
                  alt="강남제신경과의원 내부"
                  width={500}
                  height={350}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
