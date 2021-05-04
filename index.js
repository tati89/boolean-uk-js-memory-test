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
  alert("Ready to play?");
}

randomNumbers();
let timeoutId = setTimeout(readyToPlay, 15000);
clearTimeout(timeoutId);
