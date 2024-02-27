export type TUser = {
    readonly id: number;
    address?: string;
    aboutMe?: string;
    birthdate?: Date;
    createdAt: Date;
    country?: string;
    email: string;
    firstName: string;
    lastName: string;
    observations?: string;
    password: string;
    phone: string;
    postalCode?: string;
    updatedAt: Date;
};