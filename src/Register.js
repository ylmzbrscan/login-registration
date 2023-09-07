import React, { useState } from "react";
import "./Register.css";

function Register({ users, addUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = () => {
    // Check if the email is not empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || email.toUpperCase() === email) {
      alert('Invalid email format. Use "@" and at least one uppercase letter.');
      return;
    }

    // Check if the email is already registered
    const isEmailTaken = users.some((user) => user.email === email);

    if (isEmailTaken) {
      alert("Email is already registered.");
      return;
    }

    // Add user to the list
    const newUser = { fullName, email, password };
    addUser(newUser);

    // Clear the input fields
    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        className="register-input"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        className="register-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="register-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
