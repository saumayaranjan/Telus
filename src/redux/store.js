import { reducer } from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);