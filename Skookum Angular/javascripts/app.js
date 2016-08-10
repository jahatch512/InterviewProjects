
var JamesWorld = angular.module('JamesWorld', ["ngRoute"])
.config(function($routeProvider){
  $routeProvider.when("/home", {
    templateUrl: "../views/home.html",
    controller: "homeController"
  }).when("/news", {
    templateUrl: "../views/news.html",
    controller: "newsController"
  }).when("/weather", {
    templateUrl: "views/weather.html",
    controller: "weatherController"
  }).when("/sports", {
    templateUrl: "views/sports.html",
    controller: "sportsController"
  }).when("/music", {
    templateUrl: "views/music.html",
    controller: "musicController"
  });
}).controller("homeController", function($scope){
  $scope.message = "Welcome to James World";
}).controller("newsController", function($scope){
  $scope.sources = ["TechCrunch", "HackerNews"];
}).controller("weatherController", function($scope){
  $scope.weather = "Sunny";
}).controller("sportsController", function($scope){
  $scope.sportSources = ["ESPN", "Bleacher Report"];
}).controller("musicController", function($scope){
  $scope.musicSources = ["Spotify", "SoundCloud"];
});
