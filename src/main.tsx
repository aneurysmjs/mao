import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';

import { App } from '~/components/core/App';

import './assets/scss/styles.scss';

const app = document.querySelector('#app');

const AppWrapper: FunctionComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (app !== null) {
  render(<AppWrapper />, app);
}
