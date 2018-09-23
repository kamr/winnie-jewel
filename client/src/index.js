import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: '64px'
    }
  },
  palette: {
    primary: {
        main: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    },
    background: {
      default: '#FFFFFF'
    }
  },
  status: {
    danger: 'orange',
  },
  spacing: {
    unit: 2
  },
  typography: {
    "fontFamily": "Roboto, Helvetica, Arial, sans-serif"
  }
});

render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
