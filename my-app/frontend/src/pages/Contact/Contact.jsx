import React, { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactSubject: "",
    contactMessage: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.contactEmail,
          phone: formData.contactPhone,
          subject: formData.contactSubject,
          message: formData.contactMessage,
        }),
      });

      if (response.ok) {
        setSent(true);
        setFormData(initialState); // ✅ clear form
        setTimeout(() => setSent(false), 4000); // ✅ hide message after 4s
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
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
          {/* Your contact info stays exactly the same */}
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Visit Us</h4>
              <div style={{ marginTop: "10px" }}>
                <iframe
                  title="Wolde Driving School Location"
                  src="https://www.google.com/maps?q=307+S+Reynolds+St+Alexandria+VA+22304&output=embed"
                  width="100%"
                  height="100"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>
                Phone: <a href="tel:+17033989915">(703) 398-9915</a>
                <br />
                Text: <a href="sms:+17033989915">(703) 398-9915</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h4>Email Us</h4>
              <p>
                <a href="mailto:woldeteketel@gmail.com">
                  woldeteketel@gmail.com
                </a>
                <br />
                <a href="mailto:desalegnteke@gmail.com">
                  desalegnteke@gmail.com
                </a>
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
          {/* ✅ Success message above form */}
          {sent && (
            <div className="success-message">
              <h3>📬 Message Sent!</h3>
              <p>Thank you for contacting us. We'll respond within 24 hours.</p>
            </div>
          )}

          {/* ✅ Form always visible */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contactName">Name *</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail">Email *</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                required
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactPhone">Phone</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactSubject">Subject *</label>
              <input
                type="text"
                id="contactSubject"
                name="contactSubject"
                required
                value={formData.contactSubject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactMessage">Message *</label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                required
                value={formData.contactMessage}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
