import { SessionListComponent} from './sessions-list.component'
import { ISession } from '../../shared/event.model'

describe('SessionListComponent', () => {

  let component: SessionListComponent;
  let mockAuth, mockVotes;

  beforeEach(() => {
    mockAuth = jasmine.createSpyObj('mockAuth', ['delete', 'post']);
    mockVotes = jasmine.createSpyObj('mockVotes', ['delete', 'post']);
    component = new SessionListComponent(mockAuth, mockVotes);
  });

  describe('ngOnChanges', () => {

    it('should filter the sessions correctly', () => {

      component.sessions = <ISession[]>[
        {name: 'sesion 1', level: 'intermediate'},
        {name: 'sesion 2', level: 'intermediate'},
        {name: 'sesion 3', level: 'begginer'},
        {name: 'sesion 4', level: 'advanced`'}
      ]
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions.length).toBe(2);
    })

    it('should sort the sessions correctly', () => {

      component.sessions = <ISession[]>[
        {name: 'sesion 0', level: 'intermediate'},
        {name: 'sesion 4', level: 'intermediate'},
        {name: 'sesion 3', level: 'begginer'},
        {name: 'sesion abc', level: 'advanced`'}
      ]
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions[3].name).toBe("sesion abc");
    })

  })
})
