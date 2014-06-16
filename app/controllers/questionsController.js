/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var QuestionsController = function ($scope, questionsFactory, appSettings) {

        $scope.questions = questionsFactory.getQuestions();
        $scope.appSettings = appSettings;

    };

    QuestionsController.$inject = ['$scope', 'questionsFactory', 'appSettings'];

    angular.module('simpleSiteApp').controller('QuestionsController', QuestionsController);

})();