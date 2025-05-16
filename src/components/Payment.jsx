import React, { useState, useEffect } from 'react';
import { fetchCoinData, fetchOrderData } from '../api/order-book/coinGeckoApi'; // Assuming api.js is in the same directory

const Payment = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [ethereumData, setEthereumData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [activeTab, setActiveTab] = useState('buy');
  const [orderType, setOrderType] = useState('limit');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('NGN');
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Sample order book data (this will eventually be fetched from a real-time source)
  const [buyOrders, setBuyOrders] = useState([
    { price: 36920.12, amount: 0.758965, total: 28020.98 },
    { price: 36919.50, amount: 0.500000, total: 18459.75 },
    { price: 36919.00, amount: 0.250000, total: 9229.75 },
    { price: 36918.75, amount: 1.000000, total: 36918.75 },
    { price: 36918.50, amount: 0.300000, total: 11075.55 },
  ]);

  const [sellOrders, setSellOrders] = useState([
    { price: 36921.00, amount: 0.600000, total: 22152.60 },
    { price: 36921.50, amount: 0.400000, total: 14768.60 },
    { price: 36922.00, amount: 0.800000, total: 29537.60 },
    { price: 36922.25, amount: 0.150000, total: 5538.34 },
    { price: 36922.50, amount: 0.700000, total: 25845.75 },
    { price: 36923.00, amount: 0.200000, total: 7384.60 },
  ]);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="payment-container">
      {/* Left Section - Order Book */}
      <div className="order-book-section">
        <div className="order-book-header">
          <div className="tab active">Order Book</div>
          <div className="tab">Recent trades</div>
        </div>

        <div className="order-book-view-options">
          <div className="view-option">
            <div className="bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="view-option">
            <div className="bars">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="view-option active">
            <div className="bars">
              <div className="bar"></div>
            </div>
          </div>

          <div className="depth-selector">
            <span>10</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="order-book-table">
          <div className="table-header">
            <div className="price-col">Price <span>(USD)</span></div>
            <div className="amount-col">Amounts <span>(BTC)</span></div>
            <div className="total-col">Total</div>
          </div>

          <div className="sell-orders">
            {sellOrders.map((order, index) => (
              <div className="order-row sell" key={`sell-${index}`}>
                <div className="price-col">{order.price.toFixed(2)}</div>
                <div className="amount-col">{order.amount.toFixed(6)}</div>
                <div className="total-col">{order.total.toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="price-indicator">
            <div className="current-price">{bitcoinData?.usd ? bitcoinData.usd.toLocaleString() : 'Loading...'}</div>
            <div className={`price-change ${bitcoinData?.usd_24h_change > 0 ? 'up' : 'down'}`}>
              {bitcoinData?.usd_24h_change > 0 ? '↑' : '↓'} {bitcoinData?.usd_24h_change?.toFixed(2) || '0.00'}
            </div>
          </div>

          <div className="buy-orders">
            {buyOrders.map((order, index) => (
              <div className="order-row buy" key={`buy-${index}`}>
                <div className="price-col">{order.price.toFixed(2)}</div>
                <div className="amount-col">{order.amount.toFixed(6)}</div>
                <div className="total-col">{order.total.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Trading Form */}
      {!isMobile ? (
        <div className="trading-form-section">
          <TradingForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            orderType={orderType}
            setOrderType={setOrderType}
            bitcoinPrice={bitcoinData?.usd}
          />
        </div>
      ) : (
        <>
          <button className="mobile-trade-button" onClick={toggleDrawer}>
            {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
          </button>

          <div className={`drawer ${showDrawer ? 'open' : ''}`}>
            <div className="drawer-header">
              <button className="drawer-close" onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <h3>{activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}</h3>
            </div>
            <div className="drawer-content">
              <TradingForm
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                orderType={orderType}
                setOrderType={setOrderType}
                isMobile={isMobile}
                bitcoinPrice={bitcoinData?.usd}
              />
            </div>
          </div>
          {showDrawer && <div className="drawer-overlay" onClick={toggleDrawer} />}
        </>
      )}
    </div>
  );
};

const TradingForm = ({ activeTab, setActiveTab, orderType, setOrderType, isMobile = false, bitcoinPrice }) => {
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('0.00');
  const [price, setPrice] = useState(''); // For limit and stop-limit orders

  useEffect(() => {
    if (orderType === 'market' && bitcoinPrice && amount) {
      setTotal((parseFloat(amount) * bitcoinPrice).toFixed(2));
    } else if (orderType === 'limit' && price && amount) {
      setTotal((parseFloat(amount) * parseFloat(price)).toFixed(2));
    } else if (orderType === 'stop-limit' && price && amount) {
      setTotal((parseFloat(amount) * parseFloat(price)).toFixed(2));
    } else {
      setTotal('0.00');
    }
  }, [orderType, amount, bitcoinPrice, price]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      {!isMobile && (
        <div className="trading-tabs">
          <div
            className={`tab ${activeTab === 'buy' ? 'active' : ''}`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </div>
          <div
            className={`tab ${activeTab === 'sell' ? 'active' : ''}`}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </div>
        </div>
      )}

      <div className="order-type-selector">
        <div
          className={`type-option ${orderType === 'limit' ? 'active' : ''}`}
          onClick={() => setOrderType('limit')}
        >
          Limit
        </div>
        <div
          className={`type-option ${orderType === 'market' ? 'active' : ''}`}
          onClick={() => setOrderType('market')}
        >
          Market
        </div>
        <div
          className={`type-option ${orderType === 'stop-limit' ? 'active' : ''}`}
          onClick={() => setOrderType('stop-limit')}
        >
          Stop-Limit
        </div>
      </div>

      {orderType !== 'market' && (
        <div className="form-group">
          <label>Price <span>(USD)</span></label>
          <div className="input-with-currency">
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="0.00"
            />
            <span className="currency">USD</span>
          </div>
        </div>
      )}

      <div className="form-group">
        <label>Amount <span>(BTC)</span></label>
        <div className="input-with-currency">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.000000"
          />
          <span className="currency">BTC</span>
        </div>
      </div>

      <div className="form-group">
        <label>Total</label>
        <div className="input-value">{total} USD</div>
      </div>

      <button className={`action-button ${activeTab === 'buy' ? 'buy' : 'sell'}`}>
        {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
      </button>

      <div className="account-info">
        <div className="info-row">
          <span>Total account value</span>
          <div className="value-with-currency">
            <span className="value">0.00</span>
            <span className="currency-selector">
              NGN
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </div>

        <div className="info-row">
          <span>Open Orders</span>
          <span className="value">0.00</span>
        </div>

        <div className="info-row">
          <span></span>
          <span className="value available">Available<br />0.00</span>
        </div>
      </div>

      <button className="deposit-button">Deposit</button>
    </>
  );
};

export default Payment;