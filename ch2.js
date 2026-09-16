/* ============ 第 8 章　實數 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#059669';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 8,
    title: '實數',
    color: C,
    sections: [
      '8.1 平方根與算術平方根',
      '8.2 立方根',
      '8.3 實數的概念與運算'
    ],
    slides: [
      {
        sec: '8.1', secName: '平方根與算術平方根',
        title: '正數有兩個互為相反數的平方根；算術平方根具有雙重非負性',
        points: [
          '<b>算術平方根</b>：若 $x^2 = a\\;(x \\ge 0)$，則 $x$ 叫 $a$ 的算術平方根，記為 $\\sqrt{a}$。0 的算術平方根是 0。',
          '<b>平方根</b>：若 $x^2 = a$，則 $x$ 叫 $a$ 的平方根，記作 $\\pm\\sqrt{a}$。正數平方根有兩個互為相反數；0 的平方根為 0；負數沒有平方根。',
          '<b>雙重非負性</b>：在式子 $\\sqrt{a}$ 中，必有 $a \\ge 0$ 且 $\\sqrt{a} \\ge 0$。'
        ],
        formula: { label: '平方根核心公式', tex: '(\\sqrt{a})^2 = a \\; (a \\ge 0) \\;;\\; \\sqrt{a^2} = |a| = \\begin{cases} a & (a \\ge 0) \\\\ -a & (a < 0) \\end{cases}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="50" y="40" width="340" height="70" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
            <text x="220" y="70" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">雙重非負性：√a ≥ 0 且 被開方數 a ≥ 0</text>
            <text x="220" y="95" font-size="13" fill="#065f46" text-anchor="middle">經典考點：若 √(x - 3) + |y + 2| = 0，則 x = 3, y = -2</text>

            <rect x="50" y="130" width="160" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="130" y="160" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">(√a)² = a</text>
            <text x="130" y="195" font-size="12" fill="#64748b" text-anchor="middle">(前提 a ≥ 0)</text>

            <rect x="230" y="130" width="160" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="310" y="160" font-size="14" font-weight="bold" fill="#e11d48" text-anchor="middle">√(a²) = |a|</text>
            <text x="310" y="195" font-size="12" fill="#64748b" text-anchor="middle">開出來必為非負數</text>
          `);
        },
        caption: '若兩個非負數之和為 0，則每個非負數都等於 0。',
        example: {
          q: '已知 $\\sqrt{2x - 6} + (y + 1)^2 = 0$，求 $x + y$ 的平方根。',
          steps: [
            '因為 $\\sqrt{2x - 6} \\ge 0$ 且 $(y + 1)^2 \\ge 0$，而兩者之和為 0。',
            '所以必有 $2x - 6 = 0$ 且 $y + 1 = 0$，解得 $x = 3, y = -1$。',
            '計算待求數：$x + y = 3 + (-1) = 2$。',
            '2 的平方根為 $\\pm\\sqrt{2}$。'
          ],
          ans: '$x + y$ 的平方根為 $\\pm\\sqrt{2}$。'
        }
      },
      {
        sec: '8.2', secName: '立方根',
        title: '每個數都有且只有一個立方根，符號與被開方數一致',
        points: [
          '<b>立方根定義</b>：若 $x^3 = a$，則 $x$ 叫 $a$ 的立方根，記為 $\\sqrt[3]{a}$。',
          '<b>立方根性質</b>：正數的立方根是正數；負數的立方根是負數；0 的立方根是 0。',
          '<b>符號性質</b>：負號可直接提到根號外：$\\sqrt[3]{-a} = -\\sqrt[3]{a}$。'
        ],
        formula: { label: '立方根核心公式', tex: '(\\sqrt[3]{a})^3 = a \\;;\\; \\sqrt[3]{a^3} = a \\;;\\; \\sqrt[3]{-a} = -\\sqrt[3]{a}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="40" y="30" width="360" height="190" rx="10" fill="#f8fafc" stroke="#059669" stroke-width="1.5"/>
            <text x="220" y="65" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">平方根 vs 立方根 對比</text>
            <line x1="60" y1="85" x2="380" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="140" y="115" font-size="13" font-weight="bold" fill="#2563eb">平方根 ±√a</text>
            <text x="280" y="115" font-size="13" font-weight="bold" fill="#059669">立方根 ³√a</text>
            <text x="140" y="145" font-size="12" fill="#475569">被開方數 a ≥ 0</text>
            <text x="280" y="145" font-size="12" fill="#475569">被開方數可為任意實數</text>
            <text x="140" y="175" font-size="12" fill="#475569">正數有兩個根 (互為相反數)</text>
            <text x="280" y="175" font-size="12" fill="#475569">任何數僅有唯一一個根</text>
            <text x="140" y="205" font-size="12" fill="#e11d48">負數無實數平方根</text>
            <text x="280" y="205" font-size="12" fill="#059669">³√(-a) = -³√a</text>
          `);
        },
        caption: '立方根保持正負號不變，且定義域為全體實數。',
        example: {
          q: '求下列各數的值：(1) $\\sqrt[3]{-64}$；(2) 若 $\\sqrt[3]{1 - 2x} = -3$，求 $x$。',
          steps: [
            '(1) 因為 $(-4)^3 = -64$，所以 $\\sqrt[3]{-64} = -4$。',
            '(2) 兩邊同時立方得：$1 - 2x = (-3)^3 = -27$。',
            '移項得：$-2x = -28 \\implies x = 14$。'
          ],
          ans: '(1) $-4$；(2) $x = 14$。'
        }
      },
      {
        sec: '8.3', secName: '實數的概念與運算',
        title: '實數分為有理數與無理數；實數與數軸上的點一一對應',
        points: [
          '<b>無理數</b>：無限不循環小數，如 $\\pi$、開方開不盡的數（如 $\\sqrt{2}$、$\\sqrt{3}$）、規律無限小數（如 $0.101001...$）。',
          '<b>實數分類</b>：有理數與無理數統稱為實數。實數可按定義分為有理數和無理數，也可按正負分為正實數、0、負實數。',
          '<b>數軸對應</b>：實數與數軸上的點是<b>一一對應</b>的。'
        ],
        formula: { label: '實數相反數與絕對值', tex: '|a| = \\begin{cases} a & (a \\ge 0) \\\\ -a & (a < 0) \\end{cases} \\;;\\; \\sqrt{2} \\approx 1.414 \\;;\\; \\sqrt{3} \\approx 1.732' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="30" y1="130" x2="410" y2="130" stroke="#334155" stroke-width="2.5"/>
            <polygon points="410,126 422,130 410,134" fill="#334155"/>
            <circle cx="80" cy="130" r="4" fill="#334155"/><text x="80" y="155" font-size="13" text-anchor="middle">-1</text>
            <circle cx="160" cy="130" r="4" fill="#334155"/><text x="160" y="155" font-size="13" text-anchor="middle">0</text>
            <circle cx="240" cy="130" r="4" fill="#334155"/><text x="240" y="155" font-size="13" text-anchor="middle">1</text>
            <circle cx="320" cy="130" r="4" fill="#334155"/><text x="320" y="155" font-size="13" text-anchor="middle">2</text>

            <circle cx="273" cy="130" r="5" fill="#e11d48"/>
            <text x="273" y="110" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">√2 ≈ 1.414</text>
            <line x1="273" y1="115" x2="273" y2="125" stroke="#e11d48" stroke-width="1.5"/>

            <circle cx="298" cy="130" r="5" fill="#0284c7"/>
            <text x="310" y="90" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">√3 ≈ 1.732</text>
            <line x1="298" y1="95" x2="298" y2="125" stroke="#0284c7" stroke-width="1.5"/>
            <rect x="50" y="180" width="340" height="45" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.2"/>
            <text x="220" y="208" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">實數與數軸上的點是一一對應的（完備性）</text>
          `);
        },
        caption: '估算無理數的整數部分：因為 \\(1 < 2 < 4\\)，所以 \\(1 < \\sqrt{2} < 2\\)。',
        example: {
          q: '設 $\\sqrt{7}$ 的整數部分為 $a$，小數部分為 $b$，求 $a - b$ 的值。',
          steps: [
            '因為 $4 < 7 < 9$，所以 $\\sqrt{4} < \\sqrt{7} < \\sqrt{9}$，即 $2 < \\sqrt{7} < 3$。',
            '故 $\\sqrt{7}$ 的整數部分 $a = 2$。',
            '小數部分等於原數減去整數部分：$b = \\sqrt{7} - 2$。',
            '計算 $a - b = 2 - (\\sqrt{7} - 2) = 4 - \\sqrt{7}$。'
          ],
          ans: '$a - b = 4 - \\sqrt{7}$。'
        }
      }
    ]
  });
})();