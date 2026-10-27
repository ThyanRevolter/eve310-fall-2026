/* Lecture 17 companion pages. One script for all pages: each section initialises only when its elements are on the page. */
(function () {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
  const fmt = (x, d) => (x === null || Number.isNaN(x)) ? 'n/a' : x.toFixed(d);
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const tip = document.createElement('div'); tip.className = 'tooltip'; tip.hidden = true; document.body.appendChild(tip);
  const showTip = (x, y, text) => { tip.textContent = text; tip.style.left = x + 'px'; tip.style.top = y + 'px'; tip.hidden = false; };
  const hideTip = () => { tip.hidden = true; };
  const redraws = [];

  /* ---------- threshold bench: the ten Lab 8 wells ---------- */
  function initThreshold() {
    const WELLS = [
      { d: 2, y: 0, p: 0.087 }, { d: 5, y: 0, p: 0.158 }, { d: 11, y: 1, p: 0.42 }, { d: 13, y: 1, p: 0.532 }, { d: 6, y: 0, p: 0.191 },
      { d: 3, y: 0, p: 0.107 }, { d: 16, y: 0, p: 0.690 }, { d: 5, y: 1, p: 0.159 }, { d: 18, y: 1, p: 0.777 }, { d: 11, y: 1, p: 0.42 },
    ];
    const counts = (thr) => {
      let tp = 0, fp = 0, fn = 0, tn = 0;
      for (const w of WELLS) { const f = w.p > thr; if (w.y === 1 && f) tp++; else if (w.y === 0 && f) fp++; else if (w.y === 1 && !f) fn++; else tn++; }
      const prec = tp + fp ? tp / (tp + fp) : null, rec = tp / (tp + fn), acc = (tp + tn) / WELLS.length, fpr = fp / (fp + tn);
      const f1 = prec === null || prec + rec === 0 ? null : 2 * prec * rec / (prec + rec);
      return { tp, fp, fn, tn, prec, rec, acc, fpr, f1 };
    };
    const outcome = (w, thr) => { const f = w.p > thr; return w.y === 1 ? (f ? 'TP' : 'FN') : (f ? 'FP' : 'TN'); };
    const OUT_COLOR = { TP: '--good', TN: '--good', FP: '--warn', FN: '--crit' };
    const probs = [...new Set(WELLS.map((w) => w.p))].sort((a, b) => b - a);
    const ROC = [{ t: 1, fpr: 0, tpr: 0 }];
    for (const p of probs) { const c = counts(p - 1e-9); ROC.push({ t: p, fpr: c.fpr, tpr: c.rec }); }
    let AUC = 0; for (let i = 1; i < ROC.length; i++) AUC += (ROC[i].fpr - ROC[i - 1].fpr) * (ROC[i].tpr + ROC[i - 1].tpr) / 2;
    const SWEEP = []; for (let i = 0; i <= 100; i++) { const t = i / 100; SWEEP.push({ t, ...counts(t) }); }

    const strip = $('#strip'), pr = $('#prchart'), roc = $('#rocchart');
    function drawStrip(thr) {
      strip.textContent = '';
      const W = 720, H = 96, L = 24, R = 24, y0 = 46;
      const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': 'Ten wells on the probability axis' }, strip);
      const sx = (p) => L + p * (W - L - R);
      el('line', { x1: L, x2: W - R, y1: y0, y2: y0, class: 'axis' }, svg);
      for (let t = 0; t <= 1.001; t += 0.1) { const x = sx(t); el('line', { x1: x, x2: x, y1: y0 - 4, y2: y0 + 4, class: 'axis' }, svg); const tx = el('text', { x, y: y0 + 22, 'text-anchor': 'middle', class: 'mut' }, svg); tx.textContent = t.toFixed(1); }
      const lab = el('text', { x: W - R, y: H - 4, 'text-anchor': 'end', class: 'mut' }, svg); lab.textContent = 'probability from the model';
      el('line', { x1: sx(thr), x2: sx(thr), y1: 8, y2: y0 + 10, stroke: css('--accent'), 'stroke-width': 2 }, svg);
      const tl = el('text', { x: Math.min(Math.max(sx(thr), 60), W - 60), y: 6, 'text-anchor': 'middle', 'font-size': 11 }, svg); tl.textContent = 'flag above ' + thr.toFixed(2);
      const seen = {};
      WELLS.forEach((w, i) => {
        const key = w.p.toFixed(3); seen[key] = (seen[key] || 0) + 1; const lift = (seen[key] - 1) * 16;
        const o = outcome(w, thr), col = css(OUT_COLOR[o]);
        const cx = sx(w.p), cy = y0 - 12 - lift;
        const g = el('g', { tabindex: 0, role: 'img', 'aria-label': `well ${i + 1}: density ${w.d}, ${w.y ? 'detected' : 'not detected'}, probability ${w.p}, ${o}` }, svg);
        el('circle', { cx, cy, r: 13, fill: 'transparent' }, g);
        el('circle', { cx, cy, r: 7, fill: w.y ? col : css('--surface'), stroke: col, 'stroke-width': 2.5 }, g);
        const t = el('text', { x: cx, y: cy - 11, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 600 }, g); t.textContent = o;
        const info = `density ${w.d}  truth ${w.y}  p=${w.p}  ${o}`;
        g.addEventListener('pointermove', (e) => showTip(e.pageX, e.pageY - 8, info));
        g.addEventListener('pointerleave', hideTip);
        g.addEventListener('focus', () => { const r = g.getBoundingClientRect(); showTip(r.left + r.width / 2 + window.scrollX, r.top + window.scrollY, info); });
        g.addEventListener('blur', hideTip);
      });
    }
    function drawPR(thr) {
      pr.textContent = '';
      const W = 420, H = 260, L = 44, R = 14, T = 12, B = 36;
      const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': 'Precision and recall against the threshold' }, pr);
      const sx = (t) => L + t * (W - L - R), sy = (v) => T + (1 - v) * (H - T - B);
      for (let v = 0; v <= 1.001; v += 0.2) { el('line', { x1: L, x2: W - R, y1: sy(v), y2: sy(v), class: 'grid' }, svg); const tx = el('text', { x: L - 6, y: sy(v) + 4, 'text-anchor': 'end', class: 'mut' }, svg); tx.textContent = v.toFixed(1); }
      for (let t = 0; t <= 1.001; t += 0.2) { const tx = el('text', { x: sx(t), y: H - B + 16, 'text-anchor': 'middle', class: 'mut' }, svg); tx.textContent = t.toFixed(1); }
      el('line', { x1: L, x2: W - R, y1: sy(0), y2: sy(0), class: 'axis' }, svg);
      const xl = el('text', { x: (L + W - R) / 2, y: H - 4, 'text-anchor': 'middle', class: 'mut' }, svg); xl.textContent = 'threshold';
      const path = (key) => { let d = '', pen = false; for (const s of SWEEP) { if (s[key] === null) { pen = false; continue; } d += (pen ? 'L' : 'M') + sx(s.t).toFixed(1) + ' ' + sy(s[key]).toFixed(1); pen = true; } return d; };
      el('path', { d: path('prec'), fill: 'none', stroke: css('--s1'), 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, svg);
      el('path', { d: path('rec'), fill: 'none', stroke: css('--s2'), 'stroke-width': 2.5, 'stroke-dasharray': '7 5', 'stroke-linejoin': 'round' }, svg);
      const c = counts(thr);
      el('line', { x1: sx(thr), x2: sx(thr), y1: T, y2: sy(0), stroke: css('--accent'), 'stroke-width': 1.5 }, svg);
      if (c.prec !== null) el('circle', { cx: sx(thr), cy: sy(c.prec), r: 5, fill: css('--s1'), stroke: css('--surface'), 'stroke-width': 2 }, svg);
      el('circle', { cx: sx(thr), cy: sy(c.rec), r: 5, fill: css('--s2'), stroke: css('--surface'), 'stroke-width': 2 }, svg);
      const e1 = el('text', { x: sx(0.75) + 4, y: sy(1.0) + 12, 'font-size': 11 }, svg); e1.textContent = 'precision';
      const e2 = el('text', { x: sx(0.8) + 4, y: sy(0) - 6, 'font-size': 11 }, svg); e2.textContent = 'recall';
      const hair = el('line', { x1: 0, x2: 0, y1: T, y2: sy(0), stroke: css('--muted'), 'stroke-width': 1, visibility: 'hidden' }, svg);
      const hit = el('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: 'transparent' }, svg);
      hit.addEventListener('pointermove', (e) => {
        const r = svg.getBoundingClientRect(); const t = Math.min(1, Math.max(0, ((e.clientX - r.left) / r.width * W - L) / (W - L - R)));
        const s = SWEEP[Math.round(t * 100)]; hair.setAttribute('x1', sx(s.t)); hair.setAttribute('x2', sx(s.t)); hair.setAttribute('visibility', 'visible');
        showTip(e.pageX, e.pageY - 10, `t=${s.t.toFixed(2)}  precision ${fmt(s.prec, 2)}  recall ${fmt(s.rec, 2)}`);
      });
      hit.addEventListener('pointerleave', () => { hair.setAttribute('visibility', 'hidden'); hideTip(); });
    }
    function drawROC(thr) {
      roc.textContent = '';
      const W = 320, H = 300, L = 44, R = 14, T = 12, B = 40;
      const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': 'ROC curve for the ten wells' }, roc);
      const sx = (v) => L + v * (W - L - R), sy = (v) => T + (1 - v) * (H - T - B);
      for (let v = 0; v <= 1.001; v += 0.2) {
        el('line', { x1: L, x2: W - R, y1: sy(v), y2: sy(v), class: 'grid' }, svg); el('line', { x1: sx(v), x2: sx(v), y1: T, y2: sy(0), class: 'grid' }, svg);
        const ty = el('text', { x: L - 6, y: sy(v) + 4, 'text-anchor': 'end', class: 'mut' }, svg); ty.textContent = v.toFixed(1);
        const tx = el('text', { x: sx(v), y: sy(0) + 16, 'text-anchor': 'middle', class: 'mut' }, svg); tx.textContent = v.toFixed(1);
      }
      el('line', { x1: sx(0), y1: sy(0), x2: sx(1), y2: sy(1), stroke: css('--muted'), 'stroke-width': 1, 'stroke-dasharray': '4 4' }, svg);
      const xl = el('text', { x: (L + W - R) / 2, y: H - 6, 'text-anchor': 'middle', class: 'mut' }, svg); xl.textContent = 'false positive rate';
      const yl = el('text', { x: 12, y: (T + sy(0)) / 2, 'text-anchor': 'middle', class: 'mut', transform: `rotate(-90 12 ${(T + sy(0)) / 2})` }, svg); yl.textContent = 'true positive rate';
      let d = ''; ROC.forEach((p, i) => { d += (i ? 'L' : 'M') + sx(p.fpr) + ' ' + sy(p.tpr); });
      el('path', { d, fill: 'none', stroke: css('--s1'), 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, svg);
      ROC.forEach((p) => {
        const g = el('g', {}, svg);
        el('circle', { cx: sx(p.fpr), cy: sy(p.tpr), r: 12, fill: 'transparent' }, g);
        el('circle', { cx: sx(p.fpr), cy: sy(p.tpr), r: 4, fill: css('--s1'), stroke: css('--surface'), 'stroke-width': 2 }, g);
        const info = `threshold just below ${p.t.toFixed(3)}: FPR ${p.fpr.toFixed(1)}, TPR ${p.tpr.toFixed(1)}`;
        g.addEventListener('pointermove', (e) => showTip(e.pageX, e.pageY - 10, info)); g.addEventListener('pointerleave', hideTip);
      });
      const c = counts(thr);
      el('circle', { cx: sx(c.fpr), cy: sy(c.rec), r: 8, fill: css('--accent'), stroke: css('--surface'), 'stroke-width': 2.5 }, svg);
      const a = el('text', { x: sx(0.55), y: sy(0.12), 'font-size': 12 }, svg); a.textContent = 'AUC = ' + AUC.toFixed(2);
    }
    function update() {
      const thr = parseFloat($('#thr').value); $('#thrv').textContent = thr.toFixed(2);
      const c = counts(thr);
      $('#c-tp').textContent = c.tp; $('#c-fp').textContent = c.fp; $('#c-fn').textContent = c.fn; $('#c-tn').textContent = c.tn;
      $('#m-prec').textContent = fmt(c.prec, 3); $('#m-prec-d').textContent = c.tp + c.fp ? `${c.tp} / ${c.tp + c.fp}` : 'nothing flagged';
      $('#m-rec').textContent = fmt(c.rec, 3); $('#m-rec-d').textContent = `${c.tp} / ${c.tp + c.fn}`;
      $('#m-acc').textContent = fmt(c.acc, 2); $('#m-acc-d').textContent = `${c.tp + c.tn} / 10`; $('#m-f1').textContent = fmt(c.f1, 3);
      drawStrip(thr); drawPR(thr); drawROC(thr);
    }
    $('#thr').addEventListener('input', update);
    const tb = $('#sweep tbody');
    if (tb) for (let i = 0; i <= 20; i++) { const tt = i / 20, c = counts(tt); const tr = document.createElement('tr');
      [tt.toFixed(2), c.tp, c.fp, c.fn, c.tn, fmt(c.prec, 3), fmt(c.rec, 3), fmt(c.acc, 2), fmt(c.fpr, 1)].forEach((v) => { const td = document.createElement('td'); td.textContent = v; tr.appendChild(td); }); tb.appendChild(tr); }
    update();
    return update;
  }

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
    const prob = (m, p) => sig(m.w[0] * p.x + m.w[1] * p.y + m.b);
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
      MODELS.forEach((m) => {
        const fig = document.createElement('figure'); ovr.appendChild(fig);
        const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, role: 'img', 'aria-label': `model ${m.k}: ${m.name} versus everything else` }, fig);
        el('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: 'none', class: 'axis' }, svg);
        const xl = el('text', { x: W - R, y: H - 6, 'text-anchor': 'end', class: 'mut' }, svg); xl.textContent = 'x1';
        const yl = el('text', { x: 8, y: T + 10, class: 'mut' }, svg); yl.textContent = 'x2';
        const clipId = 'clip' + m.k; const clip = el('clipPath', { id: clipId }, svg); el('rect', { x: L, y: T, width: W - L - R, height: H - T - B }, clip);
        const yAt = (x) => -(m.w[0] * x + m.b) / m.w[1];
        el('line', { x1: sx(-2), y1: sy(yAt(-2)), x2: sx(11), y2: sy(yAt(11)), stroke: css(m.col), 'stroke-width': 2, 'clip-path': `url(#${clipId})` }, svg);
        PTS.forEach((p) => marker(svg, p.c, sx(p.x), sy(p.y), p.c === m.k ? css(m.col) : css('--muted'), p.c === m.k));
        const g = el('g', {}, svg);
        el('circle', { cx: sx(newPt.x), cy: sy(newPt.y), r: 9, fill: css('--accent'), stroke: css('--surface'), 'stroke-width': 2.5 }, g);
        const lab = el('text', { x: sx(newPt.x) + 12, y: sy(newPt.y) + 4, 'font-size': 11, 'font-weight': 600 }, g); lab.textContent = 'new x';
        svg.addEventListener('click', (e) => {
          const r = svg.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width * W, py = (e.clientY - r.top) / r.height * H;
          newPt = { x: Math.min(9, Math.max(0, (px - L) / (W - L - R) * 9)), y: Math.min(9, Math.max(0, (1 - (py - T) / (H - T - B)) * 9)) };
          draw();
        });
        const cap = document.createElement('figcaption'); cap.textContent = `Model ${m.k}: ${m.name} vs. everything else`; fig.appendChild(cap);
      });
      const bars = $('#ovr-bars'); bars.textContent = '';
      const ps = MODELS.map((m) => ({ m, p: prob(m, newPt) })); const best = ps.reduce((a, b) => (b.p > a.p ? b : a));
      ps.forEach(({ m, p }) => {
        const n = document.createElement('div'); n.textContent = `P(${m.name})`; n.className = best.m === m ? 'win' : ''; bars.appendChild(n);
        const tr = document.createElement('div'); tr.className = 'track'; const f = document.createElement('div'); f.className = 'fill'; f.style.width = (p * 100).toFixed(1) + '%'; f.style.background = css(m.col); tr.appendChild(f); bars.appendChild(tr);
        const v = document.createElement('div'); v.className = 'pv' + (best.m === m ? ' win' : ''); v.textContent = p.toFixed(2); bars.appendChild(v);
      });
      $('#ovr-verdict').textContent = `x1 = ${newPt.x.toFixed(1)}, x2 = ${newPt.y.toFixed(1)}: model ${best.m.k} wins, so this is a ${best.m.name.slice(0, -1)}. The three probabilities add up to ${ps.reduce((s, q) => s + q.p, 0).toFixed(2)}, not 1.`;
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

  if ($('#thr')) redraws.push(initThreshold());
  if ($('#ovr')) redraws.push(initOVR());
  if ($('#cm3')) redraws.push(initPerClass());
  if ($('#clus')) redraws.push(initClustering());
  const redrawAll = () => redraws.forEach((f) => f());
  if (window.matchMedia) window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', redrawAll);
})();
