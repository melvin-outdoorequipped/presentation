// Slides Content Module

const SLIDES_HTML = [
  // Slide 1
  `<div class="slide" data-slide="1">
        <div style="flex-shrink:0;">
          <div class="tag">The AI Moment<span class="tag-dot"></span></div>
          <div class="h-display">We are living inside<br>the <em>window of opportunity.</em></div>
          <p class="sub" style="margin-bottom:0;">The adoption curve is not waiting. Companies moving now build structural advantages that become very expensive for late movers to close.</p>
        </div>
        <div class="ai-moment-grid">
          <div>
            <div class="curve-wrap">
              <div class="curve-label">TECHNOLOGY ADOPTION CURVE</div>
              <canvas id="adoptionCanvas" height="200"></canvas>
              <div class="curve-legend">
                <div class="cl-item"><div class="cl-dot" style="background:#e07272;"></div>Innovators</div>
                <div class="cl-item"><div class="cl-dot" style="background:#e4b84a;"></div>Early Adopters</div>
                <div class="cl-item"><div class="cl-dot" style="background:#63d296;"></div>Early Majority ← We are here</div>
                <div class="cl-item"><div class="cl-dot" style="background:rgba(255,255,255,0.2);"></div>Late Majority / Laggards</div>
              </div>
            </div>
            <div class="window-banner" style="margin-top:9px;">
              <div class="wb-pulse"></div>
              <div class="wb-text">The <strong>Early Majority window</strong> is open right now. Companies in this phase gain structural advantages — lower cost, faster learning, first-mover trust. Late movers pay a premium and catch up, never lead.</div>
            </div>
          </div>
          <div class="moment-stats" id="momentStats">
            <div class="mstat"><div class="mstat-label">Global AI Adoption Rate</div><div class="mstat-num green" data-target="72">0</div><div class="mstat-desc">% of enterprises now actively using AI in at least one business function — up from 20% just 4 years ago</div></div>
            <div class="mstat"><div class="mstat-label">Productivity Gain</div><div class="mstat-num green" data-target="40">0</div><div class="mstat-desc">% average productivity improvement reported by teams using AI-assisted knowledge retrieval</div></div>
            <div class="mstat"><div class="mstat-label">Knowledge Worker Time Lost</div><div class="mstat-num amber" data-target="19">0</div><div class="mstat-desc">% of a typical workday spent searching for information that already exists inside the company</div></div>
            <div class="mstat"><div class="mstat-label">Cost of Waiting</div><div class="mstat-num red">↑</div><div class="mstat-desc">Every month without AI tools is a month of compounding disadvantage vs. competitors already using them</div></div>
          </div>
        </div>
      </div>

      <!-- ═══ SLIDE 3: DAY IN THE LIFE ═══ -->
      `,

  // Slide 2
  `<div class="slide" data-slide="2">
        <div style="flex-shrink:0;margin-bottom:12px;">
          <div class="tag">Before vs. After<span class="tag-dot"></span></div>
          <div class="h-display" style="font-size:2rem;margin-bottom:4px;">The same team.<br><em>Two very different days.</em></div>
          <p class="sub" style="margin-bottom:7px;font-size:0.8rem;">Toggle to see how the same workday looks — with and without NotebookLM running on our files.</p>
        </div>
        <div class="day-toggle-row">
          <button class="day-toggle-btn active-bad" id="btnBefore" onclick="showDay('before')">✕ Without NotebookLM</button>
          <button class="day-toggle-btn" id="btnAfter" onclick="showDay('after')">✓ With NotebookLM</button>
        </div>
        <div class="day-view active" id="dayBefore">
          <div class="day-header-row">
            <div class="dhr-lbl"></div><div class="dhr-lbl">9am</div><div class="dhr-lbl">10am</div><div class="dhr-lbl">11am</div>
            <div class="dhr-lbl">12pm</div><div class="dhr-lbl">1pm</div><div class="dhr-lbl">2pm</div><div class="dhr-lbl">3pm</div><div class="dhr-lbl">4pm</div>
          </div>
          <div class="day-person">
            <div class="dp-name">Listings</div>
            <div class="dp-block work"><div class="dp-block-label">Listing review</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Brand rules</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Still searching</div></div>
            <div class="dp-block meeting"><div class="dp-block-label">Meeting</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 SKU format</div></div>
            <div class="dp-block work"><div class="dp-block-label">Actual work</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Ops check</div></div>
            <div class="dp-block idle"><div class="dp-block-label">Overrun</div></div>
          </div>
          <div class="day-person">
            <div class="dp-name">Brand Ops</div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Finding doc</div></div>
            <div class="dp-block work"><div class="dp-block-label">Updating sheet</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Brand behavior?</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Asking around</div></div>
            <div class="dp-block meeting"><div class="dp-block-label">Meeting</div></div>
            <div class="dp-block search"><div class="dp-block-label">🔍 Can't find ref</div></div>
            <div class="dp-block work"><div class="dp-block-label">Actual work</div></div>
            <div class="dp-block idle"><div class="dp-block-label">Behind</div></div>
          </div>
          <div class="day-person">
            <div class="dp-name">New Hire</div>
            <div class="dp-block idle"><div class="dp-block-label">Waiting for access</div></div>
            <div class="dp-block idle"></div>
            <div class="dp-block search span2"><div class="dp-block-label">🔍 Asking senior staff — interrupting their work</div></div>
            <div class="dp-block idle"><div class="dp-block-label">Confused</div></div>
            <div class="dp-block search span2"><div class="dp-block-label">🔍 Searching old files</div></div>
            <div class="dp-block idle"><div class="dp-block-label">Unproductive</div></div>
          </div>
          <div class="day-summary-row">
            <div class="dsumm"><div class="dsumm-num" style="color:var(--red);">~4 hrs</div><div class="dsumm-lbl">Lost per person searching</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--red);">3×</div><div class="dsumm-lbl">Team members interrupted</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--red);">High</div><div class="dsumm-lbl">Risk of inconsistent answers</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--red);">Slow</div><div class="dsumm-lbl">New hire time-to-productive</div></div>
          </div>
        </div>
        <div class="day-view" id="dayAfter">
          <div class="day-header-row">
            <div class="dhr-lbl"></div><div class="dhr-lbl">9am</div><div class="dhr-lbl">10am</div><div class="dhr-lbl">11am</div>
            <div class="dhr-lbl">12pm</div><div class="dhr-lbl">1pm</div><div class="dhr-lbl">2pm</div><div class="dhr-lbl">3pm</div><div class="dhr-lbl">4pm</div>
          </div>
          <div class="day-person">
            <div class="dp-name">Listings</div>
            <div class="dp-block work span2"><div class="dp-block-label">Listing review + updates</div></div>
            <div class="dp-block nb"><div class="dp-block-label">⚡ NB query</div></div>
            <div class="dp-block meeting"><div class="dp-block-label">Meeting</div></div>
            <div class="dp-block work span3"><div class="dp-block-label">Deep work — focused output</div></div>
            <div class="dp-block work"><div class="dp-block-label">Done early</div></div>
          </div>
          <div class="day-person">
            <div class="dp-name">Brand Ops</div>
            <div class="dp-block nb"><div class="dp-block-label">⚡ NB query</div></div>
            <div class="dp-block work span3"><div class="dp-block-label">Brand compliance — uninterrupted</div></div>
            <div class="dp-block meeting"><div class="dp-block-label">Meeting</div></div>
            <div class="dp-block work span2"><div class="dp-block-label">Strategic work</div></div>
            <div class="dp-block work"><div class="dp-block-label">Finished</div></div>
          </div>
          <div class="day-person">
            <div class="dp-name">New Hire</div>
            <div class="dp-block nb"><div class="dp-block-label">⚡ Self-onboards via NB</div></div>
            <div class="dp-block work span3"><div class="dp-block-label">Contributing independently — zero interruptions to senior staff</div></div>
            <div class="dp-block meeting"><div class="dp-block-label">Meeting</div></div>
            <div class="dp-block work span3"><div class="dp-block-label">Productive output on Day 1</div></div>
          </div>
          <div class="day-summary-row">
            <div class="dsumm"><div class="dsumm-num" style="color:var(--g);">~10 min</div><div class="dsumm-lbl">Avg time to find any answer</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--g);">0×</div><div class="dsumm-lbl">Senior staff interrupted</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--g);">Zero</div><div class="dsumm-lbl">Risk of inconsistent answers</div></div>
            <div class="dsumm"><div class="dsumm-num" style="color:var(--g);">Day 1</div><div class="dsumm-lbl">New hire productive immediately</div></div>
          </div>
        </div>
      </div>

      <!-- ═══ SLIDE 4: FEATURES ═══ -->
      `,

  // Slide 3
  `<div class="slide" data-slide="3">
        <div style="flex-shrink:0;">
          <div class="tag">System Capabilities<span class="tag-dot"></span></div>
          <div class="h-display">NotebookLM turns your docs<br>into <em>AI that knows your business.</em></div>
          <p class="sub">Connect your files. Ask plain English. Get verified answers with citations. Click any module to explore with screenshots.</p>
        </div>
        <div class="features-grid" id="featGrid"></div>
      </div>

      <!-- ═══ SLIDE 5: THE PROBLEM ═══ -->
      `,

  // Slide 4
  `<div class="slide" data-slide="4">
        <div style="flex-shrink:0;">
          <div class="tag">The Business Problem<span class="tag-dot"></span></div>
          <div class="h-display">Your team has the answers.<br>They can't <em>find them fast enough.</em></div>
          <p class="sub" style="margin-bottom:0;">Information buried across dozens of files. AI tools that make things up. Knowledge walking out when staff leave.</p>
        </div>
        <div class="prob-grid">
          <div class="prob-list" id="probList">
            <div class="prob-item"><div class="prob-dot"></div><span>General AI tools like ChatGPT fabricate confident-sounding answers — a direct liability for brand and operations decisions.</span></div>
            <div class="prob-item"><div class="prob-dot"></div><span>Staff spend 3–5 hours per week manually searching Sheets, Docs, and Drive for information that already exists.</span></div>
            <div class="prob-item"><div class="prob-dot"></div><span>When team members leave, institutional knowledge leaves with them. New staff onboarding is slow and error-prone.</span></div>
            <div class="prob-item"><div class="prob-dot"></div><span>Inconsistent answers across the team lead to operational errors and brand standard violations.</span></div>
          </div>
          <div>
            <div class="cost-card">
              <div class="cost-title">Cost to Your Business</div>
              <div class="cost-row"><div class="cost-num">3–5 hrs</div><div class="cost-desc">Wasted per person per week on information retrieval that could be instant</div></div>
              <div class="cost-row"><div class="cost-num">↑ Errors</div><div class="cost-desc">When staff rely on memory or hallucinating AI for brand decisions</div></div>
              <div class="cost-row"><div class="cost-num">Lost</div><div class="cost-desc">Institutional knowledge every time a valued team member exits</div></div>
            </div>
            <div class="live-counter-box" style="margin-top:9px;">
              <div class="lc-icon">⏱</div>
              <div class="lc-content">
                <div class="lc-label">Hours Lost This Week — Across 5 Staff</div>
                <div class="lc-number" id="liveCounter">0.0</div>
                <div class="lc-sub">Counting in real time · resets Monday · based on 4hr/week average</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ SLIDE 6: DEMO ═══ -->
      `,

  // Slide 5
  `<div class="slide" data-slide="5" style="gap:9px;">
        <div style="flex-shrink:0;">
          <div class="tag">Interactive Demo<span class="tag-dot"></span></div>
          <div class="h-display" style="font-size:1.85rem;margin-bottom:4px;">See it work — <em>live, on real data.</em></div>
          <p class="sub" style="margin-bottom:0;font-size:0.78rem;">Sources left · NotebookLM simulation centre · Q&A right</p>
        </div>
        <div class="explorer-grid">
          <div class="ai-panel">
            <div class="ap-header"><div class="lpulse"></div><div class="ap-title">Connected Sources</div><div class="ap-badge">2 DOCS</div></div>
            <div class="src-list">
              <div class="src-section-lbl">Company Documents</div>
              <div class="src-chip"><div class="src-ico">📊</div>Exclusive/Ops Brand Behavior — Instructions</div>
              <div class="src-chip"><div class="src-ico">📄</div>Listings Team Reference Tables</div>
            </div>
            <div class="qq-wrap">
              <div class="qq-lbl">Ask the Q&A Panel →</div>
              <div class="qq-item" data-q="What makes NotebookLM different from ChatGPT?"><span class="qq-arr">›</span>NotebookLM vs ChatGPT?</div>
              <div class="qq-item" data-q="Is our company data safe with NotebookLM?"><span class="qq-arr">›</span>Is our data safe?</div>
              <div class="qq-item" data-q="What is the cost of NotebookLM for a business?"><span class="qq-arr">›</span>What does it cost?</div>
              <div class="qq-item" data-q="How would our brand operations team use NotebookLM day-to-day?"><span class="qq-arr">›</span>How does our team use it?</div>
              <div class="qq-item" data-q="How quickly can we get NotebookLM running for our team?"><span class="qq-arr">›</span>How fast can we start?</div>
            </div>
          </div>
          <div class="sim-panel">
            <div class="ap-header">
              <div class="lpulse" style="background:var(--amber);"></div>
              <div class="ap-title" style="color:var(--amber);">NotebookLM Simulation</div>
              <div class="ap-badge" style="color:var(--amber);border-color:rgba(228,184,74,0.28);background:rgba(228,184,74,0.05);">REAL DATA</div>
            </div>
            <div style="padding:6px 9px;border-bottom:1px solid var(--bdr);display:flex;gap:5px;flex-shrink:0;background:var(--s2);">
              <button onclick="runSim('asics')" style="padding:3px 9px;background:rgba(228,184,74,0.07);border:1px solid rgba(228,184,74,0.17);border-radius:3px;color:rgba(228,184,74,0.8);font-family:var(--font-m);font-size:0.5rem;letter-spacing:0.09em;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(228,184,74,0.14)'" onmouseout="this.style.background='rgba(228,184,74,0.07)'">ASICS BRAND</button>
              <button onclick="runSim('sku')" style="padding:3px 9px;background:rgba(228,184,74,0.07);border:1px solid rgba(228,184,74,0.17);border-radius:3px;color:rgba(228,184,74,0.8);font-family:var(--font-m);font-size:0.5rem;letter-spacing:0.09em;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(228,184,74,0.14)'" onmouseout="this.style.background='rgba(228,184,74,0.07)'">SKU FORMAT</button>
            </div>
            <div class="sim-screen" id="simScreen">
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:7px;opacity:0.3;">
                <div style="font-size:1.6rem;">🔍</div>
                <div style="font-family:var(--font-m);font-size:0.54rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);">Select a preset or type a query</div>
              </div>
            </div>
            <div class="sim-input-row">
              <input class="sim-in" id="simIn" placeholder="Type any query and press Enter…"/>
              <button class="sim-btn" onclick="runSim()">Run →</button>
            </div>
          </div>
          <div class="ai-panel">
            <div class="ap-header"><div class="lpulse"></div><div class="ap-title">Q&A — Ask Anything</div><div class="ap-badge">LIVE</div></div>
            <div class="chat-msgs" id="chatMsgs">
              <div class="cmsg ai"><div class="cmsg-lbl">Assistant</div><div class="cmsg-bubble">Ask me anything about NotebookLM — how it works, privacy, cost, or how your team could use it. Or click a quick question on the left.</div></div>
            </div>
            <div class="chat-input-row">
              <input class="chat-in" id="chatIn" placeholder="Ask about NotebookLM…"/>
              <button class="chat-send" id="sendBtn" onclick="sendChat()">Ask →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ SLIDE 7: FINDINGS ═══ -->
      `,

  // Slide 6
  `<div class="slide" data-slide="6">
        <div style="flex-shrink:0;">
          <div class="tag">Pilot Results<span class="tag-dot"></span></div>
          <div class="h-display">What I found after<br><em>one hands-on session.</em></div>
          <p class="sub">ASICS brand behavior test: three internal documents, one plain English query, zero hallucinations.</p>
        </div>
        <div class="findings-grid">
          <div class="fc"><div class="fc-num" data-count="100" data-suffix="%">0%</div><div class="fc-title">Accuracy Verified</div><div class="fc-desc">Every response matched source data exactly. No fabricated details, no external contamination.</div></div>
          <div class="fc"><div class="fc-num">3 sec</div><div class="fc-title">Time to Answer</div><div class="fc-desc">From query to verified, cited response — vs. 5–10 minutes of manual searching across files.</div></div>
          <div class="fc"><div class="fc-num">Zero</div><div class="fc-title">Hallucinations</div><div class="fc-desc">NotebookLM declined to answer what it couldn't source. No confident wrong answers.</div></div>
          <div class="fc"><div class="fc-num" data-count="85" data-suffix="%">0%</div><div class="fc-title">Research Time Saved</div><div class="fc-desc">Projected reduction in time staff spend searching for operational information. Even half is meaningful.</div></div>
          <div class="fc"><div class="fc-num">3+</div><div class="fc-title">AI-Suggested Follow-ups</div><div class="fc-desc">AI automatically surfaced related questions — accelerating knowledge discovery beyond the original query.</div></div>
          <div class="fc"><div class="fc-num">Free</div><div class="fc-title">Cost to Start</div><div class="fc-desc">Included with existing Google Workspace. No new contracts, no licences, no IT project.</div></div>
        </div>
      </div>

      <!-- ═══ SLIDE 8: ADOPTION ARGUMENT ═══ -->
      `,

  // Slide 7
  `<div class="slide" data-slide="7" style="position:relative;padding-bottom:38px;">
        <div style="flex-shrink:0;margin-bottom:11px;">
          <div class="tag">The Adoption Argument<span class="tag-dot"></span></div>
          <div class="h-display" style="font-size:1.85rem;margin-bottom:4px;">Companies ignoring AI tools pay a <em>hidden tax</em> in lost time.</div>
          <p class="sub" style="margin-bottom:0;font-size:0.78rem;">Why NotebookLM is the right first AI move — low risk, high trust, immediate value from tools we already use.</p>
        </div>
        <div class="compare-grid" id="compareGrid">
          <div class="cmp-col bad">
            <div class="cmp-head">✕ Standard AI (ChatGPT / Gemini)</div>
            <div class="cmp-item"><span class="ci" style="color:var(--red)">✕</span>No source attribution — answers come from anywhere</div>
            <div class="cmp-item"><span class="ci" style="color:var(--red)">✕</span>Fabricates confident-sounding wrong information</div>
            <div class="cmp-item"><span class="ci" style="color:var(--red)">✕</span>Uses external training data — privacy exposure risk</div>
            <div class="cmp-item"><span class="ci" style="color:var(--red)">✕</span>Team can't verify outputs — trust gap remains</div>
            <div class="cmp-item"><span class="ci" style="color:var(--red)">✕</span>Requires prompt engineering knowledge to use well</div>
          </div>
          <div class="cmp-col good">
            <div class="cmp-head">✓ NotebookLM</div>
            <div class="cmp-item"><span class="ci" style="color:var(--g)">✓</span>Every answer cites the exact source row or paragraph</div>
            <div class="cmp-item"><span class="ci" style="color:var(--g)">✓</span>Refuses to answer beyond provided sources — zero fabrication</div>
            <div class="cmp-item"><span class="ci" style="color:var(--g)">✓</span>Data never used to train models — fully private</div>
            <div class="cmp-item"><span class="ci" style="color:var(--g)">✓</span>One-click verification — complete team confidence</div>
            <div class="cmp-item"><span class="ci" style="color:var(--g)">✓</span>Plain English questions — zero training required</div>
          </div>
        </div>
        <div class="why-row" style="margin-top:9px;">
          <div class="wr-cell hi"><div class="wr-lbl">Why Now</div><div class="wr-title" style="font-size:0.76rem;">The moment is right</div><div class="wr-detail">AI adoption is no longer optional. Companies starting now build compounding advantages. This is the lowest-risk entry point available.</div></div>
          <div class="wr-cell"><div class="wr-lbl">Why This Tool</div><div class="wr-title" style="font-size:0.76rem;">Fits our stack already</div><div class="wr-detail">We already use Google Workspace. NotebookLM connects directly — zero migration, zero IT involvement, no new contracts.</div></div>
          <div class="wr-cell"><div class="wr-lbl">Why It Works</div><div class="wr-title" style="font-size:0.76rem;">Proven on our own data</div><div class="wr-detail">100% accurate, cited results — tested on our actual brand behavior documents. Not a marketing claim.</div></div>
          <div class="wr-cell"><div class="wr-lbl">Why Us</div><div class="wr-title" style="font-size:0.76rem;">We lead, team follows</div><div class="wr-detail">Leadership-led adoption is the fastest path to company-wide change. The groundwork is done. Now we move together.</div></div>
        </div>
      </div>

      <!-- ═══ SLIDE 9: SUMMARY ═══ -->
      `,

  // Slide 8
  `<div class="slide" data-slide="8">
        <div style="flex-shrink:0;">
          <div class="tag">Summary & Recommendations<span class="tag-dot"></span></div>
          <div class="h-display">Our verdict after<br><em>hands-on exploration.</em></div>
          <p class="sub">What I found, what I believe, and what I recommend we do next.</p>
        </div>
        <div class="summary-grid">
          <div class="summary-block">
            <div class="sb-header"><div class="sb-dot" style="background:var(--g);box-shadow:0 0 9px rgba(99,210,150,0.4);"></div><div class="sb-title">Key Findings from the Pilot</div></div>
            <div class="rec-list">
              <div class="rec-item"><span class="rec-num">01</span>100% accurate, cited responses from our internal brand operations documents — zero hallucinations in every test.</div>
              <div class="rec-item"><span class="rec-num">02</span>Answer time dropped from ~8 minutes of manual searching to under 3 seconds — with a clickable citation to the exact source.</div>
              <div class="rec-item"><span class="rec-num">03</span>Any team member can ask plain English questions from day one — minimal learning curve, maximum adoption potential.</div>
              <div class="rec-item"><span class="rec-num">04</span>AI automatically surfaced follow-up questions we hadn't thought to ask — accelerating knowledge discovery.</div>
            </div>
          </div>
          <div class="summary-block">
            <div class="sb-header"><div class="sb-dot" style="background:var(--amber);box-shadow:0 0 9px rgba(228,184,74,0.4);"></div><div class="sb-title">Our Recommendations</div></div>
            <div class="next-timeline">
              <div class="nt-item"><div class="nt-line"><div class="nt-dot"></div><div class="nt-connector"></div></div><div class="nt-content"><div class="nt-week">This Week</div><div class="nt-action">Create the first shared notebook</div><div class="nt-detail">Connect Brand Behavior + Listings Ops files. Share with the team. Under 30 minutes.</div></div></div>
              <div class="nt-item"><div class="nt-line"><div class="nt-dot"></div><div class="nt-connector"></div></div><div class="nt-content"><div class="nt-week">Immediately After</div><div class="nt-action">Assign one champion</div><div class="nt-detail">Designate one team member to own setup, upkeep, and internal training.</div></div></div>
              <div class="nt-item"><div class="nt-line"><div class="nt-dot"></div><div class="nt-connector"></div></div><div class="nt-content"><div class="nt-week">Weeks 1–4</div><div class="nt-action">Measure impact</div><div class="nt-detail">Track time saved weekly. The data will make the case for expansion automatically.</div></div></div>
              <div class="nt-item"><div class="nt-line"><div class="nt-dot" style="border-color:var(--amber);background:rgba(228,184,74,0.1);"></div></div><div class="nt-content"><div class="nt-week">Month 2+</div><div class="nt-action">Expand iteratively</div><div class="nt-detail">Onboarding, SOPs, cross-team knowledge bases — the pattern repeats and compounds.</div></div></div>
            </div>
          </div>
        </div>
        <div class="cta-bar">
          <div style="font-size:1.7rem;flex-shrink:0;">🚀</div>
          <div>
            <div style="font-family:var(--font-t);font-size:0.68rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--g);margin-bottom:3px;">The ask today</div>
            <div style="font-size:0.8rem;color:var(--text);line-height:1.6;">Not a budget approval or a six-month project. <strong style="color:var(--g);">Permission to move forward</strong> with something we already have access to, that I've already tested, and that will save this team real time from day one.</div>
          </div>
        </div>
      </div>

    `,

];

// Load slides into container
function loadSlides() {
  const container = document.getElementById('slidesArea');
  if (container) {
    SLIDES_HTML.forEach(html => {
      container.insertAdjacentHTML('beforeend', html);
    });
  }
}
