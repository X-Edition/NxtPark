import React, { useState } from "react";
import ToggleSwitch from "../ui/ToggleSwitch";

export default function NotificationsSettings() {
  const [enabled, setEnabled] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div style={{
      backgroundColor: "#111",
      padding: "24px",
      border: "1px solid #222",
      marginTop: "32px",
      animation: "fadeIn 1s ease"
    }}>
      <h3 style={{ color: "#b280ff", fontSize: "18px", marginBottom: "12px" }}>Notifications</h3>
      <p style={{ color: "#ccc", fontSize: "14px", marginBottom: "16px" }}>
        Control how you receive updates and alerts from NxtPark.
      </p>

      {/* Main toggle */}
      <div style={{ marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#ccc", fontSize: "14px" }}>Enable Notifications</span>
        <ToggleSwitch value={enabled} onChange={() => setEnabled(!enabled)} />
      </div>

      {/* Sub toggles */}
      <div
        style={{
          display: enabled ? "flex" : "none",
          flexDirection: "column",
          gap: "16px",
          marginTop: "20px",
          transition: "opacity 0.3s ease"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#ccc", fontSize: "14px" }}>Email Updates</span>
          <ToggleSwitch value={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#ccc", fontSize: "14px" }}>SMS Alerts</span>
          <ToggleSwitch value={smsNotif} onChange={() => setSmsNotif(!smsNotif)} />
        </div>
      </div>
    </div>
  );
}