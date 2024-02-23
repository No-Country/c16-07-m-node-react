import { DataTypes, Sequelize } from "sequelize";

export default function initializePuroseModel(sequelize: Sequelize) {
  return sequelize.define(
    "Purposes",
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
