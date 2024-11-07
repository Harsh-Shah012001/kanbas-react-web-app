import { Routes, Route, Navigate, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import PeopleTable from "./Courses/People/Table";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import {addCourse, deleteCourse, updateCourse} from "./Dashboard/Courses/reducer"
import ProtectedDashboard from "./Dashboard/protectedDashboard";
export default function Kanbas() {
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const allcourse = useSelector((state:any) => state.coursesReducer).courses;
  const [toggler, setToggler] = useState(true)
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    dispatch(addCourse({ ...course, _id: new Date().getTime().toString() }))
  };
  const deleteACourse = (courseId: any) => {
    dispatch(deleteCourse( {course:courseId} ))
  };
  const updateACourse = () => {
    dispatch(updateCourse({...course}))
  };

  const toggle = ()=>{
    
    if(toggler){
      setToggler(false)
      
    }
    else{
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
                courses={ currentUser && (toggler || currentUser.role == "FACULTY") ? currentUser && allcourse.filter((course:any) =>
                  enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                ).map((course:any) => ({ ...course, enrolled: true }))
              :
              currentUser && allcourse.map((course:any)=>{
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
              })
            }
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteACourse}
                updateCourse={updateACourse}
                toggle = {toggle}/>
                </ProtectedRoute>
              } />
              <Route path="/Courses/:cid/*" element={
                <ProtectedDashboard>
                <Courses courses={currentUser && (toggler || currentUser.role == "FACULTY") ? currentUser && allcourse.filter((course:any) =>
                  enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                ).map((course:any) => ({ ...course, enrolled: true }))
              :
              currentUser && allcourse.map((course:any)=>{
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
              })} />
                </ProtectedDashboard>
                
                } />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="/People" element={<PeopleTable />} />
            </Routes>
          </div>
    </div>
);}