const { Country, Activity } = require('../server/db.js')

// const getAllCountries = async () => {
//     return await Country.findAll()
// }

const getAllCountries = async () => {

    const allCountriesDB = await Country.findAll({
        include: {
            model: Activity,
            through: {              // Sintaxis para que solo me traiga la info de la tabla, y no la tabla relacional
                attributes: [],
            }
        }
    })

    return allCountriesDB

    //const allCountriesOk = allCountriesDB.map(country => country.get({ plain: true }))
    //return allCountriesOk
}

module.exports = {
    getAllCountries
}
