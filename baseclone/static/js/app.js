var baseclone = angular.module('baseclone', ['ngRoute', 'ngResource', 'ngSanitize']);
baseclone.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController}).
        when('/projects/:id', {templateUrl: '/static/js/views/project.html', controller: projectController}).
        when('/calendars/:id', {templateUrl: '/static/js/views/calendar.html', controller: calendarController}).
        when('/events/:id1/:id2', {templateUrl: '/static/js/views/event.html', controller: eventController}).
        when('/projects/:projectId/discussion/:discussionId', {templateUrl: '/static/js/views/discussion.html', controller: discussionController}).
        otherwise({redirectTo: '/'});
}]);
