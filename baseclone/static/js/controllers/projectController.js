/**
 * Created by GoldenGate on 11/4/14.
 */
function projectController($scope, $http, $routeParams) {
    var projectId = $routeParams.id;
    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            $scope.project = data;
            console.log(data);
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $http.get('/proxy/projects/' + projectId + '/topics.json').
        success(function(data){
            $scope.topics = data;
            console.log(data);
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $http.get('/proxy/calendars.json').
        success(function(data){
            $scope.calendars = data;
            console.log(data);
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $scope.deleteProject = function(projectID) {
        var del = projectID;
        $http.delete('/proxy/projects/' + del + '.json').
            success(function(data){
                $scope.project = data;
            }).error(function(error) {
                console.log("didn't work");
                console.log(error);
            });
    };
    $scope.editProject = function(edited) {
        var data = {
            "name": $scope.editedName,
            "description": $scope.editedDescription
            };
        var editor = edited;
        $http.put('/proxy/projects/'+ editor + '.json', data).
            success(function() {
                console.log("worked")
            }).error(function(error) {
                console.log(error)
            });
    };

}