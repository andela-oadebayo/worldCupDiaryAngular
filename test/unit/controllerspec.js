describe('WorldCupController', function(){
  beforeEach(module('worldCupApp'));
  describe('WorldCupJSON', function(){
    var scope,
        ctrl,
        $httpBackend;
    beforeEach(module('worldCupApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81').respond({ "login": "octocat", "type": "User", "followers": 20 });

      scope = $rootScope.$new();
      ctrl = $controller('WorldCupController', {$scope: scope});
    }));
    it('should create a country model with all the countries @ world cup returned', function(){
      expect(scope.countries).toBeUndefined();
      $httpBackend.flush();

      expect(scope.countries).toEqual({"login": "octocat", "type": "User", "followers": 20});
    });
  });
});