import React from "react";

export default function DangerZoneSection({ onDeleteClick }) {
  return (
    <div style={{
      backgroundColor: "#111",
      padding: "24px",
      border: "1px solid #222",
      marginTop: "32px",
      animation: "fadeIn 1.4s ease"
    }}>
      <h3 style={{ color: "#ff4c4c", fontSize: "18px", marginBottom: "8px" }}>Danger Zone</h3>
      <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "16px" }}>
        Deactivate or permanently delete your account. This action cannot be undone.
      </p>
      <button
        onClick={onDeleteClick}
        style={{
          backgroundColor: "#ff4c4c",
          color: "#fff",
          fontWeight: "600",
          padding: "10px 16px",
          border: "none",
          fontSize: "14px",
          cursor: "pointer"
        }}
      >
        Delete Account
      </button>
    </div>
  );
}
