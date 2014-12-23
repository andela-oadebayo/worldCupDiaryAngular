'Use Strict';
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
// }]);

// worldCupApp.controller('WorldCupPlayerController', ['$scope', '$http', function($scope, $http, $controller){
// //function to get all Players per 
// $controller('WorldCupController', {$scope:$scope});
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
//         controller: 'WorldCupPlayerController',
//         templateUrl: 'partials/players.html'
//       })
//     .when('/country',
//       {
//         controller: 'WorldCupController',
//         templateUrl: 'partials/country.html'
//       });
//     // $locationProvider.html5Mode(true); //activate HTML5 Mode
//     //.otherwise({redirectTo: '/partials/country'})
// });

var worldCupApp = angular.module('worldCupApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/country', {
        templateUrl: 'partials/country.html',
        controller: 'WorldCupCountryController'
      })
      .when('/players', {
        templateUrl: 'partials/players.html',
        controller: 'WorldCupCountryController'
      });
  }])
  .controller('WorldCupCountryController', ['$scope', '$http', function($scope, $http){
      //Function to get all Countries at the worldcup
      $scope.getCountries = function(){
        $http({method: "get",
          url: "http://worldcup.kimonolabs.com/api/teams?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
          params: { sort: "group,1"} 
        })
        .success(function(data){
          $scope.countries = data;
          console.log(data);
        })
      };

    //function to get all Players per 
    $scope.getPlayers = function($event){
      var ele = $event.target;
      var countryName = angular.element(ele).next().text();
      console.log('Should display country name:' + ele);
      $http({method: "get",
        url: "http://worldcup.kimonolabs.com/api/players?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
        params: { nationality: countryName } 
      })
      .success(function(data){
        $scope.countryPlayers = data;
        console.log($scope.countryPlayers);
      });
    };
  }])
  .controller('WorldCupPlayerController', ['$scope', '$http', function($scope, $http){
    // //function to get all Players per 
    // $scope.getPlayers = function($event){
    //   var ele = $event.target;
    //   var countryName = angular.element(ele).next().text();
    //   console.log('Should display country name:' + ele);
    //   $http({method: "get",
    //     url: "http://worldcup.kimonolabs.com/api/players?apikey=f0rt5uSfHOFwGCbA18wh48xRUFbCtr81",
    //     params: { nationality: countryName } 
    //   })
    //   .success(function(data){
    //     $scope.countryPlayers = data;
    //     console.log($scope.countryPlayers);
    //   });
    // };
  }]);