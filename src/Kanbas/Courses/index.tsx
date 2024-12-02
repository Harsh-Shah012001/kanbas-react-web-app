import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from './Home';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa'
import PeopleTable from "./People/Table";
import Quizes from "./Quizes";
import QuizzesEditor from "./Quizes/QuizEditor";
import Details from "./Quizes/details";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2> <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">

          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Quizzes" element={<Quizes />} />
            <Route path="Quizzes/Add/:qid" element={<QuizzesEditor />} />
            <Route path="Quizzes/Info/:qid" element={<Details />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

