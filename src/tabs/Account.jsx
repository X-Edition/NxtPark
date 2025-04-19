import React, { useState } from "react";
import ProfileDetails from "../components/account/ProfileDetails";
import NotificationsSettings from "../components/account/NotificationsSettings";
import DangerZoneSection from "../components/account/DangerZoneSection";
import Modal from "../components/account/Modal";
import ProfileEditPage from "./account/ProfileEditPage";
import ChangePasswordPage from "./account/ChangePasswordPage";

export default function Account() {
  const [view, setView] = useState("main");
  const [showModal, setShowModal] = useState(false);

  const username = "johndoe123"; // This would normally come from user data

  return (
    <div style={{
      width: "90%",
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "0 10px",
      animation: "fadeIn 0.6s ease"
    }}>
      {view === "main" && (
        <>
          <h2 className="section-header">Account Settings</h2>
          <p className="section-subtext">Manage your profile, notification preferences, and security options all in one place.</p>

          {/* Profile Overview */}
          <div style={{
            backgroundColor: "#111",
            padding: "24px",
            border: "1px solid #222",
            marginTop: "32px",
            marginBottom: "24px"
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <h3 style={{ color: "#b280ff", fontSize: "18px" }}>Profile Information</h3>
              <span style={{ color: "#aaa", fontSize: "14px" }}>(@{username})</span>
            </div>
            <p style={{ color: "#ccc", fontSize: "14px", marginTop: "12px", marginBottom: "20px" }}>
              View and edit your personal information like your name, username, and email.
            </p>

            <button
              onClick={() => setView("profileEdit")}
              style={{
                backgroundColor: "#b280ff",
                color: "#000",
                fontWeight: "600",
                padding: "10px 16px",
                border: "none",
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              Edit Profile
            </button>
          </div>

          {/* Notifications Settings */}
          <NotificationsSettings />

          {/* Danger Zone */}
          <DangerZoneSection onDeleteClick={() => setShowModal(true)} />
        </>
      )}

      {view === "profileEdit" && <ProfileEditPage onBack={() => setView("main")} onChangePassword={() => setView("changePassword")} />}
      {view === "changePassword" && <ChangePasswordPage onBack={() => setView("profileEdit")} />}

      {showModal && (
        <Modal
          title="Delete Account?"
          description="Are you sure you want to permanently delete your account? This action cannot be undone."
          onConfirm={() => {
            setShowModal(false);
            alert("Account Deleted");
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}