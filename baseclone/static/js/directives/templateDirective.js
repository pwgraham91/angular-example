/**
 * Created by GoldenGate on 11/6/14.
 */
baseclone.directive('templateDirective', function(){
    return {
//        restrict E makes it an element (<templateDirective></templateDirective>
//        restrict: 'E',
        template: 'Welcome to Baseclone!'
    }
})