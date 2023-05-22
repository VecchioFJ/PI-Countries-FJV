import { GET_ALL_COUNTRIES, INIT_HOME, COUNTRIES_CURENT_PAGE, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME, SET_PAGE } from "./action-types";
import axios from 'axios'


export const getAllCountries = () => {
   const endpoint = 'http://localhost:3001/countries';
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint)
         const countries = data

         if (!data.length) throw Error ('No hay countries')
         dispatch({
            type: GET_ALL_COUNTRIES,
            payload: countries
         });

      } catch (error) {
         console.log(error.message);
      }
   };
};

export const getCountryById = (id) => {
   const endpoint = `http://localhost:3001/countries/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint)
         const country = data
         console.log(data);

         if (data.error) throw Error (data.error)
         dispatch({
               type: GET_COUNTRY_BY_ID,
               payload: country
         });
 
      } catch (error) {
         console.log(error.message);
      }
   };
};

export const getCountriesByName = (name) => {
   const endpoint = `http://localhost:3001/countries/?name=${name}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint)
         const countries = data
         //console.log("::::::apapa");
         if (!data.length) throw Error ('No hay paises con ese nombre')
         dispatch({
             type: GET_COUNTRIES_BY_NAME,
             payload: countries
         });
 
      } catch (error) {
         //console.log(error.message);
         dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: []
        });
      }
   };
};

export const initialHome = (countriesInit) =>{
   return (dispatch) => {
      dispatch({
         type: INIT_HOME,
         payload: countriesInit
      })
   }
}

export const nextPage = (page) =>{
   return (dispatch) => {
      dispatch({
      type: SET_PAGE,
      payload: page + 1
      })
   }
}

export const prevPage = (page) =>{
   return (dispatch) => {
      dispatch({
      type: SET_PAGE,
      payload: page - 1
      })
   }
}

export const setPage = (page) =>{
   return (dispatch) => {
      dispatch({
      type: SET_PAGE,
      payload: page
      })
   }
}

export const countriesOnPage = (countriesCurrentPage) =>{
   return (dispatch) => {
      dispatch({
      type: COUNTRIES_CURENT_PAGE,
      payload: countriesCurrentPage
      })
   }
}

 


