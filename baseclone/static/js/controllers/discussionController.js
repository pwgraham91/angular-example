/**
 * Created by GoldenGate on 11/5/14.
 */
function discussionController($scope, $routeParams, Message) {
    var projectId = $routeParams.projectId;
    var discussionId = $routeParams.discussionId;
    $scope.projID = projectId
    $scope.discussion = Message.get({projectId: projectId, discussionId: discussionId});
    $scope.deleteMessage = function (messageID, proID) {
//        messageID is unused
        var del = proID;
        Message.delete({projectId: del, discussionId: discussionId});
    }
}
