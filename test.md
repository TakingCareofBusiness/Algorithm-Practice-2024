this is the algorithm within the function rockPaperScissors in Kenneth.js

```javascript
for (let i = 0; i <= random; i++) {
  if (i % 3 == 0) {
    opponentChoice = "rock";
  } else if (i % 2 == 0) {
    opponentChoice = "paper";
  } else {
    opponentChoice = "scissors";
  }
}
```

this is the selection part of the algorithm, where the variable i is checked against numbers to define other variables using if statements.

```javascript
if (i % 3 == 0) {
  opponentChoice = "rock";
} else if (i % 2 == 0) {
  opponentChoice = "paper";
} else {
  opponentChoice = "scissors";
}
```

this is the iteration part of the algorithm, where the amount of times the algorithm runs is set

```javascript
for (let i = 0; i <= random; i++)
```
