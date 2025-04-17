import React from "react";

export default function Account() {
  return (
    <div className="page account-page">
      <h1 className="account-title">⚙️ Account Settings</h1>
      <hr className="account-divider" />
      <div className="account-container">
        
        <div className="account-section">
          <h2>👤 Profile Information</h2>
          <p>Edit your name, email, and profile picture.</p>
          <button className="account-btn">Edit Profile</button>
        </div>
        <hr className="account-divider" />

        <div className="account-section">
          <h2>🔒 Security</h2>
          <p>Update your password and manage security settings.</p>
          <button className="account-btn">Change Password</button>
        </div>
        <hr className="account-divider" />

        <div className="account-section">
          <h2>📩 Notifications</h2>
          <p>Manage notification preferences and alerts.</p>
          <button className="account-btn">Notification Settings</button>
        </div>
        <hr className="account-divider" />

        <div className="account-section danger-zone">
          <h2>⚠️ Danger Zone</h2>
          <p>Deactivate or delete your account.</p>
          <button className="account-btn delete-btn">Delete Account</button>
        </div>
      </div>
    </div>
  );
}