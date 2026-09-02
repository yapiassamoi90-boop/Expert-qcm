// Enregistrement du Service Worker pour PWA et mode hors-ligne
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((reg) => console.log('Service Worker enregistré !', reg.scope))
            .catch((err) => console.log('Échec Service Worker :', err));
    });
}

// Base de données complète : 20 questions par discipline avec support d'image 3D
const database = {
    hydraulique: [
        {
            question: "Quel composant permet de limiter la pression maximale dans un circuit hydraulique ?",
            image: "images/limiteur_pression.png",
            options: ["Un distributeur", "Un clapet anti-retour", "Un limiteur de pression", "Une pompe à cylindrée variable"],
            correct: 2,
            explanation: "Le limiteur de pression protège le circuit en dérivant l'excédent de fluide vers le réservoir si le seuil est dépassé."
        },
        {
            question: "Qu'est-ce que la cavitation dans une pompe hydraulique ?",
            image: "images/cavitation.png",
            options: ["Une surpression de l'huile", "La formation et l'implosion de bulles de vapeur", "Le blocage mécanique de l'arbre", "Un encrassement du filtre"],
            correct: 1,
            explanation: "La cavitation détruit les surfaces métalliques par l'implosion violente de micro-bulles dues à une dépression à l'aspiration."
        },
        {
            question: "Quel fluide est généralement utilisé dans les transmissions oléohydrauliques industrielles ?",
            image: "",
            options: ["De l'eau déminéralisée", "De l'huile minérale spéciale", "Du liquide de frein", "De l'air comprimé"],
            correct: 1,
            explanation: "L'huile minérale lubrifie les composants et transmet l'effort avec une excellente incompressibilité relative."
        },
        {
            question: "Que mesure-t-on en bars (ou Pascals) dans un réseau oléohydraulique ?",
            image: "",
            options: ["Le débit", "La pression", "La viscosité", "La température"],
            correct: 1,
            explanation: "Le bar est l'unité de mesure de la pression (force exercée par unité de surface)."
        },
        {
            question: "À quoi sert un échangeur thermique (refroidisseur) dans une centrale hydraulique ?",
            image: "",
            options: ["À réchauffer l'huile au démarrage", "À évacuer les calories excédentaires pour stabiliser la température de l'huile", "À augmenter la pression", "À filtrer les impuretés"],
            correct: 1,
            explanation: "L'énergie non convertie se transforme en chaleur ; le refroidisseur évite la surchauffe et la dégradation de l'huile."
        },
        {
            question: "Quel type de pompe a un débit réglable par modification de sa cylindrée ?",
            image: "",
            options: ["Pompe à engrenages externe", "Pompe à palettes fixes", "Pompe à cylindrée variable (axiale ou radiale)", "Pompe à vis"],
            correct: 2,
            explanation: "Les pompes à cylindrée variable permettent d'adapter le débit instantané aux besoins réels de l'installation."
        },
        {
            question: "Quel élément garantit la propreté du fluide en amont de la pompe ?",
            image: "",
            options: ["Un filtre haute pression", "Une crépine d'aspiration", "Un clapet de décharge", "Un manomètre"],
            correct: 1,
            explanation: "La crépine placée dans le réservoir protège la pompe contre l'aspiration de grosses particules."
        },
        {
            question: "Que provoque une perte de charge excessive dans une canalisation hydraulique ?",
            image: "",
            options: ["Une augmentation de la vitesse du fluide", "Une chute de pression utile", "Un refroidissement instantané", "Une augmentation du volume d'huile"],
            correct: 1,
            explanation: "Les pertes de charge dues aux frottements et aux singularités réduisent la pression disponible pour les actionneurs."
        },
        {
            question: "Quelle est la fonction d'un distributeur 4/3 (4 orifices, 3 positions) ?",
            image: "",
            options: ["Filtrer l'huile", "Orienter le flux d'huile pour commander un vérin (marche avant, arrière, neutre)", "Stocker de l'énergie", "Réguler le débit"],
            correct: 1,
            explanation: "Le distributeur dirige l'huile vers les chambres du vérin ou vers le réservoir selon sa position."
        },
        {
            question: "Comment se comporte un accumulateur oléohydraulique à gaz pré-gonflé ?",
            image: "",
            options: ["Il absorbe ou restitue du volume d'huile sous pression", "Il sert de radiateur", "Il génère de l'électricité", "Il purge l'air du circuit"],
            correct: 0,
            explanation: "L'azote comprimé stocke l'énergie hydraulique sous forme potentielle pour faire face à des pics de demande."
        },
        {
            question: "Quel composant transforme l'énergie hydraulique en énergie mécanique linéaire ?",
            image: "",
            options: ["Un moteur hydraulique", "Un vérin", "Une pompe", "Un réducteur"],
            correct: 1,
            explanation: "Le vérin produit un mouvement rectiligne (va-et-vient) grâce à la pression du fluide."
        },
        {
            question: "Quel est l'effet d'une augmentation de la température sur la viscosité de l'huile hydraulique ?",
            image: "",
            options: ["La viscosité augmente (l'huile devient plus épaisse)", "La viscosité diminue (l'huile devient plus fluide)", "La viscosité reste rigoureusement constante", "L'huile se solidifie"],
            correct: 1,
            explanation: "Plus l'huile chauffe, plus elle devient fluide, ce qui peut provoquer des fuites internes si elle devient trop visqueuse."
        },
        {
            question: "Qu'est-ce qu'un circuit hydraulique fermé par rapport à un circuit ouvert ?",
            image: "",
            options: ["Le réservoir est totalement hermétique", "Le retour du moteur hydraulique est raccordé directement à l'aspiration de la pompe", "Il n'y a pas de filtre", "La pression est toujours nulle"],
            correct: 1,
            explanation: "En circuit fermé, l'huile en sortie de récepteur retourne directement à la pompe (utilisé souvent en translation d'engins)."
        },
        {
            question: "Quel appareil permet de régler la vitesse d'un actionneur en étranglant le débit ?",
            image: "",
            options: ["Un limiteur de pression", "Un réducteur de débit (gicleur ou vanne pointeau)", "Un accumulateur", "Un manostat"],
            correct: 1,
            explanation: "Le régulateur ou réducteur de débit freine le passage de l'huile pour ralentir le vérin ou le moteur."
        },
        {
            question: "Quel risque présente une bulle d'air comprimé dans un circuit hydraulique sous haute pression ?",
            image: "",
            options: ["Rien de particulier", "Un coup de bélier et un effet 'diesel' destructeur", "Un refroidissement du système", "Une augmentation instantanée de la pureté"],
            correct: 1,
            explanation: "La compression rapide de l'air génère des pics de température extrêmes pouvant carboniser les joints et l'huile."
        },
        {
            question: "Qu'indique l'indice de viscosité (VI) d'une huile hydraulique ?",
            image: "",
            options: ["Sa résistance à l'oxydation", "Sa capacité à maintenir une viscosité stable malgré les variations de température", "Son niveau de pollution", "Sa couleur"],
            correct: 1,
            explanation: "Un indice de viscosité élevé garantit que l'huile conserve de bonnes propriétés lubrifiantes à chaud comme à froid."
        },
        {
            question: "À quoi sert un manostat (pressostat) dans un montage ?",
            image: "",
            options: ["À afficher la pression sur un cadran", "À commuter un contact électrique lorsque un seuil de pression est atteint", "À purger le circuit", "À réchauffer l'huile"],
            correct: 1,
            explanation: "Le pressostat est un capteur de sécurité ou de commande tout-ou-rien basé sur la pression."
        },
        {
            question: "Qu'appelle-t-on le drainage d'un moteur hydraulique ?",
            image: "",
            options: ["La vidange annuelle du réservoir", "La fuite interne contrôlée ramenée directement au réservoir pour protéger les joints d'arbre", "Le nettoyage du filtre", "L'injection d'air"],
            correct: 1,
            explanation: "Le drain évacue les pressions parasites accumulées dans le carter du moteur vers le réservoir."
        },
        {
            question: "Quel raccordement électrique ou hydraulique évite la cavitation à l'aspiration de la pompe ?",
            image: "",
            options: ["Une tuyauterie d'aspiration courte, de grand diamètre et propre", "Un tuyau très fin et long", "Un filtre colmaté", "Une augmentation de la vitesse de rotation de la pompe au max"],
            correct: 0,
            explanation: "Il faut faciliter l'arrivée de l'huile à l'aspiration pour éviter toute dépression excessive."
        },
        {
            question: "Quel composant assure la transformation de l'énergie hydraulique en énergie mécanique de rotation continue ?",
            image: "",
            options: ["Un vérin rotatif", "Un moteur hydraulique", "Un limiteur de débit", "Un clapet"],
            correct: 1,
            explanation: "Le moteur hydraulique délivre un couple et une vitesse de rotation continue."
        }
    ],
    electricite: [
        {
            question: "Quel appareil protège un circuit contre les surcharges et les courts-circuits ?",
            image: "images/disjoncteur.png",
            options: ["Un contacteur", "Un disjoncteur", "Un relais thermique", "Un bouton poussoir"],
            correct: 1,
            explanation: "Le disjoncteur coupe automatiquement le courant en cas de surcharge ou de court-circuit."
        },
        {
            question: "Quel est l'appareil de commande utilisé pour commuter la puissance d'un moteur asynchrone triphasé ?",
            image: "images/contacteur.png",
            options: ["Un relais thermique", "Un contacteur", "Un transformateur", "Un condensateur"],
            correct: 1,
            explanation: "Le contacteur est l'organe électromécanique conçu pour effectuer des millions de cycles de commutation de puissance."
        },
        {
            question: "Quelle est la couleur réglementaire du conducteur de protection (terre) dans une installation ?",
            image: "",
            options: ["Bleu clair", "Rouge ou Marron", "Vert et Jaune", "Noir"],
            correct: 2,
            explanation: "La bicoloration vert/jaune est la norme internationale universelle pour le fil de terre."
        },
        {
            question: "Quel équipement protège spécifiquement le moteur contre les surcharges prolongées (coupure thermique) ?",
            image: "",
            options: ["Le fusible gG", "Le relais thermique", "Le disjoncteur différentiel", "Le sectionneur"],
            correct: 1,
            explanation: "Le relais thermique utilise des bilamans qui se déforment en cas de surintensité prolongée."
        },
        {
            question: "Quelle est la tension nominale standard entre phases d'un réseau triphasé industriel en Europe ?",
            image: "",
            options: ["230 V", "400 V", "380 V (ancienne norme, remplacée par 400V)", "690 V"],
            correct: 1,
            explanation: "Le réseau triphasé industriel basse tension standard est de 400 Volts entre phases."
        },
        {
            question: "À quoi sert un transformateur de commande et de signalisation (ex: 400V / 24V) ?",
            image: "",
            options: ["À abaisser la tension pour la sécurité des circuits de commande et des opérateurs", "À élever la tension pour le moteur", "À filtrer les harmoniques", "À stocker de l'énergie"],
            correct: 0,
            explanation: "Il isole galvaniquement le circuit de commande et fournit une TBTS (Très Basse Tension de Sécurité)."
        },
        {
            question: "Quel est le rôle d'un sectionneur ?",
            image: "",
            options: ["Couper le courant en charge (court-circuit)", "Assurer la coupure visible et l'isolement électrique d'un circuit pour intervention en sécurité", "Réguler la vitesse du moteur", "Protéger contre la foudre"],
            correct: 1,
            explanation: "Le sectionneur n'a pas de pouvoir de coupure en charge (sauf s'il est combiné), il garantit une distance de sécurité visible."
        },
        {
            question: "Comment appelle-t-on le couplage des enroulements d'un moteur asynchrone sur un réseau 400V si les enroulements supportent 400V par phase ?",
            image: "",
            options: ["Couplage Étoile (Y)", "Couplage Triangle (D)", "Couplage Série", "Couplage Monophasé"],
            correct: 0,
            explanation: "Sur 400V, si le moteur est conçu 400V/690V, le couplage étoile (Y) s'impose."
        },
        {
            question: "Quel dispositif détecte les courants de défaut à la terre pour protéger les personnes (immersion/contact direct) ?",
            image: "",
            options: ["Le relais thermique", "Le disjoncteur différentiel (ex: 30mA)", "Le fusible", "Le parafoudre"],
            correct: 1,
            explanation: "Le différentiel compare le courant entrant et sortant ; s'il y a une fuite vers la terre, il déclenche instantanément."
        },
        {
            question: "Quel est le rôle du démarreur progressif (soft-starter) sur un moteur asynchrone ?",
            image: "",
            options: ["Augmenter la vitesse maximale au-delà du synchronisme", "Réduire les -coups mécaniques et les appels de courant au démarrage", "Inverser le sens de rotation en permanence", "Convertir le triphasé en continu"],
            correct: 1,
            explanation: "Il maîtrise la rampe de tension à la mise sous tension pour un démarrage en douceur."
        },
        {
            question: "Que signifie l'abréviation 'IP' dans les caractéristiques d'un coffret électrique (ex: IP55) ?",
            image: "",
            options: ["Indice de Protection (étanchéité corps solides et liquides)", "Intensité Principale", "Isolation Plastique", "Impédance Parasite"],
            correct: 0,
            explanation: "L'indice IP qualifie le niveau de protection contre la pénétration des corps solides et des liquides."
        },
        {
            question: "Quel appareil permet de mesurer l'isolement d'un câble sous haute tension (ex: 1000V) ?",
            image: "",
            options: ["Un multimètre classique", "Un ohmmètre standard", "Un mégohmmètre (contrôleur d'isolement)", "Une pince ampèremétrique"],
            correct: 2,
            explanation: "Le mégohmmètre applique une tension continue élevée pour tester la qualité diélectrique des isolants."
        },
        {
            question: "Qu'est-ce qu'un variateur de vitesse pour moteur asynchrone ?",
            image: "",
            options: ["Un simple rhéostat à résistance", "Un convertisseur de fréquence pilotant la tension et la fréquence (U/f)", "Un disjoncteur thermique", "Un transformateur variable"],
            correct: 1,
            explanation: "Il redresse le courant alternatif en continu, puis le recrée à fréquence variable pour régler la vitesse du moteur."
        },
        {
            question: "Quel est le symbole littéral normalisé d'un contacteur de puissance dans un schéma électrique ?",
            image: "",
            options: ["KM", "KA", "FR", "Q"],
            correct: 0,
            explanation: "KM désigne un pré-contacteur ou contacteur de puissance (K = élément de commande, M = moteur/puissance)."
        },
        {
            question: "Quel fusible utilise-t-on spécifiquement pour la protection des circuits moteurs (contre les courts-circuits en tolérant l'appel de démarrage) ?",
            image: "",
            options: ["Fusible type gG (général)", "Fusible type aM (accompagnement moteur)", "Fusible ultra-rapide", "Fusible domestique céramique"],
            correct: 1,
            explanation: "Les fusibles aM protègent contre les courts-circuits tout en laissant passer les forts pics transitoires de démarrage moteur."
        },
        {
            question: "Comment s'effectue l'inversion du sens de rotation d'un moteur asynchrone triphasé ?",
            image: "",
            options: ["En inversant deux des trois phases d'alimentation", "En coupant le fil de terre", "En changeant le sens du courant continu", "En augmentant la tension"],
            correct: 0,
            explanation: "Inverser deux phases permute le champ tournant statorique et inverse le sens du rotor."
        },
        {
            question: "À quoi sert un bouton d'arrêt d'urgence 'coup de poing' ?",
            image: "",
            options: ["À éteindre l'armoire le soir", "À couper immédiatement l'alimentation de sécurité par contact à ouverture positive (NF)", "À réinitialiser les défauts", "À tester l'éclairage"],
            correct: 1,
            explanation: "Il coupe la puissance de façon prioritaire et mécanique pour parer à tout danger imminent."
        },
        {
            question: "Quelle est l'unité de la puissance active en électricité ?",
            image: "",
            options: ["Le Volt-Ampère (VA)", "Le Watt (W)", "Le Var (VAr)", "Le Joule (J)"],
            correct: 1,
            explanation: "La puissance active réellement consommée s'exprime en Watts."
        },
        {
            question: "Qu'est-ce que le facteur de puissance (cos phi) dans une installation industrielle ?",
            image: "",
            options: ["Le rapport entre la puissance active et la puissance apparente", "Le rendement du moteur", "La résistance interne des câbles", "La chute de tension maximale"],
            correct: 0,
            explanation: "Un cos phi faible indique une consommation excessive d'énergie réactive, nécessitant souvent une batterie de condensateurs."
        },
        {
            question: "Quel est l'appareil de mesure idéal pour mesurer un courant en fonctionnement sans couper le fil ?",
            image: "",
            options: ["Un voltmètre", "Une pince ampèremétrique", "Un wattmètre", "Un fréquencemètre"],
            correct: 1,
            explanation: "La pince ampèremétrique mesure le champ magnétique généré par le courant circulant dans le conducteur."
        }
    ],
    mecanique: [
        {
            question: "Sur un engin de chantier, à quoi sert le convertisseur de couple ?",
            image: "images/convertisseur.png",
            options: ["À changer les vitesses automatiquement", "À transmettre le mouvement de façon hydraulique et souple", "À refroidir le moteur", "À freiner les roues"],
            correct: 1,
            explanation: "Il remplace l'embrayage mécanique et permet une multiplication du couple moteur à l'arrêt ou en charge."
        },
        {
            question: "Quel est le rôle principal du turbocompresseur sur un moteur thermique moderne ?",
            image: "images/turbo.png",
            options: ["Réduire la cylindrée du moteur", "Gaver les cylindres en air comprimé grâce aux gaz d'échappement pour augmenter la puissance", "Refroidir le liquide de refroidissement", "Filtrer l'huile moteur"],
            correct: 1,
            explanation: "Il récupère l'énergie des gaz d'échappement pour comprimer l'air admis, optimisant la combustion."
        },
        {
            question: "Quel type de train epicycloïdal trouve-t-on fréquemment dans les réducteurs de chenilles d'engins ?",
            image: "",
            options: ["Un train simple à pignons coniques", "Un train planétaire (solaire, porte-satellites, couronne)", "Un système à chaîne et pignons", "Une courroie crantée"],
            correct: 1,
            explanation: "Le train épicycloïdal permet d'obtenir des rapports de réduction élevés sous un encombrement très compact."
        },
        {
            question: "Quelle est la fonction du différentiel sur un essieu de véhicule ?",
            image: "",
            options: ["Bloquer les roues motrices dans les virages", "Permettre aux roues motrices gauche et droite de tourner à des vitesses différentes dans les courbes", "Augmenter la vitesse maximale", "Réduire la consommation de carburant"],
            correct: 1,
            explanation: "Dans un virage, la roue extérieure parcourt plus de chemin que l'intérieur ; le différentiel compense cet écart."
        },
        {
            question: "Quel fluide lubrifie généralement la boîte de vitesses mécanique et les ponts d'un véhicule ?",
            image: "",
            options: ["Huile moteur 5W30", "Huile de transmission spécifique (ex: SAE 80W90 ou ATF)", "Liquide de refroidissement", "Graisse universelle fluide"],
            correct: 1,
            explanation: "Les engrenages soumis à de fortes pressions de contact nécessitent des additifs spécifiques (EP - Extreme Pression)."
        },
        {
            question: "À quoi sert le système de post-traitement SCR (BlueAd / AdBlue) sur les engins récents ?",
            image: "",
            options: ["Réduire les émissions d'oxydes d'azote (NOx) à l'échappement", "Nettoyer le filtre à particules", "Augmenter le couple à bas régime", "Refroidir l'intercooler"],
            correct: 0,
            explanation: "L'injection d'AdBlue dans les gaz d'échappement provoque une réaction chimique transformant les NOx en azote et vapeur d'eau."
        },
        {
            question: "Quel composant d'un moteur thermique assure la liaison entre le piston et le vilebrequin ?",
            image: "",
            options: ["L'arbre à cames", "La bielle", "La soupape", "Le collecteur"],
            correct: 1,
            explanation: "La bielle transforme le mouvement alternatif du piston en mouvement rotatif au niveau du vilebrequin."
        },
        {
            question: "Qu'appelle-t-on le 'jeu aux soupapes' et pourquoi est-il nécessaire ?",
            image: "",
            options: ["Un défaut d'usinage", "Un espace libre indispensable pour compenser la dilatation thermique des pièces en chauffant", "L'espace pour l'injecteur", "Le jeu dans la courroie de distribution"],
            correct: 1,
            explanation: "À chaud, les métaux se dilatent ; sans jeu, les soupapes resteraient entrouvertes."
        },
        {
            question: "Quel type de freinage utilise-t-on principalement sur les poids lourds et engins lourds modernes ?",
            image: "",
            options: ["Freinage tout hydraulique simple", "Freinage pneumatique (air comprimé) ou hydropneumatique", "Freinage uniquement par câble", "Freinage magnétique de vélo"],
            correct: 1,
            explanation: "L'air comprimé permet de stocker une énorme énergie de commande et de sécurité (frein de parc à ressorts)."
        },
        {
            question: "Quel est le rôle du thermostat (calorstat) dans le circuit de refroidissement ?",
            image: "",
            options: ["Laisser passer l'eau vers le radiateur uniquement lorsque le moteur a atteint sa température optimale de fonctionnement", "Refroidir l'huile moteur", "Actionner la pompe à eau", "Mesurer la température au tableau de bord"],
            correct: 0,
            explanation: "Il régule la température en bloquant la circulation vers le radiateur à froid pour accélérer la montée en température."
        },
        {
            question: "Qu'est-ce qu'un système de direction hydrostatique (orbrol) sur un engin de chantier ?",
            image: "",
            options: ["Une direction assistée par câble", "Une direction entièrement commandée par circuit hydraulique sans liaison mécanique rigide volant/roues", "Une direction manuelle dure", "Un essieu fixe"],
            correct: 1,
            explanation: "Le volant actionne un doseur (distributeur rotatif) qui envoie l'huile vers les vérins de direction."
        },
        {
            question: "Quelle est l'utilité du filtre à particules (FAP) sur les moteurs diesel ?",
            image: "",
            options: ["Retenir les suies et imbrûlés émis par la combustion", "Filtrer l'air d'admission", "Filtrer le carburant", "Refroidir les gaz d'échappement"],
            correct: 0,
            explanation: "Il piège les suies polluantes avant de les détruire périodiquement par régénération (montée en température)."
        },
        {
            question: "Quel organe mécanique assure la distribution (ouverture/fermeture des soupapes au bon moment) ?",
            image: "",
            options: ["Le volant moteur", "L'arbre à cames", "Le carter d'huile", "Le vilebrequin"],
            correct: 1,
            explanation: "L'arbre à cames, entraîné par le vilebrequin, actionne les soupapes via des poussoirs ou basculeurs."
        },
        {
            question: "Quel est l'effet d'une usure excessive des axes et bagues de balancier/articulaton sur un engin ?",
            image: "",
            options: ["Du jeu mécanique, des bruits et un manque de précision dans les mouvements", "Une augmentation de la puissance moteur", "Un blocage complet du circuit hydraulique", "Une baisse de la tension de batterie"],
            correct: 0,
            explanation: "Le jeu provoque des chocs destructeurs sur la structure métallique et l'imprécision du godet/flèche."
        },
        {
            question: "Que signifie 'Common Rail' (Rampe Commune) sur un système d'injection diesel ?",
            image: "",
            options: ["Une pompe d'injection mécanique par cylindre", "Un accumulateur haute pression commun qui alimente tous les injecteurs pilotés électroniquement", "Un système d'injection d'essence basse pression", "Un circuit de lubrification du turbo"],
            correct: 1,
            explanation: "La rampe commune maintient le carburant à très haute pression, permettant des injections multiples et précises par cycle."
        },
        {
            question: "Quel est le rôle du volant moteur sur un moteur thermique ?",
            image: "",
            options: ["Régulariser la rotation du vilebrequin en stockant de l'énergie cinétique lors du temps moteur et l'restituer lors des temps résistants", "Entraîner la pompe à eau", "Supprimer les vibrations de l'échappement", "Changer les rapports de boîte"],
            correct: 0,
            explanation: "Il régularise les à-coups des explosions grâce à son inertie."
        },
        {
            question: "Qu'est-ce qu'un pont autobloquant ou à glissement limité ?",
            image: "",
            options: ["Un pont dont les roues ne peuvent jamais tourner", "Un différentiel qui limite le patinage d'une roue en transférant du couple sur la roue ayant de l'adhérence", "Un frein de stationnement automatique", "Un réducteur de vitesse planétaire"],
            correct: 1,
            explanation: "Il évite qu'une roue dans le vide ne prenne toute la puissance en patinant."
        },
        {
            question: "Quel est le danger d'une surchauffe prolongée sur un moteur thermique (culasse en aluminium) ?",
            image: "",
            options: ["Une économie de carburant", "Un grippage des pistons et un voilement/fissuration de la culasse", "Une augmentation de l'adhérence", "Un nettoyage automatique du moteur"],
            correct: 1,
            explanation: "La déformation thermique de la culasse détruit l'étanchéité du joint de culasse et provoque des casses majeures."
        },
        {
            question: "Quel est le rôle du graissage par carter sec sur certains moteurs hautes performances ou engins en pente raide ?",
            image: "",
            options: ["Supprimer l'huile moteur", "Récupérer l'huile par des pompes de reprise pour éviter le déjaugeage dans les fortes inclinaisons", "Refroidir les pneus", "Alimenter le circuit hydraulique de travail"],
            correct: 1,
            explanation: "Le carter sec stocke l'huile dans un réservoir séparé, garantissant une lubrification constante peu importe l'inclinaison de l'engin."
        },
        {
            question: "À quoi sert un réducteur planétaire de moyeu de roue sur un engin lourd ?",
            image: "",
            options: ["À multiplier la vitesse finale", "À démultiplier la vitesse et multiplier le couple transmis aux roues pour soulager les arbres", "À purger les freins", "À gonfler les pneus"],
            correct: 1,
            explanation: "Placé directement dans la roue, il encaisse les forts efforts de couple nécessaires pour déplacer les charges lourdes."
        }
    ],
    navale: [
        {
            question: "En mécanique navale, qu'appelle-t-on le 'vireur' de l'arbre porte-hélice ou du moteur principal ?",
            image: "images/vireur.png",
            options: ["Une pompe de cale de secours", "Un dispositif pour faire tourner lentement le moteur ou l'arbre lors des maintenances", "Un système de gouvernail d'urgence", "Un filtre à carburant lourd"],
            correct: 1,
            explanation: "Le vireur sert à positionner le moteur ou l'arbre en sécurité avant démarrage ou intervention."
        },
        {
            question: "Quel est le rôle des anodes sacrificielles (en zinc ou aluminium) sur la coque et les appendices immergés ?",
            image: "images/anodes.png",
            options: ["Empêcher les algues de pousser", "Protéger les métaux nobles (acier, bronze) contre la corrosion galvanique en se dissolvant à leur place", "Lester le navire pour l'équilibre", "Améliorer l'hydrodynamisme"],
            correct: 1,
            explanation: "Par différence de potentiel électrochimique, l'anode s'oxyde préférentiellement pour préserver la coque et l'hélice."
        },
        {
            question: "Quel système assure le refroidissement principal des moteurs marins à bord d'un navire ?",
            image: "",
            options: ["Un circuit d'eau douce interne refroidi par un échangeur traversé par de l'eau de mer", "Uniquement de l'eau de mer circulant dans tout le moteur", "De l'air pulsé", "Un radiateur de voiture classique sur le pont"],
            correct: 0,
            explanation: "L'eau de mer corrosive ne circule pas directement dans le bloc moteur ; un échangeur utilise l'eau de mer pour refroidir l'eau douce interne."
        },
        {
            question: "Qu'est-ce que le 'Heavy Fuel Oil' (HFO - Fioul lourd) utilisé par la grande marine marchande ?",
            image: "",
            options: ["De l'essence super", "Un résidu lourd de distillation du pétrole nécessitant d'être réchauffé pour être pompé et injecté", "De l'huile de cuisine recyclée", "Du kérosène d'aviation"],
            correct: 1,
            explanation: "Le HFO est économique mais visqueux ; il doit être chauffé à haute température pour devenir fluide et être pulvérisé."
        },
        {
            question: "Quel équipement de la tranche énergie sert à purifier le fioul ou l'huile de lubrification des impuretés et de l'eau ?",
            image: "",
            options: ["Un séparateur centrifuge (centrifugeuse / purificateur)", "Un simple filtre à café", "Un décanteur statique de pont", "Un condenseur"],
            correct: 0,
            explanation: "La centrifugeuse utilise la force centrifuge pour séparer l'eau et les boues de l'huile ou du combustible."
        },
        {
            question: "À quoi sert un presse-étoupe (ou joint tournant d'étanchéité) sur l'arbre porte-hélice au passage de la coque ?",
            image: "",
            options: ["Empêcher l'eau de mer d'envahir la salle des machines tout en laissant tourner l'arbre", "Freiner l'hélice", "Lubrifier les pales", "Fixer le safran"],
            correct: 0,
            explanation: "Le presse-étoupe ou joint mécanique étanche assure la transition entre l'arbre en rotation et la coque immergée."
        },
        {
            question: "Qu'appelle-t-on le 'pas variable' d'une hélice marine ?",
            image: "",
            options: ["La distance entre deux navires", "Un système permettant d'orienter l'angle des pales de l'hélice pour inverser la poussée sans inverser le sens de rotation du moteur", "La vitesse du vent", "La profondeur d'immersion"],
            correct: 1,
            explanation: "Modifier l'orientation des pales permet de moduler la poussée (marche avant, arrière, neutre) avec un moteur tournant à régime constant."
        },
        {
            question: "Quel est le rôle d'un propulseur d'étrave (bow-thruster) sur un navire ?",
            image: "",
            options: ["Avancer plus vite en ligne droite", "Permettre de faire pivoter l'avant du navire transversalement pour les manœuvres de port", "Produire de l'électricité de secours", "Chauffer les cabines"],
            correct: 1,
            explanation: "Le propulseur transversal (tunnel d'étrave) facilite grandement les accostages et les manœuvres dans les espaces restreints."
        },
        {
            question: "Que mesure-t-on avec un viscosimètre en lien avec les moteurs de propulsion marine au HFO ?",
            image: "",
            options: ["La viscosité du carburant pour réguler sa température de réchauffage avant injection", "La pureté de l'eau de mer", "La vitesse de rotation de l'hélice", "La pression d'huile de graissage"],
            correct: 0,
            explanation: "La viscosité du fioul lourd doit être rigoureusement régulée (généralement autour de 10-15 cSt) pour garantir une bonne pulvérisation par les injecteurs."
        },
        {
            question: "Quel dispositif de sécurité incendie est obligatoire et très utilisé dans la tranche des machines navales ?",
            image: "",
            options: ["Un système d'extinction fixe au gaz (ex: CO2 ou mist d'eau haute pression)", "Des seaux de sable", "Un tuyau d'arrosage de jardin", "Des extincteurs à eau pulvérisée uniquement"],
            correct: 0,
            explanation: "En cas d'incendie de nappe de carburant en machine, le local est confiné et noyé au CO2 ou par un système d'eau brumisée."
        },
        {
            question: "Qu'est-ce qu'un dessalinisateur (ou bouilleur) à bord d'un navire ?",
            image: "",
            options: ["Un appareil pour purifier le fioul", "Un équipement produisant de l'eau douce à partir de l'eau de mer (par osmose inverse ou évaporation)", "Un système de climatisation", "Une pompe de cale"],
            correct: 1,
            explanation: "Il assure l'autonomie du navire en eau douce pour l'équipage et les circuits techniques."
        },
        {
            question: "Quel est le rôle du circuit de cale (bilge system) sur un navire ?",
            image: "",
            options: ["Pomper et rejeter ou traiter les eaux de condensation et de fuites accumulées au point bas de la coque", "Remplir les ballasts", "Alimenter le moteur en eau de mer", "Refroidir les échappements"],
            correct: 0,
            explanation: "Le système de puisards et pompes de cale évacue l'eau accumulée en fond de cale en respectant les normes antipolluants (séparateur d'eaux huileuses)."
        },
        {
            question: "Qu'appelle-t-on le 'gouvernement' ou appareil à gouverner d'un navire ?",
            image: "",
            options: ["Le système de pilotage automatique par satellite", "L'ensemble mécanique/hydraulique actionnant le safran pour orienter le navire", "La passerelle de navigation", "Le système de ventilation"],
            correct: 1,
            explanation: "L'appareil à gouverner (souvent oléohydraulique à double vérin/secteur) oriente le safran pour diriger le navire."
        },
        {
            question: "Pourquoi les gaz d'échappement des moteurs marins traversent-ils souvent une chaudière de récupération (économiseur) ?",
            image: "",
            options: ["Pour faire du bruit", "Pour produire de la vapeur d'eau utile à bord (chauffage, réchauffage du fioul, eau douce) en récupérant l'énergie perdue", "Pour refroidir le moteur à la place de l'eau de mer", "Pour augmenter la vitesse du navire"],
            correct: 1,
            explanation: "C'est un système de cogénération très efficace sur les grands navires pour économiser du combustible."
        },
        {
            question: "Qu'est-ce que la 'lignes d'arbres' d'un navire ? ",
            image: "",
            options: ["L'ensemble des arbres de transmission reliant le moteur principal à l'hélice", "Les mâts et gréements", "Les tuyauteries d'incendie", "Les câbles électriques haute tension"],
            correct: 0,
            explanation: "La ligne d'arbres transmet le couple colossal du moteur vers l'hélice tout en encaissant la poussée axiale via un palier de buttée."
        },
        {
            question: "Quel est le risque lié à la présence d'eau dans le fioul lourd ou diesel marin avant son admission dans les moteurs ?",
            image: "",
            options: ["Rien, cela nettoie le moteur", "Des ratés de combustion, une perte de puissance, voire l'extinction du moteur et des dégâts aux injecteurs", "Une baisse de la température d'échappement", "Un surcroît de puissance"],
            correct: 1,
            explanation: "L'eau perturbe l'inflammabilité et crée des chocs thermiques ou de la corrosion dans les équipements d'injection."
        },
        {
            question: "Qu'est-ce qu'un séparateur d'eau de cale (OWS - Oily Water Separator) ?",
            image: "",
            options: ["Un filtre qui rejette toute l'eau directement par-dessus bord", "Un équipement réglementaire filtrant les eaux de cale pour garantir que les rejets à la mer respectent la limite légale de 15 ppm d'hydrocarbures", "Une pompe à incendie", "Un système de climatisation"],
            correct: 1,
            explanation: "Il protège l'environnement marin en interceptant les hydrocarbures avant tout rejet d'eau de cale autorisé."
        },
        {
            question: "Quelle est la fonction d'un turbo-soufflante de suralimentation sur un gros moteur diésel marin 2-temps lent ?",
            image: "",
            options: ["Fournir un balayage et une pression d'air d'admission massifs indispensables à la combustion de grandes quantités de HFO", "Refroidir l'huile de graissage", "Assurer la ventilation de la salle des machines", "Démarrer le moteur à l'air comprimé"],
            correct: 0,
            explanation: "Les moteurs 2-temps lents marins dépendent entièrement de leurs turbos pour balayer les gaz brûlés et remplir les grands cylindres."
        },
        {
            question: "Qu'est-ce que le système de ballast d'un navire ?",
            image: "",
            options: ["Des réservoirs d'eau de mer remplis ou vidangés pour ajuster l'immersion, la gîte et l'assiette du navire", "Le système de carburant de secours", "Les ancres et chaînes", "Le système de stabilisation anti-roulis par ailerons"],
            correct: 0,
            explanation: "Les ballasts permettent de stabiliser et d'équilibrer le navire selon sa cargaison et son chargement."
        },
        {
            question: "Quel organe mécanique encaisse la poussée axiale générée par la rotation de l'hélice et la transmet à la structure de la coque ?",
            image: "",
            options: ["Le palier de butée (thrust bearing)", "Le turbo", "Le volant moteur", "Le safran"],
            correct: 0,
            explanation: "La poussée de l'hélice pousse le navire vers l'avant ; cette force énorme est absorbée par le palier de butée solidement fixé au chassis du navire."
        }
    ]
};

let currentDomain = "";
let questionsList = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 30;
let timerInterval;

function startQuiz(domain) {
    currentDomain = domain;
    questionsList = database[domain];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('domain-title').innerText = domain.toUpperCase();

    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    startTimer();

    const q = questionsList[currentQuestionIndex];
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1} / ${questionsList.length}`;
    document.getElementById('question-text').innerText = q.question;

    // Gestion de l'image 3D si elle existe
    const imgContainer = document.getElementById('image-container');
    const imgElement = document.getElementById('question-img');
    if (q.image && q.image.trim() !== "") {
        imgElement.src = q.image;
        imgContainer.classList.remove('hidden');
    } else {
        imgContainer.classList.add('hidden');
    }

    // Barre de progression
    let progressPercent = ((currentQuestionIndex) / questionsList.length) * 100;
    document.getElementById('progress').style.width = progressPercent + "%";

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('next-btn').classList.add('hidden');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectOption(-1); // -1 indique le temps écoulé (pas de réponse)
        }
    }, 1000);
}

function selectOption(selectedIndex) {
    clearInterval(timerInterval);

    const q = questionsList[currentQuestionIndex];
    userAnswers.push({
        question: q.question,
        options: q.options,
        userSelection: selectedIndex,
        correctSelection: q.correct,
        explanation: q.explanation
    });

    if (selectedIndex === q.correct) {
        score++;
    }

    // Désactiver les boutons et colorer les choix
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.correct) {
            btn.style.background = "var(--accent)"; // Vert bonne réponse
        } else if (index === selectedIndex) {
            btn.style.background = "var(--danger)"; // Rouge mauvaise réponse
        }
    });

    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    if (currentQuestionIndex === questionsList.length - 1) {
        nextBtn.innerText = "Voir les résultats et corrections";
    } else {
        nextBtn.innerText = "Question Suivante";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsList.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const total = questionsList.length;
    const percentage = (score / total) * 100;
    document.getElementById('final-score').innerText = `Votre score : ${score} / ${total} (${percentage.toFixed(0)}%)`;

    // Évaluation dynamique selon les performances
    let evaluationText = "";
    if (percentage === 100) {
        evaluationText = "🌟 Excellent ! Maîtrise parfaite et irréprochable du domaine technique. C'est un travail de maître !";
    } else if (percentage >= 75) {
        evaluationText = "👍 Très bien ! Solide niveau technique. Quelques révisions mineures sur les détails et ce sera parfait.";
    } else if (percentage >= 50) {
        evaluationText = "⚠️ Résultat moyen. Des lacunes persistent sur certains points clés, il est nécessaire d'approfondir.";
    } else {
        evaluationText = "❌ Travail insuffisant. Une reprise complète des bases fondamentales de cette spécialité s'impose.";
    }
    document.getElementById('ai-evaluation').innerText = evaluationText;

    // Affichage des réponses cachées et corrections détaillées
    const correctionContainer = document.getElementById('correction-container');
    correctionContainer.innerHTML = "";

    userAnswers.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'correction-item';
        
        let userAnwText = item.userSelection !== -1 ? item.options[item.userSelection] : "Temps écoulé (Aucune réponse)";
        let correctAnwText = item.options[item.correctSelection];
        let isCorrect = item.userSelection === item.correctSelection;

        div.innerHTML = `
            <strong>Q${idx+1}: ${item.question}</strong><br>
            <span style="color: ${isCorrect ? 'var(--accent)' : 'var(--danger)'}">Ta réponse : ${userAnwText}</span><br>
            <span>Bonne réponse : <strong>${correctAnwText}</strong></span><br>
            <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;">💡 <em>Explication : ${item.explanation}</em></p>
        `;
        correctionContainer.appendChild(div);
    });
}

function resetApp() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}
