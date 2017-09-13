/*function main //console.log(randomNum);//console.log(level++); var level=0;// console.log(level++); var userArr=[];var compArr = [];var arr=[];function one (){$('.one').animate({opacity:.2},50).animate({opacity:1},25);
 $('#one')[0].play();                }
  function two () {$('.two').animate({opacity:.2},50).animate({opacity:1},25);
 $('#two')[0].play();                 }
  function three () {$('.three').animate({opacity:.2},50).animate({opacity:1},25);
   $('#three')[0].play();                 }
  function four () {$('.four').animate({opacity:.2},50).animate({opacity:1},25);
  $('#four')[0].play();                 }
 
  $('.one').click(function (){ userArr.push(1);
    one();
  
                              //continueGame();
                              if(JSON.stringify(userArr)=== JSON.stringify(arr)+JSON.stringify(compArr)){
   levelUp();                            
 continueGame(); 
                                
     setTimeout(game,1000);
    // userArr=[];                           
 // setTimeout(game,1000);                                 
                                                         }
  else {$('h1').text('GAME OVER');
 userArr=[];                compArr=[] ;      }                            
  }) ; 
  $('.two').click(function (){ userArr.push(2);
    two();
  //continueGame();
                              if(JSON.stringify(userArr)=== JSON.stringify(arr)+JSON.stringify(compArr)){
      levelUp();                          
 continueGame();     
     setTimeout(game,1000);
 // setTimeout(game,1000)
                              //  userArr=[];
                                                         }
  else {$('h1').text('GAME OVER');
userArr=[];                compArr=[] ;      }                                
  }) ; 
  $('.three').click(function (){userArr.push(3);
    three();
 // continueGame();
                                if(JSON.stringify(userArr)=== JSON.stringify(arr)+JSON.stringify(compArr)){
                                  levelUp();
 continueGame();     
     setTimeout(game,1000);
  // setTimeout(game,1000);   
  //  userArr=[];                                                     
                                } else {$('h1').text('GAME OVER');
userArr=[];                compArr=[] ;       }                                  
  }) ; 
  $('.four').click(function (){userArr.push(4);
    four();
 // continueGame();
                               if(JSON.stringify(userArr)=== JSON.stringify(arr)+JSON.stringify(compArr)){levelUp();
 continueGame();    
     setTimeout(game,1000); // userArr=[];
   //setTimeout(game,1000)
                                                          }
  else {$('h1').text('GAME OVER');
    userArr=[];                compArr=[] ;
      arr=[]; 
       }
  }) ; 
  
  function game (){
   // dfr = $.Deferred();
    var randomNum = Math.floor(Math.random()*4 +1);
    if (randomNum == 1) {
    compArr=1;
      
      one();
  }
  else if (randomNum==2) {
   compArr=2;
    two();} 
   else if (randomNum==3) {
   compArr=3;  
     three();} 
    else if (randomNum==4) {
   compArr=4;   
      four();} 
       // return true.promise();          }
   // return dfr.promise();             
  }
  
  $('#play').click(function(){ userArr=[];                compArr=[] ; 
    arr=[];
    setTimeout(game,1000);
    $('h1').html('<span class="fa fa-gamepad"> <p> Simon Game By </p> <a href="https://codepen.io/furball/" target="_blank"> Karthik </a> </span>' +
    ' <span class="fa fa-gamepad"> </span>');
      level=1;                $('#levelUp').text('Level 1');  
                              
  });
  
  function continueGame () {
   //dfr = $.Deferred();
    for (var i =0;i<compArr.length;i++){switch (compArr[i]) {
      case 1:
  one();
     arr.push(1);   
   break;
      case 2:
        arr.push(2);  two();
              break;                case 3:
        arr.push(3);  three();
            break;                   case 4:
        arr.push(4); four();                      break;                        }   
                                                          }// return dfr.promise();
    //return true.promise();
    
  }
  function levelUp(){
  level++;
    $('#levelUp').text('Level '+ level);
  };
 /* function clear(){
   compArr = []; 
    compArr = compArr.push.apply(compArr,arr);} */
 // console.log(JSON.stringify(userArr));

//$(document).ready(main);*/
//setTimeout(continueGame,1500);    
   //  setTimeout(game,1000);
//FIGURE OUT HOW TO USE PROMISE WHEN DONE
//jQuery.when(continueGame).done(setTimeout(game,1000));


$(document).ready(function(){ alert('please dont click tiles before starting game ')
 var animate=true;  
  function one (){if(animate===true){$('.one').animate({opacity:.2},25).animate({opacity:1},13);
 $('#one')[0].play();} else if(animate===false) {$('#one')[0].play();}}
  function two () {if(animate===true){$('.two').animate({opacity:.2},25).animate({opacity:1},13);
 $('#two')[0].play();} else if(animate===false) {$('#two')[0].play();}}
  function three () {if(animate===true){$('.three').animate({opacity:.2},25).animate({opacity:1},13);
 $('#three')[0].play();} else if(animate===false) {$('#three')[0].play();}}
  function four () {if(animate===true){$('.four').animate({opacity:.2},25).animate({opacity:1},13);
 $('#four')[0].play();} else if(animate===false) {$('#four')[0].play();}}
                    
var compArr=[];
  
var userArr=[];
  
var level=1;
  
function generate (){
 var randomNum = Math.floor(Math.random()*4 +1);
compArr.push(randomNum);
 console.log('compArr:'+compArr); }
  
$('#play').click(function(){
  console.log('start');
  generate();
  setTimeout(game,1500);
  levelUp();});
  
$('.one').click(function (){ userArr.push(1);
    one();console.log('userArr:'+userArr);if(userArr.length==compArr.length){checker();}});  
$('.two').click(function (){ userArr.push(2);
    two();console.log('userArr:'+userArr);if(userArr.length==compArr.length){checker();}}); 
$('.three').click(function (){ userArr.push(3);
    three();console.log('userArr:'+userArr);if(userArr.length==compArr.length){checker();}});  
$('.four').click(function (){ userArr.push(4);
    four();console.log('userArr:'+userArr);if(userArr.length==compArr.length){checker();}});

function game () {
for (var i =0;i<compArr.length;i++){
(function(i){setTimeout(function(){switch (compArr[i]) {
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
break; } console.log('animate:'+compArr[i]); },1000*i);}(i));
}}
  
      

function levelUp(){$('#levelUp').text('Level '+ level);}

function nxtLevel(){level++;userArr=[];} 
  
function checker(){if(JSON.stringify(userArr)===JSON.stringify(compArr)){
     nxtLevel(); console.log('lvl'+level); levelUp(); generate();  setTimeout(game,1000); } else {$('h1').text('GAME OVER');console.log('game over');}}

$('#reset').click(function(){$('h1').html('<span class="fa fa-gamepad"> <p> Simon Game By </p> <a href="https://codepen.io/furball/" target="_blank"> Karthik </a> </span>' +
    ' <span class="fa fa-gamepad"> </span>'); userArr=[];compArr=[];level=1;levelUp();animate=true;$('.fa-toggle-off').toggleClass('fa-toggle-off fa-toggle-on')});
  
$('#lights').click(function(){$('#lights').toggleClass('fa-toggle-off fa-toggle-on');
if (animate===true) {animate=false;} else if (animate===false) {animate=true;}                          }); 
/*function sleep(delay) { 
    var start = new Date().getTime(); 
    while (new Date().getTime() < start + delay); 
}    */                });

//TIME EVENTS