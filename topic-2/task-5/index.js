import {miniMathLib} from "../task-4";

/**
 * Задача 5 - Нехватка точности
 * Оказалось, что ранее написанная вами функция недостаточно точна : (
 * Верните фукнкцию, которая использьзует число Пи с точностью до 5 знаков, после запятой.
 * Модифицировать miniMathLib из прошлой задачи - запрещено
 */
function accurateAreaCalc() {
    const newConstants = {
        pi: 3.14159
    };

    return miniMathLib.circleArea.bind(newConstants);
}


module.exports.accurateAreaCalc = accurateAreaCalc