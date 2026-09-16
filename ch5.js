/* ============ 第 11 章　不等式與不等式組 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#dc2626';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 11,
    title: '不等式與不等式組',
    color: C,
    sections: [
      '11.1 不等式及其性質',
      '11.2 一元一次不等式',
      '11.3 一元一次不等式組'
    ],
    slides: [
      {
        sec: '11.1', secName: '不等式及其性質',
        title: '乘或除以同一個負數，不等號方向必須改變（易錯核心）',
        points: [
          '<b>性質 1</b>：不等式兩邊加（或減）同一個數（或式子），不等號的方向不變。$a > b \\implies a \\pm c > b \\pm c$。',
          '<b>性質 2</b>：不等式兩邊乘（或除以）同一個<b>正數</b>，不等號的方向不變。$a > b, c > 0 \\implies ac > bc$。',
          '<b>性質 3（易錯）</b>：不等式兩邊乘（或除以）同一個<b>負數</b>，不等號的方向<b>必須改變</b>！$a > b, c < 0 \\implies ac < bc$。'
        ],
        formula: { label: '不等式三大基本性質', tex: 'a > b \\;;\\; c < 0 \\implies ac < bc \\quad \\text{且} \\quad \\frac{a}{c} < \\frac{b}{c} \\quad (\\text{變號!})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="30" y="30" width="380" height="70" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <text x="220" y="60" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">性質 3 警告：乘除負數必變號！</text>
            <text x="220" y="85" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">若 a > b 且 c < 0，則 ac < bc ； a/c < b/c</text>

            <rect x="30" y="120" width="180" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="120" y="150" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">性質 1 (加減同數)</text>
            <text x="120" y="180" font-size="12" fill="#334155" text-anchor="middle">a > b ⟹ a ± c > b ± c</text>
            <text x="120" y="200" font-size="11" fill="#64748b" text-anchor="middle">方向始終不變</text>

            <rect x="230" y="120" width="180" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="320" y="150" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">性質 2 (乘除正數)</text>
            <text x="320" y="180" font-size="12" fill="#334155" text-anchor="middle">a > b, c > 0 ⟹ ac > bc</text>
            <text x="320" y="200" font-size="11" fill="#64748b" text-anchor="middle">方向始終不變</text>
          `);
        },
        caption: '初中代數最常見失分點：係數化為 1 時若係數為負數，忘記翻轉不等號方向。',
        example: {
          q: '若 $a < b$，比較下列各式的大小：(1) $a - 3$ 與 $b - 3$；(2) $-2a$ 與 $-2b$；(3) 若 $(m - 1)a > (m - 1)b$，求 $m$ 的取值範圍。',
          steps: [
            '(1) 兩邊同時減 3，不等號方向不變：$a - 3 < b - 3$。',
            '(2) 兩邊同時乘 $-2$（負數），不等號方向改變：$-2a > -2b$。',
            '(3) 原本 $a < b$，但乘以 $(m - 1)$ 後變為大於號，說明不等號方向發生改變。',
            '由性質 3，乘數必為負數：$m - 1 < 0 \\implies m < 1$。'
          ],
          ans: '(1) $a - 3 < b - 3$；(2) $-2a > -2b$；(3) $m < 1$。'
        }
      },
      {
        sec: '11.2', secName: '一元一次不等式',
        title: '解法五步法同方程；在數軸表示注意空心與實心',
        points: [
          '<b>標準解題五步</b>：去分母 $\\to$ 去括號 $\\to$ 移項 $\\to$ 合併同類項 $\\to$ 係數化為 1（係數為負必變號）。',
          '<b>數軸表示法口訣</b>：大於向右畫，小於向左畫；有等號畫實心點，無等號畫空心圈。',
          '<b>正整數解問題</b>：解出不等式後，在解集範圍內篩選出自然數或正整數。'
        ],
        formula: { label: '一元一次不等式解法流程', tex: '\\frac{2x - 1}{3} - \\frac{x + 1}{2} \\ge 1 \\xrightarrow{\\times 6} 2(2x - 1) - 3(x + 1) \\ge 6 \\implies x \\ge 11' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="90" x2="400" y2="90" stroke="#334155" stroke-width="2.5"/>
            <polygon points="400,86 412,90 400,94" fill="#334155"/>
            <circle cx="200" cy="90" r="5" fill="#fff" stroke="#dc2626" stroke-width="3"/>
            <line x1="200" y1="90" x2="380" y2="90" stroke="#dc2626" stroke-width="4"/>
            <text x="200" y="125" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">a (空心圈：x > a)</text>

            <line x1="40" y1="180" x2="400" y2="180" stroke="#334155" stroke-width="2.5"/>
            <polygon points="400,176 412,180 400,184" fill="#334155"/>
            <circle cx="250" cy="180" r="6" fill="#059669"/>
            <line x1="60" y1="180" x2="250" y2="180" stroke="#059669" stroke-width="4"/>
            <text x="250" y="215" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">b (實心點：x ≤ b)</text>
          `);
        },
        caption: '數軸圖解規範：空心代表不包含端點，實心代表包含端點。',
        example: {
          q: '解不等式 $\\frac{x + 1}{2} - \\frac{2x - 1}{3} > 1$，並在數軸上表示解集。',
          steps: [
            '去分母（兩邊同乘 6）：$3(x + 1) - 2(2x - 1) > 6$。',
            '去括號：$3x + 3 - 4x + 2 > 6$。',
            '合併同類項：$-x + 5 > 6$。',
            '移項：$-x > 1$。',
            '係數化為 1（兩邊同除以 $-1$，改變不等號方向）：$x < -1$。'
          ],
          ans: '不等式的解集為 $x < -1$。在數軸上在 $-1$ 處畫空心圓圈並向左畫折線。'
        }
      },
      {
        sec: '11.3', secName: '一元一次不等式組',
        title: '不等式組解集口訣：同大取大，同小取小，大小小大中間找',
        points: [
          '<b>解集確定四口訣</b>：',
          '① <b>同大取大</b>：$\\begin{cases} x > a \\\\ x > b \\end{cases} (a > b) \\implies x > a$。',
          '② <b>同小取小</b>：$\\begin{cases} x < a \\\\ x < b \\end{cases} (a > b) \\implies x < b$。',
          '③ <b>大小小大中間找</b>：$\\begin{cases} x < a \\\\ x > b \\end{cases} (a > b) \\implies b < x < a$。',
          '④ <b>大大小小找不到</b>：$\\begin{cases} x > a \\\\ x < b \\end{cases} (a > b) \\implies$ 無解。'
        ],
        formula: { label: '不等式組口訣總結', tex: 'b < a \\implies \\begin{cases} x > a \\\\ x < b \\end{cases} \\implies \\text{無解} \\;;\\; \\begin{cases} x < a \\\\ x > b \\end{cases} \\implies b < x < a' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="30" y="25" width="180" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="120" y="55" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">同大取大</text>
            <text x="120" y="80" font-size="12" fill="#334155" text-anchor="middle">x > 3 且 x > 1</text>
            <text x="120" y="100" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">解集：x > 3</text>

            <rect x="230" y="25" width="180" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="320" y="55" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">同小取小</text>
            <text x="320" y="80" font-size="12" fill="#334155" text-anchor="middle">x < 3 且 x < 1</text>
            <text x="320" y="100" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">解集：x < 1</text>

            <rect x="30" y="130" width="180" height="95" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
            <text x="120" y="160" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">大小小大中間找</text>
            <text x="120" y="185" font-size="12" fill="#334155" text-anchor="middle">x < 3 且 x > 1</text>
            <text x="120" y="210" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">解集：1 < x < 3</text>

            <rect x="230" y="130" width="180" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="320" y="160" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">大大小小找不到</text>
            <text x="320" y="185" font-size="12" fill="#334155" text-anchor="middle">x > 3 且 x < 1</text>
            <text x="320" y="210" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">無解（空集 ∅）</text>
          `);
        },
        caption: '利用數軸找公共部分：兩條射線重疊的區間即為不等式組的解集。',
        example: {
          q: '解不等式組：$\\begin{cases} 2x + 5 \\ge x + 2 \\quad (1) \\\\ \\frac{x - 1}{2} < 1 \\quad (2) \\end{cases}$。',
          steps: [
            '解不等式 $(1)$：移項得 $2x - x \\ge 2 - 5 \\implies x \\ge -3$。',
            '解不等式 $(2)$：去分母得 $x - 1 < 2 \\implies x < 3$。',
            '由「大小小大中間找」，公共部分為 $-3 \\le x < 3$。'
          ],
          ans: '不等式組的解集為 $-3 \\le x < 3$。'
        }
      }
    ]
  });
})();