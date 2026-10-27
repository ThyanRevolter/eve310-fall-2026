/* Lecture 17 pages. One script for all three: each section initialises only when its elements are on the page. */
(function () {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
  const fmt = (x, d) => (x === null || Number.isNaN(x)) ? 'n/a' : x.toFixed(d);
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const redraws = [];

  /* ---------- one-vs-all ---------- */
  function initOVR() {
    const PTS = [
      { c: 1, x: 2.2, y: 7.6 }, { c: 1, x: 3.4, y: 7.9 }, { c: 1, x: 2.8, y: 6.9 }, { c: 1, x: 3.8, y: 7.0 },
      { c: 2, x: 5.6, y: 4.2 }, { c: 2, x: 6.8, y: 4.3 }, { c: 2, x: 7.6, y: 3.8 }, { c: 2, x: 6.4, y: 3.0 },
      { c: 3, x: 1.4, y: 4.2 }, { c: 3, x: 1.6, y: 3.2 }, { c: 3, x: 2.4, y: 2.8 },
    ];
    // one logistic regression per class, fitted in scikit-learn on these points (C = 2)
    const MODELS = [
      { k: 1, name: 'triangles', w: [-0.2263, 1.6602], b: -8.6661, col: '--s1' },
      { k: 2, name: 'circles', w: [1.4826, -0.5319], b: -4.4534, col: '--s2' },
      { k: 3, name: 'squares', w: [-1.2394, -1.1166], b: 8.4484, col: '--s3' },
    ];
    const sig = (z) => 1 / (1 + Math.exp(-z));
    const z = (m, p) => m.w[0] * p.x + m.w[1] * p.y + m.b;
    const prob = (m, p) => sig(z(m, p));
    const num = (v, d) => v.toFixed(d).replace('-', '\u2212');
    const term = (v, s) => (v < 0 ? ' \u2212 ' : ' + ') + Math.abs(v).toFixed(2) + s;
    const formula = (m) => `\u03c3(${num(m.w[0], 2)}\u00b7x\u2081${term(m.w[1], '\u00b7x\u2082')}${term(m.b, '')})`;
    let newPt = { x: 3.0, y: 6.0 };
    const ovr = $('#ovr');
    function marker(parent, cls, cx, cy, col, filled) {
      const fill = filled ? col : 'transparent';
      if (cls === 1) el('polygon', { points: `${cx},${cy - 7} ${cx - 7},${cy + 6} ${cx + 7},${cy + 6}`, fill, stroke: col, 'stroke-width': 2 }, parent);
      else if (cls === 2) el('circle', { cx, cy, r: 6.5, fill, stroke: col, 'stroke-width': 2 }, parent);
      else el('rect', { x: cx - 6, y: cy - 6, width: 12, height: 12, fill, stroke: col, 'stroke-width': 2 }, parent);
    }
    function draw() {
      ovr.textContent = '';
      const W = 230, H = 230, L = 26, R = 10, T = 10, B = 26;
      const sx = (v) => L + v / 9 * (W - L - R), sy = (v) => T + (1 - v / 9) * (H - T - B);
      const frame = (label) => { // one panel: a figure holding an svg with the axis box and axis labels
        const fig = document.createElement('figure'); ovr.appendChild(fig);
        const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': label }, fig);
        el('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: 'none', class: 'axis' }, svg);
        const xl = el('text', { x: W - R, y: H - 6, 'text-anchor': 'end', class: 'mut' }, svg); xl.textContent = 'x₁';
        const yl = el('text', { x: 8, y: T + 10, class: 'mut' }, svg); yl.textContent = 'x₂';
        return { fig, svg };
      };
      const placeNew = (svg) => { // the X marking the new point; a click anywhere in the panel moves it
        const g = el('g', {}, svg);
        const nx = sx(newPt.x), ny = sy(newPt.y), cross = `M${nx - 7},${ny - 7}L${nx + 7},${ny + 7}M${nx - 7},${ny + 7}L${nx + 7},${ny - 7}`;
        el('path', { d: cross, stroke: css('--surface'), 'stroke-width': 7, 'stroke-linecap': 'round', fill: 'none' }, g);
        el('path', { d: cross, stroke: css('--accent'), 'stroke-width': 3.5, 'stroke-linecap': 'round', fill: 'none' }, g);
        const lab = el('text', { x: nx + 12, y: ny + 4, 'font-size': 11, 'font-weight': 600 }, g); lab.textContent = 'new x';
        svg.addEventListener('click', (e) => {
          const r = svg.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width * W, py = (e.clientY - r.top) / r.height * H;
          newPt = { x: Math.min(9, Math.max(0, (px - L) / (W - L - R) * 9)), y: Math.min(9, Math.max(0, (1 - (py - T) / (H - T - B)) * 9)) };
          draw();
        });
      };
      const caption = (fig, text, mono) => {
        const cap = document.createElement('figcaption'); cap.textContent = text;
        const fx = document.createElement('span'); fx.className = 'mono'; fx.textContent = mono; cap.append(document.createElement('br'), fx); fig.appendChild(cap);
      };
      MODELS.forEach((m) => {
        const { fig, svg } = frame(`model ${m.k}: ${m.name} versus everything else`);
        const clipId = 'clip' + m.k; const clip = el('clipPath', { id: clipId }, svg); el('rect', { x: L, y: T, width: W - L - R, height: H - T - B }, clip);
        const yAt = (x) => -(m.w[0] * x + m.b) / m.w[1];
        el('line', { x1: sx(-2), y1: sy(yAt(-2)), x2: sx(11), y2: sy(yAt(11)), stroke: css(m.col), 'stroke-width': 2, 'clip-path': `url(#${clipId})` }, svg);
        PTS.forEach((p) => marker(svg, p.c, sx(p.x), sy(p.y), p.c === m.k ? css(m.col) : css('--muted'), p.c === m.k));
        placeNew(svg);
        caption(fig, `Model ${m.k}: ${m.name} vs. everything else`, 'P = ' + formula(m));
      });
      // fourth panel: the plane shaded by the model with the largest P; each border is a tie between two models
      const { fig: fig4, svg: svg4 } = frame('all three models together: each region is the class with the largest probability');
      const keep = (poly, f) => { // the part of a convex polygon where f >= 0
        const out = [];
        poly.forEach((a, i) => { const b = poly[(i + 1) % poly.length]; const fa = f(a), fb = f(b);
          if (fa >= 0) out.push(a);
          if ((fa >= 0) !== (fb >= 0)) { const t = fa / (fa - fb); out.push({ x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) }); } });
        return out;
      };
      const box = [{ x: 0, y: 0 }, { x: 9, y: 0 }, { x: 9, y: 9 }, { x: 0, y: 9 }];
      MODELS.forEach((m) => {
        const region = MODELS.filter((o) => o !== m).reduce((poly, o) => keep(poly, (p) => z(m, p) - z(o, p)), box);
        if (region.length < 3) return;
        el('polygon', { points: region.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' '), fill: css(m.col), 'fill-opacity': .18 }, svg4);
        region.forEach((a, i) => { const b = region[(i + 1) % region.length]; // region edges that are not box edges are the ties
          const onBox = (a.x === b.x && (a.x === 0 || a.x === 9)) || (a.y === b.y && (a.y === 0 || a.y === 9));
          if (!onBox) el('line', { x1: sx(a.x), y1: sy(a.y), x2: sx(b.x), y2: sy(b.y), stroke: css('--fg'), 'stroke-opacity': .5, 'stroke-width': 1.5 }, svg4);
        });
      });
      PTS.forEach((p) => marker(svg4, p.c, sx(p.x), sy(p.y), css(MODELS[p.c - 1].col), true));
      const [m1, m2, m3] = MODELS; // the tie point, where z1 = z2 = z3
      const a1 = m1.w[0] - m2.w[0], b1 = m1.w[1] - m2.w[1], c1 = m2.b - m1.b, a2 = m1.w[0] - m3.w[0], b2 = m1.w[1] - m3.w[1], c2 = m3.b - m1.b, det = a1 * b2 - a2 * b1;
      const tie = Math.abs(det) > 1e-9 ? { x: (c1 * b2 - c2 * b1) / det, y: (a1 * c2 - a2 * c1) / det } : null;
      let tieText = 'no single tie point';
      if (tie && tie.x >= 0 && tie.x <= 9 && tie.y >= 0 && tie.y <= 9) {
        el('circle', { cx: sx(tie.x), cy: sy(tie.y), r: 4.5, fill: css('--surface'), stroke: css('--fg'), 'stroke-width': 2 }, svg4);
        const tl = el('text', { x: sx(tie.x) - 8, y: sy(tie.y) - 7, 'text-anchor': 'end', 'font-size': 11, 'font-weight': 600 }, svg4); tl.textContent = 'tie';
        tieText = `tie at x₁ = ${tie.x.toFixed(1)}, x₂ = ${tie.y.toFixed(1)}, every P = ${prob(m1, tie).toFixed(2)}`;
      }
      placeNew(svg4);
      caption(fig4, 'All three: largest P wins', tieText);
      const bars = $('#ovr-bars'); bars.textContent = '';
      const ps = MODELS.map((m) => ({ m, p: prob(m, newPt) })); const best = ps.reduce((a, b) => (b.p > a.p ? b : a));
      ps.forEach(({ m, p }) => {
        const n = document.createElement('div'); n.textContent = `P(${m.name}) =`; n.className = best.m === m ? 'win' : ''; bars.appendChild(n);
        const zc = document.createElement('div'); zc.className = 'pz' + (best.m === m ? ' win' : ''); zc.textContent = `\u03c3(${num(z(m, newPt), 2)})`; bars.appendChild(zc);
        const tr = document.createElement('div'); tr.className = 'track'; const f = document.createElement('div'); f.className = 'fill'; f.style.width = (p * 100).toFixed(1) + '%'; f.style.background = css(m.col); tr.appendChild(f); bars.appendChild(tr);
        const v = document.createElement('div'); v.className = 'pv' + (best.m === m ? ' win' : ''); v.textContent = p.toFixed(2); bars.appendChild(v);
      });
      $('#ovr-verdict').textContent = `x\u2081 = ${newPt.x.toFixed(1)}, x\u2082 = ${newPt.y.toFixed(1)}: model ${best.m.k} wins, so this is a ${best.m.name.slice(0, -1)}. The three probabilities add up to ${ps.reduce((s, q) => s + q.p, 0).toFixed(2)}, not 1.`;
    }
    draw();
    return draw;
  }

  /* ---------- metrics per class ---------- */
  function initPerClass() {
    const CLASSES = ['Apple', 'Orange', 'Mango'];
    const MAT = [[7, 1, 3], [8, 2, 2], [9, 3, 1]];
    let focus = 0;
    const cm3 = $('#cm3');
    const corner = document.createElement('div'); corner.className = 'hdr'; corner.textContent = 'true ↓  predicted →'; cm3.appendChild(corner);
    CLASSES.forEach((c) => { const h = document.createElement('div'); h.className = 'hdr'; h.textContent = c; cm3.appendChild(h); });
    MAT.forEach((row, i) => {
      const rh = document.createElement('div'); rh.className = 'rh'; rh.textContent = CLASSES[i]; cm3.appendChild(rh);
      row.forEach((v, j) => { const inp = document.createElement('input'); inp.type = 'number'; inp.min = 0; inp.step = 1; inp.value = v; inp.id = `m${i}${j}`; inp.setAttribute('aria-label', `true ${CLASSES[i]}, predicted ${CLASSES[j]}`);
        inp.addEventListener('input', () => { MAT[i][j] = Math.max(0, parseInt(inp.value, 10) || 0); update(); }); cm3.appendChild(inp); });
    });
    const perClass = (k) => {
      const N = MAT.flat().reduce((a, b) => a + b, 0); const tp = MAT[k][k];
      const fp = MAT.reduce((s, row, i) => s + (i === k ? 0 : row[k]), 0); const fn = MAT[k].reduce((s, v, j) => s + (j === k ? 0 : v), 0); const tn = N - tp - fp - fn;
      return { N, tp, fp, fn, tn, acc: N ? (tp + tn) / N : null, prec: tp + fp ? tp / (tp + fp) : null, rec: tp + fn ? tp / (tp + fn) : null };
    };
    function update() {
      MAT.forEach((row, i) => row.forEach((v, j) => { document.getElementById(`m${i}${j}`).className = i === focus && j === focus ? 'tp' : j === focus ? 'fp' : i === focus ? 'fn' : 'tn'; }));
      document.querySelectorAll('#cls-buttons button').forEach((b, i) => b.setAttribute('aria-pressed', String(i === focus)));
      const c = perClass(focus); const tiles = $('#cls-tiles'); tiles.textContent = '';
      [['TP', c.tp], ['FP', c.fp], ['FN', c.fn], ['TN', c.tn]].forEach(([l, v]) => { const t = document.createElement('div'); t.className = 'tile'; const a = document.createElement('div'); a.className = 'l'; a.textContent = `${l} for ${CLASSES[focus]}`; const b = document.createElement('div'); b.className = 'v'; b.textContent = v; t.append(a, b); tiles.appendChild(t); });
      $('#cls-formulas').textContent = `Accuracy = (${c.tp} + ${c.tn}) / ${c.N} = ${fmt(c.acc, 3)}.  Precision = ${c.tp} / (${c.tp} + ${c.fp}) = ${fmt(c.prec, 3)}.  Recall = ${c.tp} / (${c.tp} + ${c.fn}) = ${fmt(c.rec, 3)}.`;
      const tb3 = $('#cls-table tbody'); tb3.textContent = ''; let sp = 0, sr = 0, np = 0, nr = 0;
      CLASSES.forEach((name, k) => { const r = perClass(k); const tr = document.createElement('tr'); if (k === focus) tr.style.fontWeight = '600';
        [name, r.tp, r.fp, r.fn, r.tn, fmt(r.acc, 2), fmt(r.prec, 2), fmt(r.rec, 2)].forEach((v) => { const td = document.createElement('td'); td.textContent = v; tr.appendChild(td); }); tb3.appendChild(tr);
        if (r.prec !== null) { sp += r.prec; np++; } if (r.rec !== null) { sr += r.rec; nr++; } });
      const N = MAT.flat().reduce((a, b) => a + b, 0); const diag = MAT.reduce((s, row, i) => s + row[i], 0);
      $('#cls-overall').textContent = `Overall accuracy = diagonal / total = ${diag} / ${N} = ${N ? (diag / N).toFixed(2) : 'n/a'}. Macro-averaged precision ${np ? (sp / np).toFixed(2) : 'n/a'}, recall ${nr ? (sr / nr).toFixed(2) : 'n/a'}.`;
    }
    const cb = $('#cls-buttons'); CLASSES.forEach((c, i) => { const b = document.createElement('button'); b.textContent = c + ' vs. all'; b.addEventListener('click', () => { focus = i; update(); }); cb.appendChild(b); });
    update();
    return update;
  }

  /* ---------- clustering ---------- */
  function initClustering() {
    const CL = [
      { g: 0, x: 1.5, y: 7.2 }, { g: 0, x: 2.6, y: 7.4 }, { g: 0, x: 3.3, y: 6.9 }, { g: 0, x: 2.2, y: 6.3 },
      { g: 1, x: 5.4, y: 4.6 }, { g: 1, x: 6.6, y: 4.8 }, { g: 1, x: 7.4, y: 4.3 }, { g: 1, x: 6.0, y: 3.6 },
    ];
    const TEXT = {
      sup: 'Supervised: every row has a label. The model learns a boundary between the two groups, and the confusion matrix scores it.',
      unsup: 'Unsupervised: same rows, label column deleted. Nothing to fit a boundary to, nothing to score against. Only the shape of the data is left.',
      groups: 'Clustering: these four are close to each other and far from those four. Two groups, found without any label.',
    };
    let mode = 'sup';
    const clus = $('#clus');
    function draw() {
      clus.textContent = '';
      const W = 320, H = 280, L = 26, R = 10, T = 10, B = 26;
      const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': 'Eight observations in two features' }, clus);
      const sx = (v) => L + v / 9 * (W - L - R), sy = (v) => T + (1 - v / 9) * (H - T - B);
      el('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: 'none', class: 'axis' }, svg);
      const xl = el('text', { x: W - R, y: H - 6, 'text-anchor': 'end', class: 'mut' }, svg); xl.textContent = 'x1';
      const yl = el('text', { x: 8, y: T + 10, class: 'mut' }, svg); yl.textContent = 'x2';
      if (mode === 'groups') [[2.4, 7.0, 1.6, 1.0], [6.35, 4.1, 1.6, 1.0]].forEach(([cx, cy, rx, ry]) => el('ellipse', { cx: sx(cx), cy: sy(cy), rx: rx / 9 * (W - L - R), ry: ry / 9 * (H - T - B), fill: css('--accent'), 'fill-opacity': .12, stroke: css('--accent'), 'stroke-width': 2 }, svg));
      CL.forEach((p) => { const col = mode === 'sup' ? css(p.g ? '--s2' : '--s1') : css('--muted'); const filled = mode !== 'sup' || p.g === 1; el('circle', { cx: sx(p.x), cy: sy(p.y), r: 7, fill: filled ? col : css('--surface'), stroke: col, 'stroke-width': 2.5 }, svg); });
      if (mode === 'sup') { const a = el('text', { x: sx(1.2), y: sy(8.4), 'font-size': 12 }, svg); a.textContent = 'label = 0'; const b = el('text', { x: sx(5.6), y: sy(2.6), 'font-size': 12 }, svg); b.textContent = 'label = 1'; }
      $('#clus-text').textContent = TEXT[mode];
      [['b-sup', 'sup'], ['b-unsup', 'unsup'], ['b-groups', 'groups']].forEach(([id, m]) => $('#' + id).setAttribute('aria-pressed', String(m === mode)));
    }
    [['b-sup', 'sup'], ['b-unsup', 'unsup'], ['b-groups', 'groups']].forEach(([id, m]) => $('#' + id).addEventListener('click', () => { mode = m; draw(); }));
    draw();
    return draw;
  }

  if ($('#ovr')) redraws.push(initOVR());
  if ($('#cm3')) redraws.push(initPerClass());
  if ($('#clus')) redraws.push(initClustering());
  const redrawAll = () => redraws.forEach((f) => f());
  if (window.matchMedia) window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', redrawAll);
  new MutationObserver(redrawAll).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();
