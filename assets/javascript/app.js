var correctedResponse = 0;
var wrongResponse = 0;

// questions and choices in an object
var questionsAndChoices = {
    1: {
        currentQuestion: 'In "The Little Mermaid," who is NOT one of Triton’s daughter?',
        choice_1: 'Andrina',
        choice_2: 'Adora', //correct
        choice_3: 'Attina',
        choice_4: 'Alana',
        correct: 'Adora',
        image: 'assets/images/littleMermaid.jpg'
    },
    2: {
        currentQuestion: 'Which phrase does the Evil Queen in "Snow White" actually say?',
        choice_1: '“Mirror, mirror, on the wall — who is the fairest of them all?”',
        choice_2: '“Magic mirror, on the wall — who is the fairest one of all?”', //correct
        choice_3: '“Mirror, mirror, on the wall — who is the fairest one of all?”',
        choice_4: '“Magic mirror, on the wall — who is the fairest of them all?”',
        correct: '“Magic mirror, on the wall — who is the fairest one of all?”',
        image: 'assets/images/snowWhite.jpg'
    },
    3: {
        currentQuestion: 'In the movie "Tangled," Flynn Rider is wanted dead or alive according to his wanted poster because he\'s a...',
        choice_1: 'Bandit',
        choice_2: 'Thief', //correct
        choice_3: 'Treasonist',
        choice_4: 'Robber',
        correct: 'Thief',
        image: 'assets/images/tangled.jpg'
    },
    4: {
        currentQuestion: 'In "Sleeping Beauty," what is the name of Maleficent’s pet raven?',
        choice_1: 'Diablo', //correct
        choice_2: 'Malum', 
        choice_3: 'Mauvais',
        choice_4: 'Diable',
        correct: 'Diablo',
        image: 'assets/images/sleepingBeauty.jpg'
    },
    5: {
        currentQuestion: 'Finish the lyrics: “Wouldn\'t you think I\'m the girl, the girl who has everything? Look at this trove, treasures untold…”',
        choice_1: '"It’s full of gizmos and gadgets galore."', 
        choice_2: '"Wonders from all over the world."', 
        choice_3: '"There so much to be known."',
        choice_4: '"How many wonders can one cavern hold?"', //correct
        correct: '"How many wonders can one cavern hold?"',
        image: 'assets/images/ariel.jpg'
    },
    6: {
        currentQuestion: 'In "Frozen," how many brothers does Hans have?',
        choice_1: '7', 
        choice_2: '9', 
        choice_3: '12', //correct
        choice_4: '15',
        correct: '12',
        image: 'assets/images/frozen.jpg'
    },
    7: {
        currentQuestion: 'Finish the lyrics: “My soul is spiraling in frozen fractals all around…”',
        choice_1: '“That wraps my heart in a cold and distant past.”', 
        choice_2: '“And one thought crystallizes like an icy blast.”', //correct
        choice_3: '"Somehow I’ve now been given a new chance."', 
        choice_4: '“And all my problems are far gone in the past.”',
        correct: '“And one thought crystallizes like an icy blast.”',
        image: 'assets/images/elsa.jpg' 
    },
    8: {
        currentQuestion: 'In "Sleeping Beauty," what do the fairies arm Prince Phillip with to fight Maleficent?',
        choice_1: 'Sword of Destiny and Shield of Bravery', 
        choice_2: 'Sword of Righteousness and Shield of Honor', 
        choice_3: 'Sword of Truth and Shield of Virtue', //correct
        choice_4: 'Sword of Valiantness and Shield of Triumph',
        correct: 'Sword of Truth and Shield of Virtue',
        image: 'assets/images/princePhillip.jpg' 
    },
    9: {
        currentQuestion: 'In "Aladdin," what does Aladdin, and a reluctant Abu, give to the poor children to eat?',
        choice_1: 'Dates', 
        choice_2: 'Apples', 
        choice_3: 'Cheese', 
        choice_4: 'Bread', //correct
        correct: 'Bread',
        image: 'assets/images/aladdin.jpg'
    },
    10: {
        currentQuestion: 'What is the name of the organization Bernard and Miss Bianca work in "The Rescuers"?',
        choice_1: 'The Rescue Aid Society', //correct
        choice_2: 'The International Rescue Organization', 
        choice_3: 'The Rescuers', 
        choice_4: 'The Secret Helpers',
        correct: 'The Rescue Aid Society',
        image: 'assets/images/bernardBianca.jpg' 
    },
}

// welcome phase
$('.questionPhaseBackground').hide();
$('.audioPlayer').hide();
$('.summary').hide();
$('#clickHere').click(function(){
    $('.welcomeScreen').fadeOut(1000);
    $('.questionPhaseBackground').fadeIn(2000);
    $('.audioPlayer').fadeIn(2000);
});
var questionPosition = 1;
$('questionPosition').html(questionPosition);
var questionPlace = 1;


// timer //////////////
var time = 30;
var timeInterval = setInterval(timeDecrease, 1000)
function timeDecrease() {
    time--;
}

setTimeout(function() {
    clearInterval(timeInterval);
}, 5000);
///////////////////////
// question and choice phase
var choice1 = $('#choice1');
var choice2 = $('#choice2');
var choice3 = $('#choice3');
var choice4 = $('#choice4');
function enterSummaryPage() {
    setTimeout(function() {
        $('.questionPhaseBackground').hide();
        $('.audioPlayer').hide();
        $('.questionPhase').fadeOut(1000);
        $('.summary').fadeIn(2000);
    }, 1000)
}
function resetClick() {
    $('#choice1').off("click");
    $('#choice2').off("click");
    $('#choice3').off("click");
    $('#choice4').off("click");
    $('#choice1').css('background-color', '');
    $('#choice2').css('background-color', '');
    $('#choice3').css('background-color', '');
    $('#choice4').css('background-color', '');
}
function choices(choicesNumber, questionPlace) {
    if (choicesNumber.html() === questionsAndChoices[questionPlace].correct) {
        choicesNumber.css('background-color', 'green')
        correctedResponse++;
        $('#correctAnswers').html('Incorrect Answers: ' + correctedResponse);
        questionPosition++;
        if (questionPosition === 11) {
            questionPosition = 1;
            enterSummaryPage();
        };
        setTimeout(function() {
            $('#question').fadeOut();
            $('.choices').fadeOut();
        }, 1000);
        setTimeout(function() {
            $('#questionPosition').html(questionPosition).fadeIn();
        },1200)
        setTimeout(function() {
            $('#questionPosition').html(questionPosition);
            resetClick();
            $('#question').fadeIn();
            $('.choices').fadeIn();
            questionPlace++;
            if (questionPlace === 11) {
                questionPlace = 1;
                enterSummaryPage();
            };
            questionPhase(questionPlace);
        }, 1500);
    } else {
        // change choice
        choicesNumber.css('background-color', 'red');
        wrongResponse++;
        $('#incorrectAnswers').html('Correct Answers: ' + wrongResponse);
        questionPosition++;
        if (questionPosition === 11) {
            questionPosition = 1;
            enterSummaryPage();
        };
        setTimeout(function() {
            $('#question').fadeOut();
            $('.choices').fadeOut();
        }, 1000);
        setTimeout(function() {
            $('#questionPosition').html(questionPosition);
            $('#questionPosition').html(questionPosition).fadeIn();
        },1200)
        if ($('#choice1').html() === questionsAndChoices[questionPlace].correct) {
            $('#choice1').css('background-color', 'green')
        }
        if ($('#choice2').html() === questionsAndChoices[questionPlace].correct) {
            $('#choice2').css('background-color', 'green')
        }
        if ($('#choice3').html() === questionsAndChoices[questionPlace].correct) {
            $('#choice3').css('background-color', 'green')
        }
        if ($('#choice4').html() === questionsAndChoices[questionPlace].correct) {
            $('#choice4').css('background-color', 'green')
        }
        setTimeout(function() {
            resetClick()
            questionPlace++;
            if (questionPlace === 11) {
                questionPlace = 1;
                enterSummaryPage();
            };
            $('#question').fadeIn();
            $('.choices').fadeIn();
            questionPhase(questionPlace);
        }, 1500);
    }
}
function questionPhase(questionPlace) {
    $('#question').html(questionsAndChoices[questionPlace].currentQuestion);
    $('#choice1').html(questionsAndChoices[questionPlace].choice_1);
    $('#choice2').html(questionsAndChoices[questionPlace].choice_2);
    $('#choice3').html(questionsAndChoices[questionPlace].choice_3);
    $('#choice4').html(questionsAndChoices[questionPlace].choice_4);
    $('.questionPhaseBackground').css('background-image', 'url(' + questionsAndChoices[questionPlace].image + ')')
    $('#choice1').click(function() {
        choices(choice1, questionPlace);
    })
    $('#choice2').click(function() {
        choices(choice2, questionPlace);
    })
    $('#choice3').click(function() {
        choices(choice3, questionPlace);
    })
    $('#choice4').click(function() {
        choices(choice4, questionPlace);
    })
}
questionPhase(1);

// summary section
$('.summary').css('background-image', 'url("assets/images/summary.jpg")');
$('#restart').on('click', function() {
    $('.summary').fadeOut(1000);
    questionPosition = 0;
    questionPlace = 1;
    wrongResponse = 0;
    correctedResponse = 0;
    $('.questionPhaseBackground').fadeIn(2000);
    $('.questionPhase').fadeIn(2000);
    questionPhase(1);
});









