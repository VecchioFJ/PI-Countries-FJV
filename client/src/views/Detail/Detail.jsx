import {React, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";


const Detail = () => {
    let {id} = useParams()
    //console.log(`ID de params: ${id}`);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountryById(id))
    },[dispatch, id])

    const countryDetail = useSelector((state) => state.countryById)
    
    return (
        
        <div>
            <div>
                <div>
                <h2>Detalles del País</h2>
            {
                countryDetail ?
                <div >
                    <img src={countryDetail.Bandera} alt="Imagen no disponible" />
                    <h2>{countryDetail.Nombre}</h2>
                    <h4>{countryDetail.Continente}</h4>
                    <h4>{countryDetail.ID}</h4>
                    <h4>Capital: {countryDetail.Capital}</h4>
                    <h4>Región: {countryDetail.Subregion}</h4>
                    <h4>Área: {countryDetail.Area} km²</h4>
                    <h4>Población: {countryDetail.Poblacion} Hab.</h4>
                </div> : <p>Loading ...</p>
            }
                </div>
            <div>

            <h3>Actividades del País</h3>
            {
                countryDetail.Activities && countryDetail.Activities.length ? 
                countryDetail.Activities.map(act => {
                return (
                        <div key={act.id}>
                            <h4>{act.Nombre}</h4>
                            <p>Dificultad: {act.Dificultad}</p>
                            <p>Duración: {act.Duracion} horas</p>
                            <p>Temporada: {act.Temporada}</p>
                        </div>
                        
                    ) 
                 }) 
                 : <p>No existen actividades en este país</p> 
            }
             <Link to="/form"><button>Crear Actividad</button></Link>               
            </div>
            </div>
        </div>
    )
};

export default Detail;
