import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>NotifyHub</h2>
          <p>
            Smart campus notification system
            for students and administration.
          </p>
        </div>


        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
        </div>


        <div>
          <h3>Contact</h3>
          <p>Email: notifyhub@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>


      <div className="footer-bottom">
        © 2026 NotifyHub | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;