import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'backend-tutorial',
    logging: console.log
})

export default sequelize
