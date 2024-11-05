import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuFileEdit } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import AssignmentControlRightButtons from "./AssignmentControlRightButtons";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import AssignmentDelete from "./delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams()

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 float-start">
            <div className="input-group">
              <span className="input-group-text">
                <CiSearch />
              </span>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>


          <div className="col-md-6 d-flex justify-content-end">
            {currentUser && currentUser.role === "FACULTY" && (
              <AssignmentControls />)}
          </div>
        </div>
      </div>


      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <b>ASSIGNMENTS</b>
            {currentUser && currentUser.role === "FACULTY" && (
              <AssignmentControlButtons />)}
            {currentUser && currentUser.role === "FACULTY" && (
              <span className="float-end border border-dark rounded-5 fs-6 p-2 me-4">
                40% of Total
              </span>
            )}
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.filter((assign: any) => assign.course === cid).map((assign: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />


                    {currentUser && currentUser.role === "FACULTY" && (
                      <Link
                        id="wd-assignment-link"
                        className="no-underline"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assign._id}`}
                      >
                        <LuFileEdit className="me-2 fs-3" />
                      </Link>
                    )}


                    <div>
                      {assign.title}
                      <br />
                      <span className="text-danger">Multiple Modules</span> |
                      <b>Not available until </b> {assign.availableDate} {assign.availableTime} | <br />
                      <b>Due</b> {assign.dueDate} {assign.dueTime} | {assign.points} pts
                    </div>
                  </div>
                  {currentUser && currentUser.role === "FACULTY" && (
                    <div className="float-end">
                      <AssignmentControlRightButtons />
                    </div>
                  )}
                  <AssignmentDelete
                    title={assign.title}
                    id={assign._id}
                    deleteAssignment={(id) => {
                      dispatch(deleteAssignment(id));
                    }}
                  />

                </li>
            ))}

          </ul>
        </li>
      </ul>
    </div>
  );
}

