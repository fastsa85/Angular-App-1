import { Component, OnInit } from '@angular/core'
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from 'src/app/shared/event.model';
import { SessionListComponent } from '../../sessions/sessions-list/sessions-list.component'
import { CreateSessionComponent } from '../../sessions/create-session/create-session.component'

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'name';

    constructor(private eventService: EventService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.route.data.forEach((data) => {
          this.event = data['event'];
          this.addMode=false;
      })
    }

    addSession(){
      this.addMode=true;
    }

    saveNewSession(newSession: ISession){
      const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
      newSession.id = nextId;
      this.event.sessions.push(newSession);
      this.eventService.saveEvent(this.event).subscribe(() => {
        this.addMode=false;
      })
    }
}
