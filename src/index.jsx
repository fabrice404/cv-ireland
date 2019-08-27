import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import cv from './cv.json';

ReactDOM.render(<App {...cv} />, document.getElementById('root'));
