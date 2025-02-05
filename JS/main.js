/*
 Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
• Store your current age into a variable.
• Store a maximum age into a variable.
• Store an estimated amount per day (as a number).
• Calculate how many you would eat total for the rest of your life.
• Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
 */


/* 
1 year...365 days
1 day...3 snacks

1 year...3*365 dailySnacks
(90-25)years...X daily snacks
 
*/

let myAge = 25;
let maxAge = 90;
let dailySnack = 3;

let timePeriod = maxAge - myAge;
let totalSnacks = (365*timePeriod*dailySnack);

console.log(`You will need ${totalSnacks} snacks to last you until the ripe old age of ${maxAge}.`);

//button and message

const snacksButton = document.getElementById('calculate_button');
const resultMessage = document.getElementById('result');

// an event listener
snacksButton.addEventListener('click', () => {
    let timePeriod = maxAge - myAge;
    let totalSnacks = 365 * timePeriod * dailySnack;
    resultMessage.textContent = `You will need ${totalSnacks} snacks to last you until the ripe old age of ${maxAge}.`;
});