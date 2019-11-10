
randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

function randomNumber(){
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
        document.getElementById("getcloser").innerHTML = "YOU WON";
    }
}

cardnumber = Math.round(Math.random()*28);
console.log(cardnumber);
var sumNumber = 0;

function getNumber(){
    sumNumber = sumNumber + (Math.round(Math.random()*11));
    console.log(sumNumber);
    document.getElementById("yourNumberPlace").innerHTML = sumNumber;
    whoWin(sumNumber);

}

function whoWin(sumNumber){

    console.log("Who Win ");
    if (sumNumber)

}

function restart(){
    sumNumber = 0;
    document.getElementById("yourNumberPlace").innerHTML = sumNumber;
}