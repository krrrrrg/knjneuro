"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 햄버거 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 화면 크기가 변경될 때 메뉴 상태 관리
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // 페이지 변경 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo2.png" alt="강남제신경과의원" />
          </Link>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/about">병원소개</Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
            >
              진료 안내
            </Link>
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
          <li>
            <a
              href="https://blog.naver.com/kangnamjeneurology"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
