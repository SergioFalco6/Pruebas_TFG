// importamos la conexión a la base de datos
import db from "../database/db.js";

// importamos sequilize
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Profesionals = db.define('profesionales',{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    rol:{
        type: DataTypes.INTEGER
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Profesionals;