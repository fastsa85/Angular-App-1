import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable({
    providedIn: "root"
})
export class AuthService {

    currentUser: IUser

    loginUser (userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: 'username1',
            firstName: 'John',
            lastName: 'Doe'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
}