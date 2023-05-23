import Country from "../Country/Country";
import "./CountriesContainer.Module.css"
import { useDispatch, useSelector } from "react-redux";
//import { getAllCountries, initialHome } from "../../redux/actions";


const CountriesContainer = () => {

    //const dispatch = useDispatch()
    //let countries = useSelector(state => state.countriesToShow)
    //let allCountries = useSelector(state => state.allCountries)

    // if(allCountries.length === 0) async ()=> {
    //     dispatch(getAllCountries())
    //     const countries = await useSelector(state=>state.allCountries)
    //     const countriesInit = await countries.slice(0,1)
    //     dispatch(initialHome(countriesInit))
    // }

    let countries = useSelector(state => state.countriesCurrentPage)


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