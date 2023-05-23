import { GET_ALL_COUNTRIES, INIT_HOME, COUNTRIES_CURENT_PAGE,
    GET_COUNTRY_BY_ID,GET_COUNTRIES_BY_NAME, SET_PAGE,
    FILTER_BY_CONTINENT, SET_ORDER, GET_ALL_ACTIVITIES, FILTER_BY_ACTIVITY } from "./action-types"

const initialState = {
    allCountries: [],
    countriesToShow: [],
    countryById: {},
    //countriesByNameSearch: [],
    currentPage: 1,
    countriesCurrentPage: [],
    continentFilter: "",
    order: {
        orderAlpha: "",
        orderPop: "",
        set: "orderAlpha",
    },
    activities: [],
    activityFilter: "",
}

// la contiene el type y payload.  action = {type, payload}
const reducer = (state = initialState, {type, payload}) => {
    switch (type){

        case GET_ALL_COUNTRIES: 
        return {
            ...state,
            allCountries: payload
        }

        // case INIT_HOME: 
        // return {
        //     ...state,
        //     countriesToShow: payload
        // }

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

        case FILTER_BY_CONTINENT: 
        return {
            ...state,
            continentFilter: payload
        }

        case SET_ORDER: 
        return {
            ...state,
            order: payload
        }
        
        case GET_ALL_ACTIVITIES: 
        return {
            ...state,
            activities: payload
        }

        case FILTER_BY_ACTIVITY: 
        return {
            ...state,
            activityFilter: payload
        }

        default:
            return{...state}
    }
}

export default reducer;