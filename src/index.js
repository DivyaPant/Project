import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
     <HashRouter>
      <App />
      </HashRouter>
  </React.Fragment>
);

serviceWorker.unregister();
