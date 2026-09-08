// ==========================================
// BASE DE DONNÉES EXPERT - 20 QUESTIONS PAR DOMAINE
// ==========================================

const questionsData = [
  // ==========================================
  // 1. MACHINES AGRICOLES (Agricole) - 20 Questions
  // ==========================================
  {
    domain: "Agricole",
    question: "Quel est l'impact principal d'un patinage excessif des roues motrices sur un tracteur lourd en labour profond ?",
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
  {
    domain: "Agricole",
    question: "Sur un semoir monograine pneumatique à dépression, quel élément dose précisément l'espacement des graines sur le rang ?",
    options: [
      "Le variateur mécanique à chaînes à doigts",
      "Le disque alvéolé rotatif soumis à une dépression d'air calibrée",
      "Le clapet d'éjection à commande électromagnétique proportionnelle",
      "La herse rotative frontale de préparation"
    ],
    correct: 1,
    explanation: "Le disque alvéolé retient une seule graine par alvéole grâce à la dépression créée par la turbine ; une fois l'interception du vide opérée, la graine chute par gravité dans le sillon."
  },
  {
    domain: "Agricole",
    question: "En viticulture ou arboriculture, qu'appelle-t-on un système de pulvérisation 'freewind' ou à flux tangentiel ?",
    options: [
      "Un système fonctionnant entièrement sans ventilateur ni prise de force",
      "Un dispositif utilisant des canons à air pulsé haute pression à longue portée",
      "Un dispositif de jets orientés par des bras commandés par GPS",
      "Un système de diffusion par ultrasons immergés"
    ],
    correct: 1,
    explanation: "Les canons ou flux tangentiels permettent de projeter la bouillie sur des hauteurs importantes (arbres fruitiers) en s'affranchissant des rampes traditionnelles."
  },
  {
    domain: "Agricole",
    question: "Quel est le principe d'action d'une herse rotative active par rapport à un outil de travail du sol passif ?",
    options: [
      "Elle utilise des dents animées d'un mouvement alternatif ou rotatif entraîné par la prise de force (PTO) pour émietter la terre",
      "Elle vibre uniquement sous l'effet de l'avancement du tracteur",
      "Elle injecte de l'engrais liquide directement en profondeur",
      "Elle compacte la surface pour préparer le lit de semence par rouleau vibrant"
    ],
    correct: 0,
    explanation: "La herse rotative active puise sa puissance sur la PDF du tracteur pour faire tourner des rotors munis de dents, assurant un émiettement intensif en un seul passage."
  },
  {
    domain: "Agricole",
    question: "Dans le contexte des transmissions de tracteurs modernes, que signifie l'acronyme CVT (ou IVT) ?",
    options: [
      "Controlled Variable Torque (Couple Variable Contrôlé)",
      "Continuously Variable Transmission (Transmission à Variation Continue)",
      "Centralized Valve Technology (Technologie de Vanne Centralisée)",
      "Common Vehicle Tracking (Suivi Global de Véhicule)"
    ],
    correct: 1,
    explanation: "Une CVT/IVT permet de faire varier le rapport de transmission de manière infiniment continue sans rupture de couple ni passage de vitesses étagées."
  },
  {
    domain: "Agricole",
    question: "Quel composant d'un système de guidage par GPS agricole assure la correction différentielle centimétrique (RTK) ?",
    options: [
      "Une station au sol fixe ou un réseau de balises qui transmet des corrections d'erreurs aux récepteurs du tracteur",
      "Un capteur d'inclinaison de cabine à pendule magnétique",
      "Un radar Doppler mesurant la vitesse sol réelle",
      "Un altimètre barométrique haute précision"
    ],
    correct: 0,
    explanation: "Le RTK (Real Time Kinematic) utilise des données de correction d'une station de référence fixe pour éliminer les erreurs de positionnement par satellite et atteindre une précision de 2 centimètres."
  },
  {
    domain: "Agricole",
    question: "Sur une presse à hautes performances (grosse balayeuse ou presse à the / ensilage/foin cubique), quel est le rôle du noueur ?",
    options: [
      "De compacter les andains avant l'entrée dans la chambre de pressage",
      "De lier mécaniquement la botte avec de la ficelle ou du fil de fer sous haute tension au format défini",
      "De couper la paille en brins de 5 centimètres",
      "De peser en temps réel le flux de matière récoltée"
    ],
    correct: 1,
    explanation: "Le noueur est un mécanisme de haute précision synchronisé qui réalise les nœuds de fixation de la ficelle autour de la botte de paille ou de foin comprimée."
  },
  {
    domain: "Agricole",
    question: "Quel est l'effet d'un lestage liquide (eau + chlorure de calcium) dans les pneumatiques arrière d'un tracteur agricole ?",
    options: [
      "Il augmente l'adhérence en alourdissant le train arrière, réduisant ainsi le patinage utile",
      "Il allège la direction pour faciliter les manœuvres en bout de champ",
      "Il refroidit les jantes lors de longs transport routiers",
      "Il supprime totalement les vibrations dues au relief"
    ],
    correct: 0,
    explanation: "Le lestage liquide accroît la charge verticale sur les roues motrices, ce qui améliore l'effort de traction transmissible au sol."
  },
  {
    domain: "Agricole",
    question: "Qu'appelle-t-on le 'relevage synchrone' ou contrôle d'effort sur un attelage 3 points de tracteur ?",
    options: [
      "Un système qui ajuste la profondeur de l'outil en fonction de l'effort de traction ressenti sur les bras inférieurs",
      "Une fonction qui bloque le relevage en position haute sur route",
      "Un système qui synchronise la vitesse des roues avant et arrière",
      "Une commande automatique de descente de la remorque"
    ],
    correct: 0,
    explanation: "Le contrôle d'effort (draft control) soulève légèrement l'outil quand la terre devient plus dure pour éviter de bloquer le tracteur, puis le redescend ensuite."
  },
  {
    domain: "Agricole",
    question: "Quel gaz est majoritairement utilisé ou visé dans le cadre des innovations de réduction d'émissions des moteurs agricoles Tier 4 Final / Stage V (post-traitement) ?",
    options: [
      "Le monoxyde de carbone (CO)",
      "Les oxydes d'azote (NOx) traités par l'AdBlue (SCR)",
      "Le dioxyde de soufre (SO2)",
      "L'hexafluorure de soufre"
    ],
    correct: 1,
    explanation: "Les normes Stage V imposent des seuils très stricts sur les particules et les NOx, nécessitant l'injection d'AdBlue (système SCR) et un filtre à particules (FAP)."
  },
  {
    domain: "Agricole",
    question: "Dans le domaine de l'irrigation, que mesure-t-on avec un tensiomètre de sol ?",
    options: [
      "La vitesse d'écoulement de l'eau en surface",
      "La tension ou la succion exercée par le sol pour retenir l'eau (disponibilité hydrique pour la plante)",
      "La salinité globale de l'eau d'irrigation",
      "La température instantanée de la nappe phréatique"
    ],
    correct: 1,
    explanation: "Le tensiomètre évalue l'effort que les racines doivent fournir pour extraire l'eau du sol, guidant le déclenchement optimal de l'irrigation."
  },
  {
    domain: "Agricole",
    question: "Quel est le risque agronomique et mécanique d'utiliser des pneumatiques surgonflés aux champs pour un tracteur de forte puissance ?",
    options: [
      "Une augmentation de l'empreinte au sol et une meilleure portance",
      "Une réduction de l'empreinte au sol, un compactage accru du sol en profondeur et une baisse de la motricité",
      "Une explosion immédiate des jantes en tôle",
      "Une diminution de la consommation de carburant sur route"
    ],
    correct: 1,
    explanation: "Un pneu trop gonflé s'enfonce au lieu de porter, ce qui tasse les couches profondes du sol (création de compaction) et fait patiner la machine."
  },
  {
    domain: "Agricole",
    question: "À quoi sert un andaineur rotatif dans une chaîne de fenaison ?",
    options: [
      "À couper l'herbe haute en bordure de champ",
      "À rassembler et retourner l'herbe coupée en un cordon régulier (andain) pour faciliter le ramassage par la presse ou l'ensileuse",
      "À sécher artificiellement le foin par ventilation chaude",
      "À enrober les balles de film plastique étirable"
    ],
    correct: 1,
    explanation: "L'andaineur utilise des bras tournants munis de dents pour peigner et regrouper le fourrage séché en un boudin rectiligne."
  },
  {
    domain: "Agricole",
    question: "Qu'est-ce qu'un système ISOBUS (norme ISO 11783) sur un ensemble tracteur-outil ?",
    options: [
      "Un protocole de communication universel permettant à n'importe quel terminal en cabine de piloter n'importe quel outil compatible",
      "Un système de freinage hydraulique unifié pour remorques lourdes",
      "Un dispositif d'éclairage nocturne à LED haute intensité",
      "Un système de verrouillage automatique des bras de relevage"
    ],
    correct: 0,
    explanation: "ISOBUS normalise les prises et les langages électroniques, permettant de brancher un semoir ou une pulvérisatrice de marque différente sur un tracteur et de tout contrôler via un écran unique."
  },
  {
    domain: "Agricole",
    question: "Quel est l'objectif d'un décompacteur (ou chisel lourd) par rapport à une charrue à socs classique ?",
    options: [
      "De retourner entièrement la terre en enfouissant les résidus à 40 cm",
      "De fissurer et fracturer le sol en profondeur sans le retourner ni mélanger les horizons, préservant la vie biologique",
      "De tasser le lit de semence de manière définitive",
      "De pulvériser les mottes en surface uniquement"
    ],
    correct: 1,
    explanation: "Le décompacteur travaille par sous-solage : il brise les couches dures en profondeur sans perturber la structure des couches supérieures."
  },
  {
    domain: "Agricole",
    question: "Sur un épandeur de fumier à table d'épandage ou hérissons verticaux, à quoi sert le tablier d'entraînement à chaîne à vitesse réglable ?",
    options: [
      "À faire avancer le fond mouvant pour amener la charge régulièrement vers les organes d'expulsion",
      "À régler la vitesse d'avancement globale du tracteur dans le champ",
      "À actionner le frein de parking de la remorque",
      "À tendre la chaîne de transmission principale de la prise de force"
    ],
    correct: 0,
    explanation: "Le fond mouvant commandé par un moteur hydraulique à débit variable pousse progressivement le fumier vers l'arrière pour assurer un épandage constant."
  },
  {
    domain: "Agricole",
    question: "Qu'indique l'indice de charge et le code de vitesse inscrits sur le flanc d'un pneu agricole (ex: 175 A8 / 172 B) ?",
    options: [
      "La pression maximale de gonflage en millibars et la date de fabrication",
      "La charge maximale admissible par pneu et la vitesse maximale autorisée pour cette charge",
      "Le volume d'eau maximum que l'on peut y injecter",
      "Le coefficient de résistance au roulement sur bitume"
    ],
    correct: 1,
    explanation: "L'indice de charge (ex: 175) correspond à un poids limite supportable, et le symbole de vitesse (ex: A8 = 40 km/h, B = 50 km/h) indique la vitesse limite d'utilisation."
  },

  // ==========================================
  // 2. MAINTENANCE DES MACHINES AGRICOLES (MaintAgricole) - 20 Questions
  // ==========================================
  {
    domain: "MaintAgricole",
    question: "Lors du calage de la distribution d'un moteur diesel agricole à rampe commune, quel outil est impératif pour contrôler l'usure de la chaîne ou des pignons ?",
    options: [
      "Un multimètre en mode ohmmètre",
      "Un comparateur à cadran pour mesurer le jeu axial et un pigeage rigoureux des repères PMH",
      "Un pressostat différentiel de turbo",
      "Un testeur d'indice de cétane"
    ],
    correct: 1,
    explanation: "Le calage exige un pigeage mécanique précis du vilebrequin et de l'arbre à cames combiné à un contrôle des jeux fonctionnels pour éviter toute collision."
  },
  {
    domain: "MaintAgricole",
    question: "Quelle est la conséquence directe d'un colmatage avancé du filtre à air sur un tracteur turbocompressé ?",
    options: [
      "Une augmentation de la pression de suralimentation",
      "Une baisse du rendement volumétrique, une surconsommation de carburant et des fumées noires à l'échappement",
      "Une élévation immédiate de la pression d'huile",
      "Un grippage instantané de la pompe d'injection"
    ],
    correct: 1,
    explanation: "Le filtre colmaté restreint l'admission d'air, appauvrissant le rapport stœchiométrique, ce qui provoque des imbrûlés (fumées noires) et une baisse de rendement."
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il crucial de purger l'eau de condensation d'un décanteur de carburant de manière hebdomadaire ?",
    options: [
      "Pour éviter la corrosion et le grippage destructeur des éléments de haute précision de la pompe/injecteurs",
      "Pour augmenter l'indice d'octane du gazole",
      "Pour lubrifier les parois du réservoir",
      "Pour éviter la cristallisation de l'AdBlue"
    ],
    correct: 0,
    explanation: "L'eau favorise la prolifération bactérienne (boues) et détruit rapidement les micro-mécanismes des systèmes d'injection haute pression modernes."
  },
  {
    domain: "MaintAgricole",
    question: "Quel phénomène d'usure observe-t-on sur les portées de chemises de cylindre en cas d'utilisation d'un carburant à haute teneur en soufre ?",
    options: [
      "Une corrosion chimique par acides condensés et une usure abrasive accélérée",
      "Une trempe thermique superficielle",
      "Un dépôt vitreux isolant",
      "Une dilatation spontanée du piston"
    ],
    correct: 0,
    explanation: "Le soufre combiné aux condensats de combustion forme des acides corrosifs qui attaquent les parois des chemises (corrosion à froid)."
  },
  {
    domain: "MaintAgricole",
    question: "Quel est le rôle d'un additif anti-usure de type EP (Extreme Pression) dans l'huile d'un pont arrière de tracteur à freins immergés ?",
    options: [
      "D'empêcher le patinage des disques de frein en augmentant le coefficient de frottement tout en protégeant les dents de couple conique",
      "De fluidifier l'huile par grand froid",
      "De colorer l'huile en rouge en cas de fuite",
      "D'annuler la formation de mousse dans le carter"
    ],
    correct: 0,
    explanation: "Les huiles de type UTTO / M2C doivent concilier la protection des engrenages (additifs EP) et les caractéristiques de friction requises pour les freins humides."
  },
  {
    domain: "MaintAgricole",
    question: "Comment diagnostiquer une défaillance d'un injecteur piézoélectrique sur un moteur common rail ?",
    options: [
      "Par l'analyse des retours de fuite de gazole et un diagnostic électronique des corrections de débit par cylindre via la valise",
      "En mesurant la tension de la batterie",
      "En écoutant le bruit de l'alternateur",
      "En vérifiant la tension de la courroie trapézoïdale"
    ],
    correct: 0,
    explanation: "Un injecteur défectueux présente souvent un excès de fuite interne vers le retour ou un déséquilibre de correction de débit injecté visible au diagnostic."
  },
  {
    domain: "MaintAgricole",
    question: "Quelle préoccupation majeure y a-t-il lors du remplacement d'un joint de culasse sur un moteur thermique lourd ?",
    options: [
      "Le nettoyage minutieux du plan de joint, le contrôle de la planéité de la culasse et le respect strict du serrage angulaire à la clé dynamométrique",
      "Le changement obligatoire du démarreur",
      "La vidange du circuit de lave-glace",
      "Le réglage du jeu aux soupapes à chaud impérativement"
    ],
    correct: 0,
    explanation: "Le respect des passes de serrage, de l'ordre, du couple et de l'angle est vital pour garantir l'étanchéité aux hautes pressions de combustion."
  },
  {
    domain: "MaintAgricole",
    question: "Quel est l'effet d'un jeu insuffisant aux soupapes (soupapes 'bridées') sur un moteur diesel agricole ?",
    options: [
      "Un risque de non-fermeture complète des soupapes, entraînant une fuite de compression, une perte de puissance et une brûlure des sièges de soupape",
      "Un cliquetis métallique très prononcé en haut moteur",
      "Une augmentation immédiate de la pression d'huile",
      "Un blocage instantané de la pompe à eau"
    ],
    correct: 0,
    explanation: "Si le jeu est nul, la soupape ne ferme plus hermétiquement, les gaz chauds la traversent en permanence et détruisent la portée."
  },
  {
    domain: "MaintAgricole",
    question: "À quoi sert l'analyse d'huile en laboratoire (programme d'entretien préventif) sur les grands ensembles mécaniques ?",
    options: [
      "À détecter l'usure anormale des composants par la présence de particules métalliques et à vérifier l'épuisement des additifs de l'huile",
      "À déterminer la quantité de carburant restant dans le bac",
      "À recharger chimiquement l'huile usagée pour la rendre neuve",
      "À mesurer la vitesse du vent autour de la machine"
    ],
    correct: 0,
    explanation: "L'analyse spectrographique de l'huile repère les traces de fer, chrome, cuivre ou silicium, signalant une usure avant la panne catastrophique."
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il impératif de réamorcer ou de purger l'air d'un circuit de carburant après le changement des filtres à gazole ?",
    options: [
      "Pour éviter la désamorçage de la pompe d'injection haute pression qui risquerait de tourner à sec et de gripper",
      "Pour remplir le vase d'expansion du radiateur",
      "Pour nettoyer le catalyseur d'échappement",
      "Pour augmenter la tension du circuit électrique"
    ],
    correct: 0,
    explanation: "Les pompes HP et les injecteurs modernes lubrifiés par le gazole supportent très mal le fonctionnement à sec ou la présence de poches d'air."
  },
  {
    domain: "MaintAgricole",
    question: "Quel est le risque lié à une tension excessive de la courroie d'alternateur ou de ventilateur sur un moteur ?",
    options: [
      "La destruction prématurée des roulements de l'alternateur ou de la pompe à eau et la rupture de la courroie",
      "Un patinage permanent et une absence totale de charge batterie",
      "Une inversion du sens de rotation du moteur",
      "Une surchauffe de l'huile de transmission"
    ],
    correct: 0,
    explanation: "Une tension trop forte engendre des efforts radiaux excessifs sur les paliers et roulements adjacents, provoquant leur grippage."
  },
  {
    domain: "MaintAgricole",
    question: "Quel dispositif assure la régulation thermique du moteur en bloquant le passage vers le radiateur tant que la température optimale n'est pas atteinte ?",
    options: [
      "Le thermostat (ou calorstat)",
      "Le pressostat différentiel",
      "La soupape de décharge du turbo",
      "Le manocontact de pression d'huile"
    ],
    correct: 0,
    explanation: "Le thermostat contient une cire qui se dilate à chaud pour ouvrir le clapet et laisser circuler le liquide de refroidissement vers le radiateur."
  },
  {
    domain: "MaintAgricole",
    question: "Qu'est-ce qu'un embrayage multidisque à sec ou humide dans le cadre de la transmission d'un tracteur ?",
    options: [
      "Un ensemble de disques lisses et garnis serrés par des ressorts ou une pression hydraulique pour transmettre le couple",
      "Un système de freinage de secours pour les remorques",
      "Une pompe hydraulique à cylindrée variable",
      "Un filtre à air centrifuge autonettoyant"
    ],
    correct: 0,
    explanation: "Le multidisque permet de faire passer des couples très importants de manière progressive et compacte dans les boîtes de vitesses sous charge (Powershift)."
  },
  {
    domain: "MaintAgricole",
    question: "Comment identifier une usure anormale des rotules de direction sur le train avant d'un tracteur lors de la maintenance préventive ?",
    options: [
      "En levant la roue et en recherchant du jeu mécanique en secouant horizontalement et verticalement le train",
      "En mesurant la résistance électrique des rotules",
      "En vérifiant la pression des pneus",
      "En contrôlant la couleur de l'huile de direction"
    ],
    correct: 0,
    explanation: "Le jeu dans les articulations de direction se manifeste par une direction floue et se décèle par un mouvement parasite lors de la manipulation manuelle de la roue."
  },
  {
    domain: "MaintAgricole",
    question: "Quel est le rôle du reniflard de carter moteur ?",
    options: [
      "D'évacuer les gaz de fuite (blow-by) et la surpression interne du carter pour éviter les fuites aux joints spi",
      "D'aspirer l'air frais directement dans le bloc moteur",
      "De réchauffer le gazole en hiver",
      "De filtrer les particules de suie de l'échappement"
    ],
    correct: 0,
    explanation: "Les gaz de blow-by (passant par les segments) créent une pression dans le carter ; le reniflard les recycle ou les évacue pour préserver l'étanchéité."
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi les circuits de refroidissement modernes utilisent-ils un vase d'expansion sous pression (ex: 1 bar) ?",
    options: [
      "Pour élever le point d'ébullition du liquide de refroidissement au-delà de 100°C et éviter la cavitation de la pompe à eau",
      "Pour stocker du liquide de rechange en cas de fuite importante",
      "Pour alimenter le circuit de freinage hydraulique en secours",
      "Pour réduire le poids total du tracteur"
    ],
    correct: 0,
    explanation: "Sous pression, l'eau ne bout pas à 100°C mais à une température supérieure, ce qui sécurise le fonctionnement du moteur en conditions intensives."
  },
  {
    domain: "MaintAgricole",
    question: "Quel entretien particulier nécessite un filtre à air à bain d'huile sur les anciens tracteurs ou engins travaillant en milieu très poussiéreux ?",
    options: [
      "Le nettoyage de la cuve, le renouvellement du bain d'huile usagée au niveau préconisé et le lavage du tamis filtrant",
      "Un soufflage uniquement à l'air comprimé sans démonter la cuve",
      "Un trempage dans de l'acide chlorhydrique",
      "Aucun entretien, il est auto-régénérant"
    ],
    correct: 0,
    explanation: "Le filtre à bain d'huile piège les poussières dans le fond de cuve ; il faut régulièrement la vider, la nettoyer et remettre de l'huile propre."
  },
  {
    domain: "MaintAgricole",
    question: "Quelle est la cause fréquente d'un patinage d'une courroie trapézoïdale d'accessoires sur un moteur thermique ?",
    options: [
      "Une tension insuffisante de la courroie ou un glaçage des flancs de la courroie / poulie usée",
      "Une surpression dans le réservoir de carburant",
      "L'utilisation d'une huile moteur trop fluide",
      "Un défaut du calculateur d'injection"
    ],
    correct: 0,
    explanation: "Si la courroie est détendue ou usée (flancs glacés), elle patine sur les poulies en émettant un sifflement caractéristique."
  },
  {
    domain: "MaintAgricole",
    question: "Quel est l'effet d'une contamination de l'huile hydraulique par de l'eau (émulsion laiteuse) sur les composants ?",
    options: [
      "Une perte de lubrification, un risque de cavitation de la pompe, et une corrosion rapide des distributeurs et vérins",
      "Une amélioration spectaculaire de la viscosité à chaud",
      "Un nettoyage automatique des circuits",
      "Une augmentation de la vitesse des actionneurs"
    ],
    correct: 0,
    explanation: "L'eau dans l'huile détériore les propriétés anti-usure, provoque de la cavitation et oxyde les composants internes de précision."
  },
  {
    domain: "MaintAgricole",
    question: "Lors de la dépose d'un injecteur grippé dans sa culasse, quelle précaution de sécurité et mécanique doit-on observer ?",
    options: [
      "Utiliser un extracteur à inertie ou hydraulique adapté et éviter de maté le corps de l'injecteur pour ne pas ovaliser le puits",
      "Chauffer la culasse au chalumeau rouge vif",
      "Le dévisser directement avec une clé à pipe standard de 10",
      "Injecter de l'eau sous pression dans le cylindre"
    ],
    correct: 0,
    explanation: "Les injecteurs bloqués par la calamine nécessitent des extracteurs spécifiques pour ne pas endommager irrémédiablement la culasse en aluminium ou en fonte."
  },

  // ==========================================
  // 3. MANUTENTION ET LEVAGE (Manutention) - 20 Questions
  // ==========================================
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
    explanation: "Incliner le mât vers l'avant éloigne la charge du centre de gravité du chariot, réduisant considérablement la charge maximale admissible au risque de basculement."
  },
  {
    domain: "Manutention",
    question: "Quel dispositif de sécurité est obligatoire sur le circuit hydraulique de levage d'une grue auxiliaire pour prévenir la chute de charge en cas de rupture de flexible ?",
    options: [
      "Un filtre à tamis magnétique",
      "Un clapet anti-retour piloté (ou clapet de sécurité parachute)",
      "Un distributeur à tiroir ouvert en position neutre",
      "Un réchauffeur d'huile thermostatique"
    ],
    correct: 1,
    explanation: "Le clapet anti-retour piloté se ferme instantanément en cas de chute de pression brutale, bloquant l'huile dans le vérin."
  },
  {
    domain: "Manutention",
    question: "Dans le cadre de l'élingage d'une charge lourde, quel est l'effet mécanique d'une augmentation de l'angle d'ouverture des brins d'élingue par rapport à la verticale ?",
    options: [
      "La tension dans chaque brin diminue",
      "La tension dans chaque brin augmente de manière exponentielle",
      "La force de traction globale sur le crochet de levage est annulée",
      "Le coefficient de frottement du câble diminue"
    ],
    correct: 1,
    explanation: "Plus l'angle d'une élingue par rapport à la verticale s'élargit, plus les efforts de traction s'exerçant sur les brins individuels s'accroissent fortement."
  },
  {
    domain: "Manutention",
    question: "Qu'est-ce que la 'courbe de charge' d'une grue mobile ou d'un chariot élévateur ?",
    options: [
      "Le graphique indiquant la charge maximale admissible en fonction de la portée (rayon) et de la hauteur de levage",
      "La courbe de consommation de carburant de l'engin en levage",
      "Le diagramme d'usure des pneumatiques directeurs",
      "La vitesse de déplacement maximale en marche arrière"
    ],
    correct: 0,
    explanation: "La courbe (ou abaque) de charge définit les limites strictes à ne pas dépasser pour garantir la stabilité de l'engin selon la position de la charge."
  },
  {
    domain: "Manutention",
    question: "Quel est le rôle d'un limiteur de moment de charge (LMC) sur une grue de levage ?",
    options: [
      "D'interdire les mouvements aggravants (allongement de flèche, baisse de portée) lorsque la charge approche ou dépasse le moment maximal autorisé",
      "De couper le moteur si la température extérieure dépasse 40°C",
      "De bloquer les roues du porteur pour stationner en pente",
      "De mesurer la vitesse du vent au sommet de la flèche uniquement"
    ],
    correct: 0,
    explanation: "Le LMC protège la structure de la grue contre le basculement ou la surcharge en surveillant en permanence le poids et la portée."
  },
  {
    domain: "Manutention",
    question: "Pourquoi est-il interdit de circuler avec des fourches de chariot élévateur levées en hauteur, même à vide ?",
    options: [
      "Parce que cela déplace le centre de gravité vers le haut, augmentant considérablement le risque de basculement latéral lors des virages",
      "Pour économiser l'huile hydraulique du mât",
      "Pour éviter d'abîmer le toit de la cabine",
      "Parce que cela consomme plus de carburant"
    ],
    correct: 0,
    explanation: "Un mât levé remonte le centre de gravité global de l'engin, ce qui rend le chariot très instable au premier virage ou dénivelé."
  },
  {
    domain: "Manutention",
    question: "Quel type de câble métallique d'élingage ou de levage nécessite une mise au rebut immédiate selon les normes de sécurité ?",
    options: [
      "Présentant des fils cassés en nombre supérieur au seuil réglementaire, une corrosion prononcée, un écrasement ou une formette (cœur) endommagée",
      "Ayant perdu sa couleur de peinture d'origine sur le crochet",
      "Ayant subi un graissage récent",
      "Ayant été stocké dans un local tempéré"
    ],
    correct: 0,
    explanation: "Les critères de mise au rebut des câbles sont stricts pour éviter la rupture sous charge (comptage de fils rompus par pas de câblage, déformations)."
  },
  {
    domain: "Manutention",
    question: "Quel est l'intérêt d'utiliser un palonnier lors du levage de charges longues ou fragiles ?",
    options: [
      "De répartir les points d'élingage et d'éviter les efforts de flexion excessifs ou le basculement de la charge",
      "D'augmenter artificiellement la capacité de levage de la grue au-delà de sa plaque signalétique",
      "De supprimer le besoin de fixer des câbles",
      "De permettre de soulever la charge sans opérateur"
    ],
    correct: 0,
    explanation: "Le palonnier offre une structure rigide intermédiaire qui répartit la charge sur plusieurs brins verticaux, évitant l'arc-boutement ou l'endommagement de la pièce."
  },
  {
    domain: "Manutention",
    question: "Sur un pont roulant industriel, à quoi sert le fin de course de levage haut ?",
    options: [
      "À couper automatiquement l'alimentation du moteur de levage avant que le crochet ne vienne heurter la structure du tambour",
      "À régler la vitesse maximale de translation du pont",
      "À bloquer les freins de direction du pont",
      "À inverser le sens de déplacement du chariot"
    ],
    correct: 0,
    explanation: "Le fin de course haut est une sécurité absolue qui stoppe le treuil pour empêcher la collision de la moufle avec le chemin de roulement."
  },
  {
    domain: "Manutention",
    question: "Qu'appelle-t-on la 'stabilité latérale' d'un chariot télescopique en tout-terrain ?",
    options: [
      "L'aptitude de l'engin à ne pas se renverser sur le côté, influencée par la position des stabilisateurs, l'angle de flèche et la nature du sol",
      "La vitesse maximale du chariot en marche latérale",
      "La capacité des pneus à ne pas crever dans les cailloux",
      "La force de braquage des roues arrière"
    ],
    correct: 0,
    explanation: "Les chariots télescopiques sont exposés au basculement latéral dès que la flèche est levée ou en extension, d'où l'importance vitale des stabilisateurs et du calage."
  },
  {
    domain: "Manutention",
    question: "Quel équipement de protection individuelle (EPI) est strictement obligatoire pour toute personne dirigeant les manœuvres d'élingage (signaleur / élingueur) ?",
    options: [
      "Un casque de chantier, des gants de manutention adaptés, des chaussures de sécurité et un gilet haute visibilité",
      "Une combinaison ignifugée de pilote de course",
      "Des lunettes de plongée sous-marine",
      "Un masque à oxygène complet"
    ],
    correct: 0,
    explanation: "Le signaleur doit être visible de loin (gilet) et protégé des chutes d'objets ou des risques mécaniques (casque, chaussures, gants)."
  },
  {
    domain: "Manutention",
    question: "Quelle est la règle d'or concernant le centre de gravité lors du transport d'une charge sur un chariot élévateur en pente ?",
    options: [
      "Toujours monter ou descendre la pente avec la charge orientée vers le *haut* de la pente (donc en marche avant en montant, et en marche arrière en descendant)",
      "Toujours descendre face à la pente pour voir où l'on va",
      "Rouler à vitesse maximale pour traverser la pente le plus vite possible",
      "Inverser l'inclinaison du mât vers l'avant au maximum"
    ],
    correct: 0,
    explanation: "Si l'on descend la pente face au vide avec la charge, le centre de gravité bascule vers l'avant et le chariot se renverse. Il faut garder la charge en amont."
  },
  {
    domain: "Manutention",
    question: "Qu'est-ce qu'un coefficient de sécurité (ou coefficient d'épreuve) appliqué aux accessoires de levage (élingues, manilles, anneaux) ?",
    options: [
      "Le rapport entre la charge de rupture minimale garantie et la charge maximale d'utilisation (CMU)",
      "Le pourcentage de taxe applicable à l'achat du matériel",
      "Le nombre d'utilisations maximales avant destruction",
      "La température maximale de résistance du métal"
    ],
    correct: 0,
    explanation: "Par exemple, pour des élingues en câble, le coefficient est généralement de 5, ce qui signifie que la charge de rupture est 5 fois supérieure à la CMU autorisée."
  },
  {
    domain: "Manutention",
    question: "Quel est le risque lié à l'utilisation de sangles textiles plates (polyester) endommagées par une coupure ou des frottements répétés sur des arêtes vives ?",
    options: [
      "Une diminution drastique de leur résistance à la rupture menant à une rupture soudaine sous charge",
      "Un allongement infini de la sangle sans conséquence",
      "Une transformation de la sangle en câble d'acier",
      "Une auto-cicatrisation du tissu sous l'effet du soleil"
    ],
    correct: 0,
    explanation: "Les sangles textiles sont très sensibles aux coupures et aux arêtes vives ; une entaille réduit immédiatement leur capacité nominale, d'où l'obligation d'utiliser des fourreaux de protection."
  },
  {
    domain: "Manutention",
    question: "Pourquoi est-il strictement interdit d'utiliser des transpalettes manuels pour lever des charges sur des pentes non stabilisées ?",
    options: [
      "Parce que le transpalette ne dispose d'aucun système de freinage mécanique autonome, rendant la charge incontrôlable et dangereuse pour l'opérateur",
      "Parce que les roues en polyuréthane fondent sous l'effet de la pente",
      "Parce que cela bloque la pompe hydraulique définitivement",
      "Parce que la longueur des fourches devient trop courte"
    ],
    correct: 0,
    explanation: "Le transpalette manuel n'a pas de frein ; dans une pente, la charge entraîne l'opérateur et l'engin, créant un risque d'écrasement grave."
  },
  {
    domain: "Manutention",
    question: "Quel rôle joue le vérin de télescopage sur une grue mobile ou un chariot télescopique ?",
    options: [
      "D'assurer l'extension et la rétraction synchronisée des éléments de la flèche",
      "De faire tourner la tourelle à 360 degrés",
      "De basculer le châssis pour le mettre à niveau",
      "De gonfler les pneumatiques à distance"
    ],
    correct: 0,
    explanation: "Le système de télescopage (hydraulique ou à câbles) permet de faire varier la longueur de la flèche de levage."
  },
  {
    domain: "Manutention",
    question: "Qu'est-ce que le 'facteur de mode' ou mode d'élingage (en U, en étranglement, en panier) ?",
    options: [
      "La configuration géométrique de mise en œuvre de l'élingue qui modifie la charge maximale d'utilisation effective (CMU)",
      "La couleur de la sangle selon la mode de l'année",
      "La vitesse à laquelle on doit soulever la charge",
      "Le type de nœud marin réalisé sur le câble"
    ],
    correct: 0,
    explanation: "Une élingue en mode étranglement perd une partie de sa capacité nominale par rapport à un mode vertical direct ou en U (panier)."
  },
  {
    domain: "Manutention",
    question: "Quel contrôle réglementaire périodique est obligatoire en entreprise pour les engins de levage et leurs accessoires (VGP) ?",
    options: [
      "La Vérification Générale Périodique, effectuée à intervalles réguliers (généralement tous les 6 ou 12 mois) par un organisme ou une personne compétente",
      "Un contrôle visuel quotidien fait par le fabricant à l'usine",
      "Une vérification de la peinture tous les 10 ans",
      "Un test de vitesse sur autoroute"
    ],
    correct: 0,
    explanation: "La VGP est une obligation légale destinée à s'assurer du maintien en conformité et en sécurité des équipements de levage."
  },
  {
    domain: "Manutention",
    question: "Quelle est la fonction d'un limiteur de vitesse de descente sur les vérins hydrauliques de levage de certains chariots ou hayons élévateurs ?",
    options: [
      "D'empêcher la chute rapide de la plateforme ou du mât en cas de rupture accidentelle d'une canalisation hydraulique haute pression",
      "D'accélérer le chargement en fin de course",
      "De réduire la consommation de carburant au ralenti",
      "D'empêcher l'huile de chauffer en été"
    ],
    correct: 0,
    explanation: "Ce limiteur (ou clapet parachuté) bride le débit de fuite d'huile si la vitesse d'évacuation dépasse le seuil normal, stoppant la chute."
  },
  {
    domain: "Manutention",
    question: "Pourquoi les chariots élévateurs frontaux à contrepoids possèdent-ils des roues arrière directrices et non des roues avant ?",
    options: [
      "Pour offrir un rayon de braquage ultra-court et permettre une maniabilité arrière exceptionnelle lors du gerbage en allée étroite",
      "Parce que les roues avant sont trop lourdes à tourner",
      "Pour permettre au chariot de rouler en crabe",
      "Pour réduire l'usure des pneus arrière"
    ],
    correct: 0,
    explanation: "La direction arrière permet à l'arrière du chariot de pivoter largement autour de l'essieu avant fixe, facilitant les manœuvres dans les espaces restreints."
  },

  // ==========================================
  // 4. MAINTENANCE DES MACHINES MARINE (Navale) - 20 Questions
  // ==========================================
  {
    domain: "Navale",
    question: "Quel phénomène physique destructeur affecte fréquemment les hélices de navires et les parois internes des chemises sous l'effet des variations locales de pression ?",
    options: [
      "L'effet Peltier",
      "La cavitation (implosion de bulles de vapeur)",
      "La trempe martensitique spontanée",
      "Le fluage thermique permanent"
    ],
    correct: 1,
    explanation: "La cavitation génère des micro-jets à haute pression lors de l'implosion des bulles de vapeur, arrachant de la matière sur les pales ou les chemises."
  },
  {
    domain: "Navale",
    question: "À quoi servent les anodes sacrificielles en zinc ou en aluminium fixées sur la coque submergée d'un navire ?",
    options: [
      "À alourdir la ligne de flottaison",
      "À protéger les métaux nobles de la corrosion galvanique en s'oxydant préférentiellement",
      "À réduire la traînée hydrodynamique",
      "À capter les parasites électromagnétiques"
    ],
    correct: 1,
    explanation: "Étant constituées d'un métal plus électronégatif, elles s'oxydent et se dissolvent à la place des structures de la coque."
  },
  {
    domain: "Navale",
    question: "Quel est le rôle d'un séparateur d'eau et d'hydrocarbures (bilge water separator) à bord d'un navire ?",
    options: [
      "De traiter les eaux de cale pour rejeter à la mer de l'eau dont la teneur en hydrocarbures est strictement inférieure aux normes Marpol (ex: 15 ppm)",
      "De fabriquer de l'eau potable à partir de l'eau de mer",
      "De nettoyer les réservoirs de fuel lourd en un seul passage",
      "De refroidir l'arbre de couche par aspersion"
    ],
    correct: 0,
    explanation: "Conformément à la convention MARPOL, les rejets de cale doivent être filtrés et contrôlés pour ne pas polluer le milieu marin."
  },
  {
    domain: "Navale",
    question: "Qu'appelle-t-on le 'cylindrage' ou l'ovalisation d'une chemise de grand moteur diesel marin ?",
    options: [
      "L'usure asymétrique de la chemise due à la poussée latérale du piston, provoquant une perte de circularité",
      "Le traitement de surface au chrome dur",
      "La conicité naturelle de fabrication du piston",
      "Le système de refroidissement par double fond"
    ],
    correct: 0,
    explanation: "Le mouvement oscillant de la bielle pousse le piston contre la paroi de la chemise, creusant celle-ci de manière non uniforme (ovalisation/cylindrage)."
  },
  {
    domain: "Navale",
    question: "Quel est l'objectif principal d'un vireur (turning gear) sur un moteur diesel marin de propulsion lent ou semi-rapide ?",
    options: [
      "De faire tourner lentement le moteur à l'arrêt pour des contrôles mécaniques, le positionnement pour maintenance ou avant un démarrage de sécurité",
      "De démarrer le moteur à pleine puissance en secours",
      "D'entraîner l'alternateur de bord en cas de panne de fuel",
      "De vidanger automatiquement le carter d'huile"
    ],
    correct: 0,
    explanation: "Le vireur permet d'embrayer un petit moto-réducteur sur le volant moteur pour le faire pivoter degré par degré en toute sécurité."
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que l'arbre de couche sur un navire ?",
    options: [
      "La ligne d'arbres qui transmet la puissance mécanique du moteur principal jusqu'à l'hélice traversant la coque",
      "L'arbre à cames principal régissant l'ouverture des soupapes d'échappement",
      "Le mât principal soutenant les antennes radar",
      "L'axe de rotation du gouvernail"
    ],
    correct: 0,
    explanation: "L'arbre de couche relie la sortie de la boîte/réducteur (ou du moteur) à l'hélice à l'arrière du navire."
  },
  {
    domain: "Navale",
    question: "Quel dispositif d'étanchéité empêche l'eau de mer d'entrer dans la coque au niveau du passage de l'arbre de couche (tube d'étambot) ?",
    options: [
      "Un pressoupe ou un joint à lèvres étanche (type Simplex) lubrifié à l'eau ou à l'huile",
      "Un simple joint en caoutchouc silicone de plomberie",
      "Une soudure étanche en acier inoxydable",
      "Un bouchon conique en bois dur"
    ],
    correct: 0,
    explanation: "Le tube d'étambot est protégé par des bagues d'étanchéité sophistiquées pour éviter toute voie d'eau tout en autorisant la rotation de l'arbre."
  },
  {
    domain: "Navale",
    question: "Pourquoi utilise-t-on des échangeurs thermiques centraux à plaques en titane sur les navires modernes utilisant l'eau de mer ?",
    options: [
      "Parce que le titane résiste remarquablement bien à la corrosion agressive de l'eau de mer salée et chaude",
      "Parce que le titane est le métal le moins cher du marché",
      "Pour alourdir la salle des machines",
      "Parce qu'il ne nécessite aucun entretien de nettoyage"
    ],
    correct: 0,
    explanation: "L'eau de mer est très corrosive pour l'acier ou le cuivre standard ; le titane offre une tenue exceptionnelle face à la corrosion marine."
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la 'viscosité' du fuel lourd (HFO - Heavy Fuel Oil) et pourquoi doit-on le réchauffer avant injection dans un moteur marin ?",
    options: [
      "C'est la résistance à l'écoulement du fluide ; il faut le réchauffer pour abaisser sa viscosité et permettre une pulvérisation fine par les injecteurs",
      "C'est son pouvoir lubrifiant pur ; on le réchauffe pour l'épaissir",
      "C'est son indice de couleur ; le réchauffement le rend transparent",
      "C'est sa teneur en eau douce"
    ],
    correct: 0,
    explanation: "Le fuel lourd est très visqueux à froid (presque solide) ; un réchauffage rigoureux (souvent au-dessus de 100-130°C) est indispensable pour le rendre fluidifiable et injectable."
  },
  {
    domain: "Navale",
    question: "Quel est le rôle d'un séparateur centrifuge (purificateur / clarificateur) de lubrifiant ou de combustible à bord ?",
    options: [
      "D'éliminer l'eau et les impuretés solides en suspension grâce à la force centrifuge générée par une rotation à très grande vitesse",
      "De chauffer le carburant par résistance électrique",
      "De mélanger l'huile avec de l'eau pour faire des économies",
      "De mesurer le volume exact consommé par heure"
    ],
    correct: 0,
    explanation: "Le séparateur centrifuge sépare par densité l'eau, les boues et les particules solides du combustible ou de l'huile moteur."
  },
  {
    domain: "Navale",
    question: "Qu'appelle-t-on le 'soufflage' ou balayage (scavenging) dans un grand moteur diesel de navire à deux temps ?",
    options: [
      "Le renouvellement des gaz brûlés dans le cylindre par de l'air frais comprimé introduit par des lumières ou soupapes",
      "Le nettoyage des filtres à air à l'aide d'un jet de vapeur",
      "Le refroidissement de l'eau de mer par ventilateur de pont",
      "La ventilation de la cabine du chef mécanicien"
    ],
    correct: 0,
    explanation: "Sur un 2 temps, le balayage chasse les gaz d'échappement et remplit le cylindre d'air frais pour le cycle suivant."
  },
  {
    domain: "Navale",
    question: "Quel organe garantit la direction du navire en déviant le flux d'eau propulsé par l'hélice ou généré par l'avancement ?",
    options: [
      "Le safran du gouvernail",
      "L'aileron stabilisateur",
      "L'ancre de boulingène",
      "Le propulseur d'étrave"
    ],
    correct: 0,
    explanation: "Le safran est la surface mobile immergée à l'arrière qui oriente le navire sous l'action d'un appareil à gouverner électro-hydraulique."
  },
  {
    domain: "Navale",
    question: "Quel est le risque lié à une contamination bactérienne (ou 'l'algue du gazole' / diesel bug) dans les soutes à carburant marin ?",
    options: [
      "La formation de boues visqueuses qui colmatent rapidement les filtres et les préfiltres, provoquant la coupure du moteur",
      "Une transformation complète du gazole en essence super",
      "Une augmentation anormale de la vitesse du navire",
      "Un changement de couleur du combustible en bleu fluorescent"
    ],
    correct: 0,
    explanation: "L'humidité dans les soutes favorise le développement de micro-organismes (bactéries/champignons) créant une boue noire qui s'attaque aux filtres."
  },
  {
    domain: "Navale",
    question: "À quoi sert un propulseur d'étrave (bow thruster) sur un navire moderne ?",
    options: [
      "À faciliter les manœuvres de port en poussant l'avant du navire vers bâbord ou tribord sans avancer",
      "À augmenter la vitesse maximale en haute mer de 5 nœuds",
      "À couper les filets de pêche dérivants",
      "À vider le ballast avant en cas d'urgence"
    ],
    correct: 0,
    explanation: "Le propulseur d'étrave est une hélice transversale logée dans un tunnel à l'avant, très utile pour accoster ou appareiller dans des espaces étroits."
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que le système de ballast d'un navire ?",
    options: [
      "Des citernes dédiées à recevoir ou rejeter de l'eau de mer pour ajuster l'immersion, la gîte, l'assiette et la stabilité du navire",
      "Le lest en plomb fixe situé au fond de la cale",
      "Le compartiment abritant les moteurs de secours",
      "Le système de climatisation des emménagements"
    ],
    correct: 0,
    explanation: "Les ballasts permettent de lester ou délester le navire selon sa cargaison pour maintenir un comportement marin stable."
  },
  {
    domain: "Navale",
    question: "Quel est le rôle du turbocompresseur sur un moteur diesel marin par rapport à un moteur atmosphérique ?",
    options: [
      "D'augmenter la masse d'air introduite dans les cylindres en comprimant l'air d'admission grâce à l'énergie des gaz d'échappement",
      "De refroidir l'eau de mer par évaporation",
      "De transformer l'énergie mécanique en électricité de bord",
      "De filtrer les résidus de soufre du carburant"
    ],
    correct: 0,
    explanation: "Le turbo récupère l'énergie perdue dans l'échappement pour gaver le moteur en air, augmentant considérablement la puissance spécifique."
  },
  {
    domain: "Navale",
    question: "Quel contrôle d'épaisseur effectue-t-on périodiquement sur la coque en acier d'un navire lors des arrêts techniques (Cale sèche / Ardoise) ?",
    options: [
      "Une mesure par ultrasons pour évaluer l'usure et la corrosion des tôles de bordé",
      "Un test de dureté au marteau piqueur",
      "Une mesure de la température des tôles au soleil",
      "Un contrôle visuel à l'œil nu sans gratter la peinture"
    ],
    correct: 0,
    explanation: "La mesure par ultrasons permet de détecter l'amincissement des tôles de coque dû à la corrosion en milieu marin."
  },
  {
    domain: "Navale",
    question: "Qu'appelle-t-on la 'viscosité cinématique' d'une huile de graissage marine mesurée en centistokes (cSt) ?",
    options: [
      "La mesure de la résistance d'un fluide à s'écouler sous la seule force de la gravité à une température de référence (souvent 40°C ou 100°C)",
      "La pression maximale que l'huile peut supporter sans brûler",
      "Le pourcentage de métaux lourds contenus dans l'huile",
      "La capacité de l'huile à se mélanger à l'eau douce"
    ],
    correct: 0,
    explanation: "La viscosité en cSt est la caractéristique fondamentale pour choisir l'huile de graissage adaptée aux paliers et engrenages marins."
  },
  {
    domain: "Navale",
    question: "Quel est le danger principal en cas de colmatage total des filtres à air de la salle des machines d'un navire fermé ?",
    options: [
      "Une dépression dans le local rendant l'ouverture des portes difficile, une perte de rendement des moteurs et un étouffement de la combustion",
      "Une augmentation de la pression atmosphérique extérieure",
      "Une inondation immédiate de la cale",
      "Un gel instantané des circuits d'eau douce"
    ],
    correct: 0,
    explanation: "Les gros moteurs aspirent d'énormes volumes d'air ; si les entrées d'air se bouchent, une dépression se crée et les moteurs s'asphyxient."
  },
  {
    domain: "Navale",
    question: "Dans le cadre de la sécurité en mer, à quoi sert le système d'extinction incendie par CO2 en salle des machines ?",
    options: [
      "À noyer le local dans un gaz lourd qui étouffe les flammes en abaissant la teneur en oxygène sans endommager les équipements électriques par des résidus liquides",
      "À arroser la salle avec de l'eau de mer savonneuse",
      "À refroidir les turbos en surchauffe par projection de neige carbonique locale",
      "À oxygéner les marins en cas de fumées toxiques"
    ],
    correct: 0,
    explanation: "Le CO2 est un agent extincteur gazeux total très efficace dans les locaux fermés comme la salle des machines car il ne laisse pas de résidus destructeurs."
  },

  // ==========================================
  // 5. MÉCANIQUE & ENGINS (Mécanique) - 20 Questions
  // ==========================================
  {
    domain: "Mécanique",
    question: "Dans un train épicycloïdal, si la couronne est bloquée fixe, que le planétaire est menant et le porte-satellites mené, quel type de rapport obtient-on ?",
    options: [
      "Un rapport de multiplication de vitesse",
      "Un rapport de réduction de vitesse à couple croissant",
      "Une inversion directe du sens de rotation sans démultiplication",
      "Un couplage élastique à glissement contrôlé"
    ],
    correct: 1,
    explanation: "Avec un planétaire menant et une couronne fixe, le porte-satellites tourne dans le même sens mais à vitesse inférieure (réduction) tout en augmentant le couple."
  },
  {
    domain: "Mécanique",
    question: "Quel est l'avantage technique d'un turbocompresseur à géométrie variable (TGV) par rapport à un turbo classique à soupape de décharge (wastegate) ?",
    options: [
      "Il supprime totalement le besoin d'un intercooler",
      "Il permet d'optimiser l'orientation des aubes pour garantir un couple élevé à bas régime et limiter la surpression à haut régime",
      "Il fonctionne exclusivement à l'huile végétale brute",
      "Il élimine le temps de réponse en injectant de l'air comprimé électrique"
    ],
    correct: 1,
    explanation: "Les ailettes mobiles du TGV modifient la section d'entrée des gaz d'échappement, offrant une réponse dynamique optimale à tous les régimes."
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'un différentiel à glissement limité (ou autobloquant) sur un engin tout-terrain ?",
    options: [
      "De transférer automatiquement du couple vers la roue qui adhère le plus lorsqu'une roue patine dans le vide",
      "De bloquer définitivement la direction à haute vitesse sur route",
      "De réduire la vitesse de pointe de la machine de moitié",
      "De supprimer l'utilisation de la boîte de vitesses"
    ],
    correct: 0,
    explanation: "Contrairement au différentiel classique qui envoie toute la force sur la roue qui patine, le glissement limité répartit l'effort pour garder de la motricité."
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce que le rapport volumétrique (ou taux de compression) d'un moteur à piston ?",
    options: [
      "Le rapport entre le volume total du cylindre (PMB) et le volume de la chambre de combustion (PMH)",
      "Le rapport entre le poids du piston et le poids de la bielle",
      "La quantité d'huile consommée par heure de travail",
      "Le volume d'air aspiré par minute"
    ],
    correct: 0,
    explanation: "Il se calcule par la formule $V_{max} / V_{min}$, où $V_{max}$ est le volume cylindrée + chambre, et $V_{min}$ le volume de la chambre seule au PMH."
  },
  {
    domain: "Mécanique",
    question: "Pourquoi les bielles de moteurs thermiques modernes comportent-elles une tête de bielle fendue obliquement (coupe inclinée) dans certains cas ?",
    options: [
      "Pour permettre le passage de la bielle à travers le fût du cylindre lors du démontage par le haut sans élargir le carter",
      "Pour réduire le poids total de la pièce de 50%",
      "Pour empêcher l'huile de couler dans le piston",
      "Pour augmenter la vitesse de rotation maximale"
    ],
    correct: 0,
    explanation: "La coupe inclinée de la tête de bielle réduit l'encombrement transversal, permettant de sortir l'ensemble piston-bielle par le haut du cylindre."
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'un volant moteur bi-masse (DMF) sur les transmissions mécaniques modernes ?",
    options: [
      "De filtrer et d'absorber les vibrations de torsion générées par les acyclismes du moteur thermique pour protéger la boîte de vitesses",
      "De stocker de l'électricité pour le démarreur",
      "De faire office de pompe hydraulique de direction",
      "De freiner les roues en cas d'urgence"
    ],
    correct: 0,
    explanation: "Le volant bi-masse compartimente le volant en deux masses reliées par des ressorts d'amortissement pour lisser les secousses du moteur."
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on le 'jeu d'entre-dents' (backlash) dans un mécanisme de pignons engrenés ?",
    options: [
      "L'espace minimal de battement toléré entre les flancs de deux dents en prise pour permettre le film d'huile et éviter le blocage thermique",
      "La hauteur totale de la dent de la racine à la crête",
      "L'angle d'inclinaison des dents hélicoïdales",
      "L'épaisseur de la clavette sur l'arbre"
    ],
    correct: 0,
    explanation: "Un entre-dents est indispensable pour éviter que les dents ne se coincent en se dilatant sous l'effet de la chaleur."
  },
  {
    domain: "Mécanique",
    question: "Quel est le principe d'un roulement à rouleaux coniques ?",
    options: [
      "Il supporte simultanément des charges radiales élevées et des charges axiales unidirectionnelles importantes",
      "Il ne supporte que des charges purement axiales à très faible vitesse",
      "Il fonctionne sans aucun besoin de lubrification",
      "Il est utilisé uniquement pour guider des axes flexibles"
    ],
    correct: 0,
    explanation: "Grâce à la forme conique des rouleaux et des chemins de roulement, ce type de roulement encaisse très bien les efforts combinés (ex: moyeux de roue)."
  },
  {
    domain: "Mécanique",
    question: "Quelle est la fonction d'un joint de Cardan dans une transmission mécanique ?",
    options: [
      "De transmettre un mouvement de rotation entre deux arbres concourants dont les axes forment un angle variable",
      "D'accoupler deux arbres strictement coaxiaux en absorbant les vibrations",
      "De bloquer la rotation en cas de surcharge",
      "De modifier le rapport de réduction de vitesse"
    ],
    correct: 0,
    explanation: "Le joint de Cardan permet de transmettre la rotation malgré un angle entre les arbres (ex: transmission vers un essieu directeur ou une prise de force)."
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce que le traitement thermique de 'cémentation' appliqué à un pignon d'acier ?",
    options: [
      "Un enrichissement superficiel de la pièce en carbone suivi d'une trempe pour obtenir une surface très dure résistante à l'usure et un cœur tenace",
      "Un chauffage à blanc pour fondre complètement la pièce",
      "Un bain d'acide pour décaper la rouille",
      "Un revêtement de peinture antirouille cuit au four"
    ],
    correct: 0,
    explanation: "La cémentation durcit l'enveloppe extérieure de la dent tout en gardant le cœur ductile pour résister aux chocs."
  },
  {
    domain: "Mécanique",
    question: "Quel est le risque mécanique d'un 'affolement de soupapes' à haut régime sur un moteur thermique ?",
    options: [
      "Un défaut de fermeture des soupapes à temps, provoquant le choc mécanique destructeur entre la tête du piston et la soupape",
      "Une baisse immédiate de la température du liquide de refroidissement",
      "Un calage en douceur par manque de carburant",
      "Une inversion du sens de rotation du vilebrequin"
    ],
    correct: 0,
    explanation: "À trop haut régime, les ressorts de soupape n'ont plus le temps de rappeler la soupape en position fermée ; le piston la percute."
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on le couple moteur (exprimé en N.m) ?",
    options: [
      "L'aptitude d'un moteur à fournir un effort de rotation ou de force de traction",
      "La vitesse maximale de rotation du vilebrequin par minute",
      "La quantité de chaleur dissipée par le radiateur",
      "La puissance fiscale du véhicule"
    ],
    correct: 0,
    explanation: "Le couple est la force de rotation pure exercée par le moteur (ex: pour arracher une lourde charge au démarrage)."
  },
  {
    domain: "Mécanique",
    question: "Quel est l'intérêt d'un montage de roulements 'en O' (disposition dos à dos) par rapport à un montage 'en X' ?",
    options: [
      "Il offre une plus grande rigidité au basculement et encaisse mieux les moments de flexion induits par les charges décentrées",
      "Il est beaucoup plus facile à graisser avec de l'eau",
      "Il élimine totalement les frottements",
      "Il prend deux fois moins de place sur l'arbre"
    ],
    correct: 0,
    explanation: "Le centre de poussée des roulements en O est plus large, ce qui confère une excellente résistance aux moments de basculement."
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'une goupille élastique (ou goupille méindus / Mecanindus) fendue ?",
    options: [
      "Un cylindre en acier à ressort roulé sur lui-même, utilisé pour immobiliser des pièces en translation ou rotation sur un axe",
      "Une vis de culasse spéciale à haute résistance",
      "Un ressort de rappel d'embrayage",
      "Un fusible électrique de protection"
    ],
    correct: 0,
    explanation: "La goupille élastique se comprime légèrement dans son logement pour assurer un maintien ferme par frottement élastique."
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'un segment de feu sur un piston de moteur thermique ?",
    options: [
      "D'assurer l'étanchéité principale pour retenir les gaz de combustion sous haute pression dans la chambre",
      "De racler l'excès d'huile sur la paroi de la chemise",
      "De lubrifier l'axe de piston",
      "De refroidir la tête du piston par conduction"
    ],
    correct: 0,
    explanation: "Le premier segment (segment de feu) subit les flammes et retient l'essentiel de la pression des gaz de combustion."
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'un réducteur épicycloïdal de moyeu de roue sur un engin lourd ?",
    options: [
      "Un train d'engrenages logé dans la roue qui démultiplie la vitesse et multiplie le couple transmis juste avant les pneus",
      "Une boîte de vitesses automatique à convertisseur de couple",
      "Un système de freinage à disques multiples",
      "Un compresseur d'air pour regonfler les pneus"
    ],
    correct: 0,
    explanation: "Placé dans le moyeu, le réducteur épicycloïdal permet de faire passer un couple énorme aux roues en soulageant les arbres de transmission intermédiaires."
  },
  {
    domain: "Mécanique",
    question: "Pourquoi les filetages des vis d'assemblage subissent-ils parfois un freinage chimique (type Loctite) lors du montage ?",
    options: [
      "Pour empêcher le desserrage intempestif des vis sous l'effet des vibrations permanentes de la machine",
      "Pour souder définitivement les deux pièces entre elles sans possibilité de démontage",
      "Pour rendre la vis étanche à l'eau de pluie",
      "Pour lubrifier le filetage en permanence"
    ],
    correct: 0,
    explanation: "La résine anaérobie polymérise en l'absence d'air entre les filets, bloquant la vis contre les vibrations tout en restant démontable avec des outils."
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'une clavette parallèle logée dans un arbre et un moyeu de poulie ?",
    options: [
      "De transmettre le couple de rotation entre l'arbre et l'élément entraîné (poulie, pignon)",
      "De maintenir l'axe en position axiale (empêcher le coulissement)",
      "De servir de fusible en cas de choc violent",
      "D'assurer l'étanchéité de l'huile"
    ],
    correct: 0,
    explanation: "La clavette encaisse l'effort tangentiel de rotation pour lier en rotation l'arbre et le moyeu."
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on le 'PMH' (Point Mort Haut) d'un piston dans un moteur à 4 temps ?",
    options: [
      "La position la plus haute atteinte par le piston dans le cylindre avant d'amorcer sa descente",
      "La position la plus basse du piston vers le carter",
      "Le moment où les soupapes sont grandes ouvertes en même temps",
      "La pression maximale mesurée dans le radiateur"
    ],
    correct: 0,
    explanation: "Le PMH est l'extrémité supérieure de la course du piston, point de référence crucial pour le calage de la distribution."
  },
  {
    domain: "Mécanique",
    question: "Quel est l'effet d'un désaxement (défaut d'alignement) important entre deux arbres reliés par un accouplement rigide ?",
    options: [
      "Des vibrations intenses, une usure prématurée des paliers/roulements et une rupture par fatigue de l'arbre",
      "Une augmentation automatique du rendement mécanique",
      "Un silence de fonctionnement remarquable",
      "Une baisse de la consommation de carburant"
    ],
    correct: 0,
    explanation: "Un défaut d'alignement crée des efforts alternés anormaux qui détruisent rapidement les roulements et l'accouplement."
  },

  // ==========================================
  // 6. HYDRAULIQUE (Hydraulique) - 20 Questions
  // ==========================================
  {
    domain: "Hydraulique",
    question: "Dans un circuit hydraulique hydrostatique, que provoque un blocage brutal de l'actionneur si le circuit est dépourvu de limiteurs de pression tarés (soupapes de choc) ?",
    options: [
      "Une chute instantanée de la température de l'huile",
      "Un pic de surpression destructeur (coup de bélier hydraulique) capable de rompre les flexibles ou le corps de pompe",
      "Une inversion automatique du sens de rotation",
      "Une purge naturelle des micro-bulles d'air"
    ],
    correct: 1,
    explanation: "L'énergie cinétique bloquée net génère une onde de choc à très haute pression (coup de bélier)."
  },
  {
    domain: "Hydraulique",
    question: "Quelle est la différence fondamentale entre une pompe hydraulique à cylindrée fixe et une pompe à cylindrée variable ?",
    options: [
      "La pompe fixe délivre un débit proportionnel à sa vitesse uniquement, tandis que la variable adapte son débit en modifiant la course des pistons ou l'excentricité",
      "La pompe fixe ne supporte pas plus de 50 bars",
      "La pompe variable fonctionne sans huile",
      "La pompe fixe est obligatoirement entraînée par un moteur triphasé"
    ],
    correct: 0,
    explanation: "La cylindrée fixe envoie un volume constant par tour, alors que la cylindrée variable module ce volume (via un plateau oscillant)."
  },
  {
    domain: "Hydraulique",
    question: "Quel est le rôle d'un accumulateur hydraulique à gaz (vessie ou piston) dans un circuit ?",
    options: [
      "De stocker de l'énergie sous pression, d'amortir les pulsations de la pompe ou d'absorber les coups de bélier",
      "De refroidir l'huile lorsque la température dépasse 90°C",
      "De filtrer les impuretés microscopiques de l'huile",
      "De transformer l'énergie hydraulique en électricité pure"
    ],
    correct: 0,
    explanation: "L'accumulateur emmagasine de l'huile sous pression grâce à un gaz neutre (azote) comprimé, restituable instantanément en cas de besoin."
  },
  {
    domain: "Hydraulique",
    question: "Qu'est-ce que le phénomène de cavitation dans une pompe hydraulique ?",
    options: [
      "La formation et l'implosion violente de bulles de vapeur d'huile lorsque la pression d'aspiration chute trop (restriction d'entrée), arrachant le métal",
      "Un excès de mousse colorée dans le réservoir",
      "Le gel de l'huile en hiver",
      "La surpression maximale tarée au limiteur"
    ],
    correct: 0,
    explanation: "Si la pompe manque d'huile à l'aspiration (filtre colmaté ou tuyau trop petit), la dépression crée des bulles qui implosent et détruisent les pièces internes."
  },
  {
    domain: "Hydraulique",
    question: "Que signifie un circuit hydraulique 'Load Sensing' (détection de charge) ?",
    options: [
      "Un système où la pompe ajuste en permanence son débit et sa pression au strict besoin exigé par l'actionneur en service, réduisant les pertes énergétiques",
      "Un circuit où la pression est maintenue au maximum en permanence",
      "Un système fonctionnant exclusivement à l'eau pure",
      "Une commande manuelle par câble d'acier"
    ],
    correct: 0,
    explanation: "Le Load Sensing transmet la pression de charge maximale au régulateur de pompe, qui ne fournit que le débit nécessaire, évitant de gaspiller de l'énergie."
  },
  {
    domain: "Hydraulique",
    question: "Quel est le rôle d'un distributeur hydraulique à commande proportionnelle ?",
    options: [
      "De moduler finement le débit et la vitesse d'un actionneur en fonction du signal de commande électrique appliqué au tiroir",
      "D'ouvrir ou de fermer un circuit de manière binaire (tout ou rien brut)",
      "De bloquer définitivement l'huile dans le vérin",
      "De servir de filtre principal de retour"
    ],
    correct: 0,
    explanation: "La proportionnalité permet de doser avec grande précision la vitesse et le sens de déplacement des vérins ou moteurs hydrauliques."
  },
  {
    domain: "Hydraulique",
    question: "Pourquoi la filtration de l'huile est-elle le garant de la longévité d'un circuit hydraulique proportionnel ou à haute pression ?",
    options: [
      "Parce que les jeux fonctionnels des composants (distributeurs, pistons) sont de l'ordre de quelques microns, et les particules solides agissent comme un abrasif destructeur",
      "Pour éviter que l'huile ne devienne transparente",
      "Pour éliminer l'obligation de faire des vidanges",
      "Pour augmenter la température de fonctionnement"
    ],
    correct: 0,
    explanation: "La moindre pollution solide bloque ou raye les tiroirs de précision et les composants de la régulation."
  },
  {
    domain: "Hydraulique",
    question: "Quelle est la différence d'action entre un vérin hydraulique simple effet et un vérin double effet ?",
    options: [
      "Le simple effet déploie l'huile sous pression dans un seul sens (le retour s'effectuant par charge extérieure ou ressort), tandis que le double effet est alimenté dans les deux sens",
      "Le simple effet supporte 500 bars, le double effet seulement 10 bars",
      "Le simple effet n'a pas de tige",
      "Le double effet fonctionne sans flexible"
    ],
    correct: 0,
    explanation: "Le vérin simple effet n'a qu'un orifice d'alimentation (poussée active, rentrée passive), alors que le double effet pousse et tire sous pression."
  },
  {
    domain: "Hydraulique",
    question: "Qu'indique l'indice de viscosité (IV) d'une huile hydraulique ?",
    options: [
      "La capacité de l'huile à maintenir une viscosité stable malgré les variations de température",
      "La couleur de l'huile en laboratoire",
      "La résistance de l'huile au feu",
      "Le volume total du bidon en litres"
    ],
    correct: 0,
    explanation: "Un indice de viscosité élevé garantit que l'huile ne devient pas trop fluide à chaud ni trop épaisse à froid, assurant une protection constante."
  },
  {
    domain: "Hydraulique",
    question: "Quel est le rôle d'un limiteur de pression général (ou clapet de décharge principal) sur une centrale hydraulique ?",
    options: [
      "De protéger le système contre les surpressions en dérivant l'excédent d'huile vers le réservoir dès que le tarage maximal est atteint",
      "D'augmenter la vitesse des vérins en fin de course",
      "De réchauffer l'huile en hiver",
      "De bloquer la pompe à l'arrêt"
    ],
    correct: 0,
    explanation: "C'est la soupape de sécurité absolue du circuit : si la pression dépasse la consigne, elle s'ouvre pour protéger les composants et flexibles."
  },
  {
    domain: "Hydraulique",
    question: "Qu'est-ce qu'un moteur hydraulique orbital (type geroler ou gerotor) ?",
    options: [
      "Un moteur à cylindrée fixe compact offrant un couple élevé à bas régime grâce à un principe d'engrenage orbital interne",
      "Un moteur électrique alimenté par l'huile",
      "Une turbine centrifuge à haute vitesse de type pompe à eau",
      "Un vérin télescopique rotatif"
    ],
    correct: 0,
    explanation: "Le moteur orbital est très répandu pour l'entraînement d'accessoires lents nécessitant beaucoup de couple (ex: tarières, balayeuses)."
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'effet d'une surchauffe chronique de l'huile hydraulique (au-delà de 80-90°C) dans un système ?",
    options: [
      "La dégradation rapide des additifs de l'huile, l'oxydation (formation de vernis), la baisse de viscosité et l'usure prématurée des joints et des pompes",
      "Une augmentation de la pression maximale admissible",
      "Un nettoyage en profondeur des canalisations",
      "Une amélioration du rendement global"
    ],
    correct: 0,
    explanation: "La chaleur excessive détruit l'huile, crée des dépôts de vernis qui coincent les tiroirs et réduit le pouvoir lubrifiant."
  },
  {
    domain: "Hydraulique",
    question: "Pourquoi installe-t-on un radiateur d'huile (refroidisseur) dans certains circuits hydrauliques intensifs ?",
    options: [
      "Pour évacuer les calories générées par les pertes de charge et les laminages d'huile, maintenant la température dans la plage optimale (40-60°C)",
      "Pour chauffer la cabine de l'opérateur en hiver",
      "Pour augmenter la vitesse de descente des vérins",
      "Pour séparer l'eau de l'huile"
    ],
    correct: 0,
    explanation: "Le refroidisseur (souvent ventilé ou couplé au radiateur d'eau du moteur) dissipe l'énergie thermique superflue."
  },
  {
    domain: "Hydraulique",
    question: "Qu'appelle-t-on un raccord 'banjo' dans une canalisation hydraulique ?",
    options: [
      "Un raccord traversé par une vis creuse percée de trous, permettant d'orienter le flexible dans un espace restreint",
      "Un raccord rapide à visser sans outil",
      "Un flexible en caoutchouc armé de 4 nappes d'acier",
      "Un clapet anti-retour étanche"
    ],
    correct: 0,
    explanation: "Le raccord banjo comporte un embout annulaire traversé par une vis creuse, autorisant le raccordement dans des angles serrés."
  },
  {
    domain: "Hydraulique",
    question: "Quel est le risque lié à une fuite d'huile hydraulique sous haute pression (ex: 200 bars) en pinçant un flexible percé avec le doigt ?",
    options: [
      "Une injection d'huile sous la peau provoquant des lésions tissulaires graves (nécrose, empoisonnement du sang) nécessitant une chirurgie d'urgence",
      "Une simple brûlure superficielle bénigne",
      "Un simple picotement sans gravité",
      "Un refroidissement immédiat du doigt"
    ],
    correct: 0,
    explanation: "C'est un danger mortel ou invalidant majeur en hydraulique : le jet haute pression perce la peau comme une seringue et injecte l'huile en profondeur."
  },
  {
    domain: "Hydraulique",
    question: "Comment fonctionne un diviseur de débit à engrenages dans un circuit hydraulique ?",
    options: [
      "Il répartit un flux d'huile entrant en deux ou plusieurs flux égaux (ou proportionnels) vers des actionneurs distincts malgré des charges différentes",
      "Il mélange l'huile de deux pompes différentes pour n'en faire qu'une",
      "Il transforme l'huile en air comprimé",
      "Il bloque le débit en cas de fuite"
    ],
    correct: 0,
    explanation: "Le diviseur synchronise par exemple deux vérins travaillant en parallèle en leur envoyant exactement le même volume d'huile."
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'intérêt d'un filtre sur le retour du circuit hydraulique par rapport à une installation sur l'aspiration ?",
    options: [
      "Il filtre toute l'huile retournant au réservoir sans risquer de provoquer de la cavitation à l'entrée de la pompe",
      "Il est beaucoup moins cher à l'achat",
      "Il supprime le besoin de réservoir",
      "Il augmente la pression de travail de 50 bars"
    ],
    correct: 0,
    explanation: "Filtrer sur le retour ou au refoulement évite de brider l'aspiration de la pompe, prévenant ainsi les risques de cavitation."
  },
  {
    domain: "Hydraulique",
    question: "Qu'est-ce qu'un distributeur monobloc par rapport à un distributeur à éléments modulaires ?",
    options: [
      "Un distributeur dont tous les tiroirs sont usinés dans un seul et même bloc de fonte, limitant les fuites externes mais non modifiable",
      "Un distributeur jetable en plastique",
      "Un distributeur géant pour pelles de 100 tonnes",
      "Un distributeur fonctionnant sans électricité"
    ],
    correct: 0,
    explanation: "Le monobloc est compact et économique pour les petits/moyens débits, tandis que le modulaire (par éléments) permet d'empiler les fonctions."
  },
  {
    domain: "Hydraulique",
    question: "Quel est le rôle d'un clapet anti-retour taré (ou clapet de retenue) dans une ligne hydraulique ?",
    options: [
      "D'autoriser le passage de l'huile dans un sens libre et de l'interdire totalement dans le sens inverse (sauf si tarage atteint)",
      "De mélanger l'huile chaude et l'huile froide",
      "De mesurer la pression en bars",
      "De purger l'air du réservoir"
    ],
    correct: 0,
    explanation: "Le clapet anti-retour impose un sens unique de circulation du fluide dans le circuit."
  },
  {
    domain: "Hydraulique",
    question: "Comment se calcule théoriquement la force développée par un vérin hydraulique ?",
    options: [
      "Force = Pression $\times$ Section efficace du piston",
      "Force = Débit / Vitesse de rotation",
      "Force = Viscosité $\times$ Température",
      "Force = Volume du réservoir / Longueur de tige"
    ],
    correct: 0,
    explanation: "La formule fondamentale est $F = P \times S$ (en unités cohérentes : Newtons = Pascals $\times$ mètres carrés, ou Bars $\times$ cm² divisé par 10)."
  },

  // ==========================================
  // 7. ÉLECTRICITÉ INDUSTRIELLE (Électricité) - 20 Questions
  // ==========================================
  {
    domain: "Électricité",
    question: "Sur un schéma de liaison à la terre de type **IT**, que se passe-t-il réglementairement lors du premier défaut d'isolement phase-masse ?",
    options: [
      "Le disjoncteur général déclenche instantanément",
      "L'installation continue de fonctionner normalement, le défaut est simplement signalé par un contrôleur permanent d'isolement (CPI)",
      "La tension passe immédiatement à 400V entre toutes les phases",
      "Les moteurs s'inversent automatiquement"
    ],
    correct: 1,
    explanation: "En régime IT, le neutre est isolé. Le premier défaut génère un courant trop faible pour déclencher, l'exploitation se poursuit avec signalisation par le CPI."
  },
  {
    domain: "Électricité",
    question: "Quel est l'intérêt majeur du démarrage étoile-triangle (Y-Δ) sur un moteur asynchrone triphasé de forte puissance ?",
    options: [
      "De doubler la vitesse nominale",
      "De diviser par 3 le courant de démarrage pour éviter les chutes de tension excessives sur le réseau",
      "D'annuler le facteur de puissance à vide",
      "De transformer le moteur triphasé en monophasé"
    ],
    correct: 1,
    explanation: "Le couplage étoile sous-alimente temporairement les enroulements, réduisant le courant d'appel d'environ 3 fois."
  },
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un relais thermique de protection dans un démarreur de moteur asynchrone triphasé ?",
    options: [
      "De protéger le moteur contre les surcharges prolongées et la coupure d'une phase (déséquilibre) en faisant fléchir des bilames",
      "De couper le courant en cas de court-circuit franc en quelques millisecondes",
      "De réguler la vitesse du moteur de 0 à 3000 tr/min",
      "De transformer le courant alternatif en courant continu"
    ],
    correct: 0,
    explanation: "Le relais thermique détecte l'échauffement progressif dû à une surcharge par l'intermédiaire de bilames chauffés par les phases."
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce que le facteur de puissance ($\cos\phi$) dans une installation électrique alternative ?",
    options: [
      "Le rapport entre la puissance active (kW) et la puissance apparente (kVA), traduisant le déphasage entre tension et courant",
      "Le coût du kilowattheure facturé par le fournisseur",
      "La vitesse de propagation du courant dans les câbles",
      "La résistance électrique des conducteurs en cuivre"
    ],
    correct: 0,
    explanation: "Un $\cos\phi$ trop faible (inductif à cause des moteurs) nécessite de rellever le facteur de puissance par des batteries de condensateurs."
  },
  {
    domain: "Électricité",
    question: "Quelle est la fonction d'un transformateur de courant (TC) utilisé pour la mesure ou la protection sur un jeu de barres haute puissance ?",
    options: [
      "D'abaisser un fort courant primaire (ex: 1000A) en un courant secondaire normalisé et sécurisé (ex: 5A) pour alimenter les compteurs ou relais",
      "De transformer le courant alternatif en courant continu 24V",
      "De couper l'alimentation en cas de foudre",
      "D'amplifier la tension pour l'envoyer au loin"
    ],
    correct: 0,
    explanation: "Le TC isole et réduit l'intensité pour permettre la mesure par des appareils standards sans danger."
  },
  {
    domain: "Électricité",
    question: "Qu'appelle-t-on le régime de neutre de type **TN-S** ?",
    options: [
      "Un régime où le neutre est relié à la terre de l'alimentation, et le conducteur de protection (PE) est strictement séparé du conducteur neutre (N) dans toute l'installation",
      "Un régime sans aucune mise à la terre",
      "Un régime où le neutre et la terre sont confondus sur toute la longueur",
      "Un réseau exclusivement alimenté par des panneaux solaires"
    ],
    correct: 0,
    explanation: "En TN-S (Terra-Neutre Séparé), le conducteur de terre PE et le neutre N cheminent séparément depuis l'origine."
  },
  {
    domain: "Électricité",
    question: "Quel appareil de mesure utilise-t-on pour vérifier la résistance d'isolement d'un bobinage de moteur par rapport à la masse sous une tension de 500V ou 1000V ?",
    options: [
      "Un ohmmètre haute tension (mégohmmètre ou contrôleur d'isolement type Megger)",
      "Un multimètre numérique standard en calibre 200 ohms",
      "Une pince ampèremétrique",
      "Un oscilloscope de laboratoire"
    ],
    correct: 0,
    explanation: "Le mégohmmètre applique une tension continue élevée pour détecter les fuites de courant à travers les vernis isolants vieillissants."
  },
  {
    domain: "Électricité",
    question: "Quel est le rôle d'une diode de roue libre placée en parallèle sur la bobine d'un relais ou d'un contacteur commandé en courant continu ?",
    options: [
      "D'absorber la surtension auto-induite (pic de tension) lors de la coupure de l'alimentation de la bobine pour protéger l'électronique de commande",
      "De redresser le courant alternatif en continu",
      "D'augmenter la vitesse d'enclenchement du contacteur",
      "De consommer de l'énergie pour chauffer l'armoire"
    ],
    correct: 0,
    explanation: "À l'ouverture, l'inductance de la bobine génère un pic de tension inverse destructeur ; la diode enclenche une boucle de court-circuit inoffensive."
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un variateur de fréquence (inverter) pour moteur asynchrone triphasé ?",
    options: [
      "Un convertisseur électronique qui redresse le courant secteur en continu puis le ré-Odule en alternatif à tension et fréquence variables pour piloter la vitesse du moteur",
      "Un transformateur statique qui change le 230V en 400V",
      "Un interrupteur crépusculaire pour l'éclairage",
      "Un disjoncteur magnétothermique ultra-rapide"
    ],
    correct: 0,
    explanation: "En faisant varier la fréquence (Hz) et la tension, le variateur contrôle précisément la vitesse et le couple du moteur asynchrone."
  },
  {
    domain: "Électricité",
    question: "Quelle est la différence d'action entre un fusible à action rapide (type aM ou gG) ? Que protège un fusible **gG** (général) ?",
    options: [
      "Il protège les câbles et conducteurs contre les surcharges et les courts-circuits sur toute la plage de fonctionnement",
      "Il protège exclusivement les moteurs au démarrage contre les pics de courant",
      "Il sert de interrupteur général de coupure d'urgence",
      "Il ne protège que l'éclairage basse tension"
    ],
    correct: 0,
    explanation: "Le fusible gG (anciennement gl) assure une protection polyvalente des lignes et des appareils contre les surcharges et courts-circuits."
  },
  {
    domain: "Électricité",
    question: "Pourquoi est-il dangereux d'ouvrir le circuit secondaire d'un transformateur de courant (TC) alors que le primaire est sous tension ?",
    options: [
      "Cela génère une surtension magnétique mortelle et destructrice aux bornes du secondaire ouvert (phénomène d'ouverture de circuit inductif)",
      "Cela fait sauter le disjoncteur général de la ville",
      "Cela n'a absolument aucune conséquence",
      "Cela inverse le sens de rotation des moteurs"
    ],
    correct: 0,
    explanation: "Un TC ouvert au secondaire ne peut plus annuler son flux magnétique, créant un pic de tension de plusieurs milliers de volts très dangereux."
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce que la sélectivité ampèremétrique entre deux protections (disjoncteurs en cascade) ?",
    options: [
      "Le fait que seule la protection située immédiatement en amont du défaut se déclenche, laissant le reste de l'installation alimenté",
      "Le réglage de la couleur des voyants lumineux",
      "La vitesse de réarmement automatique des disjoncteurs",
      "Le choix du fabricant du tableau électrique"
    ],
    correct: 0,
    explanation: "La sélectivité garantit la continuité de service en coupant uniquement la zone en défaut le plus près possible de l'anomalie."
  },
  {
    domain: "Électricité",
    question: "Quel est le principe de fonctionnement d'un interrupteur différentiel 30mA ?",
    options: [
      "Il surveille l'égalité entre le courant entrant (phase) et le courant sortant (neutre) ; si la différence dépasse 30mA (fuite vers la terre), il coupe le circuit",
      "Il limite le courant total de la maison à 30 ampères",
      "Il protège contre les courts-circuits entre phases",
      "Il stabilise la tension en cas de baisse sur le réseau"
    ],
    correct: 0,
    explanation: "Le tore différentiel mesure la somme vectorielle des courants : s'il y a un déséquilibre, c'est qu'un courant s'échappe vers la terre (risque d'électrocution)."
  },
  {
    domain: "Électricité",
    question: "Qu'appelle-t-on le 'couplage étoile' (Y) d'un moteur asynchrone triphasé sous 400V ?",
    options: [
      "Les trois enroulements sont reliés par une extrémité à une même étoile (point neutre) et alimentés par les phases sur l'autre extrémité",
      "Les enroulements sont branchés bout à bout en triangle fermé",
      "Le moteur fonctionne en monophasé 230V",
      "Le rotor est bloqué mécaniquement"
    ],
    correct: 0,
    explanation: "En couplage étoile, chaque enroulement subit une tension divisée par la racine de 3 ($400 / \sqrt{3} \approx 230V$)."
  },
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un sectionneur par rapport à un disjoncteur ?",
    options: [
      "Le sectionneur assure une coupure visible et sécurisée pour la consignation (hors charge), tandis que le disjoncteur coupe le courant en charge et protège contre les surintensités",
      "Le sectionneur coupe les courts-circuits plus vite que le disjoncteur",
      "Le sectionneur sert de transformateur de tension",
      "Il n'y a aucune différence technique"
    ],
    correct: 0,
    explanation: "Un sectionneur n'a pas de pouvoir de coupure de courant : on ne l'ouvre qu'à vide pour consigner un équipement en toute sécurité."
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce que l'indice de protection (IP) noté sur un matériel électrique (ex: IP65) ?",
    options: [
      "Le premier chiffre indique la protection contre les corps solides (poussières), et le second contre la pénétration des liquides (eau)",
      "La résistance électrique interne en kilo-ohms",
      "La tension maximale d'isolement en kilovolts",
      "La température maximale d'utilisation en degrés Celsius"
    ],
    correct: 0,
    explanation: "L'indice IP (norme CEI 60529) qualifie l'étanchéité d'un boîtier face aux agressions extérieures (ex: IP65 = étanche à la poussière et aux jets d'eau)."
  },
  {
    domain: "Électricité",
    question: "Pourquoi réalise-t-on la mise à la terre des masses métalliques d'un équipement électrique professionnel ?",
    options: [
      "Pour évacuer vers la terre les courants de défaut en cas de contact accidentel d'une phase avec la masse, provoquant le déclenchement immédiat de la protection",
      "Pour améliorer la réception du Wi-Fi dans l'atelier",
      "Pour attirer la foudre loin des bâtiments",
      "Pour réduire la facture d'électricité"
    ],
    correct: 0,
    explanation: "La liaison équipotentielle et la terre protègent les personnes contre les contacts indirects en éliminant les tensions dangereuses sur les carcasses."
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un automate programmable industriel (API ou PLC) ?",
    options: [
      "Un ordinateur durci conçu pour automatiser des processus industriels par des programmes logiques exécutant des entrées/sorties",
      "Un simple relais temporisé analogique à molette",
      "Un disjoncteur intelligent commandé par smartphone",
      "Un moteur pas à pas de haute précision"
    ],
    correct: 0,
    explanation: "L'API gère la logique de commande des machines industrielles en remplaçant les anciens câblages de relais par du code (GRAFCET, Ladder)."
  },
  {
    domain: "Électricité",
    question: "Quel est l'effet d'une baisse anormale de la tension d'alimentation (chute de tension) sur un moteur asynchrone entraînant une charge constante ?",
    options: [
      "Une augmentation du courant absorbé (intensité) pour maintenir le couple, entraînant une surchauffe des enroulements",
      "Une diminution automatique de la consommation électrique et du bruit",
      "Une augmentation de la vitesse de rotation",
      "Un arrêt instantané par surtension"
    ],
    correct: 0,
    explanation: "Puisque la puissance tend à rester constante pour la charge, si la tension chute, le courant augmente, risquant de griller les enroulements."
  },
  {
    domain: "Électricité",
    question: "Qu'appelle-t-on le pouvoir de coupure d'un disjoncteur ?",
    options: [
      "Le courant de court-circuit maximal que le disjoncteur peut interrompre sans se détruire ni propager d'arc électrique dangereux",
      "Le courant nominal maximal qu'il peut laisser passer en service continu",
      "La force physique nécessaire pour actionner la manette",
      "La tension minimale de fonctionnement"
    ],
    correct: 0,
    explanation: "Le pouvoir de coupure (ex: 10 kA) est la capacité critique d'éteindre l'arc électrique intense provoqué lors d'un court-circuit franc."
  },

  // ==========================================
  // 8. FRANÇAIS (Français) - 20 Questions
  // ==========================================
  {
    domain: "Français",
    question: "Choisissez la formulation correcte : 'Les problèmes techniques que nous _______ rencontrés nécessitent une analyse rigoureuse.'",
    options: [
      "avons",
      "avons eu",
      "avons rencontrés",
      "avons rencontrées"
    ],
    correct: 2,
    explanation: "Le participe passé conjugué avec 'avoir' s'accorde avec le COD ('que', mis pour 'problèmes', masculin pluriel) placé *avant* le verbe."
  },
  {
    domain: "Français",
    question: "Quelle est la nature grammaticale exacte du mot 'leur' dans : 'Le technicien **leur** a expliqué la panne.' ?",
    options: [
      "Un pronom personnel complément d'objet indirect (COI)",
      "Un adjectif possessif invariable",
      "Un pronom démonstratif neutre",
      "Un adverbe de lieu"
    ],
    correct: 0,
    explanation: "'Leur' remplace un groupe nominal de personnes (à qui ?). Placé devant le verbe, c'est un pronom personnel COI invariable."
  },
  {
    domain: "Français",
    question: "Quelle est l'orthographe correcte du participe passé dans : 'Les pièces que nous avons _______' ?",
    options: [
      "réparé",
      "réparés",
      "réparée",
      "réparées"
    ],
    correct: 3,
    explanation: "Le COD 'que' représente 'les pièces' (féminin pluriel) et est placé avant l'auxiliaire 'avoir'. Le participe passé s'accorde donc au féminin pluriel (réparées)."
  },
  {
    domain: "Français",
    question: "Quel est le pluriel correct du mot composé 'un porte-clé' ?",
    options: [
      "des porte-clés",
      "des portes-clé",
      "des portes-clés",
      "des porte-clé"
    ],
    correct: 2,
    explanation: "Dans le nom composé 'porte-clés', le verbe 'porte' reste invariable, et le nom complément 'clés' prend la marque du pluriel."
  },
  {
    domain: "Français",
    question: "Comment s'écrit correctement la forme verbale au subjonctif présent de 'venir' à la 1ère personne du pluriel (nous) ?",
    options: [
      "que nous venions",
      "que nous venons",
      "que nous venions",
      "que nous viendrions"
    ],
    correct: 0,
    explanation: "Au subjonctif présent, le verbe venir se conjugue : que je vienne, que tu viennes, qu'il vienne, que nous venions, que vous veniez, qu'ils viennent."
  },
  {
    domain: "Français",
    question: "Quelle phrase respecte l'accord correct avec 'la plupart' ?",
    options: [
      "La plupart des techniciens ont validé leur formation.",
      "La plupart des techniciens a validé son formation.",
      "La plupart ont validé son formation.",
      "La plupart des technicien ont validé leurs."
    ],
    correct: 0,
    explanation: "'La plupart' suivi d'un nom au pluriel s'accorde au pluriel (verbe et pronoms au pluriel)."
  },
  {
    domain: "Français",
    question: "Quel est le synonyme exact du mot 'obsolète' dans un contexte technique ?",
    options: [
      "Dépassé, périmé, qui n'est plus en usage",
      "Neuf, flambant neuf, moderne",
      "Robuste et résistant aux chocs",
      "Rapide et instantané"
    ],
    correct: 0,
    explanation: "Un équipement obsolète est un matériel qui est dépassé technologiquement ou dont la production a cessé."
  },
  {
    domain: "Français",
    question: "Identifiez la phrase correctement orthographiée :",
    options: [
      "Malgré les difficultés, nous sommes parvenus à livrer le chantier.",
      "Malgré les difficultés, nous sommes parvenue à livrer le chantier.",
      "Malgrés les difficultés, nous somme parvenus à livrer le chantier.",
      "Malgré les difficultées, nous sommes parvenus à livrer le chantier."
    ],
    correct: 0,
    explanation: "'Malgré' prend un 'é' final fixe, 'difficultés' prend un 'é' et un 's', et 'sommes' s'accorde avec 'nous'."
  },
  {
    domain: "Français",
    question: "Quel est le rôle de la conjonction 'quoique' (en un seul mot) ?",
    options: [
      "Exprimer la concession ou l'opposition (synonyme de 'bien que')",
      "Introduire une interrogation directe",
      "Remplacer le pronom relatif 'qui'",
      "Indiquer une condition absolue"
    ],
    correct: 0,
    explanation: "'Quoique' (avec un q) signifie 'bien que'. 'Quoi que' (en deux mots) signifie 'quelle que soit la chose que'."
  },
  {
    domain: "Français",
    question: "Quelle est la bonne orthographe du verbe 'allouer' au participe passé féminin pluriel ?",
    options: [
      "allouées",
      "alloués",
      "alloué",
      "allouayer"
    ],
    correct: 0,
    explanation: "Le participe passé d'allouer s'accorde selon les règles classiques (ex: des subventions allouées)."
  },
  {
    domain: "Français",
    question: "Quel est le sens du préfixe technique 'hydro-' dans des mots comme hydraulique ou hydrocarbure ?",
    options: [
      "Relatif à l'eau ou aux fluides",
      "Relatif à la chaleur et aux hautes températures",
      "Relatif à l'électricité statique",
      "Relatif au vide absolu"
    ],
    correct: 0,
    explanation: "Le préfixe grec 'hydro-' fait référence à l'eau."
  },
  {
    domain: "Français",
    question: "Comment s'accorde l'adjectif de couleur composé 'des camions vert olive' ?",
    options: [
      "Invariable (ni 'vert' ni 'olive' ne prennent de s car ce sont des noms employés comme adjectifs de couleur)",
      "Les deux prennent un s : 'verts olives'",
      "Seul 'verts' prend un s",
      "Seul 'olives' prend un s"
    ],
    correct: 0,
    explanation: "Les noms de couleur issus de noms d'objets, de fruits ou de fleurs (comme olive, marron, orange) restent invariables."
  },
  {
    domain: "Français",
    question: "Quelle est la nature du mot 'soigneusement' dans la phrase : 'Le technicien serre les boulons soigneusement.' ?",
    options: [
      "Un adverbe de manière",
      "Un adjectif qualificatif épithète",
      "Un pronom personnel",
      "Une préposition de lieu"
    ],
    correct: 0,
    explanation: "En -ment, les adverbes modifient le verbe pour indiquer comment l'action est réalisée (ici, de manière soigneuse)."
  },
  {
    domain: "Français",
    question: "Quelle est la forme correcte du conditionnel présent du verbe 'résoudre' à la 1ère personne du singulier (je) ?",
    options: [
      "je résoudrais",
      "je résoudrai",
      "je résolverais",
      "je résouderais"
    ],
    correct: 0,
    explanation: "Le conditionnel présent de résoudre s'écrit avec -drais (je résoudrais), à ne pas confondre avec le futur simple en -drai (je résoudrai)."
  },
  {
    domain: "Français",
    question: "Qu'est-ce qu'un pléonasme ?",
    options: [
      "L'emploi de mots superflus ayant le même sens (ex: 'monter en haut')",
      "Une contradiction flagrante dans une phrase",
      "Un mot ayant plusieurs sens opposés",
      "Une figure de style basée sur l'exagération poétique"
    ],
    correct: 0,
    explanation: "Le pléonasme consiste à répéter une idée sous des formes redondantes."
  },
  {
    domain: "Français",
    question: "Comment orthographiez-vous le pluriel du mot 'intervenant' ?",
    options: [
      "des intervenants",
      "des intervenant",
      "des intervenants",
      "des intervent"
    ],
    correct: 0,
    explanation: "Nom commun prenant un 's' au pluriel : des intervenants."
  },
  {
    domain: "Français",
    question: "Quel est le féminin du mot 'conducteur' ?",
    options: [
      "conductrice",
      "conducteuse",
      "conductant",
      "conductrice ou conductrice"
    ],
    correct: 0,
    explanation: "Le féminin régulier en -teur est -trice (un conducteur / une conductrice)."
  },
  {
    domain: "Français",
    question: "Identifiez la phrase correcte contenant un gérondif :",
    options: [
      "En vérifiant les pressions, le mécanicien a détecté la fuite.",
      "En vérifiant les pressions, la fuite a été détectée.",
      "Le mécanicien est en vérifiant.",
      "Vérifiant les pressions, la fuite apparut."
    ],
    correct: 0,
    explanation: "Le gérondif (en + participe présent) doit avoir le même sujet que le verbe principal (ici, c'est bien le mécanicien qui vérifie et détecte)."
  },
  {
    domain: "Français",
    question: "Quel est le synonyme professionnel du mot 'consigner' une machine électrique ?",
    options: [
      "La rendre inerte et condamner ses sources d'énergie pour intervenir en toute sécurité",
      "L'acheter en consigne auprès du fournisseur",
      "La ranger dans le magasin de pièces détachées",
      "L'enregistrer dans le registre de paie"
    ],
    correct: 0,
    explanation: "La consignation électrique est la procédure officielle de mise en sécurité (séparation, condamnation, VAT, etc.)."
  },
  {
    domain: "Français",
    question: "Quelle est la règle d'accord avec le quantifieur 'cent' dans 'deux cents' ? Et dans 'deux cent cinq' ?",
    options: [
      "Multiplié et dernier élément, 'cent' prend un s dans 'deux cents', mais reste invariable suivi d'un autre nombre dans 'deux cent cinq'",
      "Il prend toujours un s",
      "Il ne prend jamais de s",
      "Il s'accorde avec le nom suivant"
    ],
    correct: 0,
    explanation: "Règle classique de numération : 'cent' prend un 's' s'il est multiplié et qu'aucun autre nombre ne suit (deux cents), mais reste invariable s'il est suivi (deux cent cinq)."
  },

  // ==========================================
  // 9. ANGLAIS (Anglais) - 20 Questions
  // ==========================================
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
    explanation: "C'est une conditionnelle de type 1 (First Conditional) : 'If' + présent simple ('drops'), proposition principale au présent/futur ('shuts down')."
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
    explanation: "Le temps d'origine est le présent continu ('are repairing'). À la voix passive, cela devient 'is being' + participe passé ('is being repaired')."
  },
  {
    domain: "Anglais",
    question: "What does the technical acronym **PPE** stand for in workplace safety guidelines?",
    options: [
      "Personal Protective Equipment (Équipements de Protection Individuelle)",
      "Primary Power Engine",
      "Pneumatic Pressure Element",
      "Planned Preventive Engineering"
    ],
    correct: 0,
    explanation: "PPE désigne les EPI (casque, gants, lunettes, chaussures de sécurité)."
  },
  {
    domain: "Anglais",
    question: "Choose the correct translation for: 'Le niveau d'huile est trop bas.'",
    options: [
      "The oil level is too low.",
      "The oil level is very high.",
      "The oil pressure is too short.",
      "The oil temperature is cold."
    ],
    correct: 0,
    explanation: "'Too low' signifie 'trop bas'."
  },
  20th_placeholder: {
    domain: "Anglais",
    question: "What is the technical term for 'une vanne' in English industrial terminology?",
    options: [
      "A valve",
      "A pipe",
      "A pump",
      "A bolt"
    ],
    correct: 0,
    explanation: "'A valve' se traduit par vanne ou soupape."
  },
  {
    domain: "Anglais",
    question: "Complete the sentence: 'Before starting maintenance, you _______ lock out and tag out the main breaker.'",
    options: [
      "must",
      "might",
      "can",
      "could"
    ],
    correct: 0,
    explanation: "'Must' exprime une obligation absolue ou une règle de sécurité impérative."
  },
  {
    domain: "Anglais",
    question: "What does 'Troubleshooting' mean in a technical workshop environment?",
    options: [
      "Le dépannage et la recherche de pannes",
      "Le transport de charges lourdes",
      "Le nettoyage des sols",
      "La commande de pièces de rechange"
    ],
    correct: 0,
    explanation: "Troubleshooting est l'art de diagnostiquer et résoudre les dysfonctionnements techniques."
  },
  {
    domain: "Anglais",
    question: "Select the correct past participle of the irregular verb 'to break':",
    options: [
      "broken",
      "breaked",
      "broke",
      "breaking"
    ],
    correct: 0,
    explanation: "Le verbe break se conjugue : break - broke - broken."
  },
  {
    domain: "Anglais",
    question: "What is the English term for 'un court-circuit'?",
    options: [
      "A short circuit",
      "An open loop",
      "A ground fault",
      "A power surge"
    ],
    correct: 0,
    explanation: "Court-circuit se traduit directement par 'short circuit'."
  },
  {
    domain: "Anglais",
    question: "Translate into English: 'La machine fonctionne correctement.'",
    options: [
      "The machine is running properly.",
      "The machine is broken down.",
      "The machine is stopping now.",
      "The machine is leaking oil."
    ],
    correct: 0,
    explanation: "'To run properly' ou 'to work properly' signifie fonctionner correctement."
  },
  {
    domain: "Anglais",
    question: "What is a 'spare part' in technical logistics?",
    options: [
      "Une pièce de rechange",
      "Une pièce usée mise au rebut",
      "Un outil de mesure",
      "Un produit de nettoyage"
    ],
    correct: 0,
    explanation: "Spare parts = pièces de rechange stockées pour la maintenance."
  },
  {
    domain: "Anglais",
    question: "Complete: 'The technician _______ finished the repair report an hour ago.'",
    options: [
      "finished",
      "has finished",
      "finishes",
      "is finishing"
    ],
    correct: 0,
    explanation: "L'indication temporelle 'an hour ago' (passé terminé) exige le prétérit simple ('finished')."
  },
  {
    domain: "Anglais",
    question: "What does **OEM** stand for in equipment manufacturing?",
    options: [
      "Original Equipment Manufacturer (Fabricant d'équipement d'origine)",
      "Overhead Electric Motor",
      "Oil Emission Measurement",
      "Operational Efficiency Manual"
    ],
    correct: 0,
    explanation: "OEM désigne le constructeur d'origine de la machine."
  },
  {
    domain: "Anglais",
    question: "What is the English word for 'un écrou'?",
    options: [
      "A nut",
      "A bolt",
      "A screw",
      "A washer"
    ],
    correct: 0,
    explanation: "Nut = écrou, Bolt = boulon/vis, Washer = rondelle."
  },
  {
    domain: "Anglais",
    question: "Choose the correct comparative form: 'This new tractor is _______ than the old model.'",
    options: [
      "more powerful",
      "powerfuler",
      "most powerful",
      "as powerful"
    ],
    correct: 0,
    explanation: "Les adjectifs longs (powerful) forment leur comparatif avec 'more + adjectif + than'."
  },
  {
    domain: "Anglais",
    question: "What is the meaning of 'Maintenance schedule'?",
    options: [
      "Le calendrier ou plan de maintenance préventive",
      "Le prix de vente de la machine",
      "La liste des pannes survenues",
      "Le manuel d'utilisation"
    ],
    correct: 0,
    explanation: "Un schedule est un planning ou calendrier d'intervention."
  },
  {
    domain: "Anglais",
    question: "Translate: 'Do not touch, machine under maintenance.'",
    options: [
      "Ne pas toucher, machine en maintenance.",
      "Ne pas démarrer, machine propre.",
      "Attention, risque de chute.",
      "Veuillez éteindre le moteur."
    ],
    correct: 0,
    explanation: "Traduction exacte et directe d'une consigne de sécurité industrielle."
  },
  {
    domain: "Anglais",
    question: "What is a 'pressure gauge'?",
    options: [
      "Un manomètre (instrument de mesure de pression)",
      "Un thermomètre d'huile",
      "Un débitmètre d'eau",
      "Un voltmètre de tableau"
    ],
    correct: 0,
    explanation: "A gauge = un manomètre / jauge de mesure."
  },
  {
    domain: "Anglais",
    question: "Complete the sentence with the correct modal: 'You _______ wear safety glasses when grinding metal.'",
    options: [
      "must",
      "can't",
      "needn't",
      "might"
    ],
    correct: 0,
    explanation: "Le port de lunettes de protection lors du meulage est une obligation stricte ('must')."
  },
  {
    domain: "Anglais",
    question: "What is the opposite of 'to tighten' (a bolt)?",
    options: [
      "To loosen",
      "To break",
      "To turn",
      "To fix"
    ],
    correct: 0,
    explanation: "Tighten = serrer / Loosen = desserrer."
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
  
  // Mélanger et limiter à exactement 20 questions max
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
      btn.style.backgroundColor = '#28a745';
      btn.style.color = '#fff';
    } else if (index === selected) {
      btn.style.backgroundColor = '#dc3545';
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
    feedback = "🏆 Excellent niveau ! Maîtrise parfaite des concepts d'expert.";
  } else if (percentage >= 50) {
    feedback = "👍 Bon niveau global, mais quelques notions techniques demandent de l'approfondissement.";
  } else {
    feedback = "📚 Niveau perfectible. Revoyez les notions techniques pour consolider votre expertise.";
  }
  feedbackText.textContent = `"${feedback}"`;

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

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
