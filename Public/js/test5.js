// firebase api setup
console.log("Tic Tac Toe Cloud game ");

// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
    apiKey: "AIzaSyC-n76CAcBmeqZV-GaGgac547YbMl9KYDk",
    authDomain: "test-abafd.firebaseapp.com",
    databaseURL: "https://test-abafd.firebaseio.com",
    projectId: "test-abafd",
    storageBucket: "test-abafd.appspot.com",
    messagingSenderId: "848124501738",
    appId: "1:848124501738:web:96414b6973d3d805758193"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// get elements
const currentPlayerXO  = document.getElementById("currentPlayerXO");
const PrintOutInfo = document.getElementById('PrintOutInfo');
console.log(PrintOutInfo);
const cell_0 = document.getElementById('cell_0');
const cell_1 = document.getElementById('cell_1');
const cell_2 = document.getElementById('cell_2');
const cell_3 = document.getElementById('cell_3');
const cell_4 = document.getElementById('cell_4');
const cell_5 = document.getElementById('cell_5');
const cell_6 = document.getElementById('cell_6');
const cell_7 = document.getElementById('cell_7');
const cell_8 = document.getElementById('cell_8');
let testTurn;
var markednumber;
var counter;
let currentPlayer ;
// create references
const dbGameCloudData = firebase.database().ref("TicTacToeCloudData/Cell_Info");
//Sync object changes
dbGameCloudData.on('value', snap => {
    PrintOutInfo.innerHTML = JSON.stringify(snap.val(), null, 3);
    console.log(snap.val());
    /*
    document.getElementById("cell_0").innerHTML = snap.val().Cell_0;
    document.getElementById("cell_1").innerHTML = snap.val().Cell_1;
    document.getElementById("cell_2").innerHTML = snap.val().Cell_2;
    document.getElementById("cell_3").innerHTML = snap.val().Cell_3;
    document.getElementById("cell_4").innerHTML = snap.val().Cell_4;
    document.getElementById("cell_5").innerHTML = snap.val().Cell_5;
    document.getElementById("cell_6").innerHTML = snap.val().Cell_6;
    document.getElementById("cell_7").innerHTML = snap.val().Cell_7;
    document.getElementById("cell_8").innerHTML = snap.val().Cell_8;
    */
   counter =0;
   var t = snap.val();
   updatemarker(t);
   console.log("markednumber : "+snap.val().markednumber);
   /*
    if (snap.val().markednumber == 0) {
        testTurn = "X";
        console.log("WE are null " + testTurn);
    }
    if (snap.val().markednumber == 1) {
        testTurn = "O";
        console.log("WE are 1 " + testTurn);
    }
    */
    if ((snap.val().markednumber % 2) == 0){
        console.log("print X");
        currentPlayer = "X";
    } else{
        console.log("print O");
        currentPlayer = "O";
    }
    
   
});

function updatemarker(t){
    //console.log(t);
    if(t.Cell_0 == "X" || t.Cell_0 == "O"){
        counter++;
    }
    if(t.Cell_1 == "X" || t.Cell_1 == "O"){
        counter++;
    }
    if(t.Cell_2 == "X" || t.Cell_2 == "O"){
        counter++;
    }
    if(t.Cell_3 == "X" || t.Cell_3 == "O"){
        counter++;
    }
    if(t.Cell_4 == "X" || t.Cell_4 == "O"){
        counter++;
    }
    if(t.Cell_5 == "X" || t.Cell_5 == "O"){
        counter++;
    }
    if(t.Cell_6 == "X" || t.Cell_6 == "O"){
        counter++;
    }
    if(t.Cell_7 == "X" || t.Cell_7 == "O"){
        counter++;
    }
    if(t.Cell_8 == "X" || t.Cell_8 == "O"){
        counter++;
    }
    
    updatecounter(counter);

}

function updatecounter(counter){
    var num = counter
    firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
        markednumber: num,
    });

}

// reset the game data
function resetGameData(Cell_0, Cell_1, Cell_2, Cell_3, Cell_4, Cell_5, Cell_6, Cell_7, Cell_8) {
    firebase.database().ref('TicTacToeCloudData/Cell_Info').set({
        Cell_0: Cell_0,
        Cell_1: Cell_1,
        Cell_2: Cell_2,
        Cell_3: Cell_3,
        Cell_4: Cell_4,
        Cell_5: Cell_5,
        Cell_6: Cell_6,
        Cell_7: Cell_7,
        Cell_8: Cell_8,
        currentPlayerXO: "X",
        markednumber: 0,
    });
}

// cloud index position & setup cloud data
function IndexPositionGameData(clickedCellIndex, currentPlayer) {
    console.log("clickedCellIndex : " + clickedCellIndex);
    console.log("currentPlayer : " + currentPlayer);
    // update the last player sign
    firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
        //Cell_parseInt(clickedCellIndex): currentPlayer,
        currentPlayerXO: currentPlayer,
    });
    // setup the cloud data
    switch (clickedCellIndex) {
        case 0:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_0: currentPlayer,
            });
            break;
        case 1:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_1: currentPlayer,
            });
            break;
        case 2:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_2: currentPlayer,
            });
            break;
        case 3:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_3: currentPlayer,
            });
            break;
        case 4:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_4: currentPlayer,
            });
            break;
        case 5:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_5: currentPlayer,
            });
            break;
        case 6:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_6: currentPlayer,
            });
            break;
        case 7:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_7: currentPlayer,
            });
            break;
        case 8:
            // code block
            firebase.database().ref('TicTacToeCloudData/Cell_Info').update({
                //Cell_parseInt(clickedCellIndex): currentPlayer,
                Cell_8: currentPlayer,
            });
            break;
        default:
        // code block
    }
    
}

///// TEST ////////////////////

console.log("Pull data from Cloud, your code : " );
const upcell_0= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_0');
upcell_0.on('value', snap => {
    //PrintOutInfo.innerHTML = JSON.stringify(snap.val(), null, 3);
    //console.log(snap.val());
    document.getElementById("cell_0").innerHTML = snap.val();   
});
const upcell_1= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_1');
upcell_1.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_1").innerHTML = snap.val();   
});
const upcell_2= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_2');
upcell_2.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_2").innerHTML = snap.val();   
});
const upcell_3= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_3');
upcell_3.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_3").innerHTML = snap.val();   
});
const upcell_4= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_4');
upcell_4.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_4").innerHTML = snap.val();   
});
const upcell_5= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_5');
upcell_5.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_5").innerHTML = snap.val();   
});
const upcell_6= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_6');
upcell_6.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_6").innerHTML = snap.val();   
});
const upcell_7= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_7');
upcell_7.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_7").innerHTML = snap.val();   
});
const upcell_8= firebase.database().ref('TicTacToeCloudData/Cell_Info/Cell_8');
upcell_8.on('value', snap => {
    //console.log(snap.val());
    document.getElementById("cell_8").innerHTML = snap.val();   
});
/*
function syncUpdate() {
    //Sync object changes
    dbGameCloudData.on('value', snap => {
        PrintOutInfo.innerHTML = JSON.stringify(snap.val(), null, 3);
        console.log(snap.val());

        document.getElementById("cell_0").innerHTML = snap.val().Cell_0;
        document.getElementById("cell_1").innerHTML = snap.val().Cell_1;
        document.getElementById("cell_2").innerHTML = snap.val().Cell_2;
        document.getElementById("cell_3").innerHTML = snap.val().Cell_3;
        document.getElementById("cell_4").innerHTML = snap.val().Cell_4;
        document.getElementById("cell_5").innerHTML = snap.val().Cell_5;
        document.getElementById("cell_6").innerHTML = snap.val().Cell_6;
        document.getElementById("cell_7").innerHTML = snap.val().Cell_7;
        document.getElementById("cell_8").innerHTML = snap.val().Cell_8;

    });
}
*/
/////////////////////////////////


const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
//let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    // cloud index position & setup cloud data
    IndexPositionGameData(clickedCellIndex, currentPlayer);
}

function handlePlayerChange() {
    var position;
    // get the last sign from the cloud
    dbGameCloudData.on('value', snap => {
        console.log("get the sign fromcloud");
        console.log(snap.val().currentPlayerXO);
        position = snap.val().currentPlayerXO;

    });
    console.log("position : "+position);
    if (position == "X"){
        currentPlayer = "O";
        console.log("Should be O");
    }
    if (position == "O"){
        currentPlayer = "X";
    }
    //currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    //console.log(clickedCellIndex);

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    // cloud data setup
    resetGameData("", "", "", "", "", "", "", "", "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);