app.controller('TestCtrl', function ($scope, $timeout) {
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
  })






// originial don't change!

// app.controller('TestCtrl', function ($scope, $timeout) {
//     $scope.date = {startDate: null, endDate: null};
//     $scope.dateArray = []

//     $scope.pickDate = function () {
//       var currentDate = moment($scope.date.startDate)
//       while (currentDate <= $scope.date.endDate){
//         $scope.dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
//         currentDate = moment(currentDate).add (1, "days")
//       }
//       $timeout ()
//       console.log("dateArray", $scope.dateArray);
//       return $scope.dateArray;
//      }
//    })
