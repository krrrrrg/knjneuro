"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section className="policy-section" data-aos="fade-up">
          <div className="container">
            <h2>개인정보처리방침</h2>
            <br />
            <div className="policy-content">
              <h3>1. 개인정보의 처리 목적</h3>
              <p>
                강남제신경과는 다음의 목적을 위하여 개인정보를 처리하고 있으며,
                다음의 목적 이외의 용도로는 이용하지 않습니다.
              </p>
              <ul>
                <li>진료 예약 및 관리</li>
                <li>진료 기록 보관</li>
                <li>진료비 청구 및 수납</li>
                <li>의료서비스 안내</li>
              </ul>

              <h3>2. 개인정보의 처리 및 보유 기간</h3>
              <p>
                관련 법령에 따라 진료기록은 최소 10년간 보관됩니다. 그 외
                개인정보는 수집·이용 목적 달성 시까지만 보유합니다.
              </p>

              {/* 추가적인 개인정보처리방침 내용 */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
