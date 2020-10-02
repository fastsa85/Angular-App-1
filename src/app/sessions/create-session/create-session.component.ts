import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession, restrictedWords } from 'src/app/shared/index'
import { RestrictedWordsService } from '../../services/restricted-words.service'


@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private restrictedWordsService: RestrictedWordsService){
  }

  @Output() newSavedSession = new EventEmitter

  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl
  restrictedWordsList: string[];

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)

    this.restrictedWordsService.getRestrictedWords().subscribe(restrictedWordsList => this.restrictedWordsList = restrictedWordsList);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(this.restrictedWordsList)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      eventId: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    }

    this.newSavedSession.emit(session);
  }
}
