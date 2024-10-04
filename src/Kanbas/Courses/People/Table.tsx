import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Captain</span>{" "}
                            <span className="wd-last-name">America</span></td>
                        <td className="wd-login-id">001234561A</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-12-01</td>
                        <td className="wd-total-activity">11:25:32</td>
                    </tr>


                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Black</span>{" "}
                            <span className="wd-last-name">Widow</span></td>
                        <td className="wd-login-id">001234561Z</td>
                        <td className="wd-section">S103</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2023-12-01</td>
                        <td className="wd-total-activity">09:25:32</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Incredible</span>{" "}
                            <span className="wd-last-name">Hulk</span></td>
                        <td className="wd-login-id">001234871G</td>
                        <td className="wd-section">S104</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2003-03-01</td>
                        <td className="wd-total-activity">09:45:32</td>
                    </tr>


                    </tbody>
            </table>
        </div>);
}