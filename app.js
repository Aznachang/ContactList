// Angular Routes Here
const app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/contactlist', {
    controller: 'home',
    templateUrl: '/home/view.html',
    reloadOnSearch: false,
  })
  .when('/', {
    templateUrl: '/home/view.html',
    reloadOnSearch: false,
  })
  .otherwise({
    redirectTo: '/',
  });
  $locationProvider.hashPrefix('');
});
