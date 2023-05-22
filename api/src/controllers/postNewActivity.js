const { Activity } = require('../server/db.js')
const { getCountryById } = require('../controllers/getCountryById.js')

const postNewActivity = async ( newAct ) => {
    try {
        const { Nombre, Dificultad, Duracion, Temporada, CountriesId } = newAct
        
        const newActivity = await Activity.create({ Nombre, Dificultad, Duracion, Temporada });

        // Debajo encuentro la funcion que siempre me inyecta la actividad
        //await newActivity.addCountries(CountriesId)

        //Para que no se repita la actividad inyectada si el pais ingresado ya la tiene (No acepta actividad duplicada)
        await CountriesId.forEach(async (id) => {
            let CountryFound = await getCountryById(id)
            let countryActivities = CountryFound.dataValues.Activities
            
            if(countryActivities.length === 0) return await newActivity.addCountries(id)

            let aux = false
            countryActivities.forEach(async (Activity) => {
                console.log(Activity.dataValues.Nombre);
                console.log(id);                
                if ( Nombre === Activity.dataValues.Nombre) aux = true
            });

            if(!aux) await newActivity.addCountries(id)
    
        });

        return (newActivity)
        
    } catch (error) {
        console.log(error.message);
        return {error: error.message}
    }
}

module.exports = {
    postNewActivity
    }