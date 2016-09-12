app.controller('TravelCtrl', function ($scope, $timeout, firebaseFactory) {
    $scope.date = {startDate: null, endDate: null};
    $scope.dateArray = []

    $scope.pickDate = function () {
      var currentDate = moment($scope.date.startDate)
      while (currentDate <= $scope.date.endDate){
        $scope.dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
        currentDate = moment(currentDate).add (1, "days")
      }
      $timeout ()
      console.log("dateArray", $scope.dateArray);
      return $scope.dateArray;
    }

    $scope.logout = function () {
      console.log("fired register function");
      firebaseFactory.logout()
    }

  })
