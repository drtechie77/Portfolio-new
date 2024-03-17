function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return alphabet[rand(0, alphabet.length - 1)];
}

function getRandomWord(word) {
  const text = word.textContent; // Use textContent for wider compatibility
  let finalWord = '';

  for (let i = 0; i < text.length; i++) {
    finalWord += text[i] === ' ' ? ' ' : getRandomLetter();
  }

  return finalWord;
}

const wordElement = document.querySelector('p'); // Use const for consistent reference
let intervalId = null; // Variable to hold the interval ID
let canChange = false;
let globalCount = 0;
let count = 0;
const INITIAL_WORD = wordElement.textContent; // Use textContent for wider compatibility
let isRunning = false;

function init() {
  if (isRunning) {
    return;
  }

  isRunning = true; // Use a more descriptive variable name
  const randomWord = getRandomWord(wordElement);
  wordElement.textContent = randomWord;

  intervalId = setInterval(() => {
    let finalWord = '';
    for (let i = 0; i < INITIAL_WORD.length; i++) {
      if (i <= count && canChange) {
        finalWord += INITIAL_WORD[i];
      } else {
        finalWord += getRandomLetter();
      }
    }
    wordElement.textContent = finalWord;

    if (canChange) {
      count++;
    }

    if (globalCount >= 20) {
      canChange = true;
    }

    if (count >= INITIAL_WORD.length) {
      clearInterval(intervalId);
      count = 0;
      canChange = false;
      globalCount = 0;
      isRunning = false;
    }

    globalCount++;
  }, 50);
}

// Add event listener only once when the script is loaded
wordElement.addEventListener('mouseenter', init, { once: true }); // Use { once: true } to prevent infinite calls on mouseenter
