# Quiz Combo Desk

Minimal localhost quiz presenter app with a randomized trivia roster.

## Run it

```bash
npm start
```

Open `http://127.0.0.1:3000`.

## Combo rules

- Questions are selected randomly.
- Progress, streaks, review votes, and the current question are saved in localStorage.
- Restart clears saved progress and starts fresh.
- The question timer starts only when the presenter clicks Start timer.
- The default question timer is `5s`.
- Skip only moves to another question; it does not change streaks or progress.
- Correct answers show the current reward time in green and wait for Next question.
- Wrong answers keep question progress, halve the current reward, and wait for Next question.
- Review questions opens a separate review page with Keep and Remove buttons for every question.
- The review page can copy keep or removal lists at any point; after the final question it shows only Finished and the copy buttons.
- True/False statements are color-coded: green for true and red for false, with false explanations shown under the statement.
- Clicking the reward panel starts a 5-second lead-in countdown, then the reward countdown. A sound plays when it finishes.
- Defaults are `1s` lowest reward with accelerated reward scaling at `2.1x` per correct streak step.
- Sounds for correct, wrong, and timer end are configurable in settings.
- The timer can be enabled or disabled. When it ends, it plays the optional timer sound and makes no automatic scoring change.
