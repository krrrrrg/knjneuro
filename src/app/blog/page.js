"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="blog">
          <div className="container">
            <h2>블로그</h2>
            <div className="blog-content">
              <p>블로그 콘텐츠가 준비 중입니다.</p>
              {/* 블로그 콘텐츠를 여기에 추가하세요 */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
