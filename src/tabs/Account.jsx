import React from "react";

export default function Account() {
  return (
    <div style={{
      width: "90%",
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "0 10px"
    }}>
      {/* Header */}
      <h2 className="section-header">Account Settings</h2>
      <p className="section-subtext">Manage your profile, preferences, and security.</p>

      {/* Settings Grid */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        marginTop: "24px"
      }}>
        {/* Profile Section */}
        <div style={{
          backgroundColor: "#111",
          padding: "24px",
          border: "1px solid #222"
        }}>
          <h3 style={{ color: "#b280ff", fontSize: "18px", marginBottom: "8px" }}>
            Profile Information
          </h3>
          <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "16px" }}>
            Update your name, email, or profile picture.
          </p>
          <button style={{
            backgroundColor: "#b280ff",
            color: "#000",
            fontWeight: "600",
            padding: "10px 16px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            Edit Profile
          </button>
        </div>

        {/* Security Section */}
        <div style={{
          backgroundColor: "#111",
          padding: "24px",
          border: "1px solid #222"
        }}>
          <h3 style={{ color: "#b280ff", fontSize: "18px", marginBottom: "8px" }}>
            Security
          </h3>
          <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "16px" }}>
            Change your password and manage login settings.
          </p>
          <button style={{
            backgroundColor: "#b280ff",
            color: "#000",
            fontWeight: "600",
            padding: "10px 16px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            Change Password
          </button>
        </div>

        {/* Notifications Section */}
        <div style={{
          backgroundColor: "#111",
          padding: "24px",
          border: "1px solid #222"
        }}>
          <h3 style={{ color: "#b280ff", fontSize: "18px", marginBottom: "8px" }}>
            Notifications
          </h3>
          <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "16px" }}>
            Choose when and how you receive updates.
          </p>
          <button style={{
            backgroundColor: "#b280ff",
            color: "#000",
            fontWeight: "600",
            padding: "10px 16px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            Notification Settings
          </button>
        </div>

        {/* Danger Zone */}
        <div style={{
          backgroundColor: "#111",
          padding: "24px",
          border: "1px solid #222"
        }}>
          <h3 style={{ color: "#ff4c4c", fontSize: "18px", marginBottom: "8px" }}>
            Danger Zone
          </h3>
          <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "16px" }}>
            Deactivate or permanently delete your account. This cannot be undone.
          </p>
          <button style={{
            backgroundColor: "#ff4c4c",
            color: "#fff",
            fontWeight: "600",
            padding: "10px 16px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}