import { configureStore } from '@reduxjs/toolkit'
import memReducer from '../slices/createSliceMem';

const store = configureStore({
  reducer: {
    memReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch