import { DataTypes, Model } from "sequelize";
import { sequelize } from "@/db"; // Asumiendo que tienes una instancia de Sequelize llamada 'sequelize'

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    aboutMe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observations: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.STRING,
      validate: {
        isDateFormat: function (value: string) {
          if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
            throw new Error(
              "The field release must have the format YYYY-MM-DD."
            );
          }
        },
      },
    },
  },
  { sequelize, modelName: "Users" }
);
export default User;
