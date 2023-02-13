import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = segment.y;
    foodElement.style.gridColumnStart = segment.x;
    foodElement.classList.add("snake");
    gameBoard.appendChild(foodElement);
  });
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
