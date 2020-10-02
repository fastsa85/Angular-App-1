import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    userName;
    password;
    hoverSubmit;
    loginInvalid = false;

    constructor(private auth: AuthService, private router: Router) {
    }

    login(formValues){
        this.auth.loginUser(formValues.userName, formValues.password)
        .subscribe(resp => {
          if(!resp) {
            this.loginInvalid = true;
          }
          else{
            this.router.navigate(['events'])
          }
        })
    }
}
