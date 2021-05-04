alert("Let's play!");
function randomNumbers() {
  alertNumbers = "Memorise numbers" + "\n";
  numbers = [];
  for (let i = 1; i <= 4; i++) {
    number = Math.floor(Math.random() * 100) + 1;
    alertNumbers += `Number ${[i]}:  ` + number.toString() + " " + "\n";
    numbers.push(number);
  }
  alert(alertNumbers);
  return numbers;
}

function readyToPlay() {
  alert("Ready? Press enter and type the first number in 15 seconds");
}
const answerNumbers = [];
function userPromptNumbers() {
  for (let i = 1; i <= 4; i++) {
    number = Number(prompt(`Please enter ${i} number:`));
    console.log(number);
    answerNumbers.push(number);
  }
  console.log(answerNumbers);
  checkGuesses();
}

function checkGuesses() {
  let counter = 0;
  for (let i = 0; i < computerNumbers.length; i++) {
    const number = computerNumbers[i];
    const guess = answerNumbers[i];
    if (guess === number) {
      counter += 1;
    }
  }
  alert(`You guessed ${counter} right`);
}

computerNumbers = randomNumbers();
console.log(computerNumbers);
setTimeout(readyToPlay, 2000);
setTimeout(userPromptNumbers, 15000);
