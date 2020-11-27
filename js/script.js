'use strict';

function getRandomInt() {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1 )) + min; //получение случайного числа в заданном интервале
}

const botNum = getRandomInt();

function startBot() { 
    let userNum = prompt('Угадай число от 1 до 100');

    function guessNum() {
        if ( userNum === null) {
            alert("Игра окончена");
        } else {
            if (Number.isInteger(+userNum) !== true) {
                userNum = prompt("Введи число!");
                return(guessNum());
            } else if (+userNum > botNum) {
                userNum = prompt("Загаданное число меньше");
                return(guessNum());
            } else if (+userNum < botNum) {
                userNum = prompt("Загаданное число больше");
                return(guessNum());
            } else if (+userNum === botNum) {
                alert("Поздравляю, Вы угадали!");
            } 
        }
    
    }
    guessNum();
}
startBot();

    