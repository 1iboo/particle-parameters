(() => {
  const parameters = [
    ["定位组编号", "0–4整数", "选择 loc_0 至 loc_4 定位配置，不同检测模块可引用不同定位组"],
    ["开启 / b_detect", "0关闭／1开启", "启用或关闭所选定位组；关闭后依赖该组的检测模块不能获得有效定位结果"],
    ["scan / b_scan", "0关闭／1开启", "启用扫描定位流程，根据选定方向在定位ROI内寻找目标边缘"],
    ["定位模块选择", "下拉选项", "选择瓶底定位、瓶底配准、液面定位、左侧定位/配准或右侧定位/配准，并显示对应参数"],
    ["扫描轴 / bOrbX", "0或1", "选择扫描轴。1主要沿X方向寻找位置，0主要沿Y方向寻找位置"],
    ["扫描方向 / bInc", "0或1", "控制沿坐标增大或减小方向进行搜索；左右侧或相反边缘通常采用不同方向"],
    ["阈值 / diff_thr", "整数，可正可负", "边缘灰度差门槛。绝对值越大，要求边缘明暗变化越明显；正负号用于区分灰度变化方向"],
    ["边界浮动 / brd_var", "非负整数", "允许定位边界在搜索过程中的波动范围。值越大，对不平整边缘的容忍度越高"],
    ["参考值-位置偏移 / ref_offset", "整数（像素）", "从检测到的边缘偏移指定距离后获取参考灰度，避免直接在边缘上取值"],
    ["参考值-类型 / ref_type", "整数／模式编号", "选择参考灰度的内部计算方式，不同编号对应不同的参考值计算模式"],
    ["参考值 / ref_val", "-1或0–255", "指定固定参考灰度；-1通常表示由程序根据图像自动获取参考值"],
    ["参考厚度 / ref_thick", "正整数（像素）", "设置参考灰度采样带的厚度；较大时取样更稳定，但可能混入邻近结构"],
    ["最大尺寸 / szmax.width、height", "正整数（像素）", "限制边缘候选区域允许的最大宽度和高度，不表示整幅检测ROI"],
    ["最小长度 / len_min", "正整数（像素）", "有效边缘的最小连续长度。调大可过滤短小干扰，但过大可能造成定位失败"],
    ["直线拟合使能 / bLine", "0关闭／1开启", "对检测到的边缘点执行直线拟合，用于提高规则直边的定位稳定性"],
    ["毛刺区域使能 / bmr", "0关闭／1开启", "允许处理带毛刺或局部不规则的边缘区域，提高复杂边缘的适应性"],
    ["定位偏移 / anchor", "整数（像素）", "在找到边缘后对最终输出位置进行补偿；正负值分别向相反方向移动定位基准"],
    ["定位区域 / roi", "x、y、宽、高", "限定所选定位模块的搜索范围。区域过大会增加错误边缘，过小可能找不到目标"],
    ["定位点数 / site_sum", "非负整数", "对有效定位点或定位结果数量设置要求；0通常表示不使用该项数量限制"],
    ["有效比例 / thr_ratio", "0–1小数", "定位结果的有效比例门槛；数值越大，定位有效性判定越严格"],
    ["最大晃动值 / thr_x、thr_y、thr_z", "整数（像素），-1关闭", "限制定位结果在各方向允许的最大波动；值越小越严格，-1表示不启用该方向限制"],
    ["扫描边界偏移 / scan_brd", "整数（像素）", "设置扫描或瓶底基准使用的边界补偿距离"],
    ["配准类型 / r_type", "整数／下拉选项", "选择用于配准的基准类型，如瓶底、侧边或液面"],
    ["配准边界补偿 / r_of_tlx、tly、brx、bry", "整数（像素）", "分别补偿配准区域四个边界，用于扩大、收缩或平移最终参与检测的范围"],
    ["配准正负阈值 / r_thr_pos、r_thr_neg", "整数", "设置配准差分中正向和负向灰度响应的门槛；0通常表示不额外限制"],
    ["配准腐蚀 / r_morph_erode", "非负整数", "对配准掩膜执行腐蚀，去除细小噪声并缩小区域；过大会损失有效边缘"],
    ["配准膨胀 / r_morph_dilate", "非负整数", "对配准掩膜执行膨胀，连接邻近区域并扩大覆盖；过大会包含背景干扰"],
    ["参考名称 / r_ref_name", "字符或名称", "指定配准参考区域或模板的名称"],
    ["配准参考区域 / roi_r", "x、y、宽、高", "设置建立或读取配准参考信息的区域；0 0 0 0通常表示不单独设置"],
    ["Y方向切分 / ncut_y", "正整数", "将定位或配准区域沿Y方向切分处理；值为1时表示不再细分"],
    ["灰度反转 / bInv", "0关闭／1开启", "在液面辅助定位时反转图像明暗关系，用于适配相反的照明或目标极性"],
    ["液面候选点数 / cnt", "正整数", "液面定位所需的候选点数量门槛；候选点不足时液面结果可能无效"],
    ["金字塔层级 / pyr", "正整数", "设置液面定位使用的图像缩放或金字塔层级；层级提高可增强稳定性但会损失细节"],
    ["液面灰度阈值 / thr", "0–255整数", "液面候选像素的灰度门槛，需结合背光亮度和液面明暗特征调整"],
    ["定位源编号 / idx_to_loc", "整数／定位组编号", "粒子检测模块用于选择所依赖的定位组"]
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
