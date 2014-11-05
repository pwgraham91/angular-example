function exampleController($scope, $http) {
    var chuck = "Chuck Norris";

    $scope.chuckNorrisMe = function(){
        $scope.chuckButton = function(){
        chuck = $scope.chuckWho;
        };
        $http({method: 'GET',
            url: 'http://api.icndb.com/jokes/random?firstName='+chuck+'&lastName='}).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.chuckNorrisJoke = data.value.joke;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.chuckNorrisJoke = "Chuck Norris never fails";
            });
    };

    $scope.chuckNorrisMe();

}