/**
 * Created by GoldenGate on 11/7/14.
 */
baseclone.directive('navbarA', function(){
    return {
        restrict: "E",
        templateUrl: "/static/js/directives/templates/navbar.html",
        replace: "true",
        controller: function ($scope, ProjectFactory) {
            $scope.items = [{name:'Home', link: '#'}];
            ProjectFactory.getProjects(function(projectsResponse) {
                $scope.projects = projectsResponse;
                ProjectFactory.projectList = $scope.projects;
            })
        }
    }
});