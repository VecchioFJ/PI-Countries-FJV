import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"



const NavBar = () => {
    return( 
        <div className={style.mainContainer}>
            <NavLink to="/home"> Home </NavLink>
            <NavLink to="/form"> Actividades </NavLink>
        </div>
    )
}

export default NavBar;