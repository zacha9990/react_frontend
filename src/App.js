import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import Employees from "./components/Employees";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Users />
      </AuthProvider>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
