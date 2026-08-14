(() => {
  "use strict";

  const translations = {
    zh: {
      navPlc: "PLC排查", homePlcButton: "PLC问题排查", supportPlcTitle: "PLC与驱动器", supportPlcCopy: "按驱动器诊断码和固件版本查找对应手册页。", enterPlc: "进入PLC排查",
      plcTitle: "PLC问题排查", plcLead: "根据设备类型、固件版本和诊断码进入对应排查资料。", publicContent: "公开内容", driverManualTitle: "驱动器手册", driverManualCopy: "查询 Rexroth IndraDrive 诊断码，并打开对应固件手册的准确页码。", openDriverManuals: "打开驱动器手册",
      plcGuideTitle: "现场排查前先记录", guideCodeTitle: "完整诊断码", guideCodeCopy: "记录驱动器显示的字母和四位数字，例如 F4002。", guideFirmwareTitle: "固件版本", guideFirmwareCopy: "确认 MPx-02/03 或 MPx-16/17/18，避免套用错误说明。", guideContextTitle: "发生条件", guideContextCopy: "记录上电、运行、停机或通讯切换时的状态及复现步骤。",
      backToPlc: "返回PLC问题排查", manualPageTitle: "驱动器手册", manualPageLead: "搜索诊断码或标题，打开手册中对应的完整原因与处理步骤。", firmwareWarningTitle: "先确认固件版本", firmwareWarning: "相同诊断码在不同固件中可能具有不同名称、原因或处理方法。请优先选择与设备固件匹配的手册。",
      priorityTitle: "诊断信息显示优先级", priorityCopy: "驱动器优先显示级别更高的信息，排查时应先处理错误，再处理警告和命令状态。", classF: "错误 / 严重错误", classE: "警告", classC: "命令 / 命令错误", classA: "运行与状态信息",
      searchTitle: "诊断码搜索", searchCopy: "可输入 F4002、E2050 或标题关键词。", searchLabel: "诊断码或关键词", searchPlaceholder: "例如 F4002、overtemperature、编码器", manualFilterLabel: "手册版本", allManuals: "全部手册", classFilterLabel: "诊断类别", allClasses: "全部类别", resetSearch: "清除",
      manualLibraryTitle: "原始驱动器手册", manualLibraryCopy: "可在线打开或下载完整 PDF；手册页码以 PDF 文件页码为准。", sourceNotice: "本页仅提供检索入口和分类提示，故障原因、安全要求及排除步骤以对应原手册全文为准。",
      totalEntries: "{count} 条手册目录", showingResults: "显示 {shown} 条，共匹配 {total} 条", noResults: "没有找到匹配的诊断码，请检查固件版本或尝试更短的关键词。", openPage: "打开对应页", pageLabel: "第 {page} 页", firmwareLabel: "固件", pagesLabel: "页数", entriesLabel: "可检索目录", openManual: "在线打开", downloadManual: "下载 PDF"
    },
    en: {
      navPlc: "PLC help", homePlcButton: "PLC troubleshooting", supportPlcTitle: "PLC & drive", supportPlcCopy: "Find the correct manual page by drive diagnostic code and firmware version.", enterPlc: "Open PLC help",
      plcTitle: "PLC troubleshooting", plcLead: "Use the device type, firmware version, and diagnostic code to reach the correct reference.", publicContent: "Public content", driverManualTitle: "Drive manuals", driverManualCopy: "Search Rexroth IndraDrive codes and open the exact page in the matching firmware manual.", openDriverManuals: "Open drive manuals",
      plcGuideTitle: "Record these details first", guideCodeTitle: "Full diagnostic code", guideCodeCopy: "Record the letter and four digits shown by the drive, such as F4002.", guideFirmwareTitle: "Firmware version", guideFirmwareCopy: "Confirm MPx-02/03 or MPx-16/17/18 before using a diagnosis.", guideContextTitle: "Operating context", guideContextCopy: "Record whether it occurred at power-up, during operation, stopping, or a communication transition.",
      backToPlc: "Back to PLC troubleshooting", manualPageTitle: "Drive manuals", manualPageLead: "Search by code or title, then open the full cause and remedy on the matching manual page.", firmwareWarningTitle: "Confirm firmware first", firmwareWarning: "The same code can have a different name, cause, or remedy in another firmware version. Always use the manual that matches the device.",
      priorityTitle: "Diagnostic display priority", priorityCopy: "The drive displays the higher-priority message first. Handle errors before warnings and command states.", classF: "Error / fatal error", classE: "Warning", classC: "Command / command error", classA: "Operating and status message",
      searchTitle: "Diagnostic code search", searchCopy: "Enter F4002, E2050, or a title keyword.", searchLabel: "Code or keyword", searchPlaceholder: "e.g. F4002, overtemperature, encoder", manualFilterLabel: "Manual version", allManuals: "All manuals", classFilterLabel: "Diagnostic class", allClasses: "All classes", resetSearch: "Clear",
      manualLibraryTitle: "Original drive manuals", manualLibraryCopy: "Open or download the complete PDFs. Page numbers refer to the PDF file.", sourceNotice: "This page is a search index and classification aid. Use the full matching manual for causes, safety requirements, and remedies.",
      totalEntries: "{count} indexed entries", showingResults: "Showing {shown} of {total} matches", noResults: "No matching code was found. Check the firmware version or try a shorter keyword.", openPage: "Open page", pageLabel: "Page {page}", firmwareLabel: "Firmware", pagesLabel: "Pages", entriesLabel: "Indexed entries", openManual: "Open online", downloadManual: "Download PDF"
    },
    fr: {
      navPlc: "Dépannage PLC", homePlcButton: "Dépannage PLC", supportPlcTitle: "PLC et variateur", supportPlcCopy: "Trouvez la page du manuel selon le code de diagnostic et le firmware.", enterPlc: "Ouvrir le dépannage PLC",
      plcTitle: "Dépannage PLC", plcLead: "Utilisez le type d’équipement, le firmware et le code de diagnostic pour accéder à la bonne documentation.", publicContent: "Contenu public", driverManualTitle: "Manuels des variateurs", driverManualCopy: "Recherchez les codes Rexroth IndraDrive et ouvrez la page exacte du manuel correspondant.", openDriverManuals: "Ouvrir les manuels",
      plcGuideTitle: "Informations à relever d’abord", guideCodeTitle: "Code complet", guideCodeCopy: "Notez la lettre et les quatre chiffres affichés, par exemple F4002.", guideFirmwareTitle: "Version du firmware", guideFirmwareCopy: "Confirmez MPx-02/03 ou MPx-16/17/18 avant d’appliquer un diagnostic.", guideContextTitle: "Contexte d’apparition", guideContextCopy: "Notez si le défaut apparaît au démarrage, en marche, à l’arrêt ou lors d’un changement de communication.",
      backToPlc: "Retour au dépannage PLC", manualPageTitle: "Manuels des variateurs", manualPageLead: "Recherchez un code ou un titre, puis ouvrez la cause et la solution dans le manuel correspondant.", firmwareWarningTitle: "Vérifiez d’abord le firmware", firmwareWarning: "Un même code peut changer de nom, de cause ou de solution selon le firmware. Utilisez le manuel correspondant à l’appareil.",
      priorityTitle: "Priorité d’affichage des diagnostics", priorityCopy: "Le variateur affiche d’abord le message de priorité supérieure. Traitez les erreurs avant les avertissements et les commandes.", classF: "Erreur / erreur grave", classE: "Avertissement", classC: "Commande / erreur de commande", classA: "État de fonctionnement",
      searchTitle: "Recherche de code", searchCopy: "Saisissez F4002, E2050 ou un mot du titre.", searchLabel: "Code ou mot-clé", searchPlaceholder: "ex. F4002, surchauffe, codeur", manualFilterLabel: "Version du manuel", allManuals: "Tous les manuels", classFilterLabel: "Classe", allClasses: "Toutes les classes", resetSearch: "Effacer",
      manualLibraryTitle: "Manuels d’origine", manualLibraryCopy: "Ouvrez ou téléchargez les PDF complets. Les numéros indiquent les pages du PDF.", sourceNotice: "Cette page sert d’index. Consultez le manuel complet correspondant pour les causes, les règles de sécurité et les solutions.",
      totalEntries: "{count} entrées indexées", showingResults: "{shown} résultats affichés sur {total}", noResults: "Aucun code correspondant. Vérifiez le firmware ou utilisez un mot-clé plus court.", openPage: "Ouvrir la page", pageLabel: "Page {page}", firmwareLabel: "Firmware", pagesLabel: "Pages", entriesLabel: "Entrées indexées", openManual: "Ouvrir en ligne", downloadManual: "Télécharger le PDF"
    },
    ru: {
      navPlc: "Диагностика ПЛК", homePlcButton: "Диагностика ПЛК", supportPlcTitle: "ПЛК и привод", supportPlcCopy: "Найдите страницу руководства по коду диагностики и версии прошивки.", enterPlc: "Открыть диагностику ПЛК",
      plcTitle: "Диагностика ПЛК", plcLead: "Используйте тип устройства, версию прошивки и код диагностики для выбора нужного материала.", publicContent: "Открытый раздел", driverManualTitle: "Руководства приводов", driverManualCopy: "Ищите коды Rexroth IndraDrive и открывайте точную страницу подходящего руководства.", openDriverManuals: "Открыть руководства",
      plcGuideTitle: "Сначала запишите данные", guideCodeTitle: "Полный код", guideCodeCopy: "Запишите букву и четыре цифры на дисплее, например F4002.", guideFirmwareTitle: "Версия прошивки", guideFirmwareCopy: "Уточните MPx-02/03 или MPx-16/17/18 до применения диагностики.", guideContextTitle: "Условия появления", guideContextCopy: "Запишите, возникло ли сообщение при включении, работе, остановке или смене фазы связи.",
      backToPlc: "Назад к диагностике ПЛК", manualPageTitle: "Руководства приводов", manualPageLead: "Ищите по коду или названию и открывайте полное описание причины и устранения.", firmwareWarningTitle: "Сначала проверьте прошивку", firmwareWarning: "Один код может иметь другое название, причину или способ устранения в другой прошивке. Выбирайте руководство для своего устройства.",
      priorityTitle: "Приоритет диагностических сообщений", priorityCopy: "Привод сначала показывает сообщение с более высоким приоритетом. Сначала устраняйте ошибки, затем предупреждения и состояния команд.", classF: "Ошибка / серьёзная ошибка", classE: "Предупреждение", classC: "Команда / ошибка команды", classA: "Рабочее состояние",
      searchTitle: "Поиск диагностического кода", searchCopy: "Введите F4002, E2050 или слово из названия.", searchLabel: "Код или ключевое слово", searchPlaceholder: "например F4002, перегрев, энкодер", manualFilterLabel: "Версия руководства", allManuals: "Все руководства", classFilterLabel: "Класс", allClasses: "Все классы", resetSearch: "Очистить",
      manualLibraryTitle: "Исходные руководства", manualLibraryCopy: "Откройте или скачайте полные PDF. Номера относятся к страницам PDF.", sourceNotice: "Эта страница служит индексом. Причины, требования безопасности и способы устранения смотрите в полном руководстве нужной версии.",
      totalEntries: "В индексе: {count}", showingResults: "Показано {shown} из {total}", noResults: "Совпадений нет. Проверьте прошивку или сократите ключевое слово.", openPage: "Открыть страницу", pageLabel: "Страница {page}", firmwareLabel: "Прошивка", pagesLabel: "Страниц", entriesLabel: "Записей", openManual: "Открыть", downloadManual: "Скачать PDF"
    },
    tr: {
      navPlc: "PLC sorun giderme", homePlcButton: "PLC sorun giderme", supportPlcTitle: "PLC ve sürücü", supportPlcCopy: "Tanı kodu ve aygıt yazılımına göre doğru kılavuz sayfasını bulun.", enterPlc: "PLC yardımını aç",
      plcTitle: "PLC sorun giderme", plcLead: "Doğru kaynağa ulaşmak için cihaz türünü, aygıt yazılımını ve tanı kodunu kullanın.", publicContent: "Açık içerik", driverManualTitle: "Sürücü kılavuzları", driverManualCopy: "Rexroth IndraDrive kodlarını arayın ve uygun kılavuzdaki tam sayfayı açın.", openDriverManuals: "Sürücü kılavuzlarını aç",
      plcGuideTitle: "Önce bu bilgileri kaydedin", guideCodeTitle: "Tam tanı kodu", guideCodeCopy: "Sürücüde görünen harfi ve dört rakamı kaydedin; örneğin F4002.", guideFirmwareTitle: "Aygıt yazılımı", guideFirmwareCopy: "Tanıyı uygulamadan önce MPx-02/03 veya MPx-16/17/18 sürümünü doğrulayın.", guideContextTitle: "Oluşma koşulu", guideContextCopy: "Mesajın açılışta, çalışmada, duruşta veya iletişim geçişinde oluştuğunu kaydedin.",
      backToPlc: "PLC sorun gidermeye dön", manualPageTitle: "Sürücü kılavuzları", manualPageLead: "Kod veya başlıkla arayın ve tam neden ile çözümü ilgili sayfada açın.", firmwareWarningTitle: "Önce yazılımı doğrulayın", firmwareWarning: "Aynı kod farklı aygıt yazılımlarında farklı ad, neden veya çözüme sahip olabilir. Cihaza uygun kılavuzu kullanın.",
      priorityTitle: "Tanı mesajı önceliği", priorityCopy: "Sürücü daha yüksek öncelikli mesajı önce gösterir. Önce hataları, sonra uyarıları ve komut durumlarını ele alın.", classF: "Hata / ciddi hata", classE: "Uyarı", classC: "Komut / komut hatası", classA: "Çalışma ve durum bilgisi",
      searchTitle: "Tanı kodu arama", searchCopy: "F4002, E2050 veya bir başlık sözcüğü girin.", searchLabel: "Kod veya anahtar sözcük", searchPlaceholder: "örn. F4002, aşırı sıcaklık, enkoder", manualFilterLabel: "Kılavuz sürümü", allManuals: "Tüm kılavuzlar", classFilterLabel: "Tanı sınıfı", allClasses: "Tüm sınıflar", resetSearch: "Temizle",
      manualLibraryTitle: "Orijinal kılavuzlar", manualLibraryCopy: "Tam PDF dosyalarını açın veya indirin. Sayılar PDF sayfalarını belirtir.", sourceNotice: "Bu sayfa bir arama dizinidir. Nedenler, güvenlik gerekleri ve çözümler için uygun tam kılavuzu kullanın.",
      totalEntries: "{count} dizin kaydı", showingResults: "{total} eşleşmeden {shown} tanesi gösteriliyor", noResults: "Eşleşen kod yok. Aygıt yazılımını kontrol edin veya daha kısa bir sözcük deneyin.", openPage: "Sayfayı aç", pageLabel: "Sayfa {page}", firmwareLabel: "Aygıt yazılımı", pagesLabel: "Sayfa", entriesLabel: "Dizin kaydı", openManual: "Çevrimiçi aç", downloadManual: "PDF indir"
    },
    it: {
      navPlc: "Diagnosi PLC", homePlcButton: "Risoluzione PLC", supportPlcTitle: "PLC e azionamento", supportPlcCopy: "Trova la pagina corretta tramite codice diagnostico e versione firmware.", enterPlc: "Apri diagnosi PLC",
      plcTitle: "Risoluzione dei problemi PLC", plcLead: "Usa tipo di dispositivo, firmware e codice diagnostico per aprire il riferimento corretto.", publicContent: "Contenuto pubblico", driverManualTitle: "Manuali degli azionamenti", driverManualCopy: "Cerca i codici Rexroth IndraDrive e apri la pagina esatta del manuale corrispondente.", openDriverManuals: "Apri i manuali",
      plcGuideTitle: "Dati da registrare prima", guideCodeTitle: "Codice completo", guideCodeCopy: "Registra la lettera e le quattro cifre visualizzate, ad esempio F4002.", guideFirmwareTitle: "Versione firmware", guideFirmwareCopy: "Conferma MPx-02/03 o MPx-16/17/18 prima di applicare la diagnosi.", guideContextTitle: "Condizione di comparsa", guideContextCopy: "Indica se il messaggio compare all’avvio, durante il funzionamento, all’arresto o nel cambio di comunicazione.",
      backToPlc: "Torna alla diagnosi PLC", manualPageTitle: "Manuali degli azionamenti", manualPageLead: "Cerca per codice o titolo e apri causa e rimedio completi nella pagina corrispondente.", firmwareWarningTitle: "Verifica prima il firmware", firmwareWarning: "Lo stesso codice può avere nome, causa o rimedio diversi in un altro firmware. Usa sempre il manuale adatto al dispositivo.",
      priorityTitle: "Priorità dei messaggi diagnostici", priorityCopy: "L’azionamento mostra prima il messaggio con priorità più alta. Gestisci gli errori prima degli avvisi e degli stati di comando.", classF: "Errore / errore grave", classE: "Avviso", classC: "Comando / errore comando", classA: "Stato operativo",
      searchTitle: "Ricerca codice diagnostico", searchCopy: "Inserisci F4002, E2050 o una parola del titolo.", searchLabel: "Codice o parola chiave", searchPlaceholder: "es. F4002, sovratemperatura, encoder", manualFilterLabel: "Versione manuale", allManuals: "Tutti i manuali", classFilterLabel: "Classe", allClasses: "Tutte le classi", resetSearch: "Cancella",
      manualLibraryTitle: "Manuali originali", manualLibraryCopy: "Apri o scarica i PDF completi. I numeri si riferiscono alle pagine del PDF.", sourceNotice: "Questa pagina è un indice di ricerca. Per cause, requisiti di sicurezza e rimedi usa il manuale completo corrispondente.",
      totalEntries: "{count} voci indicizzate", showingResults: "Mostrate {shown} di {total} corrispondenze", noResults: "Nessun codice corrispondente. Verifica il firmware o prova una parola più breve.", openPage: "Apri pagina", pageLabel: "Pagina {page}", firmwareLabel: "Firmware", pagesLabel: "Pagine", entriesLabel: "Voci indicizzate", openManual: "Apri online", downloadManual: "Scarica PDF"
    },
    es: {
      navPlc: "Diagnóstico PLC", homePlcButton: "Solución de problemas PLC", supportPlcTitle: "PLC y accionamiento", supportPlcCopy: "Encuentra la página correcta por código de diagnóstico y versión de firmware.", enterPlc: "Abrir diagnóstico PLC",
      plcTitle: "Solución de problemas PLC", plcLead: "Usa el tipo de equipo, el firmware y el código para abrir la referencia correcta.", publicContent: "Contenido público", driverManualTitle: "Manuales de accionamientos", driverManualCopy: "Busca códigos Rexroth IndraDrive y abre la página exacta del manual correspondiente.", openDriverManuals: "Abrir manuales",
      plcGuideTitle: "Registra primero estos datos", guideCodeTitle: "Código completo", guideCodeCopy: "Anota la letra y los cuatro dígitos mostrados, por ejemplo F4002.", guideFirmwareTitle: "Versión de firmware", guideFirmwareCopy: "Confirma MPx-02/03 o MPx-16/17/18 antes de aplicar el diagnóstico.", guideContextTitle: "Condición de aparición", guideContextCopy: "Anota si aparece al encender, durante la marcha, al parar o al cambiar la comunicación.",
      backToPlc: "Volver al diagnóstico PLC", manualPageTitle: "Manuales de accionamientos", manualPageLead: "Busca por código o título y abre la causa y la solución completas en la página correspondiente.", firmwareWarningTitle: "Confirma primero el firmware", firmwareWarning: "El mismo código puede tener otro nombre, causa o solución en un firmware distinto. Usa el manual correspondiente al equipo.",
      priorityTitle: "Prioridad de mensajes de diagnóstico", priorityCopy: "El accionamiento muestra primero el mensaje de mayor prioridad. Atiende los errores antes que los avisos y estados de comando.", classF: "Error / error grave", classE: "Aviso", classC: "Comando / error de comando", classA: "Estado de funcionamiento",
      searchTitle: "Buscar código de diagnóstico", searchCopy: "Introduce F4002, E2050 o una palabra del título.", searchLabel: "Código o palabra clave", searchPlaceholder: "p. ej. F4002, sobretemperatura, encoder", manualFilterLabel: "Versión del manual", allManuals: "Todos los manuales", classFilterLabel: "Clase", allClasses: "Todas las clases", resetSearch: "Borrar",
      manualLibraryTitle: "Manuales originales", manualLibraryCopy: "Abre o descarga los PDF completos. Los números corresponden a las páginas del PDF.", sourceNotice: "Esta página es un índice de búsqueda. Consulta el manual completo correspondiente para causas, seguridad y soluciones.",
      totalEntries: "{count} entradas indexadas", showingResults: "Se muestran {shown} de {total} coincidencias", noResults: "No se encontró un código. Comprueba el firmware o usa una palabra más corta.", openPage: "Abrir página", pageLabel: "Página {page}", firmwareLabel: "Firmware", pagesLabel: "Páginas", entriesLabel: "Entradas indexadas", openManual: "Abrir en línea", downloadManual: "Descargar PDF"
    }
  };

  const manuals = Array.isArray(window.driveManualCatalog) ? window.driveManualCatalog : [];
  const records = Array.isArray(window.driveDiagnosticRecords) ? window.driveDiagnosticRecords : [];
  const manualsById = new Map(manuals.map(manual => [manual.id, manual]));
  const searchInput = document.getElementById("diagnostic-search");
  const manualFilter = document.getElementById("diagnostic-manual-filter");
  const classFilter = document.getElementById("diagnostic-class-filter");
  const resetButton = document.getElementById("diagnostic-reset");
  const results = document.getElementById("diagnostic-results");
  const summary = document.getElementById("diagnostic-summary");
  const total = document.getElementById("diagnostic-total");
  const manualList = document.getElementById("drive-manual-list");
  let language = "zh";

  const t = key => (translations[language] && translations[language][key]) || translations.en[key] || translations.zh[key] || key;
  const format = (template, values) => Object.entries(values).reduce((text, [key, value]) => text.replace(`{${key}}`, String(value)), template);

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const renderManuals = () => {
    if (!manualList) return;
    const fragment = document.createDocumentFragment();
    manuals.forEach(manual => {
      const card = element("article", "manual-card");
      card.appendChild(element("span", "manual-card-tag", manual.firmware));
      card.appendChild(element("h3", "", manual.title));
      const meta = element("div", "manual-card-meta");
      meta.appendChild(element("span", "", `${t("firmwareLabel")}: ${manual.firmware}`));
      meta.appendChild(element("span", "", `${t("pagesLabel")}: ${manual.pages}`));
      meta.appendChild(element("span", "", `${t("entriesLabel")}: ${manual.entries}`));
      card.appendChild(meta);
      const actions = element("div", "manual-card-actions");
      const open = element("a", "", t("openManual"));
      open.href = manual.pdf;
      open.target = "_blank";
      open.rel = "noopener";
      const download = element("a", "", t("downloadManual"));
      download.href = manual.pdf;
      download.download = "";
      actions.append(open, download);
      card.appendChild(actions);
      fragment.appendChild(card);
    });
    manualList.replaceChildren(fragment);
  };

  const renderResults = () => {
    if (!results) return;
    const query = (searchInput ? searchInput.value : "").trim().toLocaleUpperCase();
    const manual = manualFilter ? manualFilter.value : "all";
    const category = classFilter ? classFilter.value : "all";
    const matches = records
      .filter(record => manual === "all" || record.manual === manual)
      .filter(record => category === "all" || record.code.startsWith(category))
      .filter(record => !query || record.code.includes(query) || record.title.toLocaleUpperCase().includes(query) || (record.titleZh || "").toLocaleUpperCase().includes(query))
      .sort((a, b) => {
        if (query && a.code === query && b.code !== query) return -1;
        if (query && b.code === query && a.code !== query) return 1;
        return a.code.localeCompare(b.code) || a.manual.localeCompare(b.manual);
      });
    const visible = matches.slice(0, 60);
    const fragment = document.createDocumentFragment();
    visible.forEach(record => {
      const source = manualsById.get(record.manual);
      if (!source) return;
      const row = element("article", "diagnostic-result");
      row.appendChild(element("span", "diagnostic-code", record.code));
      const titleGroup = element("span", "diagnostic-title-group");
      const translatedTitle = record.titleZh || record.title;
      titleGroup.appendChild(element("span", "diagnostic-title", language === "zh" ? translatedTitle : record.title));
      if (language === "zh" && translatedTitle !== record.title) {
        titleGroup.appendChild(element("span", "diagnostic-original", record.title));
      }
      row.appendChild(titleGroup);
      row.appendChild(element("span", "diagnostic-version", source.firmware));
      row.appendChild(element("span", "diagnostic-page", format(t("pageLabel"), { page: record.page })));
      const link = element("a", "diagnostic-open-link", t("openPage"));
      link.href = `${source.pdf}#page=${record.page}`;
      link.target = "_blank";
      link.rel = "noopener";
      row.appendChild(link);
      fragment.appendChild(row);
    });
    if (!visible.length) fragment.appendChild(element("p", "diagnostic-empty", t("noResults")));
    results.replaceChildren(fragment);
    if (summary) summary.textContent = format(t("showingResults"), { shown: visible.length, total: matches.length });
  };

  const renderLanguage = code => {
    language = translations[code] ? code : "zh";
    document.querySelectorAll("[data-plc-i18n]").forEach(node => {
      const value = t(node.dataset.plcI18n);
      if (value) node.textContent = value;
    });
    if (searchInput) searchInput.placeholder = t("searchPlaceholder");
    if (total) total.textContent = format(t("totalEntries"), { count: records.length.toLocaleString(language) });
    renderManuals();
    renderResults();
  };

  if (searchInput) searchInput.addEventListener("input", renderResults);
  if (manualFilter) manualFilter.addEventListener("change", renderResults);
  if (classFilter) classFilter.addEventListener("change", renderResults);
  if (resetButton) resetButton.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (manualFilter) manualFilter.value = "all";
    if (classFilter) classFilter.value = "all";
    renderResults();
    if (searchInput) searchInput.focus();
  });
  document.querySelectorAll("[data-diagnostic-example]").forEach(button => {
    button.addEventListener("click", () => {
      if (!searchInput) return;
      searchInput.value = button.dataset.diagnosticExample || "";
      renderResults();
      searchInput.focus();
    });
  });

  window.renderPlcLanguage = renderLanguage;
  window.getPlcViewTitle = viewName => ({ plc: t("plcTitle"), "drive-manuals": t("manualPageTitle") })[viewName] || "";
  renderLanguage("zh");
})();
