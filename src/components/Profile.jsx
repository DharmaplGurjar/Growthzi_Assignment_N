function App() {
    const fetchData = () => {
      fetch('/api/data')
        .then(res => res.json())
        .then(data => console.log(data));
    };
  
    return (
      <button onClick={fetchData}>
        Fetch Data
      </button>
    );
  }