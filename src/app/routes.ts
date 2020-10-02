import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventListResolver,
    EventResolver
  } from './events/index'

import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component} from './errors/404.component'
import { CreateSessionComponent } from './sessions/index'

export const appRoutes:Routes = [
    { path: 'events/new',  component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    { path: 'events', component: EventsListComponent },
    { path: '404', component: Error404Component },

    { path: 'events/sessions/new', component: CreateSessionComponent},

    { path: '', redirectTo: '/events', pathMatch: 'full' },

    {path: 'user', loadChildren: () => import('./users/user.module').then(m => m.UserModule)}
]
