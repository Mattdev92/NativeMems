import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InnitialStateType } from "./createSliceMemtypes";
import { MemsNameType } from "./createSliceMemtypes";

const initialState: InnitialStateType = {
  author: "Mateusz",
  votes: {},
  uploaded: false,
  selectedItem: ''
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
    memSelected(state, action) {
        state.selectedItem= action.payload;
  },
    memUpvote(state,action) {
      state.votes = {
        ...state.votes,
        [action.payload]: {
          upvote: state.votes[action.payload].upvote+1,
          downvote: state.votes[action.payload].downvote,
        },
      };
  },
    memDownvote(state,action) {
      state.votes = {
        ...state.votes,
        [action.payload]: {
          upvote: state.votes[action.payload].upvote,
          downvote: state.votes[action.payload].downvote+1,
        },
      };
  },
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

export const { memSelected, memDownvote, memUpvote } = memSlice.actions;

export default memSlice.reducer;
