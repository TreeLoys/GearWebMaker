/* Мат функции */
function angelToRad(angel) {
    return angel * Math.PI / 180;
}
function radToAngel(angel) {
    return angel * 180 / Math.PI;
}
function cos(angelGradus) {
    return Math.cos(angelToRad(angelGradus))
}
function sin(angelGradus) {
    return Math.sin(angelToRad(angelGradus))
}
function radiusAngelToDots(radius, angel){
    /* Высчитывает координаты точки, зная радиус и угол */
    return [radius*cos(angel), radius*sin(angel)]
}
function radiusAngelToDotsByPoint(startPoints, radius, angel){
    /* Высчитывает координаты точки, зная начальную точку, радиус и угол */
    return [radius*cos(angel)+startPoints[0], radius*sin(angel)+startPoints[1]]
}
function leftCircleTouchLine(centerDot, citcleDot, length) {
    /* Находит точку касательной на цетре */

}

function angelBetweenDots(dotA, dotB, inRad=false) {
    /* Высчитывает угол между двумя точками*/
    let x = dotB[0]-dotA[0];
    let y = dotB[1]-dotA[1];
    if (inRad){
        return Math.atan2(x, y);
    }else{
        return Math.atan2(x, y) * Math.PI * 180;
    }
}
function lineLengthByDots(dotA, dotB){
    /* Вычисляет длинну между двумя точками */
    return Math.sqrt(Math.pow(dotB[0] - dotA[0], 2) + Math.pow(dotB[1] - dotA[1], 2))
}