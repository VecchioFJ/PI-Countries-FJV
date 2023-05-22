const { getAllCountries } = require("./getAllCountries")

const getCountryById = async (countryId) => {
    const allCountries = await getAllCountries()
    const countryFound = await allCountries.find(country => country.ID === countryId)

    if(!countryFound) return {error: `No existe un país asociado al ID ${countryId}`}

    return countryFound
}

module.exports = {
    getCountryById
}
