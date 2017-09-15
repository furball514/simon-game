$(document).ready(function() {
  var animate = true;

  function one() {
    if (animate === true) {
      $('.one')
        .animate({ opacity: 0.2 }, 25)
        .animate({ opacity: 1 }, 13);
      $('#one')[0].play();
    } else if (animate === false) {
      $('#one')[0].play();
    }
  }

  function two() {
    if (animate === true) {
      $('.two')
        .animate({ opacity: 0.2 }, 25)
        .animate({ opacity: 1 }, 13);
      $('#two')[0].play();
    } else if (animate === false) {
      $('#two')[0].play();
    }
  }

  function three() {
    if (animate === true) {
      $('.three')
        .animate({ opacity: 0.2 }, 25)
        .animate({ opacity: 1 }, 13);
      $('#three')[0].play();
    } else if (animate === false) {
      $('#three')[0].play();
    }
  }

  function four() {
    if (animate === true) {
      $('.four')
        .animate({ opacity: 0.2 }, 25)
        .animate({ opacity: 1 }, 13);
      $('#four')[0].play();
    } else if (animate === false) {
      $('#four')[0].play();
    }
  }

  var compArr = [];
  var userArr = [];
  var level = 1;

  function generate() {
    var randomNum = Math.floor(Math.random() * 4 + 1);
    compArr.push(randomNum);
    console.log('compArr:' + compArr);
  }

  $('#play').click(function() {
    console.log('start');
    $('.btn').prop('disabled', false);
    $('.btn').removeClass('blur');
    generate();
    setTimeout(game, 1500);
    levelUp();
  });

  $('.one').click(function() {
    userArr.push(1);
    one();
    console.log('userArr:' + userArr);
    if (userArr.length == compArr.length) {
      checker();
    }
  });

  $('.two').click(function() {
    userArr.push(2);
    two();
    console.log('userArr:' + userArr);
    if (userArr.length == compArr.length) {
      checker();
    }
  });

  $('.three').click(function() {
    userArr.push(3);
    three();
    console.log('userArr:' + userArr);
    if (userArr.length == compArr.length) {
      checker();
    }
  });

  $('.four').click(function() {
    userArr.push(4);
    four();
    console.log('userArr:' + userArr);
    if (userArr.length == compArr.length) {
      checker();
    }
  });

  function game() {
    for (var i = 0; i < compArr.length; i++) {
      (function(i) {
        setTimeout(function() {
          switch (compArr[i]) {
            case 1:
              one();
              break;
            case 2:
              two();
              break;
            case 3:
              three();
              break;
            case 4:
              four();
              break;
          }
          console.log('animate:' + compArr[i]);
        }, 1000 * i);
      })(i);
    }
  }

  function levelUp() {
    $('#levelUp').text('Level ' + level);
  }

  function nxtLevel() {
    level++;
    userArr = [];
  }

  function checker() {
    if (JSON.stringify(userArr) === JSON.stringify(compArr)) {
      nxtLevel();
      console.log('lvl' + level);
      levelUp();
      generate();
      setTimeout(game, 1000);
    } else {
      $('h1').text('GAME OVER');
      console.log('game over');
    }
  }

  $('#reset').click(function() {
    $('h1').html(
      '<span class="fa fa-gamepad"> <p> Simon Game By </p> <a href="https://furball514.github.io/portfolio/" target="_blank"> Karthik </a> </span>' +
        ' <span class="fa fa-gamepad"> </span>'
    );
    userArr = [];
    compArr = [];
    level = 1;
    levelUp();
    animate = true;
    $('.btn').prop('disabled', true);
    $('.btn').addClass('blur');
    $('.fa-toggle-off').toggleClass('fa-toggle-off fa-toggle-on');
  });

  $('#lights').click(function() {
    $('#lights').toggleClass('fa-toggle-off fa-toggle-on');
    if (animate === true) {
      animate = false;
    } else if (animate === false) {
      animate = true;
    }
  });
});
