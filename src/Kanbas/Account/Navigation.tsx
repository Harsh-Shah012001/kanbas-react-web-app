import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Account/Signin`}  className={`nav-link ${pathname.includes("Signin") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Signin  </Link> 
      <Link to={`/Kanbas/Account/Signup`}  className={`nav-link ${pathname.includes("Signup") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Signup  </Link> 
      <Link to={`/Kanbas/Account/Profile`} className={`nav-link ${pathname.includes("Profile") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Profile </Link> 
    </div>
);}

