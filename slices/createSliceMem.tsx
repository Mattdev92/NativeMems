import { createSlice } from '@reduxjs/toolkit';
import { InnitialStateType } from './createSliceMemtypes'

const initialState: InnitialStateType = {
  author: 'Mateusz',
  names: ['Mateusz'],
};
const memSlice = createSlice({
  name: 'mem',
  initialState,
  reducers: {
    memNameAdded(state, action) {
      state.names.push(action.payload);
    },
  },
});

export const { memNameAdded } = memSlice.actions;

export default memSlice.reducer;
