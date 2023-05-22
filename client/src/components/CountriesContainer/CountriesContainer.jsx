import Country from "../Country/Country";
import "./CountriesContainer.Module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCountries, initialHome } from "../../redux/actions";


const CountriesContainer = () => {

    const dispatch = useDispatch()
    let countries = useSelector(state => state.countriesToShow)
    let allCountries = useSelector(state => state.allCountries)

    if(allCountries.length === 0) async ()=> {
        dispatch(getAllCountries())
        const countries = await useSelector(state=>state.allCountries)
        console.log(countries);
        const countriesInit = await countries.slice(0,1)
        console.log(countriesInit);
        dispatch(initialHome(countriesInit))
    }

    countries = useSelector(state => state.countriesCurrentPage)
    //console.log(countries);

// const countries = [
//     {
//         "ID": "KWT",
//         "Nombre": "Kuwait",
//         "Bandera": "https://flagcdn.com/w320/kw.png",
//         "Continente": "Asia",
//         "Capital": "Kuwait City",
//         "Subregion": "Western Asia",
//         "Area": "17818",
//         "Poblacion": 4270563,
//         "Activities": []
//     },
//     {
//         "ID": "AUT",
//         "Nombre": "Austria",
//         "Bandera": "https://flagcdn.com/w320/at.png",
//         "Continente": "Europe",
//         "Capital": "Vienna",
//         "Subregion": "Central Europe",
//         "Area": "83871",
//         "Poblacion": 8917205,
//         "Activities": [
//             {
//                 "ID": "3916db43-2def-4592-9fa7-5341ce3953d7",
//                 "Nombre": "Paracaidas",
//                 "Dificultad": 1,
//                 "Duracion": "2.00",
//                 "Temporada": "Verano"
//             }
//         ]
//     },
//     {
//         "ID": "MYT",
//         "Nombre": "Mayotte",
//         "Bandera": "https://flagcdn.com/w320/yt.png",
//         "Continente": "Africa",
//         "Capital": "Mamoudzou",
//         "Subregion": "Eastern Africa",
//         "Area": "374",
//         "Poblacion": 226915,
//         "Activities": []
//     }
// ]

    return( 
        <div className="countriesContainer">
            {countries.map(country =>{
                return <Country
                key={country.ID}
                ID={country.ID}
                Nombre={country.Nombre}
                Bandera={country.Bandera}
                Continente={country.Continente}
                Capital={country.Capital}
                Subregion={country.Subregion}
                Area={country.Area}
                Poblacion={country.Poblacion}
                Activities={country.Activities}
                />

            })}
        </div>
    )
}

export default CountriesContainer;