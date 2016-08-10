
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
}).controller("newsController", function($scope, $http){
  $scope.sources = ["TechCrunch", "HackerNews"];
  $http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(function(data){
    console.log("first ajax");

    $http.get("https://hacker-news.firebaseio.com/v0/item/"+
    data.data[0]+
    ".json?print=pretty").then(
      function(data2){
        console.log("second ajax call");

        console.log(data2.data.url);

        $scope.title = data2.data.title;
        $scope.text = data2.data.text;
        $scope.url = data2.data.url;
      }
    )
  });
}).controller("weatherController", function($scope){
  $scope.weather = "Sunny";
}).controller("sportsController", function($scope){
  $scope.sportSources = ["ESPN", "Bleacher Report"];
}).controller("musicController", function($scope){
  $scope.musicSources = ["Spotify", "SoundCloud"];
});
