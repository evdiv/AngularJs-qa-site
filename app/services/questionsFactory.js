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
                content: 'One must fear the lotus in order to believe the follower of sincere satori.'
            },
            {
                id:2,
                date: '2014-02-15',
                user: 'Monika',
                content: 'Chicory combines greatly with cold chickpeas. '
            },
            {
                id:3,
                date: '2014-04-23',
                user: 'Colin',
                content: 'Holy heavens forgets most shames.'
            },
            {
                id:4,
                date: '2014-04-25',
                user: 'Colin',
                content: 'Where is the rough jolly roger.'
            },
            {
                id:5,
                date: '2014-04-26',
                user: 'Mike',
                content: 'Why does the transporter tremble.'
            },
            {
                id:6,
                date: '2014-04-27',
                user: 'Eugene',
                content: 'With meatloafs drink milk.'
            }

        ];

        var answers = [
            {
                id: 1,
                question_id: 6,
                date: '2014-08-17',
                user: 'Mark',
                content: 'The totality of loving saints is abstruse.'
            },
            {
                id: 2,
                question_id: 3,
                date: '2014-08-19',
                user: 'Mark',
                content: 'Try drying onion porridge decorateed with teriyaki.'
            },
            {
                id: 3,
                question_id: 3,
                date: '2014-08-22',
                user: 'Monika',
                content: 'Try cooking margerine chili varnished with peanuts juice.'
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

        var addAnswers = function (questions, answers) {
            for(var i=0; i < questions.length; i ++) {
                var questionId = questions[i].id;
                questions[i].answers = [];

                for(var j=0; j < answers.length; j++) {
                    if(answers[j].question_id == questionId) {
                        questions[i].answers.push(answers[j]);
                    }
                }
            }
            return questions;
        };

        var factory = {};
        questions = addAnswers(questions, answers);

        factory.getQuestions = function(numberOfQuestions) {
            if(numberOfQuestions == null) {
                return questions;
            } else {
                questions = questions.slice(questions.length - parseInt(numberOfQuestions));
                return questions;
            }
        }

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