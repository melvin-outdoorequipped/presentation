/* ══════════════════════════════════════════
   AI ENGINE
══════════════════════════════════════════ */
const AI_KB=[
  {keys:['different','chatgpt','gemini','vs','compare','versus','unlike','better'],answer:`NotebookLM is fundamentally different from ChatGPT or Gemini: it only answers from documents you provide. ChatGPT draws on its entire training data — which means it can fabricate confident-sounding answers. NotebookLM refuses to answer anything it can't source from your files. Every response includes a clickable citation to the exact row or paragraph. For business operations, that's the difference between a trusted tool and a liability.`},
  {keys:['brand','ops','operations','team','use','day','daily','workflow','listings'],answer:`For a brand operations team, NotebookLM becomes a shared intelligence layer over your existing Google Sheets and Docs. Instead of manually searching the Exclusive/Ops Brand Behavior sheet, staff simply ask: "What is the brand behavior of ASICS?" and get a cited answer in seconds. It works for listing guidelines, SKU formats, priority tasks, and reference tables.`},
  {keys:['safe','privacy','data','secure','security','private','train','training','gdpr'],answer:`NotebookLM is fully private by design. Google has explicitly stated that user content in NotebookLM is never used to train or improve their AI models. All data stays within your Google Workspace environment, subject to the same security policies you already trust for Drive and Docs.`},
  {keys:['cost','price','free','pay','expensive','pricing','licence','license','subscription'],answer:`NotebookLM is currently free. If your company uses Google Workspace, you already have access at no additional cost. There's no separate contract, no per-seat licence fee, and no trial period. The only investment is the time to connect your documents and train your team.`},
  {keys:['fast','quick','start','setup','begin','running','implement','long','soon','ready'],answer:`You can have NotebookLM running for your team within a single afternoon. Creating a notebook, connecting your Google Sheets and Docs, and sharing it takes less than 30 minutes. No IT setup, no software installation, no technical configuration.`},
  {keys:['citation','cite','source','verify','proof','attribution','footnote','reference'],answer:`Citations are NotebookLM's most powerful feature. Every AI response includes superscript numbers — clicking them opens the exact excerpt from your source document. For spreadsheets, it highlights the specific row and column. Any team member can verify any answer in one click.`},
  {keys:['audio','podcast','studio','overview','summary','guide','faq','briefing','generate'],answer:`NotebookLM's Studio panel automatically generates Audio Overviews (a realistic two-host AI podcast), Study Guides, auto-generated FAQs, and Briefing Docs — all grounded exclusively in your source documents.`},
  {keys:['hallucination','hallucinate','wrong','inaccurate','mistake','fabricate','make up'],answer:`NotebookLM cannot hallucinate in the way general AI does. If the answer isn't in your documents, it tells you it can't find it. It won't invent an answer to seem helpful. In the ASICS pilot, every single response was verified as 100% accurate.`},
  {keys:['onboard','onboarding','new staff','new employee','training','hire','welcome'],answer:`NotebookLM dramatically accelerates staff onboarding. New team members get access to a shared notebook containing all your SOPs and brand guidelines — then ask plain English questions to get up to speed without relying on senior staff.`},
  {keys:['share','collaborate','permission','access','owner','editor','viewer','multiple'],answer:`Sharing in NotebookLM works exactly like sharing a Google Doc — with Owners, Editors, and Viewers. Multiple team members can query the same notebook simultaneously.`},
  {keys:['recommendation','recommend','suggest','next step','action','should','do next'],answer:`The recommendation: start this week. Create one shared notebook from your existing Brand Behavior and Listings Operations files. Assign one champion. Run it for four weeks and track time saved. The data will make the case for expanding to other departments.`},
  {keys:['asics','pilot','test','result','finding','outcome','proof','validated'],answer:`The ASICS brand operations test was the core validation. Three internal documents were connected. The query "What is the brand behavior of ASICS?" returned a 100% accurate, cited response in under 3 seconds — with a clickable footnote linking to the exact row in the source spreadsheet. Zero hallucinations.`}
];
function getAIAnswer(q){
  const ql=q.toLowerCase();let best=null,bs=0;
  for(const e of AI_KB){const s=e.keys.filter(k=>ql.includes(k)).length;if(s>bs){bs=s;best=e;}}
  return(best&&bs>0)?best.answer:`NotebookLM is a Google AI tool that answers questions exclusively from documents you provide — eliminating hallucinations entirely. It integrates directly with Google Sheets, Docs, and Drive. What specific aspect would you like to know more about?`;
}
async function callAI(msg){
  const btn=document.getElementById('sendBtn');btn.disabled=true;
  const tid='t_'+Date.now();
  addRaw(`<div class="cmsg ai" id="${tid}"><div class="cmsg-lbl">Assistant</div><div class="cmsg-bubble"><div class="thinking"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div></div></div>`);
  await new Promise(r=>setTimeout(r,650+Math.random()*500));
  document.getElementById(tid)?.remove();
  addMsg(getAIAnswer(msg),'ai');btn.disabled=false;
}
function addMsg(text,type){
  const w=document.getElementById('chatMsgs');
  const d=document.createElement('div');d.className='cmsg '+type;
  d.innerHTML=`<div class="cmsg-lbl">${type==='user'?'You':'Assistant'}</div><div class="cmsg-bubble">${text}</div>`;
  w.appendChild(d);w.scrollTop=w.scrollHeight;
}
function addRaw(html){const w=document.getElementById('chatMsgs');w.insertAdjacentHTML('beforeend',html);w.scrollTop=w.scrollHeight;}

/* ══════════════════════════════════════════
   SIMULATION
══════════════════════════════════════════ */
const SIM={
  asics:{query:'"What is the brand behavior of ASICS?"',
    response:`<strong style="color:rgba(236,234,228,0.85)">ASICS (Operations):</strong> For the ASICS brand, operations primarily dictate specific cost gathering sequences depending on whether you are working on a listing data file (for bulk/prebook) or gathering costs for new item creations. When working on this brand, you should reference the "Asics Consolidated UPC List" and "Asics Consolidated UPC List 2" <span class="sim-cite">⁴·⁵</span>.<br><strong style>Here are the step-by-step instructions for each task:</strong><br>Cost Gathering Sequence for Listing Data Files (Bulk/PB):<br>
<br>1. <strong>Closeout / Special Cost: </strong>Gather the Closeout cost, followed by the Special Cost, using the Special Pricing - AE Conso. Your lookup values should be the <strong>Style-Color</strong> followed by the <strong>Item Name. Do not apply any discounts to these costs.</strong>
<br>2. <strong>Wholesale Cost:</strong> Gather the Wholesale Cost using the Website Scraper (Yara). Use <strong>Style Color</strong> first as your lookup value, followed by <strong>Style Number</strong>Once found, apply a <strong>15% discount</strong> to the Wholesale Cost (or refer to the current discount stated in Basecamp).
<br>3. <strong>B2B Check:</strong> Use Style-Color then <strong>Style</strong> to look up the item in B2B. Apply the 15% discount (or current BC discount) to the Wholesale Cost here as well. <strong>Note:</strong> If an item is not found in B2B, you must exclude it.
<br><strong style="font-size:15px">Cost Gathering Sequence for Items for Creation (Latest AE Instructions as of 5/14/25):</strong>
<br>1. <strong>Closeout / Special Cost:</strong> Just like bulk orders, start by gathering the cost from Special Pricing - AE Conso (under Closeout Cost, then Special Cost). Use <strong>Style-Color</strong> then <strong>Item Name</strong> as lookup values, and <strong>do not apply a discount</strong>.
<br>2. <strong>Wholesale Cost:</strong> Gather the cost from the Website Scraper (Yara) using <strong>Style-Color</strong> first, then <strong>Style Number</strong>. You must apply a 15% discount to all items, except for certain styles that have special pricing. For the styles below, follow the specific discount used from the Website Scraper instead of the flat 15%:
<lu>
<li>Venture (e.g., Venture, Gel-Venture, etc.)</li>
<li>Contend</li>
<li>Excite</li>
<li>Gel-Pulse</li>
<li>GT-1000</li>
<li>Dynablast</li>
<li>Versablast</li></lu>
<br><strong>B2B Search:</strong> Finally, search B2B using the Style-Color, then the Style.
Additionally, if you encounter any listing issues while working with ASICS, they should be logged in the dedicated Google Sheets tracker provided in the instructions.
<br><br>All listing problems must be documented systematically to ensure proper monitoring and resolution.`,
    followups:['What is the SKU format for Lemon Jelly listings?','How should Vibram mismatch sizes be handled?','What are listing priorities for exclusive vs. ops brands?']},
  priority:{query:'"What are the listing task priorities for 2025?"',
    response:`Listing operations priorities for 2025–26: (1) resolve active listing mismatches within 48 hours <span class="sim-cite">²</span>, (2) ensure all new SKUs follow the standardised format before publishing <span class="sim-cite">³</span>, and (3) complete weekly inventory reconciliation every Monday.`,
    followups:['What is the deadline for Q1 listing updates?','Who owns the mismatch resolution process?','Which brands have priority listing flags?']},
  sku:{query:'"What is the SKU format of ASICs?"',
    response:`Based on the <strong>Listings Team Reference Tables</strong>, the SKU format for <strong>ASICS</strong> is as follows</strong> <span class="sim-cite">¹</span>. 
<<li><strong>SKU Initial:</strong> AS-</li>
<li><strong>Format Structure:</strong> SKU Initial + Style Number + - + Color Code + - + Size</li>
<li><strong>Sample SKUs:</strong></li>
<lu><li>AS-1011A041-001-10H</li>
<li>AS-2011A018-021-2XL</li>
</lu>
<br>
<strong>Important Note:</strong> In the size section of the SKU, 10H denotes a size 10.5 (10 Half).`,
    followups:['What is the SKU format for 5.11 Tactical products?','How do you handle width initials in Thorogood SKUs?','What does the 10H indicator mean in ASICS sizing?']}
};
let simRunning=false;
async function runSim(key){
  if(simRunning)return;simRunning=true;
  const screen=document.getElementById('simScreen'),btn=document.querySelector('.sim-btn');
  btn.disabled=true;
  let p;if(key&&SIM[key]){p=SIM[key];}else{
    const v=document.getElementById('simIn').value.trim().toLowerCase();document.getElementById('simIn').value='';
    p=v.includes('priority')||v.includes('task')?SIM.priority:v.includes('sku')||v.includes('format')?SIM.sku:SIM.asics;
  }
  screen.innerHTML=`<div class="sim-query-box"><div class="sim-query-lbl">Query sent to NotebookLM</div>${p.query}</div><div class="thinking" style="padding:8px 0;"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div><span style="font-family:var(--font-m);font-size:0.52rem;color:var(--faint);margin-left:8px;letter-spacing:0.1em;">SEARCHING SOURCES…</span></div>`;
  await new Promise(r=>setTimeout(r,1100));
  screen.innerHTML=`<div class="sim-query-box"><div class="sim-query-lbl">Query</div>${p.query}</div><div class="sim-response-box"><div class="sim-response-lbl">NotebookLM Response</div>${p.response}</div><div class="sim-followup-box"><div class="sim-followup-lbl">AI-Suggested Follow-ups</div>${p.followups.map(f=>`› ${f}`).join('<br>')}</div><div style="padding:8px 10px;background:rgba(99,210,150,0.03);border:1px solid rgba(99,210,150,0.09);border-radius:4px;margin-top:2px;"><div style="font-family:var(--font-m);font-size:0.44rem;color:var(--g);margin-bottom:2px;letter-spacing:0.14em;text-transform:uppercase;">Verification</div><div style="font-size:0.66rem;color:var(--muted);line-height:1.65;">✓ Sourced from your 3 connected docs only<br>✓ 0% hallucination — no external data used<br>✓ Citations link to exact source row</div></div>`;
  btn.disabled=false;simRunning=false;
}
document.getElementById('simIn').addEventListener('keypress',e=>{if(e.key==='Enter')runSim();});
function sendChat(){const i=document.getElementById('chatIn'),m=i.value.trim();if(!m)return;addMsg(m,'user');i.value='';callAI(m);}
document.getElementById('chatIn').addEventListener('keypress',e=>{if(e.key==='Enter')sendChat();});
document.querySelectorAll('.qq-item').forEach(el=>{
  el.addEventListener('click',()=>{const q=el.getAttribute('data-q');addMsg(q,'user');callAI(q);if(current!==5)goTo(5);});
});

