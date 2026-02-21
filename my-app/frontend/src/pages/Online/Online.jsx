import React from "react";

function Online() {
  return (
    <section className="online-section">
      <div className="section-header">
        <h2 className="section-title">Online Resources</h2>
        <p className="section-subtitle">
          Study materials and practice tests to supplement your learning. For online courses, call office.
        </p>
      </div>

      <div className="resources-grid">
        <div className="resource-card">
          <div className="resource-header">
            <h3>📖 Study Materials</h3>
          </div>
          <div className="resource-body">
            <ul>
              <li>DMV Driver's Manual</li>
              <li>Road Signs Guide</li>
              <li>Traffic Laws Summary</li>
              <li>Safe Driving Tips</li>
              <li>Vehicle Control Basics</li>
            </ul>
          </div>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <h3>✍️ Practice Tests</h3>
          </div>
          <div className="resource-body">
            <ul>
              <li>Written Test Simulator</li>
              <li>Road Sign Recognition</li>
              <li>Rules of the Road Quiz</li>
              <li>Hazard Perception Test</li>
              <li>Final Exam Prep</li>
            </ul>
          </div>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <h3>🎥 Video Tutorials</h3>
          </div>
          <div className="resource-body">
            <ul>
              <li>Parallel Parking Guide</li>
              <li>Highway Merging Tips</li>
              <li>Defensive Driving Techniques</li>
              <li>Winter Driving Safety</li>
              <li>Common Test Mistakes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Online;
