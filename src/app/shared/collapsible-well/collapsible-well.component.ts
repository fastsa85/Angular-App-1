import { Component, Input } from "@angular/core"

@Component({
  selector: 'collaplsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent{

  visible: boolean = true;

  toggleContent(){
    this.visible = !this.visible;
  }
}
