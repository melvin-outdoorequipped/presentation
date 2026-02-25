/* ══════════════════════════════════════════
   FEATURES + MODAL
══════════════════════════════════════════ */
const FEATURES=[
  {icon:'📁',title:'Connect Sources',image:'connect-sources.png',desc:'Link Google Sheets, Docs, PDFs, Drive files, website URLs, or paste text directly. Up to 50 sources per notebook — all analyzed together as one unified knowledge base.',detail:'NotebookLM accepts content from Google Drive (Docs, Sheets, Slides), uploaded PDFs, plain text, Markdown, website URLs, and copied/pasted content. All 50 sources are indexed and queried simultaneously.',tags:['Google Drive','PDF','Google Sheets','Web URLs','Up to 50 sources']},
  {icon:'🤔',title:'Plain English Queries',image:'plain-english.png',desc:'Ask questions exactly as you\'d ask a colleague. No special syntax, no prompt engineering. "What is the brand behavior of ASICS?" returns a sourced, accurate answer instantly.',detail:'Unlike general AI tools that require careful prompt construction, NotebookLM understands natural, conversational questions. Ask follow-up questions in context, request comparisons, or specific data extractions — all in plain language.',tags:['Natural Language','Conversational','Follow-up Questions','Context-Aware']},
  {icon:'🔗',title:'Inline Citations',image:'inline-citations.png',desc:'Every response includes superscript footnotes linking to the exact row, paragraph, or section. One click to verify — no manual fact-checking needed.',detail:'Each citation shows the exact passage supporting the answer. For spreadsheets, it links to specific rows and columns. For documents, it highlights the relevant paragraph. A complete audit trail from AI answer to raw source data.',tags:['Source Attribution','One-Click Verify','Audit Trail','Zero Trust Gap']},
  {icon:'🔒',title:'Fully Private',image:'fully-private.png',desc:'Your documents are never used to train Google\'s AI models. Content stays within your Google account, subject to your existing Workspace security policies.',detail:'Google\'s data governance policy explicitly states that user content is not used to train or improve their AI models. Your proprietary brand data, operational procedures, and business intelligence remain exclusively within your Workspace.',tags:['Data Privacy','Not Used for Training','Workspace Security','Enterprise Safe']},
  {icon:'👥',title:'Team Collaboration',image:'team-collaboration.png',desc:'Share notebooks with permission levels: Owner, Editor, Viewer. Add Welcome Notes to onboard new staff instantly with full context on what each notebook covers.',detail:'Notebooks can be shared like any Google document — with granular permissions. Welcome Notes function as custom instructions appearing when a new user first opens a notebook. Multiple users can query simultaneously.',tags:['Role-Based Access','Welcome Notes','Simultaneous Users','Easy Sharing']},
  {icon:'🎙️',title:'Studio Features',image:'studio-features.png',desc:'Auto-generate Audio Overviews, Study Guides, FAQs, Timelines, and Briefing Documents directly from your source materials.',detail:'The Studio panel transforms any set of documents into multiple output formats. Audio Overview creates a realistic two-host AI podcast — ideal for async team briefings. Study Guides structure key themes. All outputs grounded exclusively in your source documents.',tags:['Audio Overview','Study Guides','FAQ Generation','Executive Briefings','Timelines']}
];
const fg=document.getElementById('featGrid');
FEATURES.forEach((f,i)=>{
  const el=document.createElement('div');el.className='feat-card';
  el.innerHTML=`<div class="feat-click-hint">Explore ↗</div><div class="feat-icon-wrap">${f.icon}</div><div class="feat-title">${f.title}</div><div class="feat-desc">${f.desc}</div>`;
  el.addEventListener('click',()=>openModal(i));fg.appendChild(el);
});
function openModal(i){
  const f=FEATURES[i];
  document.getElementById('mIcon').textContent=f.icon;
  document.getElementById('mTitle').textContent=f.title;
  document.getElementById('mDesc').textContent=f.detail;
  document.getElementById('mTags').innerHTML=f.tags.map(t=>`<div class="modal-tag">${t}</div>`).join('');
  const zone=document.getElementById('mImgZone'),img=document.getElementById('mImg');
  if(f.image){img.src=f.image;img.style.display='block';zone.classList.add('has-img');}
  else{img.src='';img.style.display='none';zone.classList.remove('has-img');}
  document.getElementById('featModal').classList.add('open');
}
function closeModal(){document.getElementById('featModal').classList.remove('open');}
document.getElementById('featModal').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCmd();}});

