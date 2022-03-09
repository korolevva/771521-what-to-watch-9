import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { reducer } from './reducer';

export const api = createAPI();

export const store = configureStore(
  {
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
