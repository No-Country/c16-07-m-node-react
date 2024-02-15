import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export default function initializeUserModel(sequelize: Sequelize): void {
  sequelize.define('Users', 
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      treatment: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.STRING,
        validate: {
          isDateFormat: function (value: string) {
            if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
              throw new Error('The field release must have the format YYYY-MM-DD.');
            }
          },
        },
      },
      admin: {
        type: DataTypes.BOOLEAN
      },
      deletedAt:{
        type: DataTypes.DATE,
        allowNull:true,
      }
    },
    {
      paranoid:true,
      timestamps:true,
      createdAt:false,
      updatedAt:false,

    }
  )
}
