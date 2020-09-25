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
        gameText: 'Вы стоите в тёмной комнате. Перед вами дверь. Справа от вас окно.',
        firstButtonText: 'Открыть дверь',
        firstButtonResult: 1,
        secondButtonText: 'Ждать помощи',
        secondButtonResult: 2,
        thirdButtonText: 'Вылезти в окно',
        thirdButtonResult: 3,
    },
    {
        gameText: 'Вы полпали в комнату без окно и дверей. По середние комнаты лежит телефон.',
        firstButtonText: 'Побится головой о стену',
        firstButtonResult: 5,
        secondButtonText: 'Вернутся в предыдущую комнату',
        secondButtonResult: 0,
        thirdButtonText: 'Взять телефон',
        thirdButtonResult: 4,
    },
    {
        isGameOver: true,
        text: 'Вы умерли от нехватки жидкости в организме, дождавшись помощи.',
    },
    {
        isGameOver: true,
        text: 'Вы вылезли в окно, выпрыгнули и начали падать. Во время падения вы успели увидеть, что до этого вы находились в огромном летающем кубе, а вокруг ничего нет. Вы провалились в бесконечную темноту.',
    },
    {
        isGameOver: true,
        text: 'Вы подняли телефон, но вас ударило сильным разрядом тока и вы скончались на месте. Выдимо, телефон был сломан.'
    },
    {
        isGameOver: true,
        text: 'Вы заработали сотрясение мозга, а затем умрели.'
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