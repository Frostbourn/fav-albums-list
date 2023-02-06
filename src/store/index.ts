import { configureStore } from '@reduxjs/toolkit';
import favSlice from '../slices/favListSlices';

export const store = configureStore({
  reducer: {
    favorites: favSlice,
  },
});
