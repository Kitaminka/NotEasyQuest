const game = document.getElementById('game');
const menu = document.getElementById('menu');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const text = document.getElementById('text');
const gameEvents = [
    {
        gameText: 'Вы стоите в тёмной комнате. Перед вами дверь. Справа от вас окно.',
        firstButtonText: 'Открыть дверь.',
        firstButtonResult: 1,
        secondButtonText: 'Ждать помощи.',
        secondButtonResult: 2,
        thirdButtonText: 'Вылезти в окно.',
        thirdButtonResult: 3,
    },
];
let currentEvent = 0;


function gameStart() {
    menu.style.display = 'none';
    game.style.display = 'flex';
    updateGameState();
}
function updateGameState() {
    text.innerHTML = `<h1>${gameEvents[currentEvent].gameText}</h1>`;
    firstButton.innerHTML = `<h2>${gameEvents[currentEvent].firstButtonText}</h2>`;
    secondButton.innerHTML = `<h2>${gameEvents[currentEvent].secondButtonText}</h2>`;
    thirdButton.innerHTML = `<h2>${gameEvents[currentEvent].thirdButtonText}</h2>`;
}
