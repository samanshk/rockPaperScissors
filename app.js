const game = () => {
    let pScore = 0;
    let cScore = 0;    
    
    //Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const score = document.querySelector('.score');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            score.classList.add('fadeIn');
        });
    }

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions = ['Rock', 'Paper', 'Scissors'];
        const hands  = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        options.forEach(option => {
            option.addEventListener('click', function () {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Calling compare hands function
                    compareHands(this.textContent, computerChoice);
    
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    
                }, 2000);

                //Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
                
            });
        });
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        //Check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }

        //Check for rock
        if(playerChoice === 'Rock') {
            if(computerChoice === 'Paper'){
                winner.textContent = 'You lost';
                cScore++;
            } else {
                winner.textContent = 'You won';
                pScore++;
            }
            updateScore();
            return;
        }

        //Check for paper
        if(playerChoice === 'Paper') {
            if(computerChoice === 'Scissors'){
                winner.textContent = 'You lost';
                cScore++;
            } else {
                winner.textContent = 'You won';
                pScore++;
            }
            updateScore();
            return;
        }

        //Check for scissors
        if(playerChoice === 'Scissors') {
            if(computerChoice === 'Rock'){
                winner.textContent = 'You lost';
                cScore++;
            } else {
                winner.textContent = 'You won';
                pScore++;
            }
            updateScore();
            return;
        }
    }

    //Calling all the inner functons
    startGame();
    playMatch();
}

game();