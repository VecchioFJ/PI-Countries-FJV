const { Router } = require('express');
const activitiesRouter = Router()
const { Activity } = require('../server/db.js')
const { postNewActivity } = require('../controllers/postNewActivity.js')

activitiesRouter.get('/', async (req,res) =>{
    try {
        const allActivities = await Activity.findAll()
        res.status(200).json(allActivities)
        //res.status(200).send('hola')
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`)  // ({ error: error.message})
    }
})

activitiesRouter.post('/', async (req,res) =>{
    try {
        // const { Nombre, Dificultad, Duracion, Temporada } = req.body
        // res.status(200).send(postNewActivity( Nombre, Dificultad, Duracion, Temporada))        
        const postActivity = req.body

        const { Nombre, Duracion, Dificultad, Temporada, CountriesId } = postActivity
        //if ( CountriesId.length === 0 ) throw Error(`La actividad ${Nombre} debe estar asociada a al menos un país`)
        if ( !Nombre || !Temporada ) throw Error('El Nombre es un campo obligatorio')
        if ( !Dificultad || Dificultad<1 || Dificultad>5) throw Error('La Dificultad debe ser un numero entre 1 y 5')
        if ( isNaN(Duracion)) throw Error('La Duracion debe ser un numero')
        if ( Duracion < 0 ) throw Error('La Duracion debe ser un numero positivo')
        if ( !['Verano', 'Otoño', 'Invierno', 'Primavera'].includes(Temporada) ) throw Error("La temporada debe ser: 'Verano', 'Otoño', 'Invierno' o 'Primavera'")


        //postNewActivity( postActivity )
        //res.status(201).send('Se agrego la actividad con éxito!')
        const newActivity = await postNewActivity( postActivity )
        //console.log(newActivity);
        //res.status(201).json(newActivity)
        res.status(201).send(`Actividad "${Nombre}" creada exitosamente`)

    } catch (error) {
        res.status(400).send(`Error: ${error.message}`)
    }
})



module.exports = activitiesRouter;    
