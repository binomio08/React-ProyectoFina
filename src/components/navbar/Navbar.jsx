import React from "react";
import joystick from '../../assets/images/joystick.png';
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={'/'}>
                        <img className="logo" src={joystick} alt="joystick" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to='/combos'>Combos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to='/placas'>Placas de Video</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" href="#"><CartWidget /></NavLink>                          
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;