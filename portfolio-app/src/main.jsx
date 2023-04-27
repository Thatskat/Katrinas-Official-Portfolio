import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// LIGHTBULB CSS (LIGHT/DARK MODE SWITCH)
import "@theme-toggles/react/css/Lightbulb.css";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
