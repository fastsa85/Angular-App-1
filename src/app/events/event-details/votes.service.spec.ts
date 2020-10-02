import { VotesService } from "./votes.service"
import { ISession } from '../../shared/event.model'
import { Observable, of } from 'rxjs'

describe('VotesService', () => {

  let votesService: VotesService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    votesService = new VotesService(mockHttp);
  });

  describe('deleteVoter', () => {

    it('should remove a voter from the list', () => {

      var session = { id: 7, voters: ["joe", "john"]};
      mockHttp.delete.and.returnValue(of(false))

      votesService.deleteVote(3, <ISession>session, "joe");

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("john");
    })

    it('should call http.delete with the correct url', () => {

      var session = { id: 7, voters: ["joe", "john"]};
      mockHttp.delete.and.returnValue(of(false))

      votesService.deleteVote(3, <ISession>session, "joe");

      expect(mockHttp.delete).toHaveBeenCalledWith("/api/events/3/sessions/7/voters/joe")
    })

  })

  describe('addVote', () => {

    it('should call http.post with the correct url', () => {

      var session = { id: 7, voters: ["john"]};
      mockHttp.post.and.returnValue(of(false))

      votesService.addVote(3, <ISession>session, "joe");

      expect(mockHttp.post).toHaveBeenCalledWith("/api/events/3/sessions/7/voters/joe", {}, jasmine.any(Object))
    })

  })

})
