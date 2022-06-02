import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalDataProvider } from './components/GlobalDataProvider/GlobalDataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalDataProvider>
      <App />
    </GlobalDataProvider>
  </React.StrictMode>
);
