import { Component,  Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from '../shared/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {

    constructor() {
    }

    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }
}
