// App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/navbar';
import CryptoPriceCard from '../components/CryptoPriceCard';
import CryptoChart from '../components/CryptoChart';
import Payment from '../components/Payment';
import Orders from '../components/Orders';
// import './App.css'; // Make sure to uncomment this line

const App = () => {
  return (
    <div className="app-container">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sisyphus</title>
      </Helmet>
      <Header />
      <CryptoPriceCard />
      <div className="content-container">
        <CryptoChart />
        <Payment />
      </div>
      <Orders />
    </div>
  );
};

export default App;