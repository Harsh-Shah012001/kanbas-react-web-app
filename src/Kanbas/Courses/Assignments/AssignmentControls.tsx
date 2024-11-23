import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { AiOutlineStop } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import * as coursesClient from "../client";
import { addAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentControls() {
    const navigate = useNavigate();
    const { cid } = useParams();
    const dispatch = useDispatch();
    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssign = {course: cid };
        const assign = await coursesClient.createAssignmentForCourse(cid);
        dispatch(addAssignment(assign));
        return assign._id
      };
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={async () => {let asId=await createAssignmentForCourse()
                navigate(
                    "/Kanbas/Courses/" + cid + "/Assignments/"+asId
                );
            }}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>

            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>

        </div>
    );
}

