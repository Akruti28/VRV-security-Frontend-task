import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-700">Users</h3>
          <p className="text-3xl font-bold text-blue-500">500</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-700">Roles</h3>
          <p className="text-3xl font-bold text-green-500">20</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-700">Permissions</h3>
          <p className="text-3xl font-bold text-red-500">3</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-700">Quick Links</h3>
        <div className="flex gap-6 mt-4">
          <Link to="/users" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Manage Users
          </Link>
          <Link to="/roles" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all">
            Manage Roles
          </Link>
          <Link to="/permissions" className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all">
            View Permissions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
