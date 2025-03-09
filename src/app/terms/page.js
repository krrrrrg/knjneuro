"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo2.png" alt="강남제신경과의원" />
            </Link>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/about">병원소개</Link>
            </li>
            <li>
              <Link href="/services">진료안내</Link>
            </li>
            <li>
              <Link href="/doctors">의료진</Link>
            </li>
            <li>
              <Link href="/reservation">진료문의</Link>
            </li>
            <li>
              <Link href="/map">오시는 길</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="page-content">
        <section className="policy-section" data-aos="fade-up">
          <div className="container">
            <h2>이용약관</h2>
            <br />
            <div className="policy-content">
              <h3>제1조 (목적)</h3>
              <p>
                이 약관은 강남제신경과(이하 "병원")가 제공하는 의료서비스 및
                온라인 예약 서비스의 이용조건 및 절차, 병원과 이용자의 권리,
                의무, 책임사항을 규정함을 목적으로 합니다.
              </p>

              <h3>제2조 (정의)</h3>
              <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ul>
                <li>
                  "서비스"란 병원이 제공하는 의료서비스 및 온라인 예약 서비스를
                  말합니다.
                </li>
                <li>
                  "이용자"란 이 약관에 따라 병원이 제공하는 서비스를 이용하는
                  자를 말합니다.
                </li>
              </ul>

              {/* 추가적인 이용약관 내용 */}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>강남제신경과의원</h3>
              <p>부산시 수영구 수영로 697, 홍인빌딩 5층</p>
              <p style={{ color: "white", WebkitTextFillColor: "white" }}>
                Tel:{" "}
                <a
                  href="tel:051-759-7676"
                  style={{
                    color: "white",
                    WebkitTextFillColor: "white",
                    textDecoration: "none",
                  }}
                >
                  051-759-7676
                </a>
              </p>
            </div>
            <div className="footer-links">
              <Link href="/privacy">개인정보처리방침</Link>
              <Link href="/terms">이용약관</Link>
              <Link href="/map">오시는 길</Link>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 강남제신경과. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
