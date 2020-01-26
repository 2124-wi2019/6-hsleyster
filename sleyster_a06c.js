/*Heather Sleyster
sleyster_a06c.js
INFO 2124
Thoendel
01/26/2020
*/

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

//This while loop fills the lottoPicks Array

while (lottoPicks.length < 5) {             
    lottoPicks.push(getLottoNumber());
}
 /*This for loop iterates through the lottoPicks Array 
and displays the lotto numbers drawn.
*/
for (let number = 0, max = lottoPicks.length; number < max; number++) {
    console.log(lottoPicks[number]);       
                            
/*This switch statement checks the value in the number 
variable in the lootoPicks Array to see if it is a winning
number and increases the value in the winnings variable by
the ammount won if matching.
*/
switch(number) {    
    case 22:                                
        winnings + 10;
        break;
        case 42:
            winnings + 10;
            break;
            case 43:
                winnings + 10;
                break;
                case 47:
                    winnings + 10;
                    break;
                    case 61:
                        winnings + 10;
                        break;
                        case powerBallPick:
                            winnings + 100;
                            break;
}                                           
}
/*This if statement evaluates the value now in 
the winnings variable and outputs whether or not the 
lotto numbers are a winner and how much was won.
*/
if (winnings != 0){
    console.log(`Congratulations! You won ${winnings}!`);
}
else  {
    console.log(`Sorry, you didn't win anything. Better luck next time!`);
}                                       
    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}