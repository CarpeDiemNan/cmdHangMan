 
var inquirer = require("inquirer");
// var hangman = require("/hangManHell/hangManGame.js");
var hangman = require("./hangManHell.js");
var keypress = require('keypress');
var x = "go";

 
   // maybe this should be in an IF statement 
  //  where it checks if game is over or it should get another letter
  //  so if game isn't over, then do another prompt

     
          inquirer.prompt([

            {
              type: "input",
              name: "letter",
              message: "Press a letter please."
            },  

            
          ]).then(function(user) {
            console.log("you chose the letter " + user.letter);
            
            // Pass the guessed letter into our updatePage function to run the game logic.
            hangman.hangmanGame.updatePage(user.letter);

            console.log("HELP . . . I'm leaving and I shouldn't be . . . " + user.letter);
            // IT ENDS AFTER THIS AND IT SHOULDN'T
          });
        
   // find out where it checks if game is over or it should get another letter

 
 
 
      
 
 