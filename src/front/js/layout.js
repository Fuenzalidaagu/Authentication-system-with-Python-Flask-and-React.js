import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home"
import { Signup } from "./pages/signup"
import { Login } from "./pages/login"
import { Private } from "./pages/private"

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const URL_API = process.env.BACKEND_URL
//create your first component
const Layout = () => {
    let token = localStorage.getItem("jwt-token")

    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home URL_API={URL_API} />} path="/home"/>
                        <Route element={<Login URL_API={URL_API} />} path="/login"/>
                        <Route element={<Signup URL_API={URL_API} />} path="/signup"/>
                        <Route element={<Private/>} path="/private"/>
                        <Route element={token?<Private/>:<Home/>} path="/"/>


                        <Route element={<h1 className="text-center">Not found!</h1>} path="*" />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
