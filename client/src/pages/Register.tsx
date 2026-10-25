import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const savedUser = localStorage.getItem("notifyhubUser");

    if (savedUser) {
      const existingUser = JSON.parse(savedUser);

      if (existingUser.email === email) {
        setMessage("This email is already registered.");
        return;
      }
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("notifyhubUser", JSON.stringify(user));

    setMessage("Registration successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-logo">N</div>

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join NotifyHub and stay updated
        </p>

        <form onSubmit={handleRegister}>
          <label htmlFor="register-name">Full Name</label>

          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="register-email">Email Address</label>

          <input
            id="register-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="register-password">Password</label>

          <input
            id="register-password"
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>

          <input
            id="confirm-password"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        {message && <p className="register-message">{message}</p>}

        <p className="register-switch">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>

        <Link to="/" className="register-back">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Register;