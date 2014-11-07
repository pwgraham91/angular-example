/**
 * Created by GoldenGate on 11/7/14.
 */
baseclone.directive('navbarA', function(){
    return {
        restrict: "E",
        templateUrl: "/static/js/directives/templates/navbar.html",
        replace: "true",
        controller: function ($scope, ProjectFactory, $location) {
            $scope.items = [{name:'Home', link: '#'}];
            ProjectFactory.getProjects(function(projectsResponse) {
                $scope.projects = projectsResponse;
                ProjectFactory.projectList = $scope.projects;
            });
            $scope.linkToSearch = function() {
                var link = $location.absUrl() + '?' + $scope.searchTopic;
                window.prompt("Copy to clipboard: Ctrl+C, Enter", link);
    };
        }
    }
});