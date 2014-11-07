/**
 * Created by GoldenGate on 11/6/14.
 */
baseclone.directive('button', function() {
    return {
        restrict: 'E',
        compile: function(element, attributes) {
            element.addClass('btn');
            if (attributes.type == 'submit') {
                element.addClass('btn-primary');
            }
            if (attributes.size) {
                element.addClass('btn-' + attributes.size);
            }
        }
    }
});