/*ROUTING DE LOS PARTIALS*/
var app = angular.module("pw", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
   $locationProvider.html5Mode();
    $routeProvider
    .when("/home",{
        templateUrl: "partials/home-partial.html",
    })
    .otherwise({
        redirectTo: "/home"
    });
});
