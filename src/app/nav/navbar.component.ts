import {Component} from '@angular/core'
import { AuthService } from '../users/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    constructor(public auth: AuthService){

    }
}