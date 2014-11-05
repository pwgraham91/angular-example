/**
 * Created by GoldenGate on 11/5/14.
 */
baseclone.factory('Message', function($resource) {
    return $resource('/proxy/projects/:projectId/messages/:discussionId.json', {
            // Parameter defaults
        }, {
            update: {method: 'PUT'}
        }
    );
});