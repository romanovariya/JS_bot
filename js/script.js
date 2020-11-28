'use strict';

function getRandomInt() {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1 )) + min; //получение случайного числа в заданном интервале
}

function startBot(number, attempt) { 
    let res = true;
    let userNum;
    const restart = attempt;
    
    return function guessNum() {
        if (res === true && attempt === restart) {
            userNum = prompt('Угадай число от 1 до 100');
        } else if (res === true && attempt === 0) {
            attempt = restart;
            userNum = prompt('Угадай число от 1 до 100');
        }
        if (attempt === 1) {
            // attempt--;
            res = confirm("Попытки закончились, хотите сыграть еще?");
            attempt = restart;
            return(guessNum());
        }
        if ( userNum === null || res === false) {
            alert("Игра окончена");
        } else {
            if (Number.isInteger(+userNum) !== true && attempt > 0) {
                userNum = prompt("Введи число!");
                return(guessNum());
            } else if (+userNum > number && attempt > 0) {
                attempt--;
                userNum = prompt("Загаданное число меньше, осталось попыток " + attempt);
                return(guessNum());
            } else if (+userNum < number && attempt > 0) {
                attempt--;
                userNum = prompt("Загаданное число больше, осталось попыток " + attempt);
                return(guessNum());
            } else if (+userNum === number && attempt > 0) {
                res = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                attempt = restart;
                return(guessNum());
            }
        }
    };
}
const bot = startBot(getRandomInt(), 10);
bot();

    