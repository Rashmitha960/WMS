import React from "react";
import "../styles/Dashboard.css";
import { FaBoxOpen, FaClock, FaTruck, FaExclamationTriangle, FiLogOut } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Warehouse Dashboard</h2>
        <p>Overview of warehouse operations and inventory</p>
      </div>

      <div className="cards-container">
        <div className="card blue">
          <div className="card-header">
            <span>Total Products</span>
            <FaBoxOpen />
          </div>
          <h3>2,483</h3>
          <p className="positive">↑ 12% from last period</p>
        </div>

        <div className="card yellow">
          <div className="card-header">
            <span>Pending Orders</span>
            <FaClock />
          </div>
          <h3>43</h3>
          <p className="positive">↑ 4% from last period</p>
        </div>

        <div className="card green">
          <div className="card-header">
            <span>Outbound Shipments</span>
            <FaTruck />
          </div>
          <h3>128</h3>
          <p className="positive">↑ 8% from last period</p>
        </div>

        <div className="card red">
          <div className="card-header">
            <span>Low Stock Items</span>
            <FaExclamationTriangle />
          </div>
          <h3>14</h3>
          <p className="negative">↓ 2 from last period</p>
        </div>
      </div>

      <div className="filter-buttons">
        <button>Week</button>
        <button className="active">Month</button>
        <button>Quarter</button>
        <button>Year</button>
      </div>
    </div>
  );
};

export default Dashboard;
