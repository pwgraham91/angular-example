/**
 * Created by GoldenGate on 11/5/14.
 */
baseclone.factory('ProjectFactory', function($http) {
    return {
        projectList: [],
        getProjects: function(callback) {
            $http.get('/proxy/projects.json')
                .success(function(response) {
                    console.log(response);
                    callback(response)
                }).error(function(error) {
                    console.log(error);
        });
        },
        deleteProject: function(callback) {
            $http.delete('/proxy/projects' + project.id + '.json').success(function(response) {
                callback(response)
            }).error(function(error){
                console.log(error)
            })
        }
    }
});