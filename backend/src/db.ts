import { Sequelize, ModelCtor } from 'sequelize-typescript';
import 'dotenv/config';

import fs from 'fs'
import path from 'path'
import Users from './types/Users';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DATABASE_URL } = process.env;


let sequelize: Sequelize =  new Sequelize(DATABASE_URL!, {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});

const basename = path.basename(__filename)

const modelDefiners: ((sequelize: Sequelize) => void)[] = [];;

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
});

modelDefiners.forEach((model: any) => model.default(sequelize))
let entries = Object.entries(sequelize.models)

const capitalizedModels: { [key: string]: ModelCtor<any>} = {}
entries.forEach(([modelName, model]) => {
    const capitalizedModelName = modelName.charAt(0).toUpperCase() + modelName.slice(1)
    capitalizedModels[capitalizedModelName] = model as ModelCtor<any>;
})



// ACA VAN LAS RELACIONES

const { User, Comment } = sequelize.models



Users.hasMany(Comment)
Comment.belongsTo(User)

export { Users, Comment }
export { sequelize };