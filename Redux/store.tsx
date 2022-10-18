import {configureStore} from '@reduxjs/toolkit';
import authUserReducer from './slice';
export interface Reducer {
  authUser: {
    authUser: string;
  };
}
export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});
