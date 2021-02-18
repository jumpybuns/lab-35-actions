import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-reduxs';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
