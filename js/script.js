window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function submitAnswers() {
    var total = 10;
    var score = 0;

    //get user input

    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;
    var q6 = document.forms['quizForm']['q6'].value;
    var q7 = document.forms['quizForm']['q7'].value;
    var q8 = document.forms['quizForm']['q8'].value;
    var q9 = document.forms['quizForm']['q9'].value;
    var q10 = document.forms['quizForm']['q10'].value;


    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('You missed question ' + i);
            return false;
        }
    }
    //set answers
    var answers = ['b', 'd', 'c', 'a', 'b', 'c', 'a', 'a', 'a', 'd'];

    //check answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }


    //display results
    var results = document.getElementById('results');

    function checkResult() {
        if (score <= 3) {
            results.innerHTML = '<h3>You have scored<span> ' + score + ' </span>out of<span> ' + total + ' </span>, you need to learn more.</h3>';
        } else if (score >= 4 && score <= 8) {
            results.innerHTML = '<h3>You have scored<span> ' + score + ' </span>out of<span> ' + total + ' </span>, quite good but you are not true polish.</h3>';
        } else if (score > 8) {
            results.innerHTML = '<h3>You have scored<span> ' + score + ' </span>out of<span> ' + total + ' </span>, you are true Polish  guy ! :D</h3>';
        }
        //after submit show correct answers
        var green = document.querySelectorAll('.green');
        var i;
        for (i = 0; i < green.length; i++) {
            green[i].style.color = "#32ff32";
        }
    }
    checkResult();

    alert('You scored ' + score + ' out of ' + total);
    return false;
}
