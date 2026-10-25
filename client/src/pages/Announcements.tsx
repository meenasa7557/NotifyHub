import { useState } from "react";
import "../styles/Announcements.css";

type Announcement = {
  id: number;
  title: string;
  category: string;
  date: string;
  priority: "Normal" | "Important" | "Urgent";
  description: string;
};

const announcementData: Announcement[] = [
  {
    id: 1,
    title: "Internal Examination Schedule",
    category: "Examinations",
    date: "2026-10-25",
    priority: "Important",
    description:
      "Students are requested to check the examination timetable and prepare accordingly.",
  },
  {
    id: 2,
    title: "Technical Workshop Registration",
    category: "Workshops",
    date: "2026-10-24",
    priority: "Normal",
    description:
      "Registration is open for the upcoming technical workshop. Interested students can register through their department.",
  },
  {
    id: 3,
    title: "Assignment Submission Reminder",
    category: "Academics",
    date: "2026-10-23",
    priority: "Urgent",
    description:
      "Students should submit their pending assignments before the deadline announced by their faculty.",
  },
  {
    id: 4,
    title: "Library Timings Update",
    category: "General",
    date: "2026-10-22",
    priority: "Normal",
    description:
      "Please check the updated library timings before planning your visit.",
  },
];

function Announcements() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");

  const filteredAnnouncements = announcementData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    const matchesPriority =
      priority === "All" || item.priority === priority;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  return (
    <main className="announcements-page">
      <section className="announcement-hero">
        <span className="announcement-tag">NOTIFYHUB UPDATES</span>

        <h1>College Announcements</h1>

        <p>
          Stay informed about examinations, academic notices,
          workshops, and important college updates.
        </p>
      </section>

      <section className="announcement-content">
        <div className="announcement-toolbar">
          <input
            type="search"
            placeholder="Search announcements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search announcements"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="All">All Categories</option>
            <option value="Examinations">Examinations</option>
            <option value="Workshops">Workshops</option>
            <option value="Academics">Academics</option>
            <option value="General">General</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            aria-label="Filter by priority"
          >
            <option value="All">All Priorities</option>
            <option value="Normal">Normal</option>
            <option value="Important">Important</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        <div className="announcement-count">
          Showing {filteredAnnouncements.length} announcements
        </div>

        <div className="announcement-grid">
          {filteredAnnouncements.map((item) => (
            <article className="announcement-card" key={item.id}>
              <div className="announcement-card-top">
                <span className="announcement-category">
                  {item.category}
                </span>

                <span
                  className={`priority-badge priority-${item.priority.toLowerCase()}`}
                >
                  {item.priority}
                </span>
              </div>

              <h2>{item.title}</h2>

              <p className="announcement-description">
                {item.description}
              </p>

              <div className="announcement-footer">
                <span>📅 {item.date}</span>
                <span>NotifyHub</span>
              </div>
            </article>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="announcement-empty">
            <h2>No announcements found</h2>
            <p>Try a different search term or filter.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Announcements;