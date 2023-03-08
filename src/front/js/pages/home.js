import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbar showNavbar={false} />
      <div className="containerHome p-4 bg-dark text-white">

        <h1 className="text-center">Home</h1>
        <form>
            <div className="containerhome">
                <button type="button" className="btn btn-secondary me-2" onClick={handleLoginClick} >Login</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleSignUpClick}>Signup</button>
            </div>   
        </form>
    </div>
    </>
  );
};