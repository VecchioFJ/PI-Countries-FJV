import { GET_ALL_COUNTRIES, INIT_HOME, COUNTRIES_CURENT_PAGE, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME, SET_PAGE } from "./action-types"

const initialState = {
    allCountries: [],
    countriesToShow: [],
    countryById: {},
    countriesByNameSearch: [],
    currentPage: 1,
    countriesCurrentPage: []
}

// la contiene el type y payload.  action = {type, payload}
const reducer = (state = initialState, {type, payload}) => {
    switch (type){

        case GET_ALL_COUNTRIES: 
        return {
            ...state,
            allCountries: payload
        }

        case INIT_HOME: 
        return {
            ...state,
            countriesToShow: payload
        }

        case GET_COUNTRY_BY_ID: 
        return {
            ...state,
            countryById: payload
        }

        case GET_COUNTRIES_BY_NAME:
        return {
            ...state,
            countriesToShow: payload
        }

        case SET_PAGE: 
        return {
            ...state,
            currentPage: +payload
        }

        case COUNTRIES_CURENT_PAGE: 
        return {
            ...state,
            countriesCurrentPage: payload
        }


        default:
            return{...state}
    }
}

export default reducer;