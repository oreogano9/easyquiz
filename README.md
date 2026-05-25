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
- Review mode lets the presenter mark questions for removal, then copy a removal list.
- Clicking the reward panel starts a 5-second lead-in countdown, then the reward countdown. A sound plays when it finishes.
- Defaults are `10s` lowest reward, accelerated reward scaling, and `12s` reward step.
- Sounds for correct, wrong, and timer end are configurable in settings.
- The timer can be enabled or disabled. When it ends, it plays the optional timer sound and makes no automatic scoring change.
