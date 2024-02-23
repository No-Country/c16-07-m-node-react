import { DataTypes, Sequelize } from "sequelize";

export default function initializeInterestModel(sequelize: Sequelize) {
  return sequelize.define(
    "Interests",
    {
      idInterests: {
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
