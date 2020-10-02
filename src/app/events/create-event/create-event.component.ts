import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {EventService } from '../../services/event.service'

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  newEvent
  isDirty: boolean = true

    constructor(private router: Router, private eventService: EventService){
    }

    saveEvent(formValues){
      this.eventService.saveEvent(formValues).subscribe(() => {
        this.isDirty = false
        this.router.navigate(['/events']);
      })
    }

    onCancelClick(){
        this.router.navigate(['/events']);
    }
}
