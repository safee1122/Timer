import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "counter",
  initialState: {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0,
  },
  reducers: {
    setStartTimer: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      let interval;
      const countDownDate = new Date("April 10,2022").getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          // Stop Timer

          clearInterval(interval.current);
        } else {
          //       // Update Timer
          //       // setTimerDays(days);
          //       // setTimerHours(hours);
          //       // setTimerMinutes(minutes);
          //       // setTimerSeconds(seconds);
          const action = {
            payload: {
              timerDays: days,
              timerHours: hours,
              timerDays: minutes,
              timerDays: seconds,
            },
          };
          state.timerDays = action.payload.timerDays;
          state.timerHours = action.payload.timerHours;
          state.timerMinutes = action.payload.timerMinutes;
          state.timerSeconds = action.payload.timerSeconds;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStartTimer } = timerSlice.actions;

export default timerSlice.reducer;
