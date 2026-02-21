import React, { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          We're here to answer your questions and help you get started
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Visit Us</h4>
              <p>
                307 S Reynolds Street
                <br />
                Alexandria, VA 22304
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>
                Phone: (703) 398-9915
                <br />
                Text: (703) 398-9915
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h4>Email Us</h4>
              <p>
                woldeteketel@gmail.com
                <br />
                desalegnteke@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <h4>Office Hours</h4>
              <p>Mon–Fri: 3:00 PM – 5:00 PM</p>
              <br />
              <h4>Behind-the-Wheel Hours</h4>
              <p>Mon–Sun: 6:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="form-container1">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contactName">Name *</label>
                <input type="text" id="contactName" required />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Email *</label>
                <input type="email" id="contactEmail" required />
              </div>

              <div className="form-group">
                <label htmlFor="contactPhone">Phone</label>
                <input type="tel" id="contactPhone" />
              </div>

              <div className="form-group">
                <label htmlFor="contactSubject">Subject *</label>
                <input type="text" id="contactSubject" required />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Message *</label>
                <textarea id="contactMessage" required />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h3>📬 Message Sent!</h3>
              <p>Thank you for contacting us. We'll respond within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
