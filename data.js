/* ══════════════════════════════════════════
   SPEAKER SCRIPT DATA
══════════════════════════════════════════ */
const SCRIPT=[
  // Slide 1 — Introduction
  {time:'2 min',sections:[
    {label:'Opening',lines:[
      {text:`"Thanks for the time. I want to show you something specific — not a general pitch about AI, but one tool that's sitting inside Google Workspace <em>right now</em> that I believe we're leaving on the table every single day.`,key:false},
      {text:`It's called NotebookLM. It's <em>free</em> — already included in the Workspace licences we pay for. What I want to show you today is what happened when I actually tested it on our own files."`,key:true},
    ]},
    {label:'Roadmap',lines:[
      {text:`"Quick roadmap: we start with what's happening in the industry right now, then I'll show you a real before-and-after of our team's day, the tool itself, a live demo on our actual documents, and what I think we should do next."`,key:false},
    ]},
  ]},
  // Slide 2 — AI Moment
  {time:'3 min',sections:[
    {label:'Context',lines:[
      {text:`"I want to start here, because context matters before we look at any specific tool."`,key:false},
    ]},
    {label:'S-Curve',cues:['→ Point to the S-curve on the left'],lines:[
      {text:`"This is the technology adoption curve — it applies to every major shift: the internet, smartphones, cloud software, and now AI. The pattern is always the same: <em>early movers build structural advantages that become very expensive for late movers to close.</em>"`,key:false},
      {text:`"The green zone — Early Majority — is where we are right now. This is the best time to move. Not the riskiest, not the most expensive. <strong>The window is open.</strong>"`,key:true},
    ]},
    {label:'Stats',cues:['→ Point to the stats on the right'],lines:[
      {text:`"72% of enterprises are now actively using AI in at least one business function. That's not a prediction — that's today."`,key:false},
      {text:`"Teams using AI-assisted knowledge retrieval are reporting 40% faster task completion. And here's the one that stings: knowledge workers spend 19% of their working day searching for information that already exists inside their own company."`,key:false},
      {text:`"<em>That last number is ours too. That's the problem NotebookLM solves directly.</em>"`,key:true},
    ]},
  ]},
  // Slide 3 — Day in the Life
  {time:'3 min',sections:[
    {label:'Setup',lines:[
      {text:`"Before I show you the tool, I want to make this concrete. I put together a picture of what our team's day actually looks like — right now, and with NotebookLM running on our files."`,key:false},
    ]},
    {label:'Before Toggle',cues:['→ View starts on "Without NotebookLM"'],lines:[
      {text:`"Look at how much red there is. Every one of those blocks is a person manually searching — for brand rules, for a SKU format, for an ops reference. They're not doing the wrong thing; this is just the only option available to them right now."`,key:false},
      {text:`"And look at the new hire row — they're either waiting for help or interrupting a senior team member to get it."`,key:false},
    ]},
    {label:'After Toggle',cues:['→ Click "With NotebookLM"'],lines:[
      {text:`"Same team. Same day. <em>The red disappears.</em> The new hire self-onboards using the notebook — no interruptions. The experienced staff go deep on actual work because answering a reference question now takes a 3-second query instead of 10 minutes of searching."`,key:true},
      {text:`"<strong>The number I want you to hold onto:</strong> time-to-productive for a new hire goes from days to Day 1."`,key:true},
    ]},
  ]},
  // Slide 4 — Features
  {time:'3 min',sections:[
    {label:'What it is',lines:[
      {text:`"So what is NotebookLM, mechanically? You connect your documents — Sheets, Docs, PDFs, Drive files — and it becomes an AI that knows only what's in those files. Nothing else. No internet. No external data."`,key:false},
      {text:`"You ask plain English questions. It answers with citations linking to the exact source."`,key:false},
    ]},
    {label:'Citations',cues:['→ Click the "Inline Citations" card'],lines:[
      {text:`"This is the feature I keep coming back to. Every answer has a footnote. Click it, and you land on the exact row in the spreadsheet or paragraph in the doc. Any team member can verify any answer in one click — <em>no manual fact-checking, no trusting the AI blindly.</em>"`,key:true},
    ]},
    {label:'Privacy',cues:['→ Click "Fully Private" — especially if owner has concerns'],lines:[
      {text:`"Your data never leaves your Workspace. Google has explicitly stated it is never used to train their models. The same security you already trust for Drive governs this."`,key:true},
    ]},
    {label:'Other features',cues:['→ Mention Team Collaboration and Studio if time allows'],lines:[
      {text:`"And if we have time — Team Collaboration lets us share notebooks exactly like a Google Doc, with Welcome Notes that onboard new staff the moment they open it. Studio auto-generates audio overviews, FAQs, and briefing docs — all from our own files."`,key:false},
    ]},
  ]},
  // Slide 5 — The Problem
  {time:'2 min',sections:[
    {label:'Naming the cost',lines:[
      {text:`"Let me name what we're actually solving — because it has a real cost."`,key:false},
      {text:`"Our team spends 3 to 5 hours per person per week searching for information that already exists. The general AI tools they might reach for instead — ChatGPT, Gemini — carry a different risk: <em>they fabricate confident-sounding answers.</em> For a brand decision, that's a liability."`,key:true},
    ]},
    {label:'Live counter',cues:['→ Point to the live counter in the bottom right'],lines:[
      {text:`"That counter is running in real time. It's calculating hours lost across five staff members since Monday, based on the 4-hour weekly average. <strong>Watch it climb.</strong>"`,key:true},
      {text:`"This is what not having a tool costs. Every week. Compounding."`,key:false},
    ]},
  ]},
  // Slide 6 — Live Demo
  {time:'3 min',sections:[
    {label:'Setup',lines:[
      {text:`"Now I want to show you this on our actual files. I've connected three documents: our Brand Behavior sheet, the Listings Ops Tasks, and the Reference Tables."`,key:false},
    ]},
    {label:'Demo',cues:['→ Click "ASICS Brand" preset'],lines:[
      {text:`"That question — 'What is the brand behavior of ASICS?' — is one our team manually looks up regularly. <em>Three seconds. Cited. The footnote links straight to the source row.</em>"`,key:true},
    ]},
    {label:'Explore',cues:['→ Try a second preset or type a custom query','→ Point the owner to the Q&A panel — let them ask directly'],lines:[
      {text:`"This isn't a rehearsed demo on fake data. <strong>These are our files. That's what I want you to see.</strong>"`,key:true},
    ]},
  ]},
  // Slide 7 — Findings
  {time:'1.5 min',sections:[
    {label:'The numbers',lines:[
      {text:`"Here's what the numbers looked like from that session."`,key:false},
      {text:`"Every response matched the source exactly — no fabricated details, no external contamination. Answer time under 3 seconds. Zero hallucinations — when it couldn't find something, it said so rather than guessing."`,key:false},
      {text:`"The 85% research time saving is a projection. <em>Even half that number is meaningful</em> — recovered hours, weekly, compounding across the whole team."`,key:true},
    ]},
  ]},
  // Slide 8 — Adoption Argument
  {time:'2 min',sections:[
    {label:'Why NotebookLM',cues:['→ Point to the comparison table'],lines:[
      {text:`"I want to address the 'why this tool, why now' question directly."`,key:false},
      {text:`"The risk with general AI is structural — no source control, fabricated answers, no trust path. NotebookLM eliminates every one of those risks by design. It can only answer from what you give it. <em>One-click verification. Plain English. Zero training required.</em>"`,key:true},
    ]},
    {label:'Why us',cues:['→ Point to the four "why" cells below'],lines:[
      {text:`"The reason I'm recommending this as our first AI move is that it requires nothing new — no migration, no IT project, no new contracts. We already use Workspace. <strong>This plugs directly into what we have.</strong>"`,key:true},
    ]},
    {label:'Ticker',cues:['→ Point to the ticker at the bottom — let them read it'],lines:[
      {text:`"That's a live feed of the AI adoption reality we're operating inside. Companies moving now are building advantages that compound. The groundwork is done. I've already validated it. <em>The question is whether we move forward together.</em>"`,key:true},
    ]},
  ]},
  // Slide 9 — Summary
  {time:'1.5 min',sections:[
    {label:'Findings',lines:[
      {text:`"So here's where I land."`,key:false},
      {text:`"The findings are clean: accurate answers, dramatically faster retrieval, minimal learning curve, AI-surfaced follow-ups accelerating discovery."`,key:false},
    ]},
    {label:'Recommendations',lines:[
      {text:`"Start this week — create the first shared notebook from our brand operations files. Assign one champion — someone who owns it and helps the team get started. Measure for four weeks — track time saved, let the data speak. Then expand — onboarding, SOPs, cross-team knowledge bases."`,key:false},
      {text:`"The ask today isn't a budget approval or a six-month project. <strong>It's permission to move forward with something we already have access to, that I've already tested, and that I believe will save this team real time from day one.</strong>"`,key:true},
      {text:`"Happy to take any questions."`,key:false},
    ]},
    {label:'If they object…',lines:[
      {text:`<em>Data safety?</em> → Covered on Slide 4: never used to train models, stays in Workspace.`,key:false},
      {text:`<em>Still sounds risky?</em> → Ask them to watch the citation. Every answer verifiable in one click.`,key:false},
      {text:`<em>Just ChatGPT?</em> → ChatGPT makes things up. NotebookLM refuses to answer what it can't source.`,key:false},
      {text:`<em>How long to set up?</em> → Afternoon project. No IT. Under 30 minutes to connect files and share.`,key:false},
    ]},
  ]},
];

function renderScript(n){
  const s=SCRIPT[n];if(!s)return;
  document.getElementById('spSlideNum').textContent=String(n+1).padStart(2,'0');
  document.getElementById('spSlideName').textContent=NAMES[n];
  document.getElementById('spTimer').textContent=s.time;
  const body=document.getElementById('spBody');
  body.innerHTML=s.sections.map(sec=>{
    const cues=sec.cues?sec.cues.map(c=>`<div class="sp-cue"><span class="sp-cue-arrow">→</span>${c}</div>`).join(''):'';
    const lines=sec.lines.map(l=>`<div class="sp-line${l.key?' key':''}">${l.text}</div>`).join('');
    return`<div class="sp-section">
      <div class="sp-section-lbl">${sec.label}</div>
      ${cues}${lines}
    </div>`;
  }).join('');
  body.scrollTop=0;
}

let scriptOpen=false;
function toggleScript(){
  scriptOpen=!scriptOpen;
  document.getElementById('scriptPanel').classList.toggle('open',scriptOpen);
  document.getElementById('scriptToggle').classList.toggle('active',scriptOpen);
}

