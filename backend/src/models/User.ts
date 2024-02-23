import { DataTypes, Sequelize } from "sequelize";

export default function initializeUserModel(sequelize: Sequelize) {
  return sequelize.define(
    "Users",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      aboutMe: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      country: {
        type: DataTypes.STRING,
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
      },
      observations: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthDate: {
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
    },
    { timestamps: true }
  );
}
