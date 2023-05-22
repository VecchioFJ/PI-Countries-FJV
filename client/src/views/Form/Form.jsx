import { useState } from "react";
import validation from "./validation"
import axios from "axios";
import "./Form.Module.css";

const Form = () => {

    const [activity, setActivity] = useState({
        Nombre:"",
        Dificultad:"1",
        Duracion:"",
        Temporada:"Verano",
        country1:"",
        country2:"",
    })

    const [errors ,setErrors]= useState({
        Nombre:"",
        Dificultad:"",
        Duracion:"",
        Temporada:"",
        country1:"",
        country2:"",
    });
    

    const handleOnChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setActivity({
            ...activity,
            [property] : value
        })
    
        setErrors(
            validation({
            ...activity,
            [property] : value
        }))
    
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        
        let errorExist = false
        for (const prop in errors) {
            if (errors[prop] !== "") errorExist = true
        }
        if(errorExist) return alert("La actividad no se creo, verifique los datos ingresados")

        const countries = []
        countries.push(activity.country1)
        if(activity.country2) countries.push(activity.country2)
        
        const activityModified = {
            Nombre: activity.Nombre,
            Dificultad: activity.Dificultad,
            Duracion: activity.Duracion,
            Temporada: activity.Temporada,
            CountriesId: countries
        }
        
        await axios.post("http://localhost:3001/activities",activityModified)
        .then(res=>alert(res.data))
        .catch(err=>alert(err))
    }

    return(
        <div>
            <h1>Componente Form</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" name="Nombre" onChange={handleOnChange} value={activity.Nombre} placeholder="Ingrese el nombre de la actividad"/>
                    {errors.Nombre && <p>{errors.Nombre}</p>}
                </div>

                <div>
                    <label>Dificultad: </label>
                    <select name="Dificultad" onChange={handleOnChange} value={activity.Dificultad}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <label>Duración (hs): </label>
                    <input type="integer" name="Duracion" onChange={handleOnChange} value={activity.Duracion} placeholder="Ingrese la duración de la actividad en horas"/>
                    {errors.Duracion && <p>{errors.Duracion}</p>}
                </div>

                <div>
                    <label>Temporada: </label>
                    <select value={activity.Temporada} name="Temporada" onChange={handleOnChange}>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </div>

                <h4>Paises asociados: </h4>
                <div>
                    <label>ID: </label>
                    <input type="text" name="country1" onChange={handleOnChange} value={activity.country1} placeholder="Ingrese el ID del país"/>
                    {errors.country1 && <p>{errors.country1}</p>}
                </div>
                <div>
                    <label>ID: </label>
                    <input type="text" name="country2" onChange={handleOnChange} value={activity.country2} placeholder="Ingrese el ID del país"/>
                    {errors.country2 && <p>{errors.country2}</p>}
                </div>

                <button type="submit">Crear actividad</button>

                <h3 className="buscador">Buscador de IDs por nombre</h3>
                <label>Nombre: </label>
                <input type="text" name="idSearch" placeholder="Ingrese el nombre del país"/>
                <button>Buscar</button>

            </form>
        </div>
    )
}

export default Form;