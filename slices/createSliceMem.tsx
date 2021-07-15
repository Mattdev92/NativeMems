import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InnitialStateType } from "./createSliceMemtypes";

const initialState: InnitialStateType = {
  author: "Mateusz",
  votes: [],
};
export const fetchMemNames = createAsyncThunk("/datoCMS", async (data, thunkApi) => {
  const response = await data;
  return response;
});
const memSlice = createSlice({
  name: "mem",
  initialState,
  reducers: {
    //   memNameAdded(state, action) {
    //     state.names.push(action.payload);
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMemNames.fulfilled, (state, action) => {
      state.votes.push({
        upvote: 1,
        downvote: 1,
      });
    });
  },
});

// export const { memNameAdded } = memSlice.actions;

export default memSlice.reducer;
