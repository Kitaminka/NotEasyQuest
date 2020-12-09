const game = document.getElementById('game');
const gameOverScreen = document.getElementById('gameOverScreen');
const gameOverText = document.getElementById('gameOverText')
const menu = document.getElementById('menu');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const gameText = document.getElementById('gameText');
const gameEvents = [
    {
        gameText: 'You are standing in a dark room. The door is in front of you. To your right is a window.',
        firstButtonText: 'Open the door',
        firstButtonResult: 1,
        secondButtonText: 'Wait for help',
        secondButtonResult: 2,
        thirdButtonText: 'Get out the window',
        thirdButtonResult: 3,
    },
    {
        gameText: 'You are in a room with no windows or doors. There is a mobile phone in the middle of the room.',
        firstButtonText: 'Nothing to do',
        firstButtonResult: 1,
        secondButtonText: 'Return to the previous room',
        secondButtonResult: 0,
        thirdButtonText: 'Pick up the phone',
        thirdButtonResult: 4,
    },
    {
        isGameOver: true,
        text: 'You died without waiting for help.',
    },
    {
        isGameOver: true,
        text: 'You climbed out the window, jumped out, and began to fall. You passed out in the air.',
    },
    {
        isGameOver: true,
        text: 'You picked up the phone, but you were struck by a strong electric shock and died on the spot. Apparently, the phone was broken.'
    }
];
let currentEvent = 0;

function gameStart() {
    currentEvent = 0
    gameOverScreen.style.display = 'none';
    menu.style.display = 'none';
    game.style.display = 'flex';
    updateGameState();
}
function updateGameState() {
    if (gameEvents[currentEvent].isGameOver) {
        gameOver(gameEvents[currentEvent].text);
    } else {
        gameText.innerHTML = `<h1>${gameEvents[currentEvent].gameText}</h1>`;
        firstButton.innerHTML = `<h2>${gameEvents[currentEvent].firstButtonText}</h2>`;
        secondButton.innerHTML = `<h2>${gameEvents[currentEvent].secondButtonText}</h2>`;
        thirdButton.innerHTML = `<h2>${gameEvents[currentEvent].thirdButtonText}</h2>`;
    }
}
function firstAction() {
    currentEvent = gameEvents[currentEvent].firstButtonResult;
    updateGameState();
}
function secondAction() {
    currentEvent = gameEvents[currentEvent].secondButtonResult;
    updateGameState();
}
function thirdAction() {
    currentEvent = gameEvents[currentEvent].thirdButtonResult;
    updateGameState();
}
function gameOver(text) {
    game.style.display = 'none';
    gameOverScreen.style.display = 'flex';
    gameOverText.innerHTML = `<h1>${text}</h1>`;
}
