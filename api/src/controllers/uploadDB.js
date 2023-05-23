const axios = require ('axios')
const { Country } = require('../server/db.js')

const uploadDB = async () => {
    try {
        const {data} = await axios('https://restcountries.com/v3.1/all') // https://rest-countries.up.railway.app/v3/all 

        //if (!data) throw Error('Conexion con la API fallo')
        // Transformar la respuesta de la API en un array de objetos que coincida con el modelo "Country"
        const countriesData = []
        
        await data.map(country => {
            countriesData.push({
                ID: country.cca3,
                Nombre: country.name.common,
                Bandera: country.flags.png,
                Continente: country.continents[0],
                Capital: country.capital? country.capital[0] : "Capital Not found", // Utilizo un condicional para los q no tengan definida una capital en la API, ya que la propiedad "Capital" es obligatoria
                Subregion: country.subregion,
                Area: country.area,
                Poblacion: country.population
            })
        });

        console.log('::::::::::::::::');
        console.log('Base de datos cargada con éxito.  Primer país en la BD:');
        console.log(countriesData[0]);

        await Country.bulkCreate(countriesData);
        return
    }
    catch (error) {
        console.log(`:::::: ERROR: "${error.message}"`);
        // Controller que tire alerta con msj del error
        // alert Error(`ERROR: "${error.message}"`)
    }
}

module.exports = {
    uploadDB
    }