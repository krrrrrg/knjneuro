"use client";

import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
