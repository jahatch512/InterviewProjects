
var JamesWorld = angular.module('JamesWorld', ["ngRoute"])
.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "../views/home.html",
    controller: "newsController"
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
}).controller("newsController", function($scope, $http){
  $scope.sources = ["TechCrunch", "HackerNews"];
  $http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(function(data){
    console.log("first ajax");

    $http.get("https://hacker-news.firebaseio.com/v0/item/"+
    data.data[0]+
    ".json?print=pretty").then(
      function(data2){
        if (data2.data.title){
          $scope.title1 = data2.data.title;
        } else {
          $scope.title1 = "(no title available)";
        }
        if (data2.data.text){
          $scope.text1 = data2.data.text;
        } else {
          $scope.text1 = "(no text available)";
        }
        if (data2.data.url){
          $scope.url1 = data2.data.url;
        } else {
          $scope.url1 = "(no url available)";
        }
      }
    );
  });

  $http.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=popular&apiKey=e464350201154d5bbeb3ee037abf09fb")
  .then(function(data2){
    console.log(data2.data.articles[0]);

    if (data2.data.articles[0].title){
      $scope.title2 = data2.data.articles[0].title;
    } else {
      $scope.title2 = "(no title available)";
    }
    if (data2.data.articles[0].description){
      $scope.description = data2.data.articles[0].description;
    } else {
      $scope.description = "(no description available)";
    }
    if (data2.data.articles[0].url){
      $scope.url2 = data2.data.articles[0].url;
    } else {
      $scope.url2 = "no url";
    }
  }
  );

}).controller("weatherController", function($scope, $http){
  $scope.weather = "Sunny";
  $http.get("http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json")
  .then(function(data){
    console.log("second request success");
    console.log(data);

    if (data.data.articles[0].title){
      $scope.title = data.data.articles[0].title;
    } else {
      $scope.title = "(no title available)";
    }
    if (data.data.articles[0].description){
      $scope.description = data.data.articles[0].description;
    } else {
      $scope.description = "(no description available)";
    }
    if (data.data.articles[0].url){
      $scope.url = data.data.articles[0].url;
    } else {
      $scope.url = "no url";
    }
    if (data.data.articles[0].urlToImage){
      $scope.image = data.data.articles[0].urlToImage;
    } else {
      $scope.image = "(no image available)";
    }
  });
}).controller("sportsController", function($scope, $http){
  $scope.sportSources = ["ESPN", "Bleacher Report"];
  $http.get("https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=e464350201154d5bbeb3ee037abf09fb")
  .then(function(data){
    console.log("second request success");
    console.log(data.data.articles[0]);

    if (data.data.articles[0].title){
      $scope.title = data.data.articles[0].title;
    } else {
      $scope.title = "(no title available)";
    }
    if (data.data.articles[0].description){
      $scope.description = data.data.articles[0].description;
    } else {
      $scope.description = "(no description available)";
    }
    if (data.data.articles[0].url){
      $scope.url = data.data.articles[0].url;
    } else {
      $scope.url = "no url";
    }
    if (data.data.articles[0].urlToImage){
      $scope.image = data.data.articles[0].urlToImage;
    } else {
      $scope.image = "(no image available)";
    }
  });

}).controller("musicController", function($scope){
  $scope.musicSources = ["Spotify", "SoundCloud"];
});
