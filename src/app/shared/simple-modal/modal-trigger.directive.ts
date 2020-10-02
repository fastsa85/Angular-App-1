import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core"
import { JQ_TOKEN } from "../../services/jquery.service"

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {

  @Input('modal-trigger') modalId: string;

  private el: HTMLElement;

constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
  this.el = elRef.nativeElement;
}

  ngOnInit() {
    console.log("trigger");
    this.el.addEventListener('click', e => {
    this.$(`#${this.modalId}`).modal({})
    })
  }
}
