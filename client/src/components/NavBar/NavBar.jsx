import { NavLink } from "react-router-dom";
import "./NavBar.Module.css"

const NavBar = () => {
    return( 
        <div className="mainContainer">
            <NavLink to="/home"> Home </NavLink>
            <NavLink to="/form"> Crea y asigna Actividades </NavLink>
            <NavLink to="/"> Log Out </NavLink>
        </div>
    )
}

export default NavBar;