
let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Let's try! Enter a number!")); 
}

let targetNum = Math.floor(Math.random() * maximum + 1 );

console.log(targetNum);


let guess = parseInt(prompt("Your first try!"));
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    attempt++;
    if (guess === 'q') {
        alert('Goodbye!');
        break;
    } 
     else if (!parseInt(guess)) {
        guess = prompt("It's not a valid num. Try again!");
    } else if (guess > targetNum) {
        guess = prompt("Too high! Try again.");  
    } else {
        guess = prompt("Too low! Try again.");
    }
}

alert(`You got it in ${attempt} guesses`);

