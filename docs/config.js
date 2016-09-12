app
  .config(($routeProvider) => {
   $routeProvider
   .when('/login', {
     templateUrl: 'partials/login.html',
     controller: 'LoginCtrl',
     controllerAs: 'login'
   })
   .when('/travel', {
     templateUrl: 'partials/travel.html',
     controller: 'TravelCtrl',
     controllerAs: 'travel'
   })
   .otherwise('/login');
 });
