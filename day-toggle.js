/* ══════════════════════════════════════════
   DAY TOGGLE
══════════════════════════════════════════ */
function showDay(mode){
  ['dayBefore','dayAfter'].forEach(id=>document.getElementById(id).classList.remove('active'));
  ['btnBefore','btnAfter'].forEach(id=>document.getElementById(id).classList.remove('active-bad','active-good'));
  if(mode==='before'){document.getElementById('dayBefore').classList.add('active');document.getElementById('btnBefore').classList.add('active-bad');}
  else{document.getElementById('dayAfter').classList.add('active');document.getElementById('btnAfter').classList.add('active-good');}
}

