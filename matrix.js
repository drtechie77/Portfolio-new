// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas width and height to adjust to the viewport
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Create an array of characters
const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// Calculate the number of columns based on the canvas width for better responsiveness (adjust size as needed)
const columns = Math.floor(canvasWidth / 15);

// Initialize the y positions of the columns
const yPositions = [];

for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

// Update the matrix animation
function updateMatrix() {
  // Set the background color with transparency for a smoother effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Set the text color and font
  ctx.fillStyle = "green";
  ctx.font = "12px Consolas, monospace";  // Using a monospace font for better alignment

  // Loop through each column
  for (let i = 0; i < columns; i++) {
    // Select a random character from the array
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the y position of the current column
    const y = yPositions[i];

    // Draw the character at the current position
    ctx.fillText(character, i * (canvasWidth / columns), y); // Adjust spacing based on column width

    // Move the column down by a random speed for a more dynamic effect
    yPositions[i] += Math.random() * 2 + 5;  // Adjust speed as needed

    // Reset the position if it reaches the bottom of the canvas
    if (yPositions[i] > canvasHeight) {
      yPositions[i] = 0;
    }
  }
}

// Render the matrix animation
function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

// Start the animation
renderMatrix();
