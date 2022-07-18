import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/users/slices/user";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
