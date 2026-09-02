// Base de données géante de 80 questions techniques (Hydraulique, Électricité, Mécanique, Navale)
const questionsData = [
  // --- HYDRAULIQUE (20 questions) ---
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
    explanation: "L'accumulateur emmagasine de l'énergie hydraulique sous pression grâce à un gaz (azote) pour la restituer en cas de besoin.",
    svgType: "accumulator"
  },
  {
    domain: "Hydraulique",
    question: "Qu'indique une chute de pression anormale aux bornes d'un distributeur ?",
    options: ["Une surchauffe de l'huile", "Des pertes de charge excessives ou un débit trop élevé", "Un excès de lubrification", "Rien de particulier"],
    correct: 1,
    explanation: "Une perte de charge excessive est souvent liée à un laminage important, un encrassement ou un sous-dimensionnement des canalisations.",
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
    options: ["Une pression de refoulement trop basse", "Une aspiration difficile ou une dépression excessive (manque d'alimentation)", "Une huile trop froide", "Un filtre trop propre"],
    correct: 1,
    explanation: "La cavitation se produit lorsque la pression à l'aspiration descend sous la tension de vapeur de l'huile, créant des micro-bulles destructrices.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "À quoi sert un clapet anti-retour piloté ?",
    options: ["À bloquer le fluide dans les deux sens au repos", "À autoriser le flux dans un sens et à l'autoriser dans l'autre uniquement sur commande pilote", "À purger l'air du circuit", "À réguler la température"],
    correct: 1,
    explanation: "Il garantit un blocage étanche (sécurité de position de vérin) jusqu'à ce qu'une pression de pilotage vienne l'ouvrir.",
    svgType: "valve"
  },
  {
    domain: "Hydraulique",
    question: "Comment se comporte la viscosité d'une huile hydraulique standard lorsque sa température augmente ?",
    options: ["Elle augmente", "Elle diminue", "Elle reste strictement constante", "Elle se solidifie"],
    correct: 1,
    explanation: "Plus l'huile chauffe, plus elle devient fluide (sa viscosité diminue), ce qui peut impacter le rendement volumétrique.",
    svgType: "oil"
  },
  {
    domain: "Hydraulique",
    question: "Quel appareil utilise-t-on pour mesurer la pression effective d'un circuit ?",
    options: ["Un débitmètre", "Un manomètre", "Un viscomètre", "Un thermomètre"],
    correct: 1,
    explanation: "Le manomètre est l'instrument de mesure indispensable raccordé aux prises de pression du système.",
    svgType: "gauge"
  },
  {
    domain: "Hydraulique",
    question: "Dans un système oléohydraulique, que transmet principalement le fluide ?",
    options: ["De l'électricité statique", "De la puissance et de l'énergie sous forme de pression et de débit", "De la vapeur d'eau", "De l'air comprimé"],
    correct: 1,
    explanation: "L'huile transmet l'énergie mécanique de la centrale vers les récepteurs (vérins, moteurs).",
    svgType: "flow"
  },
  {
    domain: "Hydraulique",
    question: "Quel rôle joue le filtre à huile placé sur la ligne de retour ?",
    options: ["Protéger l'aspiration de la pompe", "Retenir les impuretés avant le retour au réservoir pour garder l'huile propre", "Refroidir l'huile à haute pression", "Créer une haute pression constante"],
    correct: 1,
    explanation: "Le filtre de retour capture les particules générées par l'usure des composants du circuit.",
    svgType: "filter"
  },
  {
    domain: "Hydraulique",
    question: "Qu'est-ce qu'un vérin double effet ?",
    options: ["Un vérin commandé par deux pompes", "Un vérin dont la sortie et la rentrée de la tige sont assurées par la pression hydraulique", "Un vérin sans joint", "Un vérin rotatif"],
    correct: 1,
    explanation: "L'huile sous pression est appliquée alternativement de chaque côté du piston pour les deux sens de mouvement.",
    svgType: "cylinder"
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'inconvénient majeur d'une huile hydraulique contaminée par l'eau ?",
    options: ["Une augmentation de la couleur", "Une oxydation rapide, corrosion et perte de pouvoir lubrifiant", "Un gel immédiat du système", "Une baisse de la masse volumique"],
    correct: 1,
    explanation: "L'eau provoque l'émulsion de l'huile, détériore les composants et favorise l'usure prématurée.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "Que signifie la désignation d'un distributeur 4/3 ?",
    options: ["4 orifices et 3 positions", "3 orifices et 4 étages", "4 pressions et 3 débits", "4 clapets et 3 moteurs"],
    correct: 0,
    explanation: "Le premier chiffre indique le nombre d'orifices de raccordement, et le second le nombre de positions de commutation.",
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
    options: ["Pour vider toute l'huile", "Pour éliminer les poches d'air responsables d'un fonctionnement spongieux et bruyant", "Pour nettoyer le réservoir", "Pour changer la couleur de l'huile"],
    correct: 1,
    explanation: "L'air compressible perturbe la précision des mouvements et provoque des bruits de cavitation.",
    svgType: "air"
  },
  {
    domain: "Hydraulique",
    question: "Quel rôle joue le régleur de débit (étrangleur) ?",
    options: ["Limiter la pression maximale", "Ajuster la vitesse d'un actionneur en freinant le passage du fluide", "Changer le sens de rotation", "Stocker de l'huile"],
    correct: 1,
    explanation: "En créant une perte de charge contrôlée, il restreint le débit traversant.",
    svgType: "flow"
  },
  {
    domain: "Hydraulique",
    question: "Qu'appelle-t-on 'coup de bélier' dans une canalisation ?",
    options: ["Un choc mécanique externe", "Une surpression brutale due à l'arrêt ou au changement soudain de direction d'un fluide en mouvement", "Le démarrage d'une pompe", "La vibration d'un filtre"],
    correct: 1,
    explanation: "L'inertie de la colonne d'huile stoppée net engendre des pics de pression destructeurs.",
    svgType: "warning"
  },
  {
    domain: "Hydraulique",
    question: "Quel est l'indice ISO généralement utilisé pour classifier les huiles hydrauliques ?",
    options: ["L'indice ISO VG (Viscosity Grade)", "L'indice d'octane", "L'indice de résistance", "L'indice de tension"],
    correct: 0,
    explanation: "ISO VG caractérise la viscosité cinématique de l'huile à 40°C (ex: ISO VG 46).",
    svgType: "oil"
  },
  {
    domain: "Hydraulique",
    question: "Où se situe généralement le clapet de décharge principal d'une centrale ?",
    options: ["Sur le retour de cuve", "Directement en sortie de pompe pour protéger l'installation contre les surpressions", "Dans les vérins", "Sur le tableau de commande"],
    correct: 1,
    explanation: "Il fixe la pression maximale admissible de tout le circuit hydraulique.",
    svgType: "pressure"
  },
  {
    domain: "Hydraulique",
    question: "Quel composant assure l'échange thermique pour maintenir l'huile à une température optimale ?",
    options: ["Le radiateur / échangeur thermique", "Le filtre magnétique", "Le manomètre", "Le clapet de non-retour"],
    correct: 0,
    explanation: "L'échangeur (eau/huile ou air/huile) évacue les calories produites par les pertes de charge.",
    svgType: "cooler"
  },

  // --- ELECTRICITE (20 questions) ---
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un disjoncteur DPN (Phase + Neutre) ?",
    options: ["Coupler deux moteurs", "Protéger simultanément la phase et le neutre contre les courts-circuits et surcharges", "Mesurer la tension réseau", "Élever la tension alternative"],
    correct: 1,
    explanation: "Le DPN coupe et protège à la fois le conducteur de phase et le neutre sur un seul module compact.",
    svgType: "breaker"
  },
  {
    domain: "Électricité",
    question: "Comment se comporte un contacteur électromagnétique au repos (bobine non alimentée) ?",
    options: ["Tous ses contacts basculent", "Ses contacts principaux ouverts le restent, et les contacts fermés le restent", "Il s'autobloque", "Il émet un signal sonore"],
    correct: 1,
    explanation: "Au repos, les ressorts de rappel maintiennent l'appareillage dans sa position initiale non alimentée.",
    svgType: "contactor"
  },
  {
    domain: "Électricité",
    question: "À quoi sert un relais thermique dans un coffret de commande moteur ?",
    options: ["À couper le circuit en cas de surcharge prolongée du moteur (échauffement)", "À régler la vitesse de rotation", "À inverser les phases", "À transformer le courant alternatif en continu"],
    correct: 0,
    explanation: "Le bilame du relais thermique se déforme sous l'effet d'un surcourant prolongé et déclenche le circuit de commande.",
    svgType: "thermal"
  },
  {
    domain: "Électricité",
    question: "Comment paramètre-t-on une horloge programmable (type Schneider Acti9) pour un éclairage nocturne ?",
    options: ["En réglant les plages horaires de commutation ON/OFF selon les jours", "En mesurant la résistance des câbles", "En modifiant la fréquence du réseau", "En changeant le disjoncteur"],
    correct: 0,
    explanation: "L'horloge programmable gère des programmes temporels précis pour automatiser les départs d'éclairage.",
    svgType: "timer"
  },
  {
    domain: "Électricité",
    question: "Quel est l'effet d'une inversion de deux phases sur un moteur synchrone ou asynchrone triphasé ?",
    options: ["Il s'arrête net", "Il inverse son sens de rotation", "Il double sa vitesse", "Il grille immédiatement sans disjoncter"],
    correct: 1,
    explanation: "Inverser deux phases modifie l'ordre de succession des champs tournants, inversant ainsi le sens du rotor.",
    svgType: "motor"
  },
  {
    domain: "Électricité",
    question: "Quelle est la formule fondamentale de la loi d'Ohm en courant continu ?",
    options: ["P = U × I", "U = R × I", "W = U² / R", "I = R / U"],
    correct: 1,
    explanation: "U (Tension en Volts) est égal au produit de la Résistance (en Ohms) par l'Intensité (en Ampères).",
    svgType: "formula"
  },
  {
    domain: "Électricité",
    question: "Quel appareil utilise-t-on pour mesurer l'isolement d'un câble électrique sous haute tension de test (ex: 500V ou 1000V) ?",
    options: ["Un multimetre classique", "Un ohmmètre de terre ou mégohmmètre", "Une pince ampèremétrique", "Un wattmètre"],
    correct: 1,
    explanation: "Le mégohmmètre injecte une tension continue élevée pour vérifier l'absence de fuite de courant à la terre.",
    svgType: "megger"
  },
  {
    domain: "Électricité",
    question: "Qu'indique un courant de court-circuit élevé dans une installation ?",
    options: ["Une excellente isolation", "Une liaison directe accidentelle entre phase et neutre ou phase et phase sans résistance de charge", "Une baisse anormale de la consommation", "Un fonctionnement normal en veille"],
    correct: 1,
    explanation: "Le court-circuit provoque un pic d'intensité instantané très destructeur si les protections ne réagissent pas.",
    svgType: "warning"
  },
  {
    domain: "Électricité",
    question: "Quel est le rôle d'un transformateur de commande et de signalisation ?",
    options: ["Augmenter la puissance globale", "Isoler galvaniquement le circuit de commande de la puissance et abaisser la tension (ex: 400V vers 24V)", "Convertir l'alternatif en continu", "Filtrer les harmoniques"],
    correct: 1,
    explanation: "Il sécurise les circuits de commande en abaissant la tension et protège contre les perturbations directes.",
    svgType: "transformer"
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un schéma électrique unifilaire ?",
    options: ["Un schéma où chaque conducteur est dessiné séparément", "Un schéma représentant les conducteurs d'un même circuit par un seul trait portant des indications", "Un schéma purement mécanique", "Un schéma sans aucun symbole normalisé"],
    correct: 1,
    explanation: "Il simplifie la lecture globale des installations de puissance en évitant la surcharge visuelle.",
    svgType: "schema"
  },
  {
    domain: "Électricité",
    question: "Pourquoi réalise-t-on une liaison équipotentielle ?",
    options: ["Pour relier toutes les masses métalliques au même potentiel afin d'éviter les tensions de contact dangereuses", "Pour augmenter la vitesse du courant", "Pour alimenter les prises en 24V", "Pour réduire la facture d'électricité"],
    correct: 0,
    explanation: "La liaison équipotentielle protège les personnes contre les chocs électriques par différence de potentiel.",
    svgType: "earth"
  },
  {
    domain: "Électricité",
    question: "Quel est le principe d'action d'un interrupteur différentiel 30mA ?",
    options: ["Il détecte un dépassement de la puissance souscrite", "Il compare le courant entrant et sortant et coupe si la différence dépasse 30mA (fuite à la terre)", "Il protège contre les courts-circuits francs", "Il régule la tension de phase"],
    correct: 1,
    explanation: "Une différence de courant indique qu'une partie du courant s'échappe vers la terre (risque d'électrocution).",
    svgType: "differential"
  },
  {
    domain: "Électricité",
    question: "Comment se branche un ampèremètre dans un circuit électrique ?",
    options: ["En dérivation aux bornes du récepteur", "En série dans le conducteur traversé par le courant à mesurer", "Entre la phase et la terre", "Directement sur la bobine du contacteur"],
    correct: 1,
    explanation: "L'ampèremètre doit être traversé par la totalité du courant mesuré, d'où un branchement impératif en série.",
    svgType: "meter"
  },
  {
    domain: "Électricité",
    question: "Que signifie le marquage IP21 sur un coffret électrique ?",
    options: ["Indice de protection contre la pénétration de corps solides (>12.5mm) et de chutes verticales de gouttes d'eau", "Isolation renforcée 2100 Volts", "Indice de performance thermique", "Impédance nominale"],
    correct: 0,
    explanation: "L'indice IP qualifie la protection du matériel contre les intrusions solides et liquides.",
    svgType: "ip"
  },
  {
    domain: "Électricité",
    question: "Quel composant permet de stocker temporairement de l'énergie électrostatique dans un circuit ?",
    options: ["La résistance", "Le condensateur", "L'inductance", "Le disjoncteur"],
    correct: 1,
    explanation: "Le condensateur accumule des charges électriques entre ses armatures isolées par un diélectrique.",
    svgType: "capacitor"
  },
  {
    domain: "Électricité",
    question: "Quelle est la couleur normalisée du conducteur de protection (terre) ?",
    options: ["Bleu clair", "Vert et Jaune", "Rouge", "Noir ou Marron"],
    correct: 1,
    explanation: "Le bicolore vert/jaune est strictement réservé à la terre selon les normes internationales (IEC).",
    svgType: "earth"
  },
  {
    domain: "Électricité",
    question: "Qu'est-ce qu'un relais de temporisation au repos (OFF-delay) ?",
    options: ["Un relais dont la temporisation commence dès la coupure de la commande", "Un relais qui ne fonctionne jamais", "Un relais qui s'enclenche instantanément à l'allumage", "Un disjoncteur thermique"],
    correct: 0,
    explanation: "Il maintient ses contacts fermés pendant un temps réglé après l'arrêt du signal de commande.",
    svgType: "timer"
  },
  {
    domain: "Électricité",
    question: "Comment calcule-t-on la puissance active P en triphasé équilibré (système 400V) ?",
    options: ["P = U × I", "P = √3 × U × I × cos(φ)", "P = U² / R", "P = 3 × U × I"],
    correct: 1,
    explanation: "En triphasé, le facteur de puissance cos(φ) et la racine de 3 interviennent dans le calcul de la puissance active.",
    svgType: "formula"
  },
  {
    domain: "Électricité",
    question: "Quel est l'appareil indiqué pour le repérage de câbles non alimentés dans une goulotte ?",
    options: ["Un testeur de continuité / bip-mètre", "Un fréquencemètre", "Un wattmètre", "Un gradateur"],
    correct: 0,
    explanation: "Le testeur de continuité vérifie si un conducteur est bouclé ou interrompu.",
    svgType: "continuity"
  },
  {
    domain: "Électricité",
    question: "Quelle protection est indispensable pour les installations extérieures soumises aux intempéries ?",
    options: ["Un coffret IP55 ou IP65 minimum", "Un simple boîtier plastique ouvert", "Une protection en bois vernis", "Aucune protection particulière"],
    correct: 0,
    explanation: "Les indices élevés (IP55/65) garantissent l'étanchéité aux poussières et aux projections d'eau puissantes.",
    svgType: "ip"
  },

  // --- MECANIQUE (20 questions) ---
  {
    domain: "Mécanique",
    question: "Quel est le rôle principal d'un roulement à billes dans un mécanisme ?",
    options: ["Freiner l'arbre en rotation", "Guider un arbre en rotation en réduisant les frottements mécaniques", "Augmenter la vitesse du moteur par 10", "Transmettre un signal électrique"],
    correct: 1,
    explanation: "Le roulement minimise le couple de frottement entre les pièces fixes et tournantes.",
    svgType: "bearing"
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on 'ajustement avec serrage' (ou incertain/serré) ?",
    options: ["Un montage où l'arbre est plus petit que l'alésage", "Un montage où la cote maximale de l'arbre est supérieure ou égale à la cote minimale de l'alésage", "Un montage avec beaucoup de jeu", "Un assemblage par collage souple"],
    correct: 1,
    explanation: "Le serrage nécessite un effort (presse ou chaud/froid) pour emmancher les pièces ensemble.",
    svgType: "fit"
  },
  {
    domain: "Mécanique",
    question: "Quel instrument de mesure de précision permet de lire le centième ou le millième de millimètre ?",
    options: ["Le mètre ruban", "Le pied à coulisse vernier / micromètre", "L'équerre de maçon", "Le fil à plomb"],
    correct: 1,
    explanation: "Le micromètre (palmer) et le pied à coulisse garantissent des contrôles dimensionnels rigoureux.",
    svgType: "caliper"
  },
  {
    domain: "Mécanique",
    question: "Quel est l'effet d'une lubrification insuffisante sur un réducteur à engrenages ?",
    options: ["Une baisse de température", "Un grippage, une usure abrasive prononcée et une surchauffe des dents", "Une augmentation du rendement", "Un nettoyage automatique"],
    correct: 1,
    explanation: "Sans film d'huile séparant les flancs de dents, le contact métal sur métal détruit rapidement la mécanique.",
    svgType: "oil"
  },
  {
    domain: "Mécanique",
    question: "À quoi sert une clavette sur un arbre de transmission ?",
    options: ["À guider axialement l'arbre", "À transmettre un couple de rotation entre l'arbre et le moyeu (poulie, pignon)", "À assurer l'étanchéité", "À freiner l'arbre en cas d'urgence"],
    correct: 1,
    explanation: "La clavette encastre le moyeu sur l'arbre en rotation pour éviter tout patinage angulaire.",
    svgType: "key"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'un défaut de balourd sur un ventilateur ou un rotor tournant à haute vitesse ?",
    options: ["Une répartition dissymétrique des masses créant des vibrations destructrices", "Un excès de peinture", "Une baisse de tension électrique", "Une usure normale des charbons"],
    correct: 0,
    explanation: "Le balourd engendre des forces centrifuges oscillantes provoquant l'usure prématurée des paliers.",
    svgType: "vibration"
  },
  {
    domain: "Mécanique",
    question: "Quel composant d'étanchéité dynamique est couramment utilisé sur les arbres tournants pour retenir l'huile ?",
    options: ["Un joint torique statique", "Une bague à lèvres radiale (type joint Simmer)", "Un joint plat en carton", "De la filasse de plomberie"],
    correct: 1,
    explanation: "La bague à lèvres exerce une pression contrôlée sur l'arbre grâce à un ressort torique.",
    svgType: "seal"
  },
  {
    domain: "Mécanique",
    question: "Quelle est l'utilité d'une clé dynamométrique lors du serrage de vis critiques ?",
    options: ["Serrer le plus fort possible sans casser la clé", "Appliquer un couple de serrage précis et préconisé par le constructeur", "Desserrer les vis rouillées", "Mesurer la dureté du métal"],
    correct: 1,
    explanation: "Un serrage au couple garantit l'absence de rupture par fatigue ou de desserrage en service.",
    svgType: "torque"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce que la fatigue des métaux ?",
    options: ["Le vieillissement de la peinture", "L'endommagement progressif du matériau sous l'effet de sollicitations cycliques répétées", "La fonte du métal à basse température", "L'oxydation dans l'eau douce"],
    correct: 1,
    explanation: "Des micro-fissures naissent et se propagent sous l'effet des charges alternées jusqu'à la rupture soudaine.",
    svgType: "crack"
  },
  {
    domain: "Mécanique",
    question: "Quel type d'engrenage transmet un mouvement entre des axes concourants (généralement à 90°) ?",
    options: ["Un engrenage cylindrique droit", "Un engrenage conique", "Une crémaillère", "Une vis sans fin simple"],
    correct: 1,
    explanation: "Les roues coniques permettent de renvoyer le mouvement selon un angle (souvent d'équerre).",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Quel est le rôle d'un réducteur mécanique de vitesse ?",
    options: ["Multiplier la vitesse et diviser le couple", "Réduire la vitesse de rotation tout en multipliant le couple disponible", "Conserver exactement la même vitesse et le même couple", "Changer la nature du courant"],
    correct: 1,
    explanation: "Grâce au rapport de réduction, le couple mécanique de sortie est considérablement augmenté.",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Comment qualifie-t-on une liaison mécanique qui empêche tout mouvement relatif entre deux pièces ?",
    options: ["Une liaison pivot", "Une liaison encastrement (rigide)", "Une liaison glissière", "Une liaison rotule"],
    correct: 1,
    explanation: "L'encastrement bloque les 6 degrés de liberté possibles entre les solides.",
    svgType: "mechanics"
  },
  {
    domain: "Mécanique",
    question: "Quel essai mécanique permet de déterminer la résistance à la traction et la limite d'élasticité d'un acier ?",
    options: ["L'essai de dureté Brinell", "L'essai de traction destructif en laboratoire", "L'essai de flexion simple à la main", "L'essai d'étanchéité pneumatique"],
    correct: 1,
    explanation: "L'éprouvette est étirée sur une machine de traction pour tracer sa courbe caractéristique contrainte-déformation.",
    svgType: "test"
  },
  {
    domain: "Mécanique",
    question: "Qu'est-ce qu'un accouplement élastique dans une ligne d'arbres ?",
    options: ["Un accouplement rigide en fonte", "Un organe transmettant le couple tout en absorbant de petits désalignements et en filtrant les chocs", "Un ressort de suspension", "Une courroie trapézoïdale"],
    correct: 1,
    explanation: "Il protège les machines entraînées et motrices des à-coups et vibrations.",
    svgType: "coupling"
  },
  {
    domain: "Mécanique",
    question: "Pourquoi réalise-t-on un traitement thermique de trempe sur une pièce en acier ?",
    options: ["Pour la rendre tendre et facile à plier", "Pour augmenter sa dureté superficielle et sa résistance à l'usure", "Pour l'alléger en poids", "Pour changer sa couleur en noir"],
    correct: 1,
    explanation: "La trempe modifie la structure cristalline (formation de martensite) pour durcir le métal.",
    svgType: "heat"
  },
  {
    domain: "Mécanique",
    question: "Quel est l'inconvénient d'un jeu excessif dans les dentures d'un réducteur ( backlash ) ?",
    options: ["Un blocage immédiat", "Des à-coups, du bruit et des chocs destructeurs lors des inversions de marche", "Une surconsommation d'huile", "Une augmentation du couple utile"],
    correct: 1,
    explanation: "Le jeu excessif provoque des chocs répétés sur les flancs de dents lors des démarrages et arrêts.",
    svgType: "gear"
  },
  {
    domain: "Mécanique",
    question: "Qu'indique l'apparition de traces de rouille rouge sur un assemblage boulonné serré ?",
    options: ["Une bonne protection anticorrosion", "Un mouvement relatif (fretting-corrosion) ou une infiltration d'humidité due à un desserrage", "Un excès de graisse propre", "Une surchauffe électrique"],
    correct: 1,
    explanation: "Le frottement entre spires ou sous la tête de vis élimine la protection et oxyde le métal.",
    svgType: "rust"
  },
  {
    domain: "Mécanique",
    question: "Quel type de courroie offre la meilleure adhérence et transmission de puissance dans les gorges de poulies industrielles ?",
    options: ["La courroie plate lisse", "La courroie trapézoïdale", "Une ficelle en nylon", "Une chaîne à maillons"],
    correct: 1,
    explanation: "Le profil trapézoïdal provoque un arc-boutement dans la gorge augmentant l'effort transmissible.",
    svgType: "belt"
  },
  {
    domain: "Mécanique",
    question: "Qu'appelle-t-on la 'cémentation' d'une pièce mécanique ?",
    options: ["Un collage à la colle forte", "Un traitement thermochimique d'enrichissement en carbone de la couche superficielle", "Un nettoyage au ciment liquide", "Un meulage grossier"],
    correct: 1,
    explanation: "On obtient un cœur tenu et une surface très dure résistante aux frottements.",
    svgType: "heat"
  },
  {
    domain: "Mécanique",
    question: "Quel instrument vérifie le parallélisme et le faux-rond d'un arbre en rotation ?",
    options: ["Un comparateur à cadran sur pied mag", "Un thermomètre laser", "Un pied à coulisse plastique", "Un pèse-lettre"],
    correct: 0,
    explanation: "Le comparateur mesure avec une grande précision les écarts par rapport à une position de référence.",
    svgType: "gauge"
  },

  // --- NAVALE (20 questions) ---
  {
    domain: "Navale",
    question: "Quel est le rôle de la quille sur un navire ?",
    options: ["Servir de réservoir de carburant", "Constituer la pièce vertébrale longitudinale de la structure inférieure assurant la rigidité longitudinale", "Porter l'ancre principale", "Guider les fumées d'échappement"],
    correct: 1,
    explanation: "La quille est la poutre principale de fond sur laquelle s'articulent les cadres et les tôles de bordure.",
    svgType: "hull"
  },
  {
    domain: "Navale",
    question: "Que désigne le terme 'franc-bord' d'un navire ?",
    options: ["La distance verticale entre la flottaison et le pont principal étanche (pont de franc-bord)", "La hauteur totale du mât", "La largeur maximale du navire (maître-bau)", "Le tirant d'eau minimal à vide"],
    correct: 0,
    explanation: "Le franc-bord garantit la réserve de flottabilité et empêche l'eau de submerger le pont.",
    svgType: "ship"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la stabilité transversale initiale d'un navire (hauteur métacentrique GM) ?",
    options: ["La vitesse maximale par mer de face", "La mesure de la capacité du navire à redresser un gîte transversale", "Le poids total des marchandises", "La profondeur sous la quille"],
    correct: 1,
    explanation: "Un GM positif suffisant assure le retour spontané du navire à sa position droite après une inclinaison.",
    svgType: "stability"
  },
  {
    domain: "Navale",
    question: "Quel système de sécurité incendie fixe est principalement installé dans la salle des machines d'un navire moderne ?",
    options: ["Un seau de sable", "Une installation fixe d'extinction par gaz carbonique (CO2) ou brouillard d'eau haute pression", "Un tuyau d'arrosage simple", "Un extincteur à eau pulvérisée de 6kg"],
    correct: 1,
    explanation: "Le CO2 étouffe l'incendie par inondation totale du local machine hermétiquement fermé.",
    svgType: "fire"
  },
  {
    domain: "Navale",
    question: "À quoi sert le système de barre et le safran d'un navire ?",
    options: ["À régler la vitesse des hélices", "À orienter le flux d'eau dévié pour assurer la gouverne et les changements de cap", "À remonter les ancres", "À produire de l'eau douce"],
    correct: 1,
    explanation: "Le safran crée une force hydrodynamique transversale faisant pivoter la coque autour de son centre de gravité.",
    svgType: "rudder"
  },
  {
    domain: "Navale",
    question: "Qu'appelle-t-on le 'tirant d'eau' d'un navire ?",
    options: ["La distance verticale entre la ligne de flottaison et le point le plus bas de la carène (quille)", "La distance entre le sommet de la cheminée et la mer", "La longueur hors tout", "La largeur de la coque"],
    correct: 0,
    explanation: "Il détermine la profondeur minimale d'eau requise pour que le navire ne talonne pas.",
    svgType: "draft"
  },
  {
    domain: "Navale",
    question: "Quel équipement de pont sert au mouillage et à la levée des ancres par chaînes ?",
    options: ["Le treuil de remorquage", "Le guindeau", "Le cabestan arrière", "La grue de charge"],
    correct: 1,
    explanation: "Le guindeau est le treuil à axe horizontal muni d'un barbotin adapté aux maillons de la chaîne d'ancre.",
    svgType: "anchor"
  },
  {
    domain: "Navale",
    question: "Quel est le rôle des ballasts à bord d'un navire ?",
    options: ["Stocker le carburant lourd pour les moteurs", "Remplir ou vider des réservoirs d'eau de mer pour ajuster l'assiette, la gîte et l'immersion", "Alimenter les douches de l'équipage", "Refroidir les cabines climatisées"],
    correct: 1,
    explanation: "Les ballasts gèrent le centrage des masses et l'enfoncement optimal du navire selon les charges.",
    svgType: "ballast"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la 'carène' d'un navire ?",
    options: ["La partie de la coque située entièrement sous la ligne de flottaison", "La passerelle de navigation", "Le logement du capitaine", "La structure des mâts"],
    correct: 0,
    explanation: "C'est la portion immergée de la coque qui subit la poussée d'Archimède.",
    svgType: "hull"
  },
  {
    domain: "Navale",
    question: "Pourquoi applique-t-on une peinture antifouling (salissures) sur la coque sous-marine ?",
    options: ["Pour embellir la couleur de la tôle", "Pour empêcher la fixation et la prolifération d'organismes marins (algues, coquillages)", "Pour augmenter la température de l'eau", "Pour souder les tôles entre elles"],
    correct: 1,
    explanation: "L'antifouling protège contre le biofouling qui freine l'avancement et augmente la consommation de carburant.",
    svgType: "paint"
  },
  {
    domain: "Navale",
    question: "Quel est l'objectif du système de 'séparation des eaux bilges' (hydrocarbures / eau) ?",
    options: ["Recycler l'eau de pluie", "Traiter les eaux de fond de cale pour rejeter une eau épurée respectant les normes MARPOL (<15 ppm)", "Alimenter les chaudières principales", "Laver le pont supérieur"],
    correct: 1,
    explanation: "Le séparateur d'hydrocarbures évite toute pollution marine accidentelle par les rejets de machines.",
    svgType: "bilge"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la gîte d'un navire ?",
    options: ["Une inclinaison longitudinale permanente (trim)", "Une inclinaison transversale permanente du navire", "Un mouvement de tangage par forte houle", "Une vitesse excessive en virage"],
    correct: 1,
    explanation: "La gîte est un angle permanent sur bâbord ou tribord, souvent dû à une mauvaise répartition des charges.",
    svgType: "stability"
  },
  {
    domain: "Navale",
    question: "Quel système de propulsion utilise une tuyère orientable ou un jet d'eau orienté à haute vitesse ?",
    options: ["L'hélice conventionnelle fixe", "Le propulseur azimutal ou hydrojet", "La voile rigide", "La roue à aubes"],
    correct: 1,
    explanation: "Les propulseurs azimutaux ou hydrojets procurent une excellente manœuvrabilité dans toutes les directions.",
    svgType: "propeller"
  },
  {
    domain: "Navale",
    question: "Que signifie le terme 'maître-bau' en architecture navale ?",
    options: ["La longueur totale du navire", "La largeur maximale hors-tout du navire", "La hauteur maximale du mât", "Le poids lège du navire"],
    correct: 1,
    explanation: "Le maître-bau correspond au maître-couple, c'est-à-dire la section transversale la plus large de la coque.",
    svgType: "ship"
  },
  {
    domain: "Navale",
    question: "Quel organe de sécurité permet d'éviter l'envahissement du navire par les tuyauteries traversant la coque sous l'eau ?",
    options: ["Des vannes de coque quart de tour robustes (vannes de sea-chest)", "Des bouchons en bois tendres", "Un simple tuyau en plastique souple", "Des colliers de serrage en fer"],
    correct: 0,
    explanation: "Les vannes de coque (prises d'eau de mer et évacuations) doivent être certifiées et accessibles en permanence.",
    svgType: "valve"
  },
  {
    domain: "Navale",
    question: "Quel est le principe physique fondamental qui permet à un navire de flotter ?",
    options: ["La loi de Newton sur l'inertie", "La poussée d'Archimède (le poids du volume d'eau déplacé est égal au poids total du navire)", "La force centrifuge", "La pression atmosphérique"],
    correct: 1,
    explanation: "Le navire flotte car sa masse volumique globale est inférieure à celle de l'eau de mer grâce au volume d'air de ses emménagements.",
    svgType: "archimedes"
  },
  {
    domain: "Navale",
    question: "À quoi sert un propulseur d'étrave (bow-thruster) ? ",
    options: ["À avancer en marche arrière plus vite", "À faciliter les manœuvres de port en faisant pivoter l'avant du navire latéralement sans avancer", "À stabiliser le roulis en haute mer", "À produire de l'électricité d'urgence"],
    correct: 1,
    explanation: "Le tunnel transversal équipé d'une hélice à l'avant aide grandement les amarrages et appareillages serrés.",
    svgType: "thruster"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que le 'vivier' ou 'saumon' de gouverne ?",
    options: ["Une réserve de poissons frais", "L'ensemble de la mèche et de l'axe de transmission du safran", "Le local des pompes à incendie", "Le compartiment des compresseurs"],
    correct: 1,
    explanation: "Il s'agit des éléments robustes encaissant les efforts hydrodynamiques du gouvernail.",
    svgType: "rudder"
  },
  {
    domain: "Navale",
    question: "Qu'est-ce que la cloison étanche transversale principale ?",
    options: ["Une simple cloison de cabine en bois", "Une paroi structurelle résistante cloisonnant le navire pour empêcher la propagation d'une voie d'eau ou d'un incendie", "Le plancher de la passerelle", "Le toit de la timonerie"],
    correct: 1,
    explanation: "Le cloisonnement étanche compartimente la coque pour satisfaire aux critères de survivabilité après avarie.",
    svgType: "bulkhead"
  },
  {
    domain: "Navale",
    question: "Quel document officiel à bord consigne l'ensemble des observations nautiques, machines et de sécurité ?",
    options: ["Le journal de bord (et livre de machine)", "Le carnet de chèques du bord", "Le manuel de cuisine", "Le catalogue des pièces de rechange"],
    correct: 0,
    explanation: "Le journal de bord est un registre légal obligatoire consignant les événements majeurs de la navigation et des quarts.",
    svgType: "logbook"
  }
];

// État global de l'application
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 30;

// Éléments du DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const timerText = document.getElementById('timer-text');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const correctionsContainer = document.getElementById('corrections-container');
const imageContainer = document.getElementById('image-container');

// Générateur d'illustrations SVG techniques vectorielles intégrées
function getTechnicalSvg(type) {
  switch(type) {
    case 'valve':
    case 'pressure':
      return `<svg viewBox="0 0 200 120" width="100%" height="100%"><rect width="200" height="120" rx="10" fill="#1e293b"/><path d="M40 60 H80 L100 40 L120 60 H160" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="100" cy="40" r="15" fill="#0ea5e9"/><rect x="90" y="15" width="20" height="15" rx="3" fill="#cbd5e1"/><path d="M70 85 H130 V95 H70 Z" fill="#334155" stroke="#64748b" stroke-width="2"/><text x="100" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">SCHÉMA HYDRAULIQUE</text></svg>`;
    case 'accumulator':
    case 'pump':
      return `<svg viewBox="0 0 200 120" width="100%\" height="100%"><rect width="200" height="120" rx="10" fill="#1e293b"/><rect x="75" y="25" width="50" height="70" rx="25" fill="none" stroke="#38bdf8" stroke-width="5"/><line x1="100" y1="25" x2="100" y2="95" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/><circle cx="100" cy="25" r="8" fill="#f59e0b"/><text x="100" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">ACCUMULATEUR / POMPE</text></svg>`;
    case 'breaker':
    case 'contactor':
    case 'thermal':
    case 'timer':
      return `<svg viewBox="0 0 200 120" width="100%" height="100%"><rect width="200" height="120" rx="10" fill="#0f172a"/><rect x="65" y="20" width="70" height="80" rx="6" fill="#334155" stroke="#38bdf8" stroke-width="3"/><line x1="100" y1="20" x2="100" y2="15" stroke="#38bdf8" stroke-width="4"/><line x1="100" y1="100" x2="100" y2="105" stroke="#38bdf8" stroke-width="4"/><path d="M80 50 L120 70" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/><circle cx="80" cy="50" r="5" fill="#38bdf8"/><circle cx="120" cy="70" r="5" fill="#38bdf8"/><text x="100" y="115" fill="#94a3b8" font-size="10" text-anchor="middle">APPAREILLAGE ÉLECTRIQUE</text></svg>`;
    case 'bearing':
    case 'gear':
      return `<svg viewBox="0 0 200 120" width="100%" height="100%"><rect width="200" height="120" rx="10" fill="#1e293b"/><circle cx="100" cy="60" r="35" fill="none" stroke="#64748b" stroke-width="8"/><circle cx="100" cy="60" r="18" fill="none" stroke="#38bdf8" stroke-width="5"/><circle cx="100" cy="60" r="8" fill="#334155"/><path d="M100 25 V15 M100 95 V105 M65 60 H55 M145 60 H135" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/><text x="100" y="112" fill="#94a3b8" font-size="10" text-anchor="middle">ROULEMENT / MÉCANIQUE</text></svg>`;
    case 'ship':
    case 'hull':
    case 'stability':
      return `<svg viewBox="0 0 200 120" width="100%" height="100%"><rect width="200" height="120" rx="10" fill="#0f172a"/><path d="M30 60 C50 85 150 85 170 60 L150 90 H50 Z" fill="#0ea5e9"/><line x1="20" y1="60" x2="180" y2="60" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,3"/><rect x="85" y="30" width="30" height="30" fill="#cbd5e1"/><text x="100" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">ARCHITECTURE NAVALE</text></svg>`;
    default:
      return `<svg viewBox="0 0 200 120" width="100%" height="100%"><rect width="200" height="120" rx="10" fill="#1e293b"/><circle cx="100" cy="60" r="30" fill="none" stroke="#38bdf8" stroke-width="6"/><path d="M85 60 L95 70 L125 40" stroke="#22c55e" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="100" y="110" fill="#94a3b8" font-size="10" text-anchor="middle">EXPERT TECHNIQUE</text></svg>`;
  }
}

// Démarrer le quiz (tirage aléatoire de 20 questions)
function startQuiz() {
  // Mélanger et prendre 20 questions
  currentQuiz = [...questionsData].sort(() => 0.5 - Math.random()).slice(0, 20);
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  homeScreen.classList.remove('active');
  quizScreen.classList.add('active');
  resultScreen.classList.remove('active');

  loadQuestion();
}

// Charger une question
function loadQuestion() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerText.textContent = `⏱️ ${timeLeft}s`;

  // Démarrer le chronomètre
  timerInterval = setInterval(() => {
    timeLeft--;
    timerText.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(-1); // Temps écoulé = pas de réponse
    }
  }, 1000);

  const q = currentQuiz[currentIndex];
  progressText.textContent = `Question ${currentIndex + 1} / 20 (${q.domain})`;
  progressBar.style.width = `${((currentIndex + 1) / 20) * 100}%`;
  questionText.textContent = q.question;

  // Afficher l'illustration SVG intégrée
  imageContainer.innerHTML = getTechnicalSvg(q.svgType);

  // Charger les options
  optionsContainer.innerHTML = '';
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => handleAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

// Gérer la réponse sélectionnée
function handleAnswer(selectedIndex) {
  clearInterval(timerInterval);

  const q = currentQuiz[currentIndex];
  const isCorrect = (selectedIndex === q.correct);

  if (isCorrect) {
    score++;
  }

  userAnswers.push({
    question: q.question,
    options: q.options,
    userSelected: selectedIndex,
    correctIndex: q.correct,
    explanation: q.explanation,
    domain: q.domain
  });

  // Désactiver tous les boutons et colorer
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('incorrect');
    }
  });

  // Passer à la question suivante après 1.5 seconde
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < 20) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

// Afficher l'écran des résultats et la correction complète
function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  scoreText.textContent = `${score} / 20`;

  let feedback = "";
  if (score >= 18) {
    feedback = "🏆 Excellent ! Niveau d'expertise technique irréprochable.";
  } else if (score >= 14) {
    feedback = "⭐ Très bien ! Solides compétences techniques confirmées.";
  } else if (score >= 10) {
    feedback = "👍 Résultat moyen. Quelques révisions techniques sont conseillées.";
  } else {
    feedback = "📚 Des notions à approfondir dans les différents domaines techniques.";
  }
  feedbackText.textContent = feedback;

  // Générer la liste détaillée des corrections
  correctionsContainer.innerHTML = '';
  userAnswers.forEach((ans, idx) => {
    const card = document.createElement('div');
    card.className = `correction-card ${ans.userSelected === ans.correctIndex ? 'correct-card' : 'incorrect-card'}`;
    
    let userAnsText = ans.userSelected >= 0 ? ans.options[ans.userSelected] : "⏱️ Temps écoulé (Aucune réponse)";
    let correctAnsText = ans.options[ans.correctIndex];

    card.innerHTML = `
      <div class="correction-header">
        <span>Q${idx + 1} [${ans.domain}]</span>
        <span>${ans.userSelected === ans.correctIndex ? '✅ Correct' : '❌ Incorrect'}</span>
      </div>
      <p class="correction-q"><strong>${ans.question}</strong></p>
      <p><strong>Votre réponse :</strong> <span class="${ans.userSelected === ans.correctIndex ? 'text-green' : 'text-red'}">${userAnsText}</span></p>
      <p><strong>Bonne réponse :</strong> <span class="text-green">${correctAnsText}</span></p>
      <div class="explanation-box">💡 <strong>Explication technique :</strong> ${ans.explanation}</div>
    `;
    correctionsContainer.appendChild(card);
  });
}

// Écouteurs d'événements
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
  resultScreen.classList.remove('active');
  homeScreen.classList.add('active');
});
