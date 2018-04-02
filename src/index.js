import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function updateCssWindowHeight() {
    document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
}

updateCssWindowHeight();

window.addEventListener('resize', () => {
    updateCssWindowHeight();
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
