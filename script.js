//COunters for each function
let food = 5;
let bath = 5;
let sleep = 5;
let bored = 5;
let training = 0;
let loop = 1;
//variable for kirby element
var kirby= document.querySelector("#kirby");

//Begin by displaying variables on page
document.getElementById("displayFood").innerHTML = "Food = " + food ;
document.getElementById("displayBath").innerHTML = "Bath = " + bath ;
document.getElementById("displaySleep").innerHTML = "Sleep = " + sleep;
document.getElementById("displayBored").innerHTML = "Boredome = " + bored;
document.getElementById("displayTraining").innerHTML = "Training = " + training ;
//functions for each button
function feed(){
    food++;
    document.getElementById("displayFood").innerHTML = "Food =" + food ;
    document.getElementById("message").innerHTML = "YUM!";
    document.getElementById("message").style.fontSize = "500%";
    
    //Check status
     if(food <= 0 ){
        kirby.src = "angryKirby.png"
    }else {
        kirby.src = "kirbyHappy.png"
    }
    
    
}

function bathe(){
    bath++;
    document.getElementById("displayBath").innerHTML = "Bath = " + bath ;
    document.getElementById("message").innerHTML = "AH! Clean!";
    
    //check status
    if(bath <= 0 ){
        kirby.src = "angryKirby.png"
    } else {
        kirby.src = "kirbyHappy.png"
    }

}

function nap(){
    sleep++;
    kirby.src = "sleepKirby.png"
    document.getElementById("displaySleep").innerHTML = "Sleep = " + sleep;
    document.getElementById("message").innerHTML = "ZzZzZzZ";
    
    //Check status
     if(sleep <= 0 ){
        kirby.src = "angryKirby.png"
    }else {
        kirby.src = "sleepKirby.png"
    }
}

function fun(){
    bored--;
    document.getElementById("displayBored").innerHTML = "Boredome = " + bored;
    document.getElementById("message").innerHTML = "Yay!";
    
    //Check status
    if(bored >= 5){
        kirby.src = "angryKirby.png"
    } else {
        kirby.src = "kirbyHappy.png"
    }
    
}

function train(){
    training++;
    document.getElementById("displayTraining").innerHTML = "Training = " + training ;
    document.getElementById("message").innerHTML = "POWER UP!";
    
    //Check status
    if(training>= 10 && training < 20){
        kirby.src = "kirbyNinja.png"
    } else if(training >= 20  && training < 30){
        kirby.src = "coolKirby.png"
    } else if (training >= 30){
        kirby.src = "sayanKirby.png"
    } else{
        kirby.src = "kirbyHappy.png"
    }
    
}

//functions for decreasing each variable

//Function that increases boredom when called and checks if boredom is enough to get mad
function funLoss(){
    bored++;
    document.getElementById("message").innerHTML = "Getting Bored";
    document.getElementById("displayBored").innerHTML = "Boredome = " + bored;
    
    if(bored > 5){
        kirby.src = "angryKirby.png"
        document.getElementById("message").innerHTML = "I'M BORED!";
    } else {
        kirby.src = "kirbyHappy.png"
    }
}

//Function that decreases bath ability and checks if bath is less than zero when he is angry
function bathLoss(){
    bath--;
    document.getElementById("message").innerHTML = "Getting Dirty!";
    document.getElementById("displayBath").innerHTML = "Bath = " + bath ;
    
    if(bath <= 0 ){
        kirby.src = "angryKirby.png"
        document.getElementById("message").innerHTML = "YO! I'm Dirty!";
    } else {
        kirby.src = "kirbyHappy.png"
    }
}

//Function that decreases food and checks iffood is less than zero when he is angry
function foodLoss(){
    food--;
    document.getElementById("message").innerHTML = "Getting Hungry...";
    document.getElementById("displayFood").innerHTML = "Food = " + food ;
    if(food <= 0 ){
        kirby.src = "angryKirby.png"
        document.getElementById("message").innerHTML = "Don't Talk to me I'm Hungry!";
    }else {
        kirby.src = "kirbyHappy.png"
    }
}

//Function that decreases sleep and checks if sleep is less than zero when he is angry
function sleepLoss(){
    sleep--;
    document.getElementById("message").innerHTML = "Getting Tired";
    document.getElementById("displaySleep").innerHTML = "Sleep = " + sleep;
    
    if(sleep <= 0 ){
        kirby.src = "angryKirby.png"
        document.getElementById("message").innerHTML = "I'm Exausted!";
    }else {
        kirby.src = "kirbyHappy.png"
    }
}

//Function that decreases sleep and checks if sleep is less than zero when he is angry
function skillLoss(){
    training--;
    document.getElementById("displayTraining").innerHTML = "Training = " + training ;
    
    
    if(training <= 10){
        kirby.src = "kirbyHappy.png"
        document.getElementById("message").innerHTML = "I feel out of shape...";
    } else if (training > 10  && training < 20){
        kirby.src = "kirbyNinja.png"
        document.getElementById("message").innerHTML = "Getting out of shape...";
    }
    else if(training >= 20  && training < 30){
        kirby.src = "coolKirby.png"
        document.getElementById("message").innerHTML = "Getting out of shape...";
    } else if (training >= 30){
        kirby.src = "sayanKirby.png"
        document.getElementById("message").innerHTML = "Getting out of shape...";
    } else if (training == -5 ){
        kirby.src ="loseKirby.png"
        document.getElementById("message").innerHTML = "GAME OVER!";
    }else{
        kirby.src = "kirbyHappy.png"
    }
}


//Set a timer rules win a loop before GameOver
//Game over is when food = 0; sleep = 0 bath = 0 Training is -5 Bored = 10

//function timer(){
    //if (food > 0 || sleep > 0 || bath > 0 || training > 0 || bored > 10 ){
    //Bored: Every 5 seconds trigger funLoss();
    setTimeout(funLoss, 5000)
    //Bathe: Every 20 seconds trigger bathLoss();
    setTimeout(bathLoss, 20000)
    //Hunger: Every 7 seconds trigger foodLoss();
    setTimeout(foodLoss, 7000)
    //Nap: Every 30 seconds trigger sleepLoss();
    setTimeout(sleepLoss, 30000)
    //Train: Every 2 seconds trigger skillLoss();
    setTimeout(skillLoss, 2000)
    //} else {
    //    document.getElementById("message").innerHTML = "Game OVER!";
  //  }
//}

//for (var i = 0; i< 1000000; i++){
  //  timer();
//}


//Extension: Set a cap for eating in a certain period of time