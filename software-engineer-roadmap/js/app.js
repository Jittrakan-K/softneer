const KEY = "swe-roadmap-v1";
let state = {};
try { state = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch(e) { state = {}; }
function save(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){} }

const wig = [-26, 22, -14, 28, -22, 16, -30, 20, 0];
const host = document.getElementById("stops");
const dots = document.getElementById("dots");

STAGES.forEach((s, i) => {
  const id = "st" + s.no;
  const el = document.createElement("article");
  el.className = "stop";
  el.id = id;
  el.style.setProperty("--c", s.c);
  const checks = s.checks.map((t, j) => {
    const k = s.no + "-" + j;
    return `<li><label><input type="checkbox" data-k="${k}" ${state[k] ? "checked" : ""}><span>${t}</span></label></li>`;
  }).join("");
  const proj = s.project ? `<div class="project"><b>✎ ${s.project.t}</b><ul>${s.project.items.map(x => `<li>${x}</li>`).join("")}</ul></div>` : "";
  const res = s.res.map(r => {
    const langCls = r[3] === "TH" ? "th" : "en";
    return `<li><a href="${r[1]}" target="_blank" rel="noopener"><span class="nm">${r[0]}</span><span class="bd"><span class="ty">${r[2]}</span><span class="${langCls}">${r[3]}</span></span><span class="nt">${r[4]}</span></a></li>`;
  }).join("");
  const vlist = (typeof VIDS !== "undefined" && VIDS[s.no]) || [];
  const vids = vlist.map(v => {
    const ch = v[1].startsWith("@");
    const url = ch ? "https://www.youtube.com/" + v[1] : "https://www.youtube.com/results?search_query=" + encodeURIComponent(v[1]);
    return `<li><a href="${url}" target="_blank" rel="noopener"><span class="play"></span><span><b>${v[0]}<span class="kind ${ch ? "ch" : ""}">${ch ? "ช่อง" : "ค้นหา"}</span></b><small>${v[2]}</small></span></a></li>`;
  }).join("");
  const vidBlock = vids ? `<div class="vid-head">🎬 คลิปภาษาไทย</div><ul class="vids">${vids}</ul>` : "";
  el.innerHTML = `
    <div class="card sk reveal">
      <div class="tag"><span class="chip-time">${s.time}</span><span class="stage-no">STAGE ${s.no}</span><span class="count" data-count></span></div>
      <h3>${s.title}<small>${s.en}</small></h3>
      <p class="why">${s.why}</p>
      <ul class="checks">${checks}</ul>
      ${proj}
      <div class="res-head">📚 แหล่งเรียนฟรี</div>
      <ul class="res">${res}</ul>
      ${vidBlock}
    </div>
    <div class="pin-col"><div class="pin" style="--wig:${wig[i]}px">${s.no}</div></div>
    <div class="side-note reveal"><span class="hand">${s.note.replace(/\n/g, "<br>")}</span><span class="doodle">${DOODLES[s.doodle] || ""}</span></div>`;
  host.appendChild(el);
  const d = document.createElement("a");
  d.href = "#" + id; d.title = s.title; d.dataset.stage = s.no;
  dots.appendChild(d);
});

function updateProgress(){
  const all = document.querySelectorAll(".checks input");
  let done = 0;
  all.forEach(c => { if (c.checked) done++; });
  const p = all.length ? Math.round(done / all.length * 100) : 0;
  document.getElementById("bar").style.width = p + "%";
  document.getElementById("pct").textContent = p + "%";
  document.querySelectorAll(".stop").forEach((st, i) => {
    const cs = st.querySelectorAll(".checks input");
    const n = [...cs].filter(c => c.checked).length;
    st.querySelector("[data-count]").textContent = n + "/" + cs.length;
    const complete = n === cs.length;
    st.classList.toggle("complete", complete);
    dots.children[i].classList.toggle("done", complete);
  });
}

function confetti(x, y){
  const em = ["✦","★","●","▲","✿","♥"];
  const col = ["#ff6b5b","#17a398","#f2b632","#8f7dff","#ff9ec7"];
  for (let i = 0; i < 14; i++){
    const s = document.createElement("span");
    s.className = "confetti";
    s.textContent = em[i % em.length];
    s.style.color = col[i % col.length];
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", (Math.random() * 220 - 110) + "px");
    s.style.setProperty("--dy", (Math.random() * -180 - 30) + "px");
    s.style.setProperty("--r", (Math.random() * 540 - 270) + "deg");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}

host.addEventListener("change", e => {
  const c = e.target;
  if (!c.matches("input[type=checkbox]")) return;
  state[c.dataset.k] = c.checked;
  if (!c.checked) delete state[c.dataset.k];
  save();
  const st = c.closest(".stop");
  const wasComplete = st.classList.contains("complete");
  updateProgress();
  if (!wasComplete && st.classList.contains("complete")) {
    const b = st.querySelector(".pin").getBoundingClientRect();
    confetti(b.left + b.width / 2, b.top + b.height / 2);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  state = {}; save();
  document.querySelectorAll(".checks input").forEach(c => c.checked = false);
  updateProgress();
});

/* ---- winding road ---- */
const road = document.getElementById("roadEl");
const svg = document.getElementById("pathSvg");
let progPath = null;
function drawRoad(){
  const r = road.getBoundingClientRect();
  const pins = [...road.querySelectorAll(".pin")];
  const pts = pins.map(p => { const b = p.getBoundingClientRect(); return [b.left - r.left + b.width / 2, b.top - r.top + b.height / 2]; });
  if (!pts.length) return;
  svg.setAttribute("viewBox", `0 0 ${r.width} ${r.height}`);
  svg.style.height = r.height + "px";
  let d = `M ${pts[0][0]} ${Math.max(0, pts[0][1] - 80)} L ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++){
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
    const my = (y0 + y1) / 2;
    const bend = (i % 2 ? 1 : -1) * Math.min(90, r.width * 0.08);
    d += ` C ${x0 + bend} ${my}, ${x1 - bend} ${my}, ${x1} ${y1}`;
  }
  const last = pts[pts.length - 1];
  d += ` L ${last[0]} ${last[1] + 70}`;
  svg.innerHTML = `
    <path d="${d}" fill="none" stroke="rgba(31,42,68,.12)" stroke-width="22" stroke-linecap="round"/>
    <path d="${d}" fill="none" stroke="#1f2a44" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round"/>
    <path id="prog" d="${d}" pathLength="1" fill="none" stroke="#ff6b5b" stroke-width="6" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1" filter="url(#rough)"/>
    <text x="${last[0] + 14}" y="${last[1] + 66}" font-family="Caveat" font-size="26" font-weight="700" fill="#1f2a44">🏁 Software Engineer!</text>`;
  progPath = svg.querySelector("#prog");
  onScroll();
}
function onScroll(){
  if (!progPath) return;
  const r = road.getBoundingClientRect();
  const f = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
  progPath.style.strokeDashoffset = 1 - f;
  const line = innerHeight * 0.6;
  document.querySelectorAll(".stop").forEach(st => {
    st.classList.toggle("passed", st.querySelector(".pin").getBoundingClientRect().top < line);
  });
}
let raf;
addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(onScroll); }, { passive: true });
addEventListener("resize", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(drawRoad); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawRoad);
addEventListener("load", drawRoad);

/* ---- reveal ---- */
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window){
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  items.forEach(i => io.observe(i));
} else items.forEach(i => i.classList.add("in"));

updateProgress();
drawRoad();
