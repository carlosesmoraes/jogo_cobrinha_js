let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let Box = 32;

function criarBG(){
    context.fillStyle = "lightscreen";
    context.fillRect(0, 0, 16 * Box, 16 * Box)
}
criarBG()