"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Reservation() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <section id="reservation" data-aos="fade-up">
          <div className="container">
            <br />
            <h2 className="section-title">진료문의</h2>
            <div className="reservation-content">
              <div className="reservation-info">
                <div className="info-card">
                  <h3>진료시간</h3>
                  <ul>
                    <li>평일: 09:00 - 17:40</li>
                    <li>수/토요일: 09:00 - 12:30</li>
                    <li>점심시간: 12:50 - 14:00</li>
                    <li>일요일/공휴일: 휴진</li>
                  </ul>
                </div>
                <div className="info-card">
                  <h3>예약문의</h3>
                  <a href="tel:051-759-7676" className="phone">
                    051-759-7676
                  </a>
                  <a
                    href="https://pf.kakao.com/_UxhvRn"
                    className="kakao-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    카카오톡: 강남제신경과의원
                  </a>
                </div>
                <div className="info-card">
                  <h3>오시는 길</h3>
                  <p>부산시 수영구 수영로 697</p>
                  <p>홍인빌딩 5층</p>
                  <p className="transport">
                    <strong>지하철</strong>
                    <br />
                    2호선, 3호선 수영역 3번 출구 도보 1분
                  </p>
                  <p className="transport">
                    <strong>버스</strong>
                    <br />
                    간선버스: 139, 140, 144
                    <br />
                    지선버스: 3, 39, 83
                  </p>
                </div>
              </div>
            </div>
            {/* 주석 처리된 예약 폼 부분은 필요시 주석 해제
            <form className="reservation-form">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">생년월일</label>
                <input
                  type="text"
                  id="birthdate"
                  placeholder="예) 19801231"
                  maxLength="8"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">예약희망일</label>
                <input type="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">예약희망시간</label>
                <select id="time" required>
                  <option value="">선택해주세요</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="doctor">담당의사</label>
                <select id="doctor" required>
                  <option value="">선택해주세요</option>
                  <option value="김브레인">김브레인 원장</option>
                  <option value="이뇌신">이뇌신 원장</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">증상 및 문의사항</label>
                <textarea id="message" rows="4"></textarea>
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">
                  개인정보 수집 및 이용에 동의합니다.
                  <Link href="/privacy" target="_blank">[자세히 보기]</Link>
                </label>
              </div>
              <button type="submit" className="submit-button">예약하기</button>
            </form>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
