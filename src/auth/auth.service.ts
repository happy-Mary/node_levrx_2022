import { User } from '../user/user.service';
import { IAuthUserData } from './interfaces/auth.interface';

export class AuthController  {
    user: User | null;
    email: string = '';

    constructor() {
        this.user = this.checkUser();
    }

    checkUser(token?: string): User | null {
        return null;
    }

    login(email: string, password: string) {}

    register(data: IAuthUserData) {}

    logout(userId: string) {}
}