import { useSelector, useDispatch } from "react-redux"
import { countriesOnPage, nextPage, prevPage} from "../../redux/actions"
import { useEffect } from "react"
import "./Paging.Module.css";

// En mi componente Paginado, defino qué países voy a renderizar en la ruta home.
// Utilizando los estados globales

const Paginado = ()=>{
    const dispatch = useDispatch()
    
    // Obtengo del estado global la página actual y TODOS los países que quiero renderizar
    let currentPage = useSelector(state => state.currentPage)
    let countriesToShow = useSelector(state => state.countriesToShow)

    // FILTRADOS
    // Por Continente
    let continentFilter = useSelector(state => state.continentFilter)
    
    //      Lógica para determinar nuevo array filtrado por continente
    let toShowFiltered = []
    if(continentFilter === "Americas") {
        toShowFiltered = [...countriesToShow].filter(country =>{
            return country.Continente === "South America" || country.Continente === "North America"})
    }
    else if(!continentFilter) toShowFiltered = countriesToShow
    else {
        toShowFiltered = countriesToShow.filter(country =>{
        return country.Continente === continentFilter})
    }

    // Por Actividad
    let activityFilter = useSelector(state => state.activityFilter)
    let toShowFiltered2 = []
    if(activityFilter === "") toShowFiltered2 = toShowFiltered
    else {
        toShowFiltered2 = [...toShowFiltered].filter((country) => {
            return country.Activities.some((activity) => {
            if (activity.Nombre === activityFilter) return true
            return false;
            })
        })
    }

   
    //ORDENAMIENTO
    let orderState = useSelector(state => state.order)
    let setOrder = orderState.set
    let orderAlpha = orderState.orderAlpha
    let orderPop = orderState.orderPop

    if (setOrder === "orderPop"){

        // orden por poblacion
        if (orderPop === "A") {
            toShowFiltered2.sort(function(a, b) {
                if (a.Poblacion < b.Poblacion) {
                    return -1; // a debe ser ordenado antes que b
                }
            });
        }
        if (orderPop === "D") {
            toShowFiltered2.sort(function(a, b) {
                if (a.Poblacion > b.Poblacion) {
                    return -1; // b debe ser ordenado antes que a
                }
            });
        }
    }
    else if (setOrder === "orderAlpha"){
        // orden alfabetico

        if (orderAlpha === "A") {
            toShowFiltered2.sort(function(a, b) {
                if (a.Nombre < b.Nombre) {
                    return -1; // a debe ser ordenado antes que b
                }
            });
        }
        if (orderAlpha === "D") {
            toShowFiltered2.sort(function(a, b) {
                if (a.Nombre > b.Nombre) {
                    return -1; // b debe ser ordenado antes que a
                }
            });
        }
    }

    
    // PAGINADO
    const COUNTRIES_PER_PAGE = 9
    const totCountries = toShowFiltered2.length
    let maxPage = Math.ceil(totCountries/COUNTRIES_PER_PAGE)
    const firstIndex = (currentPage - 1) * COUNTRIES_PER_PAGE
    let countriesCurrentPage = [...toShowFiltered2].splice(firstIndex, COUNTRIES_PER_PAGE)
    
    useEffect(() => {
        dispatch(countriesOnPage(countriesCurrentPage));
    }, [currentPage, countriesToShow, toShowFiltered2, orderState, activityFilter])


    const prevHandler = (currPage) =>{
        if(currPage === 1) return
        return dispatch(prevPage(currPage))
    }

    const nextHandler = (currPage) =>{
        if(currPage === maxPage) return
        return dispatch(nextPage(currPage))
    }
    
    return(
        <div className="paginado">
            <button className="button" onClick={() => prevHandler(currentPage) }>Prev</button>
            <h3 className="button">Página: {currentPage}/{maxPage}</h3>
            <button className="button" onClick={() => nextHandler(currentPage) }>Next</button>
        </div>
    )

}

export default Paginado

