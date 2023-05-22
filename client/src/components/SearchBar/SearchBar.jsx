import { useState, useEffect} from "react";
import { getCountriesByName, setPage, countriesByContinent } from "../../redux/actions"
import { useDispatch } from "react-redux";
import "./SearchBar.Module.css"


const SearchBar = ()=> {   
   
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

    const dispatch = useDispatch()
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

    const [filter, setFilter] = useState("")

    const handleOnChange = (event) => {
        // const property = event.target.name
        // const value = event.target.value

        // setActivity({
        //     ...activity,
        //     [property] : value
        // })
        const value = event.target.value
        setFilter(value)
    }

    useEffect(() => {
        dispatch(countriesByContinent(filter))
        dispatch(setPage(1))
    }, [filter])
    

    return (
        <div className="searchbar">
            <div className="searchs">
                <input className="search" type='search' name="name1" value={inputsNames.name1} onChange={handleChange} placeholder="Ingrese el nombre de un país..." />
                <button className="buttons" onClick= {() => {setInputsNames({
                                            ...inputsNames,
                                            name1: ""
                                            })
                                        }}>Clear</button>
                <div className="hr"></div>
                <input className="search" type='search' name="name2" value={inputsNames.name2} onChange={handleChange} placeholder="Ingrese el nombre de un país..." />
                <button className="buttons" onClick= {() => {nameSearch()}}>Buscar</button>
            </div>
            <div className="filters">
                <h4 className="h4">Filtrar por continente:</h4>
                <select name="continent" onChange={handleOnChange} defaultValue="">
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
        </div>
    );
    }

export default SearchBar

// console.log(filteredCountries("Asia").length);
// console.log(filteredCountries("Europe").length);
// console.log(filteredCountries("Africa").length);
// console.log(filteredCountries("North America").length);
// console.log(filteredCountries("Oceania").length);
// console.log(filteredCountries("Antarctica").length);
// console.log(filteredCountries("South America").length);
