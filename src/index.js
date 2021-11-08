import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from "styled-components";

import configureStore from 'config/redux/configureStore';
import theme from "constants/theme";
import GlobalStyles from "components/styles";

import App from 'components/Common/App';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root'),
);