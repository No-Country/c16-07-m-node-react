import 'dotenv/config';

console.log(process.env.DB_PASSWORD);
import { Sequelize } from 'sequelize';

import { ModelCtor } from 'sequelize-typescript';
import * as fs from 'fs'
import path from 'path'
import initializeAcitivyModel from './models/Activity';
import initializeEventModel from "./models/Event";
import initializeInterestModel from './models/Interest';
import initializePurposeModel from './models/Purpose';
import initializeUserModel from './models/User';


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
console.log(process.env.DB_PASSWORD);

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(5432), 
  database: DB_NAME,
  logging: false,
  native: false,
  dialectOptions: {}
});

// getAndCapitalizeModels();

export const Activity = initializeAcitivyModel(sequelize);
export const Event = initializeEventModel(sequelize);
export const Interest = initializeInterestModel(sequelize);
export const Purpose = initializePurposeModel(sequelize);
export const User = initializeUserModel(sequelize);

// ACA VAN LAS RELACIONES
User.belongsTo(Purpose, {
    foreignKey: "purposeId",
    as: "purpose"
});
Purpose.hasMany(User, {
    foreignKey: "purposeId",
});

User.belongsToMany(Interest, {through: "UsersInterests", as: "interests"});
Interest.belongsToMany(User, {through: "UsersInterests"});

Interest.belongsToMany(Event, {through: "InterestsEvents"});
Event.belongsToMany(Interest, {through: "InterestsEvents", as: "categories"});
User.belongsToMany(Event, {through: "UsersEvents", as:"events"});
Event.belongsToMany(User,{through: "UsersEvents"});


function getAndCapitalizeModels()
{
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
}

export default sequelize;