import React from 'react';
import './Loader.css';

const Loader = ({ isLoading = false }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-layer">
          <div className="loader" />
        </div>
      )}
    </>
  );
};

export default Loader;
