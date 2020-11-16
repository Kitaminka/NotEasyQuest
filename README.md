# NotEasyQuest
[![Issues](https://img.shields.io/github/issues/Kitaminka/NotEasyQuest)](https://github.com/Kitaminka/NotEasyQuest/issues)
[![Stars](https://img.shields.io/github/stars/Kitaminka/NotEasyQuest)](https://github.com/Kitaminka/NotEasyQuest/stargazers)

A website with a short quest game.
___
### Installation and launching
- Clone repository to your computer.
- Open the **index.html** file, using a browser.
___
### Setting up the quest
It is also possible to partially rewrite the quest or create your own.
- To set up the quest, open the **script.js** file, using any text editor.
- Find the next strings:
```js
const gameEvents = [
    // Some text
];
```
- In these strings written, which event should happen at a particular moment in the game in the next format.

|     Field name     | Example value |                                                    Description                                                       |
|:------------------:|:-------------:|:--------------------------------------------------------------------------------------------------------------------:|
|      gameText      |  "Some text"  |                         The text that appears above the action buttons during gameplay.                              |
|   firstButtonText  |  "Some text"  |                        The text that appears during the game on the first action button.                             |
|  firstButtonResult |       0       | The number of event that will occur after pressing the first action button. The event number is counted from 0.  |
|  secondButtonText  |  "Some text"  |                       The text that appears during the game on the second action button.                             |
| secondButtonResult |       1       | The number of event that will occur after pressing the second action button. The event number is counted from 0. |
|   thirdButtonText  |  "Some text"  |                       The text that appears during the game on the third action button.                              |
|  thirdButtonResult |       2       | The number of event that will occur after pressing the third action button. The event number is counted from 0.  |
|     isGameOver     |      true     |                          Information about whether this event is the end of the game.                                |
|      gameOver      |  "Some text"  |  If this event is the ending of the game, then this field contains the text that will be displayed at this ending.   |
___