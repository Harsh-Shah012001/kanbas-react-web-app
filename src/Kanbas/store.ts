import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer  from "./Dashboard/Enrollment/reducer";
import coursesReducer from "./Dashboard/Courses/reducer";

const store = configureStore({
  reducer: {
    modulesReducer, accountReducer,assignmentsReducer,
    enrollmentReducer,
    coursesReducer
  },
});
export default store;

