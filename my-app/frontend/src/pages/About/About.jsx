import React from "react";
import car2 from "../../assets/image/wcar.png";
import inst from "../../assets/image/instru.png";
import cal from "../../assets/image/calander.png";

function About() {
  return (
    <section className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Wolde Driving School</h2>
        <p className="section-subtitle">
          Building confident, safe drivers through personalized instruction and
          proven teaching methods
        </p>
      </div>

      <div className="features-grid">
        <div className="feature1">
          <div className="feature">
            <div className="feature-content">
              <div>
                <h3>Certified Instructors</h3>
                <p>
                  All our instructors are state-certified with years of teaching
                  experience and patience
                </p>
              </div>
              <img src={inst} alt="instructors" className="feature-image" />
            </div>
          </div>

          <div className="feature">
            <div className="feature-content">
              <div>
                <h3>Modern Fleet</h3>
                <p>
                  Learn in safe, well-maintained vehicles equipped with dual
                  controls for maximum safety
                </p>
              </div>
              <img src={car2} alt="Car" className="feature-image" />
            </div>
          </div>
        </div>
        <div className="feature2">
          <div className="feature">
            <div className="feature-content">
              <div>
                <h3>Flexible Schedule</h3>
                <p>
                  Book lessons at times that work for you, including evenings
                  and weekends
                </p>
              </div>
              <img src={cal} alt="Schedule" className="feature-image" />
            </div>
          </div>

          <div className="feature">
            <div className="feature-content">
              <div>
                <h3>Road Test Ready</h3>
                <p>
                  Comprehensive preparation to ensure you pass your road test
                  with confidence
                </p>
              </div>
              <img src={car2} alt="Car" className="feature-image" />
              <div className="feature-icon">✅</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
