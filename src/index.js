import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import { store } from './store';
// import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

    <App/>
 
);