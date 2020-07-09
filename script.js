let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let Box = 32;
let snake = [];
snake[0] = {
    x: 8 * Box,
    y: 8 * Box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * Box, 16 * Box);
}
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle="green"
        context.fillRect(snake[i].x, snake[i].y, Box, Box);
    }
}
criarBG();
criarCobrinha();