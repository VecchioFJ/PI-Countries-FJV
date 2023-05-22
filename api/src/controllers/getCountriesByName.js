// const { getAllCountries } = require("./getAllCountries")

// const getCountriesByName = async (name) => {
//     const allCountries = await getAllCountries()

//     const countriesFiltered = await allCountries.filter(country => `:${country.Nombre}` === name)

//     if(!countriesFiltered) return { error: 'No existe un país asociado a ese nombre'}

//     return countriesFiltered
// }

const { Country } = require('../server/db.js')
const { Op } = require('sequelize') 


const getCountriesByName = async (name)=>{
     
    const countriesFiltered = await Country.findAll({ where: {
        Nombre: {[Op.iLike]: `%${name}%` },
    }});

    return countriesFiltered

}

module.exports = {
    getCountriesByName
}
