import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize-typescript";

export default function initializeActivityModel(sequalize: Sequelize) {
    sequalize.define("Interests", {
        idInterests: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: false
    }
    )
}