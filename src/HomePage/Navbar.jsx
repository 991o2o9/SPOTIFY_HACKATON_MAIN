import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAuth } from "../components/context/AuthContextProvider";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import UserPage from "../pages/UserPage";
const Navbar = () => {
  const { currentUser, handleLogOut, checkAuth, error } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  console.log(currentUser);
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="header">
        <div className="controls">
          <button type="button" className="icon-button">
            <FaChevronLeft />
          </button>
          <button type="button" className="icon-button">
            <FaChevronRight />
          </button>
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link to="/adminPage">Admin</Link>
            </li>
            <li>
              <Link to="/premiumPage">Premium</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>

            <li className="divider">|</li>
            {currentUser ? (
              <FormControl
                className="account-info"
                style={{
                  backgroundColor: "white",
                  width: "90px",
                  fontSize: "12px",
                  color: "black",
                }}
                fullWidth
              >
                <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  {" "}
                  <Link to="/cabinet">
                    <MenuItem>{currentUser}</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
                <button onClick={() => navigate("/login")} type="button">
                  Log In
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
