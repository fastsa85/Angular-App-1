import {Component} from '@angular/core'
import { AuthService } from '../users/auth.service';
import { ISession } from '../shared/event.model'
import { EventService } from '../services/event.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(public auth: AuthService, private eventService: EventService){
    }

    searchSessions(searchTerm: string){
      searchTerm = searchTerm.toLowerCase();

      this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
      })
    }
}
