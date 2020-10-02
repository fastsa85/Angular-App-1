import { Component, Input, OnChanges, SimpleChanges } from "@angular/core"
import { ISession } from 'src/app/shared/event.model';
import { AuthService } from 'src/app/users/auth.service';
import { VotesService } from '../../events/event-details/votes.service'

@Component({
  selector: 'session-list',
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  filteredSessions: ISession[] = [];

  constructor(public auth: AuthService, private votesService: VotesService){
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  toggleVote(session: ISession){
    if (this.votesService.userHasVoted(session, this.auth.currentUser.userName))
      this.votesService.deleteVote(this.eventId, session, this.auth.currentUser.userName);
    else
      this.votesService.addVote(this.eventId, session, this.auth.currentUser.userName);

    if (this.sortBy === 'votes')
      this.filteredSessions.sort(sortSessionsByVotes)
  }

  userHasVoted(session: ISession){
      return this.votesService.userHasVoted(session, this.auth.currentUser.userName);
  }

  filterSessions(filter: string){
    if (filter === 'all'){
      this.filteredSessions = this.sessions.slice(0);
    }
    else {
      this.filteredSessions = this.sessions.filter(session => {return session.level.toLowerCase() === filter;})
    }
  }

  sortSessions(sortBy: string){
    if (sortBy === 'name'){
      this.filteredSessions.sort(sortSessionsByName)
    }
    else if (sortBy === 'votes'){
      this.filteredSessions.sort(sortSessionsByVotes)
    }
  }
}

function sortSessionsByName(session1: ISession, session2: ISession){
  if (session1.name > session2.name) return 1;
  else if (session1.name === session2.name) return 0;
  else return -1;
}

function sortSessionsByVotes(session1: ISession, session2: ISession){
return session2.voters.length - session1.voters.length;
}
