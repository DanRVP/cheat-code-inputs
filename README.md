# js-cheat-code-inputs
Enter cheat codes using key inputs like in classic video games. e.g Up Up Down Down Left Right Left Right B A.

## Installation
```
npm i @danrogers/code-inputs
```

## Usage
```javascript
import { CheatCodes, CheatCode, KeyCodes } from '@danrogers/code-inputs';

const codes = new CheatCodes([
    new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => console.log('Matched code 1'), 1),
    new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => console.log('Matched code 2'), 2),
]);

document.addEventListener("keypress", (e) => {
    codes.checkKeyPress(e.code);
});
```
