import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export default function initializeCommentModel(sequelize: Sequelize): void {
  sequelize.define('Events',
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
      name:{
        type: DataTypes.STRING
      },
      description:{
       type:  DataTypes.STRING
      },
    },
    {
      timestamps: false,
    }
  );
}