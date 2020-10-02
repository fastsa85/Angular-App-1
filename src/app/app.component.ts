import { Component } from '@angular/core';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "angular-fundamentals"
  constructor(private auth: AuthService){

  }

  ngOnInit(){
    this.auth.checkAuthStatus();
  }
}
