// appModule.factory('sendDefinitionRequest', ['$http', function (http) {

//   var returnDefinitionUrl = function (query) {
//     console.log(query);
//     var definitionUrl = 'http://api.wordnik.com:80/v4/word.json/' + query + '/definitions/';
//     console.log(definitionUrl);
//     return definitionUrl;
//   };

//   var requestFactory = function (query) {
//     return http({
//       url: returnDefinitionUrl(query),
//       method: 'GET',
//       params: {
//         limit: 6,
//         includeRelated: 'true',
//         sourceDictionaries: 'all',
//         api_key: '724583fdf72680c36d0010ad78b03b1c4f3ea7b27c651f094'
//       }
//     });
//   };
//   return requestFactory;
// }]);

var module = angular.module('worldCupApp', []);
module.factory ('userService', function(){
  var  getCountries = function(){
    var url = http({
      method: "get",
      url: "http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
      params: { sort: "group,1"}   
    });
    return $http.ger(url);
  };
});

var WorldCupController = worldCupApp.controller;
worldCupApp.controller('WorldCupController', function($scope, userService){
  $scope.country = userService.getCountries; 
});

 'use strict';
// //Declaring the module
// var worldCupApp = angular.module('worldCupApp', ['ngRoute']);

// //Creating the controller
// var WorldCupController = worldCupApp.controller;
// worldCupApp.controller('WorldCupController', ['$scope', '$http', function($scope, $http){

//   //Function to get all Countries at the worldcup
//   $scope.getCountries = function(){
//     $http({method: "get",
//             url: "http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
//             params: { sort: "group,1"} }).success(function(data){
//       $scope.countries = data;
//       console.log(data);
//     });
//   };

//   //function to get all Players per 
  // $scope.getPlayers = function($event){
  //   var ele = $event.target;
  //   var countryName = angular.element(ele).next().text();
  //   console.log('Should display country name:' + ele);
  //   $http({method: "get",
  //           url: "http://worldcup.kimonolabs.com/api/players?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
  //           params: { nationality: countryName } })
  //   .success(function(data){
  //       $scope.countryPlayers = data;
  //       console.log($scope.countryPlayers);
  //   });
  // };

// }]);




// //Creating Route for the App
// worldCupApp.config(function ($routeProvider){
//   $routeProvider
//     .when('/players',
//       {
//         controller: 'WorldCupController',
//         templateUrl: 'partials/players.html'
//       })
//     .when('/country',
//       {
//         controller: 'WorldCupController',
//         templateUrl: 'partials/country.html'
//       });
// });

// var worldCupApp = angular.module('worldCupApp', ['ngRoute'])
//   .config(['$routeProvider', function($routeProvider){
//     $routeProvider
//       .when('/country', {
//         templateUrl: 'partials/country.html',
//         controller: 'WorldCupCountryController'
//       })
//       .when('/players', {
//         templateUrl: 'partials/players.html',
//         controller: 'WorldCupCountryController'
//       });
//   }])
//   .controller('WorldCupCountryController', ['$scope', '$http', function($scope, $http){
//       //Function to get all Countries at the worldcup
//       $scope.getCountries = function(){
//         $http({method: "get",
//           url: "http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
//           params: { sort: "group,1"} 
//         })
//         .success(function(data){
//           $scope.countries = data;
//           console.log(data);
//         })
//       };

//     //function to get all Players per 
//     $scope.getPlayers = function($event){
//       var ele = $event.target;
//       var countryName = angular.element(ele).next().text();
//       console.log('Should display country name:' + ele);
//       $http({method: "get",
//         url: "http://worldcup.kimonolabs.com/api/players?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
//         params: { nationality: countryName } 
//       })
//       .success(function(data){
//         $scope.countryPlayers = data;
//         console.log($scope.countryPlayers);
//       });
//     };
//   }])


//   .controller('WorldCupPlayerController', ['$scope', '$http', function($scope, $http){
//       // $scope.name = "damilola";