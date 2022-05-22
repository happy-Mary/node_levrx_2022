export interface Profile {
    email: string;
    firstName: string;
    lastName: string;
}

export interface IUser {
    readonly userId: number;
    profile: Profile;
    getProfile(): Profile;
    updateProfile(firstName: string, lastName: string): Profile;
}
