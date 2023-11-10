import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'backend-tutorial'
})

export default sequelize
