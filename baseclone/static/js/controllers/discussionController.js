/**
 * Created by GoldenGate on 11/5/14.
 */
function discussionController($scope, $routeParams, Message) {
    var projectId = $routeParams.projectId;
    var discussionId = $routeParams.discussionId;
    $scope.projID = projectId
    $scope.discussion = Message.get({projectId: projectId, discussionId: discussionId});
    $scope.deleteMessage = function (proID) {
        var del = proID;
        Message.delete({projectId: del, discussionId: discussionId});
    }
    $scope.editDiscussion = function(proId){
        var pro = proId;
        var data = {
            "subject": $scope.editedName,
            "content": $scope.editedDescription
        };
        Message.update({projectId: pro, discussionId:discussionId}, data)
    }
}
