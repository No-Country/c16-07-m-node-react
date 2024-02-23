import { DataTypes, Sequelize } from "sequelize";

export default function initializeInterestModel(sequelize: Sequelize) {
  return sequelize.define(
    "Interests",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
}
