import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './services/event.service'
import { ToastrService } from './services/toastr.service'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'
import { AuthService } from './users/auth.service'

import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component           
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved changes, do you really want to cancel?')
  return true
}