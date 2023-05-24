import { useState, useEffect} from "react";
import { getCountriesByName, setPage, countriesByContinent, countriesOrder, getAllActivities, countriesByActivity } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.Module.css"


const SearchBar = ()=> {   
    const dispatch = useDispatch()
   
    // Inputs de BÚSQUEDA
    const [inputsNames, setInputsNames] = useState({
        name1: "",
        name2: ""
    })

    const handleChange = (event) => {
        setInputsNames({
            ...inputsNames,
            [event.target.name]: event.target.value
            })
    }

    useEffect(() => {
    dispatch(getCountriesByName(inputsNames.name1))
    dispatch(setPage(1))
    }, [inputsNames.name1])

    const nameSearch = () => {
        dispatch(getCountriesByName(inputsNames.name2));
        setInputsNames({
            ...inputsNames,
            name2: ""
            })
    }


    // FILTRO por continente
    const [filter, setFilter] = useState("")

    const handleOnChange1 = (event) => {
        const value = event.target.value
        setFilter(value)
    }

    useEffect(() => {
        dispatch(countriesByContinent(filter))
        dispatch(setPage(1))
    }, [filter])


    // ORDENAMIENTOS. Alfábetico y por Población
    const [order, setOrder] = useState({
        orderAlpha: "",
        orderPop: "",
    })

    const handleOnChange2 = (event) => {
        const property = event.target.name
        const value = event.target.value

        setOrder({
            ...order,
            [property] : value,
            set: property
        })
    }

    useEffect(() => {
        dispatch(countriesOrder(order))
        dispatch(setPage(1))
    }, [order])


    // FILTRO por actividades
    let allActivities = useSelector(state => state.activities)
    const [activity, setActivity] = useState("")

    const handleOnChange3 = (event) => {
        const value = event.target.value
        setActivity(value)
    }

    useEffect(() => {
        dispatch(getAllActivities())
        dispatch(countriesByActivity(activity))
        dispatch(setPage(1))
    }, [activity])



    return (
        <div className="searchbar">
            <div className="searchs">
                <div className="search">
                    <input className="inputSearch" type='search' name="name1" value={inputsNames.name1} onChange={handleChange} placeholder="Comience a escribir aquí..." />
                    <button className="buttons" onClick= {() => {setInputsNames({
                                                ...inputsNames,
                                                name1: ""
                                                })
                                            }} title="Haz click para borrar el contenido y mostrar todos los paises">Clear</button>
                </div>
                <div className="search">
                    <input className="inputSearch" type='search' name="name2" value={inputsNames.name2} onChange={handleChange} placeholder="Ingrese el nombre de un país..." />
                    <button className="buttons" onClick= {() => {nameSearch()}} title="Haz click para realizar una busqueda por el nombre ingresado">Buscar</button>
                </div>
            </div>
            <div className="filters">
                <h4 className="h4Filter">Filtrar por continente:</h4>
                <select className="selectors" name="continent" onChange={handleOnChange1} defaultValue="">
                    <option value="" disabled >Seleccione una opción</option>
                    <option value="Africa">África</option>
                    <option value="Americas">América</option>
                    <option value="Antarctica">Antártida</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                    <option value="">Todos</option>
                </select>
            </div>
            <div className="orders">
                <h4 className="h4Order">Ordenamientos</h4>
                <h6 className="h6">Alfabético:</h6>
                <select className="selectors" name="orderAlpha" onChange={handleOnChange2} defaultValue="">
                    <option value="" disabled >Seleccione una opción</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <h6 className="h6">Población:</h6>
                <select className="selectors" name="orderPop" onChange={handleOnChange2} defaultValue="">
                    <option value="" disabled >Seleccione una opción</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>
            <div className="activity">
            <h5 className="h5Act">Seleccione una actividad para mostrar los paises asociados</h5>
                <select className="selectors" name="activities" onChange={handleOnChange3} defaultValue="">
                    <option value=""> Sin filtro por actividad</option>
                    {allActivities.map(act => (
                        <option value={act.Nombre} key={act.ID}>{act.Nombre}</option>
                    ))}
                </select>
            </div>
        </div>
    );
    }

export default SearchBar