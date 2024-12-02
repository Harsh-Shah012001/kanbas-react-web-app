import { Routes, Route, Navigate, useParams } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import * as userClient from "./Account/client";
import Session from "./Account/Session";
import PeopleTable from "./Courses/People/Table";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Dashboard/Courses/reducer"
import ProtectedDashboard from "./Dashboard/protectedDashboard";
import * as courseClient from "./Courses/client";
export default function Kanbas() {
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
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  const fetchCourseCallback = ()=>{fetchCourses()}
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [allcourse, setAllCourse] = useState<any[]>([]);
  const [toggler, setToggler] = useState(true)
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    fetchCourses();
  };

  const fetchAllCourse = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setAllCourse(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllCourse();
  }, [currentUser]);

  const deleteACourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
    fetchCourses();
  };

  const updateACourse = async () => {
    await courseClient.updateCourse(course);
    await fetchAllCourse()
    //   // setCourses(courses.map((c) => {
    //   //     if (c._id === course._id) { return course; }
    //   //     else { return c; }
    //   // })
    // );
  };


  const toggle = () => {

    if (toggler) {
      setToggler(false)

    }
    else {
      setToggler(true)
    }


  }
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={currentUser && (toggler || currentUser.role == "FACULTY") ? currentUser && allcourse.filter((course: any) =>
                    enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )
                  ).map((course: any) => ({ ...course, enrolled: true }))
                    :
                    currentUser && allcourse.map((course: any) => {
                      if (enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      )) {
                        return { ...course, enrolled: true }
                      }
                      else {
                        return { ...course, enrolled: false }
                      }
                    })
                  }
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteACourse}
                  updateCourse={updateACourse}
                  fetchCourse = {fetchCourseCallback}
                  toggle={toggle} />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedDashboard>
                <Courses courses={currentUser && (toggler || currentUser.role == "FACULTY") ? currentUser && allcourse.filter((course: any) =>
                  enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                ).map((course: any) => ({ ...course, enrolled: true }))
                  :
                  currentUser && allcourse.map((course: any) => {
                    if (enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )) {
                      return { ...course, enrolled: true }
                    }
                    else {
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
    </Session>
  );
}