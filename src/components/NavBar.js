import React from 'react'
import "./NavBar.css";
import {  Link  } from "react-router-dom";
const NavBar = () => {
    
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="/" >Gorilla News 🌍</Link>
                    <button className="navbar-toggler collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <div className='close-icon py-1'>✗</div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-link">
                                <Link className ="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/entertainment">Entertainment</Link >
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link"  to ='/science'>Science</Link>
                            </li>
                            <li className="nav-link">
                                <Link className ="nav-link" to="/sports">Sports</Link>
                            </li>   
                            <li className="nav-link">
                                <Link className ="nav-link" to="/technology">Technology</Link>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        )
    
}
export default NavBar;
