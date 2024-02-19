import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize  from '@/db'; // Asumiendo que tienes una instancia de Sequelize llamada 'sequelize'

class User extends Model {
  public userId!: number;
  public birthdate!: Date;
  public createdAt!: Date;
  public email!: string;
  public lastName!: string;
  public name!: string;
  public password!: string;
  public treatment!: string;
  public updatedAt!: Date;
  public address?: string;
}
User.init ({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatment: {
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
            throw new Error('The field release must have the format YYYY-MM-DD.');
          }
        },
      },
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, 
{sequelize,
modelName: 'Users',
}
);
export default User