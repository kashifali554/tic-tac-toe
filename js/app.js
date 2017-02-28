console.log("sanity check");
// wait for the DOM to finish loading
	// var value;
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  	//Variable counter to track the turns of playerOne "X" and "O"
  	var counter = 0;

  	//an array to check (or turn the box to true), so the second player cannot (click) or claim this box.
  	var boardArr = [false, false, false, false, false, false, false, false, false];

  	//creating an empty arry to keep track of the values of box
  	var value = [];
  	//basic logic functions to announce winner.
		//take out argument here since you are manipulating a global variable.
		//also logic is not quite correct - with this change, now any occupancy of three in a row etc
		//is a win. a little logic tweaking should fix this, see below
  	function isWinner() {
  		if (value[0] === "X" && value[1] ==== "X" && value[2] === "X" || //fix this for the rest...
	    	value[3] === "X" && value[4] === "X" && value[5] === "X" ||
	    	value[6] && value[7] && value[8] === "X" ||
	    	value[0] && value[3] && value[6] === "X" ||
	    	value[1] && value[4] && value[7] === "X" ||
	    	value[3] && value[6] && value[8] === "X" ||
	    	value[2] && value[4] && value[7] === "X" ||
	    	value[0] && value[4] && value[8] === "X" ){
    		alert("Player One Won the Game");
		} else if 	(value[0] && value[1] && value[2] === "O" ||
		    		value[3] && value[4] && value[5] === "O" ||
			    	value[6] && value[7] && value[8] === "O" ||
			    	value[0] && value[3] && value[6] === "O" ||
			    	value[1] && value[4] && value[7] === "O" ||
			    	value[3] && value[6] && value[8] === "O" ||
			    	value[2] && value[4] && value[7] === "O" ||
			    	value[0] && value[4] && value[8] === "O"){
        	alert("Player Two wins")
    	} else {
        	// alert ("Game Draw, play again");
    	}
  	}


  	//created a jquery variable to grab the box from html document with the id of box.
	var $boxOne = $('#boxOne');
		//For Now using this variable to track claim on box.
		// boxOne = false;
		//creating a value to keep track of value of variable to decide the winner.


		//Creating an event on click, click will trigger an event function.
		$boxOne.on('click', function handleClick() {
			//This line will check the variable state, if it's false. it will trigger anoter if statment.
			if (boardArr[0] === false){
				if(counter % 2 === 0){ //This if statment will check counter, if it's devisiable by 2, it means it's player One.
					//This line will add text "X" on the #boxOne and also a class X
					$boxOne.text("X").addClass( "X" );
					value.push("X");
					// value = "X";
					// $boxOne.addClass( "X" );
				} else if (counter % 2 === 1){ //if counter is devisiable by 2, it means it's "O" or second player turn
					$boxOne.text("O").addClass( "O" ) //This line will add text "O" to #boxOne
					value.push("O");
					// $boxOne.addClass( "O" ) //This line will add class "O" to boxOne
				}
				boardArr[0] = true; //After if/else completes. We change the value to true; So, if a player clicks again, first If value will be true and that will take click event to first else statment (That will alert user that his box is already taken).
				counter++; // before exiting the second if/else statment we change counter to keep track of player turns ("X" and "O");
				console.log(counter, boardArr[0]);
				isWinner();
				//second if/else statment ends here and complets it's operation of tracking turns with counter variable and adding text and classes of "X" "O" to #boxOne. Also changing the value of boxOne and counter value.
			} else {
				//If player clicks again, we will remind him that box One is already taken (boxOne = true;)
				alert("box already taken, try another box");
			}
		});

	var $boxTwo = $('#boxTwo');
		// boxTwo = false;
		$boxTwo.on('click', function handleClick() {
			if (boardArr[1] === false){
				if(counter % 2 === 0){
					$boxTwo.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxTwo.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[1] = true;
				counter++;
				console.log(counter, boardArr[1]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});

	var $boxThree = $('#boxThree')

		$boxThree.on('click', function handleClick() {
			if (boardArr[2] === false){
				if(counter % 2 === 0){
					$boxThree.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxThree.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[2] = true;
				counter++;
				console.log(counter, boardArr[2]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});

	var $boxFour = $('#boxFour')

		$boxFour.on('click', function handleClick() {
			if (boardArr[3] === false){
				if(counter % 2 === 0){
					$boxFour.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxFour.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[3] = true;
				counter++;
				console.log(counter, boardArr[3]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});


	var $boxFive = $('#boxFive')
		// boxFive = false;

		$boxFive.on('click', function handleClick() {
			if (boardArr[4] === false){
				if(counter % 2 === 0){
					$boxFive.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxFive.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[4]= true;
				counter++;
				console.log(counter, boardArr[4]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});

	var $boxSix = $('#boxSix')
		// boxSix = false;

		$boxSix.on('click', function handleClick() {
			if (boardArr[5] === false){
				if(counter % 2 === 0){
					$boxSix.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxSix.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[5] = true;
				counter++;
				console.log(counter, boardArr[5]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});


	var $boxSeven = $('#boxSeven')
		// boxSeven = false;

		$boxSeven.on('click', function handleClick() {
			if (boardArr[6] === false){
				if(counter % 2 === 0){
					$boxSeven.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxSeven.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[6] = true;
				counter++;
				console.log(counter, boardArr[6]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});

	var $boxEight = $('#boxEight');
		// boxEight = false;

		$boxEight.on('click', function handleClick() {
			if (boardArr[7] === false){
				if(counter % 2 === 0){
					$boxEight.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxEight.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[7] = true;
				counter++;
				console.log(counter, boardArr[7]);
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});

	var $boxNine = $('#boxNine');
		// boxNine = false;

		$boxNine.on('click', function handleClick() {
			if (boardArr[8] === false){
				if(counter % 2 === 0){
					$boxNine.text("X").addClass( "X" );
					value.push("X");
				} else if (counter % 2 === 1){
					$boxNine.text("O").addClass( "O" );
					value.push("O");
				}
				boardArr[8] = true;
				counter++;
				console.log(counter), boardArr[8];
				isWinner();
			} else {
				alert("box already taken, try another box");
			}
		});




// Carefull, put every thing inside this function.
});
