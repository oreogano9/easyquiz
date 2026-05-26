const questionSeeds = [
  ["V2 Arts & Entertainment","Avengers: Endgame is currently ranked above Avatar on the all-time worldwide box office list.","False","medium","Avatar is generally listed above Avengers: Endgame on the worldwide all-time box office list."],
  ["V2 Arts & Entertainment","Wendy Darling is the boy in J.M. Barrie's work who is famous for never growing up.","False","medium","Peter Pan is the boy famous for never growing up; Wendy Darling is another major character."],
  ["V2 Arts & Entertainment","Titanic is generally listed above Avatar as the highest-grossing film of all time worldwide.","False","medium","Avatar is generally listed above Titanic on the worldwide all-time box office list."],
  ["V2 Arts & Entertainment","Harry Potter's owl is named Crookshanks.","False","medium","Crookshanks is Hermione's cat; Harry's owl is Hedwig."],
  ["V2 Arts & Entertainment","Primrose Everdeen is the central protagonist of The Hunger Games series.","False","medium","Katniss Everdeen is the central protagonist; Primrose is her sister."],
  ["V2 Random Facts","Fewer than 10 U.S. states have any ocean, Gulf, or Great Lakes coastline.","False","medium","The commonly counted number is much higher; this quiz uses 23."],
  ["V2 Random Facts","Monaco is smaller than Vatican City and is usually considered the world's smallest country.","False","medium","Vatican City is smaller than Monaco and is usually considered the world's smallest country."],
  ["V2 Random Facts","Flying squirrels are capable of sustained powered flight.","False","medium","Flying squirrels glide; bats are the only mammals capable of sustained powered flight."],
  ["V2 Random Facts","The letter Q appears in at least one U.S. state name.","False","medium","Q does not appear in any U.S. state name."],
  ["V2 Random Facts","The Amazon is always universally listed as the world's longest river with no dispute.","False","medium","The Nile is commonly cited as the longest, though measurements and definitions can create debate."],
  ["V2 Random Facts","K2 is taller above sea level than Mount Everest.","False","medium","Mount Everest is taller above sea level."],
  ["V2 Random Facts","Camels store liquid water inside their humps.","False","medium","Camel humps store fat, not liquid water."],
  ["V2 Random Facts","The Atlantic Ocean is larger than the Pacific Ocean.","False","medium","The Pacific Ocean is larger than the Atlantic Ocean."],
  ["V2 Science","Helium has atomic number 1.","False","medium","Hydrogen has atomic number 1; helium has atomic number 2."],
  ["V2 Science","A caterpillar becoming a butterfly is called sublimation.","False","medium","The process is metamorphosis."],
  ["V2 Science","The chemical symbol Ag refers to gold.","False","medium","Au refers to gold; Ag refers to silver."],
  ["V2 Science","Evaporation is the process of a gas becoming a liquid.","False","medium","Evaporation is liquid becoming gas; condensation is gas becoming liquid."],
  ["V2 Science","Electrons form the central nucleus of an atom.","False","medium","Protons and neutrons make up the nucleus; electrons occupy regions around it."],
  ["V2 Science","Chlorophyll mainly helps plants capture sound waves for photosynthesis.","False","medium","Chlorophyll helps plants capture light energy for photosynthesis."],
  ["V2 Science","Venus is the closest planet to the Sun.","False","medium","Mercury is the closest planet to the Sun."],
  ["V2 Science","Earth's mantle is the planet's outermost solid layer.","False","medium","Earth's crust is the outermost solid layer."],
  ["V2 Science","The femur protects the brain.","False","medium","The skull protects the brain; the femur is the thigh bone."],
  ["V2 Disney","Sebastian in The Little Mermaid is a lobster.","False","medium","Sebastian is a crab."],
  ["V2 Disney","Ariel is the Disney princess associated with a pet tiger named Rajah.","False","medium","Jasmine is associated with Rajah; Ariel is associated with characters like Flounder and Sebastian."],
  ["V2 Disney","Elton John voiced adult Simba in Disney's The Lion King.","False","medium","Elton John wrote songs for the film; he did not voice adult Simba."],
  ["V2 Disney","Goofy is Mickey Mouse's dog.","False","medium","Pluto is Mickey Mouse's dog; Goofy is a separate character."],
  ["V2 Disney","Belle is the Disney character known for leaving a glass slipper at a royal ball.","False","medium","Cinderella is the character known for leaving the glass slipper."],
  ["V2 Disney","The rabbit in Bambi is known as Thumper in English and Tamburino in Italian.","True","medium"],
  ["V2 Disney","Mowgli is the main human character in The Jungle Book.","True","medium"],
  ["V2 Disney","The toy cowboy in Toy Story is named Buzz Lightyear.","False","medium","Buzz is the space ranger; the toy cowboy is Woody."],
  ["V2 Human Body","Adult humans usually have 206 bones.","True","medium"],
  ["V2 Human Body","The human heart usually has two chambers.","False","medium","The human heart usually has four chambers."],
  ["V2 Human Body","Mitochondria are often called the powerhouse of the cell.","True","medium"],
  ["V2 Human Body","Most adult humans have 32 permanent teeth.","True","medium"],
  ["V2 Human Body","The colored part of the eye is called the retina.","False","medium","The colored part is the iris; the retina lines the back of the eye."],
  ["V2 Human Body","Skin is the largest organ of the human body.","True","medium"],
  ["V2 Human Body","The respiratory system takes in oxygen and removes carbon dioxide.","True","medium"],
  ["V2 Human Body","The liver is generally the heaviest internal organ in the human body.","True","medium"],
  ["V2 Human Body","DNA carries genetic information in cells.","True","medium"],
  ["V2 Space","Venus is hotter on average than Mercury despite being farther from the Sun.","True","medium"],
  ["V2 Space","Earth is part of the Andromeda Galaxy.","False","medium","Earth is part of the Milky Way."],
  ["V2 Space","A new moon is the phase when the Moon is not visibly illuminated from Earth.","True","medium"],
  ["V2 Space","A lunar eclipse happens when Earth passes between the Sun and the Moon.","True","medium"],
  ["V2 Space","The modern solar system has eight recognized planets.","True","medium"],
  ["V2 Space","The Moon takes about 28 days to orbit Earth.","True","medium"],
  ["V2 Space","Saturn is the planet most famous for its prominent ring system.","True","medium"],
  ["V2 Animals","The transformation from caterpillar to butterfly is metamorphosis.","True","medium"],
  ["V2 Animals","All living things can survive indefinitely without water.","False","medium","Living things need water, though tolerance varies widely."],
  ["V2 Animals","The blue whale is the world's largest mammal.","True","medium"],
  ["V2 Animals","The African elephant is the largest land animal.","True","medium"],
  ["V2 Animals","Octopuses have three hearts.","True","medium"],
  ["V2 Animals","The human brain usually weighs more than the human heart.","True","medium"],
  ["V2 Animals","Ants can lift many times their own body weight.","True","medium"],
  ["V2 Geography","The Pacific Ocean is Earth's largest ocean.","True","medium"],
  ["V2 Geography","The Nile is commonly cited as the longest river in the world.","True","medium"],
  ["V2 Geography","Russia is the largest country by land area.","True","medium"],
  ["V2 Geography","The Sahara Desert is located in South America.","False","medium","The Sahara Desert is in Africa."],
  ["V2 Geography","Asia is the largest continent by land area.","True","medium"],
  ["V2 Technology & Innovations","Thomas Edison is commonly credited with inventing the practical incandescent light bulb.","True","medium"],
  ["V2 Technology & Innovations","WWW stands for World Wide Web.","True","medium"],
  ["V2 Technology & Innovations","A bit is smaller than a byte.","True","medium"],
  ["V2 Technology & Innovations","GPS stands for Global Positioning System.","True","medium"],
  ["V2 Food","Paella is strongly associated with Spanish cuisine.","True","medium"],
  ["V2 Food","Saffron is widely known as one of the most expensive spices.","True","medium"],
  ["V2 Food","The sandwich is commonly associated with England and the Earl of Sandwich.","True","medium"],
  ["V2 Food","Bananas are known as a potassium-rich fruit.","True","medium"],
  ["V2 Science","The primary colors of light are red, green, and blue.","True","medium"],
  ["V2 Science","Plants absorb carbon dioxide from the atmosphere for photosynthesis.","True","medium"],
  ["V2 Science","Nitrogen is the most abundant gas in Earth's atmosphere.","True","medium"],
  ["V2 Science","Oxygen is the most abundant gas in Earth's atmosphere.","False","medium","Nitrogen is the most abundant gas in Earth's atmosphere."],
  ["V2 True or False","There are more possible chess games than atoms in the observable universe.","True","medium"],
  ["V2 True or False","The human body contains more microbial cells than human cells by a 100-to-1 ratio.","False","medium","Modern estimates are much closer, roughly around the same order of magnitude."],
  ["V2 True or False","Cleopatra lived closer in time to the first iPhone than to the building of the Great Pyramid of Giza.","True","medium"],
  ["V2 True or False","The Great Wall of China is one continuous unbroken wall.","False","medium","It is a network of walls, trenches, and fortifications."],
  ["V2 True or False","Oxford University is older than the Aztec Empire.","True","medium"],
  ["V2 True or False","The Moon is slowly moving closer to Earth each year.","False","medium","The Moon is slowly moving farther away."],
  ["V2 True or False","Bananas are botanical berries, but strawberries are not.","True","medium"],
  ["V2 True or False","The planet Mercury is the hottest planet in the solar system.","False","medium","Venus is hotter because of its thick atmosphere."],
  ["V2 True or False","Wombat poop is often cube-shaped.","True","medium"],
  ["V2 True or False","The black box on an airplane is usually black.","False","medium","It is usually bright orange."],
  ["V2 True or False","A cloud can weigh hundreds of thousands of kilograms.","True","medium"],
  ["V2 True or False","Humans can distinguish over a trillion smells with certainty.","False","medium","That number is debated and not certain."],
  ["V2 True or False","The Eiffel Tower was originally meant to be temporary.","True","medium"],
  ["V2 True or False","Lightning never strikes the same place twice.","False","medium","It can strike the same place many times."],
  ["V2 True or False","Some turtles can absorb oxygen through their cloaca.","True","medium"],
  ["V2 True or False","Bulls become angry because they hate the color red.","False","medium","They react mainly to movement."],
  ["V2 True or False","A teaspoon of neutron star matter would weigh billions of tons.","True","medium"],
  ["V2 True or False","The Sahara Desert is larger than Antarctica.","False","medium","Antarctica is larger."],
  ["V2 True or False","Humans have the same usual number of neck bones as giraffes.","True","medium"],
  ["V2 True or False","The North Pole sits on permanent land.","False","medium","It sits on shifting sea ice."],
  ["V2 True or False","The dot over a lowercase i is called a tittle.","True","medium"],
  ["V2 True or False","Saturn is the only planet with rings.","False","medium","Jupiter, Uranus, and Neptune also have rings."],
  ["V2 True or False","The unicorn is the national animal of Scotland.","True","medium"],
  ["V2 True or False","The Atlantic Ocean is generally getting smaller.","False","medium","It is generally widening."],
  ["V2 True or False","The metal gallium can melt in a person's hand.","True","medium"],
  ["V2 True or False","The Titanic had enough lifeboats for everyone aboard.","False","medium","It did not have enough lifeboat space for all passengers and crew."],
  ["V2 True or False","The shortest recorded war lasted less than an hour.","True","medium"],
  ["V2 True or False","Humans and non-bird dinosaurs lived together naturally.","False","medium","Non-bird dinosaurs died out about 66 million years before humans."],
  ["V2 True or False","A single strand of spaghetti is called a spaghetto.","True","medium"],
  ["V2 True or False","Glass is a very slow-flowing liquid.","False","medium","Glass is an amorphous solid."],
  ["V2 True or False","Some octopuses can change both color and skin texture.","True","medium"],
  ["V2 True or False","The human tongue has separate zones that each taste only one flavor.","False","medium","Most taste areas can detect multiple tastes."],
  ["V2 True or False","The largest living organism is often considered to be a fungus.","True","medium"],
  ["V2 True or False","A light-year measures time.","False","medium","It measures distance."],
  ["V2 True or False","The smell of freshly cut grass is partly a plant distress signal.","True","medium"],
  ["V2 True or False","Camels store water in their humps.","False","medium","Their humps store fat."],
  ["V2 True or False","Humans glow faintly, but too weakly for our eyes to see.","True","medium"],
  ["V2 True or False","Gold is naturally strongly magnetic.","False","medium","Pure gold is not naturally magnetic."],
  ["V2 True or False","The color magenta does not have its own single wavelength of light.","True","medium"],
  ["V2 True or False","The Great Pyramid of Giza is younger than the Roman Colosseum.","False","medium","The Great Pyramid is thousands of years older."],
  ["V2 True or False","There are more trees on Earth than stars in the Milky Way.","True","medium"],
  ["V2 True or False","Most of Earth's oxygen is produced by land forests.","False","medium","A large share comes from oceanic photosynthesis."],
  ["V2 True or False","The Sun contains more than 99% of the mass in the solar system.","True","medium"],
  ["V2 True or False","Earth's atmosphere is mostly oxygen.","False","medium","It is mostly nitrogen."],
  ["V2 True or False","The human genome contains DNA from ancient viruses.","True","medium"],
  ["V2 True or False","The Amazon River has no tributaries.","False","medium","It has many tributaries."],
  ["V2 True or False","Sharks existed before trees.","True","medium"],
  ["V2 True or False","The Moon is larger than Mercury.","False","medium","Mercury is larger."],
  ["V2 True or False","A day on Venus is longer than a year on Venus.","True","medium"],
  ["V2 True or False","A solar day on Mercury is shorter than its year.","False","medium","A solar day on Mercury is longer than its year."],
  ["V2 True or False","The speed of light in vacuum is about 300,000 km/s.","True","medium"],
  ["V2 True or False","The speed of sound is faster than the speed of light.","False","medium","Light is vastly faster."],
  ["V2 True or False","About 71% of Earth's surface is covered by water.","True","medium"],
  ["V2 True or False","About 71% of Earth's water is fresh water.","False","medium","Only a small percentage of Earth's water is fresh."],
  ["V2 True or False","Roughly 97% of Earth's water is salty ocean water.","True","medium"],
  ["V2 True or False","The human brain uses about 2% of body weight and about 50% of resting energy.","False","medium","It is about 2% of body weight and roughly 20% of resting energy."],
  ["V2 True or False","The observable universe contains roughly hundreds of billions to trillions of galaxies.","True","medium"],
  ["V2 True or False","The Milky Way contains only about one million stars.","False","medium","It contains hundreds of billions of stars."],
  ["V2 True or False","Human DNA is roughly 99.9% identical from person to person.","True","medium"],
  ["V2 True or False","Humans share about 99.9% of their DNA with chimpanzees.","False","medium","The common estimate is closer to about 98 to 99%, depending on how it is measured."],
  ["V2 True or False","About 90% of all known animal species are insects.","False","medium","Insects are a huge share of known animal species, but not usually stated as 90% of all known animals."],
  ["V2 True or False","More than half of the human body's bones are in the hands and feet.","True","medium"],
  ["V2 True or False","The average adult human body has exactly 300 bones.","False","medium","Adults usually have 206 bones."],
  ["V2 True or False","About 60% of the adult human body is water, though it varies.","True","medium"],
  ["V2 True or False","The Pacific Ocean covers less than 5% of Earth's surface.","False","medium","It covers about one-third of Earth's surface."],
  ["V2 True or False","The Pacific Ocean is larger than all land on Earth combined.","True","medium"],
  ["V2 True or False","The Sahara is the largest desert on Earth.","False","medium","Antarctica is the largest desert; the Sahara is the largest hot desert."],
  ["V2 True or False","The Antarctic ice sheet holds most of the world's fresh water.","True","medium"],
  ["V2 True or False","The human heart beats about 10,000 times per day in an average adult.","False","medium","It is closer to about 100,000 times per day."],
  ["V2 True or False","An adult human has about 5 liters of blood.","True","medium"],
  ["V2 True or False","The average human body has only about 500 bacteria total.","False","medium","It has trillions of microbes."],
  ["V2 True or False","There are roughly 86 billion neurons in the human brain.","True","medium"],
  ["V2 True or False","The brain contains more neurons than there are stars in the Milky Way.","False","medium","The Milky Way has hundreds of billions of stars, more than the brain has neurons."],
  ["V2 True or False","The odds of a fair coin landing heads 10 times in a row are 1 in 1,024.","True","medium"],
  ["V2 True or False","In a group of 23 people, the chance that two share a birthday is less than 1%.","False","medium","It is about 50%."],
  ["V2 True or False","In a standard deck, the chance of drawing an ace first is 1 in 13.","True","medium"],
  ["V2 True or False","In a standard deck, the chance of drawing a queen first is 1 in 4.","False","medium","It is 1 in 13."],
  ["V2 True or False","Rolling two fair dice gives a sum of 7 more often than any other sum.","True","medium"],
  ["V2 True or False","Rolling two fair dice gives a sum of 12 more often than a sum of 7.","False","medium","A 7 has 6 combinations; 12 has only 1."],
  ["V2 True or False","The chance of rolling double sixes with two fair dice is 1 in 36.","True","medium"],
  ["V2 True or False","The chance of rolling at least one six with two fair dice is 1 in 36.","False","medium","It is 11 in 36."],
  ["V2 True or False","In a normal year, February has exactly 28 days.","True","medium"],
  ["V2 True or False","Every fourth year is always a leap year.","False","medium","Century years must usually be divisible by 400 to be leap years."],
  ["V2 True or False","There are 86,400 seconds in a day.","True","medium"],
  ["V2 True or False","There are exactly 10,000 seconds in a day.","False","medium","There are 86,400 seconds."],
  ["V2 True or False","A googol is 1 followed by 100 zeros.","True","medium"],
  ["V2 True or False","A googolplex is 1 followed by 1,000 zeros.","False","medium","It is 1 followed by a googol zeros."],
  ["V2 True or False","One million seconds is about 11.6 days.","True","medium"],
  ["V2 True or False","One billion seconds is about 11.6 days.","False","medium","It is about 31.7 years."],
  ["V2 True or False","One trillion seconds is about 31,700 years.","True","medium"],
  ["V2 True or False","A billion is always 1,000 million in every language and historical system.","False","medium","Some older systems used billion to mean a million million."],
  ["V2 True or False","The probability of being dealt a royal flush in poker is extremely low, roughly 1 in 650,000 hands.","True","medium"],
  ["V2 True or False","In poker, a royal flush is easier to get than one pair.","False","medium","One pair is much more common."],
  ["V2 True or False","Pi is irrational.","True","medium"],
  ["V2 True or False","Pi ends after exactly one trillion digits.","False","medium","Pi has no known ending and is irrational."],
  ["V2 True or False","There are infinitely many prime numbers.","True","medium"],
  ["V2 True or False","The number 1 is a prime number.","False","medium","Prime numbers must have exactly two positive divisors."],
  ["V2 True or False","Zero is an even number.","True","medium"],
  ["V2 True or False","Negative numbers cannot be squared.","False","medium","They can be squared; for example, -3 squared is 9."],
  ["V2 True or False","There are 10 possible outcomes when flipping 10 coins.","False","medium","There are 2^10, which is 1,024 possible outcome sequences."],
];

const STORAGE_KEY = "quiz-combo-desk-v2-progress-v1";
const REVIEW_KEY = "quiz-combo-desk-v2-review-v1";
const questions = questionSeeds.map(([category, prompt, answer, difficulty, explanation], index) => ({
  answer,
  category,
  difficulty,
  explanation: explanation || "",
  id: `q-${index + 1}`,
  prompt,
  statementType: ["true", "false"].includes(answer.toLowerCase()) ? answer.toLowerCase() : "",
}));
const questionById = new Map(questions.map((question) => [question.id, question]));
const rewardSteps = [1, 2, 3, 5, 8, 13, 21, 34];
const state = {
  answeredIds: new Set(),
  badStreak: 0,
  currentQuestion: null,
  keepIds: new Set(),
  mode: "question",
  removalIds: new Set(),
  rewardIndex: 0,
  result: null,
  resultTimer: null,
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
        rewardIndex: state.rewardIndex,
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

    const badStreak = Number(saved.badStreak);
    const rewardIndex = Number(saved.rewardIndex);
    state.badStreak = Number.isFinite(badStreak) ? Math.max(0, Math.trunc(badStreak)) : 0;
    state.rewardIndex = Number.isFinite(rewardIndex) ? Math.min(rewardSteps.length - 1, Math.max(0, Math.trunc(rewardIndex))) : 0;

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

function currentRewardSeconds() {
  return Math.max(1, Math.round(settings.rewardBase * rewardSteps[state.rewardIndex]));
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
  state.badStreak = 0;
  saveProgress();
  showReward();
  state.rewardIndex = Math.min(rewardSteps.length - 1, state.rewardIndex + 1);
  saveProgress();
  showResultScreen();
}

function gradeWrong() {
  if (state.mode !== "question" || !state.currentQuestion) return;
  readSettings();
  playSound(settings.wrongSound);
  state.answeredIds.add(state.currentQuestion.id);
  state.badStreak += 1;
  state.rewardIndex = Math.max(0, state.rewardIndex - 2);
  saveProgress();
  showReward("Reward dropped", "bad");
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
  state.mode = "question";
  state.result = null;
  state.rewardIndex = 0;
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
    showReward(state.badStreak > 0 ? "Reward dropped" : "Current reward", state.badStreak > 0 ? "bad" : "good");
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
