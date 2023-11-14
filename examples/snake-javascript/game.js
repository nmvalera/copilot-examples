// Define the canvas and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the game variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = "right";
let score = 0;
let obstacles = [];

// Define function createRandomObstacles that creates random obstacles in the game
// It takes a difficulty parameter that defines how many obstacles to create
function createRandomObstacles(difficulty) {
  for (let i = 0; i < difficulty; i++) {
    let x = Math.floor(Math.random() * canvas.width / 10);
    let y = Math.floor(Math.random() * canvas.height / 10);
    let obstacle = { x: x, y: y };
    obstacles.push(obstacle);
  }
}

// Define function drawObstacles that draws the obstacles
function drawObstacles() {
  ctx.fillStyle = "black";
  for (let i = 0; i < obstacles.length; i++) {
    ctx.fillRect(obstacles[i].x * 10, obstacles[i].y * 10, 10, 10);
  }
}

// Define the game functions
function drawSnake() {
  ctx.fillStyle = "green";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * 10, snake[i].y * 10, 10, 10);
  }
}

// Define function drawFood that draws the food
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
}

function moveSnake() {
  let head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
  }
  if (head.x < 0) {
    head.x = canvas.width / 10 - 1;
  }
  if (head.x > canvas.width / 10 - 1) {
    head.x = 0;
  }
  if (head.y < 0) {
    head.y = canvas.height / 10 - 1;
  }
  if (head.y > canvas.height / 10 - 1) {
    head.y = 0;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * canvas.width / 10),
      y: Math.floor(Math.random() * canvas.height / 10),
    };
  } else {
    snake.pop();
  }

  // check if the snake has hit an obstacle
  for (let i = 0; i < obstacles.length; i++) {
    if (head.x === obstacles[i].x && head.y === obstacles[i].y) {
      alert("Game over!");
      location.reload();
    }
  }
}

function updateScore() {
  document.getElementById("score").innerHTML = score;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the obstacles
  drawObstacles();

  // draw the snake and the food
  drawSnake();
  drawFood();

  moveSnake();
  updateScore();
}

// Listen for arrow key presses
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
  }
});

// define function startGame that starts the game
// - prompts the user for the difficulty
// - run the game loop every 100ms
function startGame() {
  let difficulty = prompt("Enter a difficulty level (1-10)");
  createRandomObstacles(difficulty);
  setInterval(gameLoop, 100);
}

// start the game
startGame();