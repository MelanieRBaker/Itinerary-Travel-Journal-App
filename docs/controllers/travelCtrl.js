app
  .controller('TravelCtrl', function (firebaseFactory, $scope) {
    // const travel = this
    // console.log("i'm not empty")
    $scope.logout = function () {
      console.log("fired register function");
      firebaseFactory.logout()
    }

  })
