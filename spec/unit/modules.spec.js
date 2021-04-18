
describe('Interface', function(){
  var peepsObj = [
    {id: 371, body: "I still love conures", created: "2021-04-18T08:55:37.904Z", id: 371, likes: [], userHandle: "lou", userId: 310},
    {id: 369, body: "Layla loves to growl", created: "2021-04-17T17:57:49.736Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 368, body: "Rio is a seeeed junkie", created: "2021-04-17T17:12:06.034Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 367, body: " Green-Cheeked conures ftw", created: "2021-04-17T13:38:09.421Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 365, body: "Paaarrrttyy parrot", created: "2021-04-17T12:22:40.596Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 363, body: "Caesar is the OG", created: "2021-04-16T20:54:53.508Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 362, body: "Polly want a cracker?", created: "2021-04-16T20:52:01.092Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 361, body: "Adopt a parrot from Birdline :)", created: "2021-04-16T20:47:06.906Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 360, body: "Rio is a superstar", created: "2021-04-16T20:45:01.876Z", userId: 310, userHandle: "lou", userId: 310},
    {id: 356, body: "why are my posts disapearing?", created: "2021-03-22T00:38:03.379Z", userId: 298, userHandle: "CamelTrain_Case_Is_BestCase", userId: 298}
];
  describe("getPeeps", function(){
    beforeEach(function(){
      spyOn($.fn, 'show');
      var createSession = jasmine.createSpyObj('createSession',['isStormy']);
      //plane.isStormy(true);
      //getPeeps();
      let data = {"handle": handle, "password": password, user_id: 310}
      spyOn(postData, 'postData').andCallFake(function(){
        return true;
      })
      //spyOn(createSession(), 'createSession')
      //var peeps = jasmine.createSpyObj('peeps',peepsObj);
    });
  });
     // it("should call create session if login successful", function() {
     //   login("lou","rio");
     //   expect(createSession()).toHaveBeenCalled();
     // });

    it("prints peeps to the page", function(){
      result = showFullPeep();
      expect($("#single-peep").show).toHaveBeenCalled;
    });

});
