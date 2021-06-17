import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.js';

ReactDOM.render(
  <div className='app-wrapper'>
    <HashRouter>
      <App />
    </HashRouter>
  </div>,
  document.getElementById('root')
);