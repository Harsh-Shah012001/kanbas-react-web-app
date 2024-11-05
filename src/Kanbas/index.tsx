import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import PeopleTable from "./Courses/People/Table";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
export default function Kanbas() {
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const {courses} = useSelector((state:any) => state.coursesReducer);
  const [toggler, setToggler] = useState(false)
  const [courses, setCourses] = useState<any[]>(db.courses.filter((course) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.course === course._id
    )
  )
  // .map((course) => ({ ...course, enrolled: true }))
);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const toggle = ()=>{
    
    if(toggler || currentUser.role != "STUDENT"){
      // console.log("in else")
      setCourses(db.courses.filter((course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      )
      .map((course) => ({ ...course, enrolled: true })))
      setToggler(false)
      
    }
    else{
      // console.log("in if")
      setCourses(db.courses
        .map((course)=>{
          if(enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
          )){
            return { ...course, enrolled: true }
          }
          else{
            return { ...course, enrolled: false }
          }
        }))
        setToggler(true)
    }
  
    
  }
  return (
    <div id="wd-kanbas">
            <KanbasNavigation />
          <div  className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute>
                <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                toggle = {toggle}/>
                </ProtectedRoute>
              } />
              <Route path="/Courses/:cid/*" element={
                <ProtectedRoute>
                <Courses courses={courses} />
                </ProtectedRoute>
                
                } />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/People" element={<PeopleTable />} />
            </Routes>
          </div>
    </div>
);}