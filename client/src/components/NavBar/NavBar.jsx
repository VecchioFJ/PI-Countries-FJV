import { NavLink } from "react-router-dom";
import "./NavBar.Module.css"

const NavBar = () => {
    return( 
        <div className="mainContainer">
            <NavLink to="/home"><button className="navlink" title="Haz click para ir al home"> Home</button> </NavLink>
            <NavLink to="/form"> <button className="navlink"title="Haz click para acceder al formulario y crear actividades"> Crea y asigna Actividades</button> </NavLink>
            <NavLink to="/"><button className="navlink" title="Haz click para volver al inicio"> Log Out</button> </NavLink>
        </div>
    )
}

export default NavBar;



