/*Heather Sleyster
sleyster_a06b.js
INFO 2124
Thoendel
01/25/2020
*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
    let messageOne = `You non-challantly walk past the Wizard of Benson 
 with the smug confidence of a person who don\'t need no stinkin\' wizard let alone the Wizard of Benson.`;
    let messageTwo = `You walk up to the Wizard hands sweaty with anticipation. As you approach,
you note that the Wizard is wearing a Hawkeyes hat. Your disapointment proves more powerful
than your desire to engage a Wizard and instead you turn left to buy a nice, warm Runza.`;
    let messageThree = `You begin approaching the Wizard, hands sweaty with anticipation,
mouth dry with general dehydration. As you take one step forward, you place your entire weight
upon the forward leg but your foot fails to make contact with solid ground. As the entirety of
your body\'s uncontrolled weight continues forward and downward simultaneously your mind begins
considering what precisely the $50,000 increase in your home\'s assesment and matching tax increase
is paying for.`;
    let messageFour = `The Wizard watches you as you approach. Determining you aren\'t cool enough
to hang with him, the Wizard smugly smiles and walks into a vape shop. You blew your chance.`;
    
    if ((text === 'C') || (text ==='c')) { clearScreen(); console.log(messageOne); endGame();
    }   /*This is the if statement that checks the user input value and compares it to the condition. 
    If the condition is True it then clears the screen, outputs the coresponding message then outputs the endGame function.
    */
    else if ((text === 'S') || (text === 's')) { clearScreen(); console.log(messageTwo); endGame();
    }  /*This is the first else if statement that checks the user input value and compares it to the condition.
    If the condition is True it then clears the screen, outputs the coresponding message then ouputs the endGame function.
    */     
    else if ((text === 'T') || (text ==='t')) { clearScreen(); console.log(messageThree); endGame();
    } /* This is the second else if statement that checks the user input value and compares it to the condition.
    If the condition is True it then clears the screen, ouputs the coresponding message and then outputs the endGame function.
    */         
     else { clearScreen(); console.log(messageFour); endGame();
    } /* This is the else statement that checks the user input value and compares it to the condition. 
    If the condition is False it then clears the screen, outputs the coresponding message and then outputs the endGame function.
    */

    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}