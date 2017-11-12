import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import cv from'./cv.json';

ReactDOM.render(<App cv={cv} />, document.getElementById('root'));
registerServiceWorker();
