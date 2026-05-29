/*
  Misión Letras en Acción
  Cada nivel tiene 5 actividades posibles. Al iniciar una partida se elige
  una variante aleatoria por nivel para mantener la práctica motivante.
*/

const levelBank = [
  {
    id: 1,
    title: "Detectives de sonidos",
    objective: "Objetivo: Evaluar discriminación auditiva y asociación sonido inicial-grafema.",
    type: "image-choice",
    guide: "Busca la imagen que comienza con el sonido indicado.",
    correctMessage: "¡Excelente trabajo! Has encontrado el sonido correcto",
    errorMessage: "Ups, intenta nuevamente.",
    reinforcements: ["discriminación auditiva", "identificación de fonema inicial", "conciencia fonológica"],
    variants: [
      { sound: "/m/", options: imageOptions(["mesa", "sol", "pato", "luna"]), answer: "mesa" },
      { sound: "/s/", options: imageOptions(["silla", "gato", "mano", "pez"]), answer: "silla" },
      { sound: "/p/", options: imageOptions(["perro", "luna", "sol", "mesa"]), answer: "perro" },
      { sound: "/l/", options: imageOptions(["libro", "pato", "gato", "mano"]), answer: "libro" },
      { sound: "/g/", options: imageOptions(["gato", "mesa", "silla", "perro"]), answer: "gato" }
    ]
  },
  {
    id: 2,
    title: "Ordena las sílabas",
    objective: "Objetivo: Organizar sílabas para formar una palabra.",
    type: "syllable-order",
    guide: "Toca todas las sílabas en el orden correcto para formar la palabra.",
    correctMessage: "¡Muy bien! Has organizado correctamente la silabas para formar la palabra",
    errorMessage: "Revisa nuevamente el orden de las sílabas",
    reinforcements: ["segmentación silábica", "secuenciación auditiva", "planificación escrita"],
    variants: [
      { syllables: ["SA", "MA", "RI", "PO"], answer: "MARIPOSA", targetWord: "MARIPOSA" },
      { syllables: ["TO", "ZA", "PA"], answer: "ZAPATO", targetWord: "ZAPATO" },
      { syllables: ["MA", "TE", "TO"], answer: "TOMATE", targetWord: "TOMATE" },
      { syllables: ["MA", "PA", "LO"], answer: "PALOMA", targetWord: "PALOMA" },
      { syllables: ["NE", "JO", "CO"], answer: "CONEJO", targetWord: "CONEJO" }
    ]
  },
  {
    id: 3,
    title: "Palabras intrusas",
    objective: "Objetivo: Reconocer categorías semánticas e identificar la palabra que no pertenece.",
    type: "word-choice",
    guide: "Observa el grupo y encuentra la palabra que no pertenece a la categoría",
    correctMessage: "¡Correcto! Descubriste la palabra que no pertenecía a la categoría",
    errorMessage: "Observa nuevamente las palabras",
    reinforcements: ["categorización semántica", "vocabulario", "comprensión verbal"],
    variants: [
      { instruction: "Tres palabras son animales.", options: ["perro", "gato", "mesa", "conejo"], answer: "mesa" },
      { instruction: "Tres palabras son frutas.", options: ["manzana", "banano", "silla", "pera"], answer: "silla" },
      { instruction: "Tres palabras son útiles escolares.", options: ["lápiz", "cuaderno", "zapato", "borrador"], answer: "zapato" },
      { instruction: "Tres palabras son colores.", options: ["rojo", "azul", "verde", "cama"], answer: "cama" },
      { instruction: "Tres palabras son partes del cuerpo.", options: ["mano", "ojo", "nariz", "pelota"], answer: "pelota" }
    ]
  },
  {
    id: 4,
    title: "Completa la palabra",
    objective: "Objetivo: Elegir la letra que completa la palabra",
    type: "letter-choice",
    guide: "Elige la letra que forma una palabra correcta.",
    correctMessage: "¡Excelente! Has completado correctamente la palabra",
    errorMessage: "Intenta nuevamente",
    reinforcements: ["asociación fonema-grafema", "ortografía natural", "discriminación visual"],
    variants: [
      { template: "SO_", options: ["L", "P", "M"], answer: "L", fullWord: "SOL" },
      { template: "LI_RO", options: ["B", "P", "M"], answer: "B", fullWord: "LIBRO" },
      { template: "GA_O", options: ["T", "S", "P"], answer: "T", fullWord: "GATO" },
      { template: "NI_O", options: ["Ñ", "P", "S"], answer: "Ñ", fullWord: "NIÑO" },
      { template: "FO_O", options: ["C", "P", "S"], answer: "C", fullWord: "FOCO" }
    ]
  },
  {
    id: 5,
    title: "El cazador de errores",
    objective: "Objetivo: Identificar la escritura convencional de una palabra.",
    type: "word-choice",
    guide: "Elige la palabra que está escrita correctamente.",
    correctMessage: "¡Muy bien! es la escritura correcta",
    errorMessage: "Revisa nuevamente la palabra",
    reinforcements: ["ortografía arbitraria", "memoria visual ortográfica", "monitoreo de escritura"],
    variants: [
      { options: ["havion", "avión"], answer: "avión" },
      { options: ["keso", "queso"], answer: "queso" },
      { options: ["jirafa", "girafa"], answer: "jirafa" },
      { options: ["buro", "burro"], answer: "burro" },
      { options: ["llave", "yave"], answer: "llave" }
    ]
  },
  {
    id: 6,
    title: "Construye la oración",
    objective: "Objetivo: Ordena las palabras para formar la oración correcta.",
    type: "sentence-order",
    guide: "Toca las palabras y construye una oración correcta.",
    correctMessage: "¡Perfecto! La oración tiene sentido",
    errorMessage: "Lee nuevamente las palabras y organiza la oración",
    reinforcements: ["organización sintáctica", "secuencia gramatical", "estructuración escrita"],
    variants: [
      { words: ["juega", "parque", "el", "niño", "en", "el"], answer: "el niño juega en el parque", displayAnswer: "El niño juega en el parque" },
      { words: ["cuento", "lee", "la", "niña", "un"], answer: "la niña lee un cuento", displayAnswer: "La niña lee un cuento" },
      { words: ["corre", "rápido", "el", "perro"], answer: "el perro corre rápido", displayAnswer: "El perro corre rápido" },
      { words: ["prepara", "sopa", "mi", "mamá"], answer: "mi mamá prepara sopa", displayAnswer: "Mi mamá prepara sopa" },
      { words: ["clase", "cantan", "los", "niños", "en"], answer: "los niños cantan en clase", displayAnswer: "Los niños cantan en clase" }
    ]
  },
  {
    id: 7,
    title: "Lee y escribe",
    objective: "Objetivo: Lee la oración y contesta la pregunta.",
    type: "reading-input",
    guide: "Lee con atención y escribe la respuesta.",
    correctMessage: "¡Gracias por tu respuesta!",
    errorMessage: "Lee nuevamente la oración antes de responder",
    reinforcements: ["comprensión lectora", "evocación escrita", "atención verbal"],
    variants: [
      { text: "María usa un paraguas porque está lloviendo", question: "¿Qué está usando María?", answer: "paraguas" },
      { text: "Tomás guarda sus colores en la mochila", question: "¿Dónde guarda Tomás sus colores?", answer: "mochila" },
      { text: "La abuela prepara sopa caliente", question: "¿Qué prepara la abuela?", answer: "sopa" },
      { text: "El perro duerme debajo de la mesa", question: "¿Dónde duerme el perro?", answer: "mesa" },
      { text: "Sara lee un cuento antes de dormir", question: "¿Qué lee Sara?", answer: "cuento" }
    ]
  },
  {
    id: 8,
    title: "Mini escritor",
    objective: "Objetivo: Escribir una oración breve relacionada con una imagen.",
    type: "free-writing",
    guide: "Observa la imagen y describe una oración de lo que ves.",
    correctMessage: "¡Felicitaciones! Has completado la misión de escritura",
    errorMessage: "Intenta escribir una oración completa sobre la imagen",
    reinforcements: ["producción textual", "planificación escrita", "coherencia", "ortografía funcional"],
    variants: [
      { image: "nino-futbol.svg", expectedExample: "El niño juega fútbol", groups: [["nino", "niño", "chico"], ["juega", "jugando", "patea"], ["futbol", "balon", "pelota"]] },
      { image: "nina-lee.svg", expectedExample: "La niña lee un cuento", groups: [["nina", "niña"], ["lee", "leyendo"], ["cuento", "libro"]] },
      { image: "perro-corre.svg", expectedExample: "El perro corre rápido", groups: [["perro"], ["corre", "corriendo"], ["rapido", "rápido", "parque"]] },
      { image: "familia-sopa.svg", expectedExample: "La familia come sopa", groups: [["familia", "mama", "mamá", "papa", "papá"], ["come", "comen", "toma", "toman"], ["sopa", "mesa"]] },
      { image: "ninos-cantan.svg", expectedExample: "Los niños cantan en clase", groups: [["ninos", "niños"], ["cantan", "cantando"], ["clase", "salon", "salón"]] }
    ]
  }
];

function imageOptions(names) {
  return names.map(name => ({
    label: name,
    image: `${slugify(name)}.svg`
  }));
}

function slugify(value) {
  return normalizeText(value).replace(/\s+/g, "-");
}
const state = {
  currentLevel: 0,
  activeLevels: [],
  totalScore: 0,
  correctAnswers: 0,
  errors: 0,
  levelAttempts: 0,
  selectedValue: "",
  builtParts: [],
  completedLevels: [],
  difficultyAreas: new Set(),
  participant: {
    firstName: "",
    lastName: ""
  }
};

const introScreen = document.querySelector("#introScreen");
const gameScreen = document.querySelector("#gameScreen");
const resultsScreen = document.querySelector("#resultsScreen");
const playerForm = document.querySelector("#playerForm");
const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const introError = document.querySelector("#introError");
const startBtn = document.querySelector("#startBtn");
const checkBtn = document.querySelector("#checkBtn");
const resetBtn = document.querySelector("#resetBtn");
const continueBtn = document.querySelector("#continueBtn");
const printBtn = document.querySelector("#printBtn");
const restartBtn = document.querySelector("#restartBtn");
const activityContent = document.querySelector("#activityContent");
const feedbackBox = document.querySelector("#feedbackBox");
const guideText = document.querySelector("#guideText");
const missionTag = document.querySelector("#missionTag");
const missionTitle = document.querySelector("#missionTitle");
const missionObjective = document.querySelector("#missionObjective");
const levelCounter = document.querySelector("#levelCounter");
const scoreCounter = document.querySelector("#scoreCounter");
const successCounter = document.querySelector("#successCounter");
const errorCounter = document.querySelector("#errorCounter");
const progressBar = document.querySelector("#progressBar");
const starsTrack = document.querySelector("#starsTrack");
const celebrationLayer = document.querySelector("#celebrationLayer");
const successAudio = document.querySelector("#successAudio");
const errorAudio = document.querySelector("#errorAudio");

function chooseActiveLevels() {
  state.activeLevels = levelBank.map(level => {
    const variant = level.variants[Math.floor(Math.random() * level.variants.length)];
    return { ...level, ...variant, variants: undefined };
  });
}

function buildStars() {
  starsTrack.innerHTML = "";
  levelBank.forEach(() => {
    const star = document.createElement("span");
    star.className = "star-dot";
    star.textContent = "★";
    starsTrack.appendChild(star);
  });
}

function showScreen(screen) {
  [introScreen, gameScreen, resultsScreen].forEach(item => item.classList.remove("active"));
  screen.classList.add("active");
}

function cleanName(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function getParticipantFullName() {
  return `${state.participant.firstName} ${state.participant.lastName}`.trim();
}

function validateParticipant() {
  const firstName = cleanName(firstNameInput.value);
  const lastName = cleanName(lastNameInput.value);

  if (!firstName || !lastName) {
    introError.textContent = "Antes de iniciar, escribe el nombre y el apellido del participante.";
    if (!firstName) firstNameInput.focus();
    else lastNameInput.focus();
    return false;
  }

  state.participant.firstName = firstName;
  state.participant.lastName = lastName;
  introError.textContent = "";
  return true;
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,;:¡!¿?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function calculatePoints(attempts) {
  if (attempts === 1) return 10;
  if (attempts === 2) return 7;
  if (attempts === 3) return 5;
  return 0;
}

function updateHud() {
  const levelNumber = Math.min(state.currentLevel + 1, levelBank.length);
  levelCounter.textContent = `${levelNumber} / ${levelBank.length}`;
  scoreCounter.textContent = state.totalScore;
  successCounter.textContent = state.correctAnswers;
  errorCounter.textContent = state.errors;
  progressBar.style.width = `${(state.completedLevels.length / levelBank.length) * 100}%`;

  [...starsTrack.children].forEach((star, index) => {
    star.classList.toggle("active", index < state.completedLevels.length);
  });
}

function playSound(kind) {
  const audio = kind === "success" ? successAudio : errorAudio;
  audio.currentTime = 0;
  audio.play().catch(() => playFallbackTone(kind));
}

function playFallbackTone(kind) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = kind === "success" ? "triangle" : "sawtooth";
  oscillator.frequency.value = kind === "success" ? 660 : 170;
  gain.gain.setValueAtTime(0.12, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.28);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.3);
}

function celebrate() {
  celebrationLayer.innerHTML = "";
  for (let i = 0; i < 22; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent = ["★", "✦", "✧"][i % 3];
    sparkle.style.left = `${Math.random() * 96}%`;
    sparkle.style.top = `${Math.random() * 28}%`;
    sparkle.style.animationDelay = `${Math.random() * 0.25}s`;
    celebrationLayer.appendChild(sparkle);
  }
  window.setTimeout(() => { celebrationLayer.innerHTML = ""; }, 1400);
}

function showFeedback(message, isCorrect) {
  feedbackBox.textContent = message;
  feedbackBox.className = `feedback-box show ${isCorrect ? "correct" : "error"}`;
}

function clearCurrentAnswer() {
  state.selectedValue = "";
  state.builtParts = [];
  feedbackBox.className = "feedback-box";
  feedbackBox.textContent = "";
  continueBtn.disabled = true;
  renderActivity(state.activeLevels[state.currentLevel]);
}

function loadLevel(index) {
  const level = state.activeLevels[index];
  state.currentLevel = index;
  state.levelAttempts = 0;
  state.selectedValue = "";
  state.builtParts = [];

  missionTag.textContent = `Nivel ${level.id}`;
  missionTitle.textContent = level.title;
  missionObjective.textContent = level.objective;
  guideText.textContent = level.guide;
  feedbackBox.className = "feedback-box";
  feedbackBox.textContent = "";
  continueBtn.disabled = true;
  checkBtn.disabled = false;
  resetBtn.disabled = false;

  renderActivity(level);
  updateHud();
  showScreen(gameScreen);
}

function renderActivity(level) {
  activityContent.innerHTML = "";
  if (level.type === "image-choice") renderImageChoice(level);
  if (level.type === "syllable-order") renderSyllableOrder(level);
  if (level.type === "word-choice") renderWordChoice(level);
  if (level.type === "letter-choice") renderLetterChoice(level);
  if (level.type === "sentence-order") renderSentenceOrder(level);
  if (level.type === "reading-input") renderReadingInput(level);
  if (level.type === "free-writing") renderFreeWriting(level);
}

function renderImageChoice(level) {
  activityContent.innerHTML = `
    <p class="instruction">Sonido: <span class="sound-card">${level.sound}</span></p>
    <div class="options-grid"></div>
  `;

  const grid = activityContent.querySelector(".options-grid");
  level.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-card";
    button.innerHTML = `<img src="${option.image}" alt="" aria-hidden="true"><span>${option.label}</span>`;
    button.addEventListener("click", () => selectSingle(button, option.label));
    grid.appendChild(button);
  });
}

function renderSyllableOrder(level) {
  activityContent.innerHTML = `
    <p class="instruction">Ordena las sílabas para formar: <span class="sound-card">${level.targetWord}</span></p>
    <div id="buildZone" class="build-zone"><span>Tu palabra aparecerá aquí</span></div>
    <div class="syllable-bank"></div>
  `;

  const bank = activityContent.querySelector(".syllable-bank");
  level.syllables.forEach(part => addBuildButton(bank, part, "syllable-chip"));
  redrawBuildZone();
}

function renderWordChoice(level) {
  const instruction = level.instruction || (level.id === 5 ? "Elige la escritura correcta." : "Encuentra la palabra intrusa.");
  activityContent.innerHTML = `
    <p class="instruction">${instruction}</p>
    <div class="word-options"></div>
  `;

  const grid = activityContent.querySelector(".word-options");
  level.options.forEach(word => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.textContent = word;
    button.addEventListener("click", () => selectSingle(button, word));
    grid.appendChild(button);
  });
}

function renderLetterChoice(level) {
  activityContent.innerHTML = `
    <p class="instruction">Completa la palabra. Solo una opción forma una palabra correcta.</p>
    <div class="word-template">${level.template.replace("_", "<span id='missingLetter'>_</span>")}</div>
    <div class="letter-row"></div>
  `;

  const row = activityContent.querySelector(".letter-row");
  level.options.forEach(letter => {
    const button = document.createElement("button");
    button.className = "letter-card";
    button.textContent = letter;
    button.addEventListener("click", () => {
      selectSingle(button, letter);
      document.querySelector("#missingLetter").textContent = letter;
    });
    row.appendChild(button);
  });
}

function renderSentenceOrder(level) {
  activityContent.innerHTML = `
    <p class="instruction">Construye esta idea: <span class="sound-card">${level.displayAnswer}</span></p>
    <div id="buildZone" class="build-zone"><span>Tu oración aparecerá aquí</span></div>
    <div class="sentence-bank"></div>
  `;

  const bank = activityContent.querySelector(".sentence-bank");
  level.words.forEach(word => addBuildButton(bank, word, "syllable-chip"));
  redrawBuildZone();
}

function renderReadingInput(level) {
  activityContent.innerHTML = `
    <div class="read-box">${level.text}</div>
    <label class="instruction" for="readingAnswer">${level.question}</label>
    <input id="readingAnswer" class="answer-input" type="text" autocomplete="off" placeholder="Escribe tu respuesta aquí">
  `;

  const input = activityContent.querySelector("#readingAnswer");
  input.addEventListener("input", () => { state.selectedValue = input.value; });
  input.focus();
}

function renderFreeWriting(level) {
  activityContent.innerHTML = `
    <div class="writer-grid">
      <img class="writer-image" src="${level.image}" alt="Imagen para escribir una oración">
      <div>
        <p class="instruction">Escribe una oración relacionada con la imagen.</p>
        <textarea id="writerAnswer" class="writer-input" rows="5" placeholder="Ejemplo: ${level.expectedExample}"></textarea>
      </div>
    </div>
  `;

  const input = activityContent.querySelector("#writerAnswer");
  input.addEventListener("input", () => { state.selectedValue = input.value; });
  input.focus();
}

function selectSingle(button, value) {
  const siblings = button.parentElement.querySelectorAll("button");
  siblings.forEach(item => item.classList.remove("selected"));
  button.classList.add("selected");
  state.selectedValue = value;
  feedbackBox.className = "feedback-box";
  continueBtn.disabled = true;
}

function addBuildButton(container, text, className) {
  const button = document.createElement("button");
  button.className = className;
  button.textContent = text;
  button.addEventListener("click", () => {
    if (button.classList.contains("used")) return;
    button.classList.add("used");
    state.builtParts.push(text);
    state.selectedValue = state.builtParts.join("");
    redrawBuildZone();
    feedbackBox.className = "feedback-box";
    continueBtn.disabled = true;
  });
  container.appendChild(button);
}

function redrawBuildZone() {
  const zone = document.querySelector("#buildZone");
  if (!zone) return;
  if (state.builtParts.length === 0) {
    zone.innerHTML = "<span>Tu respuesta aparecerá aquí</span>";
    return;
  }
  zone.innerHTML = "";
  state.builtParts.forEach(part => {
    const token = document.createElement("span");
    token.className = "build-token";
    token.textContent = part;
    zone.appendChild(token);
  });
}

function checkAnswer() {
  const level = state.activeLevels[state.currentLevel];
  const isCorrect = validateLevel(level);
  state.levelAttempts += 1;

  if (isCorrect) {
    const points = calculatePoints(state.levelAttempts);
    state.totalScore += points;
    state.correctAnswers += 1;
    state.completedLevels.push({
      id: level.id,
      title: level.title,
      activity: getActivitySummary(level),
      attempts: state.levelAttempts,
      errors: Math.max(0, state.levelAttempts - 1),
      points,
      reinforcements: level.reinforcements
    });

    if (points === 0) level.reinforcements.forEach(area => state.difficultyAreas.add(area));
    showFeedback(`${level.correctMessage}. Puntos del nivel: ${points}`, true);
    playSound("success");
    celebrate();
    continueBtn.disabled = false;
    checkBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    state.errors += 1;
    // Solo registrar áreas de dificultad en niveles con respuesta definida (1-6)
    if (level.type !== "reading-input" && level.type !== "free-writing") {
      level.reinforcements.forEach(area => state.difficultyAreas.add(area));
    }
    showFeedback(level.errorMessage, false);
    playSound("error");
    gameScreen.classList.remove("shake");
    void gameScreen.offsetWidth;
    gameScreen.classList.add("shake");
    continueBtn.disabled = true;
  }

  updateHud();
}

function validateLevel(level) {
  // Niveles 7 y 8: cualquier respuesta con contenido es válida
  if (level.type === "reading-input" || level.type === "free-writing") {
    return state.selectedValue.trim().length > 0;
  }
  if (level.type === "syllable-order") return state.builtParts.join("") === level.answer;
  if (level.type === "sentence-order") return normalizeText(state.builtParts.join(" ")) === normalizeText(level.answer);
  return normalizeText(state.selectedValue) === normalizeText(level.answer);
}

function validateShortSentence(text, groups) {
  const normalized = normalizeText(text);
  const words = normalized.split(" ").filter(Boolean);
  if (words.length < 4) return false;
  return groups.every(group => group.some(term => normalized.includes(normalizeText(term))));
}

function getActivitySummary(level) {
  if (level.type === "image-choice") return `Sonido ${level.sound}`;
  if (level.type === "syllable-order") return level.targetWord;
  if (level.type === "letter-choice") return level.fullWord;
  if (level.type === "sentence-order") return level.displayAnswer;
  if (level.type === "reading-input") return level.question;
  if (level.type === "free-writing") return level.expectedExample;
  return level.answer;
}

function continueGame() {
  const nextLevel = state.currentLevel + 1;
  if (nextLevel < state.activeLevels.length) loadLevel(nextLevel);
  else showResults();
}

function getPerformance(score) {
  if (score >= 70) return "Desempeño adecuado para la edad";
  if (score >= 50) return "Requiere fortalecimiento leve";
  if (score >= 30) return "Requiere apoyo moderado";
  return "Requiere intervención específica y seguimiento fonoaudiológico";
}

function showResults() {
  document.querySelector("#finalScore").textContent = `${state.totalScore} / 80`;
  document.querySelector("#participantName").textContent = `Participante: ${getParticipantFullName()}`;
  document.querySelector("#performanceText").textContent = getPerformance(state.totalScore);

  const levelResults = document.querySelector("#levelResults");
  levelResults.innerHTML = "";
  state.completedLevels.forEach(result => {
    const row = document.createElement("div");
    row.className = "level-row";
    row.innerHTML = `
      <span><strong>Nivel ${result.id}:</strong> ${result.title}<br>
      Actividad: ${result.activity}<br>
      Intentos: ${result.attempts} · Errores: ${result.errors}</span>
      <strong>${result.points}/10</strong>
    `;
    levelResults.appendChild(row);
  });

  renderDifficultyList();
  renderRecommendations();
  updateHud();
  showScreen(resultsScreen);
}

function renderDifficultyList() {
  const list = document.querySelector("#difficultyList");
  const areas = [...state.difficultyAreas];
  list.innerHTML = "";
  if (areas.length === 0) {
    list.innerHTML = "<li>No se detectaron áreas de dificultad durante la misión.</li>";
    return;
  }
  areas.forEach(area => {
    const item = document.createElement("li");
    item.textContent = area;
    list.appendChild(item);
  });
}

function renderRecommendations() {
  const list = document.querySelector("#recommendationList");
  const areas = [...state.difficultyAreas];
  const recommendations = new Set();

  if (areas.some(area => area.includes("fonológica") || area.includes("fonema") || area.includes("auditiva"))) {
    recommendations.add("Realizar juegos de rimas, sonidos iniciales y búsqueda de objetos que empiecen por un fonema específico.");
  }
  if (areas.some(area => area.includes("silábica") || area.includes("secuenciación"))) {
    recommendations.add("Practicar palmadas por sílabas y ordenar tarjetas silábicas con palabras familiares.");
  }
  if (areas.some(area => area.includes("ortografía") || area.includes("grafema"))) {
    recommendations.add("Usar dictados cortos, tarjetas visuales y comparación guiada entre escritura correcta e incorrecta.");
  }
  if (areas.some(area => area.includes("sintáctica") || area.includes("textual") || area.includes("coherencia"))) {
    recommendations.add("Construir oraciones con tarjetas de sujeto, acción y lugar; después leerlas en voz alta.");
  }
  if (areas.some(area => area.includes("comprensión") || area.includes("atención"))) {
    recommendations.add("Leer frases breves y responder preguntas literales subrayando la palabra clave.");
  }
  if (state.totalScore < 30) {
    recommendations.add("Sugerir seguimiento fonoaudiológico y plan de apoyo individual para lectura y escritura.");
  }
  if (recommendations.size === 0) {
    recommendations.add("Mantener actividades de lectura compartida, escritura espontánea y juegos de palabras para consolidar avances.");
  }

  list.innerHTML = "";
  recommendations.forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });
}

function restartGame() {
  state.currentLevel = 0;
  state.totalScore = 0;
  state.correctAnswers = 0;
  state.errors = 0;
  state.levelAttempts = 0;
  state.selectedValue = "";
  state.builtParts = [];
  state.completedLevels = [];
  state.difficultyAreas = new Set();
  chooseActiveLevels();
  updateHud();
  loadLevel(0);
}

function startGameFromIntro() {
  if (!validateParticipant()) return;
  restartGame();
}

function returnToIntro() {
  state.currentLevel = 0;
  state.totalScore = 0;
  state.correctAnswers = 0;
  state.errors = 0;
  state.levelAttempts = 0;
  state.selectedValue = "";
  state.builtParts = [];
  state.completedLevels = [];
  state.difficultyAreas = new Set();
  firstNameInput.value = "";
  lastNameInput.value = "";
  introError.textContent = "";
  updateHud();
  showScreen(introScreen);
  firstNameInput.focus();
}

playerForm.addEventListener("submit", event => {
  event.preventDefault();
  startGameFromIntro();
});

firstNameInput.addEventListener("input", () => { introError.textContent = ""; });
lastNameInput.addEventListener("input", () => { introError.textContent = ""; });
startBtn.addEventListener("click", startGameFromIntro);
checkBtn.addEventListener("click", checkAnswer);
resetBtn.addEventListener("click", clearCurrentAnswer);
continueBtn.addEventListener("click", continueGame);
printBtn.addEventListener("click", () => window.print());
restartBtn.addEventListener("click", returnToIntro);

buildStars();
chooseActiveLevels();
updateHud();
