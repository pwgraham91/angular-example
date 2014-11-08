/**
 * Created by GoldenGate on 11/4/14.
 */
function calendarController($scope, $http, $routeParams, iCal) {
    var calendarId = $routeParams.id;
    $http.get('/proxy/calendars/'+calendarId+'.json').
        success(function(data){
            $scope.calendar = data;
//            console.log(data);
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $scope.deleteCalendar = function(calendarID) {
        var del = calendarID;
        $http.delete('/proxy/calendars/' + del + '.json').
            success(function(data){
                $scope.project = data;
            }).error(function(error) {
                console.log("didn't work");
                console.log(error);
            });
    };
    $scope.editCalendar = function(edited) {
        var data = {
            "name": $scope.editedName
            };
        var editor = edited;
        $http.put('/proxy/calendars/'+ editor + '.json', data).
            success(function() {
                console.log("worked")
            }).error(function(error) {
                console.log(error)
            });
    };
    $http.get('/proxy/calendars/'+calendarId+'/calendar_events.json').
        success(function(data){
            $scope.events = data;
            console.log(data);
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $scope.calStarts = new Date();
    $scope.newEvent = function() {
        var data = {
            "summary": $scope.calName,
            "description": $scope.calDescription,
            "all_day": true,
            "starts_at": $scope.calStarts
            };
    $http.post('/proxy/calendars/'+calendarId+'/calendar_events.json', data).
        success(function(calendar) {
            console.log(calendar);
        }).error(function(error) {
            console.log(error)
        });
    };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
}
