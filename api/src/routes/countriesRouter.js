const { Router } = require('express');
const countriesRouter = Router()
// const { Country } = require('../server/db.js')
const { getAllCountries } = require('../controllers/getAllCountries.js')
const { getCountryById } = require('../controllers/getCountryById.js')
const { getCountriesByName } = require('../controllers/getCountriesByName.js')

countriesRouter.get('/', async (req,res) =>{
    try {

        const { name } = req.query

        if(!name){
            const allCountries = await getAllCountries()
            return res.status(200).json(allCountries)
        }

        const countriesFound = await getCountriesByName(name)
        if(countriesFound.length === 0) throw Error('No se encontraron paises con ese nombre')
        return res.status(200).json(countriesFound)


    } catch (error) {
        return res.status(400).send(`Error: ${error.message}`)
    }
})

countriesRouter.get('/:idPais', async (req,res) =>{
    try {
        const { idPais } = await req.params
        const countryFound = await getCountryById(idPais)
        if(countryFound.error) throw Error(countryFound.error)
        res.status(200).json(countryFound)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})




//NAME
// countriesRouter.get('/', async (req,res) =>{
//     try {
//         const { name } = await req.query
//         //console.log(id);
//         const countriesFound = await getCountriesByName(name)
//         //console.log(countryFound);
//         res.status(200).json(countriesFound)
//     } catch (error) {
//         res.status(400).send(`Error: ${error.message}`)
//     }
// })

module.exports = countriesRouter;    
