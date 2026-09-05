// Base de données complète des questions techniques, de français et d'anglais
const questionsData = [
  // --- MACHINES AGRICOLES ---
  {
    domain: "Agricole",
    question: "Quel est le rôle principal d'une prise de force (PDF) sur un tracteur agricole ?",
    options: ["Refroidir le moteur", "Transmettre la puissance mécanique du moteur aux outils attelés", "Gérer le freinage de la remorque", "Alourdir l'essieu avant"],
    correct: 1,
    explanation: "La prise de force tourne à un régime normalisé (souvent 540 ou 1000 tr/min) pour entraîner des broyeurs, faucheuses ou presses.",
    svgType: "motor"
  },
  {
    domain: "Agricole",
    question: "Pourquoi les tracteurs disposent-ils souvent d'un lestage (masses en fonte ou eau dans les pneus) ?",
    options: ["Pour réduire la vitesse maximale", "Pour améliorer l'adhérence et limiter le patinage aux efforts de traction", "Pour alléger la direction", "Pour consommer plus de carburant"],
    correct: 1,
    explanation: "Le lestage augmente la charge sur les roues pour optimiser le transfert de puissance au sol.",
    svgType: "weight"
  },
  {
    domain: "Agricole",
    question: "Quel composant relie l'attelage arrière d'un tracteur à un outil et permet de gérer le relevage hydraulique ?",
    options: ["Le troisième point (barre ou vérin supérieur)", "La courroie de ventilateur", "Le pont avant directeur", "L'alternateur"],
    correct: 0,
    explanation: "Le troisième point assure la stabilité et le réglage de l'assiette des outils portés ou semi-portés.",
    svgType: "cylinder"
  },
  {
    domain: "Agricole",
    question: "À quoi sert le différentiel sur un essieu de tracteur agricole ?",
    options: ["À bloquer les roues à haute vitesse", "À permettre aux roues intérieures et extérieures de tourner à des vitesses différentes dans les virages", "À multiplier la vitesse par deux", "À couper le moteur"],
    correct: 1,
    explanation: "Le différentiel compense la différence de distance parcourue par les roues gauche et droite en courbe.",
    svgType: "gear"
  },
  {
    domain: "Agricole",
    question: "Quel est l'intérêt d'un pont avant directeur et moteur sur un tracteur moderne ?",
    options: ["Augmenter la consommation d'huile", "Améliorer la motricité globale et la force de traction en conditions difficiles", "Réduire le poids du tracteur", "Supprimer les freins arrière"],
    correct: 1,
    explanation: "La transmission intégrale (4RM) évite le patinage dans les sols meubles ou humides.",
    svgType: "motor"
  },
  {
    domain: "Agricole",
    question: "Quel système équipe la plupart des moissonneuses-batteuses pour séparer les grains de la paille après le battage ?",
    options: ["Le semoir", "Les secoueurs ou le rotor de séparation", "Le radiateur d'huile", "Le compresseur de climatisation"],
    correct: 1,
    explanation: "Les secoueurs secouent la paille pour récupérer les derniers grains restants qui tombent dans la grille.",
    svgType: "flow"
  },
  {
    domain: "Agricole",
    question: "Quelle est l'utilité du relevage avant sur certains tracteurs polyvalents ?",
    options: ["Porter des masses d'alourdissement ou des outils frontaux (ex: faucheuse, masselotte)", "Refroidir le carburant", "Éclairer les champs en marche arrière", "Gonfler les pneus automatiquement"],
    correct: 0,
    explanation: "Il permet de combiner les travaux en travaillant à l'avant et à l'arrière simultanément.",
    svgType: "cylinder"
  },
  {
    domain: "Agricole",
    question: "Quel fluide est principalement utilisé pour actionner les vérins et distributeurs d'un outil agricole hydraulique ?",
    options: ["De l'eau savonneuse", "De l'huile hydraulique minérale ou synthétique", "Du liquide de frein DOT 4", "De l'essence"],
    correct: 1,
    explanation: "L'huile hydraulique lubrifie et transmet la puissance sous haute pression.",
    svgType: "oil"
  },
  {
    domain: "Agricole",
    question: "Quel est le rôle du système d'injection de carburant dans un moteur diesel agricole ?",
    options: ["Pulvériser finement le gazole dans la chambre de combustion au moment opportun", "Allumer l'essence avec une étincelle", "Refroidir le bloc moteur", "Filtrer l'air d'admission"],
    correct: 0,
    explanation: "L'auto-inflammation du gazole pulvérisé sous haute pression génère l'énergie motrice.",
    svgType: "pump"
  },
  {
    domain: "Agricole",
    question: "Qu'appelle-t-on un semoir pneumatique ?",
    options: ["Un semoir qui fonctionne sans graines", "Un semoir utilisant un flux d'air pour transporter et distribuer les graines avec précision", "Un semoir manuel en bois", "Un outil fonctionnant à l'eau"],
    correct: 1,
    explanation: "Le flux d'air assure une répartition homogène des semences dans les lignes de culture.",
    svgType: "flow"
  },
  {
    domain: "Agricole",
    question: "Pourquoi nettoie-t-on régulièrement le radiateur d'un tracteur travaillant en conditions poussiéreuses (moisson, foin) ?",
    options: ["Pour le repeindre", "Pour éviter le colmatage qui entraîne une surchauffe du moteur", "Pour alléger le tracteur", "Pour consommer moins d'huile"],
    correct: 1,
    explanation: "La poussière accumulée obstrue les faisceaux et bloque l'échange thermique.",
    svgType: "cooler"
  },
  {
    domain: "Agricole",
    question: "Quel est le rôle d'une herse rotative en préparation du lit de semence ?",
    options: ["Tasser fortement la terre", "Émietter et niveler la terre grâce à des dents animées d'un mouvement rotatif", "Semer l'engrais", "Arroser les cultures"],
    correct: 1,
    explanation: "Elle prépare une structure de sol fine et régulière pour accueillir les graines.",
    svgType: "gear"
  },
  {
    domain: "Agricole",
    question: "Qu'est-ce qu'une trémie sur une machine agricole (semoir ou engrais) ?",
    options: ["Le réservoir de stockage des graines ou de l'engrais à distribuer", "Le siège du conducteur", "Le tuyau d'échappement", "Le filtre à air"],
    correct: 0,
    explanation: "La trémie contient la matière première (semence ou fertilisant) avant épandage.",
    svgType: "filter"
  },
  {
    domain: "Agricole",
    question: "Quel composant assure le démarrage électrique d'un moteur thermique de tracteur ?",
    options: ["L'alternateur", "Le démarreur électrique alimenté par la batterie", "Le radiateur", "Le réservoir"],
    correct: 1,
    explanation: "Le démarreur lance le vilebrequin jusqu'à ce que le moteur démarre de manière autonome.",
    svgType: "motor"
  },
  {
    domain: "Agricole",
    question: "Quel est l'effet d'une pression de gonflage des pneus trop élevée aux champs ?",
    options: ["Un meilleur confort", "Un tassement excessif du sol et un patinage accru", "Une économie de pneu totale", "Une vitesse plus lente"],
    correct: 1,
    explanation: "Une pression trop forte réduit l'empreinte au sol, abîme les sols agricoles et réduit l'adhérence.",
    svgType: "warning"
  },
  {
    domain: "Agricole",
    question: "À quoi sert un limiteur de couple (ou boulon de cisaillement) sur la transmission d'un outil de travail du sol ?",
    options: ["À casser exprès pour protéger la mécanique en cas d'obstacle (souche, pierre)", "À bloquer les roues", "À changer les vitesses", "À mesurer la vitesse"],
    correct: 0,
    explanation: "Il fait office de fusible mécanique pour éviter la casse du boîtier ou de l'arbre en cas de blocage.",
    svgType: "breaker"
  },
  {
    domain: "Agricole",
    question: "Quel rôle joue le filtre à air cyclonique sur un tracteur agricole ?",
    options: ["Prélarier et éjecter les grosses particules de poussière avant le filtre en papier", "Filtrer l'huile moteur", "Refroidir l'habitacle", "Éurer le carburant"],
    correct: 0,
    explanation: "La force centrifuge sépare les poussières lourdes pour préserver le filtre principal.",
    svgType: "filter"
  },
  {
    domain: "Agricole",
    question: "Qu'est-ce qu'un andaineur en agriculture ?",
    options: ["Une machine qui rassemble l'herbe coupée en lignes (andains) pour faciliter le ramassage", "Un outil pour couper le bois", "Une pompe à eau", "Un pulvérisateur"],
    correct: 0,
    explanation: "Il prépare le fourrage pour le passage de la presse ou de l'ensileuse.",
    svgType: "flow"
  },
  {
    domain: "Agricole",
    question: "Quel est l'objectif principal d'un traitement phytosanitaire par pulvérisation ?",
    options: ["Nettoyer la cabine", "Protéger les cultures contre les parasites, maladies ou mauvaises herbes", "Colorer les feuilles", "Alourdir la plante"],
    correct: 1,
    explanation: "Le pulvérisateur répartit uniformément les produits de protection des cultures.",
    svgType: "pump"
  },
  {
    domain: "Agricole",
    question: "Pourquoi les circuits hydrauliques des tracteurs modernes utilisent-ils un système Load-Sensing (détection de charge) ?",
    options: ["Pour consommer un maximum d'énergie", "Pour adapter le débit et la pression de la pompe strictement aux besoins réels de l'outil", "Pour chauffer l'huile", "Pour supprimer le réservoir"],
    correct: 1,
    explanation: "Le système Load-Sensing optimise le rendement énergétique et évite les pertes de puissance.",
    svgType: "pressure"
  },

  // --- MAINTENANCE DES MACHINES AGRICOLES ---
  {
    domain: "MaintAgricole",
    question: "Quelle opération de maintenance préventive est indispensable après l'utilisation d'un pulvérisateur de produits phytosanitaires ?",
    options: ["Le rincage complet du circuit et de la cuve à l'eau claire", "Le graissage des pneus", "La vidange du pont arrière", "Le changement du démarreur"],
    correct: 0,
    explanation: "Le rinçage évite la corrosion des composants et les réactions chimiques entre produits résiduels.",
    svgType: "warning"
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il crucial de vérifier régulièrement la tension des courroies d'entraînement sur une machine de récolte ?",
    options: ["Pour éviter le patinage, la perte de rendement des organes et l'usure prématurée", "Pour changer la couleur de la courroie", "Pour augmenter la tension de la batterie", "Pour réduire le niveau d'huile"],
    correct: 0,
    explanation: "Une courroie détendue patine, chauffe et s'use rapidement sous l'effet de la charge.",
    svgType: "belt"
  },
  {
    domain: "MaintAgricole",
    question: "Quel risque court-on si l'on néglige le graissage des paliers et articulations d'un chargeur frontale ou d'un outil agricole ?",
    options: ["Un grippage rapide, une usure anormale des axes et du jeu mécanique excessif", "Une baisse de la consommation de carburant", "Un meilleur rendement", "Un nettoyage automatique"],
    correct: 0,
    explanation: "La graisse fraîche chasse l'humidité et les impuretés tout en créant un film antifriction.",
    svgType: "bearing"
  },
  {
    domain: "MaintAgricole",
    question: "Quel est l'impact d'un filtre à carburant colmaté sur un moteur de machine agricole ?",
    options: ["Des pertes de puissance, des ratés ou un refus de démarrer en charge", "Une vitesse de pointe doublée", "Une surchauffe de la climatisation", "Une baisse du niveau d'huile"],
    correct: 0,
    explanation: "Le gazole ne passe plus en quantité suffisante pour alimenter la pompe d'injection.",
    svgType: "filter"
  },
  {
    domain: "MaintAgricole",
    question: "Comment doit-on stocker une batterie de tracteur immobilisé pendant plusieurs mois d'hiver ?",
    options: ["La laisser branchée dans le froid sans surveillance", "La démonter, la stocker dans un local tempéré et effectuer une charge de maintien", "La vider complètement de son acide", "La jeter directement"],
    correct: 1,
    explanation: "Le froid et l'autodécharge risquent de sulfater et endommager définitivement la batterie.",
    svgType: "battery"
  },
  {
    domain: "MaintAgricole",
    question: "Que doit-on inspecter en priorité lors de la maintenance d'une transmission par chaîne sur un distributeur d'engrais ou un fumier ?",
    options: ["L'allongement de la chaîne, l'usure des pignons et la présence de lubrifiant", "La couleur de la peinture", "Le niveau d'essence", "La pression des pneus"],
    correct: 0,
    explanation: "Une chaîne détendue risque de sauter des dents ou de casser sous effort.",
    svgType: "mechanics"
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il impératif de contrôler le point de rosée ou la protection antigel du liquide de refroidissement avant l'hiver ?",
    options: ["Pour éviter le gel du bloc moteur qui provoquerait des fissures destructrices", "Pour augmenter la puissance fiscale", "Pour nettoyer l'intérieur du radiateur", "Pour colorer le vase d'expansion"],
    correct: 0,
    explanation: "L'eau en gelant prend du volume et peut fendre irrémédiablement le bloc moteur ou la culasse.",
    svgType: "warning"
  },
  {
    domain: "MaintAgricole",
    question: "Lors d'une intervention de maintenance sur le circuit hydraulique d'un tracteur, quelle règle d'hygiène et de propreté est fondamentale ?",
    options: ["Travailler dans la poussière", "Maintenir une propreté absolue pour éviter l'introduction de la moindre impureté dans les composants sensibles", "Laisser les flexibles ouverts à l'air libre", "Utiliser de l'eau sale pour nettoyer"],
    correct: 1,
    explanation: "Les micro-particules détruisent instantanément les pompes et distributeurs haute pression.",
    svgType: "oil"
  },
  {
    domain: "MaintAgricole",
    question: "Quel diagnostic pose-t-on face à une fumée noire excessive à l'échappement d'un moteur diesel agricole en charge ?",
    options: ["Un filtre à air fortement colmaté ou un excès de carburant / défaut d'injecteur", "Un manque d'huile de pont", "Une batterie déchargée", "Un circuit hydraulique vide"],
    correct: 0,
    explanation: "Le manque d'air ou un mauvais spray de gazole empêche une combustion complète (imbrûlés).",
    svgType: "warning"
  },
  {
    domain: "MaintAgricole",
    question: "À quelle fréquence générale doit-on effectuer la vidange de l'huile moteur et le remplacement des filtres associés ?",
    options: ["Tous les 10 ans", "Selon les préconisations constructeur (ex: toutes les 250 à 500 heures de service)", "Uniquement quand le moteur serre", "Jamais"],
    correct: 1,
    explanation: "Le respect des heures de service préserve la lubrification des pièces en frottement.",
    svgType: "oil"
  },
  {
    domain: "MaintAgricole",
    question: "Quel est le rôle du purgeur de décantation d'eau sur l'alimentation en gazole d'un engin agricole ?",
    options: ["Séparer et éliminer l'eau et les impuretés lourdes présentes dans le carburant avant la pompe", "Ajouter de l'eau au moteur", "Refroidir l'alternateur", "Mesurer le régime"],
    correct: 0,
    explanation: "L'eau dans le gazole provoque la rouille et le grippage des injecteurs haute pression.",
    svgType: "filter"
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi est-il important de vérifier régulièrement le serrage des écrous de roues sur les tracteurs lourds ?",
    options: ["Pour éviter le cisaillement des goujons et la perte de roue due aux vibrations intenses", "Pour consommer moins", "Pour gonfler les pneus", "Pour ajuster la vitesse"],
    correct: 0,
    explanation: "Les efforts de traction répétés et les chocs provoquent un desserrage progressif.",
    svgType: "torque"
  },
  {
    domain: "MaintAgricole",
    question: "Que indique la présence de mayonnaise (émulsion blanc-grisâtre) sur la jauge d'huile moteur ?",
    options: ["Un mélange accidentel d'eau (ou de LDR) et d'huile (fuite de joint de culasse ou condensation)", "Une excellente santé du moteur", "Un excès de gazole propre", "Une surchauffe de la batterie"],
    correct: 0,
    explanation: "L'eau se mélange à l'huile sous l'action du brassage, signalant une avarie grave d'étanchéité.",
    svgType: "warning"
  },
  {
    domain: "MaintAgricole",
    question: "Quel dispositif de sécurité vérifie-t-on lors de la maintenance des prises de force (PDF) ?",
    options: ["La présence et le bon état des capots de protection enveloppants (cardan)", "La couleur de la tôle", "Le klaxon", "L'autoradio"],
    correct: 0,
    explanation: "Les protecteurs de cardan empêchent l'hampes ou les vêtements d'être happés par l'arbre tournant.",
    svgType: "breaker"
  },
  {
    domain: "MaintAgricole",
    question: "Comment procède-t-on pour nettoyer un filtre à air sec en papier sans l'endommager ?",
    options: ["Le laver à grande eau savonnée", "Souffler de l'air comprimé de l'intérieur vers l'extérieur à pression modérée", "Le brûler pour enlever la poussière", "Le frapper violemment contre le sol"],
    correct: 1,
    explanation: "Souffler de l'intérieur vers l'extérieur déloge la poussière sans déchirer le papier filtrant.",
    svgType: "filter"
  },
  {
    domain: "MaintAgricole",
    question: "Quel est le risque d'utiliser une huile moteur inadaptée (viscosité incorrecte) sur un tracteur moderne ?",
    options: ["Une usure prématurée des coussinets, un mauvais graissage à chaud ou à froid", "Une augmentation automatique de la puissance", "Rien du tout", "Un nettoyage des injecteurs"],
    correct: 0,
    explanation: "Le film d'huile ne garantit plus la séparation des pièces si la viscosité ne correspond pas aux tolérances.",
    svgType: "oil"
  },
  {
    domain: "MaintAgricole",
    question: "Quel contrôle effectue-t-on sur le circuit de freinage hydraulique ou pneumatique d'une remorque agricole avant circulation ?",
    options: ["L'étanchéité des couplages, l'efficacité de freinage et la purge de l'humidité", "La pression de l'air dans les phares", "Le niveau d'huile de direction", "La charge de la radio"],
    correct: 0,
    explanation: "Le freinage des remorques lourdes est critique pour la sécurité routière et aux champs.",
    svgType: "brake"
  },
  {
    domain: "MaintAgricole",
    question: "Quelle est l'utilité des pastilles ou graisseurs mécaniques répartis sur le châssis d'une machine ?",
    options: ["Injecter de la graisse fraîche sous pression dans les paliers via une pompe à graisse", "Mesurer la température", "Fermer des circuits électriques", "Fixer les autocollants"],
    correct: 0,
    explanation: "Les graisseurs permettent de renouveler le lubrifiant des articulations sans démontage.",
    svgType: "bearing"
  },
  {
    domain: "MaintAgricole",
    question: "Pourquoi faut-il impérativement consigner la machine (couper le moteur, retirer la clé, purger la pression) avant toute maintenance d'outils coupants ?",
    options: ["Pour économiser le carburant", "Pour éliminer tout risque de démarrage intempestif ou de blessure corporelle grave", "Pour refroidir l'alternateur", "Pour recharger la batterie"],
    correct: 1,
    explanation: "La sécurité des intervenants prime : aucune intervention sur organe actif sans consignation.",
    svgType: "warning"
  },
  {
    domain: "MaintAgricole",
    question: "Quel entretien périodique réalise-t-on sur le circuit de climatisation de la cabine d'un tracteur ?",
    options: ["Remplacer les filtres à charbon actif de cabine et contrôler l'absence de fuite de gaz", "Vidanger le réservoir de gazole", "Graisser les essuie-glaces", "Changer les pneus"],
    correct: 0,
    explanation: "Le filtre de cabine protège le conducteur des poussières et des odeurs de produits de traitement.",
    svgType: "cooler"
  },

  // --- MANUTENTION ET LEVAGE ---
  {
    domain: "Manutention",
    question: "Quel dispositif de sécurité empêche un chariot élévateur de basculer en avant lors d'une surcharge ?",
    options: ["Le limiteur de vitesse", "L'abaque de charge (ou courbe de charge)", "Le klaxon de recul", "La ceinture de sécurité uniquement"],
    correct: 1,
    explanation: "L'abaque de charge indique le poids maximal autorisé en fonction de la hauteur d'élévation et du centre de gravité.",
    svgType: "warning"
  },
  {
    domain: "Manutention",
    question: "Quel est le rôle d'un frein de hisrage sur un pont roulant ou une grue de levage ?",
    options: ["Maintenir la charge suspendue de manière sécurisée à l'arrêt (fermeture par défaut)", "Ralentir le chariot latéralement", "Graisser le câble en acier", "Couper l'électricité générale"],
    correct: 0,
    explanation: "Le frein de hisrage s'applique automatiquement hors tension pour interdire toute chute de charge.",
    svgType: "brake"
  },
  {
    domain: "Manutention",
    question: "Qu'est-ce que le centre de gravité nominal d'une charge sur les fourches d'un chariot élévateur (ex: 500 mm) ?",
    options: ["La distance entre le talon des fourches et le centre de la charge", "La hauteur totale du mât", "Le poids de la palette", "La vitesse maximale"],
    correct: 0,
    explanation: "Il sert de référence standardisée sur l'abaque de charge constructeur.",
    svgType: "stability"
  },
  {
    domain: "Manutention",
    question: "Quel contrôle visuel et mécanique doit-on effectuer obligatoirement sur un câble de levage en acier ?",
    options: ["Rechercher des brin cassés, de l'usure, de la corrosion ou des écrasements", "Vérifier la couleur de la peinture extérieure", "Mesurer la température du câble", "Nettoyer avec du savon"],
    correct: 0,
    explanation: "Un câble endommagé présente un risque majeur de rupture sous charge.",
    svgType: "crack"
  },
  {
    domain: "Manutention",
    question: "À quoi sert un fin de course (limiteur de fin de course) sur le mouvement de levage d'un pont roulant ?",
    options: ["Couper automatiquement le moteur lorsque le crochet atteint la position haute ou basse maximale", "Changer le sens de rotation", "Accélérer la descente", "Mesurer la température"],
    correct: 0,
    explanation: "Il évite les collisions destructrices entre le moufle et la structure du pont.",
    svgType: "timer"
  },
  {
    domain: "Manutention",
    question: "Quel est le risque principal lors du déplacement d'une charge élevée avec un chariot élévateur mât déployé ?",
    options: ["Une instabilité latérale et un risque de basculement avant très élevé", "Une économie de carburant", "Un refroidissement du moteur", "Une augmentation de la vitesse"],
    correct: 0,
    explanation: "Le centre de gravité global s'élève, ce qui réduit considérablement la stabilité du chariot.",
    svgType: "warning"
  },
  {
    domain: "Manutention",
    question: "Qu'appelle-t-on la CMU (Charge Maximale d'Utilisation) d'un accessoire de levage (élingue, manille, sangle) ?",
    options: ["La charge maximale que l'accessoire est autorisé à lever en service courant", "Le poids propre de l'élingue", "La charge de rupture en laboratoire", "La force de serrage"],
    correct: 0,
    explanation: "La CMU ne doit jamais être dépassée sous peine d'accident grave.",
    svgType: "gauge"
  },
  {
    domain: "Manutention",
    question: "Pourquoi utilise-t-on un palonnier dans certaines opérations de levage complexes ?",
    options: ["Pour répartir les efforts sur plusieurs points d'élingage et éviter le basculement ou l'écrasement de la charge", "Pour alléger le crochet", "Pour peindre la charge", "Pour couper le courant"],
    correct: 0,
    explanation: "Le palonnier rigidifie la prise et sécurise l'équilibre des charges longues ou fragiles.",
    svgType: "mechanics"
  },
  {
    domain: "Manutention",
    question: "Quel type de moteur équipe majoritairement les chariots élévateurs frontaux thermiques d'intérieur ou d'extérieur ?",
    options: ["Un moteur diesel ou GPL (gaz de pétrole liquéfié)", "Un réacteur d'avion", "Un moteur à vapeur", "Un moteur à pédales"],
    correct: 0,
    explanation: "Les moteurs thermiques GPL ou Diesel offrent une grande autonomie et puissance de levage.",
    svgType: "motor"
  },
  {
    domain: "Manutention",
    question: "Quel rôle joue le vérin d'inclinaison (mât) sur un chariot élévateur ?",
    options: ["Incliner le mât vers l'avant (pour poser/prendre) ou vers l'arrière (pour stabiliser la charge en roulant)", "Lever la palette en hauteur", "Tourner les roues arrière", "Freiner le chariot"],
    correct: 0,
    explanation: "L'inclinaison vers l'arrière sécurise la charge sur les fourches pendant le transport.",
    svgType: "cylinder"
  },
  {
    domain: "Manutention",
    question: "Quelle est la règle d'or concernant la circulation sous une charge suspendue ?",
    options: ["C'est strictement interdit en permanence", "C'est autorisé si on court vite", "C'est permis uniquement le matin", "Aucune règle n'existe"],
    correct: 0,
    explanation: "Il est formellement interdit de stationner ou passer sous une charge suspendue pour des raisons de sécurité vitale.",
    svgType: "warning"
  },
  {
    domain: "Manutention",
    question: "Qu'est-ce qu'un transpalette (manuel ou électrique) ?",
    options: ["Un engin de manutention au sol conçu pour lever et transporter des charges sur palettes sur de courtes distances", "Une grue de chantier", "Un camion semi-remorque", "Un ascenseur d'immeuble"],
    correct: 0,
    explanation: "Il soulève la palette de quelques centimètres juste de quoi permettre son déplacement au sol.",
    svgType: "ship"
  },
  {
    domain: "Manutention",
    question: "Quel dispositif assure la transmission de puissance et de direction sur un chariot élévateur électrique moderne ?",
    options: ["Des moteurs électriques à courant alternatif (AC) pilotés par variateurs électroniques", "Une boîte de vitesses manuelle à embrayage", "Des courroies en cuir", "Un système hydraulique rotatif pur"],
    correct: 0,
    explanation: "La variation électronique garantit des démarrages progressifs et un rendement énergétique élevé.",
    svgType: "contactor"
  },
  {
    domain: "Manutention",
    question: "Comment qualifie-t-on l'essai réglementaire périodique réalisé sur les appareils de levage pour valider leur sécurité ?",
    options: ["L'épreuve de charge et les vérifications générales périodiques (VGP)", "Le test de peinture", "Le contrôle de la radio", "La pesée du conducteur"],
    correct: 0,
    explanation: "Les VGP sont obligatoires et garantissent la conformité des équipements de levage.",
    svgType: "test"
  },
  {
    domain: "Manutention",
    question: "Quel est l'effet d'une surcharge sur un pont roulant en termes de sécurité mécanique ?",
    options: ["Déformation de la structure, rupture des câbles ou patinage des sécurités", "Augmentation de la vitesse de levage", "Refroidissement du moteur", "Nettoyage des rails"],
    correct: 0,
    explanation: "La surcharge dépasse la limite élastique des matériaux et compromet la structure.",
    svgType: "warning"
  },
  {
    domain: "Manutention",
    question: "À quoi sert le galet ou le coussinet de guidage sur les profilés du mât d'un chariot élévateur ?",
    options: ["Permettre le coulissement vertical fluide et sans frottement excessif des éléments de mât", "Freiner le chariot en urgence", "Alimenter le klaxon", "Mesurer le poids"],
    correct: 0,
    explanation: "Les galets encaissent les efforts radiaux et axiaux lors de l'élévation de la charge.",
    svgType: "bearing"
  },
  {
    domain: "Manutention",
    question: "Quel est l'élément de sécurité indispensable que le cariste doit boucler avant de démarrer un chariot élévateur ? ?",
    options: ["La ceinture de sécurité", "Le casque antibruit", "Les lunettes de soleil", "Les gants en laine"],
    correct: 0,
    explanation: "La ceinture retient le conducteur sur son siège en cas de renversement du chariot (effet anti-éjection).",
    svgType: "warning"
  },
  {
    domain: "Manutention",
    question: "Qu'appelle-t-on le 'déport de charge' sur un chariot élévateur à mât rétractable ou chariot télescopique ?",
    options: ["La distance entre l'avant des roues et le centre de la charge", "La hauteur maximale", "La largeur des fourches", "Le poids du mât"],
    correct: 0,
    explanation: "Plus le déport est important, plus la capacité de charge admissible diminue fortement.",
    svgType: "stability"
  },
  {
    domain: "Manutention",
    question: "Quel type de freinage utilise-t-on fréquemment sur les moteurs de levage des ponts roulants industriels ?",
    options: ["Un frein électromagnétique à action par manque de courant (sécurité intégrée)", "Un frein à tambour manuel avec une pédale", "Un frein à eau", "Un frein de vélo"],
    correct: 0,
    explanation: "Dès que l'alimentation est coupée, les ressorts serrent le disque pour bloquer instantanément la charge.",
    svgType: "brake"
  },
  {
    domain: "Manutention",
    question: "Pourquoi est-il interdit de transporter des personnes sur les fourches d'un chariot élévateur non conçu à cet effet ?",
    options: ["Risque de chute de hauteur mortelle, absence de garde-corps et de sécurités réglementaires", "Le chariot consomme trop d'essence", "Les fourches sont trop froides", "C'est trop lourd pour les pneus"],
    correct: 0,
    explanation: "Les fourches ne constituent pas un poste de travail en hauteur sécurisé.",
    svgType: "warning"
  },

  // --- HYDRAULIQUE ---
  {
    domain: "Hydraulique",
    question: "Quel composant permet de limiter la pression maximale dans un circuit hydraulique ?",
    options: ["Un distributeur 4/3", "Un limiteur de pression", "Un réducteur de débit", "Une pompe à cylindrée variable"],
    correct: 1,
    explanation: "Le limiteur de pression protège le circuit en dérivant le fluide vers le réservoir dès que le seuil de réglage est atteint.",
    svgType: "valve"
  },
  {
    domain: "Hydraulique",
    question: "Quel est le rôle principal d'un accumulateur hydraulique ?",
    options: ["Refroidir l'huile", "Stocker de l'énergie sous pression", "Filtrer les impuretés", "Augmenter la vitesse des vérins"],
    correct: 1,
    explanation: "L'accumulateur emmagasine de l'énergie hydraulique sous pression grâce à un gaz pour la restituer en cas de besoin.",
    svgType: "accumulator"
  },
  {
    domain: "Hydraulique",
    question: "Qu'indique une chute de pression anormale aux bornes d'un distributeur ?",
    options: ["Une surchauffe de l'huile", "Des pertes de charge excessives ou un débit trop élevé", "Un excès de lubrification", "Rien de particulier"],
    correct: 1,
    explanation: "Une perte de charge excessive est souvent liée à un laminage important, un encrassement ou un sous-dimensionnement.",
    svgType: "pressure"
  },
  {
    domain: "Hydraulique",
    question: "Quel type de pompe fournit un débit proportionnel à sa vitesse de rotation et fixe par tour ?",
    options: ["Pompe à palettes variables", "Pompe à cylindrée fixe", "Pompe radiale pilotée", "Compresseur centrifuge"],
    correct: 1,
    explanation: "Une pompe à cylindrée fixe délivre un volume constant d'huile par tour moteur.",
    svgType: "pump"
  },
  {
    domain: "Hydraulique",
    question: "Quelle est la cause principale de la cavitation dans une pompe hydraulique ?",
    options: ["Une pression de refoulement trop basse", "Une aspiration difficile ou une dépression excessive", "Une huile trop froide", "Un filtre trop propre"],
    correct: 1,
    explanation: "La cavitation se produit lorsque la pression à l'aspiration descend sous la tension de vapeur, créant des micro-bulles.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "À quoi sert un clapet anti-retour piloté ?",
    options: ["À bloquer le fluide dans les deux sens au repos", "À autoriser le flux dans un sens et dans l'autre uniquement sur commande pilote", "À purger l'air", "À réguler la température"],
    correct: 1,
    explanation: "Il garantit un blocage étanche jusqu'à ce qu'une pression de pilotage vienne l'ouvrir.",
    svgType: "valve"
  },
  {
    domain: "Hydraulique",
    question: "Comment se comporte la viscosité d'une huile hydraulique standard lorsque sa température augmente ?",
    options: ["Elle augmente", "Elle diminue", "Elle reste strictement constante", "Elle se solidifie"],
    correct: 1,
    explanation: "Plus l'huile chauffe, plus elle devient fluide (sa viscosité diminue).",
    svgType: "oil"
  },
  {
    domain: "Hydraulique",
    question: "Quel appareil utilise-t-on pour mesurer la pression effective d'un circuit ?",
    options: ["Un débitmètre", "Un manomètre", "Un viscomètre", "Un thermomètre"],
    correct: 1,
    explanation: "Le manomètre est l'instrument indispensable raccordé aux prises de pression.",
    svgType: "gauge"
  },
  {
    domain: "Hydraulique",
    question: "Dans un système oléohydraulique, que transmet principalement le fluide ?",
    options: ["De l'électricité statique", "De la puissance et de l'énergie sous forme de pression et de débit", "De la vapeur d'eau", "De l'air comprimé"],
    correct: 1,
    explanation: "L'huile transmet l'énergie mécanique de la centrale vers les récepteurs.",
    svgType: "flow"
  },
  {
    domain: "Hydraulique",
    question: "Quel rôle joue le filtre à huile placé sur la ligne de retour ?",
    options: ["Protéger l'aspiration de la pompe", "Retenir les impuretés avant le retour au réservoir", "Refroidir l'huile", "Créer une haute pression"],
    correct: 1,
    explanation: "Le filtre de retour capture les particules générées par l'usure des composants.",
    svgType: "filter"
  },
  {
    domain: "Hydraulique",
    question: "Qu'est-ce qu'un vérin double effet ?",
    options: ["Un vérin commandé par deux pompes", "Un vérin dont la sortie et la rentrée de la tige sont assurées par la pression", "Un vérin sans joint", "Un vérin rotatif"],
    correct: 1,
    explanation: "L'huile sous pression est appliquée alternativement de chaque côté du piston.",
    svgType: "cylinder"
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'inconvénient majeur d'une huile hydraulique contaminée par l'eau ?",
    options: ["Une augmentation de la couleur", "Une oxydation rapide, corrosion et perte de lubrification", "Un gel immédiat", "Une baisse de masse volumique"],
    correct: 1,
    explanation: "L'eau provoque l'émulsion de l'huile et détériore les composants prématurément.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "Que signifie la désignation d'un distributeur 4/3 ?",
    options: ["4 orifices et 3 positions", "3 orifices et 4 étages", "4 pressions et 3 débits", "4 clapets et 3 moteurs"],
    correct: 0,
    explanation: "Le premier chiffre indique les orifices, et le second les positions de commutation.",
    svgType: "valve"
  },
  {
    domain: "Hydraulique",
    question: "Quel organe transforme l'énergie hydraulique en énergie mécanique de rotation ?",
    options: ["Le vérin", "Le moteur hydraulique", "L'accumulateur", "Le diviseur de débit"],
    correct: 1,
    explanation: "Le moteur hydraulique réalise l'opération inverse de la pompe.",
    svgType: "motor"
  },
  {
    domain: "Hydraulique",
    question: "Pourquoi purge-t-on un circuit hydraulique après intervention ?",
    options: ["Pour vider l'huile", "Pour éliminer les poches d'air responsables d'un fonctionnement spongieux", "Pour nettoyer le réservoir", "Pour changer la couleur"],
    correct: 1,
    explanation: "L'air compressible perturbe la précision des mouvements et provoque des bruits.",
    svgType: "air"
  },
  {
    domain: "Hydraulique",
    question: "Quel rôle joue le régleur de débit (étrangleur) ?",
    options: ["Limiter la pression", "Ajuster la vitesse d'un actionneur en freinant le fluide", "Changer le sens", "Stocker de l'huile"],
    correct: 1,
    explanation: "En créant une perte de charge contrôlée, il restreint le débit traversant.",
    svgType: "flow"
  },
  {
    domain: "Hydraulique",
    question: "Qu'appelle-t-on 'coup de bélier' dans une canalisation ?",
    options: ["Un choc externe", "Une surpression brutale due à l'arrêt ou changement de direction d'un fluide", "Le démarrage d'une pompe", "La vibration d'un filtre"],
    correct: 1,
    explanation: "L'inertie de la colonne d'huile stoppée net engendre des pics de pression destructeurs.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'indice ISO généralement utilisé pour classifier les huiles hydrauliques ?",
    options: ["L'indice ISO VG", "L'indice d'octane", "L'indice de résistance", "L'indice de tension"],
    correct: 0,
    explanation: "ISO VG caractérise la viscosité cinématique de l'huile à 40°C.",
    svgType: "oil"
  },
  {
    domain: "Hydraulique",
    question: "Où se situe généralement le clapet de décharge principal d'une centrale ?",
    options: ["Sur le retour de cuve", "Directement en sortie de pompe pour protéger l'installation", "Dans les vérins", "Sur le tableau"],
    correct: 1,
    explanation: "Il fixe la pression maximale admissible de tout le circuit hydraulique.",
    svgType: "pressure"
  },
  {
    domain: "Hydraulique",
    question: "Quel composant assure l'échange thermique pour maintenir l'huile à bonne température ?",
    options: ["Le radiateur / échangeur thermique", "Le filtre magnétique", "Le manomètre", "Le clapet anti-retour"],
    correct: 0,
    explanation: "L'échangeur évacue les calories produites par les pertes de charge.",
    svgType: "cooler"
  },

  // --- ELECTRICITE ---
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un disjoncteur DPN (Phase + Neutre) ?",
    options: ["Coupler deux moteurs", "Protéger simultanément la phase et le neutre contre les courts-circuits et surcharges", "Mesurer la tension", "Élever la tension"],
    correct: 1,
    explanation: "Le DPN coupe et protège à la fois la phase et le neutre sur un module compact.",
    svgType: "breaker"
  },
  {
    domain: "Électricité",
    question: "Comment se comporte un contacteur électromagnétique au repos (bobine non alimentée) ?",
    options: ["Tous ses contacts basculent", "Ses contacts principaux ouverts le restent, et les fermés le restent", "Il s'autobloque", "Il émet un son"],
    correct: 1,
    explanation: "Au repos, les ressorts de rappel maintiennent l'appareillage dans sa position initiale.",
    svgType: "contactor"
  },
  {
    domain: "Électricité",
    question: "À quoi sert un relais thermique dans un coffret de commande moteur ?",
    options: ["À couper le circuit en cas de surcharge prolongée du moteur", "À régler la vitesse", "À inverser les phases", "À transformer l'alternatif en continu"],
    correct: 0,
    explanation: "Le bilame du relais thermique se déforme sous l'effet d'un surcourant prolongé.",
    svgType: "thermal"
  },
  {
    domain: "Électricité",
    question: "Comment paramètre-t-on une horloge programmable pour un éclairage nocturne ?",
    options: ["En réglant les plages horaires de commutation ON/OFF", "En mesurant la résistance", "En modifiant la fréquence", "En changeant le disjoncteur"],
    correct: 0,
    explanation: "L'horloge programmable gère des programmes temporels précis.",
    svgType: "timer"
  },
  {
    domain: "Électricité",
    question: "Quel est l'effet d'une inversion de deux phases sur un moteur asynchrone triphasé ?",
    options: ["Il s'arrête net", "Il inverse son sens de rotation", "Il double sa vitesse", "Il grille sans disjoncter"],
    correct: 1,
    explanation: "Inverser deux phases modifie l'ordre du champ tournant et inverse le rotor.",
    svgType: "motor"
  },
  {
    domain: "Électricité",
    question: "Quelle est la formule fondamentale de la loi d'Ohm en courant continu ?",
    options: ["P = U × I", "U = R × I", "W = U² / R", "I = R / U"],
    correct: 1,
    explanation: "U (Volts) est égal au produit de la Résistance par l'Intensité.",
    svgType: "formula"
  },
  {
    domain: "Électricité",
    question: "Quel appareil mesure l'isolement d'un câble sous haute tension de test (ex: 1000V) ?",
    options: ["Un multimetre", "Un ohmmètre de terre ou mégohmmètre", "Une pince ampèremétrique", "Un wattmètre"],
    correct: 1,
    explanation: "Le mégohmmètre injecte une tension continue élevée pour vérifier l'absence de fuite.",
    svgType: "megger"
  },
  {
    domain: "Électricité",
    question: "Qu'indique un courant de court-circuit élevé dans une installation ?",
    options: ["Une excellente isolation", "Une liaison directe accidentelle entre phase et neutre sans résistance", "Une baisse anormale", "Un fonctionnement normal"],
    correct: 1,
    explanation: "Le court-circuit provoque un pic d'intensité instantané très destructeur.",
    svgType: "warning"
  },
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un transformateur de commande et de signalisation ?",
    options: ["Augmenter la puissance", "Isoler galvaniquement la commande de la puissance et abaisser la tension (ex: 24V)", "Convertir en continu", "Filtrer"],
    correct: 1,
    explanation: "Il sécurise les circuits de commande en abaissant la tension.",
    svgType: "transformer"
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un schéma électrique unifilaire ?",
    options: ["Un schéma avec chaque fil séparé", "Un schéma représentant les conducteurs d'un même circuit par un seul trait", "Un schéma mécanique", "Un schéma sans symbole"],
    correct: 1,
    explanation: "Il simplifie la lecture globale des installations de puissance.",
    svgType: "schema"
  },
  {
    domain: "Électricité",
    question: "Pourquoi réalise-t-on une liaison équipotentielle ?",
    options: ["Pour relier toutes les masses métalliques au même potentiel et éviter les tensions de contact", "Pour augmenter la vitesse", "Pour alimenter en 24V", "Pour réduire la facture"],
    correct: 0,
    explanation: "Elle protège les personnes contre les chocs électriques par différence de potentiel.",
    svgType: "earth"
  },
  {
    domain: "Électricité",
    question: "Quel est le principe d'action d'un interrupteur différentiel 30mA ?",
    options: ["Il détecte un dépassement de puissance", "Il compare le courant entrant/sortant et coupe si la fuite dépasse 30mA", "Il protège des courts-circuits", "Il régule la tension"],
    correct: 1,
    explanation: "Une différence indique qu'une partie du courant s'échappe vers la terre (risque d'électrocution).",
    svgType: "differential"
  },
  {
    domain: "Électricité",
    question: "Comment se branche un ampèremètre dans un circuit électrique ?",
    options: ["En dérivation", "En série dans le conducteur traversé par le courant", "Entre phase et terre", "Sur la bobine"],
    correct: 1,
    explanation: "L'ampèremètre doit être traversé par la totalité du courant, d'où un branchement en série.",
    svgType: "meter"
  },
  {
    domain: "Électricité",
    question: "Que signifie le marquage IP21 sur un coffret électrique ?",
    options: ["Protection contre corps solides (>12.5mm) et gouttes d'eau verticales", "Isolation 2100 Volts", "Performance thermique", "Impédance"],
    correct: 0,
    explanation: "L'indice IP qualifie la protection contre les intrusions solides et liquides.",
    svgType: "ip"
  },
  {
    domain: "Électricité",
    question: "Quel composant stocke temporairement de l'énergie électrostatique ?",
    options: ["La résistance", "Le condensateur", "L'inductance", "Le disjoncteur"],
    correct: 1,
    explanation: "Le condensateur accumule des charges électriques entre ses armatures.",
    svgType: "capacitor"
  },
  {
    domain: "Électricité",
    question: "Quelle est la couleur normalisée du conducteur de protection (terre) ?",
    options: ["Bleu clair", "Vert et Jaune", "Rouge", "Noir"],
    correct: 1,
    explanation: "Le vert/jaune est strictement réservé à la terre selon les normes internationales.",
    svgType: "earth"
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un relais de temporisation au repos (OFF-delay) ?",
    options: ["Un relais dont la temporisation commence dès la coupure de la commande", "Un relais inactif", "Un relais instantané", "Un disjoncteur"],
    correct: 0,
    explanation: "Il maintient ses contacts fermés pendant un temps réglé après l'arrêt du signal.",
    svgType: "timer"
  },
  {
    domain: "Électricité",
    question: "Comment calcule-t-on la puissance active P en triphasé équilibré (400V) ?",
    options: ["P = U × I", "P = √3 × U × I × cos(φ)", "P = U² / R", "P = 3 × U × I"],
    correct: 1,
    explanation: "En triphasé, le facteur de puissance cos(φ) et la racine de 3 interviennent.",
    svgType: "formula"
  },
  {
    domain: "Électricité",
    question: "Quel est l'appareil indiqué pour le repérage de câbles non alimentés ?",
    options: ["Un testeur de continuité / bip-mètre", "Un fréquencemètre", "Un wattmètre", "Un gradateur"],
    correct: 0,
    explanation: "Le testeur de continuité vérifie si un conducteur est bouclé ou interrompu.",
    svgType: "continuity"
  },
  {
    domain: "Électricité",
    question: "Quelle protection est indispensable pour les installations extérieures soumises aux intempéries ?",
    options: ["Un coffret IP55 ou IP65 minimum", "Un boîtier ouvert", "Du bois vernis", "Aucune"],
    correct: 0,
    explanation: "Les indices élevés garantissent l'étanchéité aux poussières et projections d'eau.",
    svgType: "ip"
  },

  // --- MÉCANIQUE ---
  {
    domain: "Mécanique",
    question: "Quel est le rôle principal d'un roulement à billes dans un mécanisme ?",
    options: ["Freiner l'arbre", "Guider un arbre en rotation en réduisant les frottements", "Augmenter la vitesse par 10", "Transmettre un signal"],
    correct: 1,
    explanation: "Le roulement minimise le couple de frottement entre pièces fixes et tournantes.",
    svgType: "bearing"
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on 'ajustement avec serrage' ?",
    options: ["Un arbre plus petit que l'alésage", "Un montage où la cote de l'arbre est supérieure ou égale à l'alésage", "Un montage avec jeu", "Un collage souple"],
    correct: 1,
    explanation: "Le serrage nécessite un effort (presse ou chaud/froid) pour emmancher les pièces.",
    svgType: "fit"
  },
  {
    domain: "Mécanique",
    question: "Quel instrument de mesure de précision permet de lire le centième ou millième de millimètre ?",
    options: ["Le mètre ruban", "Le pied à coulisse / micromètre", "L'équerre", "Le fil à plomb"],
    correct: 1,
    explanation: "Le micromètre garantit des contrôles dimensionnels très rigoureux.",
    svgType: "caliper"
  },
  {
    domain: "Mécanique",
    question: "Quel est l'effet d'une lubrification insuffisante sur un réducteur à engrenages ?",
    options: ["Une baisse de température", "Un grippage, usure abrasive prononcée et surchauffe", "Une augmentation du rendement", "Un nettoyage automatique"],
    correct: 1,
    explanation: "Sans film d'huile séparant les dents, le contact métal sur métal détruit la mécanique.",
    svgType: "oil"
  },
  {
    domain: "Mécanique",
    question: "À quoi sert une clavette sur un arbre de transmission ?",
    options: ["Guider axialement", "Transmettre un couple de rotation entre l'arbre et le moyeu (poulie, pignon)", "Assurer l'étanchéité", "Freiner en urgence"],
    correct: 1,
    explanation: "La clavette encastre le moyeu sur l'arbre en rotation pour éviter tout patinage.",
    svgType: "key"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'un défaut de balourd sur un rotor tournant à haute vitesse ?",
    options: ["Une répartition dissymétrique des masses créant des vibrations destructrices", "Un excès de peinture", "Une baisse de tension", "Une usure des charbons"],
    correct: 0,
    explanation: "Le balourd engendre des forces centrifuges oscillantes provoquant l'usure des paliers.",
    svgType: "vibration"
  },
  {
    domain: "Mécanique",
    question: "Quel composant d'étanchéité dynamique retient l'huile sur les arbres tournants ?",
    options: ["Un joint torique statique", "Une bague à lèvres radiale (joint Simmer)", "Un joint plat", "De la filasse"],
    correct: 1,
    explanation: "La bague à lèvres exerce une pression contrôlée sur l'arbre grâce à un ressort torique.",
    svgType: "seal"
  },
  {
    domain: "Mécanique",
    question: "Quelle est l'utilité d'une clé dynamométrique lors du serrage de vis critiques ?",
    options: ["Serrer très fort", "Appliquer un couple de serrage précis préconisé par le constructeur", "Desserrer", "Mesurer la dureté"],
    correct: 1,
    explanation: "Un serrage au couple garantit l'absence de rupture par fatigue ou desserrage.",
    svgType: "torque"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce que la fatigue des métaux ?",
    options: ["Le vieillissement de la peinture", "L'endommagement progressif sous l'effet de sollicitations cycliques répétées", "La fonte du métal", "L'oxydation dans l'eau"],
    correct: 1,
    explanation: "Des micro-fissures naissent et se propagent jusqu'à la rupture soudaine.",
    svgType: "crack"
  },
  {
    domain: "Mécanique",
    question: "Quel type d'engrenage transmet un mouvement entre axes concourants (à 90°) ?",
    options: ["Un engrenage cylindrique droit", "Un engrenage conique", "Une crémaillère", "Une vis sans fin"],
    correct: 1,
    explanation: "Les roues coniques permettent de renvoyer le mouvement selon un angle.",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'un réducteur mécanique de vitesse ?",
    options: ["Multiplier la vitesse", "Réduire la vitesse de rotation tout en multipliant le couple disponible", "Conserver vitesse et couple", "Changer le courant"],
    correct: 1,
    explanation: "Grâce au rapport de réduction, le couple de sortie est considérablement augmenté.",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Comment qualifie-t-on une liaison mécanique qui empêche tout mouvement relatif ?",
    options: ["Une liaison pivot", "Une liaison encastrement (rigide)", "Une liaison glissière", "Une liaison rotule"],
    correct: 1,
    explanation: "L'encastrement bloque les 6 degrés de liberté possibles entre solides.",
    svgType: "mechanics"
  },
  {
    domain: "Mécanique",
    question: "Quel essai mécanique détermine la résistance à la traction et la limite d'élasticité ?",
    options: ["L'essai de dureté Brinell", "L'essai de traction destructif en laboratoire", "L'essai de flexion à la main", "L'essai pneumatique"],
    correct: 1,
    explanation: "L'éprouvette est étirée sur une machine pour tracer sa courbe contrainte-déformation.",
    svgType: "test"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'un accouplement élastique dans une ligne d'arbres ?",
    options: ["Un accouplement rigide", "Un organe transmettant le couple tout en absorbant les désalignements et chocs", "Un ressort", "Une courroie"],
    correct: 1,
    explanation: "Il protège les machines des à-coups et des vibrations.",
    svgType: "coupling"
  },
  {
    domain: "Mécanique",
    question: "Pourquoi réalise-t-on un traitement thermique de trempe sur l'acier ?",
    options: ["Pour le rendre tendre", "Pour augmenter sa dureté superficielle et sa résistance à l'usure", "Pour l'alléger", "Pour le noircir"],
    correct: 1,
    explanation: "La trempe modifie la structure cristalline pour durcir le métal.",
    svgType: "heat"
  },
  {
    domain: "Mécanique",
    question: "Quel est l'inconvénient d'un jeu excessif dans les dentures d'un réducteur ?",
    options: ["Un blocage immédiat", "Des à-coups, du bruit et des chocs destructeurs lors des inversions", "Une surconsommation d'huile", "Une augmentation du couple"],
    correct: 1,
    explanation: "Le jeu excessif provoque des chocs répétés sur les flancs de dents.",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Qu'indique l'apparition de traces de rouille rouge sur un assemblage boulonné serré ?",
    options: ["Une bonne protection", "Un mouvement relatif ou une infiltration d'humidité due à un desserrage", "Un excès de graisse", "Une surchauffe électrique"],
    correct: 1,
    explanation: "Le frottement élimine la protection et oxyde le métal.",
    svgType: "rust"
  },
  {
    domain: "Mécanique",
    question: "Quel type de courroie offre la meilleure adhérence dans les gorges de poulies ?",
    options: ["La courroie plate", "La courroie trapézoïdale", "Une ficelle", "Une chaîne"],
    correct: 1,
    explanation: "Le profil trapézoïdal provoque un arc-boutement augmentant l'effort transmissible.",
    svgType: "belt"
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on la 'cémentation' d'une pièce mécanique ?",
    options: ["Un collage", "Un traitement thermochimique d'enrichissement en carbone de la surface", "Un nettoyage au ciment", "Un meulage"],
    correct: 1,
    explanation: "On obtient un cœur tenace et une surface très dure résistante aux frottements.",
    svgType: "heat"
  },
  {
    domain: "Mécanique",
    question: "Quel instrument vérifie le parallélisme et le faux-rond d'un arbre en rotation ?",
    options: ["Un comparateur à cadran sur pied mag", "Un thermomètre", "Un pied plastique", "Un pèse-lettre"],
    correct: 0,
    explanation: "Le comparateur mesure avec une grande précision les écarts par rapport à une référence.",
    svgType: "gauge"
  },

  // --- NAVALE ---
  {
    domain: "Navale",
    question: "Quel est le rôle de la quille sur un navire ?",
    options: ["Servir de réservoir", "Constituer la pièce vertébrale longitudinale assurant la rigidité de la structure inférieure", "Porter l'ancre", "Guider les fumées"],
    correct: 1,
    explanation: "La quille est la poutre principale de fond sur laquelle s'articulent les cadres.",
    svgType: "hull"
  },
  {
    domain: "Navale",
    question: "Que désigne le terme 'franc-bord' d'un navire ?",
    options: ["La distance verticale entre la flottaison et le pont principal étanche", "La hauteur du mât", "La largeur maximale", "Le tirant d'eau"],
    correct: 0,
    explanation: "Le franc-bord garantit la réserve de flottabilité et empêche l'eau de submerger le pont.",
    svgType: "ship"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la stabilité transversale initiale d'un navire (hauteur métacentrique GM) ?",
    options: ["La vitesse maximale", "La mesure de la capacité du navire à redresser une gîte transversale", "Le poids total", "La profondeur"],
    correct: 1,
    explanation: "Un GM positif suffisant assure le retour spontané du navire à sa position droite.",
    svgType: "stability"
  },
  {
    domain: "Navale",
    question: "Quel système d'extinction fixe est principalement installé dans la salle des machines ?",
    options: ["Un seau de sable", "Une installation fixe par gaz carbonique (CO2) ou brouillard d'eau", "Un tuyau d'arrosage", "Un extincteur 6kg"],
    correct: 1,
    explanation: "Le CO2 étouffe l'incendie par inondation totale du local hermétique.",
    svgType: "fire"
  },
  {
    domain: "Navale",
    question: "À quoi sert le système de barre et le safran d'un navire ?",
    options: ["Régler la vitesse", "Orienter le flux d'eau pour assurer la gouverne et les changements de cap", "Remonter les ancres", "Produire de l'eau douce"],
    correct: 1,
    explanation: "Le safran crée une force hydrodynamique faisant pivoter la coque.",
    svgType: "rudder"
  },
  {
    domain: "Navale",
    question: "Qu'appelle-t-on le 'tirant d'eau' d'un navire ?",
    options: ["La distance verticale entre la flottaison et le point le plus bas de la carène (quille)", "La distance cheminée-mer", "La longueur", "La largeur"],
    correct: 0,
    explanation: "Il détermine la profondeur minimale d'eau requise pour ne pas talonner.",
    svgType: "draft"
  },
  {
    domain: "Navale",
    question: "Quel équipement de pont sert au mouillage et à la levée des ancres ?",
    options: ["Le treuil de remorquage", "Le guindeau", "Le cabestan", "La grue"],
    correct: 1,
    explanation: "Le guindeau est muni d'un barbotin adapté aux maillons de la chaîne.",
    svgType: "anchor"
  },
  {
    domain: "Navale",
    question: "Quel est le rôle des ballasts à bord d'un navire ?",
    options: ["Stocker le carburant", "Remplir ou vider des réservoirs d'eau de mer pour ajuster l'assiette et la gîte", "Alimenter les douches", "Refroidir la climatisation"],
    correct: 1,
    explanation: "Les ballasts gèrent le centrage des masses et l'enfoncement optimal.",
    svgType: "ballast"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la 'carène' d'un navire ?",
    options: ["La partie de la coque située entièrement sous la ligne de flottaison", "La passerelle", "Le logement", "Les mâts"],
    correct: 0,
    explanation: "C'est la portion immergée de la coque qui subit la poussée d'Archimède.",
    svgType: "hull"
  },
  {
    domain: "Navale",
    question: "Pourquoi applique-t-on une peinture antifouling sur la coque sous-marine ?",
    options: ["Pour embellir", "Pour empêcher la fixation et la prolifération d'organismes marins (algues, coquillages)", "Pour augmenter la température", "Pour souder"],
    correct: 1,
    explanation: "L'antifouling protège contre le biofouling qui freine l'avancement.",
    svgType: "paint"
  },
  {
    domain: "Navale",
    question: "Quel est l'objectif du système de 'séparation des eaux de bilges' ?",
    options: ["Recycler l'eau de pluie", "Traiter les fonds de cale pour rejeter une eau épurée conforme aux normes (<15 ppm)", "Alimenter les chaudières", "Laver le pont"],
    correct: 1,
    explanation: "Le séparateur évite toute pollution marine accidentelle.",
    svgType: "bilge"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la gîte d'un navire ?",
    options: ["Une inclinaison longitudinale", "Une inclinaison transversale permanente du navire", "Un tangage", "Une vitesse excessive"],
    correct: 1,
    explanation: "La gîte est un angle permanent sur bâbord ou tribord.",
    svgType: "stability"
  },
  {
    domain: "Navale",
    question: "Quel système de propulsion utilise une tuyère orientable ou un jet d'eau à haute vitesse ?",
    options: ["L'hélice fixe", "Le propulseur azimutal ou hydrojet", "La voile", "La roue à aubes"],
    correct: 1,
    explanation: "Ces propulseurs procurent une excellente manœuvrabilité.",
    svgType: "propeller"
  },
  {
    domain: "Navale",
    question: "Que signifie le terme 'maître-bau' en architecture navale ?",
    options: ["La longueur totale", "La largeur maximale hors-tout du navire", "La hauteur du mât", "Le poids lège"],
    correct: 1,
    explanation: "Il correspond à la section transversale la plus large de la coque.",
    svgType: "ship"
  },
  {
    domain: "Navale",
    question: "Quel organe de sécurité évite l'envahissement par les tuyauteries sous la coque ?",
    options: ["Des vannes de coque quart de tour robustes (sea-chest)", "Des bouchons en bois", "Un tuyau souple", "Des colliers en fer"],
    correct: 0,
    explanation: "Les vannes de coque doivent être certifiées et accessibles en permanence.",
    svgType: "valve"
  },
  {
    domain: "Navale",
    question: "Quel est le principe physique fondamental qui permet à un navire de flotter ?",
    options: ["La loi de Newton", "La poussée d'Archimède (poids du volume d'eau déplacé égal au poids du navire)", "La force centrifuge", "La pression atmosphérique"],
    correct: 1,
    explanation: "Le navire flotte car sa masse volumique globale est inférieure à celle de l'eau.",
    svgType: "archimedes"
  },
  {
    domain: "Navale",
    question: "À quoi sert un propulseur d'étrave (bow-thruster) ?",
    options: ["Avancer en marche arrière", "Faciliter les manœuvres de port en faisant pivoter l'avant latéralement", "Stabiliser le roulis", "Produire de l'électricité"],
    correct: 1,
    explanation: "Le tunnel transversal à l'avant aide grandement les amarrages serrés.",
    svgType: "thruster"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la mèche de gouverne ?",
    options: ["Une réserve", "L'axe de transmission rigide reliant la commande au safran", "Le local incendie", "Un compresseur"],
    correct: 1,
    explanation: "C'est l'élément robuste encaissant les efforts hydrodynamiques du gouvernail.",
    svgType: "rudder"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce qu'une cloison étanche transversale principale ?",
    options: ["Une cloison en bois", "Une paroi structurelle cloisonnant le navire pour empêcher la propagation d'une voie d'eau ou d'un feu", "Le plancher", "Le toit"],
    correct: 1,
    explanation: "Le cloisonnement étanche compartimente la coque pour assurer la survivabilité après avarie.",
    svgType: "bulkhead"
  },
  {
    domain: "Navale",
    question: "Quel document officiel consigne l'ensemble des observations nautiques et machines ?",
    options: ["Le journal de bord (et livre de machine)", "Le carnet de chèques", "Le manuel de cuisine", "Le catalogue pièces"],
    correct: 0,
    explanation: "Le journal de bord est un registre légal obligatoire.",
    svgType: "logbook"
  },

  // --- FRANÇAIS ---
  {
    domain: "Français",
    question: "Dans la phrase 'Le ciel est devenu noir', quelle est la fonction du mot 'noir' ?",
    options: ["Un COD", "Un attribut du sujet", "Une épithète liée", "Un complément du nom"],
    correct: 1,
    explanation: "'Noir' est relié au sujet 'Le ciel' par l'intermédiaire du verbe d'état 'est devenu'. C'est donc un attribut du sujet.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'Il a acheté une belle voiture rouge', quel est le statut grammatical de 'rouge' ?",
    options: ["Un attribut du sujet", "Un complément d'objet second", "Une épithète (adjectif qualificatif épithète)", "Un verbe à l'infinitif"],
    correct: 2,
    explanation: "'Rouge' est placé directement à côté du nom 'voiture' qu'il qualifie sans verbe intermédiaire : c'est une épithète.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'Le chat mange la souris', quelle est la fonction du groupe 'la souris' ?",
    options: ["Un COI (Complément d'Objet Indirect)", "Un COD (Complément d'Objet Direct)", "Un attribut du sujet", "Un complément circonstanciel"],
    correct: 1,
    explanation: "'La souris' répond à la question 'mange quoi ?' directement après le verbe, sans préposition. C'est un COD.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quelle est la nature du mot souligné dans : 'Le travail que tu as fait est remarquable' (ici : 'que') ?",
    options: ["Un pronom relatif", "Une conjonction de subordination", "Un adjectif démonstratif", "Un adverbe de lieu"],
    correct: 0,
    explanation: "'Que' remplace 'le travail' et introduit une proposition subordonnée relative. C'est un pronom relatif.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'Elle parle à son ami', que représente 'à son ami' ?",
    options: ["Un COD", "Un COI (Complément d'Objet Indirect)", "Un attribut", "Un complément d'agent"],
    correct: 1,
    explanation: "'À son ami' est relié au verbe par la préposition 'à'. Il s'agit d'un Complément d'Objet Indirect (COI).",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel est le mode du verbe dans la phrase : 'Il faut que tu viennes' ?",
    options: ["L'indicatif", "Le subjonctif", "L'impératif", "Le conditionnel"],
    correct: 1,
    explanation: "Après la tournure 'il faut que', on emploie obligatoirement le mode subjonctif.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Comment s'écrit correctement le participe passé du verbe peindre au féminin pluriel (des portes ...) ?",
    options: ["peintes", "peinds", "peintes", "peinte"],
    correct: 0,
    explanation: "Le verbe 'peindre' prend un 't' au participe passé (peint, peinte, peintes) et s'accorde avec le COD placé avant.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'Pierre est intelligent', quelle est la nature grammaticale du mot 'intelligent' ?",
    options: ["Un adjectif qualificatif attribut", "Un nom commun", "Un verbe d'état", "Un adverbe"],
    correct: 0,
    explanation: "'Intelligent' est un adjectif qualificatif relié au sujet 'Pierre' par le verbe d'état 'est'.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Laquelle de ces phrases contient un COD (Complément d'Objet Direct) ?",
    options: ["Il téléphone à sa mère.", "Le train arrive en gare.", "L'enfant mange une pomme.", "Elle rêve d'un voyage."],
    correct: 2,
    explanation: "'une pomme' complète le verbe 'mange' directement sans préposition (mange quoi ? une pomme).",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel mot est un pronom démonstratif ?",
    options: ["Mon", "Celui-ci", "Qui", "Plusieurs"],
    correct: 1,
    explanation: "'Celui-ci' permet de désigner précisément un élément déjà évoqué en le montrant (démonstratif).",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans 'Les enfants courent dans le jardin', quelle est la nature du groupe 'dans le jardin' ?",
    options: ["Un COD", "Un complément circonstanciel de lieu", "Un attribut du sujet", "Un COI"],
    correct: 1,
    explanation: "'Dans le jardin' indique le lieu où se déroule l'action, c'est un complément circonstanciel de lieu déplaçable et supprimable.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel est le temps du verbe dans la phrase : 'Quand il aura fini, il sortira' ?",
    options: ["Futur simple", "Futur antérieur", "Présent de l'indicatif", "Passé composé"],
    correct: 1,
    explanation: "'aura fini' est composé de l'auxiliaire avoir au futur simple suivi d'un participe passé : c'est le futur antérieur.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Identifier le mot invariable parmi ces propositions :",
    options: ["Joyeux", "Courageux", "Toujours", "Grand"],
    correct: 2,
    explanation: "'Toujours' est un adverbe, une classe de mots invariables (pas de féminin ni de pluriel).",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'Le livre que tu lis est passionnant', quelle est la fonction de 'que' ?",
    options: ["Sujet", "COD du verbe lis", "Attribut", "Complément du nom"],
    correct: 1,
    explanation: "Dans la proposition subordonnée 'que tu lis', 'que' remplace le livre et répond à 'tu lis quoi ? -> le livre'. C'est le COD.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quelle est la bonne orthographe du pluriel du mot 'un chou' ?",
    options: ["des chous", "des choux", "des chou", "des chouxes"],
    correct: 1,
    explanation: "Les noms en -ou prennent généralement un -x au pluriel (sauf exceptions comme clou, trou, sou...).",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Qu'appelle-t-on une proposition subordonnée relative ?",
    options: ["Une proposition introduite par un subordonnant comme 'que' ou 'si'", "Une proposition introduite par un pronom relatif (qui, que, dont, où...)", "Une proposition indépendante", "Une phrase simple"],
    correct: 1,
    explanation: "La relative est introduite par un pronom relatif et complète généralement un nom antécédent.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel est le rôle d'un complément d'agent dans une phrase passive ?",
    options: ["Il subit l'action", "Il fait l'action exprimée par le verbe au passif", "Il indique le temps", "Il exprime le lieu"],
    correct: 1,
    explanation: "Dans 'Le chat est mangé par la souris' (exemple fictif), 'par la souris' est le complément d'agent qui réalise l'action.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel pronom personnel remplit la fonction de COI dans : 'Je lui parle' ?",
    options: ["Je", "lui", "parle", "aucun"],
    correct: 1,
    explanation: "'lui' remplace 'à lui' ou 'à elle' (parler à quelqu'un), c'est donc un pronom COI.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Dans la phrase 'La maison dont je rêve est grande', quelle est la fonction du pronom relatif 'dont' ?",
    options: ["COD", "Complément du nom", "Complément de l'adjectif ou du verbe (rêver de)", "Sujet"],
    correct: 2,
    explanation: "On 'rêve de' quelque chose. 'dont' remplace le complément introduit par la préposition 'de'.",
    svgType: "grammar"
  },
  {
    domain: "Français",
    question: "Quel verbe du 1er groupe possède une modification orthographique à la 1ère personne du pluriel au présent (nous nous...) ?",
    options: ["Manger (nous mangeons)", "Aimer (nous aimons)", "Chanter (nous chantons)", "Parler (nous parlons)"],
    correct: 0,
    explanation: "Pour conserver le son [ʒ] (j), on ajoute un 'e' après le g devant le 'o' (nous mangeons).",
    svgType: "grammar"
  },

  // --- ANGLAIS ---
  {
    domain: "Anglais",
    question: "How do you transform this sentence into the passive voice? -> 'The mechanic fixed the engine.'",
    options: [
      "The engine is fixed by the mechanic.",
      "The engine was fixed by the mechanic.",
      "The engine has been fixed by the mechanic.",
      "The mechanic was fixed by the engine."
    ],
    correct: 1,
    explanation: "Au prétérit (fixed), la voix passive utilise 'was/were + participe passé'. 'The engine was fixed by the mechanic.'",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the correct preterite (Simple Past) form of the irregular verb 'to build'?",
    options: ["Builded", "Building", "Built", "Build"],
    correct: 2,
    explanation: "Le prétérit et le participe passé du verbe irrégulier 'to build' est 'built'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Choose the correct passive form for: 'They will complete the project tomorrow.'",
    options: [
      "The project is completed tomorrow.",
      "The project will be completed tomorrow by them.",
      "The project was completed tomorrow.",
      "The project would be completed."
    ],
    correct: 1,
    explanation: "Au futur simple (will + verbe), la voix passive se forme avec 'will be + participe passé'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Which sentence is correctly written in the Simple Past (Prétérit) with a negative form?",
    options: [
      "He didn't worked yesterday.",
      "He didn't work yesterday.",
      "He wasn't work yesterday.",
      "He don't work yesterday."
    ],
    correct: 1,
    explanation: "Au prétérit négatif, on utilise l'auxiliaire 'did not (didn't)' suivi de la base verbale sans le 'ed' (didn't work).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the past participle of the verb 'to write' used in the present perfect or passive voice?",
    options: ["Wrote", "Writed", "Written", "Writing"],
    correct: 2,
    explanation: "Le participe passé de 'to write' est 'written' (Infinitive: write -> Preterite: wrote -> Past Participle: written).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the correct Simple Past form of the irregular verb 'to go'?",
    options: ["Goed", "Gone", "Went", "Going"],
    correct: 2,
    explanation: "Le verbe 'to go' au prétérit est un verbe irrégulier très courant : 'went'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Select the correct passive voice sentence for: 'People speak English all over the world.'",
    options: [
      "English was spoken all over the world.",
      "English is spoken all over the world.",
      "English has been spoken all over the world.",
      "English will be spoken all over the world."
    ],
    correct: 1,
    explanation: "Au présent simple (speak), la voix passive utilise 'is/are + participe passé' (is spoken).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the past participle of the irregular verb 'to see'?",
    options: ["Saw", "Seen", "Seed", "Seeing"],
    correct: 1,
    explanation: "Les formes de 'to see' sont : see (base), saw (preterite), seen (past participle).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "How do you form a question in the Simple Past with regular verbs?",
    options: [
      "Did + subject + base verb?",
      "Do + subject + preterite?",
      "Was + subject + verb-ing?",
      "Had + subject + past participle?"
    ],
    correct: 0,
    explanation: "Pour poser une question au prétérit en anglais, on utilise l'auxiliaire 'Did' suivi du sujet et de la base verbale.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Choose the passive version of: 'The company hired three new engineers.'",
    options: [
      "Three new engineers are hired by the company.",
      "Three new engineers were hired by the company.",
      "Three new engineers will be hired by the company.",
      "Three new engineers had hired the company."
    ],
    correct: 1,
    explanation: "Le verbe 'hired' est au prétérit, la voix passive requiert donc 'were hired'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the preterite form of the irregular verb 'to take'?",
    options: ["Taked", "Taken", "Took", "Taking"],
    correct: 2,
    explanation: "Le prétérit de 'to take' est 'took' (et le participe passé est 'taken').",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Which sentence uses the Present Perfect correctly?",
    options: ["I have finish my work.", "I has finished my work.", "I have finished my work.", "I did finished my work."],
    correct: 2,
    explanation: "Le Present Perfect se forme avec 'have/has + participe passé' (I have finished).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the past participle of 'to break'?",
    options: ["Broke", "Broken", "Breaked", "Breaking"],
    correct: 1,
    explanation: "Les formes de 'to break' sont break -> broke -> broken.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "How do you translate 'Il a été arrêté par la police' (Passive Voice) ?",
    options: [
      "He was arrested by the police.",
      "He is arrested by the police.",
      "He has arrested by the police.",
      "He were arrested by the police."
    ],
    correct: 0,
    explanation: "C'est un prétérit passif : 'He was arrested by the police.'",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the correct preterite form of the irregular verb 'to make'?",
    options: ["Maked", "Made", "Making", "Make"],
    correct: 1,
    explanation: "Le prétérit et le participe passé de 'to make' est 'made'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Identify the correct passive sentence in the Present Continuous: 'They are repairing the car.'",
    options: [
      "The car is repaired.",
      "The car is being repaired.",
      "The car was repaired.",
      "The car has been repaired."
    ],
    correct: 1,
    explanation: "Au présent continu, la voix passive s'écrit 'is/are + being + participe passé' (is being repaired).",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the past participle of the irregular verb 'to drive'?",
    options: ["Drove", "Drivened", "Driven", "Driving"],
    correct: 2,
    explanation: "Drive a pour prétérit 'drove' et pour participe passé 'driven'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Choose the correct negative form in Simple Past: 'She went to London.'",
    options: [
      "She didn't went to London.",
      "She didn't go to London.",
      "She wasn't go to London.",
      "She doesn't went to London."
    ],
    correct: 1,
    explanation: "L'auxiliaire 'didn't' absorbe le prétérit, le verbe principal revient donc à sa base verbale 'go'.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "What is the preterite form of the verb 'to find'?",
    options: ["Fined", "Found", "Finded", "Finding"],
    correct: 1,
    explanation: "Le verbe irrégulier 'to find' devient 'found' au prétérit et au participe passé.",
    svgType: "english"
  },
  {
    domain: "Anglais",
    question: "Which option represents a correct passive sentence with a modal verb ('must')?",
    options: [
      "The report must be finished today.",
      "The report must finish today.",
      "The report must finished today.",
      "The report must being finished today."
    ],
    correct: 0,
    explanation: "Avec un modal (must, can, should), la voix passive se construit avec 'modal + be + participe passé'.",
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

// Illustrations SVG
function getTechnicalSvg(type) {
  return `<svg viewBox="0 0 200 100" width="100%" height="120"><rect width="200" height="100" rx="8" fill="#1e293b"/><circle cx="100" cy="50" r="25" fill="none" stroke="#38bdf8" stroke-width="4"/><text x="100" y="55" fill="#38bdf8" font-size="10" text-anchor="middle">QCM INTERACTIF</text></svg>`;
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
      btn.style.background = 'var(--accent)';
    } else if (idx === selectedIdx) {
      btn.style.background = 'var(--danger)';
    }
  });

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

// Afficher les résultats
function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  scoreText.textContent = `${score} / ${currentQuiz.length}`;

  if (score >= currentQuiz.length * 0.9) feedbackText.textContent = "🏆 Excellent ! Niveau d'expertise irréprochable.";
  else if (score >= currentQuiz.length * 0.7) feedbackText.textContent = "⭐ Très bien ! Solides compétences confirmées.";
  else if (score >= currentQuiz.length * 0.5) feedbackText.textContent = "👍 Résultat moyen. Quelques révisions conseillées.";
  else feedbackText.textContent = "📚 Des notions à approfondir dans ce domaine.";

  correctionContainer.innerHTML = '';
  userAnswers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = 'correction-item';
    const userTxt = ans.userSelected >= 0 ? ans.options[ans.userSelected] : "⏱️ Temps écoulé";
    const correctTxt = ans.options[ans.correctIndex];
    const statusColor = ans.userSelected === ans.correctIndex ? 'var(--accent)' : 'var(--danger)';

    item.innerHTML = `
      <p><strong>Q${idx + 1}: ${ans.question}</strong></p>
      <p>Ta réponse : <span style="color: ${statusColor};">${userTxt}</span></p>
      <p>Bonne réponse : <span style="color: var(--accent);">${correctTxt}</span></p>
      <p><em>💡 ${ans.explanation}</em></p>
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
