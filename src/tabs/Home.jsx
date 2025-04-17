import React, { useEffect, useState } from "react";
import Map from "../components/Map.jsx";
import SideScrollBar from "../components/SideScrollBar.jsx";
import logo from "../assets/logo.png";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      {
        title: "City Festival",
        description: "Downtown · June 15, 2025 · Free Entry",
        image: "https://picsum.photos/id/1011/400/240"
      },
      {
        title: "Classic Car Show",
        description: "Main Street · July 4, 2025 · $10 Entry",
        image: "https://picsum.photos/id/1003/400/240"
      },
      {
        title: "Food Truck Rally",
        description: "Riverside Park · Aug 12, 2025 · Free Entry",
        image: "https://picsum.photos/id/1080/400/240"
      },
      {
        title: "Art Walk",
        description: "Arts District · Sept 10, 2025 · Free Entry",
        image: "https://picsum.photos/id/1035/400/240"
      },
      {
        title: "Tech Expo",
        description: "Convention Center · Oct 5, 2025 · $20 Entry",
        image: "https://picsum.photos/id/180/400/240"
      },
      {
        title: "Live Jazz Night",
        description: "Midtown · Oct 22, 2025 · Free Entry",
        image: "https://picsum.photos/id/119/400/240"
      },
      {
        title: "Book Fair",
        description: "City Library · Nov 3, 2025 · Free Entry",
        image: "https://picsum.photos/id/10/400/240"
      },
      {
        title: "Night Market",
        description: "Warehouse District · Nov 15, 2025 · Free Entry",
        image: "https://picsum.photos/id/111/400/240"
      },
      {
        title: "Winter Parade",
        description: "Main Street · Dec 1, 2025 · Free Entry",
        image: "https://picsum.photos/id/201/400/240"
      },
      {
        title: "New Year's Bash",
        description: "Downtown · Dec 31, 2025 · Ticketed",
        image: "https://picsum.photos/id/21/400/240"
      }
    ]);
  }, []);

  return (
    <>
      {/* Logo */}
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <img
          src={logo}
          alt="NxtPark Logo"
          className="logo-glow"
          style={{ height: "40px" }}
        />
      </div>

      {/* Full-width Map */}
      <Map />

      {/* Upcoming Events Header */}
      <div style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "40px auto 10px",
        padding: "0 10px"
      }}>
        <h2 className="section-header">Upcoming Events</h2>
        <p className="section-subtext">Explore what’s happening soon in your area.</p>
      </div>

      {/* Side Scroll Event Cards */}
      <SideScrollBar items={events} />

      {/* Recently Hosted Header */}
      <div style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "40px auto 10px",
        padding: "0 10px"
      }}>
        <h2 className="section-header">Recently Hosted</h2>
        <p className="section-subtext">These events were successfully hosted through NxtPark.</p>
      </div>

      {/* Recently Hosted Grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "0 10px",
        maxWidth: "1200px",
        margin: "0 auto 40px"
      }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{
            width: "280px",
            backgroundColor: "#0a0a0a",
            color: "#ccc",
            padding: "20px",
            border: "1px solid #222",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "160px"
          }}>
            <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#fff" }}>
              Event #{i + 1}
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.5", marginBottom: "8px" }}>
              Held at Central Plaza — 500+ attendees. Parking was managed with NxtPark.
            </p>
            <div style={{
              fontSize: "12px",
              color: "#777",
              borderTop: "1px solid #222",
              paddingTop: "6px"
            }}>
              Concluded · Jan {10 + i}, 2025
            </div>
          </div>
        ))}
      </div>
    </>
  );
}