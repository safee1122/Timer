import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "counter",
  initialState: {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
    timerStart: false,
  },
  reducers: {
    setStartTimer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        // state.timerDays = action.payload.timerDays;
        // state.timerHours = action.payload.timerHours;
        // state.timerMinutes = action.payload.timerMinutes;
        // state.timerSeconds = action.payload.timerSeconds;
        timerDays: action.payload.timerDays,
        timerHours: action.payload.timerHours,
        timerMinutes: action.payload.timerMinutes,
        timerSeconds: action.payload.timerSeconds,
        timerStart: action.payload.timerStart,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStartTimer } = timerSlice.actions;

export default timerSlice.reducer;
