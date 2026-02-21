import React from "react";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-header">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Choose the perfect program for your driving journey
        </p>
      </div>

      <div className="programs-grid">
        {/* Teen Driver Program */}
        <div className="program-card">
          <div className="program-icon">👨‍🎓</div>
          <h3>Teen Driver Program</h3>
          <p>
            Specially designed for new teen drivers (ages 15-17) to build strong
            foundational skills
          </p>
          <ul className="program-features">
            <li>7 hours of behind-the-wheel training</li>
            <li>Basic to advanced driving skills</li>
            <li>Defensive driving techniques</li>
            <li>Parking and maneuvering</li>
            <li>Road test preparation</li>
            <li>Parent guide included</li>
          </ul>
          <div className="price">$350</div>
          <div className="price-detail">7 hours total instruction</div>
          <Link
            to="/register"
            className="btn-primary"
            style={{ width: "100%", textAlign: "center" }}
          >
            Enroll Now
          </Link>
        </div>

        {/* Adult Driver Program */}
        <div className="program-card">
          <div className="program-icon">👩‍💼</div>
          <h3>Adult Driver Program</h3>
          <p>
            Perfect for adults learning to drive or improving their driving
            skills
          </p>
          <ul className="program-features">
            <li>7 hours of personalized instruction</li>
            <li>Customized to your skill level</li>
            <li>Highway and city driving</li>
            <li>Parallel parking mastery</li>
            <li>Confidence building exercises</li>
            <li>Refresher options available</li>
          </ul>
          <div className="price">$350</div>
          <div className="price-detail">7 hours total instruction</div>
          <Link
            to="/register"
            className="btn-primary"
            style={{ width: "100%", textAlign: "center" }}
          >
            Enroll Now
          </Link>
        </div>

        {/* Road Test Package */}
        <div className="program-card">
          <div className="program-icon">⭐</div>
          <h3>Road Test Package</h3>
          <p>
            Intensive preparation specifically for your upcoming driving test
          </p>
          <ul className="program-features">
            <li>Test route familiarization</li>
            <li>Common mistake prevention</li>
            <li>Scoring criteria review</li>
            <li>Nervous driver support</li>
            <li>Test day vehicle rental option</li>
            <li>Final evaluation included</li>
          </ul>
          <div className="price">$350</div>
          <div className="price-detail">Contact us for details</div>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ width: "100%", textAlign: "center" }}
          >
            Get Info
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Programs;
