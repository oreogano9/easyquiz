# Quiz Combo Desk

Minimal localhost quiz presenter app with a randomized 500-question bank: 300 easy and 200 medium.

## Run it

```bash
npm start
```

Open `http://127.0.0.1:3000`.

## Combo rules

- Questions are selected randomly.
- The question timer starts only when the presenter clicks Start timer.
- The default question timer is `5s`.
- Skip only moves to another question; it does not change streaks or progress.
- Correct answers show the current reward time in green and wait for Next question.
- Wrong answers show punishment intensity and length in red and wait for Next question.
- Clicking the reward or punishment panel starts a 5-second lead-in countdown, then the reward or punishment countdown. A sound plays when it finishes.
- Defaults are `10s` lowest reward, accelerated reward scaling, `12s` reward step, and `1` lowest punishment.
- Sounds for correct, wrong, and timer end are configurable in settings.
- The timer can be enabled or disabled. When it ends, it plays the optional timer sound and makes no automatic scoring change.
