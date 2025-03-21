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
            <h2>병원소개</h2>
            <br />
            <div className="about-content">
              <div className="about-text">
              <h3>
              몸과 마음의 불편함을 편안히 상담할 수 있도록, 한 분 한 분께 정성을 다해 진료하겠습니다.
              </h3>
              <p>
              20년 이상의 풍부한 임상경험을 바탕으로 정확한 진단과 치료를 제공합니다. 편안한 진료환경에서 여러분의 건강을 책임지겠습니다.
              </p>
              <ul className="about-features">
                <li>✓ 신경과 전문의의 정확한 진단</li>
                <li>✓ 처음부터 끝까지, 대표원장의 섬세한 진료</li>
                <li>✓ 질환의 원인별 맞춤 진료</li>
                <li>✓ 충분한 진료시간</li>
                <li>✓ 물리치료 가능</li>
              </ul>
              </div>
              <div className="about-image">
                <Image
                  src="/2-1.jpeg"
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
