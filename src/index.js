import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StyleRoot } from 'radium';
import './index.css';

ReactDOM.render(
  <StyleRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyleRoot>,
  document.getElementById('root'));
registerServiceWorker();
