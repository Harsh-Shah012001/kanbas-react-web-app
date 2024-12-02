import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedDashboard({ children }: { children: any }) {
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  if (enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id &&
      enrollment.course === cid
  )) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
}}