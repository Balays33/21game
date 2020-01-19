
randomNum = Math.round(Math.random() * 100);
console.log("this is random number"+randomNum);
var step = 0;

function randomNumber(){
    step++;
    var number = document.getElementById("sample2").value;
    console.log(number)
    document.getElementById("getnumber").innerHTML = number;
    console.log("This is working");

    if (number < randomNum){
        document.getElementById("getcloser").innerHTML = "your number smaller that Random Number";
    } 
    if (number > randomNum){
        document.getElementById("getcloser").innerHTML = "your number bigger that Random Number";
    } 
    if (number == randomNum) {
        document.getElementById("getcloser").innerHTML = "YOU WON  you found the number you had to guess: "+step+" times";

    }
}


//cardnumber = Math.round(Math.random()*28);
//console.log(cardnumber);
var sumNumber = 0;
var aiN =0;


function getNumber(){
    if (sumNumber > 21){
        restart();
    }
    sumNumber = sumNumber + (Math.round(Math.random()*11)+1);
    console.log(sumNumber);
    document.getElementById("yourNumberPlace").innerHTML = sumNumber;
    //whoWin(sumNumber);
    if (sumNumber > 21){
        document.getElementById("yourNumberPlace").innerHTML = sumNumber+ "YOU LOST over 21";
        console.log("YOU LOST over 21");
    }

}

function whoWin(sumNumber,aiN){

    console.log("Who Win ");
    document.getElementById("ainumber").innerHTML = aiN;
    if (sumNumber == 21 && aiN <21 ){
        document.getElementById("yourNumberPlace").innerHTML = "Graduation black blackjack";
        console.log("Graduation black blackjack");
        //restart();
    }
    if (sumNumber > 21 ){
        document.getElementById("yourNumberPlace").innerHTML = "YOU LOST over 21";
        console.log("YOU LOST over 21");
        //restart();
    }

    if (aiN == 21 && sumNumber<21 ){
        document.getElementById("yourNumberPlace").innerHTML = "YOU LOST AI has 21";
        console.log("YOU LOST AI has 21");
        //restart();
    }

    if (aiN < 21 && aiN >sumNumber ){
        document.getElementById("yourNumberPlace").innerHTML = "YOU LOST AI closer 21";
        console.log("YOU LOST AI closer 21");
        //restart();
    }
    if (sumNumber < 21 && aiN < sumNumber ){
        document.getElementById("yourNumberPlace").innerHTML = "YOU WON you are closer 21";
        console.log("YOU WON you are closer 21");
        //restart();
    }
    if (sumNumber == aiN ){
        document.getElementById("yourNumberPlace").innerHTML = "YOU LOST it is draw";
        console.log("YOU LOST it is draw");
        //restart();
    }

}

function restart(){
    sumNumber = 0;
    document.getElementById("ainumber").innerHTML = "AI number";
    document.getElementById("yourNumberPlace").innerHTML = sumNumber;
    aiNumber();
    
}

function aiNumber(){
    
    var help=0;
    aiN =0;
      do {
        help = (Math.round(Math.random()*11)+1);
        console.log(help);
        aiN += help;
        //i++;
        
      }
      while (aiN < 15);
      /*
    {
        aiN = aiN + (Math.round(Math.random()*11)+1);
        console.log("AI Number step" +aiN);

    } while(aiN <= 15);
        */
    //aiN= 15;
    //aiN = 8 + (Math.round(Math.random()*11)+1);
    console.log("AI Number" +aiN);
    //document.getElementById("ainumber").innerHTML = aiN;

}



function stop(){

    console.log("yournumber" +sumNumber);
    console.log("AI Number" +aiN);
    whoWin(sumNumber,aiN);
}