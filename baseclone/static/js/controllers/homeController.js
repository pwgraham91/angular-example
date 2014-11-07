/**
 * Created by GoldenGate on 11/4/14.
 */
function homeController($scope, $http, ProjectFactory) {
    ProjectFactory.getProjects(function(projectsResponse){
        $scope.projects = projectsResponse;
        ProjectFactory.projectList = $scope.projects;
        $scope.caroProj = ProjectFactory.projectList[1];
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
//    Carousel
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}