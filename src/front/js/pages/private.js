import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Private = () => {

    const navigate = useNavigate()
    let token = localStorage.getItem("jwt-token")

    useEffect(() => {
        if (!token) {
            navigate("/home")
        }
    })

    return(
        <>
            <Navbar showNavbar={true} />
            <div className="containerPrivate p-4 bg-dark text-white">
                      <h1>Private</h1>
                  <div className="card-body p-4 bg-dark text-white">
                      <h5 className="card-title">You have logged in a private page with:</h5>
                      <p className="card-text">{localStorage.getItem("email")}</p>
                  </div>
            </div>
        </>
    )
}