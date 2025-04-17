import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Account from "./components/Account";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/account">⚙️ Account</Link>
        <Link to="/">🔔 NxtPark</Link>
        <Link to="/search">🔍 Search</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}