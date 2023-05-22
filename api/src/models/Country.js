const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {

    ID: {   // ID (Código de tres letras)
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },

    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },

    Bandera: {  // NO LO DEFINI TODAVIA
      type: DataTypes.STRING,
      allowNull: false,
    },

    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },

    Capital: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    
    Subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true
      }
    },

    Area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },

  },
  {timestamps:false}
  );
};
