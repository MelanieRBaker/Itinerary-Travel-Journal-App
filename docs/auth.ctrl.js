angular.module('app')
  .controller('LoginCtrl', function (firebaseFactory) {
    const auth = this // auth is controllerAS

    auth.login = function () {
      console.log("fired login function from auth.ctrl.js", auth.email, auth.password);
      firebaseFactory.login(auth.email, auth.password)
    }

    auth.register = function () {
      console.log("fired register function", auth.email, auth.password);
      firebaseFactory.register(auth.email, auth.password)
    }

  })
