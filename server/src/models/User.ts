import { sequelize } from "../database/database";
import { DataType } from "sequelize-typescript";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataType.STRING
    },
    password: {
      type: DataType.STRING
    },
    username: {
      type: DataType.STRING
    },
    profilePictureURL: {
      type: DataType.STRING
    }
  },
  {
    timestamps: false
  }
);
