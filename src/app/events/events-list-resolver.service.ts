import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { EventService } from '../services/event.service'
import { map, catchError } from 'rxjs/operators'
import { empty } from 'rxjs'

@Injectable()
export class EventListResolver implements Resolve<any>{

    constructor(private eventService: EventService){
    }

    resolve(route: ActivatedRouteSnapshot) {        
        return this.eventService.getEvents().pipe(map(events => events)) 
    }
}