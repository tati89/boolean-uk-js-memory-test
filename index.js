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

function userPromptNumbers() {
  answerNumbers = [];
  for (let i = 1; i <= 4; i++) {
    number = Number(prompt(`Please enter ${i} number:`));
    answerNumbers.push(number);
  }
  return answerNumbers;
}

randomNumbers();
setTimeout(readyToPlay, 2000);
setTimeout(userPromptNumbers, 15000);
