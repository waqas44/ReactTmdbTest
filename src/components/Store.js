import { configureStore } from '@reduxjs/toolkit';
import ListSlice from '../reduxtoolkit/listslice';

export const store = configureStore({
  reducer: {
    ListSlice: ListSlice,
  },
});
