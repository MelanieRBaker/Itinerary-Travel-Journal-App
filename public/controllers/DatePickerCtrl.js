app.controller('TestCtrl', function ($scope) {
    $scope.date = {startDate: null, endDate: null};

    $scope.apply = function () {
      if ($scope.date.startDate) {
        // console.log ($scope.date.endDate.diff ($scope.date.startDate, "days"));
        var dateRange = $scope.date.endDate.diff ($scope.date.startDate, "days");
        var heldStart = $scope.date.startDate;

        $scope.dateArray = []
        for (var i = 0; i < dateRange; i++) {
          $scope.dateArray[i] = heldStart.add( i, 'days').format('YYYY MM DD');
        }
        console.log("dateArray", $scope.dateArray);
      }
    }
})
