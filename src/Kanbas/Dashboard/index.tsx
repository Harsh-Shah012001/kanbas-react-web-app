import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enroll, unEnroll } from "./Enrollment/reducer";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
export default function Dashboard({
  fetchCourses,
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  toggle,
}: {
  fetchCourses:()=>void;
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  toggle: ()=>void
}) {
  console.log("Course123:",courses)
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        {currentUser && currentUser.role === "STUDENT" && (
          <div>
            <button
              className="btn btn-primary float-end mb-2"
              id="wd-add-new-course-click"
              onClick={()=>{
                toggle()
              }}
            >
              Enrollments
            </button>
          </div>
        )}
        {currentUser && currentUser.role === "FACULTY" && (
          <div>
            New Course
            <button
              className="btn btn-primary float-end mb-2"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2 mb-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <br />
            <input
              value={course.name}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
              value={course.description}
              className="form-control"
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
            <hr />
          </div>
        )}
      </h5>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/course-image.png" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <button className="btn btn-primary"> Go </button>
                    </Link>
                    {currentUser && currentUser.role === "STUDENT" && course.enrolled === true && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(unEnroll({user:currentUser._id, course:course._id}))
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Unenroll
                      </button>
                    )}
                    {currentUser && currentUser.role === "STUDENT" && course.enrolled === false && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(enroll({user:currentUser._id, course:course._id}))
                        }}
                        className="btn btn-success float-end"
                        id="wd-delete-course-click"
                      >
                        Enroll
                      </button>
                    )}
                    {currentUser && currentUser.role === "FACULTY" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}
                    {currentUser && currentUser.role === "FACULTY" && (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}