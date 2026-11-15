const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update src/js/05a-templates-aas1.js
const file05a = path.join(rootDir, 'src/js/05a-templates-aas1.js');
let content05a = fs.readFileSync(file05a, 'utf8');

// Replace renderLessonContentTabSession2
const s2FunctionCode = `    function renderLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};

      const drills = [
        {
          id: "s2e1",
          title: "Drill 2.1 — Toulouse Delivery (LFBO): Full IFR Route Clearance",
          freq: "121.700 MHz",
          template: "EasyJet {{4521|flight number}}, cleared to {{Geneva|destination}} via {{FISTO 6N/FISTO6N|SID}} departure, Runway {{32L/32 Left|runway}}. Initial climb {{5000|altitude}} feet. Squawk {{5314|4 digits}}. Report ready for {{pushback/push back|maneuver}} on Ground {{121.900/121.9|frequency}}.",
          spoken: "EasyJet four five two one, cleared to Geneva via Fisto six November departure, runway three two left. Initial climb five thousand feet. Squawk five three one four. Report ready for pushback on Ground one two one decimal niner zero zero.",
          mcq: {
            q: "Which items MUST EasyJet 4521 read back in full?",
            opts: ["Only the destination and frequency", "Route/SID, Runway, initial climb altitude, and squawk code", "Only 'Roger, EasyJet 4521'"],
            ans: 1
          }
        },
        {
          id: "s2e2",
          title: "Drill 2.2 — Ground Control: Pushback, Startup & Slot Delay (TSAT)",
          freq: "121.900 MHz",
          template: "Lufthansa 1083, negative pushback at this time due to {{slot|ATFM reason}}; your CTOT is {{1145|time}} UTC, TSAT {{1125|time}}. Expect {{5/five|number}} minute delay. Maintain listening watch; I will call you for {{startup/start up|engine action}} and pushback facing {{west|direction}}.",
          spoken: "Lufthansa one zero eight three, negative pushback at this time due to slot; your CTOT is one one four five UTC, TSAT one one two five. Expect five minute delay. Maintain listening watch; I will call you for startup and pushback facing west.",
          mcq: {
            q: "What should Lufthansa 1083 do now?",
            opts: ["Start engines immediately and wait on stand", "Wait on stand and monitor Ground until called at TSAT 1125", "Push back facing east without calling"],
            ans: 1
          }
        },
        {
          id: "s2e3",
          title: "Drill 2.3 — Complex Taxi Route & Mandatory Hold Short",
          freq: "121.850 MHz",
          template: "Speedbird {{348|callsign}}, taxi to holding point {{M1/Mike 1|point}} Runway {{27R/27 Right|runway}} via Taxiway {{November|letter}}, {{Sierra|letter}}, and {{Mike|letter}}. Give way to the {{Airbus A350/A350|aircraft}} passing left to right on November. {{Hold short|2 words}} of Runway 27R.",
          spoken: "Speedbird three four eight, taxi to holding point Mike one, runway two seven right, via taxiway November, Sierra, and Mike. Give way to the Airbus A three five zero passing left to right on November. Hold short of runway two seven right.",
          mcq: {
            q: "Which taxiways must Speedbird 348 use in sequence?",
            opts: ["Mike, Sierra, November", "November, Sierra, Mike", "Alpha, Bravo, Mike"],
            ans: 1
          }
        },
        {
          id: "s2e4",
          title: "Drill 2.4 — Conditional Runway Crossing (Ground / Tower)",
          freq: "121.975 MHz",
          template: "Air France {{1142|flight}}, {{behind|condition}} the departing Ryanair {{737/B737|aircraft type}} on Runway {{09L/09 Left|runway}}, cross Runway 09L via {{Kilo|taxiway}} {{behind|repeat word}}, and continue to Stand {{B12/Bravo 12|stand}}.",
          spoken: "Air France one one four two, behind the departing Ryanair seven three seven on runway zero niner left, cross runway zero niner left via Kilo behind, and continue to stand Bravo one two.",
          mcq: {
            q: "Why does the controller state 'behind' at both the start and end of the clearance?",
            opts: ["Standard ICAO rule to eliminate ambiguity in conditional clearances", "Because the aircraft is already behind the terminal", "To request the aircraft to reverse on Kilo"],
            ans: 0
          }
        }
      ];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AAS Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Ground Control, Pushback &amp; Taxi Clearances</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/aas_m1card2.jpg'}" alt="Ground Movement Control" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">SURFACE &amp; TERMINAL COMMUNICATIONS • ATC RADIOTELEPHONY</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Ground Control, Pushback &amp; Taxi Clearances'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Clearance Delivery, Pushback Authorization, Complex Taxi Routes, Hold-Short &amp; Conditional Clearances'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Aerodrome Ground Controller / Flight Crew (A320/B737)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Aviation News & Ground Movement Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Aviation News &amp; Ground Movement Terminology Retrieval</h4>
                  <p class="text-[11px] text-slate-500">Runway incursion prevention, slot management &amp; core Ground radiotelephony</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening &amp; Warm-Up</span>
            </div>

            <!-- Discussion Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Key Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                <li>What is the operational difference between <strong>TSAT</strong> (Target Startup Approval Time) and <strong>CTOT</strong> (Calculated Takeoff Time)?</li>
                <li>Why does ICAO mandate verbatim readbacks for <em>runway holding points</em>, <em>runway crossings</em>, and <em>altimeter settings</em>?</li>
                <li>How do conditional clearances ("Behind the landing A320...") introduce safety risks if not properly repeated?</li>
              </ul>
            </div>
          </div>

          <!-- Part 2: Cockpit VHF Listening Lab -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Ground &amp; Delivery Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic clearances, complete the transcript gap-fills, and analyze operational decisions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              \${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Phraseology Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Operational Analysis &amp; Phraseology Clinic</h4>
                  <p class="text-[11px] text-slate-500">Golden rules for Ground Movement Control and runway incursion mitigation</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Golden Rules</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-200 text-blue-900">Rule 1 • The 'Behind' Sandwich</span>
                <h5 class="text-xs font-bold text-blue-950">Conditional Clearances</h5>
                <p class="text-xs text-blue-900/90 leading-relaxed">Always state the condition first <em>and</em> last: <em>"Behind landing B737, line up Runway 14R behind."</em> Never start with the action to avoid premature runway entry.</p>
              </div>

              <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">Rule 2 • Hold Short Discipline</span>
                <h5 class="text-xs font-bold text-emerald-950">Runway Protection</h5>
                <p class="text-xs text-emerald-900/90 leading-relaxed">An instruction to taxi to a holding point never authorizes entering or crossing a runway. If holding instructions are absent, stop before any runway intersection.</p>
              </div>

              <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-200 text-purple-900">Rule 3 • Slot Synchronization</span>
                <h5 class="text-xs font-bold text-purple-950">TSAT &amp; CTOT Management</h5>
                <p class="text-xs text-purple-900/90 leading-relaxed">Pushback startup is calibrated within a window of TSAT -5 / +5 minutes to meet the Eurocontrol CTOT window (-5 / +10 mins) at the departure threshold.</p>
              </div>
            </div>
          </div>

          <!-- Part 4: Communicative Pair Simulation & Readback Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Communicative Pair Simulation &amp; Readback Challenge</h4>
                  <p class="text-[11px] text-slate-500">Live pilot-controller roleplay: taxi clearance issuance, complex route tracing &amp; readback verification</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Student A Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-800">Student A • Ground Controller</span>
                  <span class="text-xs font-bold text-slate-500">Station: Toulouse Ground</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Issue Complex Taxi &amp; Crossing Instructions</h5>
                <p class="text-xs text-slate-700 leading-relaxed">Clear Air France 1452 from Stand 24 to Holding Point Mike 2, Runway 32L via Taxiway November and Sierra. Issue a conditional clearance behind an arriving A330 on Sierra before crossing.</p>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                  "Air France 1452, behind the arriving A330 passing right to left on Sierra, taxi to holding point Mike 2 via November, Sierra behind. Hold short of Runway 32L."
                </div>
              </div>

              <!-- Student B Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">Student B • Flight Crew (AFR1452)</span>
                  <span class="text-xs font-bold text-blue-600">Aircraft: A320</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Active Peer Verification Checklist</h5>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Read back conditional phrase with "behind" at start and end</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Verbatim repeat of taxiways: November, Sierra</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Mandatory readback of: <em>Holding Point Mike 2, Runway 32L, Hold Short</em></li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Standard ICAO callsign placed at the end of the readback</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Closing Review & Flashcards Link -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Session 2 Review:</span>
              <span class="text-slate-600 ml-1">Consolidate Ground Movement terms, TSAT/CTOT flow, and ICAO conditional clearance standards.</span>
            </div>
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: \${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      \`;
    }`;

// Replace renderLessonContentTabSession3
const s3FunctionCode = `    function renderLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};

      const drills = [
        {
          id: "s3e1",
          title: "Drill 3.1 — Agen Information (LFBA): Departure Advisory & Discretion",
          freq: "118.425 MHz",
          template: "Foxtrot Golf Sierra Echo Alpha, Agen {{Information|station callsign}}. Runway in use {{29|runway}}, surface wind {{270|degrees}} degrees {{11|knots}} knots. QNH {{1019|hPa}}. Reported traffic: one {{Cessna 172/C172|aircraft type}} on left {{downwind|circuit leg}} for touch-and-go. Runway 29 appears {{clear|state}}, backtrack and take off {{at your discretion|AFIS phrase}}.",
          spoken: "Foxtrot Golf Sierra Echo Alpha, Agen Information. Runway in use two niner, surface wind two seven zero degrees, one one knots. QNH one zero one niner. Reported traffic: one Cessna one seven two on left downwind for touch and go. Runway two niner appears clear, backtrack and take off at your discretion.",
          mcq: {
            q: "Did the AFIS officer clear F-GSEA for takeoff?",
            opts: ["Yes, unconditional takeoff clearance was issued", "No, AFIS cannot issue clearances; the pilot decides at their discretion", "Only after the Cessna lands"],
            ans: 1
          }
        },
        {
          id: "s3e2",
          title: "Drill 3.2 — Poitiers Information (LFBI): IFR Arrival & Surface Condition",
          freq: "120.350 MHz",
          template: "Airliner 402, Poitiers Information. Runway {{21|runway}} is wet; Runway Condition Code {{5/five|digit 0-6}}, 100 percent coverage, depth {{2/two|digit}} millimeters of water. Surface wind {{200|degrees}} degrees {{14|knots}} knots, QNH {{1007|hPa}}. No {{reported traffic|2 words}} in the circuit. Report {{final|circuit leg}} and runway {{vacated|state}}.",
          spoken: "Airliner four zero two, Poitiers Information. Runway two one is wet; Runway Condition Code five, one hundred percent coverage, depth two millimeters of water. Surface wind two zero zero degrees, one four knots, QNH one zero zero seven. No reported traffic in the circuit. Report final and runway vacated.",
          mcq: {
            q: "What does RWYCC 5 indicate about the runway?",
            opts: ["Standing snow/ice with poor braking", "Wet runway with good braking action", "Closed due to hydroplaning"],
            ans: 1
          }
        },
        {
          id: "s3e3",
          title: "Drill 3.3 — Avignon Information (LFMV): VFR Circuit Conflict & Overhead Join",
          freq: "122.600 MHz",
          template: "November 342 Juliet, Avignon Information. Caution, {{two/2|number}} aircraft currently in the right-hand circuit Runway {{35|runway}}: a PA28 turning {{base|leg}} and a helicopter operating {{east|compass direction}} of the runway below {{800|altitude}} feet. Wind {{340|degrees}} degrees {{09/9|knots}} knots. Join {{overhead|join type}} at 1,800 feet QNH {{1015|hPa}}.",
          spoken: "November three four two Juliet, Avignon Information. Caution, two aircraft currently in the right hand circuit runway three five: a PA two eight turning base and a helicopter operating east of the runway below eight hundred feet. Wind three four zero degrees, zero niner knots. Join overhead at one thousand eight hundred feet QNH one zero one five.",
          mcq: {
            q: "Where should N342J watch out for the helicopter?",
            opts: ["On final approach at 1,800 ft", "East of Runway 35 below 800 ft", "Taxiing on the main apron"],
            ans: 1
          }
        },
        {
          id: "s3e4",
          title: "Drill 3.4 — Coastal AFIS (Cherbourg): Runway Vehicle & Wind Check",
          freq: "119.850 MHz",
          template: "Foxtrot Hotel Mike Kilo Lima, Cherbourg Information. {{Stand by/standby|hold instruction}} on final — runway inspection {{vehicle|object}} still on Runway {{28|runway}}, expected to vacate in {{one/1|number}} minute. Wind check: {{310|degrees}} degrees {{19|knots}} knots, gusting {{26|knots}} knots. Confirm {{intentions/intention|pilot plans}}.",
          spoken: "Foxtrot Hotel Mike Kilo Lima, Cherbourg Information. Stand by on final — runway inspection vehicle still on runway two eight, expected to vacate in one minute. Wind check: three one zero degrees, one niner knots, gusting two six knots. Confirm intentions.",
          mcq: {
            q: "Why does the AFIS officer warn the arriving pilot?",
            opts: ["Because a runway inspection vehicle is still occupying Runway 28", "Because the airport just switched to Runway 10", "Because the radio failed"],
            ans: 0
          }
        }
      ];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AAS Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">AFIS &amp; Uncontrolled Aerodrome Traffic Information</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/aas_m1card3.jpg'}" alt="AFIS Operations" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">ADVISORY AERODROMES • AIRFIELD INFORMATION</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'AFIS &amp; Uncontrolled Aerodrome Traffic Information'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Aerodrome Flight Information Service, \\'At Your Discretion\\', RWYCC Surface Conditions &amp; VFR Circuit Separation'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">AFIS Officer (AFISO) / General Aviation &amp; Regional IFR Pilot</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Aviation News & AFIS Operational Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Aviation News &amp; AFIS Operational Principles</h4>
                  <p class="text-[11px] text-slate-500">Advisory communications, pilot decision authority &amp; uncontrolled airspace risks</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening &amp; Warm-Up</span>
            </div>

            <!-- Discussion Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Key Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                <li>Why is an AFIS officer legally prohibited from issuing clearances such as <em>"Cleared to land"</em> or <em>"Cleared for takeoff"</em>?</li>
                <li>What does the phrase <strong>"at your discretion"</strong> mean for the Pilot-in-Command?</li>
                <li>How does the ICAO Global Reporting Format (GRF) and Runway Condition Code (RWYCC 0–6) protect wet runway operations?</li>
              </ul>
            </div>
          </div>

          <!-- Part 2: Cockpit VHF Listening Lab -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — AFIS Aerodrome Advisory Broadcasts</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic AFIS transmissions, complete the gap-fills, and analyze advisory phraseology</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              \${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Legal Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Operational Analysis &amp; AFIS Legal Boundaries</h4>
                  <p class="text-[11px] text-slate-500">Distinguishing advisory information from air traffic control clearances</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Legal Boundaries</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-200 text-blue-900">Principle 1 • Information Only</span>
                <h5 class="text-xs font-bold text-blue-950">No Control Authority</h5>
                <p class="text-xs text-blue-900/90 leading-relaxed">AFIS delivers traffic information, weather observations, and aerodrome conditions. The pilot retains 100% legal authority for separation, takeoff, and landing timing.</p>
              </div>

              <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">Principle 2 • Surface Condition</span>
                <h5 class="text-xs font-bold text-emerald-950">RWYCC Matrix</h5>
                <p class="text-xs text-emerald-900/90 leading-relaxed">RWYCC 6 = Dry; RWYCC 5 = Wet (&le; 3mm water depth, good braking); RWYCC 2/1 = Standing water/ice (poor braking action).</p>
              </div>

              <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-200 text-purple-900">Principle 3 • Circuit Reports</span>
                <h5 class="text-xs font-bold text-purple-950">Standard Position Reports</h5>
                <p class="text-xs text-purple-900/90 leading-relaxed">Pilots report overhead join, downwind, turning base, final, and runway vacated to allow other aircraft to build mental situational awareness.</p>
              </div>
            </div>
          </div>

          <!-- Part 4: Spoken Simulation & AFIS Advisory Roleplay -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Spoken Simulation &amp; AFIS Advisory Roleplay</h4>
                  <p class="text-[11px] text-slate-500">Pair roleplay: AFIS Officer transmitting wind, runway state, and traffic advisory vs arriving pilot</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Student A Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-800">Student A • AFIS Officer</span>
                  <span class="text-xs font-bold text-slate-500">Station: Agen Information</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Transmit Aerodrome Advisory</h5>
                <p class="text-xs text-slate-700 leading-relaxed">Provide Runway 29 information to F-GSEA: surface wind 280°/14 kt, QNH 1018, reported traffic one Robin DR400 on right base, runway appears clear, land at your discretion.</p>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                  "F-GSEA, Agen Information. Runway 29, wind 280 degrees 14 knots, QNH 1018. Reported traffic one DR400 on right base. Runway appears clear, land at your discretion."
                </div>
              </div>

              <!-- Student B Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">Student B • Pilot (F-GSEA)</span>
                  <span class="text-xs font-bold text-emerald-700">Aircraft: Cirrus SR22</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Active Peer Verification Checklist</h5>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Did Student A strictly avoid saying "Cleared to land"?</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Correct readback of QNH (1018) and Runway in use (29)</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Traffic acknowledgment: "Traffic in sight" or "Looking for traffic"</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Stated intentions clearly when established on final</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Closing Review & Flashcards Link -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Session 3 Review:</span>
              <span class="text-slate-600 ml-1">Consolidate AFIS advisory standards, 'at your discretion' protocols, and RWYCC definitions before FE1.</span>
            </div>
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: \${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      \`;
    }`;

// Replace functions in 05a
const s2Start = content05a.indexOf('function renderLessonContentTabSession2(sessionData, theme)');
const s3Start = content05a.indexOf('function renderLessonContentTabSession3(sessionData, theme)');
const s4Start = content05a.indexOf('function renderLessonContentTabSession4(sessionData, theme)');

if (s2Start !== -1 && s3Start !== -1 && s4Start !== -1) {
  content05a = content05a.slice(0, s2Start) + s2FunctionCode.trim() + '\n\n' + s3FunctionCode.trim() + '\n\n' + content05a.slice(s4Start);
  fs.writeFileSync(file05a, content05a, 'utf8');
  console.log('Successfully updated 05a-templates-aas1.js (Sessions 2 & 3)!');
} else {
  console.error('Could not locate session function boundaries in 05a-templates-aas1.js');
}

// 2. Update src/js/08-templates-aas2.js
const file08 = path.join(rootDir, 'src/js/08-templates-aas2.js');
let content08 = fs.readFileSync(file08, 'utf8');

// Replace renderAas2LessonContentTabSession2
const s6FunctionCode = `    function renderAas2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};

      const drills = [
        {
          id: "s6e1",
          title: "Drill 6.1 — Bordeaux Control (ACC): Step Climb & Direct Routing",
          freq: "125.100 MHz",
          template: "Vueling {{8420|flight}}, Bordeaux Control, radar contact. Climb Flight Level {{360|FL}} to reach by {{LMG/Lima Mike Golf|waypoint}}. Cleared direct to {{AGN/Alpha Golf November|3-letter fix}}. Maintain Mach {{0.78/.78/decimal 78|Mach number}} or {{greater|comparison}} for spacing.",
          spoken: "Vueling eight four two zero, Bordeaux Control, radar contact. Climb flight level three six zero to reach by Lima Mike Golf. Cleared direct to Alpha Golf November. Maintain Mach decimal seven eight or greater for spacing.",
          mcq: {
            q: "What are the three components of this en-route clearance?",
            opts: ["Descent, holding, and speed reduction", "Level restriction by LMG, direct to AGN, and minimum Mach .78", "Vectoring to ILS and QNH setting"],
            ans: 1
          }
        },
        {
          id: "s6e2",
          title: "Drill 6.2 — En-Route CB Weather Deviation Request",
          freq: "132.450 MHz",
          template: "Transavia {{319|flight}}, approved deviation up to {{20|miles}} miles {{left|direction}} of track between {{NARAK/November Alpha Romeo Alpha Kilo|waypoint}} and {{MEN/Mike Echo November|3-letter fix}} due to weather. Maintain Flight Level {{320|FL}}; report {{clear|status}} of weather and resuming {{own navigation|2 words}}.",
          spoken: "Transavia three one niner, approved deviation up to two zero miles left of track between November Alpha Romeo Alpha Kilo and Mike Echo November due to weather. Maintain flight level three two zero; report clear of weather and resuming own navigation.",
          mcq: {
            q: "What must Transavia 319 report back to ATC later?",
            opts: ["When clear of weather and returning to route", "Their fuel quantity on arrival", "Their groundspeed every 5 minutes"],
            ans: 0
          }
        },
        {
          id: "s6e3",
          title: "Drill 6.3 — Speed Control & Level Crossing Restriction",
          freq: "127.850 MHz",
          template: "Air France {{612|flight}}, descend Flight Level {{240|FL}}, cross waypoint {{FISTO|5-letter fix}} Flight Level {{280|FL}} or below, speed {{250|knots}} knots or less. {{Expedite|rate word}} descent through Flight Level 300.",
          spoken: "Air France six one two, descend flight level two four zero, cross waypoint FISTO flight level two eight zero or below, speed two five zero knots or less. Expedite descent through flight level three zero zero.",
          mcq: {
            q: "What does 'expedite' require the flight crew to do?",
            opts: ["Increase rate of descent to maximum safe performance until passing FL300", "Maintain level flight until FISTO", "Slow down to minimum clean speed"],
            ans: 0
          }
        },
        {
          id: "s6e4",
          title: "Drill 6.4 — Sector Handoff & Radar Frequency Transfer",
          freq: "135.500 MHz",
          template: "Iberia {{3754|flight}}, radar service {{terminated|radar status}}. Contact Brest Control on {{128.150/128.15|frequency}}, squawk {{5421|4 digits}}.",
          spoken: "Iberia three seven five four, radar service terminated. Contact Brest Control on one two eight decimal one five zero, squawk five four two one.",
          mcq: {
            q: "What actions must Iberia 3754 execute?",
            opts: ["Transfer to 128.150 MHz, set transponder to 5421, and establish contact with Brest Control", "Turn off radar transponder", "Remain on current frequency until destination"],
            ans: 0
          }
        }
      ];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AAS Module 2 • Session 2 (Session 6)</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">En Route &amp; Area Control Clearances</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/aas_m2card2.jpg'}" alt="En Route Air Traffic Management" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">CONTROL &amp; EN ROUTE COMMUNICATIONS • AREA RADAR</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'En Route &amp; Area Control Clearances'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'ACC Step Climbs, Direct Routings, Speed Restrictions, Mach Numbers &amp; CB Weather Deviations'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Area Radar Controller (ACC) / Long-Haul &amp; Regional Airline Pilot</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Aviation News & En Route Operations Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Aviation News &amp; En Route Operations Warm-Up</h4>
                  <p class="text-[11px] text-slate-500">Cruising levels, airway traffic flow &amp; high-altitude speed management</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening &amp; Warm-Up</span>
            </div>

            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Key Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                <li>How does the semi-circular cruising level rule (Eastbound odd, Westbound even) establish vertical separation in European airspace?</li>
                <li>Why do controllers use <strong>Mach number</strong> rather than Indicated Airspeed (IAS) above FL280?</li>
                <li>What information must a pilot provide when requesting a thunderstorm (CB) weather deviation?</li>
              </ul>
            </div>
          </div>

          <!-- Part 2: Cockpit VHF Listening Lab -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Area Control (ACC) Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic en-route transmissions, complete the gap-fills, and analyze operational decisions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              \${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Phraseology Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Operational Analysis &amp; En Route Phraseology Clinic</h4>
                  <p class="text-[11px] text-slate-500">Key standards for upper airspace clearances, speed restrictions &amp; weather avoidance</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Golden Rules</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-200 text-blue-900">Rule 1 • Expedite Instruction</span>
                <h5 class="text-xs font-bold text-blue-950">Vertical Rate Authority</h5>
                <p class="text-xs text-blue-900/90 leading-relaxed"><em>"Expedite climb/descent"</em> requires the crew to apply maximum safe operational rate without delay until clear of the restriction or conflicting level.</p>
              </div>

              <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">Rule 2 • Weather Deviations</span>
                <h5 class="text-xs font-bold text-emerald-950">Lateral Clearance Limits</h5>
                <p class="text-xs text-emerald-900/90 leading-relaxed">Deviation clearances specify lateral distance (e.g., <em>up to 20 miles</em>) and direction. The pilot must report when clear of weather and resuming own navigation.</p>
              </div>

              <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-200 text-purple-900">Rule 3 • Level Crossing Fixes</span>
                <h5 class="text-xs font-bold text-purple-950">Strategic Sequencing</h5>
                <p class="text-xs text-purple-900/90 leading-relaxed"><em>"Cross waypoint FISTO at FL280 or below"</em> allows descent planning while ensuring vertical separation at sector boundary crossing points.</p>
              </div>
            </div>
          </div>

          <!-- Part 4: Communicative Pair Simulation & Readback Challenge -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Communicative Pair Simulation &amp; Readback Challenge</h4>
                  <p class="text-[11px] text-slate-500">Live pilot-controller roleplay: en-route sector handoff, storm cell deviation &amp; crossing restrictions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Student A Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-800">Student A • ACC Sector Controller</span>
                  <span class="text-xs font-bold text-slate-500">Sector: Bordeaux ACC (Upper)</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Manage Storm Deviation &amp; Crossing Restriction</h5>
                <p class="text-xs text-slate-700 leading-relaxed">Authorize Transavia 452 to deviate 15 NM right of track between GAILLAC and TOULOUSE, climb to FL350, maintain Mach .80 or greater, and cross AGN FL290 or above.</p>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                  "Transavia 452, approved deviation up to 15 miles right of track. Climb FL350, cross AGN FL290 or above, maintain Mach decimal 80 or greater."
                </div>
              </div>

              <!-- Student B Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">Student B • En-Route Flight Crew (TRA452)</span>
                  <span class="text-xs font-bold text-blue-600">Aircraft: B737-800</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Active Peer Verification Checklist</h5>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Read back cleared Flight Level (FL350) and crossing restriction (AGN FL290 or above)</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Acknowledged weather deviation limits: 15 miles right of track</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Read back speed constraint: Mach decimal 80 or greater</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Standard ICAO numbers and callsign articulation</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Closing Review & Flashcards Link -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Session 6 Review:</span>
              <span class="text-slate-600 ml-1">Consolidate En-Route ATC terminology, vertical navigation rules, and weather avoidance phraseology.</span>
            </div>
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: \${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      \`;
    }`;

// Replace renderAas2LessonContentTabSession3
const s7FunctionCode = `    function renderAas2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};

      const drills = [
        {
          id: "s7e1",
          title: "Drill 7.1 — Approach Control: Speed Reduction & Vectoring",
          freq: "121.100 MHz",
          template: "KLM {{1405|flight}}, turn {{right|direction}} heading {{095|3 digits}} degrees, vectors for ILS Runway {{14R/14 Right|runway}}. Descend to {{4000|altitude}} feet, QNH {{1016|hPa}}. Reduce speed to {{210|knots}} knots, and contact Approach on {{119.325|frequency}}.",
          spoken: "KLM one four zero five, turn right heading zero niner five degrees, vectors for ILS runway one four right. Descend to four thousand feet, QNH one zero one six. Reduce speed to two one zero knots, and contact Approach on one one niner decimal three two five.",
          mcq: {
            q: "Notice the pressure reference changed from Flight Level to Feet. Why?",
            opts: ["Because KLM 1405 is descending below the Transition Level onto QNH", "Because the altimeter is broken", "Because KLM is flying VFR"],
            ans: 0
          }
        },
        {
          id: "s7e2",
          title: "Drill 7.2 — Holding Pattern & EAT Assignment",
          freq: "120.800 MHz",
          template: "Iberia {{3712|flight}}, due to arrival traffic, hold at {{GAI/Golf Alpha India|3-letter fix}} as published, Flight Level {{100|FL}}. Inbound track {{215|degrees}} degrees, {{left|turn direction}} turns. Expected approach time {{1625|time}} UTC. Confirm {{endurance|fuel word}}.",
          spoken: "Iberia three seven one two, due to arrival traffic, hold at Golf Alpha India as published, flight level one zero zero. Inbound track two one five degrees, left turns. Expected approach time one six two five UTC. Confirm endurance.",
          mcq: {
            q: "Which direction are the turns in the holding pattern at GAI?",
            opts: ["Standard right turns", "Non-standard left turns", "Figure-eight turns"],
            ans: 1
          }
        },
        {
          id: "s7e3",
          title: "Drill 7.3 — PAN-PAN Medical Urgency & Priority Vectoring",
          freq: "128.850 MHz",
          template: "{{PAN-PAN/PAN PAN|urgency call}} PAN-PAN PAN-PAN, Bordeaux Control, Air France {{441|flight}}. Request {{priority|type}} landing at Toulouse due to passenger {{medical|emergency type}} emergency. Present heading {{160|degrees}}, Flight Level {{260|FL}}. Require {{ambulance|vehicle}} on arrival; {{138|number}} souls on board.",
          spoken: "Pan pan, pan pan, pan pan, Bordeaux Control, Air France four four one. Request priority landing at Toulouse due to passenger medical emergency. Present heading one six zero, flight level two six zero. Require ambulance on arrival; one three eight souls on board.",
          mcq: {
            q: "Why did the crew use PAN-PAN instead of MAYDAY?",
            opts: ["Because it is an urgent medical situation requiring priority, not an immediate flight-safety threat", "Because they forgot the word MAYDAY", "Because PAN-PAN is only for VFR flights"],
            ans: 0
          }
        },
        {
          id: "s7e4",
          title: "Drill 7.4 — Windshear Alert & Missed Approach (Tower)",
          freq: "118.100 MHz",
          template: "Ryanair {{8812|flight}}, caution: preceding B737 reported {{windshear/wind shear|hazard}} at {{300|feet}} feet on final, loss of {{15|knots}} knots airspeed. Surface wind now {{240|degrees}} degrees {{22|knots}} knots gusting {{34|knots}} knots. If going around, climb straight ahead to {{3000|altitude}} feet and contact Radar on {{121.250/121.25|frequency}}.",
          spoken: "Ryanair eight eight one two, caution: preceding Boeing seven three seven reported windshear at three hundred feet on final, loss of one five knots airspeed. Surface wind now two four zero degrees, two two knots, gusting three four knots. If going around, climb straight ahead to three thousand feet and contact Radar on one two one decimal two five zero.",
          mcq: {
            q: "What happened to the preceding aircraft at 300 feet?",
            opts: ["It suffered a tire burst", "It encountered windshear with a 15-knot airspeed loss", "It landed long due to tailwind"],
            ans: 1
          }
        }
      ];

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AAS Module 2 • Session 3 (Session 7)</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Approach Control, Arrivals &amp; Non-Nominal Emergencies</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/aas_m2card3.jpg'}" alt="Approach & Emergency Radiotelephony" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">APPROACH RADAR &amp; EMERGENCY COMMUNICATIONS</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Approach Control, Arrivals &amp; Non-Nominal Emergencies'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'ILS Vectoring, Holding Stacks, Windshear Go-Arounds, Medical Urgency (PAN-PAN) &amp; Emergency Diversions'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Approach Controller (Director) / Commercial Airline Flight Crew</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Part 1: Aviation News & Non-Nominal Operations Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Aviation News &amp; Non-Nominal Operations Warm-Up</h4>
                  <p class="text-[11px] text-slate-500">Urgency vs distress distinctions, windshear awareness &amp; pilot workload during diversions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening &amp; Warm-Up</span>
            </div>

            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Key Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                <li>What is the strict operational difference between <strong>PAN-PAN</strong> (urgency) and <strong>MAYDAY</strong> (distress)?</li>
                <li>When descending below the Transition Level, what altimeter pressure setting replaces standard 1013.25 hPa?</li>
                <li>Why is immediate pilot action required during a low-altitude windshear alert on final approach?</li>
              </ul>
            </div>
          </div>

          <!-- Part 2: Cockpit VHF Listening Lab -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Approach &amp; Non-Nominal Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic approach and emergency transmissions, complete the gap-fills, and analyze operational decisions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              \${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Emergency Golden Rules -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Operational Analysis &amp; Non-Nominal Golden Rules</h4>
                  <p class="text-[11px] text-slate-500">Emergency declarations, holding stack discipline &amp; go-around phraseology</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Golden Rules</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-200 text-blue-900">Rule 1 • Emergency Phraseology</span>
                <h5 class="text-xs font-bold text-blue-950">PAN-PAN vs MAYDAY</h5>
                <p class="text-xs text-blue-900/90 leading-relaxed">Spoken 3 times. Always state: nature of problem, intention, position, level, souls on board, and fuel endurance in hours/minutes.</p>
              </div>

              <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-200 text-emerald-900">Rule 2 • Holding Stack EAT</span>
                <h5 class="text-xs font-bold text-emerald-950">Expected Approach Time</h5>
                <p class="text-xs text-emerald-900/90 leading-relaxed">When delays exceed 10 minutes, ATC issues an EAT. If radio communication fails in the hold, the pilot leaves the holding fix at the EAT for descent.</p>
              </div>

              <div class="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-200 text-purple-900">Rule 3 • Immediate Go-Around</span>
                <h5 class="text-xs font-bold text-purple-950">Missed Approach Priority</h5>
                <p class="text-xs text-purple-900/90 leading-relaxed">Flight crew transmits: <em>"[Callsign], going around"</em>. Fly published missed approach altitude immediately. Non-essential radio chatter ceases.</p>
              </div>
            </div>
          </div>

          <!-- Part 4: Spoken Emergency Synthesis Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">PART 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Spoken Emergency Synthesis Simulation</h4>
                  <p class="text-[11px] text-slate-500">Live pilot-controller roleplay: in-flight medical urgency, radar vectoring for priority landing &amp; ground emergency services</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Student A Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-800">Student A • Approach Director</span>
                  <span class="text-xs font-bold text-slate-500">Station: Toulouse Arrival</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Manage Inbound Medical Urgency</h5>
                <p class="text-xs text-slate-700 leading-relaxed">Acknowledge Air France 742 PAN-PAN, provide immediate vectors heading 140° for ILS Runway 14R, clear to descend 3,000 ft on QNH 1018, confirm ambulance and medical services alerted.</p>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                  "Air France 742, roger PAN-PAN. Turn right heading 140 degrees, vectors for ILS Runway 14R. Descend 3,000 feet, QNH 1018. Priority landing approved, medical services alerted."
                </div>
              </div>

              <!-- Student B Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800">Student B • Flight Crew (AFR742)</span>
                  <span class="text-xs font-bold text-rose-700">Aircraft: A321 (Medical Emergency)</span>
                </div>
                <h5 class="text-xs font-bold text-slate-900">Active Peer Verification Checklist</h5>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Transmitted PAN-PAN prefix clearly three times</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Read back heading (140°), runway (ILS 14R), and altitude (3,000 ft QNH 1018)</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Stated souls on board (184) and remaining fuel endurance (1 hour 40 mins)</li>
                  <li class="flex items-start gap-1.5"><span class="text-emerald-600 font-bold">✓</span> Maintained concise, calm ICAO emergency radiotelephony</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Closing Review & Flashcards Link -->
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <span class="font-bold text-slate-800">Session 7 Review:</span>
              <span class="text-slate-600 ml-1">Consolidate Approach radar vectoring, holding pattern EAT protocols, and emergency communications before FE2.</span>
            </div>
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: \${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      \`;
    }`;

// Replace functions in 08
const s6Start = content08.indexOf('function renderAas2LessonContentTabSession2(sessionData, theme)');
const s7Start = content08.indexOf('function renderAas2LessonContentTabSession3(sessionData, theme)');
const s8Start = content08.indexOf('function renderAas2LessonContentTabSession4(sessionData, theme)');

if (s6Start !== -1 && s7Start !== -1 && s8Start !== -1) {
  content08 = content08.slice(0, s6Start) + s6FunctionCode.trim() + '\n\n' + s7FunctionCode.trim() + '\n\n' + content08.slice(s8Start);
  fs.writeFileSync(file08, content08, 'utf8');
  console.log('Successfully updated 08-templates-aas2.js (Sessions 6 & 7)!');
} else {
  console.error('Could not locate session function boundaries in 08-templates-aas2.js');
}

console.log('Template modernization completed successfully!');
