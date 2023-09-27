import React from "react";
import "@/public/scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="m-inner">
        <footer className="footer-inner">
          <p className="footer-brand">
            <span className="logo">
              <img src="/logo.png" alt="logo" decoding="async" />
            </span>
            <span className="text">國立政治大學心理學系排球隊</span>
          </p>
          <nav className="footer-nav">
            <div className="footer-nav-group">
              <a href="/" className="footer-nav-link">
                首頁
              </a>
              <a href="/" className="footer-nav-link">
                歷屆成員
              </a>
              <a href="/" className="footer-nav-link">
                照片紀念
              </a>
              <a href="/" className="footer-nav-link">
                關於我們
              </a>
            </div>
            <div className="footer-nav-group">
              <a href="/" className="footer-nav-link">
                首頁
              </a>
              <a href="/" className="footer-nav-link">
                首頁
              </a>
              <a href="/" className="footer-nav-link">
                首頁
              </a>
              <a href="/" className="footer-nav-link">
                首頁
              </a>
            </div>
          </nav>
          <div className="footer-copyright">
            <p className="text">@2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
