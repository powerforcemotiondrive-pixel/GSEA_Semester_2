    function renderLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const modals = content.modalsClinic || {};
      const caseStudy = content.operationalCaseStudy || {};
      const miniDebate = content.miniDebate || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Introduction &amp; Aviation Survey</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m1card1.jpg'}" alt="${hero.title || 'Introduction & Aviation Survey'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Commercial Aviation Dynamics</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Introduction & Aviation Survey'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Commercial Aviation Dilemmas, Passenger Disruption & Regulatory Modals'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">AFISO / Aerodrome Ground Operations &amp; Passenger Service</span>
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
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Warm-Up Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Operational Acronym Reference -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Airside Operations Acronym Reference</h5>
                </div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Core Acronyms</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs space-y-0.5">
                  <div class="flex items-center gap-1.5 font-bold text-slate-900">
                    <span class="px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded text-[10px] font-black">AODB</span>
                    <span>Airport Operational Database</span>
                  </div>
                  <p class="text-[11px] text-slate-600">The central IT database managing real-time flight schedules, stand allocations, and gate changes.</p>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs space-y-0.5">
                  <div class="flex items-center gap-1.5 font-bold text-slate-900">
                    <span class="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-black">TRC</span>
                    <span>Turnaround Coordinator</span>
                  </div>
                  <p class="text-[11px] text-slate-600">The airside manager supervising and synchronizing all ground handling activities between aircraft arrival and departure.</p>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs space-y-0.5">
                  <div class="flex items-center gap-1.5 font-bold text-slate-900">
                    <span class="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-black">GPU</span>
                    <span>Ground Power Unit</span>
                  </div>
                  <p class="text-[11px] text-slate-600">A mobile generator or stand connector supplying external electrical power to aircraft with engines and APU off.</p>
                </div>
                <div class="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs space-y-0.5">
                  <div class="flex items-center gap-1.5 font-bold text-slate-900">
                    <span class="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-[10px] font-black">GSE</span>
                    <span>Ground Support Equipment</span>
                  </div>
                  <p class="text-[11px] text-slate-600">Specialized apron vehicles and equipment (tugs, belt loaders, stairs, de-icers) servicing aircraft on the ramp.</p>
                </div>
              </div>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Course Entry Check: Aviation Vocabulary Spot-Check'}</h5>
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
                        <span class="font-bold text-slate-900">Operational Distinction:</span> ${q.answer}
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

          <!-- Activity 2: The Global Aviation Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: The Global Aviation Survey (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Speed-Dating Interviews</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Key Phrases for Expressing Opinions Box -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Phrases for Expressing Opinions (Use in Spoken Discussions):</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                ${(survey.signposts || []).map(sp => `
                  <div class="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg shadow-xs">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span class="font-medium italic">${sp}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 4 Topic Cards with Agreement Scale -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                      <span class="text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${t.badge}</span>
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Topic 0${t.id}</span>
                    </div>
                    <p class="text-xs sm:text-sm font-bold text-slate-900 mt-2.5 leading-snug">${t.statement}</p>
                    
                    <div class="mt-3 space-y-2 text-[11px]">
                      <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900">
                        <strong class="font-bold text-emerald-950">PRO / In Favor:</strong> ${t.pro}
                      </div>
                      <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg text-rose-900">
                        <strong class="font-bold text-rose-950">CON / Opposition:</strong> ${t.con}
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 border-t border-slate-200/80 space-y-2">
                    <p class="text-[11px] font-medium text-slate-600 italic">&ldquo;${t.prompt}&rdquo;</p>
                    <div class="no-print pt-1">
                      <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Personal Stance (1 = Strongly Disagree, 5 = Strongly Agree):</label>
                      <div class="flex items-center justify-between gap-1 bg-white p-1.5 rounded-lg border border-slate-200">
                        ${[1, 2, 3, 4, 5].map(score => `
                          <button type="button" onclick="window.setSurveyAgreement(${t.id}, ${score})" id="survey-${t.id}-btn-${score}" class="flex-1 py-1 text-center text-xs font-bold rounded hover:bg-slate-100 transition-all text-slate-600 border border-transparent">
                            ${score}
                          </button>
                        `).join('')}
                      </div>
                      <div class="flex justify-between text-[9px] text-slate-400 px-1 mt-0.5">
                        <span>Disagree</span>
                        <span>Neutral</span>
                        <span>Agree</span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Modals Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${modals.title || 'Activity 3: Language Focus: Modals of Authority (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${modals.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar &amp; Precision</span>
            </div>

            ${renderActivityInstructions(modals, theme)}

            <!-- 4 Rule Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(modals.rules || []).map((r, i) => {
                const borderCols = ['border-blue-300 bg-blue-50/60', 'border-rose-300 bg-rose-50/60', 'border-emerald-300 bg-emerald-50/60', 'border-amber-300 bg-amber-50/60'];
                const textCols = ['text-blue-900', 'text-rose-900', 'text-emerald-900', 'text-amber-900'];
                return `
                  <div class="p-3.5 border rounded-xl space-y-2 flex flex-col justify-between ${borderCols[i % 4]}">
                    <div>
                      <h5 class="text-xs font-black ${textCols[i % 4]}">${r.title}</h5>
                      <p class="text-[11px] text-slate-600 mt-1">${r.rule}</p>
                    </div>
                    <div class="p-2 bg-white/90 border border-slate-200 rounded-lg text-[11px] text-slate-800 leading-snug">
                      ${r.example}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Interactive Regulatory Challenge -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(modals.challenge && modals.challenge.title) || 'Interactive Regulatory Challenge: Spot the Correct Modal'}</h5>
                  <p class="text-[11px] text-slate-500">${(modals.challenge && modals.challenge.instructions) || ''}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                ${((modals.challenge && modals.challenge.questions) || []).map(q => `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-2.5 shadow-xs">
                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1.5">
                      <span>Scenario 0${q.id}: ${q.context}</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 leading-relaxed">${q.sentence}</p>
                    
                    <div class="space-y-1 text-xs">
                      ${q.options.map((opt) => `
                        <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                          ${opt}
                        </div>
                      `).join('')}
                    </div>

                    <div id="modal-chal-ans-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                      <span class="font-bold text-emerald-900">Correct:</span> ${q.correct}<br>
                      <span class="font-bold text-emerald-900">Rule:</span> ${q.explanation}
                    </div>

                    <button type="button" id="modal-chal-btn-${q.id}" onclick="window.toggleModalChallengeAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer pt-1">
                      <span>Verify Rationale</span> &rarr;
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Operational Case Study -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudy.title || 'Activity 4: EU261 Delay & Disruption Case Study (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">De-Escalation Role-Play</span>
            </div>

            ${renderActivityInstructions(caseStudy, theme)}

            ${caseStudy.incidentBriefing ? `
              <!-- Operational Incident Briefing Card -->
              <div class="rounded-xl border border-slate-300 bg-slate-50/70 overflow-hidden shadow-xs space-y-3">
                <!-- Flight Dispatch Header Banner -->
                <div class="px-4 py-3 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white">Delayed +4h05</span>
                    <span class="font-bold text-sm text-white">${caseStudy.incidentBriefing.flight} • ${caseStudy.incidentBriefing.route}</span>
                  </div>
                  <div class="text-[11px] text-slate-300 flex items-center gap-3">
                    <span><strong>Sched:</strong> ${caseStudy.incidentBriefing.scheduled}</span>
                    <span class="text-rose-400 font-bold"><strong>New Slot:</strong> ${caseStudy.incidentBriefing.revised}</span>
                    <span class="hidden md:inline text-slate-400">| ${caseStudy.incidentBriefing.aircraft}</span>
                  </div>
                </div>

                <div class="p-4 space-y-3.5">
                  <!-- Operational Context -->
                  <div>
                    <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <svg width="14" height="14" class="text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Operational Context &amp; Disruption Report
                    </h5>
                    <p class="text-xs text-slate-700 leading-relaxed mt-1">
                      ${caseStudy.incidentBriefing.context}
                    </p>
                  </div>

                  <!-- Chronological Incident Timeline -->
                  <div class="space-y-1.5">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <svg width="14" height="14" class="text-slate-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Flight Timeline &amp; Incident Log
                    </h5>
                    <div class="grid grid-cols-1 gap-1.5">
                      ${(caseStudy.incidentBriefing.timeline || []).map(item => `
                        <div class="flex items-start gap-2.5 p-2 bg-white rounded-lg border border-slate-200 text-xs">
                          <span class="font-mono font-bold text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 shrink-0">${item.time}</span>
                          <span class="text-slate-700 leading-snug">${item.event}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- EU261 Regulatory Framework Reference -->
                  ${caseStudy.incidentBriefing.regulations ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div class="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1">
                        <span class="text-[10px] font-black uppercase tracking-wider text-emerald-900 block flex items-center gap-1">
                          <svg width="12" height="12" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                          Mandatory Duty of Care (Immediate at Gate)
                        </span>
                        <p class="text-[11px] text-emerald-950 leading-relaxed">${caseStudy.incidentBriefing.regulations.dutyOfCare}</p>
                      </div>
                      <div class="p-3 bg-amber-50/70 border border-amber-200 rounded-lg space-y-1">
                        <span class="text-[10px] font-black uppercase tracking-wider text-amber-900 block flex items-center gap-1">
                          <svg width="12" height="12" class="text-amber-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                          Financial Compensation (€250 Post-Travel Claim)
                        </span>
                        <p class="text-[11px] text-amber-950 leading-relaxed">${caseStudy.incidentBriefing.regulations.compensation}</p>
                      </div>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(caseStudy.roles || []).map((r, rIdx) => {
                const isLiaison = rIdx === 0;
                return `
                  <div class="p-4 rounded-xl border space-y-3 flex flex-col justify-between ${isLiaison ? 'bg-blue-50/50 border-blue-200' : 'bg-amber-50/50 border-amber-200'}">
                    <div>
                      <div class="flex items-center justify-between gap-2 border-b pb-2 ${isLiaison ? 'border-blue-200' : 'border-amber-200'}">
                        <span class="text-xs font-black uppercase tracking-wider ${isLiaison ? 'text-blue-900' : 'text-amber-900'}">${r.role}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white ${isLiaison ? 'bg-blue-600' : 'bg-amber-600'}">${isLiaison ? 'Liaison Trainee' : 'Challenging Client'}</span>
                      </div>
                      <div class="mt-2.5 text-xs text-slate-700 leading-relaxed">
                        <strong class="font-bold text-slate-900">Your Objective:</strong> ${r.mission}
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t ${isLiaison ? 'border-blue-200' : 'border-amber-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${isLiaison ? 'text-blue-800' : 'text-amber-800'}">Key Communicative Phrases:</span>
                      <ul class="space-y-1 text-[11px] text-slate-700 pl-4 list-disc">
                        ${(r.keyPhrases || []).map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="p-3 bg-slate-100 rounded-xl text-center text-xs font-semibold text-slate-700">
              ${caseStudy.task || 'Conduct a 4-minute spoken role-play with your partner. Then swap roles. Focus on de-escalation, professional courtesy, and accurate explanation of passenger rights.'}
            </div>
          </div>

          <!-- Activity 5: Station Mini-Debate -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${miniDebate.title || 'Activity 5: Station Mini-Debate & Spoken Consensus Briefing (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${miniDebate.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Policy Consensus</span>
            </div>

            ${renderActivityInstructions(miniDebate, theme)}

            <!-- Debate Motion Banner -->
            <div class="p-3.5 bg-slate-900 text-white rounded-xl shadow-xs">
              <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Formal Policy Motion</span>
              <p class="text-xs sm:text-sm font-bold text-white mt-0.5">${miniDebate.motion || ''}</p>
            </div>

            <!-- 4-Step Argument Framework -->
            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Structured Spoken Policy Debate Framework:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                ${(miniDebate.framework || []).map(f => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                    <div>
                      <h6 class="text-xs font-bold text-slate-900">${f.step}</h6>
                      <p class="text-[11px] text-slate-600 mt-1">${f.desc}</p>
                    </div>
                    <div class="p-2 bg-white border border-slate-200 rounded-lg text-[10px] italic text-slate-700 font-medium">
                      ${f.phrase}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 60-Second Team Spokesperson Briefing Model -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <svg width="14" height="14" class="text-emerald-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  ${(miniDebate.spokenHandoverModel && miniDebate.spokenHandoverModel.title) || '60-Second Team Spokesperson Briefing Model'}
                </span>
                <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Spoken Benchmark</span>
              </div>
              <p class="text-xs text-emerald-900 leading-relaxed italic">
                &ldquo;${(miniDebate.spokenHandoverModel && miniDebate.spokenHandoverModel.text) || ''}&rdquo;
              </p>
            </div>
          </div>

          <!-- Activity 6: Closing Review -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Review & Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Review Prompts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map((rp, rpIdx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Step 0${rpIdx + 1}</span>
                    <h5 class="text-xs font-bold text-slate-900 mt-0.5">${rp.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">${rp.desc}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200/80">
                    <button type="button" onclick="switchModalTab('revision')" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      <span>Open Flashcard Review</span> &rarr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession2(sessionData, theme) {
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
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
              <img src="${hero.image || 'images/aas_m1card2.jpg'}" alt="Ground Movement Control" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">SURFACE &amp; TERMINAL COMMUNICATIONS • ATC RADIOTELEPHONY</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Ground Control, Pushback &amp; Taxi Clearances'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Clearance Delivery, Pushback Authorization, Complex Taxi Routes, Hold-Short &amp; Conditional Clearances'}</p>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 1</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — Ground &amp; Delivery Radiotelephony</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic clearances, complete the transcript gap-fills, and analyze operational decisions</p>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 4</span>
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
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      `;
    }

function renderLessonContentTabSession3(sessionData, theme) {
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

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
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
              <img src="${hero.image || 'images/aas_m1card3.jpg'}" alt="AFIS Operations" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">ADVISORY AERODROMES • AIRFIELD INFORMATION</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'AFIS &amp; Uncontrolled Aerodrome Traffic Information'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Aerodrome Flight Information Service, \'At Your Discretion\', RWYCC Surface Conditions &amp; VFR Circuit Separation'}</p>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 1</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Cockpit VHF Audio Lab — AFIS Aerodrome Advisory Broadcasts</h4>
                  <p class="text-[11px] text-slate-500">Listen to 4 authentic AFIS transmissions, complete the gap-fills, and analyze advisory phraseology</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Interactive Listening Lab</span>
            </div>

            <div class="space-y-4">
              ${drills.map(d => RadioAudio.renderDrill(d)).join('')}
            </div>
          </div>

          <!-- Part 3: Operational Analysis & Legal Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 3</span>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">PART 4</span>
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
            <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
              <span>View Vocabulary Flashcards</span> &rarr;
            </button>
          </div>
        </div>
      `;
    }

function renderLessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const taxonomy = content.jobTaxonomy || {};
      const clinic = content.grammarClinic || {};
      const handoffs = content.handoffSimulation || {};
      const debate = content.careerForumDebate || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m1card4.jpg'}" alt="${hero.title || 'Jobs in Aviation'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m1card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Aviation Roles &amp; Operational Interfaces</span>
                <h2 class="text-base sm:text-xl font-black text-white mt-0.5">${hero.title || 'Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces'}</h2>
                <p class="text-xs text-white/90 mt-1 max-w-2xl">${hero.subtitle || 'Landside, Airside, Flight Crew, Air Traffic Services &amp; Civil Aviation Corps (TSEEAC).'}</p>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Session 3 Spot-Check (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${opening.title || 'Activity 1: Aviation News &amp; Session 3 Spot-Check (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Warm-Up &amp; Catch-Up</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.summary || ''}</p>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-3.5 rounded-lg bg-sky-50/70 border border-sky-200">
              <span class="text-[11px] font-bold text-sky-900 uppercase tracking-wider">📰 Aviation News &amp; Current Events Prompts</span>
              <ul class="space-y-1.5 mt-2 text-xs text-sky-950">
                ${(opening.newsPrompts || []).map(p => `
                  <li class="flex items-start gap-1.5">
                    <span class="font-bold text-sky-700">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Session 3 Vocabulary Spot-Check -->
            <div class="space-y-2.5 pt-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Session 3 Catch-Up: Ground Operations &amp; GSE Spot-Check</span>
                <span class="text-[11px] text-slate-500">Rapid-fire student recall</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.spotCheck && opening.spotCheck.questions) || []).map(q => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <div class="space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Question ${q.id}</span>
                      </div>
                      <p class="text-xs font-semibold text-slate-900">${q.q}</p>
                    </div>
                    <div>
                      <div id="s4-spotcheck-ans-${q.id}" class="hidden mt-2 p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                        ${q.answer}
                      </div>
                      <button type="button" id="s4-spotcheck-btn-${q.id}" onclick="window.toggleS4SpotCheckAnswer(${q.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Aviation Job Taxonomy & The Operational Spectrum (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${taxonomy.title || 'Activity 2: Aviation Roles Across the Industry (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">5 Primary Domains</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${taxonomy.summary || ''}</p>

            ${renderActivityInstructions(taxonomy, theme)}

            <div class="space-y-3">
              ${(taxonomy.domains || []).map(dom => {
                const isTseeac = dom.id === 'tseeac';
                const isAtco = dom.id === 'atco';
                const borderCol = isTseeac ? 'border-emerald-300 bg-emerald-50/40' : (isAtco ? 'border-rose-200 bg-rose-50/30' : 'border-slate-200 bg-slate-50/60');
                return `
                  <div class="p-3.5 sm:p-4 rounded-xl border ${borderCol} space-y-2.5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded text-white ${isTseeac ? 'bg-emerald-700' : (isAtco ? 'bg-rose-700' : 'bg-slate-700')}">${dom.name}</span>
                        ${isTseeac ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">AFISO &bull; DGAC Safety &bull; Non-Separation</span>' : ''}
                        ${isAtco ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">Tactical Separation Authority</span>' : ''}
                      </div>
                      <span class="text-[11px] text-slate-500 font-medium">Jurisdiction: ${dom.keyJurisdiction || ''}</span>
                    </div>
                    <p class="text-xs text-slate-700 leading-relaxed">${dom.description}</p>
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${(dom.roles || []).map(r => `
                        <span class="text-[10.5px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs">${r}</span>
                      `).join('')}
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-slate-600">
                      <strong class="text-slate-800">Sample Operational Responsibility:</strong> ${dom.sampleDuty || ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Activity 3: Functional Grammar & Authority Clinic (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${clinic.title || 'Activity 3: Language Focus: Roles, Responsibilities &amp; Authority (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Target Language</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${clinic.summary || ''}</p>

            ${renderActivityInstructions(clinic, theme)}

            <!-- Formula Banner -->
            <div class="p-3 rounded-lg bg-slate-900 text-white space-y-1">
              <span class="text-[10px] font-bold tracking-wider uppercase text-amber-400">Core Functional Formulas</span>
              <p class="font-mono text-xs sm:text-[13px] font-bold text-slate-100">
                BE RESPONSIBLE FOR + -ING &bull; BE TASKED WITH + -ING &bull; HAVE AUTHORITY OVER / TO &bull; ENSURE THAT + CLAUSE
              </p>
            </div>

            <!-- Formulas Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              ${(clinic.formulas || []).map(f => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span class="font-mono text-xs font-bold text-amber-700 block">${f.structure}</span>
                  <p class="text-[10.5px] font-semibold text-slate-600">${f.usage}</p>
                  <p class="text-[11px] text-slate-800 italic bg-white p-2 rounded border border-slate-100">"${f.example}"</p>
                </div>
              `).join('')}
            </div>

            <!-- Role Clinic Challenge -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Roles & Responsibilities Quick Practice</span>
                <span class="text-[11px] text-slate-500">Select the correct preposition or verb form</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(clinic.roleClinic || []).map(item => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <p class="text-xs font-medium text-slate-800">${item.prompt}</p>
                    <div>
                      <div id="s4-roleclinic-ans-${item.id}" class="hidden mt-2 p-2 rounded bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-medium">
                        <strong>Answer:</strong> ${item.answer}<br>
                        <span class="text-slate-600">${item.explanation}</span>
                      </div>
                      <button type="button" id="s4-roleclinic-btn-${item.id}" onclick="window.toggleS4RoleClinicAnswer(${item.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Check Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${handoffs.title || 'Activity 4: Pairwork &amp; Triad Simulation — Role Handoffs (25 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Pair &amp; Triad Speaking</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${handoffs.summary || ''}</p>

            ${renderActivityInstructions(handoffs, theme)}

            <div class="space-y-4">
              ${(handoffs.scenarios || []).map(sc => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="text-xs sm:text-sm font-bold text-slate-900">${sc.title}</h4>
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">Live Simulation</span>
                  </div>
                  <p class="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200"><strong>Context:</strong> ${sc.context}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-lg bg-sky-50/70 border border-sky-200 text-sky-950">
                      <strong class="text-sky-900 block mb-1">Role A Task:</strong>
                      ${sc.roleA}
                    </div>
                    <div class="p-3 rounded-lg bg-indigo-50/70 border border-indigo-200 text-indigo-950">
                      <strong class="text-indigo-900 block mb-1">Role B Task:</strong>
                      ${sc.roleB}
                    </div>
                  </div>
                  <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <strong class="text-slate-800">Target Phrases to Deploy:</strong>
                    <ul class="space-y-0.5 list-disc pl-4 text-slate-700">
                      ${(sc.targetPhrases || []).map(tp => `<li>${tp}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">05</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${debate.title || 'Activity 5: Aviation Career Forum &amp; Operational Dilemma Debate (35 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Multi-Stakeholder Forum</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${debate.summary || ''}</p>

            ${renderActivityInstructions(debate, theme)}

            <!-- Scenario Box -->
            <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <span class="text-[10px] font-bold text-amber-900 uppercase tracking-wider">⚡ Crisis Dilemma: Winter Storm &amp; Diversion Gridlock</span>
              <p class="text-xs text-amber-950 leading-relaxed">${debate.scenario || ''}</p>
            </div>

            <!-- Stakeholders Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(debate.stakeholders || []).map(st => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">${st.name}</span>
                  </div>
                  <p class="text-[11px] text-slate-700"><strong>Priority:</strong> ${st.priority}</p>
                  <p class="text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200"><strong>Stance:</strong> ${st.stance}</p>
                </div>
              `).join('')}
            </div>

            <!-- Consensus Challenge & Agreement Tracker -->
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🤝 Consensus Summary Table</span>
              <p class="text-xs text-slate-600">${debate.consensusChallenge || 'Rate agreement across priorities and negotiate a formal sequence of actions.'}</p>
              
              <div class="space-y-2 pt-1">
                ${[
                  { id: 1, label: "Prioritize emergency fuel diversion over outbound departure slot on Stand 2" },
                  { id: 2, label: "Dispatch replacement de-icing rig to Stand 2 to avoid crew flight duty cancellation" },
                  { id: 3, label: "Direct AFISO / Operations team to hold taxiway snowplows until inbound flights touch down" }
                ].map(item => `
                  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span class="text-xs font-medium text-slate-800">${item.label}</span>
                    <div class="flex items-center gap-1 shrink-0">
                      ${[1, 2, 3, 4, 5].map(score => `
                        <button type="button" id="s4-debate-${item.id}-btn-${score}" onclick="window.setS4JobDebateAgreement(${item.id}, ${score})" class="w-7 h-7 text-xs font-bold rounded border border-slate-300 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer">
                          ${score}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 6: Vocabulary Review, Pronunciation & Wrap-Up (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">06</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${closing.title || 'Activity 6: Vocabulary Review, Pronunciation &amp; Class Wrap-Up (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">10-Minute Consolidation</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${closing.summary || ''}</p>

            ${renderActivityInstructions(closing, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map(rp => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1">
                  <span class="text-xs font-bold text-slate-800 block">${rp.title}</span>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${rp.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    window.toggleS4SpotCheckAnswer = function(id) {
      const el = document.getElementById(`s4-spotcheck-ans-${id}`);
      const btn = document.getElementById(`s4-spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleS4RoleClinicAnswer = function(id) {
      const el = document.getElementById(`s4-roleclinic-ans-${id}`);
      const btn = document.getElementById(`s4-roleclinic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer</span> &rarr;';
      }
    };

    window.setS4JobDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`s4-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-200');
        } else {
          btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-200');
        }
      }
    };

    window.toggleDiagnosticAnswer = function(id) {
      const el = document.getElementById(`diagnostic-ans-${id}`);
      const btn = document.getElementById(`diagnostic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleModalChallengeAnswer = function(id) {
      const el = document.getElementById(`modal-chal-ans-${id}`);
      const btn = document.getElementById(`modal-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setSurveyAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`survey-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleCatchUpAnswer = function(id) {
      const el = document.getElementById(`catchup-ans-${id}`);
      const btn = document.getElementById(`catchup-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.togglePrepositionChallengeAnswer = function(id) {
      const el = document.getElementById(`prep-chal-ans-${id}`);
      const btn = document.getElementById(`prep-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setTerminalDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`terminal-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleSpotCheckAnswer = function(id) {
      const el = document.getElementById(`spotcheck-ans-${id}`);
      const btn = document.getElementById(`spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleVehicleCardView = function(id) {
      const clueEl = document.getElementById(`vehicle-clue-${id}`);
      const revealEl = document.getElementById(`vehicle-reveal-${id}`);
      const btn = document.getElementById(`vehicle-toggle-btn-${id}`);
      if (!clueEl || !revealEl || !btn) return;
      const isHidden = revealEl.classList.contains('hidden');
      if (isHidden) {
        revealEl.classList.remove('hidden');
        clueEl.classList.add('hidden');
        btn.innerHTML = '<span>Show Clues</span> &larr;';
        btn.classList.add('bg-slate-200');
      } else {
        revealEl.classList.add('hidden');
        clueEl.classList.remove('hidden');
        btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
        btn.classList.remove('bg-slate-200');
      }
    };

    window.toggleAllVehicles = function(showAll) {
      for (let i = 1; i <= 10; i++) {
        const clueEl = document.getElementById(`vehicle-clue-${i}`);
        const revealEl = document.getElementById(`vehicle-reveal-${i}`);
        const btn = document.getElementById(`vehicle-toggle-btn-${i}`);
        if (!clueEl || !revealEl || !btn) continue;
        if (showAll) {
          revealEl.classList.remove('hidden');
          clueEl.classList.add('hidden');
          btn.innerHTML = '<span>Show Clues</span> &larr;';
          btn.classList.add('bg-slate-200');
        } else {
          revealEl.classList.add('hidden');
          clueEl.classList.remove('hidden');
          btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
          btn.classList.remove('bg-slate-200');
        }
      }
    };

    window.toggleScenarioModel = function(id) {
      const el = document.getElementById(`scenario-model-${id}`);
      const btn = document.getElementById(`scenario-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Model</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Target Model</span> &rarr;';
      }
    };

    window.printLessonContent = function() {
      document.body.classList.add('printing-lesson-active');
      window.print();
    };
    window.addEventListener('afterprint', function() {
      document.body.classList.remove('printing-lesson-active');
    });

