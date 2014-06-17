/**
 * Created by Eugene on 12/06/14.
 */
(function() {
    var app = angular.module('simpleSiteApp', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })
            .when('/questions/', {
                controller: 'QuestionsController',
                templateUrl: 'app/views/questions.html'
            })
            .when('/questions/:questionId', {
                controller: 'QuestionController',
                templateUrl: 'app/views/question.html'
            })
            .when('/pages/:pageUrl', {
                controller: 'PageController',
                templateUrl: 'app/views/page.html'
            })
            .otherwise({ redirectTo: '/'});
    });

}());
