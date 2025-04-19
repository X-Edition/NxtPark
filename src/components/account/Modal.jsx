import React from "react";

export default function Modal({ title, description, onConfirm, onCancel }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000
    }}>
      <div style={{
        backgroundColor: "#111",
        border: "1px solid #222",
        padding: "30px",
        width: "90%",
        maxWidth: "400px",
        textAlign: "center",
        animation: "fadeIn 0.3s ease"
      }}>
        <h3 style={{ color: "#b280ff", marginBottom: "20px" }}>{title}</h3>
        <p style={{ color: "#ccc", marginBottom: "24px" }}>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          <button onClick={onCancel} style={{
            padding: "10px 16px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}>
            Cancel
          </button>
          <button onClick={onConfirm} style={{
            padding: "10px 16px",
            backgroundColor: "#ff4c4c",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
