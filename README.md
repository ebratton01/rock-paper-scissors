# rock-paper-scissors

A simple game of rock-paper-scissors.

## Components

## `header`

The <strong>header<strong> contains the title and instructions on how to play the game.

## `content`

The <strong>content<strong> contains the user interface that allows the choices among `rock`, `paper` and `scissors`
to be made. The top keeps track of the rounds that pass and increments the number in the `span` container by one
each time the player presses a `button`. Underneath are the `button` choices labeled `rock`, `paper` and `scissors` that
become highlighted once the user's cursor hovers over one of the buttons.
The outcome is then shown in the text box below the score board. The score board updates each time an outcome
is reached, similar to the round tracker, and the scores increment in each `span` container depending on
if the winner wins, loses or ties with the computer. The text box below the score board tells the user what
computer has chosen and whether the user has won or loss the round. It also tells the user outcome of the entire 
game after one of the participants reaches a score of 5.
The yes `button` and no `button` will appear once the game has concluded and the user will be prompted to make a
decision.

## `footer`

The <strong>footer<strong> shows the copyright statement.

## `script`

The script has multiple functions that help run the game. Global `const` variables are first initialized at the top
of the script that allow the program to explicitly tell the user the outcome of the round as well as update the text
content within the score board and round tracker.

## Summary
