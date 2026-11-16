(() => {
  const registrationVersions = {
  "zh": {
    "name": "中文",
    "headers": [
      "参数名称",
      "参数范围",
      "具体作用"
    ],
    "count": "15 项参数",
    "moduleTitle": "定位/配准模块",
    "moduleIntro": "定位组通过不同模块分别查找瓶底、液面和瓶体左右边缘，并提供对应的配准基准。",
    "moduleHeaders": [
      "模块名称",
      "具体作用"
    ],
    "moduleCount": "7 项功能模块",
    "modules": [
      [
        "bottom_location",
        "查找瓶底位置，作为检测区域的定位基准"
      ],
      [
        "bottom_register",
        "利用瓶底特征计算配准补偿"
      ],
      [
        "level_location",
        "查找液面位置，提供液面相关区域的定位基准"
      ],
      [
        "side_left_location",
        "查找瓶体左侧边缘位置"
      ],
      [
        "side_left_register",
        "利用瓶体左侧边缘计算配准补偿"
      ],
      [
        "side_right_location",
        "查找瓶体右侧边缘位置"
      ],
      [
        "side_right_register",
        "利用瓶体右侧边缘计算配准补偿"
      ]
    ],
    "rows": [
      [
        "开启",
        "开关（未勾选／勾选）",
        "定位模块总开关；勾选时启用，未勾选时关闭"
      ],
      [
        "扫描/瓶沿",
        "开关（未勾选／勾选）",
        "扫描定位开关；勾选后根据瓶沿特征寻找定位边缘"
      ],
      [
        "sbOrbX",
        "开关（未勾选／勾选）",
        "扫描轴选择开关；勾选主要沿X方向扫描，未勾选主要沿Y方向扫描"
      ],
      [
        "sbInc",
        "开关（未勾选／勾选）",
        "扫描方向选择开关；勾选按坐标增大方向扫描，未勾选按坐标减小方向扫描"
      ],
      [
        "阈值",
        "整数，可正可负",
        "边缘灰度差门槛；绝对值越大，要求明暗变化越明显"
      ],
      [
        "sbrd var",
        "非负整数",
        "允许定位边界波动的范围；值越大，对不平整边缘的容忍度越高"
      ],
      [
        "参考值-位置偏移",
        "整数（像素）",
        "从检测边缘偏移指定距离后获取参考灰度"
      ],
      [
        "sszmax.width / sszmax.height",
        "正整数（像素）",
        "限制边缘候选区域允许的最大宽度和高度"
      ],
      [
        "len min",
        "正整数（像素）",
        "有效边缘的最小连续长度；调大可过滤短小干扰"
      ],
      [
        "定位偏移",
        "整数（像素）",
        "在找到边缘后对最终定位位置进行补偿"
      ],
      [
        "选择区域",
        "x、y、宽、高",
        "设置定位模块的搜索区域"
      ],
      [
        "rthr ratio",
        "0–1小数",
        "定位结果的有效比例门槛；值越大判定越严格"
      ],
      [
        "X方向最大晃动值",
        "整数（像素），-1关闭",
        "限制X方向允许的最大定位波动"
      ],
      [
        "Y方向最大晃动值",
        "整数（像素），-1关闭",
        "限制Y方向允许的最大定位波动"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "整数（像素）",
        "分别补偿配准区域的四个边界"
      ]
    ]
  },
  "en": {
    "name": "English",
    "headers": [
      "Parameter",
      "Range",
      "Function"
    ],
    "count": "15 parameters",
    "moduleTitle": "Localization & Registration Modules",
    "moduleIntro": "The location group uses separate modules to locate the bottle bottom, liquid level, and left/right bottle edges and to provide registration references.",
    "moduleHeaders": [
      "Module",
      "Function"
    ],
    "moduleCount": "7 functional modules",
    "modules": [
      [
        "bottom_location",
        "Locates the bottle bottom as the localization reference for detection regions"
      ],
      [
        "bottom_register",
        "Calculates registration compensation from bottle-bottom features"
      ],
      [
        "level_location",
        "Locates the liquid level for liquid-level-related regions"
      ],
      [
        "side_left_location",
        "Locates the left edge of the bottle"
      ],
      [
        "side_left_register",
        "Calculates registration compensation from the left bottle edge"
      ],
      [
        "side_right_location",
        "Locates the right edge of the bottle"
      ],
      [
        "side_right_register",
        "Calculates registration compensation from the right bottle edge"
      ]
    ],
    "rows": [
      [
        "Enable",
        "Checkbox (unchecked / checked)",
        "Main localization-module switch; checked enables the module and unchecked disables it"
      ],
      [
        "Enable edge scanning",
        "Checkbox (unchecked / checked)",
        "Scan-location switch; when checked, the bottle-rim feature is used to find the location edge"
      ],
      [
        "sbOrbX",
        "Checkbox (unchecked / checked)",
        "Scan-axis switch; checked mainly scans along X and unchecked mainly scans along Y"
      ],
      [
        "sbInc",
        "Checkbox (unchecked / checked)",
        "Scan-direction switch; checked scans toward increasing coordinates and unchecked toward decreasing coordinates"
      ],
      [
        "Edge difference threshold",
        "Signed integer",
        "Gray-difference threshold for an edge; a larger absolute value requires stronger contrast"
      ],
      [
        "sbrd var",
        "Non-negative integer",
        "Allowed boundary variation; a larger value tolerates a less even edge"
      ],
      [
        "Reference sampling offset",
        "Integer (pixels)",
        "Samples the reference gray value at the specified offset from the detected edge"
      ],
      [
        "sszmax.width / sszmax.height",
        "Positive integer (pixels)",
        "Limits the maximum width and height of an edge candidate"
      ],
      [
        "len min",
        "Positive integer (pixels)",
        "Minimum continuous edge length; increasing it filters short interference"
      ],
      [
        "Localization offset",
        "Integer (pixels)",
        "Offsets the final position after the edge is found"
      ],
      [
        "Select region",
        "x, y, width, height",
        "Sets the search region for the localization module"
      ],
      [
        "rthr ratio",
        "Decimal 0–1",
        "Valid-result ratio threshold; a larger value makes validation stricter"
      ],
      [
        "Maximum localization variation X",
        "Integer (pixels), -1 = Off",
        "Limits the maximum allowed localization variation along X"
      ],
      [
        "Maximum localization variation Y",
        "Integer (pixels), -1 = Off",
        "Limits the maximum allowed localization variation along Y"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Integer (pixels)",
        "Offsets the four boundaries of the registration region"
      ]
    ]
  },
  "fr": {
    "name": "Français",
    "headers": [
      "Paramètre",
      "Plage",
      "Fonction"
    ],
    "count": "15 paramètres",
    "moduleTitle": "Modules de localisation et de recalage",
    "moduleIntro": "Le groupe utilise des modules distincts pour localiser le fond, le niveau du liquide et les bords gauche/droit du flacon, puis fournir les références de recalage.",
    "moduleHeaders": [
      "Module",
      "Fonction"
    ],
    "moduleCount": "7 modules fonctionnels",
    "modules": [
      [
        "bottom_location",
        "Localise le fond du flacon comme référence de localisation des zones de détection"
      ],
      [
        "bottom_register",
        "Calcule la compensation de recalage à partir du fond du flacon"
      ],
      [
        "level_location",
        "Localise le niveau du liquide pour les zones associées"
      ],
      [
        "side_left_location",
        "Localise le bord gauche du flacon"
      ],
      [
        "side_left_register",
        "Calcule la compensation de recalage à partir du bord gauche"
      ],
      [
        "side_right_location",
        "Localise le bord droit du flacon"
      ],
      [
        "side_right_register",
        "Calcule la compensation de recalage à partir du bord droit"
      ]
    ],
    "rows": [
      [
        "Activer",
        "Case à cocher (décochée / cochée)",
        "Interrupteur principal du module ; coché pour l’activer, décoché pour le désactiver"
      ],
      [
        "Balayage / bord du flacon",
        "Case à cocher (décochée / cochée)",
        "Active le balayage du bord du flacon lorsque la case est cochée"
      ],
      [
        "sbOrbX",
        "Case à cocher (décochée / cochée)",
        "Sélectionne l’axe ; coché pour X, décoché pour Y"
      ],
      [
        "sbInc",
        "Case à cocher (décochée / cochée)",
        "Sélectionne le sens ; coché vers les coordonnées croissantes, décoché vers les coordonnées décroissantes"
      ],
      [
        "Seuil de différence",
        "Entier signé",
        "Seuil d’écart de gris du bord ; une valeur absolue élevée exige un contraste plus marqué"
      ],
      [
        "sbrd var",
        "Entier non négatif",
        "Variation de bord autorisée ; une valeur élevée tolère un bord moins régulier"
      ],
      [
        "Décalage de position de référence",
        "Entier (pixels)",
        "Échantillonne le gris de référence à la distance indiquée du bord détecté"
      ],
      [
        "sszmax.width / sszmax.height",
        "Entier positif (pixels)",
        "Limite la largeur et la hauteur maximales d’un bord candidat"
      ],
      [
        "len min",
        "Entier positif (pixels)",
        "Longueur continue minimale du bord ; une valeur élevée filtre les petites perturbations"
      ],
      [
        "Décalage de localisation",
        "Entier (pixels)",
        "Compense la position finale après détection du bord"
      ],
      [
        "Définir la zone",
        "x, y, largeur, hauteur",
        "Définit la zone de recherche du module de localisation"
      ],
      [
        "rthr ratio",
        "Décimal de 0 à 1",
        "Seuil de proportion de résultats valides ; une valeur élevée est plus stricte"
      ],
      [
        "Oscillation maximale X",
        "Entier (pixels), -1 = désactivé",
        "Limite la variation maximale de localisation selon X"
      ],
      [
        "Oscillation maximale Y",
        "Entier (pixels), -1 = désactivé",
        "Limite la variation maximale de localisation selon Y"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Entier (pixels)",
        "Compense les quatre limites de la zone de recalage"
      ]
    ]
  },
  "ru": {
    "name": "Русский",
    "headers": [
      "Параметр",
      "Диапазон",
      "Назначение"
    ],
    "count": "15 параметров",
    "moduleTitle": "Модули локализации и совмещения",
    "moduleIntro": "Отдельные модули находят дно, уровень жидкости и левый/правый край флакона, а также формируют опорные данные для совмещения.",
    "moduleHeaders": [
      "Модуль",
      "Назначение"
    ],
    "moduleCount": "7 функциональных модулей",
    "modules": [
      [
        "bottom_location",
        "Находит дно флакона как опорную позицию областей контроля"
      ],
      [
        "bottom_register",
        "Рассчитывает компенсацию совмещения по признакам дна"
      ],
      [
        "level_location",
        "Находит уровень жидкости для связанных областей"
      ],
      [
        "side_left_location",
        "Находит левый край флакона"
      ],
      [
        "side_left_register",
        "Рассчитывает компенсацию совмещения по левому краю"
      ],
      [
        "side_right_location",
        "Находит правый край флакона"
      ],
      [
        "side_right_register",
        "Рассчитывает компенсацию совмещения по правому краю"
      ]
    ],
    "rows": [
      [
        "Включить",
        "Флажок (снят / установлен)",
        "Главный переключатель модуля: установлен — модуль включен, снят — выключен"
      ],
      [
        "Сканирование / край флакона",
        "Флажок (снят / установлен)",
        "При установленном флажке включает поиск позиции по краю флакона"
      ],
      [
        "sbOrbX",
        "Флажок (снят / установлен)",
        "Выбор оси: установлен — X, снят — Y"
      ],
      [
        "sbInc",
        "Флажок (снят / установлен)",
        "Выбор направления: установлен — к увеличению координат, снят — к уменьшению"
      ],
      [
        "Порог разности",
        "Целое со знаком",
        "Порог перепада яркости края; больший модуль требует более выраженного контраста"
      ],
      [
        "sbrd var",
        "Неотрицательное целое",
        "Допустимое колебание границы; большее значение допускает менее ровный край"
      ],
      [
        "Смещение опорной позиции",
        "Целое (пиксели)",
        "Берёт опорную яркость на заданном расстоянии от найденного края"
      ],
      [
        "sszmax.width / sszmax.height",
        "Положительное целое (пиксели)",
        "Ограничивает максимальную ширину и высоту кандидата края"
      ],
      [
        "len min",
        "Положительное целое (пиксели)",
        "Минимальная непрерывная длина края; увеличение фильтрует короткие помехи"
      ],
      [
        "Смещение локализации",
        "Целое (пиксели)",
        "Корректирует итоговую позицию после нахождения края"
      ],
      [
        "Задать область",
        "x, y, ширина, высота",
        "Задаёт область поиска для модуля локализации"
      ],
      [
        "rthr ratio",
        "Дробное 0–1",
        "Порог доли действительных результатов; большее значение строже"
      ],
      [
        "Макс. колебание по X",
        "Целое (пиксели), -1 = выкл.",
        "Ограничивает максимальное изменение позиции по X"
      ],
      [
        "Макс. колебание по Y",
        "Целое (пиксели), -1 = выкл.",
        "Ограничивает максимальное изменение позиции по Y"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Целое (пиксели)",
        "Корректирует четыре границы области совмещения"
      ]
    ]
  },
  "tr": {
    "name": "Türkçe",
    "headers": [
      "Parametre",
      "Aralık",
      "İşlev"
    ],
    "count": "15 parametre",
    "moduleTitle": "Konumlandırma ve Kayıt Modülleri",
    "moduleIntro": "Ayrı modüller şişe tabanını, sıvı seviyesini ve şişenin sol/sağ kenarlarını bulur ve kayıt referanslarını sağlar.",
    "moduleHeaders": [
      "Modül",
      "İşlev"
    ],
    "moduleCount": "7 işlev modülü",
    "modules": [
      [
        "bottom_location",
        "Şişe tabanını algılama bölgeleri için konum referansı olarak bulur"
      ],
      [
        "bottom_register",
        "Şişe tabanı özelliklerinden kayıt telafisi hesaplar"
      ],
      [
        "level_location",
        "Sıvı seviyesiyle ilgili bölgeler için sıvı seviyesini bulur"
      ],
      [
        "side_left_location",
        "Şişenin sol kenarını bulur"
      ],
      [
        "side_left_register",
        "Sol şişe kenarından kayıt telafisi hesaplar"
      ],
      [
        "side_right_location",
        "Şişenin sağ kenarını bulur"
      ],
      [
        "side_right_register",
        "Sağ şişe kenarından kayıt telafisi hesaplar"
      ]
    ],
    "rows": [
      [
        "Etkinleştir",
        "Onay kutusu (işaretsiz / işaretli)",
        "Ana modül anahtarıdır; işaretliyken etkin, işaretsizken kapalıdır"
      ],
      [
        "Tarama / şişe kenarı",
        "Onay kutusu (işaretsiz / işaretli)",
        "İşaretlendiğinde şişe kenarına göre taramalı konumlandırmayı etkinleştirir"
      ],
      [
        "sbOrbX",
        "Onay kutusu (işaretsiz / işaretli)",
        "Tarama eksenini seçer; işaretliyken X, işaretsizken Y yönünde tarar"
      ],
      [
        "sbInc",
        "Onay kutusu (işaretsiz / işaretli)",
        "Tarama yönünü seçer; işaretliyken artan, işaretsizken azalan koordinatlara doğru tarar"
      ],
      [
        "Fark eşiği",
        "İşaretli tam sayı",
        "Kenar gri farkı eşiğidir; büyük mutlak değer daha güçlü kontrast ister"
      ],
      [
        "sbrd var",
        "Negatif olmayan tam sayı",
        "İzin verilen sınır değişimidir; büyük değer düzensiz kenara daha çok tolerans sağlar"
      ],
      [
        "Referans konum ofseti",
        "Tam sayı (piksel)",
        "Referans gri değerini bulunan kenardan belirtilen uzaklıkta örnekler"
      ],
      [
        "sszmax.width / sszmax.height",
        "Pozitif tam sayı (piksel)",
        "Kenar adayının maksimum genişlik ve yüksekliğini sınırlar"
      ],
      [
        "len min",
        "Pozitif tam sayı (piksel)",
        "Minimum kesintisiz kenar uzunluğudur; artırmak kısa parazitleri filtreler"
      ],
      [
        "Konumlandırma ofseti",
        "Tam sayı (piksel)",
        "Kenar bulunduktan sonra son konumu düzeltir"
      ],
      [
        "Bölgeyi ayarla",
        "x, y, genişlik, yükseklik",
        "Konumlandırma modülünün arama bölgesini ayarlar"
      ],
      [
        "rthr ratio",
        "0–1 ondalık",
        "Geçerli sonuç oranı eşiğidir; büyük değer daha katıdır"
      ],
      [
        "X yönü maksimum salınım",
        "Tam sayı (piksel), -1 = Kapalı",
        "X yönünde izin verilen maksimum konum değişimini sınırlar"
      ],
      [
        "Y yönü maksimum salınım",
        "Tam sayı (piksel), -1 = Kapalı",
        "Y yönünde izin verilen maksimum konum değişimini sınırlar"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Tam sayı (piksel)",
        "Kayıt bölgesinin dört sınırını ayrı ayrı düzeltir"
      ]
    ]
  },
  "it": {
    "name": "Italiano",
    "headers": [
      "Parametro",
      "Intervallo",
      "Funzione"
    ],
    "count": "15 parametri",
    "moduleTitle": "Moduli di localizzazione e registrazione",
    "moduleIntro": "Il gruppo usa moduli separati per individuare il fondo della bottiglia, il livello del liquido e i bordi sinistro e destro, fornendo i relativi riferimenti di registrazione.",
    "moduleHeaders": [
      "Modulo",
      "Funzione"
    ],
    "moduleCount": "7 moduli funzionali",
    "modules": [
      [
        "bottom_location",
        "Individua il fondo della bottiglia come riferimento per le aree di rilevamento"
      ],
      [
        "bottom_register",
        "Calcola la compensazione di registrazione dalle caratteristiche del fondo"
      ],
      [
        "level_location",
        "Individua il livello del liquido per le aree correlate"
      ],
      [
        "side_left_location",
        "Individua il bordo sinistro della bottiglia"
      ],
      [
        "side_left_register",
        "Calcola la compensazione di registrazione dal bordo sinistro"
      ],
      [
        "side_right_location",
        "Individua il bordo destro della bottiglia"
      ],
      [
        "side_right_register",
        "Calcola la compensazione di registrazione dal bordo destro"
      ]
    ],
    "rows": [
      [
        "Abilita",
        "Casella (deselezionata / selezionata)",
        "Interruttore principale del modulo; selezionata lo attiva, deselezionata lo disattiva"
      ],
      [
        "Scansione / bordo bottiglia",
        "Casella (deselezionata / selezionata)",
        "Quando è selezionata, attiva il localizzazione tramite il bordo della bottiglia"
      ],
      [
        "sbOrbX",
        "Casella (deselezionata / selezionata)",
        "Seleziona l’asse; selezionata per X, deselezionata per Y"
      ],
      [
        "sbInc",
        "Casella (deselezionata / selezionata)",
        "Seleziona il verso; selezionata verso coordinate crescenti, deselezionata verso coordinate decrescenti"
      ],
      [
        "Soglia differenza",
        "Intero con segno",
        "Soglia della differenza di grigio del bordo; un valore assoluto maggiore richiede un contrasto più marcato"
      ],
      [
        "sbrd var",
        "Intero non negativo",
        "Variazione ammessa del bordo; un valore maggiore tollera bordi meno uniformi"
      ],
      [
        "Offset posizione di riferimento",
        "Intero (pixel)",
        "Campiona il valore di grigio di riferimento alla distanza specificata dal bordo rilevato"
      ],
      [
        "sszmax.width / sszmax.height",
        "Intero positivo (pixel)",
        "Limita la larghezza e l’altezza massime del bordo candidato"
      ],
      [
        "len min",
        "Intero positivo (pixel)",
        "Lunghezza continua minima del bordo; aumentandola si filtrano le interferenze brevi"
      ],
      [
        "Offset di localizzazione",
        "Intero (pixel)",
        "Compensa la posizione finale dopo l’individuazione del bordo"
      ],
      [
        "Imposta area",
        "x, y, larghezza, altezza",
        "Imposta l’area di ricerca del modulo di localizzazione"
      ],
      [
        "rthr ratio",
        "Decimale da 0 a 1",
        "Soglia del rapporto dei risultati validi; un valore maggiore rende la verifica più rigorosa"
      ],
      [
        "Oscillazione massima X",
        "Intero (pixel), -1 = Disattivato",
        "Limita la variazione massima di localizzazione lungo X"
      ],
      [
        "Oscillazione massima Y",
        "Intero (pixel), -1 = Disattivato",
        "Limita la variazione massima di localizzazione lungo Y"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Intero (pixel)",
        "Compensa separatamente i quattro limiti dell’area di registrazione"
      ]
    ]
  },
  "es": {
    "name": "Español",
    "headers": [
      "Parámetro",
      "Rango",
      "Función"
    ],
    "count": "15 parámetros",
    "moduleTitle": "Módulos de localización y registro",
    "moduleIntro": "Los módulos localizan por separado el fondo, el nivel del líquido y los bordes izquierdo/derecho del frasco y proporcionan referencias de registro.",
    "moduleHeaders": [
      "Módulo",
      "Función"
    ],
    "moduleCount": "7 módulos funcionales",
    "modules": [
      [
        "bottom_location",
        "Localiza el fondo del frasco como referencia de las regiones de detección"
      ],
      [
        "bottom_register",
        "Calcula la compensación de registro a partir del fondo del frasco"
      ],
      [
        "level_location",
        "Localiza el nivel del líquido para las regiones relacionadas"
      ],
      [
        "side_left_location",
        "Localiza el borde izquierdo del frasco"
      ],
      [
        "side_left_register",
        "Calcula la compensación de registro a partir del borde izquierdo"
      ],
      [
        "side_right_location",
        "Localiza el borde derecho del frasco"
      ],
      [
        "side_right_register",
        "Calcula la compensación de registro a partir del borde derecho"
      ]
    ],
    "rows": [
      [
        "Activar",
        "Casilla (desmarcada / marcada)",
        "Interruptor principal del módulo; marcada lo activa y desmarcada lo desactiva"
      ],
      [
        "Escaneo / borde del frasco",
        "Casilla (desmarcada / marcada)",
        "Al marcarla, activa el localización por el borde del frasco"
      ],
      [
        "sbOrbX",
        "Casilla (desmarcada / marcada)",
        "Selecciona el eje; marcada para X y desmarcada para Y"
      ],
      [
        "sbInc",
        "Casilla (desmarcada / marcada)",
        "Selecciona el sentido; marcada hacia coordenadas crecientes y desmarcada hacia decrecientes"
      ],
      [
        "Umbral de diferencia",
        "Entero con signo",
        "Umbral de diferencia de gris del borde; un valor absoluto mayor exige más contraste"
      ],
      [
        "sbrd var",
        "Entero no negativo",
        "Variación de borde permitida; un valor mayor tolera un borde menos uniforme"
      ],
      [
        "Desplazamiento de posición de referencia",
        "Entero (píxeles)",
        "Muestrea el gris de referencia a la distancia indicada del borde detectado"
      ],
      [
        "sszmax.width / sszmax.height",
        "Entero positivo (píxeles)",
        "Limita el ancho y la altura máximos del borde candidato"
      ],
      [
        "len min",
        "Entero positivo (píxeles)",
        "Longitud continua mínima del borde; aumentarla filtra interferencias cortas"
      ],
      [
        "Desplazamiento de localización",
        "Entero (píxeles)",
        "Compensa la posición final después de encontrar el borde"
      ],
      [
        "Definir región",
        "x, y, ancho, alto",
        "Define la región de búsqueda del módulo de localización"
      ],
      [
        "rthr ratio",
        "Decimal de 0 a 1",
        "Umbral de proporción de resultados válidos; un valor mayor es más estricto"
      ],
      [
        "Oscilación máxima en X",
        "Entero (píxeles), -1 = Desactivado",
        "Limita la variación máxima de localización en X"
      ],
      [
        "Oscilación máxima en Y",
        "Entero (píxeles), -1 = Desactivado",
        "Limita la variación máxima de localización en Y"
      ],
      [
        "r of tlx / r of tly / r of brx / r of bry",
        "Entero (píxeles)",
        "Compensa los cuatro límites de la región de registro"
      ]
    ]
  }
};

  window.siteTranslations = {
  "zh": {
    "htmlLang": "zh-CN",
    "languageLabel": "语言",
    "brand": "粒子检测参数中心",
    "navHome": "首页",
    "navParameters": "粒子参数",
    "navMedia": "定位配准",
    "homeDocTitle": "粒子检测知识与参数中心",
    "homeTitle": "粒子检测知识与参数中心",
    "homeCopy": "集中查看粒子检测与定位配准常用参数，便于查询和调试。",
    "particleButton": "查看粒子参数",
    "locationButton": "查看定位配准",
    "statParticle": "项粒子参数",
    "statLocation": "项定位参数",
    "statLanguage": "种语言切换",
    "registrationDocTitle": "定位配准常用参数说明",
    "registrationTitle": "定位配准常用参数说明",
    "registrationCopy": "本页集中说明定位配准常用参数。",
    "tableTitle": "定位配准参数说明",
    "intro": "根据离线程序定位配准界面及 XML 字段整理。",
    "note": "参数值为 -1 时通常表示关闭或不启用对应限制；调整前建议先保存原始 XML。",
    "print": "打印 / 保存为 PDF"
  },
  "en": {
    "htmlLang": "en",
    "languageLabel": "Language",
    "brand": "Particle Detection Parameter Center",
    "navHome": "Home",
    "navParameters": "Particle Parameters",
    "navMedia": "Localization & Registration",
    "homeDocTitle": "Particle Detection Knowledge & Parameter Center",
    "homeTitle": "Particle Detection Knowledge & Parameter Center",
    "homeCopy": "View common particle-detection and localization/registration parameters for quick reference and tuning.",
    "particleButton": "View particle parameters",
    "locationButton": "View location & registration",
    "statParticle": "particle parameters",
    "statLocation": "localization parameters",
    "statLanguage": "languages",
    "registrationDocTitle": "Common Localization & Registration Parameters",
    "registrationTitle": "Common Localization & Registration Parameters",
    "registrationCopy": "This page explains common localization and registration parameters.",
    "tableTitle": "Localization & Registration Parameters",
    "intro": "Organized from the interface labels and XML fields in the offline program.",
    "note": "A value of -1 usually means Off or that the corresponding limit is disabled. Save the original XML before tuning.",
    "print": "Print / Save as PDF"
  },
  "fr": {
    "htmlLang": "fr",
    "languageLabel": "Langue",
    "brand": "Centre des paramètres de détection de particules",
    "navHome": "Accueil",
    "navParameters": "Paramètres particules",
    "navMedia": "Localisation et recalage",
    "homeDocTitle": "Centre de connaissances et de paramètres",
    "homeTitle": "Centre de connaissances et de paramètres de détection",
    "homeCopy": "Consultez les paramètres courants de détection de particules et de localisation pour faciliter la consultation et le réglage.",
    "particleButton": "Voir les paramètres particules",
    "locationButton": "Voir le localisation",
    "statParticle": "paramètres particules",
    "statLocation": "paramètres de localisation",
    "statLanguage": "langues",
    "registrationDocTitle": "Paramètres courants de localisation et de recalage",
    "registrationTitle": "Paramètres courants de localisation et de recalage",
    "registrationCopy": "Cette page explique les paramètres courants de localisation et de recalage.",
    "tableTitle": "Paramètres de localisation et de recalage",
    "intro": "Établi à partir de l’interface et des champs XML du programme hors ligne.",
    "note": "La valeur -1 signifie généralement que la fonction ou la limite est désactivée. Enregistrez le XML d’origine avant tout réglage.",
    "print": "Imprimer / Enregistrer en PDF"
  },
  "ru": {
    "htmlLang": "ru",
    "languageLabel": "Язык",
    "brand": "Центр параметров контроля частиц",
    "navHome": "Главная",
    "navParameters": "Параметры частиц",
    "navMedia": "Локализация",
    "homeDocTitle": "Центр знаний и параметров контроля частиц",
    "homeTitle": "Центр знаний и параметров контроля частиц",
    "homeCopy": "Просматривайте основные параметры контроля частиц и локализации для удобства настройки и справки.",
    "particleButton": "Параметры частиц",
    "locationButton": "Параметры локализации",
    "statParticle": "параметров частиц",
    "statLocation": "параметров локализации",
    "statLanguage": "языков",
    "registrationDocTitle": "Основные параметры локализации и совмещения",
    "registrationTitle": "Основные параметры локализации и совмещения",
    "registrationCopy": "На странице приведены основные параметры локализации и совмещения.",
    "tableTitle": "Параметры локализации и совмещения",
    "intro": "Составлено по интерфейсу и XML-полям автономной программы.",
    "note": "Значение -1 обычно означает отключение функции или ограничения. Перед настройкой сохраните исходный XML.",
    "print": "Печать / Сохранить в PDF"
  },
  "tr": {
    "htmlLang": "tr",
    "languageLabel": "Dil",
    "brand": "Parçacık Algılama Parametre Merkezi",
    "navHome": "Ana sayfa",
    "navParameters": "Parçacık parametreleri",
    "navMedia": "Konumlandırma ve kayıt",
    "homeDocTitle": "Parçacık Algılama Bilgi ve Parametre Merkezi",
    "homeTitle": "Parçacık Algılama Bilgi ve Parametre Merkezi",
    "homeCopy": "Yaygın parçacık algılama ve konumlandırma parametrelerini hızlı başvuru ve ayarlama için inceleyin.",
    "particleButton": "Parçacık parametrelerini görüntüle",
    "locationButton": "Konumlandırmayı görüntüle",
    "statParticle": "parçacık parametresi",
    "statLocation": "konumlandırma parametresi",
    "statLanguage": "dil",
    "registrationDocTitle": "Yaygın Konumlandırma ve Kayıt Parametreleri",
    "registrationTitle": "Yaygın Konumlandırma ve Kayıt Parametreleri",
    "registrationCopy": "Bu sayfada yaygın konumlandırma ve kayıt parametreleri açıklanmaktadır.",
    "tableTitle": "Konumlandırma ve Kayıt Parametreleri",
    "intro": "Çevrimdışı programın arayüz etiketleri ve XML alanlarından düzenlenmiştir.",
    "note": "-1 değeri genellikle ilgili işlevin veya sınırın kapalı olduğunu belirtir. Ayarlamadan önce özgün XML dosyasını kaydedin.",
    "print": "Yazdır / PDF olarak kaydet"
  },
  "it": {
    "htmlLang": "it",
    "languageLabel": "Lingua",
    "brand": "Centro parametri di rilevamento particelle",
    "navHome": "Home",
    "navParameters": "Parametri particelle",
    "navMedia": "Localizzazione e registrazione",
    "homeDocTitle": "Centro conoscenze e parametri di rilevamento particelle",
    "homeTitle": "Centro conoscenze e parametri di rilevamento particelle",
    "homeCopy": "Consulta i parametri comuni di rilevamento particelle e di localizzazione per una rapida consultazione e regolazione.",
    "particleButton": "Visualizza i parametri particelle",
    "locationButton": "Visualizza localizzazione e registrazione",
    "statParticle": "parametri particelle",
    "statLocation": "parametri di localizzazione",
    "statLanguage": "lingue",
    "registrationDocTitle": "Parametri comuni di localizzazione e registrazione",
    "registrationTitle": "Parametri comuni di localizzazione e registrazione",
    "registrationCopy": "Questa pagina descrive i parametri comuni di localizzazione e registrazione.",
    "tableTitle": "Parametri di localizzazione e registrazione",
    "intro": "Organizzato in base alle etichette dell’interfaccia e ai campi XML del programma offline.",
    "note": "Il valore -1 indica in genere che la funzione o il limite corrispondente è disattivato. Salvare il file XML originale prima della regolazione.",
    "print": "Stampa / Salva come PDF"
  },
  "es": {
    "htmlLang": "es",
    "languageLabel": "Idioma",
    "brand": "Centro de parámetros de detección de partículas",
    "navHome": "Inicio",
    "navParameters": "Parámetros de partículas",
    "navMedia": "Localización y registro",
    "homeDocTitle": "Centro de conocimientos y parámetros",
    "homeTitle": "Centro de conocimientos y parámetros de detección",
    "homeCopy": "Consulte los parámetros comunes de detección de partículas y localización para facilitar la consulta y el ajuste.",
    "particleButton": "Ver parámetros de partículas",
    "locationButton": "Ver localización",
    "statParticle": "parámetros de partículas",
    "statLocation": "parámetros de localización",
    "statLanguage": "idiomas",
    "registrationDocTitle": "Parámetros comunes de localización y registro",
    "registrationTitle": "Parámetros comunes de localización y registro",
    "registrationCopy": "Esta página explica los parámetros comunes de localización y registro.",
    "tableTitle": "Parámetros de localización y registro",
    "intro": "Elaborado a partir de las etiquetas y los campos XML del programa sin conexión.",
    "note": "El valor -1 suele indicar que la función o el límite está desactivado. Guarde el XML original antes de ajustar.",
    "print": "Imprimir / Guardar como PDF"
  }
};

  const renderRows = (targetId, rows, headers) => {
    const tbody = document.getElementById(targetId);
    if (!tbody) return;
    const fragment = document.createDocumentFragment();
    rows.forEach(rowData => {
      const row = document.createElement("tr");
      rowData.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        cell.dataset.label = headers[index];
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tbody.replaceChildren(fragment);
  };

  const locationSwitchRows = {
    zh: [["直线拟合使能", "开关（未勾选／勾选）", "勾选后对检测到的边缘进行直线拟合，未勾选时使用原始边缘"], ["手动区域使能", "开关（未勾选／勾选）", "勾选后使用手动设置的 ROI 区域进行定位，未勾选时使用自动区域"]],
    en: [["Line fitting enable", "Checkbox (unchecked / checked)", "When checked, fits a line to the detected edge; when unchecked, uses the raw edge"], ["Manual region enable", "Checkbox (unchecked / checked)", "When checked, uses the manually defined ROI; when unchecked, uses the automatic region"]],
    fr: [["Activation de l’ajustement linéaire", "Case à cocher (décochée / cochée)", "Cochée, ajuste une droite sur le bord détecté ; décochée, utilise le bord brut"], ["Activation de la zone manuelle", "Case à cocher (décochée / cochée)", "Cochée, utilise la ROI définie manuellement ; décochée, utilise la zone automatique"]],
    ru: [["Включение аппроксимации прямой", "Флажок (снят / установлен)", "Установлен — аппроксимирует найденный край прямой; снят — использует исходный край"], ["Включение ручной области", "Флажок (снят / установлен)", "Установлен — использует заданную вручную ROI; снят — автоматическую область"]],
    tr: [["Doğru uydurma etkinleştirme", "Onay kutusu (işaretsiz / işaretli)", "İşaretliyken algılanan kenara doğru uydurur; işaretsizken ham kenarı kullanır"], ["Manuel bölge etkinleştirme", "Onay kutusu (işaretsiz / işaretli)", "İşaretliyken manuel ROI kullanır; işaretsizken otomatik bölgeyi kullanır"]],
    it: [["Attivazione adattamento della retta", "Casella (deselezionata / selezionata)", "Selezionata, adatta una retta al bordo rilevato; deselezionata, usa il bordo originale"], ["Attivazione area manuale", "Casella (deselezionata / selezionata)", "Selezionata, usa la ROI definita manualmente; deselezionata, usa l’area automatica"]],
    es: [["Activación del ajuste lineal", "Casilla (desmarcada / marcada)", "Marcada, ajusta una recta al borde detectado; desmarcada, usa el borde original"], ["Activación de la región manual", "Casilla (desmarcada / marcada)", "Marcada, usa la ROI definida manualmente; desmarcada, usa la región automática"]]
  };

  window.renderRegistrationParameters = code => {
    const version = registrationVersions[code] || registrationVersions.zh;
    const extraRows = locationSwitchRows[code] || locationSwitchRows.en;
    renderRows("registration-module-rows", version.modules, version.moduleHeaders);
    renderRows("registration-rows", version.rows.concat(extraRows), version.headers);
    document.getElementById("registration-modules-title").textContent = version.moduleTitle;
    document.getElementById("registration-modules-intro").textContent = version.moduleIntro;
    document.getElementById("registration-modules-language").textContent = version.name;
    document.getElementById("registration-modules-count").textContent = version.moduleCount;
    document.getElementById("registration-module-header-name").textContent = version.moduleHeaders[0];
    document.getElementById("registration-module-header-function").textContent = version.moduleHeaders[1];
    document.getElementById("registration-current-language").textContent = version.name;
    document.getElementById("registration-count").textContent = code === "zh" ? "17 项参数" : `${version.rows.length + extraRows.length} parameters`;
    ["registration-header-name", "registration-header-range", "registration-header-function"].forEach((id, index) => {
      document.getElementById(id).textContent = version.headers[index];
    });
  };

})();
