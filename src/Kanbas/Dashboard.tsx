import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS6140 Machine Learning
              </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS5800 Algorithms
              </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS5010 Program Design Paradigm(Java)
              </h5>
              <p className="wd-dashboard-course-title">
                Program Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS3000 Python Java
              </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS1200 SQL
              </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div><br />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/course-image.png" width={200} />
            <div>
              <h5>
                CS1800 Discrete Structures
              </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

