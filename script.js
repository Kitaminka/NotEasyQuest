const game = document.getElementById('game');
const menu = document.getElementById('menu');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const text = document.getElementById('text');
const gameEvents = [
    {
        gameText: '<p>Вы стоите в тёмной комнате. Перед вами дверь. Справа от вас окно.</p>',
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
    text.innerHTML = gameEvents[currentEvent].gameText;
}
