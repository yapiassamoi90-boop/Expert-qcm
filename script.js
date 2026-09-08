<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Technique & Académique - Niveau Supérieur</title>
    <style>
        :root {
            --bg-primary: #0f172a;
            --bg-card: #1e293b;
            --accent: #38bdf8;
            --accent-hover: #0ea5e9;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --danger: #ef4444;
            --success: #22c55e;
            --border: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 600px;
            background-color: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
        }

        h1 {
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: 20px;
            color: var(--accent);
            line-height: 1.4;
        }

        .hidden {
            display: none !important;
        }

        /* Écran d'accueil - Liste des domaines */
        .domain-btn {
            width: 100%;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            border: none;
            padding: 14px 20px;
            margin-bottom: 12px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
        }

        .domain-btn:hover {
            background: linear-gradient(135deg, #1d4ed8, #1e40af);
            transform: translateY(-2px);
            box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.3);
        }

        /* Écran de Quiz */
        .quiz-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .progress-bar-container {
            width: 100%;
            height: 8px;
            background-color: var(--border);
            border-radius: 4px;
            margin-bottom: 20px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            background-color: var(--accent);
            width: 0%;
            transition: width 0.3s ease;
        }

        .image-container {
            margin-bottom: 16px;
            border-radius: 8px;
            overflow: hidden;
            background: #0f172a;
            border: 1px solid var(--border);
        }

        .question-text {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .options-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .option-btn {
            background-color: #0f172a;
            color: var(--text-main);
            border: 1px solid var(--border);
            padding: 12px 16px;
            border-radius: 8px;
            text-align: left;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .option-btn:hover:not(:disabled) {
            background-color: #334155;
            border-color: var(--accent);
        }

        .option-btn:disabled {
            cursor: default;
        }

        /* Écran de Résultats */
        .result-score {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            color: var(--accent);
            margin: 15px 0;
        }

        .feedback-text {
            text-align: center;
            font-size: 1rem;
            color: var(--text-muted);
            margin-bottom: 20px;
        }

        .correction-container {
            max-height: 300px;
            overflow-y: auto;
            margin-bottom: 20px;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 10px;
        }

        .correction-item {
            font-size: 0.85rem;
            padding: 10px;
            border-bottom: 1px solid var(--border);
        }

        .correction-item:last-child {
            border-bottom: none;
        }

        .restart-btn {
            width: 100%;
            background-color: var(--accent);
            color: #0f172a;
            border: none;
            padding: 14px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        .restart-btn:hover {
            background-color: var(--accent-hover);
        }
    </style>
</head>
<body>

    <div class="container" id="home-screen">
        <h1>Sélectionne ton domaine d'expertise<br><span style="font-size: 0.85rem; color: #94a3b8;">Niveau Moyen-Supérieur (Chronomètre 30s)</span></h1>
        <div id="domain-buttons-container">
            <!-- Boutons générés dynamiquement ou statiques -->
            <button class="domain-btn" data-domain="Agricole">🚜 Machines Agricoles (Supérieur)</button>
            <button class="domain-btn" data-domain="MaintAgricole">🔧 Maintenance des machines agricoles</button>
            <button class="domain-btn" data-domain="Manutention">🏗️ Manutention et levage</button>
            <button class="domain-btn" data-domain="Navale">⚓ Maintenance des machines marines</button>
            <button class="domain-btn" data-domain="Mécanique">⚙️ Mécanique & Engins</button>
            <button class="domain-btn" data-domain="Hydraulique">💧 Hydraulique</button>
            <button class="domain-btn" data-domain="Électricité">⚡ Électricité Industrielle</button>
            <button class="domain-btn" data-domain="Français">📚 Français (Grammaire Avancée)</button>
            <button class="domain-btn" data-domain="Anglais">🇬🇧 Anglais (Grammar & Passive)</button>
        </div>
    </div>

    <div class="container hidden" id="quiz-screen">
        <div class="quiz-header">
            <span id="progress-text">Question 1 / 20</span>
            <span id="timer-text">⏱️ 30s</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" id="progress"></div>
        </div>
        <div class="image-container" id="image-container"></div>
        <div class="question-text" id="question-text">Chargement de la question...</div>
        <div class="options-container" id="options-container"></div>
    </div>

    <div class="container hidden" id="result-screen">
        <h1>Résultats du Test</h1>
        <div class="result-score" id="score-text">0 / 0</div>
        <div class="feedback-text" id="feedback-text">Analyse en cours...</div>
        <div class="correction-container" id="correction-container"></div>
        <button class="restart-btn" id="restart-btn">🔄 Choisir un autre domaine</button>
    </div>

    <script>
        // Base de données complète - Niveau Supérieur
        const questionsData = [
          // --- MACHINES AGRICOLES ---
          {
            domain: "Agricole",
            question: "Lors de l'utilisation d'une faucheuse-conditionneuse lourde nécessitant un régime de 1000 tr/min à la prise de force (PDF), quel est l'avantage majeur d'utiliser l'arbre 1000 tr/min 'éco' (ou 1000E) du tracteur ?",
            options: ["Augmenter la vitesse d'avancement du tracteur", "Obtenir le régime de PDF nominal à un régime moteur réduit, économisant du carburant et réduisant le bruit", "Refroidir l'huile du pont arrière plus rapidement", "Supprimer totalement les vibrations du cardan"],
            correct: 1,
            explanation: "Le mode 1000E permet d'atteindre les 1000 tr/min de PDF avec un moteur tournant à environ 1550 tr/min au lieu de 2100 tr/min, réduisant la consommation spécifique.",
            svgType: "motor"
          },
          {
            domain: "Agricole",
            question: "Sur un circuit hydraulique Load-Sensing à centre fermé avec pompe à cylindrée variable, comment le signal de charge (LS) informe-t-il la pompe ?",
            options: ["Par un câble électrique relié au tableau de bord", "Par une ligne pilote hydraulique transmettant la pression la plus élevée demandée par les distributeurs", "En augmentant la température de l'huile", "En bloquant le retour au réservoir"],
            correct: 1,
            explanation: "Le signal LS maintient une pression différentielle constante (delta P) entre la sortie de pompe et la charge pour ajuster exactement la cylindrée.",
            svgType: "pressure"
          },

          // --- MAINTENANCE DES MACHINES AGRICOLES ---
          {
            domain: "MaintAgricole",
            question: "Un tracteur subit des surchauffes moteur répétées malgré un radiateur parfaitement propre et un thermostat fonctionnel. Quel composant secondaire du circuit de refroidissement doit-on en priorité inspecter et nettoyer ou tarer ?",
            options: ["La pompe à eau (turbine érodée ou cavitation)", "Le capteur de pression d'huile", "Le filtre à air principal", "L'alternateur"],
            correct: 0,
            explanation: "Une érosion des pales de la turbine de la pompe à eau réduit considérablement le débit de circulation du liquide de refroidissement malgré un radiateur propre.",
            svgType: "warning"
          },
          {
            domain: "MaintAgricole",
            question: "Quel risque majeur court-on en cas de présence minime de limaille de fer issue de la pompe haute pression dans un système d'injection Common Rail ?",
            options: ["Une simple fumée blanche à froid", "Le grippage instantané et la destruction en chaîne de tous les injecteurs piézoélectriques ou électromagnétiques", "Une baisse de la tension de la batterie", "Un blocage du pont avant"],
            correct: 1,
            explanation: "Les tolérances d'ajustement dans les injecteurs Common Rail sont de l'ordre du micron ; la moindre particule métallique les détruit irrémédiablement.",
            svgType: "filter"
          },

          // --- MANUTENTION ET LEVAGE ---
          {
            domain: "Manutention",
            question: "Si l'on manipule une charge dont le centre de gravité dépasse la distance nominale spécifiée sur l'abaque (ex: charge plus large que prévue), que se passe-t-il pour la capacité de levage maximale ?",
            options: ["Elle augmente proportionnellement", "Elle diminue de manière significative pour éviter le basculement avant", "Elle reste rigoureusement inchangée", "La vitesse de levage s'accélère automatiquement"],
            correct: 1,
            explanation: "Le moment de renversement augmente ; pour conserver la stabilité, la charge admissible doit être réduite.",
            svgType: "stability"
          },
          {
            domain: "Manutention",
            question: "Quel est le rôle précis des clapets de sécurité anti-retour tarés (ou clapets parachutes) montés directement sur les vérins de levage d'un chariot ou d'une grue ?",
            options: ["Ralentir la vitesse en fin de course", "Bloquer instantanément l'huile dans le vérin en cas de rupture accidentelle d'une canalisation flexible", "Augmenter la pression maximale du circuit", "Purger l'air du circuit automatiquement"],
            correct: 1,
            explanation: "Le clapet parachute empêche la chute libre de la charge en cas de perte subite de pression dans la ligne d'alimentation.",
            svgType: "warning"
          },

          // --- NAVALE ---
          {
            domain: "Navale",
            question: "Quel est l'objectif principal du système de 'séparation des eaux de bilges' à bord d'un navire de commerce ?",
            options: ["Recycler l'eau de pluie pour les douches", "Traiter les fonds de cale pour rejeter une eau épurée dont la teneur en hydrocarbures est conforme aux normes (<15 ppm)", "Alimenter les chaudières principales en eau douce", "Refroidir les arbres d'hélice"],
            correct: 1,
            explanation: "Le séparateur d'eau d'bilge évite toute pollution marine accidentelle conformément à la convention internationale MARPOL.",
            svgType: "bilge"
          },
          {
            domain: "Navale",
            question: "Que désigne la hauteur métacentrique (GM) positive et importante pour un navire ?",
            options: ["Une vitesse de pointe très élevée", "Une stabilité transversale initiale élevée (le navire revient rapidement à l'horizontale mais avec des mouvements vifs)", "Un tirant d'eau maximal", "Une consommation de carburant réduite"],
            correct: 1,
            explanation: "Un GM élevé garantit la sécurité contre le talonnage mais procure des mouvements de roulis durs et inconfortables pour l'équipage.",
            svgType: "stability"
          },

          // --- MÉCANIQUE ---
          {
            domain: "Mécanique",
            question: "Lors de l'analyse vibratoire d'un réducteur, l'apparition de pics harmoniques liés à la fréquence de passage des billes sur la bague extérieure (BPFO) indique généralement :",
            options: ["Un défaut d'équilibrage du ventilateur", "Un écaillement ou une usure localisée de la piste extérieure du roulement", "Une tension de courroie trop faible", "Un manque d'huile dans le carter"],
            correct: 1,
            explanation: "Chaque composant du roulement possède une fréquence caractéristique de défaut (BPFO, BPFI) identifiable par analyse spectrale.",
            svgType: "vibration"
          },
          {
            domain: "Mécanique",
            question: "Que signifie la notation d'ajustement H7/g6 en construction mécanique ?",
            options: ["Un ajustement avec serrage certain", "Un ajustement avec jeu certain (l'arbre est toujours plus petit que l'alésage)", "Un ajustement incertain (jeu ou serrage possible)", "Un collage chimique obligatoire"],
            correct: 1,
            explanation: "La lettre majuscule H désigne un alésage tolérancé en position fondamentale, et la lettre minuscule g désigne un arbre dont la cote maximale est inférieure à la cote minimale de l'alésage.",
            svgType: "fit"
          },

          // --- HYDRAULIQUE ---
          {
            domain: "Hydraulique",
            question: "Quelle est la différence fondamentale entre la cavitation et l'incorporation d'air (aération) dans une pompe hydraulique ?",
            options: ["C'est exactement le même phénomène", "La cavitation est la vaporisation de l'huile due à une dépression excessive (implosion destructrice), tandis que l'aération est l'incorporation physique d'air extérieur", "L'aération détruit le métal par fusion thermique", "La cavitation ne se produit que sur les moteurs électriques"],
            correct: 1,
            explanation: "La cavitation crée des micro-cavités de vapeur qui implosent violemment contre les parois métalliques, arrachant la matière.",
            svgType: "warning"
          },
          {
            domain: "Hydraulique",
            question: "Quel phénomène observe-t-on lorsqu'un fluide hydraulique passe constamment par un limiteur de pression taré bas alors qu'aucun récepteur n'est actionné ?",
            options: ["Un refroidissement rapide de l'huile", "Une élévation importante de la température de l'huile par transformation de l'énergie hydraulique en chaleur (laminage)", "Une augmentation de la cylindrée de la pompe", "Une baisse de la viscosité de l'air"],
            correct: 1,
            explanation: "L'énergie non utilisée est laminée à travers le clapet, ce qui dissipe toute la puissance sous forme de calories dans le réservoir.",
            svgType: "pressure"
          },

          // --- ÉLECTRICITÉ ---
          {
            domain: "Électricité",
            question: "Un moteur asynchrone porte la plaque signalétique : 400V / 690V. Sur un réseau industriel triphasé standard de 3 x 400V sans neutre, quel type de couplage doit-on réaliser au niveau de la boîte à bornes ?",
            options: ["Couplage Étoile (Y)", "Couplage Triangle (Δ)", "Couplage Série", "Couplage monophasé avec condensateur"],
            correct: 1,
            explanation: "La plus petite tension (400V) indique la tension supportable par un enroulement. Le réseau étant en 400V entre phases, chaque enroulement doit être soumis à 400V, ce qui impose le couplage Triangle.",
            svgType: "motor"
          },
          {
            domain: "Électricité",
            question: "Qu'appelle-t-on la 'sélectivité' entre deux dispositifs de protection contre les surintensités (disjoncteurs en cascade) ?",
            options: ["Le fait que les deux disjoncteurs sautent en même temps", "Le fait que seul le dispositif situé immédiatement en amont du défaut se déclenche, préservant le reste de l'installation", "L'alternance des phases", "Le réglage de la tension nominale"],
            correct: 1,
            explanation: "La sélectivité garantit la continuité de service en évitant la coupure générale pour un incident localisé.",
            svgType: "breaker"
          },

          // --- FRANÇAIS ---
          {
            domain: "Français",
            question: "Dans la phrase : 'Le problème est que nous manquons de temps.', quelle est la nature exacte de la proposition en gras ?",
            options: ["Une proposition subordonnée relative", "Une proposition subordonnée conjonctive attribut du sujet", "Une proposition subordonnée circonstancielle de temps", "Une proposition indépendante coordonnée"],
            correct: 1,
            explanation: "Introduite par la conjonction 'que', elle est reliée au sujet 'Le problème' par le verbe d'état 'est', jouant ainsi le rôle d'attribut du sujet.",
            svgType: "grammar"
          },
          {
            domain: "Français",
            question: "Choisissez la bonne orthographe : 'Les machines que l'entreprise a _________ sur le site sont performantes.'",
            options: ["installé", "installées", "installés", "installée"],
            correct: 1,
            explanation: "Le participe passé conjugué avec l'auxiliaire avoir s'accorde avec le COD ('que', mis pour 'les machines', féminin pluriel) placé avant le verbe.",
            svgType: "grammar"
          },

          // --- ANGLAIS ---
          {
            domain: "Anglais",
            question: "Choose the correct passive transformation: 'They should have finished the maintenance report by now.'",
            options: [
              "The maintenance report should be finished by now.",
              "The maintenance report should have been finished by now.",
              "The maintenance report must be finish by now.",
              "The maintenance report had been finished by them."
            ],
            correct: 1,
            explanation: "Pour un modal au passé (should have + past participle), la voix passive se forme avec : modal + have been + past participle.",
            svgType: "english"
          },
          {
            domain: "Anglais",
            question: "How do you correctly translate: 'Il a fait réparer son tracteur par le mécanicien' (Causative form) ?",
            options: [
              "He repaired his tractor by the mechanic.",
              "He had his tractor repaired by the mechanic.",
              "He was repaired his tractor.",
              "He has make the mechanic repair his tractor."
            ],
            correct: 1,
            explanation: "C'est la structure causative (subject + have + object + past participle) utilisée lorsque l'on fait réaliser une action par un tiers.",
            svgType: "english"
          }
        ];

        // État du quiz
        let currentQuiz = [];
        let currentIndex = 0;
        let score = 0;
        let userAnswers = [];
        let timerInterval = null;
        let timeLeft = 30;

        // Éléments DOM
        const homeScreen = document.getElementById('home-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        const domainButtons = document.querySelectorAll('.domain-btn');
        const restartBtn = document.getElementById('restart-btn');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const progressText = document.getElementById('progress-text');
        const progressBar = document.getElementById('progress');
        const timerText = document.getElementById('timer-text');
        const scoreText = document.getElementById('score-text');
        const feedbackText = document.getElementById('feedback-text');
        const correctionContainer = document.getElementById('correction-container');
        const imageContainer = document.getElementById('image-container');

        // Illustrations SVG dynamiques
        function getTechnicalSvg(type) {
          return `<svg viewBox="0 0 200 100" width="100%" height="100"><rect width="200" height="100" rx="8" fill="#1e293b"/><circle cx="100" cy="50" r="25" fill="none" stroke="#38bdf8" stroke-width="4"/><text x="100" y="54" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">EXPERT LEVEL</text></svg>`;
        }

        // Démarrer le quiz
        function startQuiz(domain) {
          const filtered = questionsData.filter(q => q.domain === domain);
          const questionLimit = Math.min(filtered.length, 20);
          currentQuiz = [...filtered].sort(() => 0.5 - Math.random()).slice(0, questionLimit);
          currentIndex = 0;
          score = 0;
          userAnswers = [];

          homeScreen.classList.add('hidden');
          resultScreen.classList.add('hidden');
          quizScreen.classList.remove('hidden');

          loadQuestion();
        }

        // Charger une question
        function loadQuestion() {
          clearInterval(timerInterval);
          timeLeft = 30;
          timerText.textContent = `⏱️ ${timeLeft}s`;

          timerInterval = setInterval(() => {
            timeLeft--;
            timerText.textContent = `⏱️ ${timeLeft}s`;
            if (timeLeft <= 0) {
              clearInterval(timerInterval);
              handleAnswer(-1);
            }
          }, 1000);

          const q = currentQuiz[currentIndex];
          progressText.textContent = `Question ${currentIndex + 1} / ${currentQuiz.length}`;
          progressBar.style.width = `${((currentIndex + 1) / currentQuiz.length) * 100}%`;
          questionText.textContent = q.question;
          imageContainer.innerHTML = getTechnicalSvg(q.svgType);

          optionsContainer.innerHTML = '';
          q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => handleAnswer(idx);
            optionsContainer.appendChild(btn);
          });
        }

        // Gérer la réponse
        function handleAnswer(selectedIdx) {
          clearInterval(timerInterval);
          const q = currentQuiz[currentIndex];
          const isCorrect = (selectedIdx === q.correct);

          if (isCorrect) score++;

          userAnswers.push({
            question: q.question,
            options: q.options,
            userSelected: selectedIdx,
            correctIndex: q.correct,
            explanation: q.explanation
          });

          const buttons = optionsContainer.querySelectorAll('.option-btn');
          buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correct) {
              btn.style.backgroundColor = 'var(--success)';
              btn.style.color = '#fff';
            } else if (idx === selectedIdx) {
              btn.style.backgroundColor = 'var(--danger)';
              btn.style.color = '#fff';
            }
          });

          setTimeout(() => {
            currentIndex++;
            if (currentIndex < currentQuiz.length) {
              loadQuestion();
            } else {
              showResults();
            }
          }, 1800);
        }

        // Afficher les résultats
        function showResults() {
          quizScreen.classList.add('hidden');
          resultScreen.classList.remove('hidden');

          scoreText.textContent = `${score} / ${currentQuiz.length}`;

          if (score >= currentQuiz.length * 0.9) feedbackText.textContent = "🏆 Excellent ! Niveau d'expertise technique irréprochable.";
          else if (score >= currentQuiz.length * 0.7) feedbackText.textContent = "⭐ Très bien ! Solides compétences confirmées.";
          else if (score >= currentQuiz.length * 0.5) feedbackText.textContent = "👍 Résultat correct. Quelques notions de niveau supérieur à approfondir.";
          else feedbackText.textContent = "📚 Des révisions approfondies sont conseillées sur ce domaine technique.";

          correctionContainer.innerHTML = '';
          userAnswers.forEach((ans, idx) => {
            const item = document.createElement('div');
            item.className = 'correction-item';
            const userTxt = ans.userSelected >= 0 ? ans.options[ans.userSelected] : "⏱️ Temps écoulé";
            const correctTxt = ans.options[ans.correctIndex];
            const statusColor = ans.userSelected === ans.correctIndex ? 'var(--success)' : 'var(--danger)';

            item.innerHTML = `
              <p><strong>Q${idx + 1}: ${ans.question}</strong></p>
              <p>Ta réponse : <span style="color: ${statusColor}; font-weight: 600;">${userTxt}</span></p>
              <p>Bonne réponse : <span style="color: var(--success); font-weight: 600;">${correctTxt}</span></p>
              <p style="margin-top: 4px; color: var(--text-muted);"><em>💡 ${ans.explanation}</em></p>
            `;
            correctionContainer.appendChild(item);
          });
        }

        // Écouteurs d'événements
        domainButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const domain = btn.getAttribute('data-domain');
            startQuiz(domain);
          });
        });

        restartBtn.addEventListener('click', () => {
          resultScreen.classList.add('hidden');
          homeScreen.classList.remove('hidden');
        });
    </script>
</body>
</html>
