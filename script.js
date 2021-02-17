let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//criando o background do jogo
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//criando a cobrinha
function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
//chamando as funções de inicio do jogo
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //posições inicial da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //coordenadas da cobrinha
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //função pop que retira o último elemento
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);