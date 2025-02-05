import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//create global state of feedback as an object with attributes
// RvdB: Everything looks good here to me. You're setting each
// variable in the store and resetting when done.
const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case `ADD_FEELING`:
      return { ...state, feeling: action.payload };
    case `ADD_UNDERSTANDING`:
      return { ...state, understanding: action.payload };
    case `ADD_SUPPORT`:
      return { ...state, support: action.payload };
    case `ADD_COMMENTS`:
      return { ...state, comments: action.payload };
    case `ON_SUBMIT`:
      return {};
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
