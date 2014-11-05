/**
 * Created by GoldenGate on 11/4/14.
 */
/**
 * Created by GoldenGate on 11/4/14.
 */
function eventController($scope, $http, $routeParams) {
    var eventId = $routeParams.id1;
    var calendarID = $routeParams.id2;
    $http.get('/proxy/calendars/' + calendarID + '/calendar_events/' + eventId + '.json').
        success(function (data) {
            $scope.event = data;
            console.log(data);
        }).error(function (error) {
            console.log("didn't work");
            console.log(error);
        });
    $scope.deleteEvent = function () {
        $http.delete('/proxy/calendars/' + calendarID + '/calendar_events/' + eventId + '.json').
            success(function (data) {
                $scope.project = data;
            }).error(function (error) {
                console.log("didn't work");
                console.log(error);
            });
    };
    $scope.editEvent = function () {
        var data = {
            "summary": $scope.calNameE,
            "description": $scope.calDescriptionE,
            "all_day": true,
            "starts_at": $scope.calStartsE
        };
        $http.put('/proxy/calendars/' + calendarID + '/calendar_events/' + eventId + '.json', data).
            success(function () {
                console.log("worked")
            }).error(function (error) {
                console.log(error)
            });
    };
}