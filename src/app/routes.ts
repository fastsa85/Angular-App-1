import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver
  } from './events/index'

import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component} from './errors/404.component'

export const appRoutes:Routes = [
    { path: 'events/new',  component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },    
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: () => import('./users/user.module').then(m => m.UserModule)}
]