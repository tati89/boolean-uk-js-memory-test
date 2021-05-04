//Prompt user for how many numbers he/she would like to memorise
//store number inside var guessNumber
numberOfGuesses = Number(
  prompt("Ler's Play! How many numbers would you like to memorise?")
);
//main game function
function memoryGame(numberOfGuesses) {
  function randomNumbers() {
    //loop throught numberOfGuesses, store random numbers inside array and string alertNumbers
    alertNumbers = "Memorise numbers" + "\n";
    numbers = [];
    for (let i = 1; i <= numberOfGuesses; i++) {
      number = Math.floor(Math.random() * 100) + 1;
      alertNumbers += `Number ${[i]}:  ` + number.toString() + " " + "\n";
      numbers.push(number);
    }
    alert(alertNumbers);
    return numbers;
  }

  //created readyToPlay func for be able to use setTimeout
  function readyToPlay() {
    alert("Ready? Enter the first number in 15 seconds");
  }
  //Prompt player for answers by looping through numberOfGuesses
  //push answers inside of the answerNumbers array
  const answerNumbers = [];
  function userPromptNumbers() {
    for (let i = 1; i <= numberOfGuesses; i++) {
      number = Number(prompt(`Please enter ${i} number:`));
      answerNumbers.push(number);
    }
    //call checkGuesses func
    checkGuesses();
  }

  function checkGuesses() {
    //set counter to 0
    let counter = 0;
    //compare computerNumbers array with answerNumbers array and
    //let player know how many he/she guessed right
    for (let i = 0; i < computerNumbers.length; i++) {
      const number = computerNumbers[i];
      const guess = answerNumbers[i];
      //when numbers matched, increment counter by 1
      if (guess === number) {
        counter += 1;
      }
    }
    if (counter === 0) {
      alert("Oops, 0 correct guesses :( ");
      tryAgain = prompt("Would you like to try again? yes / no");

      if (tryAgain.toLowerCase() === "yes") {
        newNumberOfGuesses = Number(
          prompt(
            "Okey!Ler's Play again! How many numbers would you like to memorise?"
          )
        );
        memoryGame(newNumberOfGuesses);
      }
    } else {
      alert(`Well done! You guessed ${counter} right`);
    }
  }

  computerNumbers = randomNumbers();
  setTimeout(readyToPlay, 2000);
  setTimeout(userPromptNumbers, 15000);
}

memoryGame(numberOfGuesses);
