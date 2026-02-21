import React, { useState } from "react";

function Payment() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
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

        {!success ? (
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label>Full Name on Card *</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Card Number *</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Expiry Date *</label>
                <input type="text" placeholder="MM/YY" required />
              </div>

              <div className="form-group">
                <label>CVV *</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Billing Address *</label>
              <input type="text" required />
            </div>

            <button type="submit" className="submit-btn">
              Process Payment – $350.00
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h3>✅ Payment Successful</h3>
            <p>
              Thank you! Your payment has been processed and a confirmation
              email has been sent.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
