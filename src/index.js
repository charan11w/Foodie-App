import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/restaurant.css'
import App from './App';
import './styles/main.css'
import './styles/SelectedRes.css'
import './styles/Loading.css'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
