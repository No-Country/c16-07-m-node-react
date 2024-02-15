import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize-typescript";

export default function initializeActivityModel(sequalize: Sequelize) {
    sequalize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
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