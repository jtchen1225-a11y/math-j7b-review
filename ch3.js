/* ============ 第 9 章　平面直角坐標系 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#7c3aed';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 9,
    title: '平面直角坐標系',
    color: C,
    sections: [
      '9.1 用坐標描述平面內點的位置',
      '9.2 坐標方法的簡單應用與平移'
    ],
    slides: [
      {
        sec: '9.1', secName: '用坐標描述平面內點的位置',
        title: '象限符號特徵；點到兩坐標軸的距離與點坐標的絕對值關係',
        points: [
          '<b>各象限符號</b>：第一象限 $(+, +)$、第二象限 $(-, +)$、第三象限 $(-, -)$、第四象限 $(+, -)$。',
          '<b>坐標軸上的點</b>：$x$ 軸上的點縱坐標為 0，即 $(x, 0)$；$y$ 軸上的點橫坐標為 0，即 $(0, y)$。',
          '<b>點到坐標軸距離</b>：點 $P(x, y)$ 到 $x$ 軸的距離為 $|y|$；到 $y$ 軸的距離為 $|x|$。'
        ],
        formula: { label: '距離與角平分線坐標特徵', tex: 'd(P, x\\text{軸}) = |y| \\;;\\; d(P, y\\text{軸}) = |x| \\;;\\; \\text{一三象限角平分線: } y = x' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="125" x2="400" y2="125" stroke="#334155" stroke-width="2"/>
            <polygon points="400,121 412,125 400,129" fill="#334155"/>
            <text x="405" y="145" font-size="13" font-weight="bold" fill="#334155">x</text>

            <line x1="220" y1="230" x2="220" y2="20" stroke="#334155" stroke-width="2"/>
            <polygon points="216,20 220,8 224,20" fill="#334155"/>
            <text x="235" y="22" font-size="13" font-weight="bold" fill="#334155">y</text>
            <text x="205" y="142" font-size="13" font-weight="bold" fill="#64748b">O</text>

            <rect x="250" y="40" width="130" height="65" rx="6" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.2"/>
            <text x="315" y="65" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">第一象限 (+, +)</text>
            <text x="315" y="90" font-size="11" fill="#6d28d9" text-anchor="middle">x > 0, y > 0</text>

            <rect x="60" y="40" width="130" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <text x="125" y="65" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">第二象限 (-, +)</text>
            <text x="125" y="90" font-size="11" fill="#64748b" text-anchor="middle">x < 0, y > 0</text>

            <rect x="60" y="145" width="130" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <text x="125" y="170" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">第三象限 (-, -)</text>
            <text x="125" y="195" font-size="11" fill="#64748b" text-anchor="middle">x < 0, y < 0</text>

            <rect x="250" y="145" width="130" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <text x="315" y="170" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">第四象限 (+, -)</text>
            <text x="315" y="195" font-size="11" fill="#64748b" text-anchor="middle">x > 0, y < 0</text>
          `);
        },
        caption: '對稱規律：關於 x 軸對稱 (x, -y)；關於 y 軸對稱 (-x, y)；關於原點對稱 (-x, -y)。',
        example: {
          q: '點 $P(2m - 4, m + 1)$ 在第二象限，且到 $y$ 軸的距離為 2，求點 $P$ 的坐標。',
          steps: [
            '因為點 $P$ 在第二象限，所以橫坐標 $2m - 4 < 0$，縱坐標 $m + 1 > 0$。',
            '點 $P$ 到 $y$ 軸的距離為 $|2m - 4| = -(2m - 4) = 4 - 2m$。',
            '由題意 $4 - 2m = 2 \\implies 2m = 2 \\implies m = 1$。',
            '將 $m = 1$ 代入：橫坐標 $2(1) - 4 = -2$，縱坐標 $1 + 1 = 2$。',
            '檢驗 $(-2, 2)$ 確實位於第二象限。'
          ],
          ans: '點 $P$ 的坐標為 $(-2, 2)$。'
        }
      },
      {
        sec: '9.2', secName: '坐標方法的簡單應用與平移',
        title: '點的平移口訣：左減右加橫坐標，上加下減縱坐標',
        points: [
          '<b>平移變換法則</b>：向右平移 $a$ 個單位 $(x + a, y)$；向左平移 $a$ 個單位 $(x - a, y)$；向上平移 $b$ 個單位 $(x, y + b)$；向下平移 $b$ 個單位 $(x, y - b)$。',
          '<b>圖形平移</b>：圖形上所有點均按照相同的規則變換，對應頂點平移即代表整個圖形平移。',
          '<b>方位角與距離</b>：利用極坐標思想（方向角 + 距離）確定平面上物體的位置。'
        ],
        formula: { label: '坐標平移變換規律', tex: '(x, y) \\xrightarrow{\\text{右 } a \\text{, 上 } b} (x + a, y + b) \\;;\\; (x, y) \\xrightarrow{\\text{左 } a \\text{, 下 } b} (x - a, y - b)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="190" x2="400" y2="190" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="400,186 412,190 400,194" fill="#94a3b8"/>
            <line x1="80" y1="230" x2="80" y2="30" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="76,30 80,18 84,30" fill="#94a3b8"/>

            <circle cx="150" cy="140" r="5" fill="#7c3aed"/>
            <text x="150" y="165" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">A(x, y)</text>

            <line x1="150" y1="140" x2="310" y2="140" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="230" y="130" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">向右平移 a</text>

            <line x1="310" y1="140" x2="310" y2="60" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="350" y="100" font-size="12" font-weight="bold" fill="#e11d48">向上平移 b</text>

            <circle cx="310" cy="60" r="5" fill="#e11d48"/>
            <text x="310" y="45" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">A'(x + a, y + b)</text>
          `);
        },
        caption: '平面直角坐標系中平移只改變坐標數值，圖形大小與形狀完全保持不變。',
        example: {
          q: '將點 $A(-3, 2)$ 先向右平移 5 個單位，再向下平移 4 個單位得到點 $B$，求點 $B$ 的坐標。',
          steps: [
            '橫坐標向右平移 5 個單位：$x\' = -3 + 5 = 2$。',
            '縱坐標向下平移 4 個單位：$y\' = 2 - 4 = -2$。',
            '所以平移後得到的點 $B$ 的坐標為 $(2, -2)$。'
          ],
          ans: '點 $B$ 的坐標為 $(2, -2)$（位於第四象限）。'
        }
      }
    ]
  });
})();