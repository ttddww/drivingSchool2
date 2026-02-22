app.post("/api/register", (req, res) => {
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
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({ message: "Registration successful" });
    },
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

module.exports = app;