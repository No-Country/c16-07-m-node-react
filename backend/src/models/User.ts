import { DataTypes, Sequelize } from "sequelize";

export default function initializeUserModel(sequelize: Sequelize) {
  return sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
      },
      aboutMe: {
        type: DataTypes.STRING,
      },
      birthdate: {
        type: DataTypes.STRING,
        validate: {
          isDateFormat: function (value: any) {
            if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
              throw new Error(
                "The field release must have the format YYYY-MM-DD."
              );
            }
          },
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      country: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      observations: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );
}
