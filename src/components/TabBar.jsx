import React from "react";
import { NavLink } from "react-router-dom";

export default function TabBar() {
  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#111",
      borderTop: "1px solid #222",
      display: "flex",
      justifyContent: "space-between",
      padding: "14px 30px",
      zIndex: 1000
    }}>
      {/* Left: Account */}
      <NavLink
        to="/account"
        style={({ isActive }) => ({
          position: "relative",
          color: isActive ? "#b280ff" : "#888",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "600",
          padding: "4px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        })}
      >
        {({ isActive }) => (
          <>
            <span>Account</span>
            {isActive && (
              <div style={{
                position: "absolute",
                bottom: "-6px",
                height: "4px",
                width: "40%",
                borderRadius: "2px",
                backgroundColor: "#b280ff",
                boxShadow: "0 0 6px #b280ff",
                transition: "all 0.3s ease"
              }} />
            )}
          </>
        )}
      </NavLink>

      {/* Center: Home */}
      <NavLink
        to="/"
        style={({ isActive }) => ({
          position: "relative",
          color: isActive ? "#b280ff" : "#888",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "600",
          padding: "4px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)"
        })}
      >
        {({ isActive }) => (
          <>
            <span>Home</span>
            {isActive && (
              <div style={{
                position: "absolute",
                bottom: "-6px",
                height: "4px",
                width: "40%",
                borderRadius: "2px",
                backgroundColor: "#b280ff",
                boxShadow: "0 0 6px #b280ff",
                transition: "all 0.3s ease"
              }} />
            )}
          </>
        )}
      </NavLink>

      {/* Right: Events */}
      <NavLink
        to="/events"
        style={({ isActive }) => ({
          position: "relative",
          color: isActive ? "#b280ff" : "#888",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "600",
          padding: "4px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        })}
      >
        {({ isActive }) => (
          <>
            <span>Events</span>
            {isActive && (
              <div style={{
                position: "absolute",
                bottom: "-6px",
                height: "4px",
                width: "40%",
                borderRadius: "2px",
                backgroundColor: "#b280ff",
                boxShadow: "0 0 6px #b280ff",
                transition: "all 0.3s ease"
              }} />
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
}