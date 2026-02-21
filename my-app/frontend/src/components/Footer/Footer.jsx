import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Wolde Driving School</h4>
          <p>
            Your trusted partner in learning to drive safely and confidently.
            Building better drivers since 2009.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              📘
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="YouTube">
              📹
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <Link to="/programs">Teen Driver Program</Link>
          <Link to="/programs">Adult Driver Program</Link>
          <Link to="/programs">Road Test Package</Link>
          <Link to="/online">Online Resources</Link>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 307 S Reynolds Street, Alexandria, VA 22304</p>
          <p>📞 (703) 398-9915</p>
          <p>✉️ info@woldedrivingschool.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Wolde Driving School. All rights reserved. | Licensed & Insured
        </p>
      </div>
    </footer>
  );
}

export default Footer;
