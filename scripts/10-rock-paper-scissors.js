let score = JSON.parse(localStorage.getItem
  ('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    }; //if lhs is truthy it uses lhs but if undefined it uses defuslt object on rhs


    updateScoreElement();


/*
    if (!score){ //if score is set to null after it has been reset so we put a defualt value to avoid null error , !score same as score === null    
      score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
  }
*/  
  
  function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove==='scissors'){
      if(computerMove === 'rock'){
        result = 'You lose.';
      }else if( computerMove=== 'paper'){
        result = 'you win.';
      }else if(computerMove === 'scissors'){
        result = 'Tie.';
      }

    }else if(playerMove==='paper'){
      if(computerMove === 'rock'){
        result = 'You win.';
      }else if( computerMove=== 'paper'){
        result = 'Tie.';
      }else if(computerMove === 'scissors'){
        result = 'You lose.';
      }
      
    }else if(playerMove==='rock'){
      if(computerMove === 'rock'){
        result = 'Tie.';
      }else if( computerMove=== 'paper'){
        result = 'You lose.';
      }else if(computerMove === 'scissors'){
        result = 'You win.';
      }
    }


    if ( result === 'You win.'){
      score.wins += 1;
    }else if(result === 'You lose.'){
      score.losses += 1;
    }else if(result === 'Tie.'){
      score.ties +=1;
    }


    localStorage.setItem('score', JSON.stringify(score)); 
    /*give 2 strings to this method , 1st value is a name and this is how we are going to access value we saved later, 2nd value is the value we want to save 
    local storage can only store strings i.e only supports strings*/

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
  }

  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = `Wins : ${score.wins}, Losses:
      ${score.losses}, Ties:${score.ties}`;


  }
  

  function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';
    
    if(randomNumber >= 0 && randomNumber < 1/3){ //less than used here so comparison does not overlap 
      computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    } else if (randomNumber>= 2/3 && randomNumber < 1){
      computerMove = 'scissors'; //var does not follow rule of scope
    }


    return computerMove; //returns undefine if there is no value , return also ends a function immediately i.e it does not run anything that comes after the return, return also lets us get a value out of a function i.e return 5 will return 5 in console
  }
  