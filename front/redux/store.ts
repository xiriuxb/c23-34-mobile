import { configureStore } from "@reduxjs/toolkit";
import payFy from "./slice/payFySlice";
import { authSlice } from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    payFy: payFy,
    authSlice: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;