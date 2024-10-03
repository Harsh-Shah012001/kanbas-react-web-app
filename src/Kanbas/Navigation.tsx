import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router"
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>
      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`nav-link ${pathname.includes("Account") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <FaRegCircleUser className="fs-1 text text-white" />
        Account </Link><br />

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`nav-link ${pathname.includes("Dashboard") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard </Link><br />

      <Link to="/Kanbas/Courses/1" id="wd-course-link"
        className={`nav-link ${pathname.includes("Courses") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <LiaBookSolid className="fs-1 text-danger" />
        Courses </Link><br />

      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className={`nav-link ${pathname.includes("Calendar") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <IoCalendarOutline className="fs-1 text-danger" />
        Calender </Link><br />


      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`nav-link ${pathname.includes("Inbox") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <FaInbox className="fs-1 text-danger" />
        &nbsp;&nbsp;&nbsp;Inbox &nbsp;&nbsp;&nbsp;    </Link><br />
        
      <Link to="/Labs" id="wd-labs-link"
        className={`nav-link ${pathname.includes("Labs") ? "list-group-item text-red bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}>
        <LiaCogSolid className="fs-1 text-danger" />
        &nbsp; Labs&nbsp; </Link><br />
    </div>


    // <div id="wd-kanbas-navigation">
    //       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
    //       <Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br/>
    //       <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
    //       <Link to="/Kanbas/Dashboard" id="wd-course-link">Courses</Link><br/>
    //       <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
    //       <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
    //       <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
    //     </div>

  );
}

