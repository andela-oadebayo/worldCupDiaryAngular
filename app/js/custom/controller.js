'use strict';
//Create a sand module and chain the routes config to it
var worldCupApp = angular.module('worldCupApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/country', {
      templateUrl: 'partials/country.html',
      controller: 'WorldCupController'
    })
    .when('/players', {
      templateUrl: 'partials/players.html',
      controller: 'WorldCupController'
    });
}]);

//Create a factory to return the API url to retrieve countries
worldCupApp.factory('countryFactory',['$http', function(http){
  var  getCountries = function(){
    return http({
      method: "get",
      url: "http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
      params: { sort: "group,1"}   
    });
  };
  return getCountries;
}]);
//Create a factory to return the API url to retrieve player per country
worldCupApp.factory('playerFactory', ['$http', function(http){
  var getPlayers =  function(query){
    return http({
      method: "get",
      url: "http://worldcup.kimonolabs.com/api/players?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
      params: { nationality: query} 
    });
  };
  return getPlayers;
}]);

//Create controller and inject the factories into it
worldCupApp.controller('WorldCupController', function($scope, countryFactory,playerFactory){
  //this function is run on click of the the Country link
  $scope.getCountries = function(){ 
    countryFactory().success(function(data){
      $scope.countries = data;
      console.log($scope.countries);
    });
  }; 

  //this function is run on click of the the Player link
  $scope.getPlayers = function($event){
    var ele = $event.target;
    var countryName = angular.element(ele).next().text();
    console.log('Should display country name:' +countryName);
    playerFactory(countryName).success(function(data){
      $scope.players = data;
      console.log($scope.players);
      console.log($scope.players.firstName);

    });
  };
});

