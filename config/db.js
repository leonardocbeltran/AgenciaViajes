import Sequelize from "sequelize";
import dotenv from 'dotenv/config';

const dbHost = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const db = new Sequelize(database, username, password, {
    host: dbHost,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;