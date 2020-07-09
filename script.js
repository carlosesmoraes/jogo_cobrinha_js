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

function iniciarJogo(){
    criarBG();
    criarCobrinha();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
//movimento da cobrinha
    if(direction == "right") snakeX += Box;
    if(direction == "left") snakeX -= Box;
    if(direction == "up") snakeY += Box;
    if(direction == "down") snakeY -= Box;

    snake.pop();

    let newHead = {
        x: snakeX, 
        y: snakeY,
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);