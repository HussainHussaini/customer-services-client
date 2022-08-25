import { Action, createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  //get plans
  plans: [],
};
const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    //Add plans
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
  },
});

export const { setPlans } = plansSlice.actions;
export default plansSlice.reducer;

