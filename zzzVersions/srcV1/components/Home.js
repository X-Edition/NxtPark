import React, { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setError("Location access denied. Please enable location services.");
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="home-page">
      {/* Full-Width Map as Background */}
      <div className="map-container">
        {error ? (
          <p className="error-message">{error}</p>
        ) : location ? (
          <iframe
            title="User Location"
            width="100%"
            height="600px"
            frameBorder="0"
            style={{ width: "100%", height: "600px" }}
            src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
      
      {/* Container for Information Below the Map */}
      <div className="info-container" style={{
        width: "90%",
        maxWidth: "800px",
        margin: "auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
        textAlign: "center"
      }}>
        <h2>📅 Upcoming Events</h2>
        <div className="event-list-container">
          <ul className="event-list" style={{ paddingLeft: "0", listStyleType: "none" }}>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #ddd" }}>
              <strong>🎉 City Festival</strong> - Downtown | June 15, 2025 | Free Entry
            </li>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #ddd" }}>
              <strong>🚗 Classic Car Show</strong> - Main Street | July 4, 2025 | $10 Entry
            </li>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px" }}>
              <strong>🍔 Food Truck Rally</strong> - Riverside Park | August 12, 2025 | Free Entry
            </li>
          </ul>
        </div>

              {/* Container for Information Below the Map */}
      <div className="info-container" style={{
        width: "90%",
        maxWidth: "800px",
        margin: "auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
        textAlign: "center"
      }}>
        <h2>❓ What is NxtPark?</h2>
        <div className="event-list-container">
          <ul className="event-list" style={{ paddingLeft: "0", listStyleType: "none" }}>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #ddd" }}>
              <strong>🎉 City Festival</strong> - Downtown | June 15, 2025 | Free Entry
            </li>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #ddd" }}>
              <strong>🚗 Classic Car Show</strong> - Main Street | July 4, 2025 | $10 Entry
            </li>
            <li className="event-item" style={{ marginBottom: "10px", padding: "10px" }}>
              <strong>🍔 Food Truck Rally</strong> - Riverside Park | August 12, 2025 | Free Entry
            </li>
          </ul>
        </div>
      </div>

      </div>
    </div>
  );
}