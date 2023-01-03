// importamos la conexión a la base de datos
import db from "../database/db.js";

// importamos sequilize
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Patients = db.define('pacientes',{
    nombre:{
        type: DataTypes.STRING
    },
    genero:{
        type: DataTypes.STRING
    },
    fecha_nacimiento:{
        type: DataTypes.DATEONLY
    },
    email:{
        type: DataTypes.STRING
    },
    numero_contacto:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    profesional:{
        type: DataTypes.INTEGER
    },
    rol:{
        type: DataTypes.INTEGER
    },
    observaciones:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Patients;