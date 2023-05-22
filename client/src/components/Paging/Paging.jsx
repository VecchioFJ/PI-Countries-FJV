//import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { countriesOnPage, nextPage, prevPage} from "../../redux/actions"
import { useEffect } from "react"

const Paginado = ()=>{

    
    let currentPage = useSelector(state => state.currentPage)
    const COUNTRIES_PER_PAGE = 9
    
    let countriesToShow = useSelector(state => state.countriesToShow)
    const totCountries = countriesToShow.length
    const firstIndex = (currentPage - 1) * COUNTRIES_PER_PAGE
    let countriesCurrentPage = [...countriesToShow].splice(firstIndex, COUNTRIES_PER_PAGE)
    console.log(countriesCurrentPage);
    
    useEffect(() => {
        dispatch(countriesOnPage(countriesCurrentPage));
    }, [currentPage, countriesToShow])

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
            <h3>Página: {currentPage}</h3>
            <button className="button" onClick={() => nextHandler(currentPage) }>Next</button>
        </div>
    )

}

export default Paginado

