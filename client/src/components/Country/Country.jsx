import "./Country.Module.css"
import { NavLink } from "react-router-dom";

const Country = (props) => {

    const { ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion, Activities  } = props;
    return( 
        <NavLink to={`/detail/${ID}`}>
            <div className="country">
                <div>
                <img className="bandera" src={Bandera} alt= {`Flag of ${Nombre}`}/>
                </div>
                <h4 className="id" >{Nombre}</h4>
                <hr/>
                <h4 className="id" >{Continente}</h4>
            </div>
        </NavLink>
    )
}

export default Country;