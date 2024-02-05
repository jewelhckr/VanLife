import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);