/**
 * Created by Eugene on 14/06/14.
 */
(function() {
    var questionsFactory = function() {
        var questions = [
            {
                id:1,
                date: '2013-12-24',
                user: 'Kyle',
                content: 'Content of the first question'
            },
            {
                id:2,
                date: '2014-02-15',
                user: 'Monika',
                content: 'Content of the second question'
            },
            {
                id:3,
                date: '2014-04-23',
                user: 'Colin',
                content: 'Content of the third question'
            }
        ];

        var pages = [
            {
                id: 1,
                url: 'home',
                title: 'Main page',
                header: 'Welcome to our web site',
                content: 'Content of the home page of the site'
            },
            {
                id: 2,
                url: 'about',
                title: 'About us',
                header: 'About our company',
                content: 'Content of the about page of the site'
            },
            {
                id: 3,
                url: 'contact',
                title: 'Contact',
                header: 'Contact us',
                content: 'Content of the contact page of the site'
            }
        ];


        var factory = {};

        factory.getQuestions = function() {
            return questions;
        };

        factory.getQuestion = function(questionId) {
            for(var i= 0, len=questions.length; i< len; i++) {
                if(questions[i].id === parseInt(questionId)) {
                    return questions[i];
                }
            }
            return {};
        };

        factory.getPage = function(url) {
            for(var i = 0, len = pages.length; i<len; i++) {
                if(pages[i].url === url) {
                    return pages[i];
                }
            }
            return {};
        };

        return factory;
    };

    angular.module('simpleSiteApp')
        .factory('questionsFactory', questionsFactory);

})();