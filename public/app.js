const easySeeds = [
  ["Science", "Which planet has the Great Red Spot storm?", "Jupiter"],
  ["Science", "What gas do plants take in for photosynthesis?", "Carbon dioxide"],
  ["Science", "What part of the body pumps blood around it?", "The heart"],
  ["Science", "What force keeps the Moon orbiting Earth?", "Gravity"],
  ["Science", "Which metal is liquid at room temperature?", "Mercury"],
  ["Science", "What is the nearest star to Earth after the Sun?", "Proxima Centauri"],
  ["Science", "What do bees collect from flowers to make honey?", "Nectar"],
  ["Science", "Which organ filters blood and makes urine?", "The kidney"],
  ["Science", "What is the chemical symbol for oxygen?", "O"],
  ["Science", "What simple machine uses a wheel and a rope?", "A pulley"],
  ["History", "Who was the first president of the United States?", "George Washington"],
  ["History", "Which ancient civilization built the Giza pyramids?", "Ancient Egypt"],
  ["History", "What wall divided a European capital during the Cold War?", "The Berlin Wall"],
  ["History", "Which empire used Latin and ruled from Rome?", "The Roman Empire"],
  ["History", "Who painted the Mona Lisa and sketched flying machines?", "Leonardo da Vinci"],
  ["History", "What ship carried the Pilgrims to America in 1620?", "The Mayflower"],
  ["History", "Which country gave the Statue of Liberty to the U.S.?", "France"],
  ["History", "Which queen ruled Egypt and met Caesar and Antony?", "Cleopatra"],
  ["History", "Which war ended in Europe in 1945?", "World War II"],
  ["History", "Which U.S. president issued the Emancipation Proclamation?", "Abraham Lincoln"],
  ["Geography", "Which ocean lies between California and Japan?", "The Pacific Ocean"],
  ["Geography", "Which Italian city is famous for canals and gondolas?", "Venice"],
  ["Geography", "Which river runs through Cairo and Luxor?", "The Nile"],
  ["Geography", "Which city contains the Louvre and the Eiffel Tower?", "Paris"],
  ["Geography", "Which country contains most of the Amazon rainforest?", "Brazil"],
  ["Geography", "What is the tallest mountain above sea level?", "Mount Everest"],
  ["Geography", "Which capital city includes the Shibuya crossing?", "Tokyo"],
  ["Geography", "Which country includes Madrid and Seville?", "Spain"],
  ["Geography", "Which ocean lies between Ireland and Newfoundland?", "The Atlantic Ocean"],
  ["Geography", "Siberia is mostly in which country?", "Russia"],
  ["Literature", "Who wrote both Hamlet and Romeo and Juliet?", "William Shakespeare"],
  ["Literature", "What school do Harry Potter and Hermione attend?", "Hogwarts"],
  ["Literature", "Which bear is friends with Piglet and loves honey?", "Winnie-the-Pooh"],
  ["Literature", "Who created the Grinch and the Cat in the Hat?", "Dr. Seuss"],
  ["Literature", "Which fairy-tale character leaves a glass slipper?", "Cinderella"],
  ["Literature", "What rabbit is chased in Mr. McGregor's garden?", "Peter Rabbit"],
  ["Literature", "Who wrote Charlie and the Chocolate Factory?", "Roald Dahl"],
  ["Literature", "Which detective lives at 221B Baker Street?", "Sherlock Holmes"],
  ["Literature", "Which hobbit is hired as a burglar in The Hobbit?", "Bilbo Baggins"],
  ["Literature", "Which wolf disguises himself as Little Red Riding Hood's grandmother?", "The Big Bad Wolf"],
  ["Film & TV", "Which Disney film follows Simba leaving Pride Rock?", "The Lion King"],
  ["Film & TV", "In which film does Neo discover a simulated world?", "The Matrix"],
  ["Film & TV", "Which animated family lives at 742 Evergreen Terrace?", "The Simpsons"],
  ["Film & TV", "What snowman is brought to life in Frozen?", "Olaf"],
  ["Film & TV", "Which Pixar film features Woody and Buzz Lightyear?", "Toy Story"],
  ["Film & TV", "Which superhero works for the Daily Bugle?", "Spider-Man"],
  ["Film & TV", "Which hero is summoned by the Bat-Signal?", "Batman"],
  ["Film & TV", "Which saga features Jedi, Sith, and lightsabers?", "Star Wars"],
  ["Film & TV", "Which green ogre lives in a swamp with Donkey?", "Shrek"],
  ["Film & TV", "Which wizard guides Frodo in The Lord of the Rings?", "Gandalf"],
  ["Music", "Which instrument has keys, hammers, and strings?", "A piano"],
  ["Music", "Which band released the album Abbey Road?", "The Beatles"],
  ["Music", "Who was known for the moonwalk and a white glove?", "Michael Jackson"],
  ["Music", "Which string instrument is held under the chin?", "A violin"],
  ["Music", "What word describes the speed of a piece of music?", "Tempo"],
  ["Music", "Which singer released the song Hello in 2015?", "Adele"],
  ["Music", "Which voice type is lower than baritone?", "Bass"],
  ["Music", "What group sings soprano, alto, tenor, and bass parts?", "A choir"],
  ["Music", "Which instrument family includes trumpets and trombones?", "Brass"],
  ["Music", "Which rock instrument usually has six strings?", "A guitar"],
  ["Sports", "How many players start for one soccer team?", "Eleven"],
  ["Sports", "Which sport uses a shuttlecock instead of a ball?", "Badminton"],
  ["Sports", "What basketball shot is taken from the foul line?", "A free throw"],
  ["Sports", "Which sport has innings, bases, and a pitcher's mound?", "Baseball"],
  ["Sports", "Which tennis tournament is played on grass in London?", "Wimbledon"],
  ["Sports", "How many rings are on the Olympic flag?", "Five"],
  ["Sports", "Which sport uses a puck and a penalty box?", "Ice hockey"],
  ["Sports", "What is a six-point score in American football called?", "A touchdown"],
  ["Sports", "In golf, what is one stroke under par called?", "A birdie"],
  ["Sports", "Which soccer player can usually use hands in the box?", "The goalkeeper"],
  ["Technology", "What does CPU stand for in a computer?", "Central processing unit"],
  ["Technology", "Which language mainly styles web pages?", "CSS"],
  ["Technology", "What does GPS help a phone or car find?", "Location"],
  ["Technology", "What device connects a home network to Wi-Fi?", "A router"],
  ["Technology", "What is unwanted junk email commonly called?", "Spam"],
  ["Technology", "What secret phrase protects a user account?", "A password"],
  ["Technology", "What symbol starts many social-media tags?", "A hashtag"],
  ["Technology", "What does USB commonly connect to a computer?", "Devices"],
  ["Technology", "Which company makes the iPhone and Mac?", "Apple"],
  ["Technology", "What does URL mean in everyday web use?", "A web address"],
  ["Food", "Which Japanese dish uses vinegared rice and seafood?", "Sushi"],
  ["Food", "What are dried grapes called?", "Raisins"],
  ["Food", "Which Middle Eastern dip is made from chickpeas?", "Hummus"],
  ["Food", "What Italian frozen dessert is denser than ice cream?", "Gelato"],
  ["Food", "Which cheese is most associated with stretchy pizza?", "Mozzarella"],
  ["Food", "What strong coffee is forced through fine grounds?", "Espresso"],
  ["Food", "Which grain is used to make most bread flour?", "Wheat"],
  ["Food", "Which fruit is used in cider and many pies?", "Apple"],
  ["Food", "What paste made from sesame seeds goes into hummus?", "Tahini"],
  ["Food", "Which herb is the main green flavor in pesto?", "Basil"],
  ["Nature", "What plant do pandas eat for most of their diet?", "Bamboo"],
  ["Nature", "What animal does a tadpole grow into?", "A frog"],
  ["Nature", "What is a group of wolves called?", "A pack"],
  ["Nature", "Which tree grows acorns?", "An oak tree"],
  ["Nature", "What insect does a caterpillar usually become?", "A butterfly"],
  ["Nature", "Which large mammal has tusks and a trunk?", "An elephant"],
  ["Nature", "Which striped animal is related to a horse?", "A zebra"],
  ["Nature", "What gas do animals need to breathe?", "Oxygen"],
  ["Nature", "What natural event is measured by a seismograph?", "An earthquake"],
  ["Nature", "What ocean animal has eight arms and can release ink?", "An octopus"],
];

const mediumSeeds = [
  ["Science", "Which element has the symbol Na and appears in table salt?", "Sodium"],
  ["Science", "What scale measures how acidic or alkaline a substance is?", "The pH scale"],
  ["Science", "Which blood cells include lymphocytes and fight infection?", "White blood cells"],
  ["Science", "Which cell structures release energy during respiration?", "Mitochondria"],
  ["Science", "What process changes liquid water into vapor at the surface?", "Evaporation"],
  ["Science", "Which ringed planet has the moon Titan?", "Saturn"],
  ["Science", "What type of energy is stored in food bonds?", "Chemical energy"],
  ["Science", "Which mineral is rated 10 on the Mohs hardness scale?", "Diamond"],
  ["Science", "Which cell part contains chromosomes in plant and animal cells?", "The nucleus"],
  ["Science", "What is the main gas in Earth's atmosphere?", "Nitrogen"],
  ["History", "In what year did World War II end in Europe?", "1945"],
  ["History", "Mansa Musa ruled which wealthy West African empire?", "The Mali Empire"],
  ["History", "Which revolution began with the storming of the Bastille?", "The French Revolution"],
  ["History", "What was Byzantium later renamed before becoming Istanbul?", "Constantinople"],
  ["History", "Which treaty was signed in the Hall of Mirrors in 1919?", "The Treaty of Versailles"],
  ["History", "Who became Rome's first emperor after defeating Antony?", "Augustus"],
  ["History", "What trade route linked China with Europe for centuries?", "The Silk Road"],
  ["History", "Which Tudor queen ruled when the Spanish Armada failed?", "Elizabeth I"],
  ["History", "Which navigator sailed for Spain across the Atlantic in 1492?", "Christopher Columbus"],
  ["History", "What name is given to the 1929 U.S. stock market crash day?", "Black Tuesday"],
  ["Geography", "Which capital city sits near the Cook Strait in New Zealand?", "Wellington"],
  ["Geography", "Mount Kilimanjaro is found in which African country?", "Tanzania"],
  ["Geography", "Which strait links the Atlantic Ocean and Mediterranean Sea?", "The Strait of Gibraltar"],
  ["Geography", "Which river runs through Vienna, Budapest, and Belgrade?", "The Danube"],
  ["Geography", "Palermo is the capital of which Mediterranean island?", "Sicily"],
  ["Geography", "Which Canadian capital lies beside Gatineau?", "Ottawa"],
  ["Geography", "Which desert stretches from Mauritania toward Egypt?", "The Sahara"],
  ["Geography", "Which mountain range is often Europe's eastern boundary?", "The Ural Mountains"],
  ["Geography", "Which capital city stands on South Korea's Han River?", "Seoul"],
  ["Geography", "Casablanca is the largest city in which country?", "Morocco"],
  ["Literature", "Who created Elizabeth Bennet and Mr. Darcy?", "Jane Austen"],
  ["Literature", "What dragon guards treasure in The Hobbit?", "Smaug"],
  ["Literature", "Which novel is about Captain Ahab hunting a white whale?", "Moby-Dick"],
  ["Literature", "Who created the detective Hercule Poirot?", "Agatha Christie"],
  ["Literature", "Which Greek epic follows Odysseus trying to get home?", "The Odyssey"],
  ["Literature", "Who wrote Frankenstein after a stay near Lake Geneva?", "Mary Shelley"],
  ["Literature", "Which dystopian novel features Room 101?", "1984"],
  ["Literature", "Which novel is set partly in West Egg on Long Island?", "The Great Gatsby"],
  ["Literature", "What is the surname of Jo, Meg, Beth, and Amy?", "March"],
  ["Literature", "Which author created the town of Macondo?", "Gabriel Garcia Marquez"],
  ["Film & TV", "Who directed Jaws, Jurassic Park, and E.T.?", "Steven Spielberg"],
  ["Film & TV", "What is the coffee shop called in Friends?", "Central Perk"],
  ["Film & TV", "Which actor plays Jack Sparrow in Pirates of the Caribbean?", "Johnny Depp"],
  ["Film & TV", "What ship does Han Solo captain in Star Wars?", "The Millennium Falcon"],
  ["Film & TV", "Who directed the animated film Spirited Away?", "Hayao Miyazaki"],
  ["Film & TV", "What newspaper employs Clark Kent in Superman stories?", "The Daily Planet"],
  ["Film & TV", "Which classic film features Rick's Cafe Americain?", "Casablanca"],
  ["Film & TV", "Which actor plays Forrest Gump and Woody's voice?", "Tom Hanks"],
  ["Film & TV", "Which series begins with a boy vanishing in Hawkins?", "Stranger Things"],
  ["Film & TV", "What fictional African kingdom is rich in vibranium?", "Wakanda"],
  ["Music", "Who composed the Fifth Symphony and Moonlight Sonata?", "Ludwig van Beethoven"],
  ["Music", "Which reggae singer released Exodus and Legend?", "Bob Marley"],
  ["Music", "Who was Queen's lead singer at Live Aid in 1985?", "Freddie Mercury"],
  ["Music", "What musical symbol raises a note by one semitone?", "A sharp"],
  ["Music", "Which singer released Vogue and Like a Prayer?", "Madonna"],
  ["Music", "What Italian term means gradually getting louder?", "Crescendo"],
  ["Music", "Which band made The Dark Side of the Moon?", "Pink Floyd"],
  ["Music", "Who composed The Magic Flute and Don Giovanni?", "Wolfgang Amadeus Mozart"],
  ["Music", "Which instrument sits between violin and cello in pitch?", "A viola"],
  ["Music", "Which rapper released The College Dropout in 2004?", "Kanye West"],
  ["Sports", "Which country did Pele represent in international soccer?", "Brazil"],
  ["Sports", "What name did boxer Cassius Clay later take?", "Muhammad Ali"],
  ["Sports", "Which cycling race traditionally finishes in Paris?", "The Tour de France"],
  ["Sports", "Which team did Michael Jordan lead in the 1990s?", "The Chicago Bulls"],
  ["Sports", "What is it called when a batter circles all bases on one hit?", "A home run"],
  ["Sports", "Which winter sport combines skiing and rifle shooting?", "Biathlon"],
  ["Sports", "Which Swiss tennis player is known for a one-handed backhand?", "Roger Federer"],
  ["Sports", "Which sport features scrums, lineouts, and tries?", "Rugby"],
  ["Sports", "What race combines swimming, cycling, and running?", "Triathlon"],
  ["Sports", "Which golf tournament awards a green jacket?", "The Masters"],
  ["Technology", "Which language provides the structure of most web pages?", "HTML"],
  ["Technology", "Which language is used to query relational databases?", "SQL"],
  ["Technology", "What backup method stores copies away from the device?", "Cloud backup"],
  ["Technology", "Which open-source kernel is used by Android?", "Linux"],
  ["Technology", "What does HTTPS add to ordinary HTTP?", "Encryption"],
  ["Technology", "What umbrella term includes viruses and ransomware?", "Malware"],
  ["Technology", "What computer memory is usually cleared when power is off?", "RAM"],
  ["Technology", "What ledger technology groups transactions into blocks?", "Blockchain"],
  ["Technology", "What does two-factor authentication ask for besides a password?", "A second proof"],
  ["Technology", "Which file format is often used for compressed archives?", "ZIP"],
  ["Food", "Which yellow spice gives many curries their color?", "Turmeric"],
  ["Food", "Which short-grain rice is commonly used for creamy risotto?", "Arborio rice"],
  ["Food", "Which folded Mexican food is usually made with a tortilla?", "A taco"],
  ["Food", "What spicy Korean side dish is often made from cabbage?", "Kimchi"],
  ["Food", "Tofu is made from which type of bean?", "Soybean"],
  ["Food", "Which crescent pastry is made with laminated dough?", "Croissant"],
  ["Food", "What are fried chickpea balls in Middle Eastern cooking called?", "Falafel"],
  ["Food", "Which cheese is used in Greek salad and comes in brine?", "Feta"],
  ["Food", "Which Italian dessert layers coffee-soaked biscuits and mascarpone?", "Tiramisu"],
  ["Food", "Which sauce is traditionally made from egg yolk, oil, and acid?", "Mayonnaise"],
  ["Nature", "Which cold biome has permafrost and few trees?", "Tundra"],
  ["Nature", "Frogs, toads, and newts belong to which animal group?", "Amphibians"],
  ["Nature", "Which evergreen group includes pines, spruces, and firs?", "Conifers"],
  ["Nature", "Which bird is famous for pole-to-pole migration?", "The Arctic tern"],
  ["Nature", "What ecosystem is built by tiny coral animals?", "A coral reef"],
  ["Nature", "Which big cat has rosette-shaped spots?", "A leopard"],
  ["Nature", "Which insect communicates food location with a waggle dance?", "A honeybee"],
  ["Nature", "What process do plants use to make sugar from sunlight?", "Photosynthesis"],
  ["Nature", "Which natural disaster begins undersea and can create giant waves?", "A tsunami"],
  ["Nature", "What is the hard outer skeleton of an insect called?", "An exoskeleton"],
];
function buildQuestions(seeds, count, difficulty) {
  return Array.from({ length: count }, (_, index) => {
    const [category, prompt, answer] = seeds[index % seeds.length];
    return {
      answer,
      category,
      difficulty,
      id: `${difficulty}-${index + 1}`,
      prompt,
    };
  });
}

const STORAGE_KEY = "quiz-combo-desk-progress-v2";
const questions = [...buildQuestions(easySeeds, 300, "easy"), ...buildQuestions(mediumSeeds, 200, "medium")];
const questionById = new Map(questions.map((question) => [question.id, question]));
const state = {
  answeredIds: new Set(),
  badStreak: 0,
  currentQuestion: null,
  goodStreak: 0,
  mode: "question",
  result: null,
  resultTimer: null,
  timer: null,
  timerEnded: false,
  timerRunning: false,
  timerRemaining: 5,
};
const settings = {
  correctSound: "chime",
  punishmentBase: 1,
  punishmentLengthBase: 10,
  punishmentLengthStep: 12,
  punishmentScaling: "accelerated",
  punishmentStep: 1,
  questionSeconds: 5,
  rewardBase: 10,
  rewardScaling: "accelerated",
  rewardStep: 12,
  timerEnabled: true,
  timerSound: "alarm",
  timerSoundEnabled: true,
  wrongSound: "buzz",
};
const nodes = {
  answer: document.getElementById("answerText"),
  bankSummary: document.getElementById("bankSummary"),
  correctButton: document.getElementById("correctButton"),
  correctSound: document.getElementById("correctSound"),
  difficulty: document.getElementById("questionDifficulty"),
  outcomeLabel: document.getElementById("outcomeLabel"),
  outcomePanel: document.getElementById("outcomePanel"),
  outcomeValue: document.getElementById("outcomeValue"),
  position: document.getElementById("questionPosition"),
  progress: document.getElementById("progressCount"),
  prompt: document.getElementById("questionPrompt"),
  punishmentBase: document.getElementById("punishmentBase"),
  punishmentLengthBase: document.getElementById("punishmentLengthBase"),
  punishmentLengthStep: document.getElementById("punishmentLengthStep"),
  punishmentScaling: document.getElementById("punishmentScaling"),
  punishmentStep: document.getElementById("punishmentStep"),
  questionSeconds: document.getElementById("questionSeconds"),
  rewardBase: document.getElementById("rewardBase"),
  rewardScaling: document.getElementById("rewardScaling"),
  rewardStep: document.getElementById("rewardStep"),
  restartButton: document.getElementById("restartButton"),
  settingsForm: document.getElementById("settingsForm"),
  skipButton: document.getElementById("skipButton"),
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
  settings.rewardBase = getNumber(nodes.rewardBase, 10, 1, 600);
  settings.rewardStep = getNumber(nodes.rewardStep, 12, 0, 300);
  settings.rewardScaling = nodes.rewardScaling.value;
  settings.punishmentBase = getNumber(nodes.punishmentBase, 1, 1, 99);
  settings.punishmentStep = getNumber(nodes.punishmentStep, 1, 0, 20);
  settings.punishmentScaling = nodes.punishmentScaling.value;
  settings.punishmentLengthBase = getNumber(nodes.punishmentLengthBase, 10, 1, 600);
  settings.punishmentLengthStep = getNumber(nodes.punishmentLengthStep, 12, 0, 300);
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
    state.goodStreak = Number.isFinite(goodStreak) ? Math.max(0, Math.trunc(goodStreak)) : 0;
    state.badStreak = Number.isFinite(badStreak) ? Math.max(0, Math.trunc(badStreak)) : 0;

    return questionById.get(saved.currentQuestionId) || null;
  } catch {
    return null;
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
  if (scaling === "accelerated") return (extra * (extra + 1) * step) / 2;
  return extra * step;
}

function rewardFor(streak) {
  return Math.round(settings.rewardBase + growth(streak, settings.rewardStep, settings.rewardScaling));
}

function punishmentFor(streak) {
  return {
    intensity: Math.round(settings.punishmentBase + growth(streak, settings.punishmentStep, settings.punishmentScaling)),
    length: Math.round(settings.punishmentLengthBase + growth(streak, settings.punishmentLengthStep, settings.punishmentScaling)),
  };
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

function setQuestion(question) {
  stopResultTimer();
  state.currentQuestion = question;
  state.mode = "question";
  state.result = null;
  nodes.prompt.textContent = question.prompt;
  nodes.answer.textContent = question.answer;
  nodes.difficulty.textContent = question.difficulty === "easy" ? "Easy" : "Medium";
  nodes.position.textContent = `Question ${state.answeredIds.size + 1}`;
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

function showReward() {
  const seconds = rewardFor(Math.max(1, state.goodStreak));
  nodes.outcomePanel.className = "outcome-panel good";
  nodes.outcomeLabel.textContent = "Current reward";
  nodes.outcomeValue.textContent = `${seconds}s`;
  state.result = { type: "reward", duration: seconds, label: "Current reward", value: `${seconds}s` };
}

function showPunishment() {
  const punishment = punishmentFor(Math.max(1, state.badStreak));
  nodes.outcomePanel.className = "outcome-panel bad";
  nodes.outcomeLabel.textContent = "Punishment";
  nodes.outcomeValue.textContent = `Intensity ${punishment.intensity} / ${punishment.length}s`;
  state.result = {
    type: "punishment",
    duration: punishment.length,
    label: "Punishment",
    value: `Intensity ${punishment.intensity} / ${punishment.length}s`,
  };
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
  state.goodStreak = 0;
  saveProgress();
  showPunishment();
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
  clearProgress();
  renderHeader();
  setQuestion(randomQuestion());
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
  if (state.mode === "result" && state.badStreak > 0) {
    showPunishment();
  } else if (state.mode === "result") {
    showReward();
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
nodes.outcomePanel.addEventListener("click", runResultCountdown);
nodes.outcomePanel.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    runResultCountdown();
  }
});

readSettings();
const savedQuestion = loadProgress();
renderHeader();
setQuestion(savedQuestion && !state.answeredIds.has(savedQuestion.id) ? savedQuestion : randomQuestion());

window.__quizStats = {
  easy: questions.filter((question) => question.difficulty === "easy").length,
  medium: questions.filter((question) => question.difficulty === "medium").length,
  total: questions.length,
};
