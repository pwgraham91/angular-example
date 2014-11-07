/**
 * Created by GoldenGate on 11/6/14.
 */
baseclone.directive('searchbar', function(){
    return {
        restrict: "E",
        templateUrl: "/static/js/directives/templates/searchbar.html",
        replace: "true",
        link: function(scope) {
            var query = location.hash.split('?')[1];
            if (query) {
                scope.searchText = query;
            }
        }
    }
});