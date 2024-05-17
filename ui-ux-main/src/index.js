import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleRight, faAngleLeft, faAngleDown); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
