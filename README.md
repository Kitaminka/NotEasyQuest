# NotEasyQuest
Короткая квест игра.
___
### Установка и запуск
- Скопируйте репозиторий на свой компьютер.
- Откройте файл **index.html**, используя браузер.
___
### Настройка квеста
Также есть возможность полностью переписать квест или создать собственный.
- Чтобы настроить квест, откройте файл **script.js**, используя любой текстовый редактор.
- Найдите следующие строчки:
```js
const gameEvents = [
    // Какой-то текст
];
```
- В этих строчках записано, какое событие должно произойти в конкретный момент игры в следующем формате:

|    Название поля   |  Пример значения |                                                               Описание                                         |
|:------------------:|:----------------:|:--------------------------------------------------------------------------------------------------------------:|
|      gameText      | "Какой-то текст" |                        Текст, который отображается во время игры над кнопками действия.                        |
|   firstButtonText  | "Какой-то текст" |                      Текст, который отображается во время игры на первой кнопке действия.                      |
|  firstButtonResult |         0        | Номер события, которое произойдет после нажатия на первую кнопку действия. Отсчет номера события идет с 0.     |
|  secondButtonText  | "Какой-то текст" |                  Текст, который отображается во время игры на второй кнопке действия.                          |
| secondButtonResult |         1        |  Номер события, которое произойдет после нажатия на вторую кнопку действия. Отсчет номера события идет с 0.    |
|   thirdButtonText  | "Какой-то текст" |                  Текст, который отображается во время игры на третьей кнопке действия.                         |
|  thirdButtonResult |         2        |   Номер события, которое произойдет после нажатия на третью кнопку действия. Отсчет номера события идет с 0.   |
|     isGameOver     |       true       |                        Информация о том, является ли данное событие концовкой игры.                            |
|      gameOver      | "Какой-то текст" | Если данное событие является концовкой игры, то здесь содержиться текст, который отобразиться в этой концовке. |
___
