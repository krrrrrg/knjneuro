"use client";

import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
