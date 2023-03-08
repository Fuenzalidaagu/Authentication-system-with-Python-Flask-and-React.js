import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ showNavbar }) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("jwt-token");

  function logout() {
    localStorage.clear();
    navigate("/home");
    return console.log("No user logged");
  }

  function login() {
    navigate("/login");
  }

  return (
    <>
      {showNavbar && (
        <nav className="containerHome navbar navbar-light bg-dark text-white">
          <div className="container">
            {token ? (
                <button className="btn btn-secondary text-white navbar-brand mb-0 h1">
                  {localStorage.getItem("email")}
                </button>
            ) : (
              <></>
            )}
            <div className="ml-auto">
                <button className="btn btn-secondary" onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};