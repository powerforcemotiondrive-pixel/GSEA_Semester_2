    function renderAas2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const forcesPrinciples = content.forcesPrinciples || {};
      const forces = forcesPrinciples.forces || [];
      const grammar = content.grammarClinic || {};
      const axesGame = content.axesGame || {};
      const axes = axesGame.axes || [];
      const roleplayCards = axesGame.roleplayCards || [];
      const stall = content.stallScenario || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Aerodynamics &amp; Flight Principles</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card1.jpg'}" alt="${hero.title || 'Aerodynamics & Flight Principles'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Flight Physics &amp; Aerodynamic Controls</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aerodynamics &amp; Flight Principles'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'The Four Forces of Flight, The Three Axes &amp; Aerodynamic Control'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Flight Test Engineer &amp; ATCO</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Entry Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Principles Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Aviation News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Headlines &amp; Aerodynamic Innovations</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Aerodynamics Quick Check: Foundational Principles'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Operational Explanation:</span> ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-${q.id}" onclick="window.toggleDiagnosticAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Four Forces in Equilibrium -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${forcesPrinciples.title || 'Activity 2: The Four Forces in Equilibrium &amp; Maneuvers (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${forcesPrinciples.summary || 'Analyze the four forces acting on an aircraft and explain how pilots create unbalance to climb, descend, turn, and accelerate.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Aerodynamic Equilibrium</span>
            </div>

            ${renderActivityInstructions(forcesPrinciples, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${forces.map(f => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="font-bold text-sm text-slate-900">${f.name}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white font-mono" style="background-color: ${theme.accent};">${f.badge}</span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${f.description}</p>
                    <div class="mt-2.5 p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-700">
                      <strong>Operational Application:</strong> ${f.operationalNote}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Cause & Effect in Flight Physics -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Cause & Effect in Flight Physics (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Conditionals &amp; Connectors</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(grammar.structures || []).map(s => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">${s.pattern}</h5>
                  <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc pt-1">
                    ${s.examples.map(ex => `<li class="italic font-medium text-slate-700">&ldquo;${ex}&rdquo;</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <!-- Transformation Drills -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Sentence Transformation Drills</h5>
              <div class="space-y-2">
                ${(grammar.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between gap-2">
                    <p class="text-xs font-bold text-slate-800">${d.id}. ${d.prompt}</p>
                    <div id="drill-ans-${d.id}" class="hidden p-2 bg-white border border-emerald-300 rounded text-[11px] text-emerald-950 font-medium">
                      &check; <strong>Model Response:</strong> ${d.answer}
                    </div>
                    <button type="button" onclick="document.getElementById('drill-ans-${d.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer">
                      <span>Toggle Model Answer &rarr;</span>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: The 3 Axes & Control Surfaces Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-80m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${axesGame.title || 'Activity 4: The 3 Axes &amp; Control Surfaces Game / Role-Play (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${axesGame.summary || 'Interactive kinesthetic \'Human Flight Simulator\' game and pilot-to-flight-test-engineer debrief role-play.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Kinesthetic Simulation</span>
            </div>

            ${renderActivityInstructions(axesGame, theme)}

            <!-- Axes Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${axes.map(a => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="font-bold text-xs sm:text-sm text-slate-900">${a.axis}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-2"><strong>Direction:</strong> ${a.direction}</p>
                    <p class="text-[11px] text-slate-600"><strong>Movement:</strong> ${a.movement}</p>
                    <p class="text-[11px] text-slate-800 font-bold mt-1"><strong>Primary Surface:</strong> ${a.controlSurface}</p>
                    <p class="text-[11px] text-slate-500"><strong>Cockpit Input:</strong> ${a.cockpitInput}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Roleplay Prompt -->
            <div class="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-indigo-900 uppercase tracking-wider">Pilot &amp; Flight Test Engineer Spoken Debrief:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-indigo-950">
                ${roleplayCards.map(c => `
                  <div class="p-2.5 bg-white rounded-lg border border-indigo-200 space-y-1">
                    <strong class="text-indigo-900 block">${c.role}:</strong>
                    <p class="text-slate-700 leading-relaxed">${c.prompt}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Operational Scenario: Stall Recovery -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">80-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${stall.title || 'Activity 5: Operational Scenario: Stall Recovery & High-Altitude Turbulence (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${stall.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Case Study</span>
            </div>

            ${renderActivityInstructions(stall, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700 leading-relaxed">
              <strong class="text-slate-900 block text-xs uppercase tracking-wide">Flight Scenario Briefing:</strong>
              <p>${stall.scenarioText || ''}</p>
            </div>

            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Crew Analysis Tasks (Work in Pairs):</h5>
              <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-600">
                ${(stall.tasks || []).map(t => `<li class="leading-relaxed">${t}</li>`).join('')}
              </ol>
            </div>
          </div>

          <!-- Activity 6: Wrap-up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review & Class Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Consolidate the 18 key aerodynamic terms, verify pronunciation stress, and prepare for Session 2 Aircraft Anatomy.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${(closing.checkpoints && closing.checkpoints.length) ? `
              <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Aerodynamics Mastery Checkpoints</h5>
                  <span class="text-[11px] font-bold text-emerald-800">Verification</span>
                </div>
                <div class="space-y-2 text-xs text-emerald-900">
                  ${closing.checkpoints.map(cp => `
                    <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                      <span class="text-emerald-600 font-bold">&check;</span>
                      <span>${cp}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <span class="text-[11px] text-slate-600">Review all 18 aerodynamic vocabulary terms and practice pronunciation flashcards.</span>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession2(sessionData, theme) {
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
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
              <img src="${hero.image || 'images/aas_m2card2.jpg'}" alt="En Route Air Traffic Management" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">CONTROL &amp; EN ROUTE COMMUNICATIONS • AREA RADAR</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'En Route &amp; Area Control Clearances'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'ACC Step Climbs, Direct Routings, Speed Restrictions, Mach Numbers &amp; CB Weather Deviations'}</p>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 1</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Area Control (ACC) Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic en-route transmissions, complete the gap-fills, and analyze operational decisions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              ${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Phraseology Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 3</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 4</span>
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
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      `;
    }

function renderAas2LessonContentTabSession3(sessionData, theme) {
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
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
              <img src="${hero.image || 'images/aas_m2card3.jpg'}" alt="Approach & Emergency Radiotelephony" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">APPROACH RADAR &amp; EMERGENCY COMMUNICATIONS</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Approach Control, Arrivals &amp; Non-Nominal Emergencies'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'ILS Vectoring, Holding Stacks, Windshear Go-Arounds, Medical Urgency (PAN-PAN) &amp; Emergency Diversions'}</p>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 1</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Approach &amp; Non-Nominal Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic approach and emergency transmissions, complete the gap-fills, and analyze operational decisions</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              ${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Emergency Golden Rules -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 3</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 4</span>
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
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      `;
    }

function renderAas2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const investigationLexis = content.investigationLexis || {};
      const vocabTerms = investigationLexis.terms || [];
      const pastNarrativesClinic = content.pastNarrativesClinic || {};
      const pastRules = pastNarrativesClinic.rules || [];
      const groupResearchSprint = content.groupResearchSprint || {};
      const caseStudies = groupResearchSprint.caseStudies || [];
      const presentationsDebrief = content.presentationsDebrief || {};
      const guidelines = presentationsDebrief.presentationGuidelines || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Significant Aviation Accidents &amp; Aircraft Types</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card4.jpg'}" alt="Aviation Accidents & Aircraft Types" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Accident Investigation &amp; Safety Revolution</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Significant Aviation Accidents &amp; Aircraft Types'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Landmark Air Accidents, Technical Causal Analysis &amp; The Evolution of Flight Safety'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Safety Investigator / Flight Safety Officer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News & Session 3 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 3 Spot-Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Safety &amp; Investigation Briefs</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s4-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s4-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Investigation Vocabulary -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${investigationLexis.title || 'Activity 2: Accident Investigation Terminology &amp; Causal Chains (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${investigationLexis.summary || 'Learn and deploy specialized safety vocabulary used by investigation authorities.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Investigation Vocabulary</span>
            </div>

            ${renderActivityInstructions(investigationLexis, theme)}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${vocabTerms.map(lx => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h5 class="text-xs font-bold text-slate-900">${lx.term}</h5>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${lx.role}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Narrative Past Tenses -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${pastNarrativesClinic.title || 'Activity 3: Language Focus: Narrative Past Tenses &amp; Sequencers (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${pastNarrativesClinic.summary || 'Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Narrative Grammar</span>
            </div>

            ${renderActivityInstructions(pastNarrativesClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${pastRules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h5 class="text-xs font-bold text-slate-900 uppercase">${r.tense}</h5>
                  <p class="text-[10px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200">${r.formula}</p>
                  <p class="text-[11px] italic text-slate-700 pt-1">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: 15-Minute Group Research Sprint -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-65m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${groupResearchSprint.title || 'Activity 4: 15-Minute Group Research &amp; Preparation Sprint (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${groupResearchSprint.summary || 'In small groups (3-4 students), select one historical accident case study. You have 15 minutes to research and structure your 5-minute briefing.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">15-Min Sprint</span>
            </div>

            ${renderActivityInstructions(groupResearchSprint, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${caseStudies.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="font-bold text-xs text-slate-900">${cs.title}</span>
                      <span class="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded" style="background-color: ${theme.accent};">0${cs.id}</span>
                    </div>
                    <p class="text-[11px] text-indigo-900 font-bold mt-2">Aircraft: ${cs.aircraft}</p>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed"><strong>Context:</strong> ${cs.context}</p>
                  </div>
                  <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded text-[10.5px] text-emerald-950 mt-2">
                    <strong>Permanent Safety Fix:</strong> ${cs.safetyOutcome}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Spoken Group Presentations -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">65-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${presentationsDebrief.title || 'Activity 5: Spoken Group Presentations &amp; Safety Debrief (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${presentationsDebrief.summary || 'Each group presents their 5-minute accident analysis using whiteboard or bullet slides, followed by class Q&amp;A.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Class Presentations</span>
            </div>

            ${renderActivityInstructions(presentationsDebrief, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Presentation Rubric &amp; Delivery Rules:</h5>
              <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
                ${guidelines.map(g => `<li class="leading-relaxed">${g}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 6: FE2 Prep & Wrap-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Formative Evaluation 2 Prep (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${closing.fe2Preview ? `
              <div class="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">Session 5 Formative Evaluation 2 Format:</span>
                <p class="text-xs text-indigo-900 leading-relaxed">${closing.fe2Preview}</p>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${(closing.checkpoints || ['Mastered 18 accident investigation & safety terms', 'Coordinated past simple, continuous, and perfect in chronology', 'Confirmed FE2 partner, topic, and presentation structure']).map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE2 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // ==========================================
    // Interactive Airframe Diagram Controllers
    // ==========================================
    window.setAirframeDiagramMode = function(mode) {
      const studyBtn = document.getElementById('airframe-mode-study-btn');
      const quizBtn = document.getElementById('airframe-mode-quiz-btn');
      const resetBtn = document.getElementById('airframe-reset-btn');
      const tipEl = document.getElementById('airframe-diagram-tip');

      if (mode === 'study') {
        if (studyBtn) { studyBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-indigo-600 text-white shadow-xs cursor-pointer'; }
        if (quizBtn) { quizBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer'; }
        if (resetBtn) { resetBtn.classList.add('hidden'); }
        if (tipEl) { tipEl.textContent = 'Click any numbered pin or component badge on the blueprint to listen to pronunciation and inspect its functional purpose.'; }
        window.revealAllAirframeParts();
      } else {
        if (studyBtn) { studyBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer'; }
        if (quizBtn) { quizBtn.className = 'px-2.5 py-1 rounded text-xs font-bold transition-all bg-indigo-600 text-white shadow-xs cursor-pointer'; }
        if (resetBtn) { resetBtn.classList.remove('hidden'); }
        if (tipEl) { tipEl.textContent = 'Challenge Mode: Click any [ ? ] badge on the blueprint to test your memory and reveal the aeronautical term.'; }
        window.resetAirframeChallenge();
      }
    };

    window.selectAirframePart = function(partId, partName) {
      if (typeof speakWord === 'function' && partName) {
        speakWord(partName);
      }
      window.revealAirframePart(partId);

      // Highlight corresponding card in the lower grid
      document.querySelectorAll('.airframe-component-card').forEach(c => {
        c.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50/60');
      });
      const targetCard = document.getElementById('airframe-card-' + partId);
      if (targetCard) {
        targetCard.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50/60');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    window.revealAirframePart = function(partId) {
      const textEl = document.getElementById('svg-part-text-' + partId);
      if (textEl && textEl.dataset.realName) {
        textEl.textContent = textEl.dataset.realName;
        textEl.setAttribute('fill', '#f8fafc');
      }
      const cardName = document.getElementById('card-part-name-' + partId);
      if (cardName && cardName.dataset.realName) {
        cardName.textContent = cardName.dataset.realName;
      }
    };

    window.revealAllAirframeParts = function() {
      document.querySelectorAll('[id^="svg-part-text-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = el.dataset.realName;
          el.setAttribute('fill', '#f8fafc');
        }
      });
      document.querySelectorAll('[id^="card-part-name-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = el.dataset.realName;
        }
      });
    };

    window.resetAirframeChallenge = function() {
      document.querySelectorAll('[id^="svg-part-text-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = '[ Click to Reveal ]';
          el.setAttribute('fill', '#fbbf24');
        }
      });
      document.querySelectorAll('[id^="card-part-name-"]').forEach(el => {
        if (el.dataset.realName) {
          el.textContent = 'Part ' + el.id.replace('card-part-name-', '') + ' [ ? ]';
        }
      });
    };

