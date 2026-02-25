const db = require("../db");
// Handle contact form submissions
exports.submitContactForm = (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const sql = `
    INSERT INTO contacts (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({ message: "Message sent successfully" });
  });
};

module.exports = exports;