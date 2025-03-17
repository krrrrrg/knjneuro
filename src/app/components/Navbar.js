"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 햄버거 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 스크롤 감지 기능
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo2.png" alt="강남제신경과의원" />
          </Link>
        </div>
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={pathname === "/" ? "active" : ""}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={pathname === "/about" ? "active" : ""}
            >
              병원소개
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              진료과목
            </Link>
          </li>
          <li>
            <Link
              href="/doctors"
              onClick={() => setIsMenuOpen(false)}
              className={pathname === "/doctors" ? "active" : ""}
            >
              의료진
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              onClick={() => setIsMenuOpen(false)}
              className={pathname === "/reservation" ? "active" : ""}
            >
              진료안내
            </Link>
          </li>
          <li>
            <Link
              href="/map"
              onClick={() => setIsMenuOpen(false)}
              className={pathname === "/map" ? "active" : ""}
            >
              오시는 길
            </Link>
          </li>
          <li>
            <a
              href="https://blog.naver.com/kangnamjeneurology"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              블로그
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
