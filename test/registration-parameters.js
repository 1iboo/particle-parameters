(() => {
  const parameters = [
    ["定位组编号", "0–4整数", "选择 loc_0 至 loc_4 定位配置，不同检测模块可引用不同定位组"],
    ["开启 / b_detect", "0关闭／1开启", "启用或关闭所选定位组；关闭后依赖该组的检测模块不能获得有效定位结果"],
    ["scan / b_scan", "0关闭／1开启", "启用扫描定位流程，根据选定方向在定位ROI内寻找目标边缘"],
    ["扫描轴 / bOrbX", "0或1", "选择扫描轴。1主要沿X方向寻找位置，0主要沿Y方向寻找位置"],
    ["扫描方向 / bInc", "0或1", "控制沿坐标增大或减小方向进行搜索；左右侧或相反边缘通常采用不同方向"],
    ["阈值 / diff_thr", "整数，可正可负", "边缘灰度差门槛。绝对值越大，要求边缘明暗变化越明显；正负号用于区分灰度变化方向"],
    ["边界浮动 / brd_var", "非负整数", "允许定位边界在搜索过程中的波动范围。值越大，对不平整边缘的容忍度越高"],
    ["参考值-位置偏移 / ref_offset", "整数（像素）", "从检测到的边缘偏移指定距离后获取参考灰度，避免直接在边缘上取值"],
    ["最大尺寸 / szmax.width、height", "正整数（像素）", "限制边缘候选区域允许的最大宽度和高度，不表示整幅检测ROI"],
    ["最小长度 / len_min", "正整数（像素）", "有效边缘的最小连续长度。调大可过滤短小干扰，但过大可能造成定位失败"],
    ["定位偏移 / anchor", "整数（像素）", "在找到边缘后对最终输出位置进行补偿；正负值分别向相反方向移动定位基准"],
    ["定位区域 / roi", "x、y、宽、高", "限定所选定位模块的搜索范围。区域过大会增加错误边缘，过小可能找不到目标"],
    ["有效比例 / thr_ratio", "0–1小数", "定位结果的有效比例门槛；数值越大，定位有效性判定越严格"],
    ["最大晃动值 / thr_x、thr_y", "整数（像素），-1关闭", "限制定位结果在X、Y方向允许的最大波动；值越小越严格，-1表示不启用对应方向限制"],
    ["配准边界补偿 / r_of_tlx、tly、brx、bry", "整数（像素）", "分别补偿配准区域四个边界，用于扩大、收缩或平移最终参与检测的范围"]
  ];

  const tbody = document.getElementById("registration-rows");
  if (tbody) {
    const fragment = document.createDocumentFragment();
    parameters.forEach(([name, range, description]) => {
      const row = document.createElement("tr");
      [name, range, description].forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        cell.dataset.label = ["参数名称", "参数范围", "具体作用"][index];
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tbody.replaceChildren(fragment);
  }

  const count = document.getElementById("registration-count");
  if (count) count.textContent = `${parameters.length} 项参数`;

  const printButton = document.getElementById("registration-print-button");
  if (printButton) {
    printButton.addEventListener("click", () => {
      document.body.classList.add("print-registration");
      requestAnimationFrame(() => window.print());
    });
    window.addEventListener("afterprint", () => document.body.classList.remove("print-registration"));
  }
})();
