import React from "react";

export default function ProfileDetails({ onEditProfile, onEditSecurity }) {
  const maskedEmail = "j***@example.com";
  const joinDate = "March 15, 2023";

  return (
    <div style={{
      backgroundColor: "#111",
      padding: "24px",
      border: "1px solid #222",
      marginTop: "32px",
      animation: "fadeIn 0.8s ease"
    }}>
      <h3 style={{ color: "#b280ff", fontSize: "18px", marginBottom: "12px" }}>
        Profile Information
      </h3>
      <p style={{ color: "#ccc", marginBottom: "6px" }}>
        Name: <strong>John Doe</strong>
      </p>
      <p style={{ color: "#ccc", marginBottom: "6px" }}>
        Email: <strong>{maskedEmail}</strong>
      </p>
      <p style={{ color: "#ccc", marginBottom: "16px" }}>
        Joined: <strong>{joinDate}</strong>
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={onEditProfile}
          style={{ flex: 1, backgroundColor: "#b280ff", color: "#000", padding: "10px", border: "none" }}
        >
          Edit Profile
        </button>
        <button
          onClick={onEditSecurity}
          style={{ flex: 1, backgroundColor: "#b280ff", color: "#000", padding: "10px", border: "none" }}
        >
          Edit Security
        </button>
      </div>
    </div>
  );
}