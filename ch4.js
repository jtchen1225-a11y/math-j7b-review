/* ============ 第 10 章　二元一次方程組 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#d97706';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 10,
    title: '二元一次方程組',
    color: C,
    sections: [
      '10.1 二元一次方程組的概念',
      '10.2 代入消元與加減消元法',
      '10.3 實際問題與二元一次方程組',
      '10.4 三元一次方程組的解法'
    ],
    slides: [
      {
        sec: '10.1', secName: '二元一次方程組的概念',
        title: '含有兩個未知數且未知數項次數為 1 的方程組及其公共解',
        points: [
          '<b>二元一次方程</b>：含有兩個未知數，且含有未知數的項的次數都是 1 的整式方程。一般形式為 $ax + by = c\\;(a \\neq 0, b \\neq 0)$。',
          '<b>方程組的解</b>：二元一次方程組中兩個方程的<b>公共解</b>，叫做二元一次方程組的解，通常記為 $\\begin{cases} x = x_0 \\\\ y = y_0 \\end{cases}$。',
          '<b>解的檢驗</b>：將一對數值代入每個方程，必須使每個方程左右兩邊都成立。'
        ],
        formula: { label: '二元一次方程組一般形式', tex: '\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\;;\\; (a_1 b_2 - a_2 b_1 \\neq 0 \\implies \\text{唯一解})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="50" y1="200" x2="380" y2="60" stroke="#0284c7" stroke-width="2.5"/>
            <text x="385" y="65" font-size="13" font-weight="bold" fill="#0284c7">L1: x + y = 5</text>

            <line x1="60" y1="60" x2="360" y2="200" stroke="#e11d48" stroke-width="2.5"/>
            <text x="365" y="205" font-size="13" font-weight="bold" fill="#e11d48">L2: x - y = 1</text>

            <circle cx="210" cy="130" r="6" fill="#d97706"/>
            <text x="210" y="110" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">交點 (3, 2)</text>
            <rect x="70" y="210" width="300" height="32" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
            <text x="220" y="231" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">方程組的解 ⟺ 兩直線在平面上的交點坐標</text>
          `);
        },
        caption: '數形結合：二元一次方程組的解對應兩條直線的交點坐標。',
        example: {
          q: '已知 $\\begin{cases} x = 2 \\\\ y = 1 \\end{cases}$ 是方程組 $\\begin{cases} ax + by = 7 \\\\ ax - by = 1 \\end{cases}$ 的解，求 $a, b$ 的值。',
          steps: [
            '將 $x = 2, y = 1$ 代入方程組得：$\\begin{cases} 2a + b = 7 \\quad (1) \\\\ 2a - b = 1 \\quad (2) \\end{cases}$。',
            '$(1) + (2)$ 消去 $b$ 得：$4a = 8 \\implies a = 2$。',
            '將 $a = 2$ 代入 $(1)$ 得：$2(2) + b = 7 \\implies b = 3$。'
          ],
          ans: '$a = 2, b = 3$。'
        }
      },
      {
        sec: '10.2', secName: '代入消元與加減消元法',
        title: '核心思想「消元」：將二元轉化為一元一次方程',
        points: [
          '<b>代入消元法</b>：選取一個係數較簡單的未知數（係數為 $\\pm 1$），用含另一個未知數的代數式表示，再代入另一個方程。',
          '<b>加減消元法</b>：當某未知數的係數相等或互為相反數時，兩式相減或相加直接消去該未知數。',
          '<b>係數通分技巧</b>：若係數不相等，乘以適當數使其絕對值變為最小公倍數後加減。'
        ],
        formula: { label: '消元轉化思想', tex: '\\text{二元一次方程組} \\xrightarrow{\\text{代入 / 加減消元}} \\text{一元一次方程} \\xrightarrow{\\text{求解}} \\text{回代得全解}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="40" y="30" width="160" height="180" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
            <text x="120" y="60" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">代入消元法</text>
            <text x="60" y="95" font-size="12" fill="#475569">① 變形：y = ax + b</text>
            <text x="60" y="125" font-size="12" fill="#475569">② 代入另一式消 y</text>
            <text x="60" y="155" font-size="12" fill="#475569">③ 解出一元 x</text>
            <text x="60" y="185" font-size="12" fill="#475569">④ 回代求 y</text>

            <rect x="240" y="30" width="160" height="180" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
            <text x="320" y="60" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">加減消元法</text>
            <text x="260" y="95" font-size="12" fill="#475569">① 觀察相同/相反係數</text>
            <text x="260" y="125" font-size="12" fill="#475569">② 兩邊同乘公倍數</text>
            <text x="260" y="155" font-size="12" fill="#475569">③ 兩式相加或相減</text>
            <text x="260" y="185" font-size="12" fill="#475569">④ 解一元後回代</text>
          `);
        },
        caption: '消元本質是「降維」：將多元問題轉化為已知的一元一次方程。',
        example: {
          q: '解方程組：$\\begin{cases} 3x + 2y = 13 \\quad (1) \\\\ 2x - 3y = 0 \\quad (2) \\end{cases}$。',
          steps: [
            '採用加減法：$(1) \\times 3 + (2) \\times 2$ 消去 $y$：',
            '$3(3x + 2y) + 2(2x - 3y) = 3(13) + 2(0)$',
            '$9x + 6y + 4x - 6y = 39 \\implies 13x = 39 \\implies x = 3$。',
            '將 $x = 3$ 代入 $(2)$：$2(3) - 3y = 0 \\implies 3y = 6 \\implies y = 2$。'
          ],
          ans: '方程組的解為 $\\begin{cases} x = 3 \\\\ y = 2 \\end{cases}$。'
        }
      },
      {
        sec: '10.3', secName: '實際問題與二元一次方程組',
        title: '審設列解驗答；找準兩個獨立等量關係是列方程組關鍵',
        points: [
          '<b>審題抓雙核心</b>：設兩個未知數 $x, y$，必須在題幹中找到兩個相互獨立的等量關係。',
          '<b>經典模型</b>：雞兔同籠（頭數與腳數）、行程問題（相遇與追及）、配套工程（比例關係）、銷售利潤（進價與售價）。',
          '<b>檢驗合題意</b>：所得解不僅要符合方程組，還要符合實際生活背景（如人數、件數為正整數）。'
        ],
        formula: { label: '配套問題與行程等量關係', tex: '\\text{相遇: } (v_1 + v_2) t = s \\;;\\; \\text{追及: } (v_1 - v_2) t = s \\;;\\; \\text{配套: } \\frac{x}{\\text{產品1所需}} = \\frac{y}{\\text{產品2所需}}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="50" y="30" width="340" height="50" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
            <text x="220" y="60" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">經典建模：雞兔同籠模型</text>

            <rect x="50" y="95" width="160" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
            <text x="130" y="130" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">頭的等量關係</text>
            <text x="130" y="160" font-size="13" fill="#78350f" text-anchor="middle">x + y = 總頭數</text>

            <rect x="230" y="95" width="160" height="90" rx="8" fill="#ecfeff" stroke="#0284c7" stroke-width="1.2"/>
            <text x="310" y="130" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">腳的等量關係</text>
            <text x="310" y="160" font-size="13" fill="#075985" text-anchor="middle">2x + 4y = 總腳數</text>
          `);
        },
        caption: '列二元一次方程組解應用題步驟：審、設、列、解、驗、答。',
        example: {
          q: '籠子裡有雞和兔共 35 隻，共有腳 94 隻。問雞和兔各有多少隻？',
          steps: [
            '設雞有 $x$ 隻，兔有 $y$ 隻。',
            '等量關係 1（頭數）：$x + y = 35$。',
            '等量關係 2（腳數）：$2x + 4y = 94$。',
            '解方程組：由第一式得 $x = 35 - y$，代入第二式：$2(35 - y) + 4y = 94$。',
            '$70 - 2y + 4y = 94 \\implies 2y = 24 \\implies y = 12$。',
            '回代求 $x$：$x = 35 - 12 = 23$。'
          ],
          ans: '雞有 23 隻，兔有 12 隻。'
        }
      },
      {
        sec: '10.4', secName: '三元一次方程組的解法',
        title: '三元化二元，二元化一元；逐步消元轉化思想',
        points: [
          '<b>三元一次方程組</b>：含有三個相同的未知數，每個方程中含未知數的項的次數都是 1 的方程組。',
          '<b>消元路徑</b>：先選定一個未知數（觀察哪個未知數係數最好消），利用兩兩配對消去該未知數，轉化為關於另兩個未知數的二元一次方程組。',
          '<b>經典題型</b>：求二次函數解析式 $y = ax^2 + bx + c$ 中的三個參數 $a, b, c$。'
        ],
        formula: { label: '三元消元路線圖', tex: '\\text{三元一次方程組} \\xrightarrow{\\text{消去一個未知數}} \\text{二元一次方程組} \\xrightarrow{\\text{再消元}} \\text{一元一次方程}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="90" cy="125" r="50" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
            <text x="90" y="125" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">三元 (x,y,z)</text>
            <text x="90" y="145" font-size="11" fill="#78350f" text-anchor="middle">3 個方程</text>

            <line x1="145" y1="125" x2="205" y2="125" stroke="#64748b" stroke-width="2"/>
            <polygon points="205,121 215,125 205,129" fill="#64748b"/>
            <text x="175" y="115" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">消去 z</text>

            <circle cx="270" cy="125" r="45" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
            <text x="270" y="125" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">二元 (x,y)</text>
            <text x="270" y="145" font-size="11" fill="#065f46" text-anchor="middle">2 個方程</text>

            <line x1="320" y1="125" x2="370" y2="125" stroke="#64748b" stroke-width="2"/>
            <polygon points="370,121 380,125 370,129" fill="#64748b"/>
            <text x="345" y="115" font-size="11" font-weight="bold" fill="#64748b" text-anchor="middle">消 y</text>

            <circle cx="405" cy="125" r="25" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
            <text x="405" y="130" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">一元 x</text>
          `);
        },
        caption: '階梯消元法：三元變二元、二元變一元，逐步回代求解。',
        example: {
          q: '解三元一次方程組：$\\begin{cases} x + y + z = 6 \\quad (1) \\\\ 2x - y + z = 3 \\quad (2) \\\\ x + 2y - z = 2 \\quad (3) \\end{cases}$。',
          steps: [
            '觀察方程，未知數 $z$ 的係數為 $\\pm 1$，優先消去 $z$。',
            '$(1) + (3)$ 消去 $z$ 得：$2x + 3y = 8 \\quad (4)$。',
            '$(2) + (3)$ 消去 $z$ 得：$3x + y = 5 \\implies y = 5 - 3x \\quad (5)$。',
            '將 $(5)$ 代入 $(4)$：$2x + 3(5 - 3x) = 8 \\implies 2x + 15 - 9x = 8 \\implies -7x = -7 \\implies x = 1$。',
            '求 $y$：$y = 5 - 3(1) = 2$。',
            '將 $x = 1, y = 2$ 代入 $(1)$：$1 + 2 + z = 6 \\implies z = 3$。'
          ],
          ans: '方程組的解為 $\\begin{cases} x = 1 \\\\ y = 2 \\\\ z = 3 \\end{cases}$。'
        }
      }
    ]
  });
})();