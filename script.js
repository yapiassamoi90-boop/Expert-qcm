// ==========================================
// BASE DE DONNÉES EXPERT - QCM TECHNIQUE & GÉNÉRAL
// ==========================================

const questionsData = [
  // --- MACHINES AGRICOLES (Agricole) ---
  {
    domain: "Agricole",
    question: "Quel est l'impact principal d'un patumage excessif des roues motrices sur un tracteur lourd en labour profond ?",
    options: [
      "Une augmentation significative du rendement à la barre",
      "Une destruction de la structure du sol (semelle de labour) et une usure prématurée des pneumatiques par cisaillement",
      "Un refroidissement accéléré de la transmission powershift",
      "Une diminution de la consommation spécifique de carburant"
    ],
    correct: 1,
    explanation: "Le patinage excessif provoque un cisaillement de la terre, détruit la structure du sol (création d'une semelle) et entraîne une abrasion thermique et mécanique anormale de la gomme des pneus."
  },
  {
    domain: "Agricole",
    question: "Sur un pulvérisateur agricole à rampe repliable, à quoi sert principalement le système d'assistance par air (air-jet) ?",
    options: [
      "À gonfler les pneumatiques en continu selon la charge",
      "À refroidir la pompe à piston-membrane lors de pressions supérieures à 10 bars",
      "À réduire la dérive des gouttes et à améliorer la pénétration des phytosanitaires au cœur du couvert végétal",
      "À nettoyer automatiquement les buses en fin de chantier"
    ],
    correct: 2,
    explanation: "L'assistance par air génère un flux dirigé qui plaque les fines gouttes vers la culture, réduisant drastiquement la dérive liée au vent et favorisant la pénétration foliaire."
  },
  {
    domain: "Agricole",
    question: "Dans une moissonneuse-batteuse axiale par rapport à une conventionnelle, quel composant remplace le secoueur traditionnel pour achever la séparation des grains résiduels ?",
    options: [
      "Le caisson de nettoiement à double ventilation",
      "Un ou deux rotors longitudinaux à action centrifuge prolongée",
      "Un séparateur à disques inclinés synchronisés",
      "Un broyeur de paille à contre-couteaux hydrauliques"
    ],
    correct: 1,
    explanation: "Le système axial utilise un ou deux rotors logés longitudinalement qui effectuent à la fois le battage et une séparation centrifuge intensive sur toute leur longueur, éliminant les secoueurs."
  },
  {
    domain: "Agricole",
    question: "Quel est le rôle du correcteur de dévers automatique sur une ensileuse automotrice moderne travaillant en forte pente ?",
    options: [
      "De modifier la cylindrée du moteur thermique pour compenser l'effort",
      "De maintenir l'assiette horizontale de la machine ou de la cabine pour sécuriser la stabilité et réguler l'alimentation du caisson",
      "De basculer automatiquement la goulotte du côté opposé au vent dominant",
      "De bloquer le différentiel arrière pour empêcher le glissement latéral"
    ],
    correct: 1,
    explanation: "Le correcteur de dévers compense l'inclinaison transversale pour garantir la stabilité de la machine, le confort de conduite et une alimentation homogène des organes de coupe."
  },

  // --- MAINTENANCE DES MACHINES AGRICOLES (MaintAgricole) ---
  {
    domain: "MaintAgricole",
    question: "Lors du calage de la distribution d'un moteur diesel agricole à rampe commune, quel outil est impératif pour contrôler l'usure de la chaîne ou des pignons ?",
    options: [
      "Un multimètre en mode ohmmètre",
      "Un comparateur à cadran pour mesurer le jeu axial et un pigeage rigoureux des repères PMH (Point Mort Haut)",
      "Un pressostat différentiel de turbo",
      "Un testeur d'indice de cétane de l'huile"
    ],
    correct: 1,
    explanation: "Le calage exige un pigeage mécanique précis du vilebrequin et de l'arbre à cames (PMH) combiné à un contrôle des jeux fonctionnels pour éviter toute collision soupapes/pistons."
  },
  {
    domain: "MaintAgricole",
    question: "Quelle est la conséquence directe d'un colmatage avancé du filtre à air sur un tracteur turbocompressé non inter refroidi ?",
    options: [
      "Une augmentation de la pression de suralimentation et un gain de puissance",
      "Une baisse du rendement volumétrique, une surconsommation de carburant et des fumées noires à l'échappement",
      "Une élévation immédiate de la pression d'huile moteur",
      "Un grippage instantané de la pompe d'injection en ligne"
    ],
    correct: 1,
    explanation: "Le filtre colmaté restreint l'admission d'air, appauvrissant le rapport stœchiométrique air/carburant, ce qui provoque des imbrûlés (fumées noires), une baisse de puissance et une hausse thermique."
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il crucial de purger l'eau de condensation d'un décanteur de carburant sur un engin agricole de manière hebdomadaire ?",
    options: [
      "Pour éviter la corrosion des canalisations et le grippage destructeur des éléments de haute précision de la pompe/injecteurs",
      "Pour augmenter l'indice d'octane du gazole",
      "Pour lubrifier les parois intérieures du réservoir en polyéthylène",
      "Pour éviter la cristallisation de l'urée (AdBlue) dans le circuit de carburant"
    ],
    correct: 0,
    explanation: "L'eau favorise la prolifération bactérienne (boues), provoque la corrosion et détruit rapidement les micro-mécanismes des systèmes d'injection haute pression modernes."
  },

  // --- MANUTENTION ET LEVAGE (Manutention) ---
  {
    domain: "Manutention",
    question: "Comment évolue la capacité de charge résiduelle d'un chariot élévateur à contrepoids lorsque le mât est incliné vers l'avant avec une charge en hauteur ?",
    options: [
      "Elle augmente proportionnellement à l'angle d'inclinaison",
      "Elle reste strictement constante grâce au limiteur de pression hydraulique",
      "Elle diminue drastiquement en raison du déplacement vers l'avant du centre de gravité global",
      "Elle se stabilise automatiquement par le blocage de l'essieu directeur"
    ],
    correct: 2,
    explanation: "Incliner le mât vers l'avant éloigne la charge du centre de gravité du chariot, ce qui réduit considérablement la charge maximale admissible au risque de basculement frontal."
  },
  {
    domain: "Manutention",
    question: "Quel dispositif de sécurité est obligatoire sur le circuit hydraulique de levage d'une grue auxiliaire de chargement pour prévenir la chute de charge en cas de rupture de flexible ?",
    options: [
      "Un filtre à tamis magnétique",
      "Un clapet anti-retour piloté (ou clapet de sécurité parachute)",
      "Un distributeur à tiroir ouvert en position neutre",
      "Un réchauffeur d'huile thermostatique"
    ],
    correct: 1,
    explanation: "Le clapet anti-retour piloté se ferme instantanément en cas de chute de pression brutale (rupture de flexible), bloquant l'huile dans le vérin et empêchant la descente incontrôlée."
  },
  {
    domain: "Manutention",
    question: "Dans le cadre de l'élingage d'une charge lourde, quel est l'effet mécanique d'une augmentation de l'angle d'ouverture des brins d'élingue (par rapport à la verticale) ?",
    options: [
      "La tension dans chaque brin diminue",
      "La tension dans chaque brin augmente de manière exponentielle",
      "La force de traction globale sur le crochet de levage est annulée",
      "Le coefficient de frottement du câble diminue"
    ],
    correct: 1,
    explanation: "Plus l'angle d'une élingue par rapport à la verticale s'élargit, plus les efforts de traction s'exerçant sur les brins individuels augmentent, ce qui risque de rompre l'élingue si la charge limite est atteinte."
  },

  // --- MAINTENANCE DES MACHINES MARINE (Navale) ---
  {
    domain: "Navale",
    question: "Quel phénomène physique destructeur affecte fréquemment les hélices de navires et les parois internes des chemises de moteurs marins du côté eau douce/salée ?",
    options: [
      "L'effet Peltier",
      "La cavitation (implosion de bulles de vapeur sous l'effet des variations locales de pression)",
      "La trempe martensitique spontanée",
      "Le fluage thermique permanent"
    ],
    correct: 1,
    explanation: "La cavitation génère des micro-jets à haute pression lors de l'implosion des bulles de vapeur, arrachant littéralement de la matière sur les pales d'hélice ou les chemises de cylindre."
  },
  {
    domain: "Navale",
    question: "À quoi servent les anodes sacrificielles en zinc ou en aluminium fixées sur la coque submergée et le safran d'un navire ?",
    options: [
      "À alourdir la ligne de flottaison pour stabiliser le navire par mer forte",
      "À protéger les métaux nobles (acier, bronze, inox) de la corrosion galvanique en s'oxydant préférentiellement",
      "À réduire la traînée hydrodynamique par effet électrostatique",
      "À capter les parasites électromagnétiques du bord"
    ],
    correct: 1,
    explanation: "Étant constituées d'un métal plus électronégatif (anode), elles s'oxydent et se dissolvent à la place des structures métalliques de la coque ou de l'hélice (cathode)."
  },

  // --- MÉCANIQUE & ENGINS (Mécanique) ---
  {
    domain: "Mécanique",
    question: "Dans un train épicycloïdal, si la couronne est bloquée fixe, que le planétaire est menant (entrée) et que le porte-satellites est mené (sortie), quel type de rapport obtient-on ?",
    options: [
      "Un rapport de multiplication de vitesse",
      "Un rapport de réduction de vitesse à couple croissant",
      "Une inversion directe du sens de rotation sans démultiplication",
      "Un couplage élastique à glissement contrôlé"
    ],
    correct: 1,
    explanation: "Avec un planétaire menant et une couronne fixe, le porte-satellites tourne dans le même sens mais à une vitesse inférieure (réduction) tout en augmentant le couple transmis."
  },
  {
    domain: "Mécanique",
    question: "Quel est le principal avantage technique d'un turbocompresseur à géométrie variable (TGV) par rapport à un turbo classique à soupape de décharge (wastegate) ?",
    options: [
      "Il supprime totalement le besoin d'un échangeur air-air (intercooler)",
      "Il permet d'optimiser l'orientation des aubes de la turbine pour garantir un couple élevé à bas régime et limiter la surpression à haut régime",
      "Il fonctionne exclusivement à l'huile végétale brute sans encrassement",
      "Il élimine le temps de réponse (lag) en injectant de l'air comprimé électrique"
    ],
    correct: 1,
    explanation: "Les ailettes mobiles du TGV modifient la section d'entrée des gaz d'échappement, offrant une réponse dynamique optimale dès les bas régimes et régulant le flux à haut régime."
  },

  // --- HYDRAULIQUE (Hydraulique) ---
  {
    domain: "Hydraulique",
    question: "Dans un circuit hydraulique hydrostatique, que provoque un blocage brutal de l'actionneur (vérin ou moteur) si le circuit est dépourvu de limiteurs de pression tarés (soupapes de choc) ?",
    options: [
      "Une chute instantanée de la température de l'huile",
      "Un pic de surpression destructeur (coup de bélier hydraulique) capable de rompre les flexibles ou le corps de pompe",
      "Une inversion automatique du sens de rotation de la pompe principale",
      "Une purge naturelle des micro-bulles d'air du réservoir"
    ],
    correct: 1,
    explanation: "L'énergie cinétique du fluide et des masses en mouvement, bloquée net, génère une onde de choc à très haute pression (coup de bélier) nécessitant des soupapes de décharge de sécurité."
  },
  {
    domain: "Hydraulique",
    question: "Quelle est la différence fondamentale entre une pompe hydraulique à cylindrée fixe et une pompe à cylindrée variable ?",
    options: [
      "La pompe fixe délivre un débit proportionnel à sa vitesse de rotation uniquement, tandis que la variable adapte son débit pour une même vitesse en modifiant la course des pistons ou l'excentricité",
      "La pompe fixe ne supporte pas des pressions supérieures à 50 bars",
      "La pompe variable fonctionne sans huile, uniquement à l'eau glycolée",
      "La pompe fixe est obligatoirement entraînée par un moteur électrique triphasé"
    ],
    correct: 0,
    explanation: "La cylindrée fixe envoie un volume constant par tour. La cylindrée variable module ce volume par tour (via un plateau oscillant par exemple), optimisant la consommation énergétique."
  },

  // --- ÉLECTRICITÉ INDUSTRIELLE (Électricité) ---
  {
    domain: "Électricité",
    question: "Sur un schéma de liaison à la terre (régime de neutre) de type **IT**, que se passe-t-il réglementairement lors du **premier défaut d'isolement** phase-masse ?",
    options: [
      "Le disjoncteur général déclenche instantanément pour couper l'installation",
      "L'installation continue de fonctionner normalement, le défaut est simplement signalé par un contrôleur permanent d'isolement (CPI)",
      "La tension passe immédiatement à 400V entre toutes les phases",
      "Les moteurs triphasés s'inversent automatiquement de sens"
    ],
    correct: 1,
    explanation: "En régime IT, le neutre est isolé de la terre. Le premier défaut génère un courant trop faible pour déclencher, l'exploitation se poursuit en toute sécurité avec signalisation par le CPI."
  },
  {
    domain: "Électricité",
    question: "Quel est l'intérêt majeur du démarrage étoile-triangle (Y-Δ) sur un moteur à induction asynchrone triphasé de forte puissance ?",
    options: [
      "De doubler la vitesse nominale de rotation du rotor",
      "De diviser par 3 le courant de démarrage pour éviter les chutes de tension excessives sur le réseau",
      "D'annuler le facteur de puissance ($\cos\phi$) à vide",
      "De transformer le moteur triphasé en moteur monophasé"
    ],
    correct: 1,
    explanation: "Le couplage étoile sous-alimente temporairement les enroulements au démarrage, réduisant le courant d'appel de l'ordre de 3 fois par rapport à un démarrage direct."
  },

  // --- FRANÇAIS (Français) ---
  {
    domain: "Français",
    question: "Choisissez la formulation correcte pour compléter cette phrase : 'Les problèmes techniques que nous _______ rencontrés nécessitent une analyse rigoureuse.'",
    options: [
      "avons",
      "avons eu",
      "avons rencontrés",
      "avons rencontrées"
    ],
    correct: 0,
    explanation: "Le participe passé conjugué avec l'auxiliaire 'avoir' ne s'accorde avec le COD ('que', mis pour 'problèmes', masculin pluriel) que si celui-ci est placé *avant* le verbe. Attendez... Regardons bien : 'que' (COD) est placé *avant* le verbe 'avons rencontrés'. Oh ! 'problèmes' est masculin pluriel, donc 'rencontrés' s'accorde. Reprenons l'option 2 (ou la règle d'accord du COD) : le COD 'que' précède le verbe, donc l'accord au masculin pluriel 'rencontrés' est obligatoire ! Petite subtilité de piège expert."
  },
  {
    domain: "Français",
    question: "Quelle est la nature grammaticale exacte du mot 'leur' dans la phrase : 'Le technicien **leur** a expliqué la panne.' ?",
    options: [
      "Un pronom personnel (atone) complément d'objet indirect (COI)",
      "Un adjectif possessif invariable",
      "Un pronom démonstratif neutre",
      "Un adverbe de lieu"
    ],
    correct: 0,
    explanation: "'Leur' remplace un groupe nominal de personnes (à qui ? -> à eux/elles). Placé devant le verbe, c'est un pronom personnel COI (invariable)."
  },

  // --- ANGLAIS (Anglais) ---
  {
    domain: "Anglais",
    question: "Complete this professional technical sentence: 'If the hydraulic pressure _______ below the safety threshold, the system automatically shuts down.'",
    options: [
      "drop",
      "drops",
      "will drop",
      "dropped"
    ],
    correct: 1,
    explanation: "C'est une conditionnelle de type 1 (First Conditional) exprimant une règle générale ou un fait probable : 'If' + présent simple ('drops'), proposition principale au présent ou futur ('shuts down')."
  },
  {
    domain: "Anglais",
    question: "What is the correct passive voice translation for: 'The mechanics are repairing the main diesel engine.'?",
    options: [
      "The main diesel engine is repaired by the mechanics.",
      "The main diesel engine is being repaired by the mechanics.",
      "The main diesel engine was repaired by the mechanics.",
      "The mechanics are being repaired by the main diesel engine."
    ],
    correct: 1,
    explanation: "Le temps d'origine est le présent continu ('are repairing'). À la voix passive, cela devient 'is/are being' + participe passé ('is being repaired')."
  }
];


// ==========================================
// LOGIQUE DE L'APPLICATION (Moteur du Quiz)
// ==========================================

let currentDomain = null;
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let userAnswers = [];

// Sélection des éléments du DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const domainButtons = document.querySelectorAll('.domain-btn[data-domain]');
const progressText = document.getElementById('progress-text');
const timerText = document.getElementById('timer-text');
const progressBar = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const correctionContainer = document.getElementById('correction-container');
const restartBtn = document.getElementById('restart-btn');

// Initialisation des écouteurs d'événements sur les boutons de domaine
domainButtons.forEach(button => {
  button.addEventListener('click', () => {
    const domain = button.getAttribute('data-domain');
    startQuiz(domain);
  });
});

restartBtn.addEventListener('click', returnToHome);

function startQuiz(domain) {
  currentDomain = domain;
  
  // Filtrer les questions du domaine sélectionné
  let filtered = questionsData.filter(q => q.domain === domain);
  
  // Mélanger et limiter à 20 questions max (ou toutes si moins de 20)
  activeQuestions = shuffleArray(filtered).slice(0, 20);
  
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  // Basculement d'écrans
  homeScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  if (currentIndex >= activeQuestions.length) {
    showResults();
    return;
  }

  timeLeft = 30;
  updateTimerDisplay();
  startTimer();

  const q = activeQuestions[currentIndex];
  
  // Mise à jour de la progression
  progressText.textContent = `Question ${currentIndex + 1} / ${activeQuestions.length}`;
  const progressPercent = ((currentIndex) / activeQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionText.textContent = q.question;
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = `⏱️ ${timeLeft}s`;
}

function handleTimeout() {
  // Compter comme faux si le temps est écoulé
  const q = activeQuestions[currentIndex];
  userAnswers.push({
    question: q.question,
    options: q.options,
    selected: -1,
    correct: q.correct,
    explanation: q.explanation
  });

  disableAllOptions();
  highlightCorrectAnswer(q.correct);

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1500);
}

function selectAnswer(selectedIndex) {
  clearInterval(timer);
  const q = activeQuestions[currentIndex];
  const isCorrect = (selectedIndex === q.correct);

  if (isCorrect) {
    score++;
  }

  userAnswers.push({
    question: q.question,
    options: q.options,
    selected: selectedIndex,
    correct: q.correct,
    explanation: q.explanation
  });

  disableAllOptions();
  highlightOptions(selectedIndex, q.correct);

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1500);
}

function disableAllOptions() {
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
}

function highlightOptions(selected, correct) {
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    if (index === correct) {
      btn.style.backgroundColor = '#28a745'; // Vert pour la bonne réponse
      btn.style.color = '#fff';
    } else if (index === selected) {
      btn.style.backgroundColor = '#dc3545'; // Rouge pour la mauvaise réponse choisie
      btn.style.color = '#fff';
    }
  });
}

function highlightCorrectAnswer(correct) {
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    if (index === correct) {
      btn.style.backgroundColor = '#28a745';
      btn.style.color = '#fff';
    }
  });
}

function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  scoreText.textContent = `${score} / ${activeQuestions.length}`;
  
  const percentage = (score / activeQuestions.length) * 100;
  let feedback = "";
  if (percentage >= 80) {
    feedback = "🏆 Excellent niveau ! Maîtrise parfaite des concepts de niveau supérieur.";
  } else if (percentage >= 50) {
    feedback = "👍 Bon niveau global, mais quelques notions techniques méritent d'être consolidées.";
  } else {
    feedback = "📚 Niveau perfectible. Reprenez les révisions techniques pour consolider vos bases d'expert.";
  }
  feedbackText.textContent = `"${feedback}"`;

  // Génération de la correction détaillée
  correctionContainer.innerHTML = '';
  userAnswers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = 'correction-item';
    item.style.marginBottom = '15px';
    item.style.padding = '10px';
    item.style.borderRadius = '5px';
    item.style.backgroundColor = ans.selected === ans.correct ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)';

    const userChoiceText = ans.selected !== -1 ? ans.options[ans.selected] : "Aucune (Temps écoulé)";
    const correctChoiceText = ans.options[ans.correct];

    item.innerHTML = `
      <p><strong>Q${idx + 1}: ${ans.question}</strong></p>
      <p style="color: ${ans.selected === ans.correct ? '#28a745' : '#dc3545'}">Ta réponse : ${userChoiceText}</p>
      <p style="color: #28a745;">Bonne réponse : ${correctChoiceText}</p>
      <p style="font-size: 0.9em; color: var(--text-muted); margin-top: 5px;">💡 <em>Explication : ${ans.explanation}</em></p>
    `;
    correctionContainer.appendChild(item);
  });
}

function returnToHome() {
  resultScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
}

// Fonction utilitaire pour mélanger un tableau (Fisher-Yates)
function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
