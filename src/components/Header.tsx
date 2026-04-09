"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-top-bar">
        <span className="topbar-full">📞 24/7 Booking: +91 92047 14249 &nbsp;|&nbsp; ✉️ info@sreetravel.com &nbsp;|&nbsp; 🏆 Jharkhand&apos;s Most Trusted Cab Service</span>
        <span className="topbar-mobile">📞 +91 92047 14249 &nbsp;|&nbsp; ✉️ info@sreetravel.com</span>
      </div>
      <div className="header-main">
        <a href="/" className="logo-area" style={{ textDecoration: 'none' }}>
          <div className="logo-img-wrap">
            <Image src="/logo.webp" alt="Sree Travels Logo" width={44} height={44} style={{ borderRadius: '8px' }} />
          </div>
          <div className="logo-text">
            <div className="logo-title">Sree Travels</div>
            <p>Jharkhand&apos;s #1 Cab Service</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="header-nav">
          <a href="/about" className="nav-link desktop-only">About</a>
          <a href="/contact" className="nav-link desktop-only">Contact</a>
          <div className="header-actions">
            <a href="tel:+919204714249" className="header-phone desktop-only">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span className="phone-text">+91 92047 14249</span>
            </a>
            <a
              href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp header-wa-btn desktop-only"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/></svg> WhatsApp
            </a>
          </div>
          
          {/* Hamburger Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-drawer-nav">
          <a href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <hr className="mobile-nav-divider" />
          <a href="tel:+919204714249" className="mobile-nav-btn mobile-call-btn">
            📞 +91 92047 14249
          </a>
          <a
            href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-btn mobile-wa-btn"
          >
             WhatsApp Support
          </a>
        </nav>
      </div>
    </header>
  );
}
