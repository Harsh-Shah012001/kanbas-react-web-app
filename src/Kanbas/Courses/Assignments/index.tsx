import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuFileEdit } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import AssignmentControlRightButtons from "./AssignmentControlRightButtons";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const assignments=db.assignments
  const {cid}=useParams()
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
            <AssignmentControls />
          </div>
        </div>
      </div>


      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <b>ASSIGNMENTS</b>
            <AssignmentControlButtons />
            <span className="border border-dark rounded-5 p-1 me-2 float-end">40% of Total</span>
          </div>

          <ul className="wd-lessons list-group rounded-0">
          {assignments.filter((assign: any)=> assign.course===cid).map((assign:any)=>(
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assign._id}`} className="no-underline">
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuFileEdit className="me-2 fs-3" />
                  <div>
                    {assign.title}
                    <br />
                    <span className="text-danger">Multiple Modules</span> |
                    <b>Not available until </b> {assign.availableDate} {assign.availableTime} | <br />
                    <b>Due</b> {assign.dueDate} {assign.dueTime} | {assign.points} pts
                  </div>
                </div>
                <div className="float-end">
                  <AssignmentControlRightButtons />
                </div>
              </li>
            </Link>
          ))}

          </ul>
        </li>
      </ul>
    </div>
  );

  //   return (
  //     <div id="wd-assignments">
  //       <input id="wd-search-assignment"
  //              placeholder="Search for Assignments" />
  //       <button id="wd-add-assignment-group">+ Group</button>
  //       <button id="wd-add-assignment">+ Assignment</button>
  //       <h3 id="wd-assignments-title">
  //         ASSIGNMENTS 40% of Total <button>+</button>
  //       </h3>
  //       <ul id="wd-assignment-list">
  //         <li className="wd-assignment-list-item">
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A1 - ENV + HTML
  //           </a><br />
  //           Multiple Modules | <b>Not available until </b> May 6 at 12:00 am | <b>Due</b> May 13 at 11:59 pm | 100 pts
  //         </li>
  //         <li className="wd-assignment-list-item">
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A2 - CSS + BOOTSTRAP
  //           </a><br />
  //           Multiple Modules | <b>Not available until </b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59 pm | 100 pts

  //         </li>
  //         <li className="wd-assignment-list-item">
  //           <a className="wd-assignment-link"
  //             href="#/Kanbas/Courses/1234/Assignments/123">
  //             A3 - JAVASCRIPT + REACT
  //           </a><br />
  //           Multiple Modules | <b>Not available until </b> May 20 at 12:00 am | <b>Due</b> May 27 at 11:59 pm | 100 pts
  //         </li>
  //       </ul>
  //     </div>
  // );
}

