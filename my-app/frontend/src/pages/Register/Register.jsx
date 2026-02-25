import React, { useState } from "react";

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    program: "",
    address: "",
    experience: "",
    preferredTime: "",
    emergencyContact: "",
    notes: "",
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
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialState); // ✅ clear form
        setTimeout(() => setSubmitted(false), 4000); // ✅ hide success after 4s
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <section className="register-section">
      <div className="section-header">
        <h2 className="section-title">Register Now</h2>
        <p className="section-subtitle">
          Start your driving journey today - fill out the form below
        </p>
      </div>

      <div className="form-container">
        {/* ✅ Success message shows above form */}
        {submitted && (
          <div className="success-message">
            <h3>🎉 Registration Successful!</h3>
            <p>
              Thank you for choosing Wolde Driving School! We'll contact you
              within 24 hours to schedule your lessons.
            </p>
          </div>
        )}

        {/* ✅ Form ALWAYS visible */}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="program">Select Program *</label>
              <select
                id="program"
                name="program"
                required
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Choose a program...</option>
                <option value="teen">Teen Driver Program - $350</option>
                <option value="adult">Adult Driver Program - $350</option>
                <option value="roadtest">
                  Road Test Package - Contact for details
                </option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Driving Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select experience level...</option>
                <option value="none">No experience</option>
                <option value="permit">Have learner's permit</option>
                <option value="some">Some practice driving</option>
                <option value="licensed">Licensed but need practice</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Schedule</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
              >
                <option value="">Select preference...</option>
                <option value="weekday-morning">Weekday Mornings</option>
                <option value="weekday-afternoon">Weekday Afternoons</option>
                <option value="weekday-evening">Weekday Evenings</option>
                <option value="weekend">Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="emergencyContact">
                Emergency Contact Name & Phone
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                placeholder="Name and phone number"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">Additional Notes or Questions</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Tell us anything else we should know..."
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
