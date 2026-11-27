(() => {
  const grid = document.querySelector("#support .workflow-grid");
  if (!grid) return;
  const card = document.createElement("article");
  card.className = "workflow-card";
  card.style.gridColumn = "1 / -1";
  card.innerHTML = '<span class="workflow-card-index">06</span><h2></h2><p></p><a class="workflow-card-link" href="hvld/"></a>';
  const labels = {
    zh:["明森高压电源（HVLD 微孔检漏）","设定电压 0～22 kV；按面板故障码查询设备状态。","查看使用说明与故障码"],
    en:["Mingsen high-voltage power supply (HVLD)","Voltage setting: 0–22 kV. Look up panel fault codes.","Open manual (Chinese)"],
    fr:["Alimentation haute tension Mingsen (HVLD)","Tension de consigne : 0–22 kV. Recherche par code défaut.","Ouvrir le manuel (chinois)"],
    ru:["Высоковольтный источник питания Mingsen (HVLD)","Заданное напряжение: 0–22 кВ. Поиск по коду неисправности.","Открыть руководство (на китайском)"],
    tr:["Mingsen yüksek gerilim güç kaynağı (HVLD)","Gerilim ayarı: 0–22 kV. Panel arıza koduna göre arayın.","Kılavuzu aç (Çince)"],
    es:["Fuente de alta tensión Mingsen (HVLD)","Tensión de consigna: 0–22 kV. Consulte los códigos de fallo.","Abrir el manual (chino)"],
    it:["Alimentatore ad alta tensione Mingsen (HVLD)","Tensione impostata: 0–22 kV. Ricerca per codice di guasto.","Apri il manuale (cinese)"]
  };
  const update=()=>{const s=labels[document.documentElement.lang.split("-")[0]]||labels.en;
    ["h2","p","a"].forEach((tag,i)=>card.querySelector(tag).textContent=s[i]);};
  update();grid.append(card);
  new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
