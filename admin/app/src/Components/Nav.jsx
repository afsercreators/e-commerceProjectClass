import React from "react";
import { logout } from "../store/action/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="shadow">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <button onClick={logoutHandler}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
