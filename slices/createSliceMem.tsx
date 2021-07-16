import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InnitialStateType } from "./createSliceMemtypes";
import { MemsNameType } from "./createSliceMemtypes";

const initialState: InnitialStateType = {
  author: "Mateusz",
  votes: {},
  uploaded: false
};

export const fetchMemNames = createAsyncThunk(
  "/datoCMS",
  async (data: MemsNameType | undefined) => {
    const response = await data;
    return response;
  }
);
const memSlice = createSlice({
  name: "mem",
  initialState,
  reducers: {
    memNameUploaded(state) {
        state.uploaded= true;
  }
},
  extraReducers: (builder) => {
    builder.addCase(fetchMemNames.fulfilled, (state, action) => {
      action.payload?.allMems.map((item) => {
        state.votes = {
          ...state.votes,
          [item.title]: {
            upvote: 1,
            downvote: 1,
          },
        };
        state.uploaded= true;
      });
    } 
    );
  },
});

export const { memNameUploaded } = memSlice.actions;

export default memSlice.reducer;
