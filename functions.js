const Player = (name, shape) => {
    let score = 0;
    let track = 0;
    return {name, score, shape, track};
};

let playerOne = Player('Player One', 'X');
let playerTwo = Player('Player Two', 'O');

let boxes = document.querySelectorAll('.board-box');
let btnNG = document.querySelector('.new-game');

// starts new game
const newGame = (() => {
    playerOne.track = 0;
    playerTwo.track = 0;
    boxes.forEach((box) => {
        box.innerText = '';
    })
});

// grid patterns for winning
const winCondition = ((player) => {
    if (playerOne.track < 3) {
        return
    };

    if (boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent && boxes[2].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay();
    } else if (boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent && boxes[5].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay();
    } else if (boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent && boxes[8].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay();
    } else if (boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent && boxes[6].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay(); 
    } else if (boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent && boxes[7].textContent != '') {
        player.score++;
        newGame(); 
        playersTextDisplay();
    }  else if (boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent && boxes[8].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay(); 
    }  else if (boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent && boxes[8].textContent != '') {
        player.score++;
        newGame();
        playersTextDisplay(); 
    }  else if (boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent && boxes[6].textContent != '') {
        player.score++;
        newGame(); 
        playersTextDisplay();
    }
});

// Step 1
// determines which player's turn it is
const playerTurn = ((box) => {
    if (box.textContent == "X" || box.textContent == "O") return;

    if (playerOne.track == playerTwo.track) {
        moveInput(box, playerOne);
    } else if (playerOne.track > playerTwo.track)  {
        moveInput(box, playerTwo)
    }
});

// Step 2
// updates player info and checks if there's a winner
// if no one was determined the winner after last move has input then new game restarts
const moveInput = ((box, player) => {
    player.track++;
    box.innerText = `${player.shape}`;
    winCondition(player);
    if (player.track == 5) {
        newGame();
    }
});

boxes.forEach((box) => 
    box.addEventListener('click', () => {
        playerTurn(box)
    })
);

btnNG.addEventListener('click', () => {
    newGame();
});

let oneDisplay = document.querySelector('.player-one');
oneDisplay.addEventListener('click', () => {
    let playerName = prompt('Player Name', 'Name');
    playerOne.name = playerName;
    playersTextDisplay();
})

let twoDisplay = document.querySelector('.player-two');
twoDisplay.addEventListener('click', () => {
    let playerName = prompt('Player Name', 'Name');
    playerTwo.name = playerName;
    playersTextDisplay();
})

const playersTextDisplay = (() => {
    oneDisplay.innerText = `${playerOne.name}\n Score: ${playerOne.score}`;
    twoDisplay.innerText = `${playerTwo.name}\n Score: ${playerTwo.score}`;
})
