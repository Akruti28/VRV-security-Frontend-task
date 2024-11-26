import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionGraph from "./components/PermissionGraph";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar is visible on all pages */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/permissions" element={<PermissionGraph />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


