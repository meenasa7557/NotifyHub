import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        NotifyHub
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/announcements">Announcements</Link>

        <Link to="/events">Events</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login" className="navbar-login">
          Login
        </Link>

        <Link to="/register" className="navbar-register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;