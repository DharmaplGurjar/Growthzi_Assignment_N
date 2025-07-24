import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EditableSection from '../components/EditableSection';
import AddButtonForm from '../components/AddButtonForm';

const Home = ({ apiData }) => {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      
      {/* Display API data if available */}
      {apiData && (
        <div className="api-data-display mb-4">
          <h2>API Response</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
      
      <EditableSection />
      <AddButtonForm />
    </div>
  );
};

export default Home;