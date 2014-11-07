/**
 * Created by GoldenGate on 11/6/14.
 */
baseclone.filter('creationTimeFilter', function() {
    return function(topicList, topicTime) {
        var filtered = [];
        angular.forEach(topicList, function(topic){
            console.log(topic.created_at.substring(0,4));
            if (topicTime == null){
                filtered.push(topic);
            }
            else{
            lenTime = topicTime.length;

            if (topicTime == ""){
                filtered.push(topic);
            }
            else if (topic.created_at.substring(0,lenTime) == topicTime) {
                filtered.push(topic);
            }
            }

        });
        return filtered;
 };
});