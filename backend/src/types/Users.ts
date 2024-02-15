import { ModelCtor, Model } from "sequelize";

export default class Users {
    static hasMany(Comment: ModelCtor<Model<any, any>>) {
      throw new Error('Method not implemented.');
    }
    static findByPk(userId: number) {
        throw new Error("Method not implemented.");
    }
    readonly userId: number;
    birthdate: Date;
    createdAt: Date;
    email: string;
    lastName: string;
    name: string;
    password: string;
    treatment: string;
    updatedAt: Date;
    address?: string;

    constructor(
        userId: number,
        birthdate: Date,
        createdAt: Date,
        email: string,
        lastName: string,
        name: string,
        password: string,
        treatment: string,
        updatedAt: Date,
        address?: string
    ) {
        this.userId = userId;
        this.birthdate = birthdate;
        this.createdAt = createdAt;
        this.email = email;
        this.lastName = lastName;
        this.name = name;
        this.password = password;
        this.treatment = treatment;
        this.updatedAt = updatedAt;
        this.address = address;
    }
}