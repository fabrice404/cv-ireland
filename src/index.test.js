import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import cv from'./cv.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App cv={cv} />, div);
});
