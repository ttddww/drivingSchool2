const db = require("../db");

// Create new student registration
const registerStudent = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    program,
    address,
    experience,
    preferredTime,
    emergencyContact,
    notes,
  } = req.body;

  // Basic validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !program ||
    !address
  ) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  // Check if email already exists
  const checkEmail = "SELECT * FROM students WHERE email = ?";
  db.query(checkEmail, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Insert new student
    const sql = `
      INSERT INTO students
      (firstName, lastName, email, phone, dob, program, address, experience, preferredTime, emergencyContact, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        firstName,
        lastName,
        email,
        phone,
        dob,
        program,
        address,
        experience,
        preferredTime,
        emergencyContact,
        notes,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Registration failed" });
        }

        res.status(201).json({ message: "Registration successful" });
      },
    );
  });
};

module.exports = { registerStudent };
