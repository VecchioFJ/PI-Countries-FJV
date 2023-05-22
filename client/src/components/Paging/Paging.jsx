import { useSelector, useDispatch } from "react-redux"
import { countriesOnPage, nextPage, prevPage} from "../../redux/actions"
import { useEffect } from "react"
import "./Paging.Module.css";


const Paginado = ()=>{
    
    const COUNTRIES_PER_PAGE = 9
    
    let currentPage = useSelector(state => state.currentPage)

    let continentFilter = useSelector(state => state.continentFilter)
    let countriesToShow = useSelector(state => state.countriesToShow)
    
    let countriesToShowFiltered = []
    console.log(continentFilter);
    if(continentFilter === "Americas") {
        countriesToShowFiltered = [...countriesToShow].filter(country =>{
            return country.Continente === "South America" || country.Continente === "North America"})
    }
    else if(!continentFilter) countriesToShowFiltered = countriesToShow
    else {
        countriesToShowFiltered = countriesToShow.filter(country =>{
        return country.Continente === continentFilter})
        console.log(countriesToShow);
        console.log(countriesToShowFiltered);
    }
    //console.log(countriesToShowFiltered)
    
    const totCountries = countriesToShowFiltered.length
    const firstIndex = (currentPage - 1) * COUNTRIES_PER_PAGE
    let countriesCurrentPage = [...countriesToShowFiltered].splice(firstIndex, COUNTRIES_PER_PAGE)
    
    useEffect(() => {
        dispatch(countriesOnPage(countriesCurrentPage));
    }, [currentPage, countriesToShow, countriesToShowFiltered])

    const dispatch = useDispatch()

    const prevHandler = (currPage) =>{
        if(currPage === 1) return
        return dispatch(prevPage(currPage))
    }

    const nextHandler = (currPage) =>{
        if(currPage * COUNTRIES_PER_PAGE >= totCountries) return
        return dispatch(nextPage(currPage))
    }
    
    return(
        <div className="paginado">
            <button className="button" onClick={() => prevHandler(currentPage) }>Prev</button>
            <h3 className="button">Página: {currentPage}</h3>
            <button className="button" onClick={() => nextHandler(currentPage) }>Next</button>
        </div>
    )

}

export default Paginado

