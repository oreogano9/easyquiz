const questionSeeds = [
  ["Arts & Entertainment", "What 2019 movie is the 2nd highest-grossing film?", "Avengers: Endgame", "easy"],
  ["Arts & Entertainment", "What is the name of the boy who never grew up in J.M. Barrie's book?", "Peter Pan", "easy"],
  ["Arts & Entertainment", "What is the highest-grossing film of all time?", "Avatar", "easy"],
  ["Arts & Entertainment", "What is the name of Harry Potter's owl?", "Hedwig", "easy"],
  ["Arts & Entertainment", "What is the protagonist's name in The Hunger Games series?", "Katniss Everdeen", "easy"],
  ["Random Facts", "How many U.S. states have a coastline?", "23", "medium"],
  ["Random Facts", "What is the smallest country in the world?", "Vatican City", "easy"],
  ["Random Facts", "What is the only mammal capable of flight?", "The bat", "easy"],
  ["Random Facts", "What is the only letter that does not appear in any U.S. state name?", "Q", "medium"],
  ["Random Facts", "What is the world's longest river?", "The Nile", "easy"],
  ["Random Facts", "Which is the tallest mountain in the world?", "Mount Everest", "easy"],
  ["Random Facts", "Which animal can live the longest without water?", "The camel", "medium"],
  ["Random Facts", "What is the largest ocean in the world?", "Pacific Ocean", "easy"],
  ["Science", "Which element has the atomic number 1?", "Hydrogen", "easy"],
  ["Science", "What is the process called when a caterpillar turns into a butterfly?", "Metamorphosis", "easy"],
  ["Science", "What is the atomic symbol for gold?", "Au", "medium"],
  ["Science", "What is the process called when a liquid turns into a gas?", "Evaporation", "easy"],
  ["Science", "What is the center of an atom called?", "Nucleus", "easy"],
  ["Science", "What pigment gives plants their green color and helps photosynthesis?", "Chlorophyll", "medium"],
  ["Science", "What is the closest planet to the Sun?", "Mercury", "easy"],
  ["Science", "What is the Earth's outermost layer called?", "The crust", "easy"],
  ["Science", "Which bone protects the brain?", "The skull", "easy"],
  ["Disney", "What kind of creature is Sebastian in The Little Mermaid?", "Crab", "easy"],
  ["Disney", "Which Disney princess has a pet tiger?", "Jasmine", "easy"],
  ["Disney", "Who composed the music for the movie The Lion King?", "Elton John", "medium"],
  ["Disney", "What is the name of Mickey Mouse's dog?", "Pluto", "easy"],
  ["Disney", "Which Disney character leaves a glass slipper at a royal ball?", "Cinderella", "easy"],
  ["Disney", "What is the name of the rabbit in Bambi?", "Thumper / Tamburino", "easy"],
  ["Disney", "Who is the main character in The Jungle Book?", "Mowgli", "easy"],
  ["Disney", "What is the name of the toy cowboy in Toy Story?", "Woody", "easy"],
  ["Human Body", "How many bones do adult humans have?", "206", "easy"],
  ["Human Body", "How many chambers does the human heart have?", "4", "easy"],
  ["Human Body", "What is the powerhouse of the cell?", "Mitochondria", "easy"],
  ["Human Body", "How many teeth do most adult humans have?", "32", "easy"],
  ["Human Body", "What is the colored part of the eye called?", "The iris", "easy"],
  ["Human Body", "What is the largest organ in the human body?", "The skin", "easy"],
  ["Human Body", "Which body system takes in oxygen and removes carbon dioxide?", "The respiratory system", "medium"],
  ["Human Body", "What is the heaviest internal organ in the human body by weight?", "The liver", "medium"],
  ["Human Body", "What tiny structures carry genetic information in cells?", "DNA", "medium"],
  ["Space", "Which planet is known as the hottest planet?", "Venus", "easy"],
  ["Space", "Which galaxy is Earth part of?", "Milky Way", "easy"],
  ["Space", "What is the moon phase called when the moon is not visible from Earth?", "New moon", "easy"],
  ["Space", "What is it called when Earth passes between the Sun and the Moon?", "Lunar eclipse", "medium"],
  ["Space", "How many planets are there in our solar system?", "Eight", "easy"],
  ["Space", "About how long does it take the Moon to orbit Earth?", "28 days", "easy"],
  ["Space", "Which planet is most famous for rings surrounding it?", "Saturn", "easy"],
  ["Animals", "What is the process called when a caterpillar transforms into a butterfly?", "Metamorphosis", "easy"],
  ["Animals", "True or false: all living things need water to survive.", "True", "easy"],
  ["Animals", "What is the world's largest mammal?", "Blue whale", "easy"],
  ["Animals", "What is the largest land animal?", "African elephant", "easy"],
  ["Animals", "Which sea creature has three hearts?", "Octopus", "easy"],
  ["Animals", "True or false: the human brain weighs more than the human heart.", "True", "medium"],
  ["Animals", "Which animal can lift up to 50 times its body weight?", "Ant", "easy"],
  ["Geography", "What is the largest ocean on Earth?", "Pacific Ocean", "easy"],
  ["Geography", "Which is the longest river in the world?", "The Nile", "easy"],
  ["Geography", "What is the largest country by land area?", "Russia", "easy"],
  ["Geography", "Which continent is the Sahara Desert located on?", "Africa", "easy"],
  ["Geography", "What is the largest continent?", "Asia", "easy"],
  ["Technology & Innovations", "Who invented the light bulb?", "Thomas Edison", "easy"],
  ["Technology & Innovations", "What does the www in a website URL stand for?", "World Wide Web", "easy"],
  ["Technology & Innovations", "What is the smallest unit of digital information?", "Bit", "easy"],
  ["Technology & Innovations", "What do the initials GPS stand for?", "Global Positioning System", "easy"],
  ["Food", "What is the national dish of Spain?", "Paella", "medium"],
  ["Food", "What is the most expensive spice?", "Saffron", "easy"],
  ["Food", "What country is the origin of the sandwich?", "England", "medium"],
  ["Food", "Which fruit gives the most potassium per serving?", "Bananas", "medium"],
  ["Science", "What are the primary colors of light?", "Red, green, and blue", "easy"],
  ["Science", "Which gas do plants absorb from the atmosphere?", "Carbon dioxide", "easy"],
  ["Science", "What is the most common gas in the Earth's atmosphere?", "Nitrogen", "medium"],
  ["True or False","There are more possible chess games than atoms in the observable universe.","True","medium"],
  ["True or False","The human body contains more microbial cells than human cells by a 100-to-1 ratio.","False","medium","Modern estimates are much closer, roughly around the same order of magnitude."],
  ["True or False","Cleopatra lived closer in time to the first iPhone than to the building of the Great Pyramid of Giza.","True","medium"],
  ["True or False","The Great Wall of China is one continuous unbroken wall.","False","medium","It is a network of walls, trenches, and fortifications."],
  ["True or False","Oxford University is older than the Aztec Empire.","True","medium"],
  ["True or False","The Moon is slowly moving closer to Earth each year.","False","medium","The Moon is slowly moving farther away."],
  ["True or False","Bananas are botanical berries, but strawberries are not.","True","medium"],
  ["True or False","The planet Mercury is the hottest planet in the solar system.","False","medium","Venus is hotter because of its thick atmosphere."],
  ["True or False","Wombat poop is often cube-shaped.","True","medium"],
  ["True or False","The black box on an airplane is usually black.","False","medium","It is usually bright orange."],
  ["True or False","A cloud can weigh hundreds of thousands of kilograms.","True","medium"],
  ["True or False","Humans can distinguish over a trillion smells with certainty.","False","medium","That number is debated and not certain."],
  ["True or False","The Eiffel Tower was originally meant to be temporary.","True","medium"],
  ["True or False","Lightning never strikes the same place twice.","False","medium","It can strike the same place many times."],
  ["True or False","Some turtles can absorb oxygen through their cloaca.","True","medium"],
  ["True or False","Bulls become angry because they hate the color red.","False","medium","They react mainly to movement."],
  ["True or False","A teaspoon of neutron star matter would weigh billions of tons.","True","medium"],
  ["True or False","The Sahara Desert is larger than Antarctica.","False","medium","Antarctica is larger."],
  ["True or False","Humans have the same usual number of neck bones as giraffes.","True","medium"],
  ["True or False","The North Pole sits on permanent land.","False","medium","It sits on shifting sea ice."],
  ["True or False","The dot over a lowercase i is called a tittle.","True","medium"],
  ["True or False","Saturn is the only planet with rings.","False","medium","Jupiter, Uranus, and Neptune also have rings."],
  ["True or False","The unicorn is the national animal of Scotland.","True","medium"],
  ["True or False","The Atlantic Ocean is generally getting smaller.","False","medium","It is generally widening."],
  ["True or False","The metal gallium can melt in a person's hand.","True","medium"],
  ["True or False","The Titanic had enough lifeboats for everyone aboard.","False","medium","It did not have enough lifeboat space for all passengers and crew."],
  ["True or False","The shortest recorded war lasted less than an hour.","True","medium"],
  ["True or False","Humans and non-bird dinosaurs lived together naturally.","False","medium","Non-bird dinosaurs died out about 66 million years before humans."],
  ["True or False","A single strand of spaghetti is called a spaghetto.","True","medium"],
  ["True or False","Glass is a very slow-flowing liquid.","False","medium","Glass is an amorphous solid."],
  ["True or False","Some octopuses can change both color and skin texture.","True","medium"],
  ["True or False","The human tongue has separate zones that each taste only one flavor.","False","medium","Most taste areas can detect multiple tastes."],
  ["True or False","The largest living organism is often considered to be a fungus.","True","medium"],
  ["True or False","A light-year measures time.","False","medium","It measures distance."],
  ["True or False","The smell of freshly cut grass is partly a plant distress signal.","True","medium"],
  ["True or False","Camels store water in their humps.","False","medium","Their humps store fat."],
  ["True or False","Humans glow faintly, but too weakly for our eyes to see.","True","medium"],
  ["True or False","Gold is naturally strongly magnetic.","False","medium","Pure gold is not naturally magnetic."],
  ["True or False","The color magenta does not have its own single wavelength of light.","True","medium"],
  ["True or False","The Great Pyramid of Giza is younger than the Roman Colosseum.","False","medium","The Great Pyramid is thousands of years older."],
  ["True or False","There are more trees on Earth than stars in the Milky Way.","True","medium"],
  ["True or False","Most of Earth's oxygen is produced by land forests.","False","medium","A large share comes from oceanic photosynthesis."],
  ["True or False","The Sun contains more than 99% of the mass in the solar system.","True","medium"],
  ["True or False","Earth's atmosphere is mostly oxygen.","False","medium","It is mostly nitrogen."],
  ["True or False","The human genome contains DNA from ancient viruses.","True","medium"],
  ["True or False","The Amazon River has no tributaries.","False","medium","It has many tributaries."],
  ["True or False","Sharks existed before trees.","True","medium"],
  ["True or False","The Moon is larger than Mercury.","False","medium","Mercury is larger."],
  ["True or False","A day on Venus is longer than a year on Venus.","True","medium"],
  ["True or False","A solar day on Mercury is shorter than its year.","False","medium","A solar day on Mercury is longer than its year."],
  ["True or False","The speed of light in vacuum is about 300,000 km/s.","True","medium"],
  ["True or False","The speed of sound is faster than the speed of light.","False","medium","Light is vastly faster."],
  ["True or False","About 71% of Earth's surface is covered by water.","True","medium"],
  ["True or False","About 71% of Earth's water is fresh water.","False","medium","Only a small percentage of Earth's water is fresh."],
  ["True or False","Roughly 97% of Earth's water is salty ocean water.","True","medium"],
  ["True or False","The human brain uses about 2% of body weight and about 50% of resting energy.","False","medium","It is about 2% of body weight and roughly 20% of resting energy."],
  ["True or False","The observable universe contains roughly hundreds of billions to trillions of galaxies.","True","medium"],
  ["True or False","The Milky Way contains only about one million stars.","False","medium","It contains hundreds of billions of stars."],
  ["True or False","Human DNA is roughly 99.9% identical from person to person.","True","medium"],
  ["True or False","Humans share about 99.9% of their DNA with chimpanzees.","False","medium","The common estimate is closer to about 98 to 99%, depending on how it is measured."],
  ["True or False","About 90% of all known animal species are insects.","False","medium","Insects are a huge share of known animal species, but not usually stated as 90% of all known animals."],
  ["True or False","More than half of the human body's bones are in the hands and feet.","True","medium"],
  ["True or False","The average adult human body has exactly 300 bones.","False","medium","Adults usually have 206 bones."],
  ["True or False","About 60% of the adult human body is water, though it varies.","True","medium"],
  ["True or False","The Pacific Ocean covers less than 5% of Earth's surface.","False","medium","It covers about one-third of Earth's surface."],
  ["True or False","The Pacific Ocean is larger than all land on Earth combined.","True","medium"],
  ["True or False","The Sahara is the largest desert on Earth.","False","medium","Antarctica is the largest desert; the Sahara is the largest hot desert."],
  ["True or False","The Antarctic ice sheet holds most of the world's fresh water.","True","medium"],
  ["True or False","The human heart beats about 10,000 times per day in an average adult.","False","medium","It is closer to about 100,000 times per day."],
  ["True or False","An adult human has about 5 liters of blood.","True","medium"],
  ["True or False","The average human body has only about 500 bacteria total.","False","medium","It has trillions of microbes."],
  ["True or False","There are roughly 86 billion neurons in the human brain.","True","medium"],
  ["True or False","The brain contains more neurons than there are stars in the Milky Way.","False","medium","The Milky Way has hundreds of billions of stars, more than the brain has neurons."],
  ["True or False","The odds of a fair coin landing heads 10 times in a row are 1 in 1,024.","True","medium"],
  ["True or False","In a group of 23 people, the chance that two share a birthday is less than 1%.","False","medium","It is about 50%."],
  ["True or False","In a standard deck, the chance of drawing an ace first is 1 in 13.","True","medium"],
  ["True or False","In a standard deck, the chance of drawing a queen first is 1 in 4.","False","medium","It is 1 in 13."],
  ["True or False","Rolling two fair dice gives a sum of 7 more often than any other sum.","True","medium"],
  ["True or False","Rolling two fair dice gives a sum of 12 more often than a sum of 7.","False","medium","A 7 has 6 combinations; 12 has only 1."],
  ["True or False","The chance of rolling double sixes with two fair dice is 1 in 36.","True","medium"],
  ["True or False","The chance of rolling at least one six with two fair dice is 1 in 36.","False","medium","It is 11 in 36."],
  ["True or False","In a normal year, February has exactly 28 days.","True","medium"],
  ["True or False","Every fourth year is always a leap year.","False","medium","Century years must usually be divisible by 400 to be leap years."],
  ["True or False","There are 86,400 seconds in a day.","True","medium"],
  ["True or False","There are exactly 10,000 seconds in a day.","False","medium","There are 86,400 seconds."],
  ["True or False","A googol is 1 followed by 100 zeros.","True","medium"],
  ["True or False","A googolplex is 1 followed by 1,000 zeros.","False","medium","It is 1 followed by a googol zeros."],
  ["True or False","One million seconds is about 11.6 days.","True","medium"],
  ["True or False","One billion seconds is about 11.6 days.","False","medium","It is about 31.7 years."],
  ["True or False","One trillion seconds is about 31,700 years.","True","medium"],
  ["True or False","A billion is always 1,000 million in every language and historical system.","False","medium","Some older systems used billion to mean a million million."],
  ["True or False","The probability of being dealt a royal flush in poker is extremely low, roughly 1 in 650,000 hands.","True","medium"],
  ["True or False","In poker, a royal flush is easier to get than one pair.","False","medium","One pair is much more common."],
  ["True or False","Pi is irrational.","True","medium"],
  ["True or False","Pi ends after exactly one trillion digits.","False","medium","Pi has no known ending and is irrational."],
  ["True or False","There are infinitely many prime numbers.","True","medium"],
  ["True or False","The number 1 is a prime number.","False","medium","Prime numbers must have exactly two positive divisors."],
  ["True or False","Zero is an even number.","True","medium"],
  ["True or False","Negative numbers cannot be squared.","False","medium","They can be squared; for example, -3 squared is 9."],
  ["True or False","There are 10 possible outcomes when flipping 10 coins.","False","medium","There are 2^10, which is 1,024 possible outcome sequences."],
];

const STORAGE_KEY = "quiz-combo-desk-progress-v5";
const REVIEW_KEY = "quiz-combo-desk-review-v5";
const questions = questionSeeds.map(([category, prompt, answer, difficulty, explanation], index) => ({
  answer,
  category,
  difficulty,
  explanation: explanation || "",
  id: `q-${index + 1}`,
  prompt,
  statementType: category === "True or False" ? answer.toLowerCase() : "",
}));
const questionById = new Map(questions.map((question) => [question.id, question]));
const state = {
  answeredIds: new Set(),
  badStreak: 0,
  currentQuestion: null,
  goodStreak: 0,
  keepIds: new Set(),
  mode: "question",
  removalIds: new Set(),
  result: null,
  resultTimer: null,
  rewardFactor: 1,
  reviewIndex: 0,
  timer: null,
  timerEnded: false,
  timerRunning: false,
  timerRemaining: 5,
};
const settings = {
  correctSound: "chime",
  questionSeconds: 5,
  rewardBase: 1,
  rewardScaling: "accelerated",
  rewardStep: 1,
  timerEnabled: true,
  timerSound: "alarm",
  timerSoundEnabled: true,
  wrongSound: "buzz",
};
const nodes = {
  answer: document.getElementById("answerText"),
  bankSummary: document.getElementById("bankSummary"),
  copyKeepButton: document.getElementById("copyKeepButton"),
  copyRemovalButton: document.getElementById("copyRemovalButton"),
  correctButton: document.getElementById("correctButton"),
  correctSound: document.getElementById("correctSound"),
  difficulty: document.getElementById("questionDifficulty"),
  exitReviewButton: document.getElementById("exitReviewButton"),
  keepQuestionButton: document.getElementById("keepQuestionButton"),
  outcomeLabel: document.getElementById("outcomeLabel"),
  outcomePanel: document.getElementById("outcomePanel"),
  outcomeValue: document.getElementById("outcomeValue"),
  position: document.getElementById("questionPosition"),
  progress: document.getElementById("progressCount"),
  questionExplanation: document.getElementById("questionExplanation"),
  prompt: document.getElementById("questionPrompt"),
  questionSeconds: document.getElementById("questionSeconds"),
  removeQuestionButton: document.getElementById("removeQuestionButton"),
  reviewActions: document.getElementById("reviewActions"),
  reviewAnswer: document.getElementById("reviewAnswer"),
  reviewCategory: document.getElementById("reviewCategory"),
  reviewCopyLabel: document.getElementById("reviewCopyLabel"),
  reviewCopyOutput: document.getElementById("reviewCopyOutput"),
  reviewCopyPanel: document.getElementById("reviewCopyPanel"),
  reviewExplanation: document.getElementById("reviewExplanation"),
  reviewFinished: document.getElementById("reviewFinished"),
  reviewPage: document.getElementById("reviewPage"),
  reviewPosition: document.getElementById("reviewPosition"),
  reviewPrompt: document.getElementById("reviewPrompt"),
  rewardBase: document.getElementById("rewardBase"),
  rewardScaling: document.getElementById("rewardScaling"),
  restartButton: document.getElementById("restartButton"),
  settings: document.querySelector(".settings"),
  settingsForm: document.getElementById("settingsForm"),
  skipButton: document.getElementById("skipButton"),
  stage: document.querySelector(".stage"),
  startReviewButton: document.getElementById("startReviewButton"),
  startTimerButton: document.getElementById("startTimerButton"),
  nextButton: document.getElementById("nextButton"),
  timer: document.getElementById("timerDisplay"),
  timerEnabled: document.getElementById("timerEnabled"),
  timerSound: document.getElementById("timerSound"),
  timerSoundEnabled: document.getElementById("timerSoundEnabled"),
  wrongButton: document.getElementById("wrongButton"),
  wrongSound: document.getElementById("wrongSound"),
};
let audioContext;

function getNumber(node, fallback, min, max) {
  const value = Number(node.value);
  const clamped = Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
  node.value = clamped;
  return clamped;
}

function readSettings() {
  settings.rewardBase = getNumber(nodes.rewardBase, 1, 1, 600);
  settings.rewardScaling = nodes.rewardScaling.value;
  settings.correctSound = nodes.correctSound.value;
  settings.wrongSound = nodes.wrongSound.value;
  settings.timerSound = nodes.timerSound.value;
  settings.questionSeconds = getNumber(nodes.questionSeconds, 5, 5, 600);
  settings.timerEnabled = nodes.timerEnabled.checked;
  settings.timerSoundEnabled = nodes.timerSoundEnabled.checked;
}

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        answeredIds: [...state.answeredIds],
        badStreak: state.badStreak,
        currentQuestionId: state.currentQuestion ? state.currentQuestion.id : null,
        goodStreak: state.goodStreak,
        rewardFactor: state.rewardFactor,
      }),
    );
  } catch {
    // Progress saving is best-effort; gameplay should not depend on storage access.
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const saved = JSON.parse(raw);
    const ids = Array.isArray(saved.answeredIds) ? saved.answeredIds : [];
    state.answeredIds = new Set(ids.filter((id) => questionById.has(id)));

    const goodStreak = Number(saved.goodStreak);
    const badStreak = Number(saved.badStreak);
    const rewardFactor = Number(saved.rewardFactor);
    state.goodStreak = Number.isFinite(goodStreak) ? Math.max(0, Math.trunc(goodStreak)) : 0;
    state.badStreak = Number.isFinite(badStreak) ? Math.max(0, Math.trunc(badStreak)) : 0;
    state.rewardFactor = Number.isFinite(rewardFactor) ? Math.max(0.01, rewardFactor) : 1;

    return questionById.get(saved.currentQuestionId) || null;
  } catch {
    return null;
  }
}

function loadReviewVotes() {
  try {
    const raw = localStorage.getItem(REVIEW_KEY);
    const saved = raw ? JSON.parse(raw) : null;
    const removalIds = Array.isArray(saved) ? saved : saved && Array.isArray(saved.removalIds) ? saved.removalIds : [];
    const keepIds = saved && Array.isArray(saved.keepIds) ? saved.keepIds : [];
    const reviewIndex = saved && Number(saved.reviewIndex);
    state.removalIds = new Set(removalIds.filter((id) => questionById.has(id)));
    state.keepIds = new Set(keepIds.filter((id) => questionById.has(id)));
    state.reviewIndex = Number.isFinite(reviewIndex) ? Math.min(questions.length, Math.max(0, Math.trunc(reviewIndex))) : 0;
  } catch {
    state.removalIds = new Set();
    state.keepIds = new Set();
    state.reviewIndex = 0;
  }
}

function saveReviewVotes() {
  try {
    localStorage.setItem(
      REVIEW_KEY,
      JSON.stringify({
        keepIds: [...state.keepIds],
        removalIds: [...state.removalIds],
        reviewIndex: state.reviewIndex,
      }),
    );
  } catch {
    // Voting still works in memory if localStorage is unavailable.
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage failures; the in-memory reset still applies.
  }
}

function growth(streak, step, scaling) {
  const extra = Math.max(0, streak - 1);
  if (scaling === "flat") return 0;
  if (scaling === "accelerated") return null;
  return extra * step;
}

function rewardFor(streak) {
  if (settings.rewardScaling === "accelerated") {
    return Math.max(1, Math.round(settings.rewardBase * 2.1 ** Math.max(0, streak - 1)));
  }
  return Math.round(settings.rewardBase + growth(streak, settings.rewardStep, settings.rewardScaling));
}

function currentRewardSeconds() {
  return Math.max(1, Math.round(rewardFor(Math.max(1, state.goodStreak)) * state.rewardFactor));
}

function ensureAudio() {
  if (!audioContext) {
    const AudioEngine = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioEngine();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function tone(frequency, start, duration, type = "sine", gain = 0.12) {
  const context = ensureAudio();
  const osc = context.createOscillator();
  const volume = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, context.currentTime + start);
  volume.gain.setValueAtTime(gain, context.currentTime + start);
  volume.gain.exponentialRampToValueAtTime(0.001, context.currentTime + start + duration);
  osc.connect(volume);
  volume.connect(context.destination);
  osc.start(context.currentTime + start);
  osc.stop(context.currentTime + start + duration);
}

function playSound(name) {
  if (name === "off") return;
  if (name === "chime") {
    tone(660, 0, 0.12);
    tone(990, 0.1, 0.18);
  } else if (name === "blip") {
    tone(880, 0, 0.1, "square", 0.08);
  } else if (name === "click") {
    tone(1200, 0, 0.04, "square", 0.06);
  } else if (name === "buzz") {
    tone(140, 0, 0.28, "sawtooth", 0.12);
  } else if (name === "thud") {
    tone(80, 0, 0.18, "sine", 0.16);
  } else if (name === "drop") {
    tone(320, 0, 0.1, "triangle", 0.12);
    tone(120, 0.1, 0.2, "triangle", 0.1);
  } else if (name === "alarm") {
    tone(720, 0, 0.12, "square", 0.1);
    tone(720, 0.2, 0.12, "square", 0.1);
  } else if (name === "double") {
    tone(540, 0, 0.1);
    tone(540, 0.16, 0.1);
  } else if (name === "bell") {
    tone(1040, 0, 0.5, "sine", 0.08);
  }
}

function formatSeconds(total) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.timerRunning = false;
}

function stopResultTimer() {
  if (state.resultTimer) {
    clearInterval(state.resultTimer);
    state.resultTimer = null;
  }
}

function setQuestionTimerIdle() {
  stopTimer();
  state.timerEnded = false;
  state.timerRemaining = settings.questionSeconds;
  nodes.timer.classList.remove("ended");
  nodes.timer.textContent = settings.timerEnabled ? "Start" : "Timer off";
  nodes.startTimerButton.disabled = !settings.timerEnabled;
}

function startTimer() {
  if (state.mode !== "question" || state.timerRunning) return;
  stopTimer();
  state.timerEnded = false;
  state.timerRunning = true;
  state.timerRemaining = settings.questionSeconds;
  nodes.timer.classList.remove("ended");
  nodes.timer.textContent = settings.timerEnabled ? formatSeconds(state.timerRemaining) : "Timer off";
  if (!settings.timerEnabled) return;
  state.timer = setInterval(() => {
    state.timerRemaining -= 1;
    nodes.timer.textContent = formatSeconds(Math.max(0, state.timerRemaining));
    if (state.timerRemaining <= 0) {
      stopTimer();
      state.timerEnded = true;
      nodes.timer.classList.add("ended");
      if (settings.timerSoundEnabled) playSound(settings.timerSound);
    }
  }, 1000);
}

function randomQuestion(excludeId = null) {
  let pool = questions.filter((question) => !state.answeredIds.has(question.id));
  if (pool.length === 0) {
    state.answeredIds.clear();
    saveProgress();
    pool = [...questions];
  }
  const filtered = pool.length > 1 ? pool.filter((question) => question.id !== excludeId) : pool;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function renderQuestionText(promptNode, explanationNode, question) {
  promptNode.textContent = question.prompt;
  promptNode.classList.remove("statement", "true", "false");
  explanationNode.classList.add("hidden");
  explanationNode.textContent = "";

  if (!question.statementType) return;

  promptNode.classList.add("statement", question.statementType);
  if (question.statementType === "false" && question.explanation) {
    explanationNode.textContent = question.explanation;
    explanationNode.classList.remove("hidden");
  }
}

function setQuestion(question) {
  stopResultTimer();
  state.currentQuestion = question;
  state.mode = "question";
  state.result = null;
  renderQuestionText(nodes.prompt, nodes.questionExplanation, question);
  nodes.answer.textContent = question.answer;
  nodes.difficulty.textContent = question.category;
  nodes.position.textContent = `${question.difficulty === "easy" ? "Easy" : "Medium"} · Question ${state.answeredIds.size + 1}`;
  nodes.outcomePanel.className = "outcome-panel neutral hidden";
  nodes.outcomeLabel.textContent = "";
  nodes.outcomeValue.textContent = "";
  nodes.answer.closest(".answer-panel").classList.remove("hidden");
  nodes.startTimerButton.classList.remove("hidden");
  nodes.correctButton.classList.remove("hidden");
  nodes.wrongButton.classList.remove("hidden");
  nodes.skipButton.classList.remove("hidden");
  nodes.nextButton.classList.add("hidden");
  setQuestionTimerIdle();
  saveProgress();
}

function showReward(label = "Current reward", style = "good") {
  const seconds = currentRewardSeconds();
  nodes.outcomePanel.className = `outcome-panel ${style}`;
  nodes.outcomeLabel.textContent = label;
  nodes.outcomeValue.textContent = `${seconds}s`;
  state.result = { type: "reward", duration: seconds, label, value: `${seconds}s` };
}

function renderHeader() {
  const easyCount = questions.filter((question) => question.difficulty === "easy").length;
  const mediumCount = questions.length - easyCount;
  nodes.bankSummary.textContent = `${questions.length} questions: ${easyCount} easy, ${mediumCount} medium`;
  nodes.progress.textContent = `${state.answeredIds.size} / ${questions.length}`;
}

function nextQuestion() {
  renderHeader();
  setQuestion(randomQuestion(state.currentQuestion && state.currentQuestion.id));
}

function showResultScreen() {
  state.mode = "result";
  stopTimer();
  nodes.timer.textContent = "Done";
  nodes.answer.closest(".answer-panel").classList.add("hidden");
  nodes.startTimerButton.classList.add("hidden");
  nodes.correctButton.classList.add("hidden");
  nodes.wrongButton.classList.add("hidden");
  nodes.skipButton.classList.add("hidden");
  nodes.nextButton.classList.remove("hidden");
  renderHeader();
}

function gradeCorrect() {
  if (state.mode !== "question" || !state.currentQuestion) return;
  readSettings();
  playSound(settings.correctSound);
  state.answeredIds.add(state.currentQuestion.id);
  state.goodStreak += 1;
  state.badStreak = 0;
  saveProgress();
  showReward();
  showResultScreen();
}

function gradeWrong() {
  if (state.mode !== "question" || !state.currentQuestion) return;
  readSettings();
  playSound(settings.wrongSound);
  state.answeredIds.add(state.currentQuestion.id);
  state.badStreak += 1;
  state.rewardFactor /= 2;
  saveProgress();
  showReward("Reward halved", "bad");
  showResultScreen();
}

function skipQuestion() {
  if (state.mode !== "question") return;
  readSettings();
  setQuestion(randomQuestion(state.currentQuestion && state.currentQuestion.id));
}

function restartQuiz() {
  stopTimer();
  stopResultTimer();
  state.answeredIds.clear();
  state.badStreak = 0;
  state.currentQuestion = null;
  state.goodStreak = 0;
  state.mode = "question";
  state.result = null;
  state.rewardFactor = 1;
  clearProgress();
  renderHeader();
  setQuestion(randomQuestion());
}

function showQuizPage() {
  nodes.stage.classList.remove("hidden");
  nodes.settings.classList.remove("hidden");
  nodes.reviewPage.classList.add("hidden");
  if (state.currentQuestion) {
    setQuestion(state.currentQuestion);
  }
}

function showReviewPage() {
  stopTimer();
  stopResultTimer();
  nodes.stage.classList.add("hidden");
  nodes.settings.classList.add("hidden");
  nodes.reviewPage.classList.remove("hidden");
  renderReviewQuestion();
}

function renderReviewQuestion() {
  const finished = state.reviewIndex >= questions.length;
  nodes.reviewFinished.classList.toggle("hidden", !finished);
  nodes.keepQuestionButton.classList.toggle("hidden", finished);
  nodes.removeQuestionButton.classList.toggle("hidden", finished);
  nodes.exitReviewButton.classList.toggle("hidden", finished);
  nodes.reviewPrompt.classList.toggle("hidden", finished);
  nodes.reviewExplanation.classList.add("hidden");
  nodes.reviewAnswer.closest(".answer-panel").classList.toggle("hidden", finished);
  nodes.reviewCategory.classList.toggle("hidden", finished);
  nodes.reviewPosition.textContent = finished ? "Finished" : `Review ${state.reviewIndex + 1} / ${questions.length}`;

  if (finished) {
    nodes.reviewCopyPanel.classList.add("hidden");
    nodes.reviewCategory.textContent = "";
    nodes.reviewPrompt.textContent = "";
    nodes.reviewPrompt.classList.remove("statement", "true", "false");
    nodes.reviewExplanation.textContent = "";
    nodes.reviewAnswer.textContent = "";
    return;
  }

  const question = questions[state.reviewIndex];
  nodes.reviewCategory.textContent = question.category;
  renderQuestionText(nodes.reviewPrompt, nodes.reviewExplanation, question);
  nodes.reviewAnswer.textContent = question.answer;
  nodes.reviewCopyPanel.classList.add("hidden");
}

function voteReview(choice) {
  if (state.reviewIndex >= questions.length) return;
  const question = questions[state.reviewIndex];
  if (choice === "remove") {
    state.removalIds.add(question.id);
    state.keepIds.delete(question.id);
  } else {
    state.keepIds.add(question.id);
    state.removalIds.delete(question.id);
  }
  state.reviewIndex += 1;
  saveReviewVotes();
  renderReviewQuestion();
}

function reviewListText(kind) {
  const ids = kind === "keep" ? state.keepIds : state.removalIds;
  if (ids.size === 0) return `No questions marked to ${kind}.`;
  const prefix = kind === "keep" ? "Keep" : "Remove";
  return [...ids]
    .map((id) => questionById.get(id))
    .filter(Boolean)
    .map((question) => `${prefix}: [${question.category}] ${question.prompt}\nAnswer: ${question.answer}`)
    .join("\n\n");
}

function copyReviewList(kind) {
  const text = reviewListText(kind);
  nodes.reviewCopyPanel.classList.remove("hidden");
  nodes.reviewCopyLabel.textContent = kind === "keep" ? "Keep list" : "Removal list";
  nodes.reviewCopyOutput.value = text;
  nodes.reviewCopyOutput.focus();
  nodes.reviewCopyOutput.select();
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

function updateResultCountdown(label, seconds) {
  nodes.outcomeLabel.textContent = label;
  nodes.outcomeValue.textContent = formatSeconds(seconds);
}

function runResultCountdown() {
  if (state.mode !== "result" || !state.result || state.resultTimer) return;
  readSettings();
  let phase = "lead";
  let remaining = 5;
  updateResultCountdown("Starting", remaining);
  state.resultTimer = setInterval(() => {
    remaining -= 1;
    if (remaining > 0) {
      updateResultCountdown(phase === "lead" ? "Starting" : state.result.label, remaining);
      return;
    }

    if (phase === "lead") {
      phase = "main";
      remaining = state.result.duration;
      playSound(settings.timerSound === "off" ? "bell" : settings.timerSound);
      updateResultCountdown(state.result.label, remaining);
      return;
    }

    stopResultTimer();
    nodes.outcomeLabel.textContent = "Done";
    nodes.outcomeValue.textContent = "00:00";
    playSound(settings.timerSound === "off" ? "bell" : settings.timerSound);
  }, 1000);
}

nodes.settingsForm.addEventListener("input", () => {
  readSettings();
  if (state.mode === "result") {
    showReward(state.badStreak > 0 ? "Reward halved" : "Current reward", state.badStreak > 0 ? "bad" : "good");
  }
  if (state.mode === "question") {
    setQuestionTimerIdle();
  }
});
nodes.startTimerButton.addEventListener("click", startTimer);
nodes.correctButton.addEventListener("click", gradeCorrect);
nodes.wrongButton.addEventListener("click", gradeWrong);
nodes.skipButton.addEventListener("click", skipQuestion);
nodes.nextButton.addEventListener("click", nextQuestion);
nodes.restartButton.addEventListener("click", restartQuiz);
nodes.startReviewButton.addEventListener("click", showReviewPage);
nodes.exitReviewButton.addEventListener("click", showQuizPage);
nodes.keepQuestionButton.addEventListener("click", () => voteReview("keep"));
nodes.removeQuestionButton.addEventListener("click", () => voteReview("remove"));
nodes.copyKeepButton.addEventListener("click", () => copyReviewList("keep"));
nodes.copyRemovalButton.addEventListener("click", () => copyReviewList("remove"));
nodes.outcomePanel.addEventListener("click", runResultCountdown);
nodes.outcomePanel.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    runResultCountdown();
  }
});

readSettings();
loadReviewVotes();
const savedQuestion = loadProgress();
renderHeader();
setQuestion(savedQuestion && !state.answeredIds.has(savedQuestion.id) ? savedQuestion : randomQuestion());

window.__quizStats = {
  easy: questions.filter((question) => question.difficulty === "easy").length,
  medium: questions.filter((question) => question.difficulty === "medium").length,
  total: questions.length,
};
