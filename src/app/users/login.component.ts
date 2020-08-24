import { Component } from '@angular/core'
import { AuthService } from './auth.service'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName
    password

    constructor(private auth: AuthService) {
    }

    login(formValues){
        this.auth.loginUser(formValues.userName, formValues.password)
    }
}