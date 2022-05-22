import { Profile, IUser } from './interfaces/user'

export class User implements IUser {
    readonly userId: number;
    profile: Profile;

    constructor(profile: Profile, userId: number) {
        this.profile = profile;
        this.userId = userId;
    }

    getProfile(): Profile {
        return this.profile;
    }

    updateProfile(firstName: string, lastName: string): Profile {
        return this.profile = { ...this.profile, firstName, lastName };
    }
}