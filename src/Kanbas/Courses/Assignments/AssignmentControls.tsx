import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { AiOutlineStop } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
export default function AssignmentControls() {
    const navigate = useNavigate();
    const { cid } = useParams();
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={() => {
                navigate(
                    "/Kanbas/Courses/" + cid + "/Assignments/newAssignment"
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

