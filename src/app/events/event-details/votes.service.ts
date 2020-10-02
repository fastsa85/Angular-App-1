import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of,  } from 'rxjs';
import { ISession } from '../../shared/event.model';
import { catchError } from 'rxjs/operators'

@Injectable()
export class VotesService {

  constructor(private http: HttpClient){
  }

  deleteVote(eventId: number, session: ISession, voterName: string){
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http.delete(url)
    .pipe(catchError(this.handleError('deleteVote')))
    .subscribe()

    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVote(eventId: number, session: ISession, voterName: string){
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}

    this.http.post(url, {}, options)
    .pipe(catchError(this.handleError('addVote')))
    .subscribe()
  }

  userHasVoted(session: ISession, voterName: string){
    return session.voters.some(voter => voter === voterName)
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error : any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
