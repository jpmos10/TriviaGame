$(document).ready(function() {

            var wins = 0;
            var losses = 0;
            var playerChoice;




            var questions = [

                {

                    question: 'Which character from beavis and Butthead has their own show?';
                    choices: [{
                        text: 'Beavis',
                        correct: false
                    }, {
                        text: 'Butthead',
                        correct: false
                    }, {
                        text: 'Daria',
                        correct: true {
                            text: 'None of the above',
                            correct: false
                        },
                    }]

                        question: 'How long were Jerry Seinfeld and his pals sentenced in the series finale?';
                    choices: [{
                        text: 'Ten',
                        correct: false
                    }, {
                        text: 'Five',
                        correct: false
                    }, {
                        text: 'Life',
                        correct: false {
                            text: 'One',
                            correct: true
                        },
                    }]



                }


            ];
            var correct = 0;
            var incorrect = 0;
            var currentQuestionIndex = 0;
            var token;

            function displayCurrentQuestion() {
                $('#question-question').html(
                    questions[currentQuestionIndex].text
                );

                $('#choices').empty();

                for (var i = 0; i < questions[currentQuestionIndex].choces.length; i++) {
                    var choice = $('<li>');
                    var input = $('<input type="radio" name="choice">');
                    input.attr('value', i);

                    choice.append(questions[currentQuestionIndex].choces[i].text);
                    choice.append(input);
                    $('#choices').append(choice)

                    function newGame();



































                })
