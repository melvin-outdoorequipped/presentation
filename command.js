/* ══════════════════════════════════════════
   COMMAND PALETTE
══════════════════════════════════════════ */
const CMD_ITEMS=[
  ...NAMES.map((name,i)=>({icon:'→',label:'Go to: '+name,sub:'Slide '+(i+1),action:()=>goTo(i)})),
  {icon:'📋',label:'Toggle Speaker Script',sub:'Show/hide script panel',action:toggleScript},
  {icon:'▶',label:'Run ASICS Demo',sub:'Slide 6 simulation',action:()=>{goTo(5);setTimeout(()=>runSim('asics'),400);}},
  {icon:'▶',label:'Run SKU Format Demo',sub:'Slide 6 simulation',action:()=>{goTo(5);setTimeout(()=>runSim('sku'),400);}},
  {icon:'🔁',label:'Toggle Before View',sub:'Slide 3',action:()=>{goTo(2);setTimeout(()=>showDay('before'),300);}},
  {icon:'🔁',label:'Toggle After View',sub:'Slide 3',action:()=>{goTo(2);setTimeout(()=>showDay('after'),300);}},
];
let cmdSel=0,filteredCMD=CMD_ITEMS;
function openCmd(){document.getElementById('cmdOverlay').classList.add('open');document.getElementById('cmdInput').value='';filteredCMD=CMD_ITEMS;cmdSel=0;renderCmd();setTimeout(()=>document.getElementById('cmdInput').focus(),50);}
function closeCmd(){document.getElementById('cmdOverlay').classList.remove('open');}
function filterCmd(){const q=document.getElementById('cmdInput').value.toLowerCase();filteredCMD=CMD_ITEMS.filter(it=>it.label.toLowerCase().includes(q)||it.sub.toLowerCase().includes(q));cmdSel=0;renderCmd();}
function renderCmd(){
  document.getElementById('cmdResults').innerHTML=filteredCMD.slice(0,9).map((it,i)=>`
    <div class="cmd-item${i===cmdSel?' selected':''}" onclick="execCmd(${i})">
      <div class="cmd-item-icon">${it.icon}</div>
      <div><div class="cmd-item-label">${it.label}</div><div class="cmd-item-sub">${it.sub}</div></div>
    </div>`).join('');
}
function execCmd(i){if(filteredCMD[i]){filteredCMD[i].action();closeCmd();}}
function handleCmdKey(e){
  if(e.key==='ArrowDown'){e.preventDefault();cmdSel=Math.min(cmdSel+1,Math.min(filteredCMD.length,9)-1);renderCmd();}
  if(e.key==='ArrowUp'){e.preventDefault();cmdSel=Math.max(cmdSel-1,0);renderCmd();}
  if(e.key==='Enter'){e.preventDefault();execCmd(cmdSel);}
}