import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-mono">KS</span>
          <span className="footer__brand-name">Kunver Sudhanshu</span>
        </div>
        <p className="footer__text">
          Designed & built with React.js
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} — Jamshedpur, India</p>
      </div>
    </footer>
  );
}
