(function () {
  const rows = {
    zh: {
      name: "中文", headers: ["参数名称", "参数范围", "具体作用"],
      dlTitle: "DL 模块常用参数说明", defectTitle: "缺陷检测参数说明",
      dl: [
        ["开启", "开关（未勾选／勾选）", "DL 检测模块总开关"],
        ["定位配准源", "非负整数", "选择输入图像使用的定位配准结果"],
        ["模型目录编号", "非负整数", "选择模型目录或模型编号"],
        ["模型名称", "文本", "指定实际使用的模型名称或文件"],
        ["模型使能", "开关（未勾选／勾选）", "控制是否调用当前模型"],
        ["目标编号选择", "非负整数", "选择需要判断的目标类别"],
        ["目标单帧数量", "按类别设置的整数数组", "设置各目标类别的单帧数量阈值"],
        ["目标帧数", "按类别设置的整数数组", "设置各目标类别的多帧累计判断阈值"],
        ["掩膜编号选择", "非负整数", "选择参与检测的 Mask"],
        ["分割区域绘制", "开关（未勾选／勾选）", "控制是否绘制模型输出的分割区域"],
        ["掩膜x偏移 / 掩膜y偏移 / 掩膜宽度 / 掩膜高度", "整数（像素）", "设置所选掩膜矩形区域的位置和尺寸"],
        ["0无/1分割/2目标/3分类", "0–3 枚举", "选择 DL 输出任务类型"],
        ["置信度阈值", "0–1 小数", "过滤低于该置信度的检测结果"],
        ["kNmsThreshold阈值", "0–1 小数", "去除相互重叠的重复检测框"],
        ["检测算法宽度 / 检测算法高度", "正整数（像素）", "设置送入模型的图像尺寸"],
        ["kNumClass", "正整数", "设置模型输出类别总数"],
        ["结果图标注:-1无/1有", "-1 或 1", "控制是否在结果图上绘制检测框和标注"],
        ["动态类别文字:0无/1有", "0 或 1", "控制是否显示类别文字"],
        ["Mask 颜色混合权重", "0–1 小数", "设置 Mask 颜色与原图的混合比例"],
        ["拆分窗口宽度 / 拆分窗口高度", "正整数（像素）", "设置分块检测窗口尺寸"],
        ["拆分滑动步长X / 拆分滑动步长Y", "正整数（像素）", "设置分块窗口的横向和纵向移动步长"],
        ["seq_begin / seq_rbegin / seq_interval", "非负整数", "限定序列中开始检测、排除检测和检测间隔"],
        ["0不存/1好/2坏/3任意", "模式值", "选择结果图保存类型"],
        ["存图间隔", "正整数", "设置结果图保存间隔"],
        ["最小绘框长宽(0原样)", "非负整数（像素）", "限制最小检测框尺寸；0 时保持原样"],
        ["绘框线宽", "正整数（像素）", "设置检测框边线宽度"],
        ["绘框类别编号", "非负整数", "选择需要绘制的类别编号"],
        ["绘框颜色B / 绘框颜色G / 绘框颜色R", "0–255 整数", "设置检测框颜色的蓝、绿、红通道"],
        ["存图宽度(0原图尺寸) / 存图高度(0原图尺寸)", "非负整数（像素）", "设置保存图像尺寸；0 时使用原图尺寸"],
        ["拼图网格宽度 / 拼图网格高度", "正整数", "设置拼图网格尺寸"],
        ["静止检测/-1关/其他", "-1 或模式值", "控制静止检测相关模式"],
        ["mask_pt_offset_x / mask_pt_offset_y", "整数（像素）", "调整 Mask 点位的横向和纵向偏移"],
        ["b_pass", "0 或 1", "控制结果是否直接通过"],
        ["shrk_tlx / shrk_brx / shrk_tly / shrk_bry", "非负整数（像素）", "分别收缩检测区域的四个边界"],
        ["二次处理-二值化", "0–255 整数", "二次处理阶段的二值化阈值"],
        ["二次处理-前景数", "整数，-1关闭", "二次处理阶段的非零前景数量阈值"],
        ["hal模式", "模式值", "选择 HAL 后处理模式"],
        ["hal模式-最小跨度", "正整数（像素）", "设置 HAL 模式下的最小有效跨度"]
      ],
      defect: [
        ["开启", "开关（未勾选／勾选）", "缺陷检测模块总开关"],
        ["定位配准源", "非负整数", "选择经过定位配准后的输入图像"],
        ["模型编号", "非负整数", "选择缺陷检测模型"],
        ["模型子目录", "文本", "指定模型所在的子目录"],
        ["模型使能", "开关（未勾选／勾选）", "控制是否调用缺陷模型"],
        ["0不存/1好/2坏/3任意", "模式值", "选择结果图保存类型"],
        ["存图间隔", "正整数", "设置结果图保存间隔"],
        ["sz_im_dl_x / sz_im_dl_y", "宽×高（像素）", "设置送入缺陷模型的图像尺寸"],
        ["merge1_split2", "模式值", "选择图像合并或拆分处理方式"],
        ["结果图标注:-1无/1有", "-1 或 1", "控制是否绘制缺陷检测框"],
        ["前景框数量", "正整数", "单帧非零前景数量判定门槛"],
        ["图像张数", "正整数", "多帧累计非零前景数量判定门槛"],
        ["屏蔽-左宽度 / 高度 / X / Y", "整数（像素）", "设置左侧角部或边缘屏蔽区域"],
        ["屏蔽-右宽度 / 高度 / X / Y", "整数（像素）", "设置右侧角部或边缘屏蔽区域"],
        ["最小绘框长宽(0原样)", "非负整数（像素）", "限制过小的检测框；0 时保持原样"],
        ["绘框线宽", "正整数（像素）", "设置检测框边线宽度"],
        ["动态类别文字:0无/1有", "0 或 1", "控制是否显示类别文字"],
        ["存图宽度(0原图尺寸) / 存图高度(0原图尺寸)", "非负整数（像素）", "设置保存图像尺寸；0 时使用原图尺寸"],
        ["shrk_hat_x", "非负整数（像素）", "调整帽部或头部相关检测区域的横向收缩"],
        ["sz_merge_qrid_x / sz_merge_qrid_y", "正整数", "设置图像合并网格的横向和纵向尺寸"]
      ]
    },
    en: {
      name: "English", headers: ["Parameter", "Range", "Function"], dlTitle: "Common DL Parameters", defectTitle: "Defect Detection Parameters",
      dl: [["Enable","Checkbox (unchecked / checked)","Main DL detection switch"],["Location/registration source","Non-negative integer","Selects the registered image source"],["Model directory number","Non-negative integer","Selects the model directory or index"],["Model name","Text","Specifies the model file or name"],["Model enable","Checkbox (unchecked / checked)","Controls whether the model is called"],["Target selection","Non-negative integer","Selects the target class to evaluate"],["Single-frame target count","Per-class integer array","Sets the single-frame threshold for each class"],["Target frame count","Per-class integer array","Sets the accumulated multi-frame threshold"],["Mask selection","Non-negative integer","Selects the Mask used for detection"],["0 none/1 segmentation/2 object/3 classification","Enum 0–3","Selects the DL task type"],["Confidence threshold","Decimal 0–1","Filters results below this confidence"],["kNmsThreshold","Decimal 0–1","Removes overlapping duplicate boxes"],["Model input width/height","Positive pixels","Sets the model input size"],["Class count","Positive integer","Sets the number of output classes"],["Result annotation","Switch or mode","Draws boxes and annotations on result images"],["Dynamic class text","Checkbox (unchecked / checked)","Controls class-label display"],["Mask color blend weight","Decimal 0–1","Controls Mask and image color blending"],["Split window width/height","Positive pixels","Sets the tile size for detection"],["Split stride X/Y","Positive pixels","Sets horizontal and vertical tile steps"],["Sequence start/end","Non-negative integers","Limits the detected part of the image sequence"]],
      defect: [["Enable","Checkbox (unchecked / checked)","Main defect-detection switch"],["Location/registration source","Non-negative integer","Selects the registered input image"],["Model number","Non-negative integer","Selects the defect model"],["Model subdirectory","Text","Specifies the model subdirectory"],["Model enable","Checkbox (unchecked / checked)","Controls whether the defect model is called"],["Save mode","Mode value","Selects which result images are saved"],["Save interval","Positive integer","Sets the result-image save interval"],["DL image size","Width × height (pixels)","Sets the defect-model input size"],["Merge/split mode","Mode value","Selects image merge or split processing"],["Result box drawing","Switch or mode","Controls defect-box drawing"],["Single-frame foreground count","Positive integer","Threshold for nonzero foreground in one frame"],["Accumulated foreground count","Positive integer","Threshold for nonzero foreground across frames"],["Left/right mask regions","Coordinates, width, height","Sets corner or edge masking regions"],["Minimum box size","Positive pixels","Limits undersized detection boxes"],["Box line width","Positive pixels","Sets the detection-box line width"]]
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
      const count = document.getElementById(`${kind}-count`); if (count) count.textContent = `${version[kind].length} ${code === "zh" ? "项参数" : "parameters"}`;
      ["name", "range", "function"].forEach((part, index) => { const el = document.getElementById(`${kind}-header-${part}`); if (el) el.textContent = version.headers[index]; });
    });
  };
})();
