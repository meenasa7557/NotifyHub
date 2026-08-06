import "./Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Everything Your Campus Needs</h2>

      <p className="feature-subtitle">
        Smart features to keep students informed.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>📢 Instant Announcements</h3>
          <p>Receive important campus notices instantly.</p>
        </div>

        <div className="feature-card">
          <h3>🚨 Urgent Alert System</h3>
          <p>Emergency notifications in real time.</p>
        </div>

        <div className="feature-card">
          <h3>📅 Live Event Tracker</h3>
          <p>Track seminars, workshops and campus events.</p>
        </div>

        <div className="feature-card">
          <h3>🔍 Smart Search & Filters</h3>
          <p>Find notices quickly using filters.</p>
        </div>

        <div className="feature-card">
          <h3>🌍 Work Everywhere</h3>
          <p>Access NotifyHub from mobile or desktop.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Real-Time Updates</h3>
          <p>Receive updates without refreshing the page.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;