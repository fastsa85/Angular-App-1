import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventListResolver,
  UpvoteComponent,
  VotesService,
  LocationValidator,
  EventResolver
} from './events/index'

import {
  CreateSessionComponent, SessionListComponent
} from './sessions/index'

import {DurationPipe, SimpleModalComponent, ModalTriggerDirective } from './shared/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './services/event.service'
import { JQ_TOKEN, TOASTR_TOKEN, Toastr } from './services/index'
import { CollapsibleWellComponent } from './shared/collapsible-well/collapsible-well.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'
import { AuthService } from './users/auth.service'
import { RestrictedWordsService } from './services/restricted-words.service'

import { appRoutes } from './routes'

declare let toastr: Toastr;
declare let jQuery;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    RestrictedWordsService,
    VotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved changes, do you really want to cancel?')
  return true
}
