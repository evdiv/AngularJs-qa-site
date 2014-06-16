/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var HomeController = function ($scope, questionsFactory, appSettings) {

        $scope.questions = questionsFactory.getQuestions();
        $scope.appSettings = appSettings;


    };

    HomeController.$inject = ['$scope', 'questionsFactory', 'appSettings'];

    angular.module('simpleSiteApp').controller('HomeController', HomeController);

})();