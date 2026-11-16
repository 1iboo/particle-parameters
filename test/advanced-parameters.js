(function () {
  const rows = {
  "zh": {
    "name": "中文",
    "headers": [
      "参数名称",
      "参数范围",
      "具体作用"
    ],
    "dlTitle": "DL 模块常用参数说明",
    "defectTitle": "缺陷检测参数说明",
    "dl": [
      [
        "开启",
        "开关（未勾选／勾选）",
        "DL 检测模块总开关"
      ],
      [
        "定位配准源",
        "非负整数",
        "选择输入图像使用的定位配准结果"
      ],
      [
        "模型目录编号",
        "非负整数",
        "选择模型目录或模型编号"
      ],
      [
        "模型名称",
        "文本",
        "指定实际使用的模型名称或文件"
      ],
      [
        "模型使能",
        "开关（未勾选／勾选）",
        "控制是否调用当前模型"
      ],
      [
        "目标编号选择",
        "非负整数",
        "选择需要判断的目标类别"
      ],
      [
        "目标单帧数量",
        "按类别设置的整数数组",
        "设置各目标类别的单帧数量阈值"
      ],
      [
        "目标帧数",
        "按类别设置的整数数组",
        "设置各目标类别的多帧累计判断阈值"
      ],
      [
        "掩膜编号选择",
        "非负整数",
        "选择参与检测的 Mask"
      ],
      [
        "分割区域绘制",
        "开关（未勾选／勾选）",
        "控制是否绘制模型输出的分割区域"
      ],
      [
        "掩膜x偏移 / 掩膜y偏移 / 掩膜宽度 / 掩膜高度",
        "整数（像素）",
        "设置所选掩膜矩形区域的位置和尺寸"
      ],
      [
        "0无/1分割/2目标/3分类",
        "0–3 枚举",
        "选择 DL 输出任务类型"
      ],
      [
        "置信度阈值",
        "0–1 小数",
        "过滤低于该置信度的检测结果"
      ],
      [
        "kNmsThreshold阈值",
        "0–1 小数",
        "去除相互重叠的重复检测框"
      ],
      [
        "检测算法宽度 / 检测算法高度",
        "正整数（像素）",
        "设置送入模型的图像尺寸"
      ],
      [
        "kNumClass",
        "正整数",
        "设置模型输出类别总数"
      ],
      [
        "结果图标注:-1无/1有",
        "-1 或 1",
        "控制是否在结果图上绘制检测框和标注"
      ],
      [
        "动态类别文字:0无/1有",
        "0 或 1",
        "控制是否显示类别文字"
      ],
      [
        "Mask 颜色混合权重",
        "0–1 小数",
        "设置 Mask 颜色与原图的混合比例"
      ],
      [
        "拆分窗口宽度 / 拆分窗口高度",
        "正整数（像素）",
        "设置分块检测窗口尺寸"
      ],
      [
        "拆分滑动步长X / 拆分滑动步长Y",
        "正整数（像素）",
        "设置分块窗口的横向和纵向移动步长"
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "非负整数",
        "限定序列中开始检测、排除检测和检测间隔"
      ],
      [
        "0不存/1好/2坏/3任意",
        "模式值",
        "选择结果图保存类型"
      ],
      [
        "存图间隔",
        "正整数",
        "设置结果图保存间隔"
      ],
      [
        "最小绘框长宽(0原样)",
        "非负整数（像素）",
        "限制最小检测框尺寸；0 时保持原样"
      ],
      [
        "绘框线宽",
        "正整数（像素）",
        "设置检测框边线宽度"
      ],
      [
        "绘框类别编号",
        "非负整数",
        "选择需要绘制的类别编号"
      ],
      [
        "绘框颜色B / 绘框颜色G / 绘框颜色R",
        "0–255 整数",
        "设置检测框颜色的蓝、绿、红通道"
      ],
      [
        "存图宽度(0原图尺寸) / 存图高度(0原图尺寸)",
        "非负整数（像素）",
        "设置保存图像尺寸；0 时使用原图尺寸"
      ],
      [
        "拼图网格宽度 / 拼图网格高度",
        "正整数",
        "设置拼图网格尺寸"
      ],
      [
        "静止检测/-1关/其他",
        "-1 或模式值",
        "控制静止检测相关模式"
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "整数（像素）",
        "调整 Mask 点位的横向和纵向偏移"
      ],
      [
        "b_pass",
        "0 或 1",
        "控制结果是否直接通过"
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "非负整数（像素）",
        "分别收缩检测区域的四个边界"
      ],
      [
        "二次处理-二值化",
        "0–255 整数",
        "二次处理阶段的二值化阈值"
      ],
      [
        "二次处理-前景数",
        "整数，-1关闭",
        "二次处理阶段的非零前景数量阈值"
      ],
      [
        "hal模式",
        "模式值",
        "选择 HAL 后处理模式"
      ],
      [
        "hal模式-最小跨度",
        "正整数（像素）",
        "设置 HAL 模式下的最小有效跨度"
      ]
    ],
    "defect": [
      [
        "开启",
        "开关（未勾选／勾选）",
        "缺陷检测模块总开关"
      ],
      [
        "定位配准源",
        "非负整数",
        "选择经过定位配准后的输入图像"
      ],
      [
        "模型编号",
        "非负整数",
        "选择缺陷检测模型"
      ],
      [
        "模型子目录",
        "文本",
        "指定模型所在的子目录"
      ],
      [
        "模型使能",
        "开关（未勾选／勾选）",
        "控制是否调用缺陷模型"
      ],
      [
        "0不存/1好/2坏/3任意",
        "模式值",
        "选择结果图保存类型"
      ],
      [
        "存图间隔",
        "正整数",
        "设置结果图保存间隔"
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "宽×高（像素）",
        "设置送入缺陷模型的图像尺寸"
      ],
      [
        "merge1_split2",
        "模式值",
        "选择图像合并或拆分处理方式"
      ],
      [
        "结果图标注:-1无/1有",
        "-1 或 1",
        "控制是否绘制缺陷检测框"
      ],
      [
        "前景框数量",
        "正整数",
        "单帧非零前景数量判定门槛"
      ],
      [
        "图像张数",
        "正整数",
        "多帧累计非零前景数量判定门槛"
      ],
      [
        "屏蔽-左宽度 / 高度 / X / Y",
        "整数（像素）",
        "设置左侧角部或边缘屏蔽区域"
      ],
      [
        "屏蔽-右宽度 / 高度 / X / Y",
        "整数（像素）",
        "设置右侧角部或边缘屏蔽区域"
      ],
      [
        "最小绘框长宽(0原样)",
        "非负整数（像素）",
        "限制过小的检测框；0 时保持原样"
      ],
      [
        "绘框线宽",
        "正整数（像素）",
        "设置检测框边线宽度"
      ],
      [
        "动态类别文字:0无/1有",
        "0 或 1",
        "控制是否显示类别文字"
      ],
      [
        "存图宽度(0原图尺寸) / 存图高度(0原图尺寸)",
        "非负整数（像素）",
        "设置保存图像尺寸；0 时使用原图尺寸"
      ],
      [
        "shrk_hat_x",
        "非负整数（像素）",
        "调整帽部或头部相关检测区域的横向收缩"
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "正整数",
        "设置图像合并网格的横向和纵向尺寸"
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
    "dlTitle": "Common DL parameters",
    "defectTitle": "Defect inspection parameters",
    "dl": [
      [
        "Enable",
        "Off / On",
        "Enables or disables this inspection module."
      ],
      [
        "Localization/registration source",
        "Non-negative integer",
        "Selects the localization/registration result used for the input images."
      ],
      [
        "Model directory index",
        "Non-negative integer",
        "Selects the model directory or model index."
      ],
      [
        "Model name",
        "Text",
        "Specifies the model name or file to use."
      ],
      [
        "Enable model",
        "Off / On",
        "Controls whether the selected model is used."
      ],
      [
        "Target class index",
        "Non-negative integer",
        "Selects the model class to evaluate, for example head defects or crimp defects."
      ],
      [
        "Per-frame object count threshold by class (0–3)",
        "Integer array by class",
        "Sets the per-frame object count threshold separately for each model class."
      ],
      [
        "Frame count threshold by class (0–3)",
        "Integer array by class",
        "Sets the accumulated multi-frame evaluation threshold for each model class."
      ],
      [
        "Mask index",
        "Non-negative integer",
        "Selects the mask used for inspection."
      ],
      [
        "Show segmentation regions",
        "Off / On",
        "Controls whether the model’s segmentation regions are displayed."
      ],
      [
        "Mask offset X / Y and width / height",
        "Integer (pixels)",
        "Sets the position and dimensions of the selected rectangular mask."
      ],
      [
        "Model type: 0 None / 1 Segmentation / 2 Object detection / 3 Classification",
        "0–3",
        "Selects the DL task: segmentation, object detection or classification."
      ],
      [
        "Confidence threshold",
        "Decimal, 0–1",
        "Discards detection results below the confidence threshold."
      ],
      [
        "NMS IoU threshold (kNmsThreshold)",
        "Decimal, 0–1",
        "Controls suppression of overlapping duplicate detection boxes."
      ],
      [
        "Model input width / height",
        "Positive integer (pixels)",
        "Sets the dimensions of images supplied to the model."
      ],
      [
        "kNumClass",
        "Positive integer",
        "Sets the total number of model output classes."
      ],
      [
        "Result annotations: -1 Off / 1 On",
        "-1 / 1",
        "Controls the display of detection boxes and annotations on result images."
      ],
      [
        "Class labels: 0 Off / 1 On",
        "0 / 1",
        "Controls whether class labels are displayed."
      ],
      [
        "Mask color blending weight",
        "Decimal, 0–1",
        "Sets the blending weight of the mask color over the original image."
      ],
      [
        "Tile width / height",
        "Positive integer (pixels)",
        "Sets the window dimensions for tiled inspection."
      ],
      [
        "Tile stride X / Y",
        "Positive integer (pixels)",
        "Sets the horizontal and vertical steps of the sliding window."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Non-negative integer",
        "Defines the sequence start, excluded end frames and inspection interval."
      ],
      [
        "Image saving mode",
        "Mode value",
        "Selects which result images are saved."
      ],
      [
        "Image saving interval",
        "Positive integer",
        "Sets the interval between saved result images."
      ],
      [
        "Minimum displayed box size (0 = unchanged)",
        "Non-negative integer (pixels)",
        "Sets the minimum displayed box size; 0 keeps the original size."
      ],
      [
        "Box line thickness",
        "Positive integer (pixels)",
        "Sets the line thickness of detection boxes."
      ],
      [
        "Class index for box drawing",
        "Non-negative integer",
        "Selects the class whose detection boxes are drawn."
      ],
      [
        "Box color B / G / R",
        "Integer, 0–255",
        "Sets the blue, green and red channels of the box color."
      ],
      [
        "Saved image width / height (0 = original)",
        "Non-negative integer (pixels)",
        "Sets saved image dimensions; 0 uses the original dimensions."
      ],
      [
        "Merge grid width / height",
        "Positive integer",
        "Sets the grid dimensions used to merge images."
      ],
      [
        "Stationary detection (-1 = disabled)",
        "-1 or mode value",
        "Controls stationary detection; -1 disables it."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Integer (pixels)",
        "Adjusts the horizontal and vertical offsets of mask points."
      ],
      [
        "b_pass",
        "0 / 1",
        "Controls whether the inspection result is passed directly."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Non-negative integer (pixels)",
        "Shrinks the four boundaries of the inspection region separately."
      ],
      [
        "Post-processing binarization threshold",
        "Integer, 0–255",
        "Sets the binarization threshold for post-processing."
      ],
      [
        "Post-processing foreground count threshold",
        "Integer; -1 = disabled",
        "Sets the nonzero foreground count threshold for post-processing."
      ],
      [
        "HAL mode",
        "Mode value",
        "Selects the HAL post-processing mode."
      ],
      [
        "HAL minimum span",
        "Positive integer (pixels)",
        "Sets the minimum valid span in HAL mode."
      ]
    ],
    "defect": [
      [
        "Enable",
        "Off / On",
        "Enables or disables this inspection module."
      ],
      [
        "Localization/registration source",
        "Non-negative integer",
        "Selects the localization/registration result used for the input images."
      ],
      [
        "Model index",
        "Non-negative integer",
        "Selects the defect inspection model."
      ],
      [
        "Model subdirectory",
        "Text",
        "Specifies the subdirectory containing the model."
      ],
      [
        "Enable model",
        "Off / On",
        "Controls whether the selected model is used."
      ],
      [
        "Image saving mode",
        "Mode value",
        "Selects which result images are saved."
      ],
      [
        "Image saving interval",
        "Positive integer",
        "Sets the interval between saved result images."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Width × height (pixels)",
        "Sets the dimensions of images supplied to the model."
      ],
      [
        "merge1_split2",
        "Mode value",
        "Selects image merging or splitting."
      ],
      [
        "Result annotations: -1 Off / 1 On",
        "-1 / 1",
        "Controls the display of detection boxes and annotations on result images."
      ],
      [
        "Single-frame foreground count threshold",
        "Positive integer",
        "Sets the single-frame nonzero foreground count threshold."
      ],
      [
        "Number of images",
        "Positive integer",
        "Sets the accumulated multi-frame nonzero foreground count threshold."
      ],
      [
        "Left mask width / height / X / Y",
        "Integer (pixels)",
        "Sets the left corner or edge masking region."
      ],
      [
        "Right mask width / height / X / Y",
        "Integer (pixels)",
        "Sets the right corner or edge masking region."
      ],
      [
        "Minimum displayed box size (0 = unchanged)",
        "Non-negative integer (pixels)",
        "Sets the minimum displayed box size; 0 keeps the original size."
      ],
      [
        "Box line thickness",
        "Positive integer (pixels)",
        "Sets the line thickness of detection boxes."
      ],
      [
        "Class labels: 0 Off / 1 On",
        "0 / 1",
        "Controls whether class labels are displayed."
      ],
      [
        "Saved image width / height (0 = original)",
        "Non-negative integer (pixels)",
        "Sets saved image dimensions; 0 uses the original dimensions."
      ],
      [
        "shrk_hat_x",
        "Non-negative integer (pixels)",
        "Adjusts horizontal shrinkage of the cap or head inspection region."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Positive integer",
        "Sets the grid dimensions used to merge images."
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
    "dlTitle": "Paramètres DL courants",
    "defectTitle": "Paramètres de contrôle des défauts",
    "dl": [
      [
        "Activer",
        "Désactivé / Activé",
        "Active ou désactive ce module de contrôle."
      ],
      [
        "Source de localisation/recalage",
        "Entier positif ou nul",
        "Sélectionne le résultat de localisation/recalage utilisé pour les images d’entrée."
      ],
      [
        "Indice du répertoire du modèle",
        "Entier positif ou nul",
        "Sélectionne le répertoire ou l’indice du modèle."
      ],
      [
        "Nom du modèle",
        "Texte",
        "Définit le nom ou le fichier du modèle à utiliser."
      ],
      [
        "Activer le modèle",
        "Désactivé / Activé",
        "Détermine si le modèle sélectionné est utilisé."
      ],
      [
        "Indice de classe cible",
        "Entier positif ou nul",
        "Sélectionne la classe du modèle à évaluer, par exemple les défauts de tête ou de sertissage."
      ],
      [
        "Seuil du nombre d’objets par image et par classe (0–3)",
        "Tableau d’entiers par classe",
        "Définit le seuil du nombre d’objets par image pour chaque classe du modèle."
      ],
      [
        "Seuil du nombre d’images par classe (0–3)",
        "Tableau d’entiers par classe",
        "Définit le seuil d’évaluation cumulé sur plusieurs images pour chaque classe du modèle."
      ],
      [
        "Indice du masque",
        "Entier positif ou nul",
        "Sélectionne le masque utilisé pour le contrôle."
      ],
      [
        "Afficher les régions segmentées",
        "Désactivé / Activé",
        "Détermine si les régions segmentées par le modèle sont affichées."
      ],
      [
        "Décalage X / Y et largeur / hauteur du masque",
        "Entier (pixels)",
        "Définit la position et les dimensions du masque rectangulaire sélectionné."
      ],
      [
        "Type de modèle : 0 Aucun / 1 Segmentation / 2 Détection d’objets / 3 Classification",
        "0–3",
        "Sélectionne la tâche DL : segmentation, détection d’objets ou classification."
      ],
      [
        "Seuil de confiance",
        "Décimal, 0–1",
        "Écarte les résultats dont la confiance est inférieure au seuil."
      ],
      [
        "Seuil IoU de NMS (kNmsThreshold)",
        "Décimal, 0–1",
        "Contrôle la suppression des cadres de détection redondants qui se chevauchent."
      ],
      [
        "Largeur / hauteur d’entrée du modèle",
        "Entier strictement positif (pixels)",
        "Définit les dimensions des images transmises au modèle."
      ],
      [
        "kNumClass",
        "Entier strictement positif",
        "Définit le nombre total de classes de sortie du modèle."
      ],
      [
        "Annotations des résultats : -1 Désactivées / 1 Activées",
        "-1 / 1",
        "Contrôle l’affichage des cadres de détection et des annotations sur les images de résultats."
      ],
      [
        "Libellés de classe : 0 Désactivés / 1 Activés",
        "0 / 1",
        "Détermine si les libellés de classe sont affichés."
      ],
      [
        "Poids de mélange de la couleur du masque",
        "Décimal, 0–1",
        "Définit le poids de mélange de la couleur du masque avec l’image originale."
      ],
      [
        "Largeur / hauteur des tuiles",
        "Entier strictement positif (pixels)",
        "Définit les dimensions de la fenêtre de contrôle par tuiles."
      ],
      [
        "Pas des tuiles X / Y",
        "Entier strictement positif (pixels)",
        "Définit les pas horizontal et vertical de la fenêtre glissante."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Entier positif ou nul",
        "Définit le début de séquence, les images finales exclues et l’intervalle de contrôle."
      ],
      [
        "Mode d’enregistrement des images",
        "Valeur de mode",
        "Sélectionne les images de résultats à enregistrer."
      ],
      [
        "Intervalle d’enregistrement des images",
        "Entier strictement positif",
        "Définit l’intervalle entre les images de résultats enregistrées."
      ],
      [
        "Taille minimale du cadre affiché (0 = inchangée)",
        "Entier positif ou nul (pixels)",
        "Définit la taille minimale des cadres affichés ; 0 conserve la taille originale."
      ],
      [
        "Épaisseur du trait du cadre",
        "Entier strictement positif (pixels)",
        "Définit l’épaisseur du trait des cadres de détection."
      ],
      [
        "Indice de classe pour le tracé des cadres",
        "Entier positif ou nul",
        "Sélectionne la classe dont les cadres de détection sont tracés."
      ],
      [
        "Couleur du cadre B / V / R",
        "Entier, 0–255",
        "Définit les composantes bleue, verte et rouge de la couleur des cadres."
      ],
      [
        "Largeur / hauteur enregistrée (0 = originale)",
        "Entier positif ou nul (pixels)",
        "Définit les dimensions des images enregistrées ; 0 utilise les dimensions originales."
      ],
      [
        "Largeur / hauteur de la grille de fusion",
        "Entier strictement positif",
        "Définit les dimensions de la grille de fusion des images."
      ],
      [
        "Détection statique (-1 = désactivée)",
        "-1 ou valeur de mode",
        "Contrôle la détection statique ; -1 la désactive."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Entier (pixels)",
        "Ajuste les décalages horizontal et vertical des points du masque."
      ],
      [
        "b_pass",
        "0 / 1",
        "Détermine si le résultat du contrôle est directement accepté."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Entier positif ou nul (pixels)",
        "Réduit séparément les quatre limites de la région de contrôle."
      ],
      [
        "Seuil de binarisation du post-traitement",
        "Entier, 0–255",
        "Définit le seuil de binarisation du post-traitement."
      ],
      [
        "Seuil du nombre de pixels de premier plan du post-traitement",
        "Entier ; -1 = désactivé",
        "Définit le seuil du nombre de pixels de premier plan non nuls pour le post-traitement."
      ],
      [
        "Mode HAL",
        "Valeur de mode",
        "Sélectionne le mode de post-traitement HAL."
      ],
      [
        "Étendue minimale HAL",
        "Entier strictement positif (pixels)",
        "Définit l’étendue minimale valide en mode HAL."
      ]
    ],
    "defect": [
      [
        "Activer",
        "Désactivé / Activé",
        "Active ou désactive ce module de contrôle."
      ],
      [
        "Source de localisation/recalage",
        "Entier positif ou nul",
        "Sélectionne le résultat de localisation/recalage utilisé pour les images d’entrée."
      ],
      [
        "Indice du modèle",
        "Entier positif ou nul",
        "Sélectionne le modèle de contrôle des défauts."
      ],
      [
        "Sous-répertoire du modèle",
        "Texte",
        "Indique le sous-répertoire contenant le modèle."
      ],
      [
        "Activer le modèle",
        "Désactivé / Activé",
        "Détermine si le modèle sélectionné est utilisé."
      ],
      [
        "Mode d’enregistrement des images",
        "Valeur de mode",
        "Sélectionne les images de résultats à enregistrer."
      ],
      [
        "Intervalle d’enregistrement des images",
        "Entier strictement positif",
        "Définit l’intervalle entre les images de résultats enregistrées."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Largeur × hauteur (pixels)",
        "Définit les dimensions des images transmises au modèle."
      ],
      [
        "merge1_split2",
        "Valeur de mode",
        "Sélectionne la fusion ou le découpage des images."
      ],
      [
        "Annotations des résultats : -1 Désactivées / 1 Activées",
        "-1 / 1",
        "Contrôle l’affichage des cadres de détection et des annotations sur les images de résultats."
      ],
      [
        "Seuil du nombre de pixels de premier plan par image",
        "Entier strictement positif",
        "Définit le seuil du nombre de pixels de premier plan non nuls par image."
      ],
      [
        "Nombre d’images",
        "Entier strictement positif",
        "Définit le seuil cumulé des pixels de premier plan non nuls sur plusieurs images."
      ],
      [
        "Masque gauche : largeur / hauteur / X / Y",
        "Entier (pixels)",
        "Définit la région de masquage du coin ou du bord gauche."
      ],
      [
        "Masque droit : largeur / hauteur / X / Y",
        "Entier (pixels)",
        "Définit la région de masquage du coin ou du bord droit."
      ],
      [
        "Taille minimale du cadre affiché (0 = inchangée)",
        "Entier positif ou nul (pixels)",
        "Définit la taille minimale des cadres affichés ; 0 conserve la taille originale."
      ],
      [
        "Épaisseur du trait du cadre",
        "Entier strictement positif (pixels)",
        "Définit l’épaisseur du trait des cadres de détection."
      ],
      [
        "Libellés de classe : 0 Désactivés / 1 Activés",
        "0 / 1",
        "Détermine si les libellés de classe sont affichés."
      ],
      [
        "Largeur / hauteur enregistrée (0 = originale)",
        "Entier positif ou nul (pixels)",
        "Définit les dimensions des images enregistrées ; 0 utilise les dimensions originales."
      ],
      [
        "shrk_hat_x",
        "Entier positif ou nul (pixels)",
        "Ajuste la réduction horizontale de la région de contrôle de la capsule ou de la tête."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Entier strictement positif",
        "Définit les dimensions de la grille de fusion des images."
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
    "dlTitle": "Основные параметры DL",
    "defectTitle": "Параметры контроля дефектов",
    "dl": [
      [
        "Включить",
        "Выкл. / Вкл.",
        "Включает или отключает этот модуль контроля."
      ],
      [
        "Источник локализации/совмещения",
        "Неотрицательное целое число",
        "Выбирает результат локализации/совмещения для входных изображений."
      ],
      [
        "Индекс каталога модели",
        "Неотрицательное целое число",
        "Выбирает каталог или индекс модели."
      ],
      [
        "Имя модели",
        "Текст",
        "Задаёт имя или файл используемой модели."
      ],
      [
        "Включить модель",
        "Выкл. / Вкл.",
        "Определяет, используется ли выбранная модель."
      ],
      [
        "Индекс целевого класса",
        "Неотрицательное целое число",
        "Выбирает класс модели для оценки, например дефекты головки или обжима."
      ],
      [
        "Порог числа объектов в кадре по классам (0–3)",
        "Массив целых чисел по классам",
        "Задаёт порог числа объектов в одном кадре отдельно для каждого класса модели."
      ],
      [
        "Порог числа кадров по классам (0–3)",
        "Массив целых чисел по классам",
        "Задаёт накопительный порог оценки по нескольким кадрам для каждого класса модели."
      ],
      [
        "Индекс маски",
        "Неотрицательное целое число",
        "Выбирает маску для контроля."
      ],
      [
        "Показывать области сегментации",
        "Выкл. / Вкл.",
        "Определяет, отображаются ли области сегментации модели."
      ],
      [
        "Смещение X / Y и ширина / высота маски",
        "Целое число (пиксели)",
        "Задаёт положение и размеры выбранной прямоугольной маски."
      ],
      [
        "Тип модели: 0 Нет / 1 Сегментация / 2 Обнаружение объектов / 3 Классификация",
        "0–3",
        "Выбирает задачу DL: сегментация, обнаружение объектов или классификация."
      ],
      [
        "Порог уверенности",
        "Дробное число, 0–1",
        "Отбрасывает результаты с уверенностью ниже порога."
      ],
      [
        "Порог IoU для NMS (kNmsThreshold)",
        "Дробное число, 0–1",
        "Управляет подавлением перекрывающихся дублирующих рамок обнаружения."
      ],
      [
        "Ширина / высота входного изображения модели",
        "Положительное целое число (пиксели)",
        "Задаёт размеры изображений, передаваемых модели."
      ],
      [
        "kNumClass",
        "Положительное целое число",
        "Задаёт общее число выходных классов модели."
      ],
      [
        "Аннотации результатов: -1 Выкл. / 1 Вкл.",
        "-1 / 1",
        "Управляет отображением рамок обнаружения и аннотаций на изображениях результатов."
      ],
      [
        "Метки классов: 0 Выкл. / 1 Вкл.",
        "0 / 1",
        "Определяет, отображаются ли метки классов."
      ],
      [
        "Вес смешивания цвета маски",
        "Дробное число, 0–1",
        "Задаёт вес смешивания цвета маски с исходным изображением."
      ],
      [
        "Ширина / высота фрагмента",
        "Положительное целое число (пиксели)",
        "Задаёт размеры окна для контроля по фрагментам."
      ],
      [
        "Шаг фрагментов X / Y",
        "Положительное целое число (пиксели)",
        "Задаёт горизонтальный и вертикальный шаг скользящего окна."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Неотрицательное целое число",
        "Задаёт начало последовательности, исключаемые конечные кадры и интервал контроля."
      ],
      [
        "Режим сохранения изображений",
        "Значение режима",
        "Выбирает, какие изображения результатов сохранять."
      ],
      [
        "Интервал сохранения изображений",
        "Положительное целое число",
        "Задаёт интервал сохранения изображений результатов."
      ],
      [
        "Минимальный размер отображаемой рамки (0 = без изменений)",
        "Неотрицательное целое число (пиксели)",
        "Задаёт минимальный размер отображаемой рамки; 0 сохраняет исходный размер."
      ],
      [
        "Толщина линии рамки",
        "Положительное целое число (пиксели)",
        "Задаёт толщину линий рамок обнаружения."
      ],
      [
        "Индекс класса для отображения рамок",
        "Неотрицательное целое число",
        "Выбирает класс, для которого отображаются рамки обнаружения."
      ],
      [
        "Цвет рамки B / G / R",
        "Целое число, 0–255",
        "Задаёт синий, зелёный и красный каналы цвета рамки."
      ],
      [
        "Ширина / высота сохраняемого изображения (0 = исходная)",
        "Неотрицательное целое число (пиксели)",
        "Задаёт размеры сохраняемых изображений; 0 использует исходные размеры."
      ],
      [
        "Ширина / высота сетки объединения",
        "Положительное целое число",
        "Задаёт размеры сетки объединения изображений."
      ],
      [
        "Обнаружение неподвижных объектов (-1 = отключено)",
        "-1 или значение режима",
        "Управляет обнаружением неподвижных объектов; -1 отключает его."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Целое число (пиксели)",
        "Корректирует горизонтальное и вертикальное смещение точек маски."
      ],
      [
        "b_pass",
        "0 / 1",
        "Определяет, принимается ли результат контроля напрямую."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Неотрицательное целое число (пиксели)",
        "Сужает каждую из четырёх границ области контроля."
      ],
      [
        "Порог бинаризации постобработки",
        "Целое число, 0–255",
        "Задаёт порог бинаризации при постобработке."
      ],
      [
        "Порог числа пикселей переднего плана при постобработке",
        "Целое число; -1 = отключено",
        "Задаёт порог числа ненулевых пикселей переднего плана при постобработке."
      ],
      [
        "Режим HAL",
        "Значение режима",
        "Выбирает режим постобработки HAL."
      ],
      [
        "Минимальная протяжённость HAL",
        "Положительное целое число (пиксели)",
        "Задаёт минимальную допустимую протяжённость в режиме HAL."
      ]
    ],
    "defect": [
      [
        "Включить",
        "Выкл. / Вкл.",
        "Включает или отключает этот модуль контроля."
      ],
      [
        "Источник локализации/совмещения",
        "Неотрицательное целое число",
        "Выбирает результат локализации/совмещения для входных изображений."
      ],
      [
        "Индекс модели",
        "Неотрицательное целое число",
        "Выбирает модель обнаружения дефектов."
      ],
      [
        "Подкаталог модели",
        "Текст",
        "Задаёт подкаталог, содержащий модель."
      ],
      [
        "Включить модель",
        "Выкл. / Вкл.",
        "Определяет, используется ли выбранная модель."
      ],
      [
        "Режим сохранения изображений",
        "Значение режима",
        "Выбирает, какие изображения результатов сохранять."
      ],
      [
        "Интервал сохранения изображений",
        "Положительное целое число",
        "Задаёт интервал сохранения изображений результатов."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Ширина × высота (пиксели)",
        "Задаёт размеры изображений, передаваемых модели."
      ],
      [
        "merge1_split2",
        "Значение режима",
        "Выбирает объединение или разбиение изображений."
      ],
      [
        "Аннотации результатов: -1 Выкл. / 1 Вкл.",
        "-1 / 1",
        "Управляет отображением рамок обнаружения и аннотаций на изображениях результатов."
      ],
      [
        "Порог числа пикселей переднего плана в кадре",
        "Положительное целое число",
        "Задаёт порог числа ненулевых пикселей переднего плана в одном кадре."
      ],
      [
        "Количество изображений",
        "Положительное целое число",
        "Задаёт накопительный порог ненулевых пикселей переднего плана по нескольким кадрам."
      ],
      [
        "Левая маска: ширина / высота / X / Y",
        "Целое число (пиксели)",
        "Задаёт маскируемую область левого угла или края."
      ],
      [
        "Правая маска: ширина / высота / X / Y",
        "Целое число (пиксели)",
        "Задаёт маскируемую область правого угла или края."
      ],
      [
        "Минимальный размер отображаемой рамки (0 = без изменений)",
        "Неотрицательное целое число (пиксели)",
        "Задаёт минимальный размер отображаемой рамки; 0 сохраняет исходный размер."
      ],
      [
        "Толщина линии рамки",
        "Положительное целое число (пиксели)",
        "Задаёт толщину линий рамок обнаружения."
      ],
      [
        "Метки классов: 0 Выкл. / 1 Вкл.",
        "0 / 1",
        "Определяет, отображаются ли метки классов."
      ],
      [
        "Ширина / высота сохраняемого изображения (0 = исходная)",
        "Неотрицательное целое число (пиксели)",
        "Задаёт размеры сохраняемых изображений; 0 использует исходные размеры."
      ],
      [
        "shrk_hat_x",
        "Неотрицательное целое число (пиксели)",
        "Регулирует горизонтальное сужение области контроля колпачка или головки."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Положительное целое число",
        "Задаёт размеры сетки объединения изображений."
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
    "dlTitle": "Yaygın DL parametreleri",
    "defectTitle": "Kusur kontrolü parametreleri",
    "dl": [
      [
        "Etkinleştir",
        "Kapalı / Açık",
        "Bu kontrol modülünü açar veya kapatır."
      ],
      [
        "Konum belirleme/hizalama kaynağı",
        "Negatif olmayan tam sayı",
        "Giriş görüntüleri için konum belirleme/hizalama sonucunu seçer."
      ],
      [
        "Model klasörü indeksi",
        "Negatif olmayan tam sayı",
        "Model klasörünü veya indeksini seçer."
      ],
      [
        "Model adı",
        "Metin",
        "Kullanılacak model adını veya dosyasını belirtir."
      ],
      [
        "Modeli etkinleştir",
        "Kapalı / Açık",
        "Seçilen modelin kullanılıp kullanılmayacağını belirler."
      ],
      [
        "Hedef sınıf indeksi",
        "Negatif olmayan tam sayı",
        "Değerlendirilecek model sınıfını seçer; örneğin başlık veya kıvırma kusurları."
      ],
      [
        "Sınıfa göre kare başına nesne sayısı eşiği (0–3)",
        "Sınıfa göre tam sayı dizisi",
        "Her model sınıfı için kare başına nesne sayısı eşiğini ayrı ayrı ayarlar."
      ],
      [
        "Sınıfa göre kare sayısı eşiği (0–3)",
        "Sınıfa göre tam sayı dizisi",
        "Her model sınıfı için birden çok karede biriken değerlendirme eşiğini ayarlar."
      ],
      [
        "Maske indeksi",
        "Negatif olmayan tam sayı",
        "Kontrolde kullanılan maskeyi seçer."
      ],
      [
        "Segmentasyon bölgelerini göster",
        "Kapalı / Açık",
        "Modelin segmentasyon bölgelerinin gösterilip gösterilmeyeceğini belirler."
      ],
      [
        "Maske X / Y ofseti ve genişlik / yükseklik",
        "Tam sayı (piksel)",
        "Seçilen dikdörtgen maskenin konumunu ve boyutlarını ayarlar."
      ],
      [
        "Model türü: 0 Yok / 1 Segmentasyon / 2 Nesne algılama / 3 Sınıflandırma",
        "0–3",
        "DL görevini seçer: segmentasyon, nesne algılama veya sınıflandırma."
      ],
      [
        "Güven eşiği",
        "Ondalık sayı, 0–1",
        "Güven eşiğinin altındaki algılama sonuçlarını eler."
      ],
      [
        "NMS IoU eşiği (kNmsThreshold)",
        "Ondalık sayı, 0–1",
        "Örtüşen yinelenen algılama kutularının bastırılmasını kontrol eder."
      ],
      [
        "Model giriş genişliği / yüksekliği",
        "Pozitif tam sayı (piksel)",
        "Modele verilen görüntülerin boyutlarını ayarlar."
      ],
      [
        "kNumClass",
        "Pozitif tam sayı",
        "Modelin toplam çıkış sınıfı sayısını ayarlar."
      ],
      [
        "Sonuç açıklamaları: -1 Kapalı / 1 Açık",
        "-1 / 1",
        "Sonuç görüntülerinde algılama kutularının ve açıklamaların gösterimini kontrol eder."
      ],
      [
        "Sınıf etiketleri: 0 Kapalı / 1 Açık",
        "0 / 1",
        "Sınıf etiketlerinin gösterilip gösterilmeyeceğini belirler."
      ],
      [
        "Maske rengi karıştırma ağırlığı",
        "Ondalık sayı, 0–1",
        "Maske renginin orijinal görüntüyle karıştırma ağırlığını ayarlar."
      ],
      [
        "Parça genişliği / yüksekliği",
        "Pozitif tam sayı (piksel)",
        "Parçalı kontrol için pencere boyutlarını ayarlar."
      ],
      [
        "Parça adımı X / Y",
        "Pozitif tam sayı (piksel)",
        "Kayan pencerenin yatay ve dikey adımlarını ayarlar."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Negatif olmayan tam sayı",
        "Dizi başlangıcını, hariç tutulan son kareleri ve kontrol aralığını belirler."
      ],
      [
        "Görüntü kaydetme modu",
        "Mod değeri",
        "Hangi sonuç görüntülerinin kaydedileceğini seçer."
      ],
      [
        "Görüntü kaydetme aralığı",
        "Pozitif tam sayı",
        "Kaydedilen sonuç görüntüleri arasındaki aralığı ayarlar."
      ],
      [
        "En küçük görüntülenen kutu boyutu (0 = değişmez)",
        "Negatif olmayan tam sayı (piksel)",
        "Görüntülenen kutunun en küçük boyutunu ayarlar; 0 orijinal boyutu korur."
      ],
      [
        "Kutu çizgi kalınlığı",
        "Pozitif tam sayı (piksel)",
        "Algılama kutularının çizgi kalınlığını ayarlar."
      ],
      [
        "Kutu çizimi için sınıf indeksi",
        "Negatif olmayan tam sayı",
        "Algılama kutuları çizilecek sınıfı seçer."
      ],
      [
        "Kutu rengi B / G / R",
        "Tam sayı, 0–255",
        "Kutu renginin mavi, yeşil ve kırmızı kanallarını ayarlar."
      ],
      [
        "Kaydedilen görüntü genişliği / yüksekliği (0 = orijinal)",
        "Negatif olmayan tam sayı (piksel)",
        "Kaydedilen görüntü boyutlarını ayarlar; 0 orijinal boyutları kullanır."
      ],
      [
        "Birleştirme ızgarası genişliği / yüksekliği",
        "Pozitif tam sayı",
        "Görüntüleri birleştirmek için kullanılan ızgara boyutlarını ayarlar."
      ],
      [
        "Sabit nesne algılama (-1 = kapalı)",
        "-1 veya mod değeri",
        "Sabit nesne algılamayı kontrol eder; -1 devre dışı bırakır."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Tam sayı (piksel)",
        "Maske noktalarının yatay ve dikey ofsetlerini ayarlar."
      ],
      [
        "b_pass",
        "0 / 1",
        "Kontrol sonucunun doğrudan kabul edilip edilmeyeceğini belirler."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Negatif olmayan tam sayı (piksel)",
        "Kontrol bölgesinin dört sınırını ayrı ayrı daraltır."
      ],
      [
        "Son işleme ikilileştirme eşiği",
        "Tam sayı, 0–255",
        "Son işleme için ikilileştirme eşiğini ayarlar."
      ],
      [
        "Son işleme ön plan piksel sayısı eşiği",
        "Tam sayı; -1 = kapalı",
        "Son işlemede sıfır olmayan ön plan piksel sayısı eşiğini ayarlar."
      ],
      [
        "HAL modu",
        "Mod değeri",
        "HAL son işleme modunu seçer."
      ],
      [
        "HAL en küçük açıklık",
        "Pozitif tam sayı (piksel)",
        "HAL modunda geçerli en küçük açıklığı ayarlar."
      ]
    ],
    "defect": [
      [
        "Etkinleştir",
        "Kapalı / Açık",
        "Bu kontrol modülünü açar veya kapatır."
      ],
      [
        "Konum belirleme/hizalama kaynağı",
        "Negatif olmayan tam sayı",
        "Giriş görüntüleri için konum belirleme/hizalama sonucunu seçer."
      ],
      [
        "Model indeksi",
        "Negatif olmayan tam sayı",
        "Kusur kontrolü modelini seçer."
      ],
      [
        "Model alt klasörü",
        "Metin",
        "Modelin bulunduğu alt klasörü belirtir."
      ],
      [
        "Modeli etkinleştir",
        "Kapalı / Açık",
        "Seçilen modelin kullanılıp kullanılmayacağını belirler."
      ],
      [
        "Görüntü kaydetme modu",
        "Mod değeri",
        "Hangi sonuç görüntülerinin kaydedileceğini seçer."
      ],
      [
        "Görüntü kaydetme aralığı",
        "Pozitif tam sayı",
        "Kaydedilen sonuç görüntüleri arasındaki aralığı ayarlar."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Genişlik × yükseklik (piksel)",
        "Modele verilen görüntülerin boyutlarını ayarlar."
      ],
      [
        "merge1_split2",
        "Mod değeri",
        "Görüntü birleştirme veya bölmeyi seçer."
      ],
      [
        "Sonuç açıklamaları: -1 Kapalı / 1 Açık",
        "-1 / 1",
        "Sonuç görüntülerinde algılama kutularının ve açıklamaların gösterimini kontrol eder."
      ],
      [
        "Kare başına ön plan piksel sayısı eşiği",
        "Pozitif tam sayı",
        "Tek karede sıfır olmayan ön plan piksel sayısı eşiğini ayarlar."
      ],
      [
        "Görüntü sayısı",
        "Pozitif tam sayı",
        "Birden çok karede biriken sıfır olmayan ön plan piksel sayısı eşiğini ayarlar."
      ],
      [
        "Sol maske genişliği / yüksekliği / X / Y",
        "Tam sayı (piksel)",
        "Sol köşe veya kenar maskeleme bölgesini ayarlar."
      ],
      [
        "Sağ maske genişliği / yüksekliği / X / Y",
        "Tam sayı (piksel)",
        "Sağ köşe veya kenar maskeleme bölgesini ayarlar."
      ],
      [
        "En küçük görüntülenen kutu boyutu (0 = değişmez)",
        "Negatif olmayan tam sayı (piksel)",
        "Görüntülenen kutunun en küçük boyutunu ayarlar; 0 orijinal boyutu korur."
      ],
      [
        "Kutu çizgi kalınlığı",
        "Pozitif tam sayı (piksel)",
        "Algılama kutularının çizgi kalınlığını ayarlar."
      ],
      [
        "Sınıf etiketleri: 0 Kapalı / 1 Açık",
        "0 / 1",
        "Sınıf etiketlerinin gösterilip gösterilmeyeceğini belirler."
      ],
      [
        "Kaydedilen görüntü genişliği / yüksekliği (0 = orijinal)",
        "Negatif olmayan tam sayı (piksel)",
        "Kaydedilen görüntü boyutlarını ayarlar; 0 orijinal boyutları kullanır."
      ],
      [
        "shrk_hat_x",
        "Negatif olmayan tam sayı (piksel)",
        "Kapak veya başlık kontrol bölgesinin yatay daralmasını ayarlar."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Pozitif tam sayı",
        "Görüntüleri birleştirmek için kullanılan ızgara boyutlarını ayarlar."
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
    "dlTitle": "Parámetros DL habituales",
    "defectTitle": "Parámetros de inspección de defectos",
    "dl": [
      [
        "Activar",
        "Desactivado / Activado",
        "Activa o desactiva este módulo de inspección."
      ],
      [
        "Fuente de localización/registro",
        "Entero no negativo",
        "Selecciona el resultado de localización/registro de las imágenes de entrada."
      ],
      [
        "Índice del directorio del modelo",
        "Entero no negativo",
        "Selecciona el directorio o índice del modelo."
      ],
      [
        "Nombre del modelo",
        "Texto",
        "Especifica el nombre o archivo del modelo utilizado."
      ],
      [
        "Activar modelo",
        "Desactivado / Activado",
        "Determina si se utiliza el modelo seleccionado."
      ],
      [
        "Índice de clase objetivo",
        "Entero no negativo",
        "Selecciona la clase del modelo que se evaluará, por ejemplo defectos de cabeza o de engarzado."
      ],
      [
        "Umbral de objetos por fotograma y por clase (0–3)",
        "Matriz de enteros por clase",
        "Establece el umbral de objetos por fotograma para cada clase del modelo."
      ],
      [
        "Umbral de número de fotogramas por clase (0–3)",
        "Matriz de enteros por clase",
        "Establece el umbral de evaluación acumulada en varios fotogramas para cada clase del modelo."
      ],
      [
        "Índice de máscara",
        "Entero no negativo",
        "Selecciona la máscara utilizada en la inspección."
      ],
      [
        "Mostrar regiones segmentadas",
        "Desactivado / Activado",
        "Determina si se muestran las regiones segmentadas por el modelo."
      ],
      [
        "Desplazamiento X / Y y ancho / alto de máscara",
        "Entero (píxeles)",
        "Establece la posición y las dimensiones de la máscara rectangular seleccionada."
      ],
      [
        "Tipo de modelo: 0 Ninguno / 1 Segmentación / 2 Detección de objetos / 3 Clasificación",
        "0–3",
        "Selecciona la tarea DL: segmentación, detección de objetos o clasificación."
      ],
      [
        "Umbral de confianza",
        "Decimal, 0–1",
        "Descarta los resultados cuya confianza es inferior al umbral."
      ],
      [
        "Umbral IoU de NMS (kNmsThreshold)",
        "Decimal, 0–1",
        "Controla la supresión de cuadros de detección duplicados que se solapan."
      ],
      [
        "Ancho / alto de entrada del modelo",
        "Entero positivo (píxeles)",
        "Establece las dimensiones de las imágenes suministradas al modelo."
      ],
      [
        "kNumClass",
        "Entero positivo",
        "Establece el número total de clases de salida del modelo."
      ],
      [
        "Anotaciones de resultados: -1 Desactivadas / 1 Activadas",
        "-1 / 1",
        "Controla los cuadros de detección y las anotaciones en las imágenes de resultados."
      ],
      [
        "Etiquetas de clase: 0 Desactivadas / 1 Activadas",
        "0 / 1",
        "Determina si se muestran las etiquetas de clase."
      ],
      [
        "Peso de mezcla del color de máscara",
        "Decimal, 0–1",
        "Establece el peso de mezcla del color de máscara con la imagen original."
      ],
      [
        "Ancho / alto del bloque",
        "Entero positivo (píxeles)",
        "Establece las dimensiones de la ventana para inspección por bloques."
      ],
      [
        "Paso de bloques X / Y",
        "Entero positivo (píxeles)",
        "Establece los pasos horizontal y vertical de la ventana deslizante."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Entero no negativo",
        "Define el inicio de secuencia, los fotogramas finales excluidos y el intervalo de inspección."
      ],
      [
        "Modo de guardado de imágenes",
        "Valor de modo",
        "Selecciona las imágenes de resultados que se guardan."
      ],
      [
        "Intervalo de guardado de imágenes",
        "Entero positivo",
        "Establece el intervalo entre imágenes de resultados guardadas."
      ],
      [
        "Tamaño mínimo del cuadro mostrado (0 = sin cambios)",
        "Entero no negativo (píxeles)",
        "Establece el tamaño mínimo del cuadro mostrado; 0 conserva el tamaño original."
      ],
      [
        "Grosor de línea del cuadro",
        "Entero positivo (píxeles)",
        "Establece el grosor de línea de los cuadros de detección."
      ],
      [
        "Índice de clase para dibujar cuadros",
        "Entero no negativo",
        "Selecciona la clase cuyos cuadros de detección se dibujan."
      ],
      [
        "Color del cuadro B / G / R",
        "Entero, 0–255",
        "Establece los canales azul, verde y rojo del color del cuadro."
      ],
      [
        "Ancho / alto de imagen guardada (0 = original)",
        "Entero no negativo (píxeles)",
        "Establece las dimensiones de las imágenes guardadas; 0 usa las originales."
      ],
      [
        "Ancho / alto de la cuadrícula de unión",
        "Entero positivo",
        "Establece las dimensiones de la cuadrícula de unión de imágenes."
      ],
      [
        "Detección de objetos inmóviles (-1 = desactivada)",
        "-1 o valor de modo",
        "Controla la detección de objetos inmóviles; -1 la desactiva."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Entero (píxeles)",
        "Ajusta los desplazamientos horizontal y vertical de los puntos de máscara."
      ],
      [
        "b_pass",
        "0 / 1",
        "Determina si el resultado de inspección se acepta directamente."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Entero no negativo (píxeles)",
        "Contrae por separado los cuatro límites de la región de inspección."
      ],
      [
        "Umbral de binarización de posprocesamiento",
        "Entero, 0–255",
        "Establece el umbral de binarización del posprocesamiento."
      ],
      [
        "Umbral de píxeles de primer plano del posprocesamiento",
        "Entero; -1 = desactivado",
        "Establece el umbral de píxeles no nulos de primer plano del posprocesamiento."
      ],
      [
        "Modo HAL",
        "Valor de modo",
        "Selecciona el modo de posprocesamiento HAL."
      ],
      [
        "Extensión mínima HAL",
        "Entero positivo (píxeles)",
        "Establece la extensión mínima válida en modo HAL."
      ]
    ],
    "defect": [
      [
        "Activar",
        "Desactivado / Activado",
        "Activa o desactiva este módulo de inspección."
      ],
      [
        "Fuente de localización/registro",
        "Entero no negativo",
        "Selecciona el resultado de localización/registro de las imágenes de entrada."
      ],
      [
        "Índice del modelo",
        "Entero no negativo",
        "Selecciona el modelo de inspección de defectos."
      ],
      [
        "Subdirectorio del modelo",
        "Texto",
        "Especifica el subdirectorio que contiene el modelo."
      ],
      [
        "Activar modelo",
        "Desactivado / Activado",
        "Determina si se utiliza el modelo seleccionado."
      ],
      [
        "Modo de guardado de imágenes",
        "Valor de modo",
        "Selecciona las imágenes de resultados que se guardan."
      ],
      [
        "Intervalo de guardado de imágenes",
        "Entero positivo",
        "Establece el intervalo entre imágenes de resultados guardadas."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Ancho × alto (píxeles)",
        "Establece las dimensiones de las imágenes suministradas al modelo."
      ],
      [
        "merge1_split2",
        "Valor de modo",
        "Selecciona la unión o división de imágenes."
      ],
      [
        "Anotaciones de resultados: -1 Desactivadas / 1 Activadas",
        "-1 / 1",
        "Controla los cuadros de detección y las anotaciones en las imágenes de resultados."
      ],
      [
        "Umbral de píxeles de primer plano por fotograma",
        "Entero positivo",
        "Establece el umbral de píxeles no nulos de primer plano en un fotograma."
      ],
      [
        "Número de imágenes",
        "Entero positivo",
        "Establece el umbral acumulado de píxeles no nulos de primer plano en varios fotogramas."
      ],
      [
        "Máscara izquierda: ancho / alto / X / Y",
        "Entero (píxeles)",
        "Establece la región de enmascaramiento de la esquina o el borde izquierdo."
      ],
      [
        "Máscara derecha: ancho / alto / X / Y",
        "Entero (píxeles)",
        "Establece la región de enmascaramiento de la esquina o el borde derecho."
      ],
      [
        "Tamaño mínimo del cuadro mostrado (0 = sin cambios)",
        "Entero no negativo (píxeles)",
        "Establece el tamaño mínimo del cuadro mostrado; 0 conserva el tamaño original."
      ],
      [
        "Grosor de línea del cuadro",
        "Entero positivo (píxeles)",
        "Establece el grosor de línea de los cuadros de detección."
      ],
      [
        "Etiquetas de clase: 0 Desactivadas / 1 Activadas",
        "0 / 1",
        "Determina si se muestran las etiquetas de clase."
      ],
      [
        "Ancho / alto de imagen guardada (0 = original)",
        "Entero no negativo (píxeles)",
        "Establece las dimensiones de las imágenes guardadas; 0 usa las originales."
      ],
      [
        "shrk_hat_x",
        "Entero no negativo (píxeles)",
        "Ajusta la contracción horizontal de la región de inspección del tapón o la cabeza."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Entero positivo",
        "Establece las dimensiones de la cuadrícula de unión de imágenes."
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
    "dlTitle": "Parametri DL comuni",
    "defectTitle": "Parametri di controllo dei difetti",
    "dl": [
      [
        "Abilita",
        "Disattivato / Attivato",
        "Attiva o disattiva questo modulo di controllo."
      ],
      [
        "Sorgente di localizzazione/registrazione",
        "Intero non negativo",
        "Seleziona il risultato di localizzazione/registrazione per le immagini in ingresso."
      ],
      [
        "Indice della cartella del modello",
        "Intero non negativo",
        "Seleziona la cartella o l’indice del modello."
      ],
      [
        "Nome del modello",
        "Testo",
        "Specifica il nome o il file del modello da utilizzare."
      ],
      [
        "Abilita modello",
        "Disattivato / Attivato",
        "Determina se viene utilizzato il modello selezionato."
      ],
      [
        "Indice della classe obiettivo",
        "Intero non negativo",
        "Seleziona la classe del modello da valutare, ad esempio difetti della testa o della crimpatura."
      ],
      [
        "Soglia del numero di oggetti per fotogramma e per classe (0–3)",
        "Array di interi per classe",
        "Imposta la soglia del numero di oggetti per fotogramma per ciascuna classe del modello."
      ],
      [
        "Soglia del numero di fotogrammi per classe (0–3)",
        "Array di interi per classe",
        "Imposta la soglia di valutazione cumulativa su più fotogrammi per ciascuna classe del modello."
      ],
      [
        "Indice della maschera",
        "Intero non negativo",
        "Seleziona la maschera utilizzata per il controllo."
      ],
      [
        "Mostra regioni segmentate",
        "Disattivato / Attivato",
        "Determina se vengono visualizzate le regioni segmentate dal modello."
      ],
      [
        "Offset X / Y e larghezza / altezza della maschera",
        "Intero (pixel)",
        "Imposta la posizione e le dimensioni della maschera rettangolare selezionata."
      ],
      [
        "Tipo di modello: 0 Nessuno / 1 Segmentazione / 2 Rilevamento oggetti / 3 Classificazione",
        "0–3",
        "Seleziona il compito DL: segmentazione, rilevamento oggetti o classificazione."
      ],
      [
        "Soglia di confidenza",
        "Decimale, 0–1",
        "Scarta i risultati con confidenza inferiore alla soglia."
      ],
      [
        "Soglia IoU NMS (kNmsThreshold)",
        "Decimale, 0–1",
        "Controlla la soppressione dei riquadri di rilevamento duplicati e sovrapposti."
      ],
      [
        "Larghezza / altezza di ingresso del modello",
        "Intero positivo (pixel)",
        "Imposta le dimensioni delle immagini fornite al modello."
      ],
      [
        "kNumClass",
        "Intero positivo",
        "Imposta il numero totale di classi di uscita del modello."
      ],
      [
        "Annotazioni dei risultati: -1 Disattivate / 1 Attivate",
        "-1 / 1",
        "Controlla la visualizzazione di riquadri e annotazioni nelle immagini dei risultati."
      ],
      [
        "Etichette di classe: 0 Disattivate / 1 Attivate",
        "0 / 1",
        "Determina se vengono visualizzate le etichette di classe."
      ],
      [
        "Peso di miscelazione del colore della maschera",
        "Decimale, 0–1",
        "Imposta il peso di miscelazione del colore della maschera con l’immagine originale."
      ],
      [
        "Larghezza / altezza del riquadro",
        "Intero positivo (pixel)",
        "Imposta le dimensioni della finestra per il controllo a riquadri."
      ],
      [
        "Passo dei riquadri X / Y",
        "Intero positivo (pixel)",
        "Imposta il passo orizzontale e verticale della finestra scorrevole."
      ],
      [
        "seq_begin / seq_rbegin / seq_interval",
        "Intero non negativo",
        "Definisce l’inizio della sequenza, i fotogrammi finali esclusi e l’intervallo di controllo."
      ],
      [
        "Modalità di salvataggio delle immagini",
        "Valore di modalità",
        "Seleziona quali immagini dei risultati salvare."
      ],
      [
        "Intervallo di salvataggio delle immagini",
        "Intero positivo",
        "Imposta l’intervallo tra le immagini dei risultati salvate."
      ],
      [
        "Dimensione minima del riquadro visualizzato (0 = invariata)",
        "Intero non negativo (pixel)",
        "Imposta la dimensione minima del riquadro visualizzato; 0 mantiene quella originale."
      ],
      [
        "Spessore della linea del riquadro",
        "Intero positivo (pixel)",
        "Imposta lo spessore delle linee dei riquadri di rilevamento."
      ],
      [
        "Indice della classe per il disegno dei riquadri",
        "Intero non negativo",
        "Seleziona la classe per cui disegnare i riquadri di rilevamento."
      ],
      [
        "Colore del riquadro B / G / R",
        "Intero, 0–255",
        "Imposta i canali blu, verde e rosso del colore del riquadro."
      ],
      [
        "Larghezza / altezza immagine salvata (0 = originale)",
        "Intero non negativo (pixel)",
        "Imposta le dimensioni delle immagini salvate; 0 usa quelle originali."
      ],
      [
        "Larghezza / altezza della griglia di unione",
        "Intero positivo",
        "Imposta le dimensioni della griglia di unione delle immagini."
      ],
      [
        "Rilevamento di oggetti fermi (-1 = disattivato)",
        "-1 o valore di modalità",
        "Controlla il rilevamento di oggetti fermi; -1 lo disattiva."
      ],
      [
        "mask_pt_offset_x / mask_pt_offset_y",
        "Intero (pixel)",
        "Regola gli offset orizzontale e verticale dei punti della maschera."
      ],
      [
        "b_pass",
        "0 / 1",
        "Determina se il risultato del controllo viene accettato direttamente."
      ],
      [
        "shrk_tlx / shrk_brx / shrk_tly / shrk_bry",
        "Intero non negativo (pixel)",
        "Restringe separatamente i quattro bordi della regione di controllo."
      ],
      [
        "Soglia di binarizzazione del post-elaborazione",
        "Intero, 0–255",
        "Imposta la soglia di binarizzazione per la post-elaborazione."
      ],
      [
        "Soglia dei pixel in primo piano della post-elaborazione",
        "Intero; -1 = disattivato",
        "Imposta la soglia dei pixel non nulli in primo piano per la post-elaborazione."
      ],
      [
        "Modalità HAL",
        "Valore di modalità",
        "Seleziona la modalità di post-elaborazione HAL."
      ],
      [
        "Estensione minima HAL",
        "Intero positivo (pixel)",
        "Imposta l’estensione minima valida in modalità HAL."
      ]
    ],
    "defect": [
      [
        "Abilita",
        "Disattivato / Attivato",
        "Attiva o disattiva questo modulo di controllo."
      ],
      [
        "Sorgente di localizzazione/registrazione",
        "Intero non negativo",
        "Seleziona il risultato di localizzazione/registrazione per le immagini in ingresso."
      ],
      [
        "Indice del modello",
        "Intero non negativo",
        "Seleziona il modello di controllo dei difetti."
      ],
      [
        "Sottocartella del modello",
        "Testo",
        "Specifica la sottocartella contenente il modello."
      ],
      [
        "Abilita modello",
        "Disattivato / Attivato",
        "Determina se viene utilizzato il modello selezionato."
      ],
      [
        "Modalità di salvataggio delle immagini",
        "Valore di modalità",
        "Seleziona quali immagini dei risultati salvare."
      ],
      [
        "Intervallo di salvataggio delle immagini",
        "Intero positivo",
        "Imposta l’intervallo tra le immagini dei risultati salvate."
      ],
      [
        "sz_im_dl_x / sz_im_dl_y",
        "Larghezza × altezza (pixel)",
        "Imposta le dimensioni delle immagini fornite al modello."
      ],
      [
        "merge1_split2",
        "Valore di modalità",
        "Seleziona l’unione o la suddivisione delle immagini."
      ],
      [
        "Annotazioni dei risultati: -1 Disattivate / 1 Attivate",
        "-1 / 1",
        "Controlla la visualizzazione di riquadri e annotazioni nelle immagini dei risultati."
      ],
      [
        "Soglia dei pixel in primo piano per fotogramma",
        "Intero positivo",
        "Imposta la soglia dei pixel non nulli in primo piano per singolo fotogramma."
      ],
      [
        "Numero di immagini",
        "Intero positivo",
        "Imposta la soglia cumulativa dei pixel non nulli in primo piano su più fotogrammi."
      ],
      [
        "Maschera sinistra: larghezza / altezza / X / Y",
        "Intero (pixel)",
        "Imposta la regione di mascheratura dell’angolo o del bordo sinistro."
      ],
      [
        "Maschera destra: larghezza / altezza / X / Y",
        "Intero (pixel)",
        "Imposta la regione di mascheratura dell’angolo o del bordo destro."
      ],
      [
        "Dimensione minima del riquadro visualizzato (0 = invariata)",
        "Intero non negativo (pixel)",
        "Imposta la dimensione minima del riquadro visualizzato; 0 mantiene quella originale."
      ],
      [
        "Spessore della linea del riquadro",
        "Intero positivo (pixel)",
        "Imposta lo spessore delle linee dei riquadri di rilevamento."
      ],
      [
        "Etichette di classe: 0 Disattivate / 1 Attivate",
        "0 / 1",
        "Determina se vengono visualizzate le etichette di classe."
      ],
      [
        "Larghezza / altezza immagine salvata (0 = originale)",
        "Intero non negativo (pixel)",
        "Imposta le dimensioni delle immagini salvate; 0 usa quelle originali."
      ],
      [
        "shrk_hat_x",
        "Intero non negativo (pixel)",
        "Regola la riduzione orizzontale della regione di controllo della capsula o della testa."
      ],
      [
        "sz_merge_qrid_x / sz_merge_qrid_y",
        "Intero positivo",
        "Imposta le dimensioni della griglia di unione delle immagini."
      ]
    ]
  }
};
  const fallback = (code) => rows[code] || rows.en;
  window.advancedPageTitles = {
    zh: { dl: "DL 模块常用参数说明", defect: "缺陷检测参数说明" },
    en: { dl: "Common DL Parameters", defect: "Defect Detection Parameters" },
    fr: { dl: "Paramètres DL courants", defect: "Paramètres de détection des défauts" },
    ru: { dl: "Основные параметры DL", defect: "Параметры контроля дефектов" },
    tr: { dl: "Yaygın DL parametreleri", defect: "Kusur algılama parametreleri" },
    it: { dl: "Parametri DL comuni", defect: "Parametri di rilevamento difetti" },
    es: { dl: "Parámetros DL comunes", defect: "Parámetros de detección de defectos" }
  };
  window.renderAdvancedParameters = (code) => {
    const version = fallback(code);
    ["dl", "defect"].forEach(kind => {
      const body = document.getElementById(`${kind}-parameter-rows`);
      if (!body) return;
      body.replaceChildren();
      version[kind].forEach(values => {
        const tr = document.createElement("tr");
        values.forEach((value, index) => { const td = document.createElement("td"); td.textContent = value; td.dataset.label = version.headers[index]; tr.appendChild(td); });
        body.appendChild(tr);
      });
      const title = document.getElementById(`${kind}-page-title`); if (title) title.textContent = version[`${kind}Title`];
      const lang = document.getElementById(`${kind}-language`); if (lang) lang.textContent = version.name;
      const count = document.getElementById(`${kind}-count`); if (count) count.textContent = `${version[kind].length} ${({zh:"项参数",en:"parameters",fr:"paramètres",ru:"параметров",tr:"parametre",es:"parámetros",it:"parametri"})[code] || "parameters"}`;
      ["name", "range", "function"].forEach((part, index) => { const el = document.getElementById(`${kind}-header-${part}`); if (el) el.textContent = version.headers[index]; });
    });
  };
})();
