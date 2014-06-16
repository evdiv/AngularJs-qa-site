/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var PageController = function ($scope, $routeParams, questionsFactory, appSettings) {

        var pageUrl = $routeParams.pageUrl;

        $scope.page = questionsFactory.getPage(pageUrl);
        $scope.appSettings = appSettings;
    };

    PageController.$inject = ['$scope', '$routeParams', 'questionsFactory', 'appSettings'];

    angular.module('simpleSiteApp').controller('PageController', PageController);

})();