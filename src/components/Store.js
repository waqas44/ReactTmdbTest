import { configureStore } from '@reduxjs/toolkit';

// import ListSlice from '../ReduxToolkit/ListSlice';
import ListSlice from './Listslice';

export const store = configureStore({
  reducer: {
    ListSlice: ListSlice,
  },
});
