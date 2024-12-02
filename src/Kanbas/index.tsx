import { Routes, Route, Navigate, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import * as db from "./Database";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  deleteCourse,
  updateCourse,
} from "./Dashboard/Courses/reducer";
import ProtectedDashboard from "./Dashboard/protectedDashboard";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourseCallback = ()=>{fetchCourses()}
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // const allcourse = useSelector((state:any) => state.coursesReducer).courses;
  const [toggler, setToggler] = useState(true);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    fetchCourses();
    // dispatch(addCourse({ ...course, _id: new Date().getTime().toString() }));
  };
  const deleteACourse = async (courseId: any) => {
    

    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    fetchCourses();
    // dispatch(deleteCourse({ course: courseId }));
  };
  const updateACourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  )
  await fetchCourses();
  };

  const toggle = () => {
    if (toggler) {
      setToggler(false);
    } else {
      setToggler(true);
    }
  };
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={
                      // currentUser && (toggler || currentUser.role == "FACULTY")
                      //   ? currentUser &&
                          courses.map((course: any) => ({
                            ...course,
                            enrolled: true,
                          }))
                        // : currentUser &&
                        //   courses.map((course: any) => {
                        //     return { ...course, enrolled: true };
                        //   })
                    }
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteACourse}
                    updateCourse={updateACourse}
                    fetchCourse = {fetchCourseCallback}
                    toggle={toggle}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedDashboard>
                  <Courses
                    courses={
                      currentUser && (toggler || currentUser.role == "FACULTY")
                        ? currentUser &&
                          courses.map((course: any) => ({
                            ...course,
                            enrolled: true,
                          }))
                        : currentUser &&
                          courses.map((course: any) => {
                            return { ...course, enrolled: true };
                          })
                    }
                  />
                </ProtectedDashboard>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}