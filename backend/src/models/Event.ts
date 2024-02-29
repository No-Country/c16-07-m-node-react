import { DataTypes, Sequelize } from "sequelize";

export default function initializeEventModel(sequelize: Sequelize) {
  return sequelize.define(
    "Events",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      locate: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
}
