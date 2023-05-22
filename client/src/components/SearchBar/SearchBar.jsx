import { useState, useEffect} from "react";
import { getCountriesByName, setPage } from "../../redux/actions"
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

    return (
        <div>
            <input className="search" type='search' name="name1" value={inputsNames.name1} onChange={handleChange} placeholder="Ingrese el nombre de un país..." />
            <button className="search" onClick= {() => {setInputsNames({
                                        ...inputsNames,
                                        name1: ""
                                        })
                                    }}>Clear</button>
            <div className="hr"></div>
            <input className="search" type='search' name="name2" value={inputsNames.name2} onChange={handleChange} placeholder="Ingrese el nombre de un país..." />
            <button className="search" onClick= {() => {nameSearch()}}>Buscar</button>
        </div>
    );
    }

export default SearchBar