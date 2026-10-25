import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("notifyhubUser");

    if (!savedUser) {
      setMessage("Please register before logging in.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email === email && user.password === password) {
      localStorage.setItem("notifyhubLoggedIn", "true");
      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">N</div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Sign in to your NotifyHub account
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="login-email">Email Address</label>

          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;