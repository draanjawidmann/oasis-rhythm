const $ = (id) => document.getElementById(id);
const SEED_ENTRIES = [{"date":"2026-06-08","weight":81.5,"cycleDay":null,"periodStatus":"","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":null,"coffeeDecaf":null,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":null,"protein":null,"fiber":null,"symptoms":[],"notes":"Starting weight."},{"date":"2026-08-03","weight":76.7,"cycleDay":null,"periodStatus":"","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":null,"coffeeDecaf":null,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":1600,"protein":143,"fiber":30,"symptoms":[],"notes":"Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-04","weight":null,"cycleDay":null,"periodStatus":"","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":3,"coffeeDecaf":0,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":1675,"protein":158,"fiber":32,"symptoms":[],"notes":"Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-05","weight":null,"cycleDay":1,"periodStatus":"Light","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":7,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":2,"coffeeDecaf":0,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":2100,"protein":173,"fiber":50,"symptoms":["Fatigue"],"notes":"Working cycle marker: Day 1. Noticeably hungrier than usual. Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-06","weight":76.6,"cycleDay":2,"periodStatus":"Light","bedtime":"21:00","wakeTime":"05:00","awakenings":2,"magnesium":"No","sleepQuality":7,"morningMood":null,"morningEnergy":null,"mood":7,"energy":5,"hunger":6,"foodNoise":8,"strength":2,"water":0.5,"coffeeCaf":2,"coffeeDecaf":1,"workout":"Other","workoutMinutes":null,"napMinutes":null,"calories":null,"protein":null,"fiber":null,"symptoms":["Headache","Fatigue"],"notes":"Tried to train but stopped after second round because of tension-type headache, weakness and fatigue. Trainer sent me home to rest."},{"date":"2026-08-08","weight":null,"cycleDay":4,"periodStatus":"","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":2,"coffeeDecaf":0,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":1760,"protein":143,"fiber":33,"symptoms":[],"notes":"Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-09","weight":76.5,"cycleDay":5,"periodStatus":"","bedtime":"","wakeTime":"","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":null,"water":null,"coffeeCaf":2,"coffeeDecaf":0,"workout":"None","workoutMinutes":0,"napMinutes":null,"calories":1460,"protein":123,"fiber":28,"symptoms":[],"notes":"Rest day. Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-10","weight":76.1,"cycleDay":6,"periodStatus":"","bedtime":"20:30","wakeTime":"05:30","awakenings":3,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":null,"mood":null,"energy":null,"hunger":null,"foodNoise":0,"strength":null,"water":null,"coffeeCaf":null,"coffeeDecaf":null,"workout":"","workoutMinutes":null,"napMinutes":null,"calories":null,"protein":null,"fiber":null,"symptoms":[],"notes":"Woke by myself feeling fairly rested; more energy than the previous week. No early hunger or food noise."},{"date":"2026-08-11","weight":null,"cycleDay":7,"periodStatus":"","bedtime":"","wakeTime":"04:00","awakenings":null,"magnesium":"","sleepQuality":null,"morningMood":null,"morningEnergy":7,"mood":6,"energy":4,"hunger":5,"foodNoise":4,"strength":8,"water":1.5,"coffeeCaf":null,"coffeeDecaf":null,"workout":"Upper body","workoutMinutes":60,"napMinutes":120,"calories":1685,"protein":130,"fiber":45,"symptoms":["Fatigue","Meds missed"],"notes":"Energy 7/10 in the morning and 4/10 in the afternoon. Very tired from around 11 AM after waking at 4 AM. No other symptoms. Nutrition totals are approximate midpoints from chat estimates."},{"date":"2026-08-12","weight":76.0,"cycleDay":8,"periodStatus":"","bedtime":"22:00","wakeTime":"05:00","awakenings":1,"magnesium":"Yes","sleepQuality":7,"morningMood":null,"morningEnergy":7,"mood":null,"energy":null,"hunger":null,"foodNoise":null,"strength":9,"water":null,"coffeeCaf":2,"coffeeDecaf":0,"workout":"Glutes","workoutMinutes":null,"napMinutes":null,"calories":null,"protein":null,"fiber":null,"symptoms":["Headache","Neck stiffness"],"notes":"Slightly uneasy/stressed in the morning. Neck stiff/sore with early headache; took ibuprofen 600 mg. Glute workout was strong, about 8–9/10."}];
const sliders=["sleepQuality","morningMood","morningEnergy","mood","energy","hunger","foodNoise","strength"];sliders.forEach(id=>{const el=$(id),out=$(id+"Out");el.addEventListener("input",()=>out.textContent=el.value)});$("date").value=new Date().toISOString().slice(0,10);document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));$(t.dataset.tab).classList.add("active");if(t.dataset.tab==="trends")refreshTrends()}));function getEntries(){const e=localStorage.getItem("oasisRhythmEntries");if(e===null){localStorage.setItem("oasisRhythmEntries",JSON.stringify(SEED_ENTRIES));return SEED_ENTRIES}return JSON.parse(e||"[]")}function setEntries(e){localStorage.setItem("oasisRhythmEntries",JSON.stringify(e))}
window.rhythmCycleStart=false;
function _d(s){if(!s)return null;const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12)}
function _dd(a,b){return Math.round((_d(b)-_d(a))/86400000)}
function cycleStartBefore(date){const a=getEntries().filter(e=>e.date<=date&&(e.cycleStart===true||e.cycleDay===1)).sort((a,b)=>b.date.localeCompare(a.date));return a.length?a[0].date:null}
function autoCycle(date){const s=cycleStartBefore(date);return s?_dd(s,date)+1:null}
function recalcCycles(entries){let start=null;return entries.sort((a,b)=>a.date.localeCompare(b.date)).map(e=>{if(e.cycleStart===true||e.cycleDay===1)start=e.date;if(start)e.cycleDay=_dd(start,e.date)+1;return e})}
function put(id,v){const e=$(id);if(!e)return;if(e.type==='range'){e.value=v??5;const o=$(id+'Out');if(o)o.textContent=e.value}else e.value=v??''}
function loadDay(date){const e=getEntries().find(x=>x.date===date);const ids=['weight','cycleDay','periodStatus','bedtime','wakeTime','awakenings','magnesium','sleepQuality','morningMood','morningEnergy','mood','energy','hunger','foodNoise','strength','water','coffeeCaf','coffeeDecaf','workout','workoutMinutes','napMinutes','calories','protein','fiber','notes'];document.querySelectorAll('.symptom').forEach(x=>x.checked=false);if(e){ids.forEach(id=>put(id,e[id]));(e.symptoms||[]).forEach(v=>{const q=[...document.querySelectorAll('.symptom')].find(x=>x.value===v);if(q)q.checked=true});window.rhythmCycleStart=!!e.cycleStart;$('saveButtonLabel').textContent='Update today'}else{ids.forEach(id=>put(id,['sleepQuality','morningMood','morningEnergy','mood','energy','hunger','foodNoise','strength'].includes(id)?5:''));const n=autoCycle(date);if(n)put('cycleDay',n);window.rhythmCycleStart=false;$('saveButtonLabel').textContent='Save today'}if(typeof updateGlance==='function')updateGlance()}
function val(id){return $(id).value}function num(id){const v=$(id).value;return v===""?null:Number(v)}$("checkinForm").addEventListener("submit",e=>{e.preventDefault();const symptoms=[...document.querySelectorAll(".symptom:checked")].map(x=>x.value);const entry={date:val("date"),weight:num("weight"),cycleDay:num("cycleDay"),cycleStart:window.rhythmCycleStart===true||num("cycleDay")===1,periodStatus:val("periodStatus"),bedtime:val("bedtime"),wakeTime:val("wakeTime"),awakenings:num("awakenings"),magnesium:val("magnesium"),sleepQuality:num("sleepQuality"),morningMood:num("morningMood"),morningEnergy:num("morningEnergy"),mood:num("mood"),energy:num("energy"),hunger:num("hunger"),foodNoise:num("foodNoise"),strength:num("strength"),water:num("water"),coffeeCaf:num("coffeeCaf"),coffeeDecaf:num("coffeeDecaf"),workout:val("workout"),workoutMinutes:num("workoutMinutes"),napMinutes:num("napMinutes"),calories:num("calories"),protein:num("protein"),fiber:num("fiber"),symptoms,notes:val("notes")};let entries=getEntries().filter(x=>x.date!==entry.date);entries.push(entry);entries=recalcCycles(entries);setEntries(entries);window.rhythmCycleStart=!!entry.cycleStart;$("saveButtonLabel").textContent="Update today";$("saveMsg").textContent="Saved on this device ✓";setTimeout(()=>$("saveMsg").textContent="",1800)});$("startCycleBtn").addEventListener("click",()=>{window.rhythmCycleStart=true;put("cycleDay",1);$("saveMsg").textContent="New cycle marked as Day 1 — save to confirm."});$("date").addEventListener("change",()=>loadDay($("date").value));window.addEventListener("load",()=>loadDay($("date").value));$("exportBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(getEntries(),null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="oasis-rhythm-data.json";a.click();URL.revokeObjectURL(url)});$("metricSelect").addEventListener("change",drawChart);
function displayDate(iso){
  if(!iso) return "—";
  const parts=iso.split("-");
  if(parts.length!==3) return iso;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
function displayDateShort(iso){
  if(!iso) return "";
  const parts=iso.split("-");
  if(parts.length!==3) return iso;
  return `${parts[2]}/${parts[1]}`;
}
function metricName(k){
  return ({
    weight:"Weight",sleepQuality:"Sleep quality",morningEnergy:"Morning energy",
    energy:"Evening energy",hunger:"Hunger",foodNoise:"Food noise",
    strength:"Strength",water:"Water",calories:"Calories",protein:"Protein",fiber:"Fiber"
  })[k]||k;
}
function metricUnit(k){
  return ({weight:" kg",water:" L",calories:" kcal",protein:" g",fiber:" g"})[k]||"";
}

let rhythmChartPoints=[];

function refreshTrends(){
  drawChart();
  const entries=getEntries().slice(-10).reverse();
  $("recentEntries").innerHTML=entries.length
    ? entries.map(e=>`<div class="entry"><strong data-iso="${e.date}">${displayDate(e.date)}</strong><span>${e.weight??"—"} kg · energy ${e.energy??"—"}/10 · hunger ${e.hunger??"—"}/10 · ${e.workout||"no workout logged"}</span></div>`).join("")
    : "<p class='muted'>No entries yet.</p>";
  if(typeof bindHistory==="function") setTimeout(bindHistory,0);
}

function drawChart(){
  const canvas=$("trendCanvas"),ctx=canvas.getContext("2d"),metric=$("metricSelect").value;
  const entries=getEntries()
    .filter(e=>e[metric]!==null&&e[metric]!==undefined&&e[metric]!=="")
    .slice(-30);

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#fff";ctx.fillRect(0,0,canvas.width,canvas.height);
  rhythmChartPoints=[];

  if(!entries.length){
    ctx.fillStyle="#6E7B75";ctx.font="22px system-ui";ctx.fillText("No data yet",28,54);return;
  }

  const values=entries.map(e=>Number(e[metric]));
  let min=Math.min(...values),max=Math.max(...values);
  if(min===max){min-=1;max+=1}
  const extra=Math.max((max-min)*0.06,.15);
  min-=extra;max+=extra;

  const pad={l:58,r:20,t:28,b:92},W=canvas.width-pad.l-pad.r,H=canvas.height-pad.t-pad.b;

  ctx.strokeStyle="#E4E8E5";ctx.lineWidth=1;
  ctx.fillStyle="#6E7B75";ctx.font="12px system-ui";
  for(let i=0;i<5;i++){
    const y=pad.t+H*i/4;
    ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(canvas.width-pad.r,y);ctx.stroke();
    const v=max-(max-min)*i/4;
    ctx.fillText(v.toFixed(metric==="weight"||metric==="water"?1:0),8,y+4);
  }

  ctx.strokeStyle="#315B4D";ctx.lineWidth=4;ctx.beginPath();
  entries.forEach((e,i)=>{
    const x=pad.l+(entries.length===1?W/2:W*i/(entries.length-1));
    const y=pad.t+H*(1-(Number(e[metric])-min)/(max-min));
    rhythmChartPoints.push({x,y,date:e.date,value:Number(e[metric]),metric});
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  });
  ctx.stroke();

  ctx.fillStyle="#315B4D";
  rhythmChartPoints.forEach(p=>{
    ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fill();
  });

  // Attach a DD/MM/YYYY label to every point on the x axis.
  ctx.fillStyle="#6E7B75";ctx.font="11px system-ui";
  rhythmChartPoints.forEach(p=>{
    ctx.save();
    ctx.translate(p.x,canvas.height-16);
    ctx.rotate(-Math.PI/4);
    ctx.textAlign="right";
    ctx.fillText(displayDate(p.date),0,0);
    ctx.restore();
  });
}

function nearestRhythmPoint(clientX,clientY){
  const canvas=$("trendCanvas"),rect=canvas.getBoundingClientRect();
  const sx=canvas.width/rect.width,sy=canvas.height/rect.height;
  const x=(clientX-rect.left)*sx,y=(clientY-rect.top)*sy;
  let best=null,bestD=Infinity;
  rhythmChartPoints.forEach(p=>{
    const d=Math.hypot(p.x-x,p.y-y);
    if(d<bestD){bestD=d;best=p}
  });
  return bestD<=26?best:null;
}
function showRhythmTooltip(p){
  const tip=$("chartTooltip"),canvas=$("trendCanvas"),rect=canvas.getBoundingClientRect();
  if(!tip||!p)return;
  tip.innerHTML=`<strong>${displayDate(p.date)}</strong><br>${metricName(p.metric)}: ${p.value}${metricUnit(p.metric)}`;
  tip.style.left=`${p.x*(rect.width/canvas.width)}px`;
  tip.style.top=`${p.y*(rect.height/canvas.height)}px`;
  tip.hidden=false;
}
function hideRhythmTooltip(){
  const tip=$("chartTooltip"); if(tip)tip.hidden=true;
}

$("trendCanvas").addEventListener("mousemove",e=>{
  const p=nearestRhythmPoint(e.clientX,e.clientY);
  if(p)showRhythmTooltip(p);else hideRhythmTooltip();
});
$("trendCanvas").addEventListener("mouseleave",hideRhythmTooltip);
$("trendCanvas").addEventListener("click",e=>{
  const p=nearestRhythmPoint(e.clientX,e.clientY);
  if(p){showRhythmTooltip(p);if(typeof fullDay==="function")fullDay(p.date)}
});
$("trendCanvas").addEventListener("touchstart",e=>{
  const t=e.touches[0],p=nearestRhythmPoint(t.clientX,t.clientY);
  if(p)showRhythmTooltip(p);
},{passive:true});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'))}
// V1.2 visual + history enhancements
function rhythmVal(id){const e=document.getElementById(id);return e&&e.value!==""?e.value:null}
function updateGlance(){
 const entries=getEntries(), date=$("date").value, saved=entries.find(e=>e.date===date)||{};
 const w=rhythmVal("weight")??saved.weight, en=rhythmVal("morningEnergy")??saved.morningEnergy??saved.energy;
 const wa=rhythmVal("water")??saved.water, pr=rhythmVal("protein")??saved.protein;
 $("glanceWeight").textContent=w!=null?w+" kg":"—"; $("glanceEnergy").textContent=en!=null?en+"/10":"—";
 $("glanceWater").textContent=wa!=null?wa+" L":"—"; $("glanceProtein").textContent=pr!=null?pr+" g":"—";
}
["date","weight","morningEnergy","energy","water","protein"].forEach(id=>{const e=$(id);if(e){e.addEventListener("input",updateGlance);e.addEventListener("change",updateGlance)}});setTimeout(updateGlance,0);

function fullDay(date){
 const e=getEntries().find(x=>x.date===date); if(!e)return;
 const f=(v,s="")=>v===null||v===undefined||v===""?"—":v+s;
 const rows=[
 ["Weight",f(e.weight," kg")],["Cycle day",f(e.cycleDay)],["Period",f(e.periodStatus)],
 ["Bedtime",f(e.bedtime)],["Wake time",f(e.wakeTime)],["Awakenings",f(e.awakenings)],["Sleep quality",f(e.sleepQuality,"/10")],["Magnesium",f(e.magnesium)],
 ["Morning mood",f(e.morningMood,"/10")],["Morning energy",f(e.morningEnergy,"/10")],["Mood",f(e.mood,"/10")],["Energy",f(e.energy,"/10")],["Hunger",f(e.hunger,"/10")],["Food noise",f(e.foodNoise,"/10")],
 ["Water",f(e.water," L")],["Caffeinated coffees",f(e.coffeeCaf)],["Decaf coffees",f(e.coffeeDecaf)],
 ["Workout",f(e.workout)],["Workout duration",f(e.workoutMinutes," min")],["Strength",f(e.strength,"/10")],["Nap",f(e.napMinutes," min")],
 ["Calories",f(e.calories," kcal")],["Protein",f(e.protein," g")],["Fiber",f(e.fiber," g")],
 ["Symptoms",Array.isArray(e.symptoms)&&e.symptoms.length?e.symptoms.join(", "):"—"]
 ];
 const box=$("dayDetail"); if(!box)return;
 box.innerHTML="<h3>"+displayDate(date)+"</h3><div class='detailgrid'>"+rows.map(r=>"<div><small>"+r[0]+"</small><strong>"+r[1]+"</strong></div>").join("")+"</div><div class='detailnotes'><b>Notes</b><br>"+(e.notes||"—")+"</div>";
 box.hidden=false; box.scrollIntoView({behavior:"smooth",block:"nearest"});
}
function bindHistory(){
 document.querySelectorAll(".entry").forEach(el=>{
   if(el.dataset.bound)return; el.dataset.bound="1";
   el.addEventListener("click",()=>{const strong=el.querySelector("strong"); if(!strong)return; const txt=strong.dataset.iso||strong.textContent; const entries=getEntries(); const hit=entries.find(x=>x.date===txt); if(hit)fullDay(hit.date)});
 });
}
const oldRefresh=typeof refreshTrends==="function"?refreshTrends:null;
if(oldRefresh){refreshTrends=function(){oldRefresh();setTimeout(bindHistory,0)}}
