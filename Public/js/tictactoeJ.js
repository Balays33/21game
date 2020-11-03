console.log("tictactoe Java");

function click1(){
    console.log("click1"); 
    document.getElementById("1button").innerHTML = "O";
    //document.getElementById("1button").style.color = "red";
    document.getElementById("1button").setAttribute( "class", "btn btn-warning" );
}

function click3(){
    console.log("click3"); 
    //document.getElementById("1button").innerHTML = "O";
    //document.getElementById("1button").style.color = "red";
    //document.getElementById("1button").setAttribute( "class", "btn btn-warning" );
    var valueN = document.getElementById("position3").value;
    console.log(valueN);
    document.getElementById("position3").value = 22;

    player_choice(valueN,board)


}


var test_board = ['#','X','O','X','O','X','O','X','O','X'];
var board = ['#','1','2','3','4','5','6','7','8','9'];
 
 
 //Step 2: Write a function that can take in a player input and assign their marker as 'X' or 'O'. Think about using while loops to continually ask until you get a correct answer.
 function player_input(){
    var marker = '';


    while (marker !== 'X' || marker !== 'O'){
        marker = document.getElementById("inputpanel").value.toUpperCase();
        console.log(marker);
       

        if (marker == 'X'){
            console.log("X-O");
            return ('X','O')
        } else{
            console.log("O-X");
            return ('O','X')
        }    

    }
 }

 //Step 3: Write a function that takes in the board list object, a marker ('X' or 'O'), and a desired position (number 1-9) and assigns it to the board.
 function place_marker(board, marker, position){
    console.log(position);
    board[position] = marker;
 }

 //TEST Step 3: run the place marker function using test parameters and display the modified board
 function test(){
 //place_marker(board,'$',8);
 //console.log(board);
 //win_check(test_board,'X');
 //console.log(win_check(test_board,'X'));
 full_board_check(board);
 console.log(full_board_check(board));
 }
 ///////////////////////////////////////

//Step 4: Write a function that takes in a board and a mark (X or O) and then checks to see if that mark has won. 
 function win_check(board,mark){
    
    return ((board[7] == mark && board[8] == mark && board[9] == mark) || // across the top
    (board[4] == mark && board[5] == mark && board[6] == mark) || // across the middle
    (board[1] == mark && board[2] == mark && board[3] == mark) || // across the bottom
    (board[7] == mark && board[4] == mark && board[1] == mark) || // down the middle
    (board[8] == mark && board[5] == mark && board[2] == mark) || // down the middle
    (board[9] == mark && board[6] == mark && board[3] == mark) || // down the right side
    (board[7] == mark && board[5] == mark && board[3] == mark) || // diagonal
    (board[9] == mark && board[5] == mark && board[1] == mark)) // diagonal
}

//Step 5: Write a function that uses the random module to randomly decide which player goes first. You may want to lookup random.randint() Return a string of which player went first.


function choose_first(){
    var a = Math.floor(Math.random() * 2);
    console.log(a);
    if (a==0){
        return "Player 1"
    }
    if (a==1){
        return "Player 2"
    }

}
//console.log(choose_first());

//Step 6: Write a function that returns a boolean indicating whether a space on the board is freely available.

function space_check(board, position){
    console.log(board);

    return board[position] == ' ';
}

// Step 7: Write a function that checks if the board is full and returns a boolean value. True if full, False otherwise.
function full_board_check(board){
    var i;
    for(i =1;i<10;i++){
        if (space_check(board,i)){
            return false;
        } else {
        return true;
        }

    }
}

//*Step 8: Write a function that asks for a player's next position (as a number 1-9) and then uses the function from step 6 to check if its a free position. If it is, then return the position for later use. *
function player_choice(valueN,board){
    console.log(board);
    var position = valueN;
    console.log(position);
    space_check(board, position);

    return position;
}


/*
def player_choice(board):
    position = 0
    
    while position not in [1,2,3,4,5,6,7,8,9] or not space_check(board, position):
        position = int(input('Choose your next position: (1-9) '))
        
    return position
    */

   function myFunction() {
    document.getElementById("myCheck").click();
    var testnumber = document.getElementById("myCheck").value;
    console.log(testnumber);

  } 

  //Step 9: Write a function that asks the player if they want to play again and returns a boolean True if they do want to play again.

function replay(){
    var cyle = true;
    while (cyle){
        console.log("Do you want to play again ?");
        var re_game = document.getElementById("yesOrno").value;
        if (re_game == "yes" || re_game == "no"){
            if (re_game == "yes"){
                return true
            } 
            if (re_game == "no"){
                return false;
            }
            else {cyle = false;}
            
        }
    }

}

  /*
  def replay():
    cyle = True
    while cyle:
        print("Do you want to play again ?")
        re_game = input(" yes or no")
        if re_game == 'yes' or re_game == 'no':
            if re_game == 'yes':
                return True
            elif re_game == 'no':
                return False   
            cyle = False
  */