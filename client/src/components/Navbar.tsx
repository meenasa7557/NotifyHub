import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">NotifyHub</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#announcements">Announcements</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="urgent-btn">Urgent</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;