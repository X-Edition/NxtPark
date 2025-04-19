import React from "react";

export default function ToggleSwitch({ value, onChange }) {
  return (
    <div
      role="switch"
      aria-checked={value}
      tabIndex="0"
      onClick={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onChange();
      }}
      style={{
        width: "50px",
        height: "26px",
        backgroundColor: value ? "#b280ff" : "#333",
        borderRadius: "999px",
        padding: "3px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        position: "relative",
        outline: "none"
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
          transform: value ? "translateX(24px)" : "translateX(0)",
          transition: "transform 0.25s ease"
        }}
      />
    </div>
  );
}
