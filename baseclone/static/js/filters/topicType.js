/**
 * Created by GoldenGate on 11/6/14.
 */
baseclone.filter('topicTypeFilter', function() {
//    the first parameter is whatever we're looping on, the second is after the colon for
//    topicTypeFilter: 'Message'
    return function(topicList, topicType) {
        var filtered = [];
        angular.forEach(topicList, function(topic){
            if (topicType == null){
                filtered.push(topic);
            }
            else if (topic.topicable.type == topicType) {
                filtered.push(topic);
            }
        });
        return filtered;
 };
});