const db = require("../db");

// Handle payment processing
const processPayment = (req, res) => {
  const { fullName, email, billingAddress, program, amount } = req.body;

  // Basic validation
  if (!fullName || !email || !billingAddress || !program || !amount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO payments 
    (fullName, email, billingAddress, program, amount)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, email, billingAddress, program, amount],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({ message: "Payment recorded successfully" });
    },
  );
};

module.exports = { processPayment };
