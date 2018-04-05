import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from "react-router-dom";
import AppContainer from './AppContainer.js';
//import DevTools from './DevTools';

export default function Root({ store, history }) {
  console.log("history: " + history);
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <BrowserRouter>
        <div>
          <AppContainer />
          {/* //<DevTools /> */}
        </div>
        </BrowserRouter>
      {/* </ConnectedRouter> */}
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};