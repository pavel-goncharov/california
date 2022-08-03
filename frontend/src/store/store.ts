import {combineReducers, configureStore} from '@reduxjs/toolkit';
import itemSlice from './slices/item.slice';

const sliceReducers = {
  item: itemSlice.reducer,
};

const rootReducer = combineReducers({
  ...sliceReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;