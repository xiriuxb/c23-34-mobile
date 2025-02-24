import { createSlice } from "@reduxjs/toolkit";

interface PayFlyState {
  nameUser: string;
}

const initialState: PayFlyState = {
  nameUser: "",
};

const payFlySlice = createSlice({
  name: "payFy",
  initialState,
  reducers: {
    setNameUser: (state, action) => {
      state.nameUser = action.payload;
    },
  },
});

export const { setNameUser } = payFlySlice.actions;
export default payFlySlice.reducer;
