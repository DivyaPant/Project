import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
     <BrowserRouter basename='/Project'>
      <App />
      </BrowserRouter>
  </React.Fragment>
);

serviceWorker.unregister();
