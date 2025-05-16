"use client"

import { useState } from "react"
// import "./Orders.css"

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Open Orders")

  const tabs = ["Open Orders", "Positions", "Order History", "Trade History"]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="orders-container">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="orders-content">
        {activeTab === "Open Orders" && (
          <div className="empty-state">
            <h2>No Open Orders</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.</p>
          </div>
        )}

        {activeTab === "Positions" && (
          <div className="empty-state">
            <h2>No Positions</h2>
            <p>You don't have any open positions at the moment.</p>
          </div>
        )}

        {activeTab === "Order History" && (
          <div className="empty-state">
            <h2>No Order History</h2>
            <p>Your order history will appear here.</p>
          </div>
        )}

        {activeTab === "Trade History" && (
          <div className="empty-state">
            <h2>No Trade History</h2>
            <p>Your trade history will appear here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
