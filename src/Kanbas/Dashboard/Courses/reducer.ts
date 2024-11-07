import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../Database";
const initialState = {
    courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
        const newCourse: any = {
            _id: new Date().getTime().toString(),
            ...action.payload
          };
          state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse:(state, action)=>{
         const newCourse = state.courses.filter(
            (m: any) => !(m.course._id === action.payload.course) ) as any;
            state.courses = [...newCourse]
    },
    updateCourse : (state, action)=>{
        
            state.courses = state.courses.map((m: any) =>
              m._id === action.payload._id ? action.payload : m
            ) as any;
          
    }
  },
  
});
export const { addCourse, deleteCourse,updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;