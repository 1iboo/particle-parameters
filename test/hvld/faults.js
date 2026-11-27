const rows=[
["02","电源过热","温度保护。温度恢复后设备复查。"],
["03","水流故障","启用相应输入时收到外部停机信号。信号消失后设备复查。"],
["04","反馈失效","输出控制已到上限但反馈持续过低，保护锁存。"],
["06","系统干扰","这是面板文本，也可能对应过流相关保护；不能仅凭文字断定为外部干扰。反复触发可能转 07。"],
["07","电源过流","保护锁存，停止输出。记录故障并交授权维修人员核查。"],
["08","设定值过大","历史保留；本版固件无触发源，不承担设定电压上限校验。"],
["09","设定值过小","历史保留；本版固件无触发源，不承担设定电压下限校验。"],
["0A","启动故障","启动检查未通过，电压稳定后设备重新检查。"],
["0B","输出不平衡","本手册所述机型已停用对应输入，勿当作当前启用的保护项。"],
["0C","电源漏电","设备确认泄漏后停止输出，泄漏信号消失后复查；由授权人员排查原因。"],
["0D","电源电压过低","电压低于下限，设备延时等待恢复。"],
["0E","电源电压过高","断开主继电器并复查电压状态。"],
["10","运行中压差异常","设备重新采样；按手册，上报后自动清除，不停机。"],
["13","主板异常复位","看门狗或复位引脚异常，整机锁存。"],
["14","显示板异常复位","显示板记录复位并提示，继续运行。"],
["15","主板异常复位并有欠压记录","整机锁存，保留记录供维修核查。"],
["16","显示板异常复位并有欠压记录","显示板提示并记录，继续运行。"],
["17","主板程序运行异常","设备停止输出并断开主继电器；异常时可能无法正常上报码。"],
["18","打火寿命预警","显示板累计打火计数达到预警条件；安排检修评估，不是主板停机故障。"],
["19","反馈持续过低","手册将此工况与高压包退化关联。保护锁存，不能只凭报码判定必须换件。"],
["1B","持续异常负载或低烈度拉弧","设备短时关断并记账，多次触发可能转 07。"],
["1C","打火配额预警","预警本身不停机；复核瓶型、电极与已验证电压是否匹配。"],
["80","参数存储异常（EEPROM）","显示板尝试回退备份或出厂值。重新投入使用前，按批准配方核对恢复后的参数。"]
];
const local=new Set(["14","16","18","80"]);
const q=document.querySelector("#query"),out=document.querySelector("#results");
function search(){
 const s=q.value.trim(),hex=/^(?:0x)?([a-f\d]{1,2})$/i.exec(s);
 const found=rows.filter(([k,n,d])=>!s||(hex?k===hex[1].toUpperCase().padStart(2,"0"):(n+d).includes(s)));
 out.replaceChildren();document.querySelector("#count").textContent=found.length?"共 "+found.length+" 条":"未找到匹配项。请核对面板字符和固件版本。";
 for(const [k,n,d] of found){const a=document.createElement("article");
 for(const [tag,str] of [["small",(local.has(k)?"显示板本地码":"主板故障码")+" · 十进制 "+parseInt(k,16)],["h3","0x"+k+"　"+n],["p",d]]){const el=document.createElement(tag);el.textContent=str;a.append(el)}out.append(a)}
}
function route(){const faults=location.hash==="#faults";document.querySelector("#usage").hidden=faults;document.querySelector("#faults").hidden=!faults;document.querySelectorAll("nav a").forEach(a=>{if(a.hash===(faults?"#faults":"#usage"))a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")})}
q.addEventListener("input",search);window.addEventListener("hashchange",route);search();route();
