const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

// Snake class
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }

  draw() {
    ctx.fillStyle = "black";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, 10, 10);
    }

    ctx.fillRect(this.x, this.y, 10, 10);
  }

  update() {
    if (this.x > canvas.width) {
        this.x = 0;
    }
    if (this.y > canvas.height) {
        this.y = 0;
    }
    if (this.x < 0) {
        this.x = canvas.width;
    }
    if (this.y < 0) {
        this.y = canvas.height;
    }
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed * 10;
    this.y += this.ySpeed * 10;
  }

  changeDirection(direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = 1;
        break;
      case "Left":
        this.xSpeed = -1;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = 1;
        this.ySpeed = 0;
        break;
    }
  }

  eat() {
    this.total++;
    score++;
  }
}

// Instantiate the snake
const snake = new Snake();

// Game loop
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.update();
  
  snake.draw();
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);
}

// Handle arrow key presses
document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 37:
        snake.changeDirection("Left");
        break;
      case 38:
        snake.changeDirection("Up");
        break;
      case 39:
        snake.changeDirection("Right");
        break;
      case 40:
        snake.changeDirection("Down");
        break;
    }
  });

// Create a food object
class Food {
constructor() {
this.x;
this.y;
}

draw() {
ctx.fillStyle = "red";
ctx.fillRect(this.x, this.y, 10, 10);
}

// Generate random coordinates for the food
randomize() {
this.x = Math.floor(Math
.random() * canvas.width / 10) * 10;
this.y = Math.floor(Math.random() * canvas.height / 10) * 10;
}
}

const food = new Food();
food.randomize();

// check for collision with food
function checkCollision() {
if (snake.x === food.x && snake.y === food.y) {
snake.eat();
food.randomize();
}
}

// update function to include collision check
function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
snake.update();
snake.draw();
food.draw();
checkCollision();
ctx.fillStyle = "white";
ctx.font = "10px Arial";
ctx.fillText(`Score: ${score}`, 10, 30);
}
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", function() {
  setInterval(update, 120);
});

startButton.addEventListener("click", function(){
    startButton.style.display = "none";
});