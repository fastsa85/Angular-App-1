import { Component, EventEmitter, Input, Output} from "@angular/core"
import { ISession } from 'src/app/shared/event.model';

@Component({
  selector: "upvote",
  styleUrls: ["./upvote.component.css"],
  templateUrl: "./upvote.component.html"
})
export class UpvoteComponent {

  @Input() count: number;
  @Input() set voted(val){
    this.iconColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();

  public iconColor: string;

  onClick(){
    this.vote.emit({});
  }
}
