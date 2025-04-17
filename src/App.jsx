import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./tabs/Home.jsx";
import Events from "./tabs/Events.jsx";
import Account from "./tabs/Account.jsx";
import TabBar from "./components/TabBar.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <TabBar />
    </div>
  );
}