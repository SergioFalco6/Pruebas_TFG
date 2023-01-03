import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

axios.defaults.withCredentials = true;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
