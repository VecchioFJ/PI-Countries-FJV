/* eslint-disable react/prop-types */
import "./DetailCard.Module.css"

const DetailCard = (props) => {

    const { ID, Nombre, Bandera, Continente, Capital, Subregion, Area, Poblacion, Activities  } = props;
    return( 
            <div className="containerDetail">
                <div className="imgDetail">
                    <img className="flagDetail" src={Bandera} alt= {`Flag of ${Nombre}`}/>
                </div>
                <h2 className="id" >{Nombre}</h2>
                <hr/>
                <h4 className="id" >{Continente}</h4>
                <hr/>
                <h5 className="id" >{Poblacion?.toLocaleString()} Hab.</h5>
            </div>
    )
}

export default DetailCard;