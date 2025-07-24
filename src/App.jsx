// import React, { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';

// const App = () => {
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Option 1: Auto-fetch on component mount
//   useEffect(() => {
//     console.log("Initializing API Connection...");
//     setLoading(true);
    
//     fetch('/api/data')
//       .then(res => {
//         console.log("HTTP Status:", res.status);
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         console.log("API Data Received:", data);
//         setApiData(data);
//         setError(null);
//       })
//       .catch(err => {
//         console.error("API Fetch Error:", err);
//         setError(err.message);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // Option 2: Manual refresh function
//   const fetchData = async () => {
//     console.log("Manual Refresh Triggered...");
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5001/api/status");
//       console.log("Refresh HTTP Status:", response.status);
      
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
//       const result = await response.json();
//       console.log("Refreshed Data:", result);
      
//       setApiData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Refresh Error:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Debug Panel */}
//       <div style={{
//         padding: '10px',
//         margin: '10px',
//         background: '#f5f5f5',
//         borderRadius: '5px'
//       }}>
//         <h3>API Connection Status</h3>
//         {loading && <p>Loading data...</p>}
//         {error && <p style={{color: 'red'}}>Error: {error}</p>}
//         {apiData && (
//           <div>
//             <button onClick={fetchData} style={{
//               padding: '5px 10px',
//               margin: '5px',
//               cursor: 'pointer'
//             }}>
//               Refresh Data
//             </button>
//             <pre style={{
//               background: 'white',
//               padding: '10px',
//               overflowX: 'auto'
//             }}>
//               {JSON.stringify(apiData, null, 2)}
//             </pre>
//           </div>
//         )}
//       </div>

//       {/* Main App Routes */}
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData} />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import './App.css';
// import { fetchData } from './services/api';

// const App = () => {
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   // const fetchData = async () => {
//   //   try {
//   //     setLoading(true);
//   //     setError(null);
      
//   //     const response = await fetch('/api/data');
      
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! status: ${response.status}`);
//   //     }
      
//   //     const data = await response.json();
//   //     setApiData(data);
//   //   } catch (err) {
//   //     setError(err.message);
//   //     console.error('API fetch error:', err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


// // In your component
// const fetchAppData = async () => {
//   try {
//     setLoading(true);
//     const data = await fetchData();
//     setApiData(data);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="app">
//       <header>
//         <h1 className="text-center">My Application</h1>
//       </header>
      
//       <main className="container">
//         {loading ? (
//           <div className="loader">Loading application data...</div>
//         ) : error ? (
//           <div className="error mb-4">
//             <p>Error: {error}</p>
//             <button 
//               className="btn" 
//               onClick={fetchData}
//               aria-label="Retry loading data"
//             >
//               Retry
//             </button>
//           </div>
//         ) : (
//           <Routes>
//             <Route path="/" element={<Home apiData={apiData} />} />
//           </Routes>
//         )}
//       </main>
//     </div>
//   );
// };

// export default App;


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
