import React from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {store} from './common/redux/store';
import {main} from './ui/theme/theme';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={main}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
