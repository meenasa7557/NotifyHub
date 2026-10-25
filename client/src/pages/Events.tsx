import { useState } from "react";
import "../styles/Events.css";

type CollegeEvent = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
};

const eventData: CollegeEvent[] = [
  {
    id: 1,
    title: "Technical Symposium",
    category: "Technical",
    date: "2026-11-05",
    time: "10:00 AM",
    venue: "College Auditorium",
    description:
      "Participate in technical presentations, coding activities, and knowledge-sharing sessions.",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    category: "Workshop",
    date: "2026-11-10",
    time: "11:00 AM",
    venue: "Computer Lab",
    description:
      "Learn the fundamentals of modern web development through practical activities.",
  },
  {
    id: 3,
    title: "Annual Cultural Fest",
    category: "Cultural",
    date: "2026-11-15",
    time: "09:30 AM",
    venue: "College Grounds",
    description:
      "Enjoy student performances, cultural activities, and creative competitions.",
  },
  {
    id: 4,
    title: "Career Guidance Session",
    category: "Career",
    date: "2026-11-20",
    time: "02:00 PM",
    venue: "Seminar Hall",
    description:
      "Explore career opportunities, placement preparation strategies, and interview tips.",
  },
];

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const filteredEvents = eventData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.venue.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleRegistration = (eventId: number) => {
    setRegisteredEvents((previous) =>
      previous.includes(eventId)
        ? previous
        : [...previous, eventId]
    );
  };

  return (
    <main className="events-page">
      <section className="events-hero">
        <span className="events-tag">DISCOVER & PARTICIPATE</span>

        <h1>College Events</h1>

        <p>
          Explore upcoming workshops, technical activities,
          cultural programs, and career sessions.
        </p>
      </section>

      <section className="events-content">
        <div className="events-heading">
          <div>
            <h2>Upcoming Events</h2>
            <p>Find opportunities to learn, connect, and grow.</p>
          </div>

          <div className="events-total">
            {filteredEvents.length} Events
          </div>
        </div>

        <div className="events-filters">
          <input
            type="search"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search events"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter events by category"
          >
            <option value="All">All Categories</option>
            <option value="Technical">Technical</option>
            <option value="Workshop">Workshop</option>
            <option value="Cultural">Cultural</option>
            <option value="Career">Career</option>
          </select>
        </div>

        <div className="events-grid">
          {filteredEvents.map((event) => {
            const isRegistered = registeredEvents.includes(event.id);

            return (
              <article className="event-card" key={event.id}>
                <div className="event-card-banner">
                  <span>{event.category}</span>
                  <span>📅 {event.date}</span>
                </div>

                <div className="event-card-body">
                  <h3>{event.title}</h3>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <div className="event-details">
                    <p>
                      <span>🕒</span> {event.time}
                    </p>

                    <p>
                      <span>📍</span> {event.venue}
                    </p>
                  </div>

                  <button
                    className={`event-register-button ${
                      isRegistered ? "event-registered" : ""
                    }`}
                    onClick={() => handleRegistration(event.id)}
                    disabled={isRegistered}
                  >
                    {isRegistered ? "Registered ✓" : "Register for Event"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="events-empty">
            <h3>No events found</h3>
            <p>Try another search or category.</p>
          </div>
        )}

        <p className="events-note">
          Note: Event information and registration in this demonstration
          are not connected to the college administration.
        </p>
      </section>
    </main>
  );
}

export default Events;