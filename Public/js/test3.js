if (document.querySelector)
{
	document.documentElement.classList.add('js');
	
    //var ticTacToeElement = document.querySelector('#tic-tac-toe');
    var ticTacToeElement = document.querySelector('#tic-tac-toe');
	var isPlayerXMoving = true;
	var board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	ticTacToeElement.addEventListener('click', ticTacToeClickHandler);
}

function ticTacToeClickHandler(event)
{
	var targetElement = event.target;
	var parentElement = targetElement.parentElement;
	var row, column;
	
	if (targetElement.nodeName == 'BUTTON')
	{
		row = parseInt(targetElement.dataset.row);
		column = parseInt(targetElement.dataset.column);
		
		board[row][column] = isPlayerXMoving ? 1 : -1;
		
		parentElement.innerHTML = isPlayerXMoving ? 'x' : 'o';
		parentElement.classList.add(isPlayerXMoving ? 'piece-x' : 'piece-o');
		
		if (gameOver())
		{
			alert('Game over. ' + (isPlayerXMoving ? '❌' : '⭕') + ' wins.');
		}
		else
		{
			isPlayerXMoving = !isPlayerXMoving;
		}
	}
}

function gameOver()
{
	var sum;
	
	for (var i = 0; i < 3; i++)
	{
		sum = 0;
		
		for (var j = 0; j < 3; j++)
		{
			sum += board[i][j];
		}
		
		if (Math.abs(sum) == 3)
		{
			return true;
		}
	}
	
	for (var j = 0; j < 3; j++)
	{
		sum = 0;
		
		for (var i = 0; i < 3; i++)
		{
			sum += board[i][j];
		}
		
		if (Math.abs(sum) == 3)
		{
			return true;
		}
	}

	sum = 0;

	for (var i = 0; i < 3; i++)
	{
		sum += board[i][i];
	}

	if (Math.abs(sum) == 3)
	{
		return true;
	}

	sum = 0;

	for (var i = 0; i < 3; i++)
	{
		sum += board[i][2 - i];
	}

	if (Math.abs(sum) == 3)
	{
		return true;
	}

	return false;
}
 