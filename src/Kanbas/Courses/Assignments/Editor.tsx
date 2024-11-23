import * as db from "../../Database";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, editAssignment } from "./reducer";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { pathname } = useLocation();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveAssignment = async (assign: any) => {
    await assignmentClient.updateAssignment(assign);
    dispatch(editAssignment(assign));
  };

  let assignment = {
    title: "New Assignment",
    course: cid,
    type: "Multiple Modules",
    availableDate: "2024-10-31",
    availableTime: "12:00am",
    dueDate: "2024-11-07",
    dueTime: "11:59pm",
    points: "100",
    description: "Test Assignment"
  }

  const dbassignment = assignments.filter((assignment: any) => (assignment._id === aid))[0];
  if (dbassignment) {
    assignment = dbassignment
  }

  const [title, setTitle] = useState(assignment.title);
  const [type, setType] = useState(assignment.type);
  const [availableDate, setAvailableDate] = useState(assignment.availableDate);
  const [availableTime, setAvailableTime] = useState(assignment.availableTime);
  const [dueDate, setDueDate] = useState(assignment.dueDate);
  const [dueTime, setDueTime] = useState(assignment.dueTime);
  const [points, setPoints] = useState(assignment.points);
  const [description, setDescription] = useState(assignment.description);



  return (
    <div id="wd-assignments-editor">
      <div className="col ms-3">
        <div className="row ms-2">
          <h5>Assignment Name</h5>
        </div>
        <div className="row ms-3 me-3 mb-4">
          <label htmlFor="wd-name" className="form-label"></label>
          <input id="wd-name" className="form-control" value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <br />
          <br />
        </div>
        <div className="ms-3 mb-4 me-3 row">
          <textarea
            id="wd-description"
            className=" form-control border border-dark rounded-1  mt-2"
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </div>
        <div className="ms-3 mb-4 me-2 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-points" className="float-end">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              id="wd-points"
              className=" form-control border border-dark rounded-1"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>
        </div>

        <div className="ms-3 mb-4 me-2 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-group" className="float-end">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select className="form-select" id="wd-group">
              <option value="3" selected>
                Quiz
              </option>
              <option value="1">Assignments</option>
              <option value="2">Labs</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="ms-3 mb-4 me-2 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-display-grade-as" className="float-end">
              Display grade as
            </label>
          </div>
          <div className="col-8">
            <select className="form-select" id="wd-display-grade-as">
              <option value="3" selected>
                Percentage
              </option>
              <option value="1">Decimal(4)</option>
              <option value="2">Decimal(10)</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="ms-3 mb-4 me-2 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-submission-type" className="float-end">
              Submission Type
            </label>
          </div>
          <div className="col-8">
            <div className=" border border-dark rounded-2 p-3">
              <select className="form-select mb-4" id="wd-submission-type">
                <option value="3" selected>
                  online
                </option>
                <option value="1">Offline</option>
              </select>

              <label>
                <h5>
                  <strong>Online Entry Options</strong>
                </h5>
              </label>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website Url
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Aannotation
                </label>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-3 mb-4 me-2 row d-flex">
          <div className="col-4">
            <label htmlFor="wd-assign-to" className="float-end">
              Assign
            </label>
          </div>
          <div className="col-8">
            <div className=" border border-dark rounded-2 p-3">
              <label htmlFor="wd-assign-to">
                <h5>
                  <strong>Assign to</strong>
                </h5>
              </label>
              <input
                id="wd-assign-to"
                className=" form-control mb-3 border border-dark rounded-1"
                placeholder="jdoe"
              />
              <label htmlFor="wd-due-date">
                <h5>
                  <strong>Due</strong>
                </h5>
              </label>
              <input
                id="wd-assign-to"
                type="date"
                className=" form-control mb-3 border border-dark rounded-1"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <div className="row">
                <div className="col-6">
                  <label htmlFor="wd-available-from">
                    <h5>
                      <strong>Available From</strong>
                    </h5>
                  </label>
                  <input
                    id="wd-available-from"
                    type="date"
                    className=" form-control mb-3 border border-dark rounded-1"
                    value={availableDate}
                    onChange={(e) => setAvailableDate(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="wd-available-until">
                    <h5>
                      <strong>Until</strong>
                    </h5>
                  </label>
                  <input
                    id="wd-available-until"
                    type="date"
                    className=" form-control mb-3 border border-dark rounded-1"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-3 mb-4 me-2 row d-flex">
          <hr></hr>
          <div className="d-flex me-2 justify-content-end w-100">

            <Link to={`${pathname.split(aid ? aid : "")[0]}`}><button
              id="wd-add-assignment-group"
              className="float-end text-nowrap btn btn-lg btn-secondary me-1"
            >
              Cancel
            </button></Link>

            <Link to={`${pathname.split(aid ? aid : "")[0]}`}>
              <button
                id="wd-add-assignment-group"
                className="float-end text-nowrap btn btn-lg btn-danger me-1"
                onClick={() => {
                  saveAssignment({
                    "_id": aid,
                    "title": title,
                    "course": cid,
                    "availableDate": availableDate,
                    "availableTime": availableTime,
                    "dueDate": dueDate,
                    "dueTime": dueTime,
                    "until": dueDate,
                    "untilTime": dueTime,
                    "points": points,
                    "desc": description, editing: false
                  });
                  
                  navigate(pathname.split(aid ? aid : "")[0]);
                }}
              >
                Submit
              </button></Link>

          </div>
        </div>

      </div>

    </div>
  );
}