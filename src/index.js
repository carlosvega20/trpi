import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { UserProvider } from './components/User';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { GlobalStateProvider } from './store';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

ReactDOM.render(
  <GlobalStateProvider>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserProvider>
  </GlobalStateProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
