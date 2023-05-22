const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {

    ID: {   
      // type: DataTypes.INTEGER,
      // allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // validate: {
      //   not: /^[a-z]+$/i
      // }
    },

    Dificultad: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      }
    },

    Duracion: {     // Solo permito valores numericos con 2 decimales y positivos
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      validate: {
        isFloat: true,              
        esPositivo(value) {
          if (value <= 0) {
            throw new Error('La duración debe ser un número positivo');
          }
        }
      }
    },

    Temporada: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Verano', 'Otoño', 'Invierno', 'Primavera']],
      }
    },
    
  },
  {timestamps:false}
  );
};
