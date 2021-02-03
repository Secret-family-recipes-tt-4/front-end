import React,{useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();

  const handleSignout = (e) => {
    localStorage.clear("token");
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed top">
        {/* <Link to="/">Secret Family Recipies</Link> */}
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-left">
            <li className="navbar-item">
            <i class="fas fa-utensils"></i>
            </li>

            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link" onClick={handleSignout}>
                Logout
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <li className="navbar-item">
                <Link to="/User-page" className="nav-link">
                  User page
                </Link>
              </li>
            )}
            {localStorage.getItem("token") && (
              <li className="navbar-item">
                <Link to="/New" className="nav-link">
                  New Recipes
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
