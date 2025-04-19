import React, { useState } from "react";

export default function ProfileEditPage({ onBack, onChangePassword }) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [username, setUsername] = useState("johndoe123");
  const [email, setEmail] = useState("john@example.com");

  return (
    <div style={{ animation: "fadeIn 0.6s ease" }}>
      <h2 className="section-header">Edit Profile</h2>
      <p className="section-subtext">Update your personal information below.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
        <div>
          <label style={labelStyle}>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <button
            onClick={onChangePassword}
            style={{ width: "100%", backgroundColor: "#b280ff", color: "#000", padding: "12px", border: "none", marginTop: "20px" }}
          >
            Change Password
          </button>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
          <button
            onClick={onBack}
            style={{ flex: 1, backgroundColor: "#333", color: "#fff", padding: "12px", border: "none" }}
          >
            Cancel
          </button>
          <button
            style={{ flex: 1, backgroundColor: "#b280ff", color: "#000", padding: "12px", border: "none" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  backgroundColor: "#111",
  border: "1px solid #333",
  color: "#eee",
  width: "100%"
};

const labelStyle = {
  color: "#aaa",
  fontSize: "14px",
  marginBottom: "4px",
  display: "block"
};