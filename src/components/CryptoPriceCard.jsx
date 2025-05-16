// CryptoPriceCard.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const CryptoPriceCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const pairs = [
    { base: 'BTC', quote: 'USDT', price: '$23,234.6', change: '+0.005%' },
    { base: 'BTC', quote: 'USDT', price: '$23,234.6', change: '+0.005%' },
    { base: 'BTC', quote: 'USDT', price: '$23,234.6', change: '+0.005%' },
    { base: 'BTC', quote: 'USDT', price: '$23,234.6', change: '+0.005%' },
  ];

  const filteredPairs = pairs.filter(pair => 
    `${pair.base}/${pair.quote}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crypto-navbar">
      <div className="crypto-main">
        <div className="pair-container" onClick={toggleDropdown}>
          <div className="coin-images">
            <img 
              src="/images/bitcoin.jpg" 
              alt="BTC" 
              className="coin-image btc" 
            />
            <img
              src="/images/dollar.jpg"
              alt="USDT"
              className="coin-image usdt"
            />
          </div>
          <div className="crypto-pair">BTC/USDT</div>
          <FiChevronDown className="dropdown-icon" />
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <div className="dropdown-title">Select Market</div>
                <div className="search-container">
                  <FiSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <div className="currency-tabs">
                  <div className="currency-tab active">USD</div>
                  <div className="currency-tab">BTC</div>
                </div>
              </div>
              <div className="dropdown-items">
                {filteredPairs.map((pair, index) => (
                  <div key={index} className="dropdown-item">
                    <div className="pair-name">{pair.base}/{pair.quote}</div>
                    <div className="pair-price">{pair.price}</div>
                    <div className="pair-change">{pair.change}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="crypto-price">$20,654</div>
      </div>
      
      <div className="divider-vertical"></div>
      
      <div className="stat-item">
        <div className="stat-label">
          <svg className="stat-icon" viewBox="0 0 24 24" width="14" height="14">
            <path fill="#94a3b8" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" stroke="none" />
          </svg>
          24h change
        </div>
        <div className="stat-value positive">520.80 +1.25%</div>
      </div>
      
      <div className="divider-vertical"></div>
      
      <div className="stat-item">
        <div className="stat-label">
          <span className="stat-icon">↑</span>
          24h high
        </div>
        <div className="stat-value">520.80 +1.25%</div>
      </div>
      
      <div className="divider-vertical"></div>
      
      <div className="stat-item">
        <div className="stat-label">
          <span className="stat-icon">↓</span>
          24h low
        </div>
        <div className="stat-value">520.80 +1.25%</div>
      </div>
      
      <div className="divider-vertical"></div>
      
      <div className="stat-item">
        <div className="stat-label">
          <span className="stat-icon">▮▮</span>
          24h volume
        </div>
        <div className="stat-value">75,655.26</div>
      </div>
    </div>
  );
};

export default CryptoPriceCard;
