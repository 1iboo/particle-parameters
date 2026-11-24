(() => {
  "use strict";

  const ROLE_LEVEL = Object.freeze({ customer: 0, debugger: 1, developer: 2, admin: 3 });
  const translations = {
    zh: {
      navSupport: "问题排查", navRequest: "生成申请", navBuild: "编译任务", navAdmin: "账户权限",
      rolePreview: "权限预览", roleCustomer: "客户", roleDebugger: "同事（调试）", roleDeveloper: "同事（开发）", roleAdmin: "管理员",
      phaseOne: "第一阶段演示", prototypeNotice: "当前仅演示页面和权限流程，尚未接入真实账号、数据库和编译机。", currentRole: "当前权限",
      supportTitle: "软件问题排查", supportLead: "客户及所有同事都可以查看的公开问题分类，后续可逐步补充详细处理步骤。", publicContent: "公开内容",
      supportPermissionTitle: "权限确认失败", supportPermissionCopy: "核对设备编号和相机SN，由调试同事提交离线软件生成申请。",
      supportStartupTitle: "离线软件无法启动", supportStartupCopy: "检查Release目录是否完整、x64依赖文件是否齐全，并记录错误提示。",
      supportCameraTitle: "相机或图像异常", supportCameraCopy: "记录相机连接状态、SN、图像表现和发生时间，便于后续定位。",
      requestTitle: "离线软件生成申请", requestLead: "调试同事提交设备编号和相机SN，开发同事确认后重新编译ImgProcOffline.exe。", debuggerAccess: "调试及以上权限",
      demoDataNotice: "第一阶段使用临时演示数据，刷新页面后会恢复初始状态，不会真正提交编译任务。", newRequest: "新建申请",
      deviceNumber: "设备编号", cameraSn: "相机SN", baseRelease: "基础Release版本", priority: "紧急程度", priorityNormal: "普通", priorityUrgent: "紧急",
      problemDescription: "问题说明", descriptionPlaceholder: "设备提示权限确认失败", submitRequest: "提交生成申请", myRequests: "申请记录", requestId: "申请编号", status: "状态", result: "结果",
      buildTitle: "编译任务中心", buildLead: "开发同事核对SN并推进编译状态；第一阶段只演示流程，不会运行真实编译命令。", developerAccess: "开发及以上权限",
      statusPending: "待开发处理", statusConfirmed: "SN已确认", statusBuilding: "编译中", statusSuccess: "编译成功", statusFailed: "编译失败", statusVerified: "验证通过",
      allBuildTasks: "全部编译申请", deviceAndSn: "设备 / SN", requester: "申请人", actions: "操作",
      adminTitle: "账户与权限", adminLead: "管理员新增、停用账号并调整角色；第一阶段仅演示界面和权限变化。", adminAccess: "仅管理员",
      newAccount: "新增账户", accountName: "姓名", accountEmail: "登录邮箱", accountRole: "角色", addAccount: "新增账户", accountList: "账户列表", accountState: "状态",
      confirmSn: "确认SN", startBuild: "开始编译", markSuccess: "标记成功", markFailed: "标记失败", retryBuild: "重新编译", downloadPending: "下载（待接入）", noResult: "尚未生成",
      submitted: "申请已提交，等待开发同事处理。", accountAdded: "演示账户已添加。", duplicateAccount: "该邮箱已存在。", roleChanged: "账户权限已更新。",
      disable: "停用", enable: "启用", enabled: "正常", disabled: "已停用", taskUpdated: "任务状态已更新。", noPermission: "当前角色无权访问该页面。"
    },
    en: {
      navSupport: "Troubleshooting", navRequest: "Build request", navBuild: "Build tasks", navAdmin: "Accounts & access",
      rolePreview: "Preview role", roleCustomer: "Customer", roleDebugger: "Debug colleague", roleDeveloper: "Developer", roleAdmin: "Administrator",
      phaseOne: "Phase 1 demo", prototypeNotice: "This demo covers the UI and role workflow only. No real accounts, database, or build machine are connected.", currentRole: "Current role",
      supportTitle: "Software troubleshooting", supportLead: "Public issue categories available to customers and colleagues. Detailed procedures can be added later.", publicContent: "Public content",
      supportPermissionTitle: "Authorization failed", supportPermissionCopy: "Check the device ID and camera SN, then ask a debug colleague to submit a build request.",
      supportStartupTitle: "Offline software will not start", supportStartupCopy: "Check that the Release folder is complete, the x64 dependencies are present, and record the error.",
      supportCameraTitle: "Camera or image issue", supportCameraCopy: "Record the connection state, SN, image symptoms, and time of occurrence.",
      requestTitle: "Offline software build request", requestLead: "A debug colleague submits the device ID and camera SN; a developer confirms them and rebuilds ImgProcOffline.exe.", debuggerAccess: "Debug role or above",
      demoDataNotice: "Phase 1 uses temporary demo data. Refreshing restores the initial state and no real build task is submitted.", newRequest: "New request",
      deviceNumber: "Device ID", cameraSn: "Camera SN", baseRelease: "Base Release", priority: "Priority", priorityNormal: "Normal", priorityUrgent: "Urgent",
      problemDescription: "Issue details", descriptionPlaceholder: "The device reports an authorization failure", submitRequest: "Submit build request", myRequests: "Request history", requestId: "Request ID", status: "Status", result: "Result",
      buildTitle: "Build task center", buildLead: "Developers review the SN and advance the build status. Phase 1 never runs a real build command.", developerAccess: "Developer role or above",
      statusPending: "Awaiting developer", statusConfirmed: "SN confirmed", statusBuilding: "Building", statusSuccess: "Build complete", statusFailed: "Build failed", statusVerified: "Verified",
      allBuildTasks: "All build requests", deviceAndSn: "Device / SN", requester: "Requested by", actions: "Actions",
      adminTitle: "Accounts & access", adminLead: "Administrators add or disable accounts and adjust roles. Phase 1 demonstrates the interface only.", adminAccess: "Administrators only",
      newAccount: "Add account", accountName: "Name", accountEmail: "Login email", accountRole: "Role", addAccount: "Add account", accountList: "Account list", accountState: "Status",
      confirmSn: "Confirm SN", startBuild: "Start build", markSuccess: "Mark complete", markFailed: "Mark failed", retryBuild: "Retry build", downloadPending: "Download (not connected)", noResult: "Not generated",
      submitted: "Request submitted and awaiting developer review.", accountAdded: "Demo account added.", duplicateAccount: "This email already exists.", roleChanged: "Account access updated.",
      disable: "Disable", enable: "Enable", enabled: "Active", disabled: "Disabled", taskUpdated: "Task status updated.", noPermission: "The current role cannot access this page."
    },
    fr: {
      navSupport: "Dépannage", navRequest: "Demande de compilation", navBuild: "Tâches de compilation", navAdmin: "Comptes et accès",
      rolePreview: "Aperçu du rôle", roleCustomer: "Client", roleDebugger: "Collègue débogage", roleDeveloper: "Développeur", roleAdmin: "Administrateur",
      phaseOne: "Démo phase 1", prototypeNotice: "Cette démo présente uniquement les pages et les droits. Aucun compte, aucune base et aucune machine de compilation ne sont connectés.", currentRole: "Rôle actuel",
      supportTitle: "Dépannage du logiciel", supportLead: "Catégories publiques accessibles aux clients et aux collègues. Les procédures détaillées seront ajoutées ensuite.", publicContent: "Contenu public",
      supportPermissionTitle: "Échec de l’autorisation", supportPermissionCopy: "Vérifiez l’équipement et le SN de la caméra, puis envoyez une demande par le collègue chargé du débogage.",
      supportStartupTitle: "Le logiciel hors ligne ne démarre pas", supportStartupCopy: "Vérifiez le dossier Release, les dépendances x64 et notez le message d’erreur.",
      supportCameraTitle: "Anomalie caméra ou image", supportCameraCopy: "Notez la connexion, le SN, le symptôme d’image et l’heure du problème.",
      requestTitle: "Demande de compilation du logiciel hors ligne", requestLead: "Le collègue chargé du débogage fournit l’équipement et le SN ; le développeur confirme puis recompile ImgProcOffline.exe.", debuggerAccess: "Débogage ou niveau supérieur",
      demoDataNotice: "La phase 1 utilise des données temporaires. Un rechargement restaure l’état initial et aucune compilation réelle n’est lancée.", newRequest: "Nouvelle demande",
      deviceNumber: "ID équipement", cameraSn: "SN caméra", baseRelease: "Release de base", priority: "Priorité", priorityNormal: "Normale", priorityUrgent: "Urgente",
      problemDescription: "Description du problème", descriptionPlaceholder: "L’équipement signale un échec d’autorisation", submitRequest: "Envoyer la demande", myRequests: "Historique", requestId: "ID demande", status: "État", result: "Résultat",
      buildTitle: "Centre des tâches de compilation", buildLead: "Le développeur contrôle le SN et fait avancer l’état. Aucune commande réelle n’est exécutée en phase 1.", developerAccess: "Développeur ou niveau supérieur",
      statusPending: "En attente du développeur", statusConfirmed: "SN confirmé", statusBuilding: "Compilation en cours", statusSuccess: "Compilation terminée", statusFailed: "Échec de compilation", statusVerified: "Validé",
      allBuildTasks: "Toutes les demandes", deviceAndSn: "Équipement / SN", requester: "Demandeur", actions: "Actions",
      adminTitle: "Comptes et accès", adminLead: "L’administrateur ajoute ou désactive les comptes et modifie les rôles. La phase 1 est une démonstration.", adminAccess: "Administrateur uniquement",
      newAccount: "Ajouter un compte", accountName: "Nom", accountEmail: "E-mail de connexion", accountRole: "Rôle", addAccount: "Ajouter", accountList: "Liste des comptes", accountState: "État",
      confirmSn: "Confirmer le SN", startBuild: "Lancer", markSuccess: "Marquer terminé", markFailed: "Marquer en échec", retryBuild: "Relancer", downloadPending: "Télécharger (non connecté)", noResult: "Non généré",
      submitted: "Demande envoyée et en attente du développeur.", accountAdded: "Compte de démonstration ajouté.", duplicateAccount: "Cet e-mail existe déjà.", roleChanged: "Droits mis à jour.",
      disable: "Désactiver", enable: "Activer", enabled: "Actif", disabled: "Désactivé", taskUpdated: "État de la tâche mis à jour.", noPermission: "Le rôle actuel ne peut pas accéder à cette page."
    },
    ru: {
      navSupport: "Устранение неполадок", navRequest: "Заявка на сборку", navBuild: "Задачи сборки", navAdmin: "Учётные записи",
      rolePreview: "Просмотр роли", roleCustomer: "Клиент", roleDebugger: "Специалист по отладке", roleDeveloper: "Разработчик", roleAdmin: "Администратор",
      phaseOne: "Демонстрация этапа 1", prototypeNotice: "Пока демонстрируются только страницы и права. Реальные учётные записи, база данных и машина сборки не подключены.", currentRole: "Текущая роль",
      supportTitle: "Устранение неполадок ПО", supportLead: "Открытые категории проблем для клиентов и сотрудников. Подробные инструкции будут добавлены позже.", publicContent: "Открытый раздел",
      supportPermissionTitle: "Ошибка проверки доступа", supportPermissionCopy: "Проверьте номер устройства и SN камеры, затем создайте заявку через специалиста по отладке.",
      supportStartupTitle: "Автономное ПО не запускается", supportStartupCopy: "Проверьте папку Release, зависимости x64 и запишите сообщение об ошибке.",
      supportCameraTitle: "Ошибка камеры или изображения", supportCameraCopy: "Запишите состояние подключения, SN, проявление ошибки и время.",
      requestTitle: "Заявка на сборку автономного ПО", requestLead: "Специалист по отладке передаёт номер устройства и SN; разработчик проверяет их и пересобирает ImgProcOffline.exe.", debuggerAccess: "Отладка и выше",
      demoDataNotice: "На этапе 1 используются временные данные. После обновления восстанавливается исходное состояние; реальная сборка не запускается.", newRequest: "Новая заявка",
      deviceNumber: "Номер устройства", cameraSn: "SN камеры", baseRelease: "Базовый Release", priority: "Приоритет", priorityNormal: "Обычный", priorityUrgent: "Срочный",
      problemDescription: "Описание проблемы", descriptionPlaceholder: "Устройство сообщает об ошибке доступа", submitRequest: "Отправить заявку", myRequests: "История заявок", requestId: "Номер заявки", status: "Статус", result: "Результат",
      buildTitle: "Центр задач сборки", buildLead: "Разработчик проверяет SN и меняет этап задачи. На этапе 1 реальные команды не выполняются.", developerAccess: "Разработчик и выше",
      statusPending: "Ожидает разработчика", statusConfirmed: "SN подтверждён", statusBuilding: "Выполняется сборка", statusSuccess: "Сборка завершена", statusFailed: "Ошибка сборки", statusVerified: "Проверено",
      allBuildTasks: "Все заявки", deviceAndSn: "Устройство / SN", requester: "Автор заявки", actions: "Действия",
      adminTitle: "Учётные записи и доступ", adminLead: "Администратор добавляет и отключает учётные записи и меняет роли. Этап 1 — только демонстрация.", adminAccess: "Только администратор",
      newAccount: "Добавить учётную запись", accountName: "Имя", accountEmail: "E-mail для входа", accountRole: "Роль", addAccount: "Добавить", accountList: "Список учётных записей", accountState: "Статус",
      confirmSn: "Подтвердить SN", startBuild: "Запустить сборку", markSuccess: "Отметить успех", markFailed: "Отметить ошибку", retryBuild: "Повторить", downloadPending: "Скачать (не подключено)", noResult: "Не создан",
      submitted: "Заявка отправлена и ожидает разработчика.", accountAdded: "Демонстрационная учётная запись добавлена.", duplicateAccount: "Этот e-mail уже существует.", roleChanged: "Права обновлены.",
      disable: "Отключить", enable: "Включить", enabled: "Активна", disabled: "Отключена", taskUpdated: "Статус задачи обновлён.", noPermission: "Текущая роль не имеет доступа к этой странице."
    },
    tr: {
      navSupport: "Sorun giderme", navRequest: "Derleme talebi", navBuild: "Derleme görevleri", navAdmin: "Hesap yetkileri",
      rolePreview: "Rol önizleme", roleCustomer: "Müşteri", roleDebugger: "Hata ayıklama personeli", roleDeveloper: "Geliştirici", roleAdmin: "Yönetici",
      phaseOne: "1. aşama demosu", prototypeNotice: "Bu demo yalnızca sayfaları ve rol akışını gösterir. Gerçek hesaplar, veritabanı ve derleme makinesi bağlı değildir.", currentRole: "Geçerli rol",
      supportTitle: "Yazılım sorun giderme", supportLead: "Müşteri ve çalışanların görebileceği açık sorun kategorileri. Ayrıntılı adımlar daha sonra eklenecektir.", publicContent: "Açık içerik",
      supportPermissionTitle: "Yetki doğrulaması başarısız", supportPermissionCopy: "Cihaz numarası ve kamera SN’sini kontrol edin; hata ayıklama personeli bir talep oluştursun.",
      supportStartupTitle: "Çevrimdışı yazılım başlamıyor", supportStartupCopy: "Release klasörünü, x64 bağımlılıklarını kontrol edin ve hatayı kaydedin.",
      supportCameraTitle: "Kamera veya görüntü sorunu", supportCameraCopy: "Bağlantı durumunu, SN’yi, görüntü belirtisini ve zamanı kaydedin.",
      requestTitle: "Çevrimdışı yazılım derleme talebi", requestLead: "Hata ayıklama personeli cihaz ve SN’yi gönderir; geliştirici doğrular ve ImgProcOffline.exe dosyasını yeniden derler.", debuggerAccess: "Hata ayıklama ve üzeri",
      demoDataNotice: "1. aşamada geçici demo verileri kullanılır. Yenileme ilk durumu geri getirir ve gerçek görev oluşturulmaz.", newRequest: "Yeni talep",
      deviceNumber: "Cihaz numarası", cameraSn: "Kamera SN", baseRelease: "Temel Release", priority: "Öncelik", priorityNormal: "Normal", priorityUrgent: "Acil",
      problemDescription: "Sorun açıklaması", descriptionPlaceholder: "Cihaz yetki doğrulama hatası bildiriyor", submitRequest: "Talebi gönder", myRequests: "Talep geçmişi", requestId: "Talep no.", status: "Durum", result: "Sonuç",
      buildTitle: "Derleme görev merkezi", buildLead: "Geliştirici SN’yi kontrol eder ve görev durumunu ilerletir. 1. aşamada gerçek komut çalışmaz.", developerAccess: "Geliştirici ve üzeri",
      statusPending: "Geliştirici bekleniyor", statusConfirmed: "SN onaylandı", statusBuilding: "Derleniyor", statusSuccess: "Derleme tamamlandı", statusFailed: "Derleme başarısız", statusVerified: "Doğrulandı",
      allBuildTasks: "Tüm talepler", deviceAndSn: "Cihaz / SN", requester: "Talep eden", actions: "İşlemler",
      adminTitle: "Hesaplar ve yetkiler", adminLead: "Yönetici hesap ekler, devre dışı bırakır ve rolleri değiştirir. 1. aşama yalnızca demodur.", adminAccess: "Yalnızca yönetici",
      newAccount: "Hesap ekle", accountName: "Ad", accountEmail: "Giriş e-postası", accountRole: "Rol", addAccount: "Hesap ekle", accountList: "Hesap listesi", accountState: "Durum",
      confirmSn: "SN’yi onayla", startBuild: "Derlemeyi başlat", markSuccess: "Başarılı işaretle", markFailed: "Başarısız işaretle", retryBuild: "Yeniden derle", downloadPending: "İndir (bağlı değil)", noResult: "Oluşturulmadı",
      submitted: "Talep gönderildi ve geliştirici bekleniyor.", accountAdded: "Demo hesabı eklendi.", duplicateAccount: "Bu e-posta zaten var.", roleChanged: "Hesap yetkisi güncellendi.",
      disable: "Devre dışı bırak", enable: "Etkinleştir", enabled: "Etkin", disabled: "Devre dışı", taskUpdated: "Görev durumu güncellendi.", noPermission: "Geçerli rol bu sayfaya erişemez."
    },
    it: {
      navSupport: "Risoluzione problemi", navRequest: "Richiesta compilazione", navBuild: "Attività di compilazione", navAdmin: "Account e accessi",
      rolePreview: "Anteprima ruolo", roleCustomer: "Cliente", roleDebugger: "Addetto al debug", roleDeveloper: "Sviluppatore", roleAdmin: "Amministratore",
      phaseOne: "Demo fase 1", prototypeNotice: "Questa demo mostra solo le pagine e il flusso dei ruoli. Account, database e macchina di compilazione non sono collegati.", currentRole: "Ruolo attuale",
      supportTitle: "Risoluzione dei problemi software", supportLead: "Categorie pubbliche visibili a clienti e colleghi. Le procedure dettagliate verranno aggiunte in seguito.", publicContent: "Contenuto pubblico",
      supportPermissionTitle: "Verifica autorizzazione non riuscita", supportPermissionCopy: "Controlla l’ID del dispositivo e il SN della telecamera, quindi invia una richiesta tramite l’addetto al debug.",
      supportStartupTitle: "Il software offline non si avvia", supportStartupCopy: "Controlla la cartella Release, le dipendenze x64 e registra il messaggio di errore.",
      supportCameraTitle: "Problema di telecamera o immagine", supportCameraCopy: "Registra connessione, SN, sintomo dell’immagine e ora del problema.",
      requestTitle: "Richiesta di compilazione software offline", requestLead: "L’addetto al debug invia dispositivo e SN; lo sviluppatore li verifica e ricompila ImgProcOffline.exe.", debuggerAccess: "Debug o livello superiore",
      demoDataNotice: "La fase 1 usa dati temporanei. Il ricaricamento ripristina lo stato iniziale e non avvia compilazioni reali.", newRequest: "Nuova richiesta",
      deviceNumber: "ID dispositivo", cameraSn: "SN telecamera", baseRelease: "Release di base", priority: "Priorità", priorityNormal: "Normale", priorityUrgent: "Urgente",
      problemDescription: "Descrizione problema", descriptionPlaceholder: "Il dispositivo segnala un errore di autorizzazione", submitRequest: "Invia richiesta", myRequests: "Cronologia richieste", requestId: "ID richiesta", status: "Stato", result: "Risultato",
      buildTitle: "Centro attività di compilazione", buildLead: "Lo sviluppatore verifica il SN e aggiorna lo stato. La fase 1 non esegue comandi reali.", developerAccess: "Sviluppatore o livello superiore",
      statusPending: "In attesa dello sviluppatore", statusConfirmed: "SN confermato", statusBuilding: "Compilazione in corso", statusSuccess: "Compilazione completata", statusFailed: "Compilazione non riuscita", statusVerified: "Verificato",
      allBuildTasks: "Tutte le richieste", deviceAndSn: "Dispositivo / SN", requester: "Richiedente", actions: "Azioni",
      adminTitle: "Account e accessi", adminLead: "L’amministratore aggiunge o disattiva account e modifica i ruoli. La fase 1 è solo dimostrativa.", adminAccess: "Solo amministratore",
      newAccount: "Aggiungi account", accountName: "Nome", accountEmail: "E-mail di accesso", accountRole: "Ruolo", addAccount: "Aggiungi", accountList: "Elenco account", accountState: "Stato",
      confirmSn: "Conferma SN", startBuild: "Avvia compilazione", markSuccess: "Segna completata", markFailed: "Segna errore", retryBuild: "Riprova", downloadPending: "Scarica (non collegato)", noResult: "Non generato",
      submitted: "Richiesta inviata e in attesa dello sviluppatore.", accountAdded: "Account demo aggiunto.", duplicateAccount: "Questa e-mail esiste già.", roleChanged: "Autorizzazioni aggiornate.",
      disable: "Disattiva", enable: "Attiva", enabled: "Attivo", disabled: "Disattivato", taskUpdated: "Stato attività aggiornato.", noPermission: "Il ruolo attuale non può accedere a questa pagina."
    },
    es: {
      navSupport: "Solución de problemas", navRequest: "Solicitud de compilación", navBuild: "Tareas de compilación", navAdmin: "Cuentas y accesos",
      rolePreview: "Vista previa del rol", roleCustomer: "Cliente", roleDebugger: "Técnico de depuración", roleDeveloper: "Desarrollador", roleAdmin: "Administrador",
      phaseOne: "Demostración fase 1", prototypeNotice: "Esta demo solo muestra las páginas y el flujo de permisos. No hay cuentas, base de datos ni máquina de compilación conectadas.", currentRole: "Rol actual",
      supportTitle: "Solución de problemas del software", supportLead: "Categorías públicas visibles para clientes y compañeros. Los pasos detallados se añadirán después.", publicContent: "Contenido público",
      supportPermissionTitle: "Error de autorización", supportPermissionCopy: "Comprueba el ID del equipo y el SN de la cámara; el técnico de depuración debe enviar una solicitud.",
      supportStartupTitle: "El software sin conexión no se inicia", supportStartupCopy: "Comprueba la carpeta Release, las dependencias x64 y registra el mensaje de error.",
      supportCameraTitle: "Problema de cámara o imagen", supportCameraCopy: "Registra la conexión, el SN, el síntoma de imagen y la hora del problema.",
      requestTitle: "Solicitud de compilación del software sin conexión", requestLead: "El técnico envía el equipo y el SN; el desarrollador los verifica y recompila ImgProcOffline.exe.", debuggerAccess: "Depuración o nivel superior",
      demoDataNotice: "La fase 1 utiliza datos temporales. Al actualizar se recupera el estado inicial y no se ejecuta ninguna compilación real.", newRequest: "Nueva solicitud",
      deviceNumber: "ID del equipo", cameraSn: "SN de la cámara", baseRelease: "Release base", priority: "Prioridad", priorityNormal: "Normal", priorityUrgent: "Urgente",
      problemDescription: "Descripción del problema", descriptionPlaceholder: "El equipo muestra un error de autorización", submitRequest: "Enviar solicitud", myRequests: "Historial", requestId: "ID de solicitud", status: "Estado", result: "Resultado",
      buildTitle: "Centro de tareas de compilación", buildLead: "El desarrollador verifica el SN y avanza el estado. La fase 1 no ejecuta comandos reales.", developerAccess: "Desarrollador o nivel superior",
      statusPending: "Pendiente del desarrollador", statusConfirmed: "SN confirmado", statusBuilding: "Compilando", statusSuccess: "Compilación terminada", statusFailed: "Error de compilación", statusVerified: "Verificado",
      allBuildTasks: "Todas las solicitudes", deviceAndSn: "Equipo / SN", requester: "Solicitante", actions: "Acciones",
      adminTitle: "Cuentas y accesos", adminLead: "El administrador añade o desactiva cuentas y cambia roles. La fase 1 es solo una demostración.", adminAccess: "Solo administrador",
      newAccount: "Añadir cuenta", accountName: "Nombre", accountEmail: "Correo de acceso", accountRole: "Rol", addAccount: "Añadir", accountList: "Lista de cuentas", accountState: "Estado",
      confirmSn: "Confirmar SN", startBuild: "Iniciar compilación", markSuccess: "Marcar terminada", markFailed: "Marcar error", retryBuild: "Reintentar", downloadPending: "Descargar (no conectado)", noResult: "No generado",
      submitted: "Solicitud enviada y pendiente del desarrollador.", accountAdded: "Cuenta de demostración añadida.", duplicateAccount: "Este correo ya existe.", roleChanged: "Permisos actualizados.",
      disable: "Desactivar", enable: "Activar", enabled: "Activa", disabled: "Desactivada", taskUpdated: "Estado de tarea actualizado.", noPermission: "El rol actual no puede acceder a esta página."
    }
  };

  let language = "zh";
  let currentRole = "customer";
  let nextRequestNumber = 2;
  let nextAccountNumber = 4;
  const requests = [{
    id: "REQ-0001",
    device: "IVS-DEMO-001",
    cameraSnRaw: "SN-DEMO-240807",
    cameraSnNormalized: "SN-DEMO-240807",
    release: "Release-20260715",
    priority: "normal",
    description: "",
    requester: "debug.demo@example.com",
    status: "pending",
    artifact: ""
  }];
  const accounts = [
    { id: 1, name: "Debug Demo", email: "debug.demo@example.com", role: "debugger", enabled: true },
    { id: 2, name: "Developer Demo", email: "developer.demo@example.com", role: "developer", enabled: true },
    { id: 3, name: "Admin Demo", email: "admin.demo@example.com", role: "admin", enabled: true }
  ];

  const roleSelect = document.getElementById("prototype-role-select");
  const languageSelect = document.getElementById("language-select");
  const languageControl = document.querySelector(".site-language-control");
  const currentRoleName = document.getElementById("current-role-name");
  const requestForm = document.getElementById("release-request-form");
  const accountForm = document.getElementById("account-form");
  const requestList = document.getElementById("request-list");
  const buildTaskList = document.getElementById("build-task-list");
  const accountList = document.getElementById("account-list");

  let customerLanguage = "zh";
  const t = key => (translations[language] && translations[language][key]) || translations.en[key] || translations.zh[key] || key;
  const roleLabel = role => t(`role${role.charAt(0).toUpperCase()}${role.slice(1)}`);
  const canUseRole = minimum => {
    if (!Object.hasOwn(ROLE_LEVEL, minimum)) return false;
    if (currentRole === "admin") return minimum === "admin";
    if (minimum === "admin") return false;
    return ROLE_LEVEL[currentRole] >= ROLE_LEVEL[minimum];
  };

  const statusKey = status => ({
    pending: "statusPending",
    confirmed: "statusConfirmed",
    building: "statusBuilding",
    success: "statusSuccess",
    failed: "statusFailed",
    verified: "statusVerified",
    enabled: "enabled",
    disabled: "disabled"
  })[status] || "statusPending";

  const showToast = message => {
    const previous = document.getElementById("workflow-toast");
    if (previous) previous.remove();
    const toast = document.createElement("div");
    toast.id = "workflow-toast";
    toast.className = "workflow-toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2600);
  };

  const createCell = (value, label) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    cell.dataset.label = label;
    return cell;
  };

  const createStatus = status => {
    const badge = document.createElement("span");
    badge.className = "status-badge";
    badge.dataset.status = status;
    badge.textContent = t(statusKey(status));
    return badge;
  };

  const createAction = (label, action, id, options = {}) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `table-action${options.danger ? " danger" : ""}`;
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.id = id;
    button.disabled = Boolean(options.disabled);
    return button;
  };

  const renderRequests = () => {
    if (!requestList) return;
    const fragment = document.createDocumentFragment();
    requests.forEach(request => {
      const row = document.createElement("tr");
      row.appendChild(createCell(request.id, t("requestId")));
      row.appendChild(createCell(request.device, t("deviceNumber")));
      row.appendChild(createCell(request.cameraSnRaw, t("cameraSn")));
      row.appendChild(createCell(request.release, t("baseRelease")));
      const statusCell = document.createElement("td");
      statusCell.dataset.label = t("status");
      statusCell.appendChild(createStatus(request.status));
      row.appendChild(statusCell);
      row.appendChild(createCell(request.artifact || t("noResult"), t("result")));
      fragment.appendChild(row);
    });
    requestList.replaceChildren(fragment);
    const count = document.getElementById("request-count");
    if (count) count.textContent = String(requests.length);
  };

  const actionForStatus = request => {
    if (request.status === "pending") return [createAction(t("confirmSn"), "confirm", request.id)];
    if (request.status === "confirmed") return [createAction(t("startBuild"), "build", request.id)];
    if (request.status === "building") return [
      createAction(t("markSuccess"), "success", request.id),
      createAction(t("markFailed"), "failed", request.id, { danger: true })
    ];
    if (request.status === "failed") return [createAction(t("retryBuild"), "build", request.id)];
    return [createAction(t("downloadPending"), "download", request.id, { disabled: true })];
  };

  const renderBuildTasks = () => {
    if (!buildTaskList) return;
    const fragment = document.createDocumentFragment();
    requests.forEach(request => {
      const row = document.createElement("tr");
      row.appendChild(createCell(request.id, t("requestId")));
      row.appendChild(createCell(`${request.device}\n${request.cameraSnRaw}`, t("deviceAndSn")));
      row.appendChild(createCell(request.requester, t("requester")));
      row.appendChild(createCell(request.release, t("baseRelease")));
      const statusCell = document.createElement("td");
      statusCell.dataset.label = t("status");
      statusCell.appendChild(createStatus(request.status));
      row.appendChild(statusCell);
      const actionCell = document.createElement("td");
      actionCell.dataset.label = t("actions");
      actionCell.className = "workflow-table-actions";
      actionForStatus(request).forEach(button => actionCell.appendChild(button));
      row.appendChild(actionCell);
      fragment.appendChild(row);
    });
    buildTaskList.replaceChildren(fragment);
    const counts = {
      pending: requests.filter(item => item.status === "pending" || item.status === "confirmed").length,
      building: requests.filter(item => item.status === "building").length,
      success: requests.filter(item => item.status === "success" || item.status === "verified").length,
      failed: requests.filter(item => item.status === "failed").length
    };
    Object.entries(counts).forEach(([key, value]) => {
      const element = document.getElementById(`summary-${key}`);
      if (element) element.textContent = String(value);
    });
  };

  const renderAccounts = () => {
    if (!accountList) return;
    const fragment = document.createDocumentFragment();
    accounts.forEach(account => {
      const row = document.createElement("tr");
      row.appendChild(createCell(account.name, t("accountName")));
      row.appendChild(createCell(account.email, t("accountEmail")));
      const roleCell = document.createElement("td");
      roleCell.dataset.label = t("accountRole");
      const select = document.createElement("select");
      select.className = "table-action";
      select.dataset.accountRole = String(account.id);
      ["debugger", "developer", "admin"].forEach(role => {
        const option = document.createElement("option");
        option.value = role;
        option.textContent = roleLabel(role);
        option.selected = account.role === role;
        select.appendChild(option);
      });
      roleCell.appendChild(select);
      row.appendChild(roleCell);
      const stateCell = document.createElement("td");
      stateCell.dataset.label = t("accountState");
      stateCell.appendChild(createStatus(account.enabled ? "enabled" : "disabled"));
      row.appendChild(stateCell);
      const actionCell = document.createElement("td");
      actionCell.dataset.label = t("actions");
      actionCell.appendChild(createAction(account.enabled ? t("disable") : t("enable"), "toggle-account", String(account.id), { danger: account.enabled }));
      row.appendChild(actionCell);
      fragment.appendChild(row);
    });
    accountList.replaceChildren(fragment);
  };

  const renderAll = () => {
    renderRequests();
    renderBuildTasks();
    renderAccounts();
  };

  const setRole = role => {
    if (!(role in ROLE_LEVEL)) role = "customer";
    const previousRole = currentRole;
    if (role !== "customer" && previousRole === "customer" && languageSelect) {
      customerLanguage = languageSelect.value || "zh";
    }
    currentRole = role;
    const customerMode = role === "customer";
    if (languageControl) languageControl.hidden = !customerMode;
    if (languageSelect) {
      const requiredLanguage = customerMode ? customerLanguage : "zh";
      if (languageSelect.value !== requiredLanguage) {
        languageSelect.value = requiredLanguage;
        languageSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    if (roleSelect) roleSelect.value = role;
    if (currentRoleName) currentRoleName.textContent = roleLabel(role);
    document.querySelectorAll("[data-min-role]").forEach(element => {
      const allowed = canUseRole(element.dataset.minRole);
      element.dataset.roleAllowed = String(allowed);
      if (!element.matches("[data-view]")) element.hidden = !allowed;
      if (!allowed && element.matches("[data-view]")) element.hidden = true;
    });
    window.dispatchEvent(new CustomEvent("prototype-role-change", { detail: { role } }));
    renderAll();
  };

  const timeoutGuide = {
  "zh": [
    "深度学习检测超时排查与环境配置",
    "工控机恢复镜像后，深度学习检测超时。先核对运行环境，再评估检测配方。",
    "查看排查步骤",
    "显卡设置｜安装显卡驱动后，打开 NVIDIA 控制面板。核对低延迟模式是否为「超高」，电源管理模式是否为「最高性能优先」。",
    "内存与分页文件｜原文按每个模型约 5 GB 内存、1 GB 显存估算。对照实际峰值检查余量；内存不足可调整分页文件，不能用它补足显存。C 盘空间不足时，可将分页文件移到 D 盘，确认新设置生效，不要让所有驱动器都没有分页文件。",
    "实时保护｜检查安全软件扫描是否与超时同时发生。仅在现场 IT 批准的受控测试中临时调整防护；测试结束后恢复，不把关闭实时保护作为生产默认设置。",
    "电源计划｜打开 Windows 控制面板 → 电源选项，核对是否使用「高性能」；设备支持时按现场规范选用「卓越性能」。进入「更改计划设置」复核。",
    "显卡锁频｜按设备配套教程核对是否已配置自动锁频。仅使用与该显卡及驱动匹配、经现场确认的文件。",
    "仍然超时｜记录设备运行速度、超时工位、检测图像尺寸、每组拍摄张数和工控机硬件型号，交给技术人员。减少拍摄张数、减小检测尺寸或改用拼图检测后，须重新验证耗时和缺陷检出效果。"
  ],
  "en": [
    "Deep learning inspection timeouts: troubleshooting and system setup",
    "Use this checklist when inspection times out after restoring an industrial PC image.",
    "Show troubleshooting steps",
    "GPU settings｜After installing the driver, check NVIDIA Control Panel: Low Latency Mode should be Ultra and Power Management Mode should prefer maximum performance.",
    "Memory and paging｜The guide estimates 5 GB of RAM and 1 GB of VRAM per model. Check peak usage. A paging file can supplement RAM, not VRAM. If C: is short on space, move paging to D: and verify that it remains active.",
    "Real-time protection｜Check whether scans coincide with timeouts. Change protection only for a controlled test approved by site IT, then restore it.",
    "Power plan｜Check High performance under Windows Power Options, or Ultimate Performance if supported and approved. Review the plan settings.",
    "GPU clock settings｜Use only the approved clock configuration and instructions for the installed GPU and driver.",
    "If timeouts persist｜Report line speed, station, input dimensions, frames per sequence and PC specifications. Revalidate timing and defect detection after reducing frame count or input size, or switching to tiled inference."
  ],
  "fr": [
    "Délais d’inspection dépassés : diagnostic et configuration du poste",
    "À vérifier après la restauration de l’image du PC industriel utilisé pour l’inspection par apprentissage profond.",
    "Afficher les vérifications",
    "Carte graphique｜Pilote installé, vérifier dans le panneau NVIDIA que la faible latence est réglée sur Ultra et que la gestion de l’alimentation privilégie les performances maximales.",
    "Mémoire｜Prévoir à titre indicatif 5 Go de RAM et 1 Go de mémoire vidéo par modèle. Vérifier les pics réels. Le fichier d’échange complète la RAM, pas la mémoire vidéo. Si C: manque de place, le déplacer sur D: et vérifier son activation.",
    "Protection en temps réel｜Vérifier si les analyses coïncident avec les dépassements. Toute modification doit être temporaire, autorisée par le service informatique et annulée après le test.",
    "Alimentation｜Vérifier le mode Performances élevées, ou Performances optimales si le poste et les consignes du site le permettent. Contrôler les paramètres du mode.",
    "Fréquence du GPU｜Suivre uniquement la procédure validée pour la carte et le pilote installés.",
    "Si le délai reste dépassé｜Relever cadence, poste, dimensions des images, nombre de prises par séquence et matériel du PC. Après toute réduction du nombre ou de la taille des images, ou tout passage à une mosaïque, revalider la durée et la détection des défauts."
  ],
  "ru": [
    "Тайм-аут нейросетевого контроля: диагностика и настройка",
    "Проверки после восстановления промышленного ПК из образа.",
    "Показать порядок проверки",
    "Видеокарта｜После установки драйвера проверьте панель NVIDIA: режим низкой задержки — «Ультра», управление электропитанием — предпочтительна максимальная производительность.",
    "Память｜Ориентир на модель: 5 ГБ ОЗУ и 1 ГБ видеопамяти. Сверьте пиковое потребление. Файл подкачки дополняет ОЗУ, но не видеопамять. Если на C: мало места, перенесите его на D: и убедитесь, что он активен.",
    "Защита в реальном времени｜Сопоставьте время сканирования и тайм-аутов. Меняйте защиту только для согласованного с ИТ-службой теста; после него восстановите настройки.",
    "Электропитание｜Проверьте схему высокой производительности или максимальной производительности, если она поддерживается и разрешена на площадке. Проверьте параметры схемы.",
    "Частота GPU｜Используйте только согласованную инструкцию и файлы для установленной видеокарты и версии драйвера.",
    "Если тайм-аут сохраняется｜Передайте специалисту скорость линии, станцию, размер кадров, число кадров в серии и конфигурацию ПК. При уменьшении числа или размера кадров либо переходе на мозаику повторно проверьте время обработки и выявление дефектов."
  ],
  "tr": [
    "Derin öğrenme ile kontrolde zaman aşımı: sorun giderme ve sistem ayarları",
    "Endüstriyel bilgisayara sistem imajı geri yüklendikten sonra kontrol süresi aşılırsa bu adımları izleyin.",
    "Kontrol adımlarını göster",
    "GPU ayarları｜Sürücüyü kurduktan sonra NVIDIA Denetim Masası’nda düşük gecikme modunun Ultra, güç yönetiminin maksimum performansı tercih edecek şekilde ayarlandığını kontrol edin.",
    "Bellek｜Model başına yaklaşık 5 GB RAM ve 1 GB ekran kartı belleği öngörülür. En yüksek kullanımı ölçün. Disk belleği dosyası RAM’i destekler, ekran kartı belleğinin yerini tutmaz. C: doluysa dosyayı D: sürücüsüne taşıyıp etkin olduğunu doğrulayın.",
    "Gerçek zamanlı koruma｜Taramaların zaman aşımıyla çakışıp çakışmadığına bakın. Koruma ayarlarını yalnızca saha BT ekibinin onayladığı kontrollü testte değiştirin; ardından geri yükleyin.",
    "Güç planı｜Windows Güç Seçenekleri’nde Yüksek performans planını, destekleniyor ve sahada onaylanıyorsa Nihai performans planını ve ilgili ayarları kontrol edin.",
    "GPU saat hızı｜Yalnızca takılı GPU ve sürücü için onaylanmış saat hızı ayarlarını ve talimatları kullanın.",
    "Sorun sürerse｜Hat hızını, istasyonu, görüntü boyutunu, sekans başına kare sayısını ve bilgisayar donanımını kaydedin. Kare sayısı veya boyutu azaltılırsa ya da görüntüler birleştirilirse işlem süresini ve kusur tespitini yeniden doğrulayın."
  ],
  "es": [
    "Tiempo de espera agotado en la inspección por aprendizaje profundo",
    "Comprobaciones tras restaurar la imagen del PC industrial.",
    "Ver pasos de diagnóstico",
    "GPU｜Tras instalar el controlador, compruebe en el panel de NVIDIA que el modo de baja latencia esté en Ultra y que la gestión de energía dé prioridad al máximo rendimiento.",
    "Memoria｜Como referencia, calcule 5 GB de RAM y 1 GB de memoria de vídeo por modelo. Compruebe los picos de uso. El archivo de paginación complementa la RAM, no la memoria de vídeo. Si falta espacio en C:, trasládelo a D: y verifique que siga activo.",
    "Protección en tiempo real｜Compruebe si los análisis coinciden con los tiempos de espera agotados. Modifique la protección solo en pruebas autorizadas por TI y restáurela al terminar.",
    "Plan de energía｜Compruebe el plan de alto rendimiento de Windows o el de máximo rendimiento si el equipo lo admite y el centro lo autoriza. Revise la configuración del plan.",
    "Frecuencia de la GPU｜Utilice únicamente el procedimiento y los archivos aprobados para la GPU y el controlador instalados.",
    "Si persiste el problema｜Anote la velocidad de línea, la estación, las dimensiones de imagen, las tomas por secuencia y el hardware del PC. Si cambia el número o el tamaño de las imágenes o pasa a procesarlas en mosaico, vuelva a validar el tiempo y la detección de defectos."
  ],
  "it": [
    "Timeout dell’ispezione con deep learning: diagnosi e configurazione",
    "Controlli da eseguire dopo il ripristino dell’immagine del PC industriale.",
    "Mostra i controlli",
    "GPU｜Installato il driver, verificare nel pannello NVIDIA che la modalità a bassa latenza sia su Ultra e che la gestione dell’alimentazione privilegi le prestazioni massime.",
    "Memoria｜Stimare circa 5 GB di RAM e 1 GB di memoria video per modello e verificare i picchi reali. Il file di paging integra la RAM, non la memoria video. Se C: ha poco spazio, spostarlo su D: e verificarne l’attivazione.",
    "Protezione in tempo reale｜Verificare se le scansioni coincidono con i timeout. Modificare la protezione solo per una prova controllata autorizzata dal reparto IT e ripristinarla al termine.",
    "Alimentazione｜Verificare il piano Prestazioni elevate di Windows o, se supportato e approvato, Prestazioni eccellenti. Controllare le impostazioni del piano.",
    "Frequenza della GPU｜Utilizzare solo la procedura e i file approvati per la GPU e il driver installati.",
    "Se il timeout persiste｜Annotare velocità di linea, stazione, dimensioni delle immagini, fotogrammi per sequenza e hardware del PC. Dopo aver ridotto il numero o le dimensioni delle immagini o scelto l’elaborazione a mosaico, convalidare nuovamente i tempi e il rilevamento dei difetti."
  ]
};
  const renderTimeoutGuide = code => {
    const grid = document.querySelector("#support .workflow-grid");
    if (!grid) return;
    let card = grid.querySelector("[data-timeout-guide]");
    if (!card) {
      card = document.createElement("article");
      card.className = "workflow-card";
      card.dataset.timeoutGuide = "";
      card.style.gridColumn = "1 / -1";
      card.innerHTML = '<span class="workflow-card-index">05</span><h2></h2><p></p><details><summary class="workflow-card-link" style="cursor:pointer"></summary><ol></ol></details>';
      grid.appendChild(card);
    }
    const [title, lead, action, ...steps] = timeoutGuide[code] || timeoutGuide.zh;
    card.querySelector("h2").textContent = title;
    card.querySelector("p").textContent = lead;
    card.querySelector("summary").textContent = action;
    const photos = [[1,2],[3,4],[5],[6,7],[8],[]];
    const zoom = ({zh:"查看原图", en:"Open full-size image", fr:"Agrandir l’image", ru:"Открыть оригинал", tr:"Tam boyutta aç", es:"Ampliar imagen", it:"Apri a grandezza naturale"})[code] || "Open full-size image";
    card.querySelector("ol").replaceChildren(...steps.map((step, index) => {
      const [heading, body] = step.split("｜");
      const li = document.createElement("li");
      const label = document.createElement("strong");
      label.textContent = heading;
      const p = document.createElement("p");
      p.textContent = body;
      li.append(label, p);
      if (photos[index].length) {
        const gallery = document.createElement("div");
        gallery.className = "timeout-gallery";
        photos[index].forEach((id, i) => {
          const link = document.createElement("a");
          link.href = "media/dl-timeout/step-image-" + id + ".png";
          link.target = "_blank";
          link.rel = "noopener";
          const img = document.createElement("img");
          img.src = link.href;
          img.loading = "lazy";
          img.alt = heading + " · " + (i + 1);
          const caption = document.createElement("span");
          caption.textContent = (i + 1) + "/" + photos[index].length + " · " + zoom;
          link.append(img, caption);
          gallery.append(link);
        });
        li.append(gallery);
      }
      return li;
    }));
  };
  const renderLanguage = code => {
    language = currentRole === "customer" && translations[code] ? code : "zh";
    renderTimeoutGuide(language);
    if (currentRole === "customer") customerLanguage = language;
    if (languageSelect && languageSelect.value !== language) languageSelect.value = language;
    document.querySelectorAll("[data-workflow-i18n]").forEach(element => {
      const value = t(element.dataset.workflowI18n);
      if (value) element.textContent = value;
    });
    document.body.dataset.printDeniedMessage = t("noPermission");
    const description = document.getElementById("request-description");
    if (description) description.placeholder = t("descriptionPlaceholder");
    if (roleSelect) roleSelect.setAttribute("aria-label", t("rolePreview"));
    if (currentRoleName) currentRoleName.textContent = roleLabel(currentRole);
    renderAll();
  };

  window.prototypeCanAccessView = viewName => {
    const view = [...document.querySelectorAll("[data-view]")].find(item => item.dataset.view === viewName);
    return Boolean(view) && (!view.dataset.minRole || canUseRole(view.dataset.minRole));
  };
  window.prototypeCanUseRole = minimum => Object.hasOwn(ROLE_LEVEL, minimum) && canUseRole(minimum);
  window.getWorkflowViewTitle = viewName => ({ support: t("supportTitle"), request: t("requestTitle"), build: t("buildTitle"), admin: t("adminTitle") })[viewName] || "";
  window.renderWorkflowLanguage = renderLanguage;
  window.getPrototypeRole = () => currentRole;
  window.workflowPrototype = Object.freeze({
    roleLevels: ROLE_LEVEL,
    setRole,
    canAccessView: viewName => window.prototypeCanAccessView(viewName),
    getState: () => ({ role: currentRole, requests: requests.map(item => ({ ...item })), accounts: accounts.map(item => ({ ...item })) })
  });

  if (roleSelect) roleSelect.addEventListener("change", event => setRole(event.target.value));
  if (languageSelect) {
    languageSelect.addEventListener("change", event => {
      if (currentRole === "customer") customerLanguage = event.target.value;
      else if (event.target.value !== "zh") event.target.value = "zh";
    });
  }

  if (requestForm) {
    requestForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!canUseRole("debugger")) return;
      const data = new FormData(requestForm);
      const cameraSnRaw = String(data.get("cameraSn") || "");
      const request = {
        id: `REQ-${String(nextRequestNumber++).padStart(4, "0")}`,
        device: String(data.get("device") || "").trim(),
        cameraSnRaw,
        cameraSnNormalized: cameraSnRaw.trim(),
        release: String(data.get("release") || "").trim(),
        priority: String(data.get("priority") || "normal"),
        description: String(data.get("description") || ""),
        requester: currentRole === "debugger" ? "debug.demo@example.com" : `${currentRole}.demo@example.com`,
        status: "pending",
        artifact: ""
      };
      requests.unshift(request);
      requestForm.reset();
      renderAll();
      showToast(t("submitted"));
    });
  }

  if (buildTaskList) {
    buildTaskList.addEventListener("click", event => {
      const button = event.target.closest("button[data-action]");
      if (!button || !canUseRole("developer")) return;
      const request = requests.find(item => item.id === button.dataset.id);
      if (!request) return;
      const transitions = {
        pending: { confirm: "confirmed" },
        confirmed: { build: "building" },
        building: { success: "success", failed: "failed" },
        failed: { build: "building" }
      };
      const nextStatus = transitions[request.status] && transitions[request.status][button.dataset.action];
      if (!nextStatus) return;
      request.status = nextStatus;
      request.artifact = nextStatus === "success" ? `${request.release}-${request.device}/x64/ImgProcOffline.exe` : "";
      renderAll();
      showToast(t("taskUpdated"));
    });
  }

  if (accountForm) {
    accountForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!canUseRole("admin")) return;
      const data = new FormData(accountForm);
      const email = String(data.get("email") || "").trim().toLowerCase();
      const role = String(data.get("role") || "");
      if (!["debugger", "developer", "admin"].includes(role)) return;
      if (accounts.some(account => account.email.toLowerCase() === email)) {
        showToast(t("duplicateAccount"));
        return;
      }
      accounts.push({ id: nextAccountNumber++, name: String(data.get("name") || "").trim(), email, role, enabled: true });
      accountForm.reset();
      renderAccounts();
      showToast(t("accountAdded"));
    });
  }

  if (accountList) {
    accountList.addEventListener("change", event => {
      const select = event.target.closest("select[data-account-role]");
      if (!select || !canUseRole("admin")) return;
      if (!["debugger", "developer", "admin"].includes(select.value)) return;
      const account = accounts.find(item => item.id === Number(select.dataset.accountRole));
      if (!account) return;
      account.role = select.value;
      showToast(t("roleChanged"));
    });
    accountList.addEventListener("click", event => {
      const button = event.target.closest("button[data-action='toggle-account']");
      if (!button || !canUseRole("admin")) return;
      const account = accounts.find(item => item.id === Number(button.dataset.id));
      if (!account) return;
      account.enabled = !account.enabled;
      renderAccounts();
      showToast(t("roleChanged"));
    });
  }

  renderLanguage("zh");
  setRole("customer");
})();
