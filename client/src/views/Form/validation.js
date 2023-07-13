const validation = (activity) => {

    let errors = {};
        
    if (!activity.Nombre) errors.Nombre = 'Ingrese el nombre de la actividad'
    else if(activity.Nombre.length > 35) errors.Nombre = 'El nombre debe contener menos de 35 caracteres'
    //else if(/^[a-z]+$/i.test(activity.Nombre)) errors.Nombre = 'El nombre no debe contener caracteres especiales'

    if (!activity.Dificultad) errors.Dificultad = 'Ingrese la dificultad de la actividad'

    if (!activity.Duracion) errors.Duracion = 'Ingrese la duración de la actividad'
    else if(isNaN(activity.Duracion)) errors.Duracion = 'La duración debe ser un numero que representa las horas'
    else if(activity.Duracion < 0) errors.Duracion = 'La duración debe positiva'

    if (!activity.Temporada) errors.Temporada = 'Ingrese la temporada de la actividad'
    
    if (!activity.country1) errors.country1 = 'Ingrese al menos el ID de 1 país'
    else if (activity.country1.length !== 3 || !(/^[A-Z]+$/i.test(activity.country1)) ) errors.country1 = 'El ID debe ser un código de 3 letras'

    if (!activity.country2) errors.country2 = ''
    else if (activity.country2.length !== 3 || !(/^[A-Z]+$/i.test(activity.country2)) ) errors.country2 = 'El ID debe ser un código de 3 letras'
    
    return errors
}

export default validation;  