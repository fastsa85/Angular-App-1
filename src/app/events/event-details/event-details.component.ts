import { Component, OnInit } from '@angular/core'
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from 'src/app/shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;

    constructor(private eventService: EventService, 
                private route: ActivatedRoute) { 
    }

    ngOnInit() {
        this.event = this.eventService.getEvent
        (+this.route.snapshot.params['id']);
    }
}