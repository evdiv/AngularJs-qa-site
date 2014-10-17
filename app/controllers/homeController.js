/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var HomeController = function ($scope, questionsFactory, appSettings) {

        $scope.page = questionsFactory.getPage('home');
        $scope.questions = questionsFactory.getQuestions('4');

        $scope.appSettings = appSettings;
    };

    HomeController.$inject = ['$scope', 'questionsFactory', 'appSettings'];

    angular.module('simpleSiteApp').controller('HomeController', HomeController);

})();