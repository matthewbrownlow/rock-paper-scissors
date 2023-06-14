# Rock Paper Scissors
> [Click here to view the live website on GitHub Pages](https://matthewbrownlow.github.io/rock-paper-scissors/) Please note: To open any links in this document in a new browser tab, please press `Cmd ⌘ + Click` (Mac) or `CTRL + Click` (Windows/Linux)

Introduction Text Here...

![Screenshot of am i responsive website displaying the rock paper scissors home page on four different devices](assets/images/readme.md/am-i-responsive-displays.png)

## **Color Palette**

Color Palette Text Here...

![Screenshot of the color palette used](assets/images/readme.md/color-palette.png)

## **Features**

Text Here...

### **Existing Features**

Text Here...

#### **Title/ Logo**

![TextHere](assets/images/readme.md/rps-heading-logo-title.png)

Text Here...

#### **Choices**

![TextHere](assets/images/readme.md/choices-section.png)

Text Here...

#### **How to Play**

![TextHere](assets/images/readme.md/how-to-play-section.png)

Text Here...

#### **Rules**

![TextHere](assets/images/readme.md/rules-section.png)

Text Here...

#### **Results**

![TextHere](assets/images/readme.md/result-sections.png)

Text Here...

### **computerPlay Function**

![Screenshot of JavaScript function, computerPlay](assets/images/readme.md/javascript-computerPlay-function.png)

The computerPlay() function randomly selects and returns either "rock", "paper", or "scissors". It represents the computer's choice in a game.

### **playRound Function**

![Screenshot of JavaScript function, playRound](assets/images/readme.md/javascript-playRound-function.png)

The playRound() function determines the winner of a round in rock-paper-scissors based on the playerSelection and computerSelection inputs. It returns a string indicating the outcome: either "You win!" with the winning choice, "It's a tie!" if both choices are the same, or "You lose!" with the winning choice for the computer.

### **updateResult Function**

![Screenshot of JavaScript function, updateResult](assets/images/readme.md/javascript-updateResult-function.png)

The updateResult() function updates the round result and game result in the HTML document. It takes two parameters: roundResult and gameResult. It retrieves the corresponding HTML elements using their IDs, and sets their textContent property to the respective parameter values.

### **game Function**

![Screenshot of JavaScript function, game](assets/images/readme.md/javascript-game-function.png)

The game() function sets up and manages the rock-paper-scissors game. It initializes the player and computer scores to 0 and attaches click event listeners to elements with the "choice" class. When a choice is clicked, it determines the round result, updates the scores, and calls the updateResult() function to display the results. If a player reaches a score of 5, it determines the game result, displays an alert, updates the displayed result, and resets the scores to 0.