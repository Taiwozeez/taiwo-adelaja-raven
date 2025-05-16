import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import { BarChart3, Maximize2, ChevronDown } from 'lucide-react';
// import "./CryptoChart.css";

// Mock data for the candlestick chart
const generateCandlestickData = () => {
  const basePrice = 36400;
  const data = [];
  const dates = [
    "02/21",
    "02/28",
    "03/07",
    "03/14",
    "03/21",
    "03/28",
    "04/04",
    "04/11",
    "04/18",
    "04/25",
    "05/02",
    "05/09",
    "05/16",
    "05/23",
  ];

  for (let i = 0; i < 100; i++) {
    const open = basePrice + Math.random() * 300 - 150;
    const close = open + Math.random() * 200 - 100;
    const high = Math.max(open, close) + Math.random() * 100;
    const low = Math.min(open, close) - Math.random() * 100;
    const volume = Math.random() * 100;

    data.push({
      date: dates[Math.floor(i / 7)],
      open,
      close,
      high,
      low,
      volume,
      color: close > open ? "#4ADE80" : "#EF4444",
    });
  }

  return data;
};

const CryptoChart = () => {
  const [timeFrame, setTimeFrame] = useState("1D");
  const data = generateCandlestickData();

  // Current price data
  const currentPrice = 36641.54;
  const highPrice = 36641.54;
  const lowPrice = 36641.54;
  const openPrice = 36641.54;
  const closePrice = 36641.54;
  const changePercent = 2.33;
  const amplitude = 6.99;

  // Format price with commas
  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-date">{payload[0].payload.date}</p>
          <p className="tooltip-price">
            Price: {formatPrice(payload[0].payload.close)}
          </p>
          <p className="tooltip-open">Open: {formatPrice(payload[0].payload.open)}</p>
          <p className="tooltip-high">High: {formatPrice(payload[0].payload.high)}</p>
          <p className="tooltip-low">Low: {formatPrice(payload[0].payload.low)}</p>
        </div>
      );
    }
    return null;
  };

  // Custom candle renderer
  const renderCandlestick = (props) => {
    const { x, y, width, height, datum } = props;
    const fill = datum.close > datum.open ? "#4ADE80" : "#EF4444";
    const stroke = fill;

    // Calculate candle body
    const bodyY =
      datum.close > datum.open
        ? y + ((datum.open - datum.low) / (datum.high - datum.low)) * height
        : y + ((datum.close - datum.low) / (datum.high - datum.low)) * height;
    const bodyHeight =
      (Math.abs(datum.close - datum.open) / (datum.high - datum.low)) * height;

    // Calculate wick
    const wickX = x + width / 2;
    const topWickY = y;
    const topWickHeight =
      ((Math.min(datum.open, datum.close) - datum.low) /
        (datum.high - datum.low)) *
      height;
    const bottomWickY =
      y +
      ((Math.max(datum.open, datum.close) - datum.low) /
        (datum.high - datum.low)) *
      height;
    const bottomWickHeight =
      ((datum.high - Math.max(datum.open, datum.close)) /
        (datum.high - datum.low)) *
      height;

    return (
      <g key={`candle-${x}`}>
        {/* Candle body */}
        <rect
          x={x}
          y={bodyY}
          width={width}
          height={bodyHeight}
          fill={fill}
          stroke={stroke}
        />

        {/* Candle wick */}
        <line
          x1={wickX}
          y1={topWickY}
          x2={wickX}
          y2={topWickY + topWickHeight}
          stroke={stroke}
          strokeWidth={1}
        />
        <line
          x1={wickX}
          y1={bottomWickY}
          x2={wickX}
          y2={bottomWickY + bottomWickHeight}
          stroke={stroke}
          strokeWidth={1}
        />
      </g>
    );
  };

  return (
    <div className="crypto-chart">
      {/* Header */}
      <div className="chart-header">
        <div className="time-selectors">
          <button
            className={`time-button ${timeFrame === "1H" ? "active" : ""}`}
            onClick={() => setTimeFrame("1H")}
          >
            1H
          </button>
          <button
            className={`time-button ${timeFrame === "2H" ? "active" : ""}`}
            onClick={() => setTimeFrame("2H")}
          >
            2H
          </button>
          <button
            className={`time-button ${timeFrame === "4H" ? "active" : ""}`}
            onClick={() => setTimeFrame("4H")}
          >
            4H
          </button>
          <button
            className={`time-button ${timeFrame === "1D" ? "active" : ""}`}
            onClick={() => setTimeFrame("1D")}
          >
            1D
          </button>
          <button
            className={`time-button ${timeFrame === "1W" ? "active" : ""}`}
            onClick={() => setTimeFrame("1W")}
          >
            1W
          </button>
          <button
            className={`time-button ${timeFrame === "1M" ? "active" : ""}`}
            onClick={() => setTimeFrame("1M")}
          >
            1M
          </button>
          <div className="divider"></div>
          <button className="indicator-button">
            <BarChart3 className="icon" />
            Fx Indicators
            <ChevronDown className="icon-small" />
          </button>
        </div>
        <button className="maximize-button">
          <Maximize2 className="icon" />
        </button>
      </div>

      {/* Ticker info */}
      <div className="ticker-info">
        <div className="ticker-name">
          <input type="checkbox" className="ticker-checkbox" checked readOnly />
          <span className="ticker-symbol">BTC/USD</span>
        </div>
        <div className="price-info green">O {formatPrice(openPrice)}</div>
        <div className="price-info green">H {formatPrice(highPrice)}</div>
        <div className="price-info green">L {formatPrice(lowPrice)}</div>
        <div className="price-info green">C {formatPrice(closePrice)}</div>
        <div className="price-change">
          Change: <span className="green">{changePercent}%</span>
        </div>
        <div className="price-amplitude">
          Amplitude: <span className="green">{amplitude}%</span>
        </div>
      </div>

      {/* Main chart */}
      <div className="main-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ADE80" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={{ stroke: "#6B7280" }}
              tick={{ fill: "#E5E7EB" }}
              tickLine={{ stroke: "#6B7280" }}
            />
            <YAxis
              domain={["dataMin - 100", "dataMax + 100"]}
              orientation="right"
              axisLine={{ stroke: "#6B7280" }}
              tick={{ fill: "#E5E7EB" }}
              tickLine={{ stroke: "#6B7280" }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={currentPrice} stroke="#F59E0B" strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="close"
              stroke="#4ADE80"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
            {data.map((entry, index) =>
              renderCandlestick({
                x: index * (800 / data.length),
                y: 0,
                width: 6,
                height: 350,
                datum: entry,
              })
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Current price indicator */}
      <div className="current-price-container">
        <div className="current-price" style={{ backgroundColor: '#F59E0B', color: '#1F2937' }}>
          {formatPrice(currentPrice)}
        </div>
      </div>

      {/* Volume chart */}
      <div className="volume-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="date"
              axisLine={{ stroke: "#6B7280" }}
              tick={{ fill: "#E5E7EB" }}
              tickLine={{ stroke: "#6B7280" }}
            />
            <YAxis
              orientation="right"
              axisLine={{ stroke: "#6B7280" }}
              tick={{ fill: "#E5E7EB" }}
              tickLine={{ stroke: "#6B7280" }}
            />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <Bar dataKey="volume" fill={(entry) => entry.color} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Volume info */}
      <div className="volume-info">
        <div className="volume-btc">
          Vol(BTC): <span className="volume-value">65,254K</span>
        </div>
        <div className="volume-usd">
          Vol(USD): <span className="volume-value">2.18B</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;