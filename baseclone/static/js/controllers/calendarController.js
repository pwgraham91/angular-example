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
            console.log("worked")
        }).error(function(error) {
            console.log(error)
        });
    };
}
