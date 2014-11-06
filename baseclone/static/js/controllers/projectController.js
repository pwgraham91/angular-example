/**
 * Created by GoldenGate on 11/4/14.
 */
function projectController($scope, $http, $routeParams, ProjectFactory) {
    var projectId = $routeParams.id;
    $scope.projects = ProjectFactory.projectList;
    if (ProjectFactory.projectList.length > 0) {
        $scope.projects = ProjectFactory.projectList;
    }
    else {
        $http.get('/proxy/projects.json')
            .success(function(response) {
                console.log(response);
                $scope.projects = response;
                ProjectFactory.projectList = $scope.projects;
        }).error(function(error) {
                console.log(error);
            });
    }
    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            $scope.project = data;
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $http.get('/proxy/projects/' + projectId + '/topics.json').
        success(function(data){
            $scope.topics = data;
            console.log(data)
        }).error(function(error) {
            console.log("didn't work");
            console.log(error);
        });
    $http.get('/proxy/calendars.json').
        success(function(data){
            $scope.calendars = data;
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
    $scope.newCalendar = function() {
        var data = {
            "name": $scope.calendarName
        };
        $http.post('/proxy/calendars.json', data).
            success(function(){
                console.log("worked");
            }).error(function(error){
                console.log('fail');
            })
    }
    $scope.hasAttachment = function(filterData){
     // If the checkbox is checked (when checked, it's value is true)
     if ($scope.attachmentBoolean) {
        // Only return topics that have attachments
        return filterData.attachments > 0;
     // else return true for all topics
        } else {
        return true
     }
 };

}
