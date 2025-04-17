import React, { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      { title: "🎉 City Festival", description: "Downtown | June 15, 2025 | Free Entry" },
      { title: "🚗 Classic Car Show", description: "Main Street | July 4, 2025 | $10 Entry" },
      { title: "🍔 Food Truck Rally", description: "Riverside Park | August 12, 2025 | Free Entry" },
    ]);
  }, []);

  return (
    <div className="page">
      <h1>📅 Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> – {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}