import React, { useState } from "react";

export default function ChangePasswordPage({ onBack }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordMatch = newPassword === confirmPassword && confirmPassword.length > 0;
  const currentPasswordEntered = currentPassword.length >= 6;

  return (
    <div style={{ animation: "fadeIn 0.6s ease" }}>
      <h2 className="section-header">Change Password</h2>
      <p className="section-subtext">Enter your current password and a new one below.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
        <div>
          <label style={labelStyle}>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            style={inputStyle}
          />
          {currentPasswordEntered && (
            <p style={{ color: "#4caf50", fontSize: "12px", marginTop: "4px" }}>
              Current password entered
            </p>
          )}
        </div>

        <div>
          <label style={labelStyle}>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />
          {passwordMatch && (
            <p style={{ color: "#4caf50", fontSize: "12px", marginTop: "4px" }}>
              Passwords match!
            </p>
          )}
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
          <button
            onClick={onBack}
            style={{ flex: 1, backgroundColor: "#333", color: "#fff", padding: "12px", border: "none" }}
          >
            Cancel
          </button>
          <button
            disabled={!passwordMatch || !currentPasswordEntered}
            style={{
              flex: 1,
              backgroundColor: passwordMatch && currentPasswordEntered ? "#b280ff" : "#555",
              color: "#000",
              padding: "12px",
              border: "none",
              cursor: passwordMatch && currentPasswordEntered ? "pointer" : "not-allowed"
            }}
          >
            Update Password
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