import React, { useEffect, useState } from "react";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => {
          setError("Unable to access location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "549px" }}>
      {error ? (
        <p>{error}</p>
      ) : location ? (
        <iframe
          title="User Location"
          style={{ width: "100%", height: "100%", border: "none" }}
          src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}