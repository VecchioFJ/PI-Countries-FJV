import "./Country.Module.css"
import { NavLink } from "react-router-dom";

const Country = (props) => {

    const { ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion, Activities  } = props;
    return( 
        <NavLink className="NavCountry" to={`/detail/${ID}`}>
            <div className="country">
                <div className="imgDiv">
                <img className="bandera" src={Bandera} alt= {`Flag of ${Nombre}`}/>
                { Activities.length && <div className="imgAct" />}
                </div>
                <h2 className="id" >{Nombre}</h2>
                <hr/>
                <h4 className="id" >{Continente}</h4>
                <hr/>
                <h5 className="id" >{Poblacion.toLocaleString()} Hab.</h5>
            </div>
        </NavLink>
    )
}

export default Country;