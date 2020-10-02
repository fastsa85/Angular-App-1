import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core"
import { SessionListComponent} from './sessions-list.component'
import { UpvoteComponent } from '../../events/event-details/upvote.component'
import { ISession } from '../../shared/event.model'
import { AuthService } from 'src/app/users/auth.service';
import { VotesService } from '../../events/event-details/votes.service'
import { DurationPipe } from '../../shared/duration.pipe'
import { CollapsibleWellComponent } from '../../shared/collapsible-well/collapsible-well.component'
import { By } from '@angular/platform-browser'

describe ('SessionListComponent', () => {

  let fixture: ComponentFixture<SessionListComponent>,
  component: SessionListComponent,
  element: HTMLElement,
  debugEl: DebugElement

  beforeEach(async () => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    let mockVotesService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        { provide: VotesService, useValue: mockVotesService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent)
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have correct session title', () => {
      component.sessions = [
        {
          id: 3,
          eventId: "4",
          name: "Session 1",
          presenter: "John",
          duration: 1,
          level: "beginner",
          abstract: "test",
          voters: ["joe", "bob"]
        }
      ];
      component.sortBy = "name";
      component.filterBy = "all";
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
    })
  })
})
