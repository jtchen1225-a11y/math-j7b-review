/* ============ 第 7 章　相交線與平行線 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#0284c7';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 7,
    title: '相交線與平行線',
    color: C,
    sections: [
      '7.1 相交線與垂線',
      '7.2 平行線的判定與性質',
      '7.3 命題、定理與平移'
    ],
    slides: [
      {
        sec: '7.1', secName: '相交線與垂線',
        title: '對頂角相等；垂線段最短，點到直線的距離為垂線段長',
        points: [
          '<b>對頂角與鄰補角</b>：兩條直線相交，有公共頂點且兩邊互為反向延長線的兩角為對頂角，<b>對頂角相等</b>；鄰補角互補。',
          '<b>垂線性質</b>：過一點有且只有一條直線與已知直線垂直；連接直線外一點與直線上各點的所有線段中，<b>垂線段最短</b>。',
          '<b>點到直線的距離</b>：直線外一點到這條直線的垂線段的長度。'
        ],
        formula: { label: '垂線與對頂角性質', tex: '\\angle 1 = \\angle 3 \\;;\\; \\angle 1 + \\angle 2 = 180^\\circ \\;;\\; d(P, l) = PQ \\; (PQ \\perp l)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="60" y1="50" x2="380" y2="190" stroke="#0284c7" stroke-width="2.5"/>
            <line x1="70" y1="180" x2="370" y2="60" stroke="#e11d48" stroke-width="2.5"/>
            <circle cx="220" cy="120" r="4" fill="#0f172a"/>
            <text x="220" y="105" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">∠1</text>
            <text x="260" y="125" font-size="14" font-weight="bold" fill="#e11d48">∠2</text>
            <text x="220" y="145" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">∠3</text>
            <text x="175" y="125" font-size="14" font-weight="bold" fill="#e11d48">∠4</text>
            <rect x="40" y="205" width="360" height="35" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.2"/>
            <text x="220" y="228" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">對頂角：∠1 = ∠3，∠2 = ∠4 ； 鄰補角：∠1 + ∠2 = 180°</text>
          `);
        },
        caption: '兩條直線相交形成 2 對對頂角與 4 對鄰補角。',
        example: {
          q: '如圖，直線 $AB$ 與 $CD$ 相交於點 $O$，$OE \\perp AB$ 於 $O$。若 $\\angle EOC = 35^\\circ$，求 $\\angle BOD$ 的度數。',
          steps: [
            '因為 $OE \\perp AB$，所以 $\\angle AOE = 90^\\circ$。',
            '由角加減可得：$\\angle AOC = \\angle AOE - \\angle EOC = 90^\\circ - 35^\\circ = 55^\\circ$。',
            '因為直線 $AB, CD$ 相交於 $O$，所以 $\\angle BOD$ 與 $\\angle AOC$ 為對頂角，故 $\\angle BOD = \\angle AOC = 55^\\circ$。'
          ],
          ans: '$\\angle BOD = 55^\\circ$。'
        }
      },
      {
        sec: '7.2', secName: '平行線的判定與性質',
        title: '同位角相等、內錯角相等、同旁內角互補 $\\iff$ 兩直線平行',
        points: [
          '<b>平行線判定</b>：同位角相等 $\\implies a \\parallel b$；內錯角相等 $\\implies a \\parallel b$；同旁內角互補 $\\implies a \\parallel b$。',
          '<b>平行線性質</b>：兩直線平行 $\\implies$ 同位角相等；兩直線平行 $\\implies$ 內錯角相等；兩直線平行 $\\implies$ 同旁內角互補。',
          '<b>平行公理</b>：經過直線外一點，有且只有一條直線與這條直線平行。平行於同一條直線的兩直線平行。'
        ],
        formula: { label: '平行判定與性質等價群', tex: 'a \\parallel b \\iff \\angle 1 = \\angle 5 \\iff \\angle 3 = \\angle 5 \\iff \\angle 4 + \\angle 5 = 180^\\circ' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="70" x2="400" y2="70" stroke="#0284c7" stroke-width="2.5"/>
            <line x1="40" y1="160" x2="400" y2="160" stroke="#0284c7" stroke-width="2.5"/>
            <text x="410" y="75" font-size="13" font-weight="bold" fill="#0284c7">a</text>
            <text x="410" y="165" font-size="13" font-weight="bold" fill="#0284c7">b</text>
            <line x1="120" y1="30" x2="320" y2="210" stroke="#64748b" stroke-width="2"/>
            <text x="330" y="215" font-size="13" font-weight="bold" fill="#64748b">c</text>
            <text x="180" y="65" font-size="13" font-weight="bold" fill="#e11d48">∠1 (同位)</text>
            <text x="280" y="155" font-size="13" font-weight="bold" fill="#e11d48">∠5 (同位)</text>
            <text x="145" y="90" font-size="13" font-weight="bold" fill="#059669">∠3 (內錯)</text>
            <rect x="50" y="200" width="340" height="35" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <text x="220" y="222" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">a ∥ b ⟺ 同位角相等 / 內錯角相等 / 同旁內角互補</text>
          `);
        },
        caption: '拐點模型常作平行輔助線：若 \\(AB \\parallel CD\\)，折線拐點 \\(P\\) 處過點 \\(P\\) 作平行線。',
        example: {
          q: '如圖，$AB \\parallel CD$，點 $E$ 在 $AB$ 與 $CD$ 之間，$\\angle B = 40^\\circ$，$\\angle D = 60^\\circ$，求折角 $\\angle BED$ 的度數。',
          steps: [
            '過點 $E$ 作直線 $EF \\parallel AB$。',
            '因為 $AB \\parallel CD$，$EF \\parallel AB$，所以 $EF \\parallel CD$。',
            '由兩直線平行內錯角相等：$\\angle BEF = \\angle B = 40^\\circ$，$\\angle FED = \\angle D = 60^\\circ$。',
            '所以 $\\angle BED = \\angle BEF + \\angle FED = 40^\\circ + 60^\\circ = 100^\\circ$。'
          ],
          ans: '$\\angle BED = 100^\\circ$。'
        }
      },
      {
        sec: '7.3', secName: '命題、定理與平移',
        title: '命題由題設與結論構成；平移對應點連線平行（或共線）且相等',
        points: [
          '<b>命題結構</b>：判斷一件事情的語句叫做命題。命題常寫為「如果……那麼……」。題設成立結論必成立者為<b>真命題</b>；要說明假命題只需舉出一個<b>反例</b>。',
          '<b>平移特徵</b>：把一個圖形整體沿某個方向移動一定距離。<b>對應點所連線段平行（或在一條直線上）且相等</b>。',
          '<b>平移不變性</b>：平移前後圖形的形狀和大小完全相同（對應線段相等、對應角相等）。'
        ],
        formula: { label: '平移向量性質', tex: "\\triangle ABC \\xrightarrow{\\text{平移}} \\triangle A'B'C' \\implies AA' = BB' = CC' \\;;\\; AA' \\parallel BB' \\parallel CC'" },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <polygon points="80,140 140,60 170,140" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <text x="70" y="155" font-size="12" font-weight="bold" fill="#0284c7">A</text>
            <text x="140" y="50" font-size="12" font-weight="bold" fill="#0284c7">B</text>
            <text x="180" y="155" font-size="12" font-weight="bold" fill="#0284c7">C</text>

            <polygon points="260,140 320,60 350,140" fill="#fbcfe8" stroke="#e11d48" stroke-width="2"/>
            <text x="250" y="155" font-size="12" font-weight="bold" fill="#e11d48">A'</text>
            <text x="320" y="50" font-size="12" font-weight="bold" fill="#e11d48">B'</text>
            <text x="360" y="155" font-size="12" font-weight="bold" fill="#e11d48">C'</text>

            <line x1="80" y1="140" x2="260" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="140" y1="60" x2="320" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="170" y1="140" x2="350" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="210" y="85" font-size="13" font-weight="bold" fill="#059669">平移向量 d</text>
          `);
        },
        caption: '平移不改變圖形的形狀與大小，對應線段平行且相等。',
        example: {
          q: '下列命題是真命題還是假命題？如果是假命題，請舉出一個反例。(1) 同位角相等；(2) 若 $a^2 = b^2$，則 $a = b$。',
          steps: [
            '(1) 假命題。反例：兩條不平行的直線被第三條直線所截，同位角不相等。',
            '(2) 假命題。反例：取 $a = -2, b = 2$，則 $(-2)^2 = 2^2 = 4$，但 $-2 \\neq 2$。'
          ],
          ans: '兩者皆為假命題，舉出一個反例即可推翻。'
        }
      }
    ]
  });
})();