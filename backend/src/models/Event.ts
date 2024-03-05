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
      imageUrl: {
        type: DataTypes.STRING,
      },
      locate: {
        type: DataTypes.STRING,
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
