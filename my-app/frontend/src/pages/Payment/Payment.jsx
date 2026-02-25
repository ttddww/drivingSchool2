import React, { useState } from "react";

function Payment() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    email: "",
    billingAddress: "",
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

    const paymentData = {
      fullName: formData.fullName,
      email: formData.email,
      billingAddress: formData.billingAddress,
      program: "Teen / Adult Program",
      amount: 350,
    };

    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData(initialState); // ✅ clear form
        setTimeout(() => setSuccess(false), 4000); // ✅ hide message after 4s
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2 className="section-title">Make a Payment</h2>

        <div className="payment-summary">
          <h4>Payment Summary</h4>
          <div className="payment-row">
            <span>Program:</span>
            <span>Teen / Adult Driver Program or Road Test Prep</span>
          </div>
          <div className="payment-row">
            <span>Duration:</span>
            <span>7 Hours</span>
          </div>
          <div className="payment-row total">
            <span>Total:</span>
            <span>$350.00</span>
          </div>
        </div>

        {/* ✅ Success Message Above Form */}
        {success && (
          <div className="success-message">
            <h3>✅ Payment Successful</h3>
            <p>
              Thank you! Your payment has been processed and a confirmation
              email has been sent.
            </p>
          </div>
        )}

        {/* ✅ Form Always Visible */}
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Full Name on Card *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              required
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Expiry Date *</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                required
                value={formData.expiry}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>CVV *</label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                required
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Billing Address *</label>
            <input
              type="text"
              name="billingAddress"
              required
              value={formData.billingAddress}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Processing..." : "Process Payment – $350.00"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
