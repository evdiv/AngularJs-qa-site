/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var QuestionController = function ($scope, $routeParams, questionsFactory, appSettings) {

        var questionId = $routeParams.questionId;

        $scope.question = questionsFactory.getQuestion(questionId);
        $scope.appSettings = appSettings;


    };

    QuestionController.$inject = ['$scope', '$routeParams', 'questionsFactory', 'appSettings'];

    angular.module('simpleSiteApp').controller('QuestionController', QuestionController);

})();