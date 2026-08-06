import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <h2>Real Impact Every Day</h2>
      <p className="stats-subtitle">
        Helping students stay updated with important campus information.
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <h1>8+</h1>
          <p>Notifications</p>
        </div>

        <div className="stat-card">
          <h1>6+</h1>
          <p>Events</p>
        </div>

        <div className="stat-card">
          <h1>2+</h1>
          <p>Urgent Alerts</p>
        </div>

        <div className="stat-card">
          <h1>12+</h1>
          <p>Departments</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;