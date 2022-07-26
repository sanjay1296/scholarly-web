import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./components/Users/slices/user";
import dashboardReducer from "./components/Dashboard/dashboardSlice";
import schoolReducer from "./components/School/schoolSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    dashboard: dashboardReducer,
    schools: schoolReducer,
  },
});
