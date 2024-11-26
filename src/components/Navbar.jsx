import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="font-bold text-xl">Admin Dashboard</div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition-all duration-300">Dashboard</Link>
          <Link to="/roles" className="hover:text-yellow-300 transition-all duration-300">Role Management</Link>
          <Link to="/users" className="hover:text-yellow-300 transition-all duration-300">User Management</Link>
          <Link to="/permissions" className="hover:text-yellow-300 transition-all duration-300">Permissions</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
