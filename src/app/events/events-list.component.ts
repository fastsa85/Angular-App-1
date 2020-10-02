import { Component, OnInit } from '@angular/core'
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit{

    events: IEvent[];

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

   ngOnInit(){
       this.eventService.getEvents().subscribe(events => this.events = events)
   }
}
