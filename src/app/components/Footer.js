import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © 2025 KNJ 신경과의원. 모든 권리 보유.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              개인정보처리방침
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              병원소개
            </a>
            <a href="/map" className="text-gray-600 hover:text-gray-900">
              오시는 길
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
