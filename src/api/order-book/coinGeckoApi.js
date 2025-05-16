// api.js

const baseURL = 'https://api.coingecko.com/api/v3';

async function fetchCoinData(coinId = 'bitcoin', currency = 'usd') {
  try {
    const response = await fetch(`${baseURL}/simple/price?ids=${coinId}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data[coinId];
  } catch (error) {
    console.error("Could not fetch coin data:", error);
    return null;
  }
}

async function fetchOrderData() {
  // In a real application, this function would fetch order data
  // from your backend or a relevant API endpoint.
  // For this example, we'll return the static data provided in the prompt.
  return {
    "bitcoin": {
      "usd": 103663,
      "usd_market_cap": 2058811028682.1257,
      "usd_24h_vol": 31366805440.52759,
      "usd_24h_change": 1.6371141415010508,
      "last_updated_at": 1747407859
    },
    "ethereum": {
      "usd": 2587.79,
      "usd_market_cap": 312382548453.98755,
      "usd_24h_vol": 24720177371.124744,
      "usd_24h_change": 3.4336980692397274,
      "last_updated_at": 1747407868
    }
  };
}

export { fetchCoinData, fetchOrderData, baseURL };