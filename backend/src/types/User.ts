export default class User {
    readonly id: number;
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
        id: number,
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
        this.id = id;
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