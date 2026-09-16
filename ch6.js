/* ============ 第 12 章　數據的收集、整理與描述 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#0d9488';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 12,
    title: '數據的收集、整理與描述',
    color: C,
    sections: [
      '12.1 統計調查與抽樣',
      '12.2 用統計圖描述數據'
    ],
    slides: [
      {
        sec: '12.1', secName: '統計調查與抽樣',
        title: '全面調查與抽樣調查；總體、個體、樣本與樣本容量',
        points: [
          '<b>全面調查（普查）</b>：對所有考察對象進行的調查。優點是全面準確；缺點是工作量大、成本高、具破壞性時不可用。',
          '<b>抽樣調查</b>：從總體中抽取一部分個體進行調查。要求抽樣具備<b>隨機性</b>與<b>代表性</b>。',
          '<b>四大概念辨析</b>：<b>總體</b>（所要考察對象的全體）、<b>個體</b>（組成總體的每一個考察對象）、<b>樣本</b>（抽出的個體組成的整體）、<b>樣本容量</b>（樣本中個體的<b>數量，不帶單位</b>！）。'
        ],
        formula: { label: '抽樣統計核心術語', tex: '\\text{樣本容量是純數字 (不帶單位)} \\;;\\; \\text{樣本估計總體: } P(\\text{總體}) \\approx \\frac{m}{n}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <ellipse cx="140" cy="125" rx="100" ry="75" fill="#f0fdfa" stroke="#0d9488" stroke-width="2"/>
            <text x="140" y="80" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">總體 (全校 2000 名學生視力)</text>

            <ellipse cx="140" cy="135" rx="45" ry="35" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="140" y="135" font-size="12" font-weight="bold" fill="#115e59" text-anchor="middle">樣本</text>
            <text x="140" y="152" font-size="10" fill="#134e4a" text-anchor="middle">(200 名學生視力)</text>

            <line x1="185" y1="135" x2="285" y2="135" stroke="#0284c7" stroke-width="2"/>
            <polygon points="285,131 295,135 285,139" fill="#0284c7"/>
            <text x="240" y="125" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">隨機抽樣</text>

            <rect x="300" y="90" width="120" height="85" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="360" y="120" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">樣本容量</text>
            <text x="360" y="145" font-size="16" font-weight="bold" fill="#e11d48" text-anchor="middle">200</text>
            <text x="360" y="165" font-size="11" fill="#64748b" text-anchor="middle">(不能寫「200名」)</text>
          `);
        },
        caption: '易錯警示：問「樣本容量是多少」，只能填數值（如 200），帶單位（如 200 名）必判錯！',
        example: {
          q: '為了了解某市 5 萬名初中畢業生的體育中考成績，從中隨機抽取 1000 名考生的體育成績進行統計分析。指出總體、個體、樣本及樣本容量。',
          steps: [
            '<b>總體</b>：該市 5 萬名初中畢業生的體育中考成績。',
            '<b>個體</b>：該市每名初中畢業生的體育中考成績。',
            '<b>樣本</b>：抽取的 1000 名考生的體育中考成績。',
            '<b>樣本容量</b>：1000（純數量，絕不帶單位）。'
          ],
          ans: '樣本容量為 1000。'
        }
      },
      {
        sec: '12.2', secName: '用統計圖描述數據',
        title: '條形、折線、扇形與頻數分佈直方圖各司其職',
        points: [
          '<b>條形統計圖</b>：能清楚顯示每個項目的<b>具體數值大小</b>，便於相互比較。',
          '<b>折線統計圖</b>：能清晰反映數據隨時間變化的<b>增減趨勢</b>。',
          '<b>扇形統計圖</b>：能清楚表示各部分在總體中所佔的<b>百分比</b>。圓心角計算公式：$\\text{圓心角度數} = 360^\\circ \\times \\text{該項百分比}$。',
          '<b>頻數分佈直方圖</b>：反映連續分組數據的分佈情況。$\\text{頻數} = \\text{總數} \\times \\text{頻率}$。'
        ],
        formula: { label: '扇形圓心角與頻率公式', tex: '\\alpha = 360^\\circ \\times \\frac{n_i}{N} \\;;\\; \\text{頻率} = \\frac{\\text{頻數}}{\\text{總次數}} \\;;\\; \\sum \\text{頻率} = 1' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="120" cy="125" r="70" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
            <path d="M 120 125 L 120 55 A 70 70 0 0 1 190 125 Z" fill="#0284c7"/>
            <text x="145" y="100" font-size="12" font-weight="bold" fill="#fff">25% (90°)</text>

            <path d="M 120 125 L 190 125 A 70 70 0 0 1 70 174 Z" fill="#0d9488"/>
            <text x="120" y="160" font-size="12" font-weight="bold" fill="#fff">40% (144°)</text>

            <path d="M 120 125 L 70 174 A 70 70 0 0 1 120 55 Z" fill="#f59e0b"/>
            <text x="80" y="110" font-size="12" font-weight="bold" fill="#fff">35%</text>

            <rect x="240" y="55" width="25" height="120" fill="#0284c7"/>
            <rect x="275" y="35" width="25" height="140" fill="#0d9488"/>
            <rect x="310" y="85" width="25" height="90" fill="#f59e0b"/>
            <rect x="345" y="115" width="25" height="60" fill="#e11d48"/>
            <line x1="225" y1="175" x2="385" y2="175" stroke="#334155" stroke-width="1.5"/>
            <text x="305" y="210" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">直方圖 / 條形圖 (對比數量)</text>
          `);
        },
        caption: '扇形統計圖所有圓心角之和等於 $360^\\circ$，所有百分比之和為 $100\\%$。',
        example: {
          q: '某班有 50 名學生，在一次體育測試中有 15 人達到優秀。若繪製扇形統計圖，優秀人數所對應的圓心角是多少度？',
          steps: [
            '計算優秀人數所佔的百分比：$\\frac{15}{50} = 30\\%$。',
            '計算所對應的扇形圓心角度數：$360^\\circ \\times 30\\% = 108^\\circ$。'
          ],
          ans: '優秀人數所對應的扇形圓心角是 $108^\\circ$。'
        }
      }
    ]
  });
})();