import Sequelize from "sequelize";
import { sequelize } from '../database/database';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: { 
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
},
{
    timestamps: false //para que no tenga problemas con las fechas o algo por el estilo
});

export default Project;