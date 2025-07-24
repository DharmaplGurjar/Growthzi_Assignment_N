


import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetching API data...");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/status"); // ✅ correct URL
      console.log("HTTP Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data Received:", result);
      setApiData(result);
      setError(null);
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      {/* Debug Panel */}
      <div style={{
        padding: '10px',
        margin: '10px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        <h3>API Connection Status</h3>
        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {apiData && (
          <div>
            <button onClick={fetchData} style={{
              padding: '5px 10px',
              margin: '5px',
              cursor: 'pointer'
            }}>
              Refresh Data
            </button>
            <pre style={{
              background: 'white',
              padding: '10px',
              overflowX: 'auto'
            }}>
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Main App Routes */}
      <Routes>
        <Route path="/" element={<Home apiData={apiData} />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
