export type TUser = {
    readonly userId: number;
    // achievements: <pending>
    aboutMe: string;
    birthdate: Date;
    country: string;
    createdAt: Date;
    email: string;
    interestIds: number[];
    firstName: string;
    lastName: string;
    observations: string;
    password: string;
    postalCode: string;
    purposeId: number;
    updatedAt: Date;
    address?: string;
};