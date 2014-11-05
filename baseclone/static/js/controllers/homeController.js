/**
 * Created by GoldenGate on 11/4/14.
 */
function homeController($scope, $http) {
    $http.get('/proxy/projects.json').
        success(function(projectsResponse) {
            $scope.projects = projectsResponse;
        }).
        error(function(errorResponse) {
            console.log(errorResponse);
    });

    $scope.newProject = function() {
        var data = {
            "name": $scope.projectName,
            "description": $scope.projectDescription
            };
        $http.post('/proxy/projects.json', data).
            success(function(newProject) {
//                only need the push to auto update the list of projects
                $scope.projects.push(newProject);
                console.log("worked")
            }).error(function(error) {
                console.log(error)
            });
    };
}