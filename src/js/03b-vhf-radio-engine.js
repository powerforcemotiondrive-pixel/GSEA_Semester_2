    /* ==========================================================================
       VHF RADIO AUDIO & LIVE TRAFFIC LISTENING ENGINE
       Web Audio API (Bandpass VHF Static + Squelch Clicks) + SpeechSynthesis
       100% Offline Self-Contained • Compatible with SCORM 1.2
       ========================================================================== */

    const RadioAudio = (() => {
      let ctx = null;
      let noiseNode = null;
      let gainNode = null;
      let activeExId = null;
      let currentAudioEl = null;
      let endTimer = null;
      let voices = [];
      const exercisesRegistry = {};

      function ensureContext() {
        if (!ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) ctx = new AudioCtx();
        }
        if (ctx && ctx.state === "suspended") {
          ctx.resume();
        }
      }

      function playSquelchClick() {
        try {
          ensureContext();
          if (!ctx) return;
          const dur = 0.08;
          const bufferSize = ctx.sampleRate * dur;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
          }
          const src = ctx.createBufferSource();
          src.buffer = buffer;
          const filter = ctx.createBiquadFilter();
          filter.type = "bandpass";
          filter.frequency.value = 1400;
          const g = ctx.createGain();
          g.gain.value = 0.14;
          src.connect(filter).connect(g).connect(ctx.destination);
          src.start();
        } catch (e) {}
      }

      function startBackgroundStatic(level) {
        if (level <= 0) return;
        try {
          ensureContext();
          if (!ctx) return;
          stopBackgroundStatic();
          const bufferSize = ctx.sampleRate * 2;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
          }
          noiseNode = ctx.createBufferSource();
          noiseNode.buffer = buffer;
          noiseNode.loop = true;

          const filter = ctx.createBiquadFilter();
          filter.type = "bandpass";
          filter.frequency.value = 1350;
          filter.Q.value = 1.4;

          gainNode = ctx.createGain();
          gainNode.gain.value = level;

          noiseNode.connect(filter).connect(gainNode).connect(ctx.destination);
          noiseNode.start();
        } catch (e) {}
      }

      function stopBackgroundStatic() {
        if (noiseNode) {
          try { noiseNode.stop(); } catch (e) {}
          noiseNode = null;
        }
      }

      function clearDot() {
        if (activeExId) {
          const dot = document.getElementById("dot-" + activeExId);
          if (dot) {
            dot.classList.remove("bg-emerald-400", "animate-pulse");
            dot.classList.add("bg-slate-400");
          }
          activeExId = null;
        }
      }

      function loadVoices() {
        if (!("speechSynthesis" in window)) return;
        const all = window.speechSynthesis.getVoices();
        voices = all.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
        if (voices.length === 0) voices = all;
      }

      function stopAll(skipCancel) {
        if (endTimer) { clearTimeout(endTimer); endTimer = null; }
        if (!skipCancel && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        if (currentAudioEl) {
          currentAudioEl.pause();
          currentAudioEl.currentTime = 0;
          currentAudioEl = null;
        }
        stopBackgroundStatic();
        clearDot();
      }

      function finishGracefully() {
        endTimer = setTimeout(() => {
          playSquelchClick();
          stopAll(true);
        }, 260);
      }

      function play(exId, spokenText, customUrl) {
        stopAll();
        activeExId = exId;
        const dot = document.getElementById("dot-" + exId);
        if (dot) {
          dot.classList.remove("bg-slate-400");
          dot.classList.add("bg-emerald-400", "animate-pulse");
        }

        const noiseSelect = document.getElementById("vhf-noise-select-" + exId) || document.getElementById("vhf-noise-select");
        const noiseLevel = noiseSelect ? parseFloat(noiseSelect.value || "0.035") : 0.035;
        const rateSelect = document.getElementById("vhf-rate-select-" + exId) || document.getElementById("vhf-rate-select");
        const rate = rateSelect ? parseFloat(rateSelect.value || "0.95") : 0.95;

        playSquelchClick();

        if (customUrl) {
          currentAudioEl = new Audio(customUrl);
          currentAudioEl.playbackRate = rate;
          startBackgroundStatic(noiseLevel);
          currentAudioEl.onended = finishGracefully;
          currentAudioEl.play().catch(() => stopAll());
          return;
        }

        const textToSpeak = spokenText || (exercisesRegistry[exId] && exercisesRegistry[exId].spoken) || "";
        if (!textToSpeak) {
          stopAll();
          return;
        }

        if (!("speechSynthesis" in window)) {
          alert("Speech Synthesis is unavailable in this browser.");
          stopAll();
          return;
        }

        const utter = new SpeechSynthesisUtterance(textToSpeak);
        if (voices.length === 0) loadVoices();
        const ukVoice = voices.find(v => v.lang && (v.lang.includes("GB") || v.lang.includes("en-US") || v.name.includes("UK") || v.name.includes("English")));
        if (ukVoice) utter.voice = ukVoice;
        else if (voices[0]) utter.voice = voices[0];

        utter.rate = rate;
        utter.pitch = 0.96;

        utter.onstart = () => startBackgroundStatic(noiseLevel);
        utter.onend = finishGracefully;
        utter.onerror = () => stopAll();

        window.speechSynthesis.speak(utter);
      }

      function normalizeAns(str) {
        return (str || "")
          .trim()
          .toLowerCase()
          .replace(/-/g, " ")
          .replace(/,/g, ".")
          .replace(/(\d)\.(\d{3})(?!\d)/g, (m, a, b) => (Number(a) < 10 ? a + b : m))
          .replace(/[.?!]+$/g, "")
          .replace(/\s+/g, " ");
      }

      function parseTemplate(ex) {
        const parts = [];
        const regex = /\{\{([^}]+)\}\}/g;
        let lastIdx = 0;
        let match;
        let blankIndex = 0;
        while ((match = regex.exec(ex.template)) !== null) {
          if (match.index > lastIdx) {
            parts.push({ type: "text", val: ex.template.slice(lastIdx, match.index) });
          }
          const [ansRaw, hint] = match[1].split("|");
          const accepted = ansRaw.split("/").map(s => s.trim());
          parts.push({ type: "blank", id: `${ex.id}_b${blankIndex}`, accepted, hint: hint || "..." });
          blankIndex++;
          lastIdx = regex.lastIndex;
        }
        if (lastIdx < ex.template.length) {
          parts.push({ type: "text", val: ex.template.slice(lastIdx) });
        }
        return parts;
      }

      function registerExercise(ex) {
        if (!ex || !ex.id) return;
        const parts = parseTemplate(ex);
        const blankMap = {};
        parts.filter(p => p.type === "blank").forEach(b => {
          blankMap[b.id] = b.accepted;
        });
        exercisesRegistry[ex.id] = {
          ...ex,
          parts,
          blankMap
        };
      }

      function checkExercise(exId, acceptedAnswersMap) {
        const ex = exercisesRegistry[exId];
        const answersMap = acceptedAnswersMap || (ex && ex.blankMap) || {};
        let correctCount = 0;
        const totalCount = Object.keys(answersMap).length;
        for (const [blankId, acceptedList] of Object.entries(answersMap)) {
          const inp = document.getElementById(blankId);
          if (!inp) continue;
          const userVal = normalizeAns(inp.value);
          const isOk = userVal && acceptedList.some(a => normalizeAns(a) === userVal);
          inp.classList.remove("border-emerald-500", "bg-emerald-500/20", "text-emerald-700", "dark:text-emerald-300", "border-rose-500", "bg-rose-500/20", "text-rose-700", "dark:text-rose-300");
          if (isOk) {
            inp.classList.add("border-emerald-500", "bg-emerald-500/20", "text-emerald-700", "dark:text-emerald-300");
            correctCount++;
          } else {
            inp.classList.add("border-rose-500", "bg-rose-500/20", "text-rose-700", "dark:text-rose-300");
          }
        }
        const fb = document.getElementById("fb-" + exId);
        if (fb) {
          fb.textContent = `${correctCount} / ${totalCount} correct`;
          fb.className = correctCount === totalCount 
            ? "text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono" 
            : "text-xs font-bold text-amber-600 dark:text-amber-400 font-mono";
        }
      }

      function revealExercise(exId, acceptedAnswersMap) {
        const ex = exercisesRegistry[exId];
        const answersMap = acceptedAnswersMap || (ex && ex.blankMap) || {};
        for (const [blankId, acceptedList] of Object.entries(answersMap)) {
          const inp = document.getElementById(blankId);
          if (!inp) continue;
          inp.value = acceptedList[0];
          inp.classList.remove("border-rose-500", "bg-rose-500/20", "text-rose-700", "dark:text-rose-300");
          inp.classList.add("border-emerald-500", "bg-emerald-500/20", "text-emerald-700", "dark:text-emerald-300");
        }
        const fb = document.getElementById("fb-" + exId);
        if (fb) {
          fb.textContent = `${Object.keys(answersMap).length} / ${Object.keys(answersMap).length} revealed`;
          fb.className = "text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono";
        }
      }

      function toggleTranscript(exId) {
        const el = document.getElementById("tr-" + exId);
        const btn = document.getElementById("btn-tr-" + exId);
        if (!el) return;
        const isHidden = el.classList.contains("hidden");
        if (isHidden) {
          el.classList.remove("hidden");
          if (btn) btn.innerHTML = `<span>Hide Radio Script</span> &uarr;`;
        } else {
          el.classList.add("hidden");
          if (btn) btn.innerHTML = `<span>Show Radio Script</span> &rarr;`;
        }
      }

      function selectMcq(exId, selectedIdx, correctIdx) {
        const container = document.getElementById("mcq-" + exId);
        if (!container) return;
        const options = container.querySelectorAll(".mcq-option");
        options.forEach((opt, idx) => {
          opt.classList.remove("border-emerald-500", "bg-emerald-50", "border-rose-500", "bg-rose-50");
          if (idx === correctIdx) {
            opt.classList.add("border-emerald-500", "bg-emerald-50");
          } else if (idx === selectedIdx) {
            opt.classList.add("border-rose-500", "bg-rose-50");
          }
        });
        const fb = document.getElementById("mcq-fb-" + exId);
        if (fb) {
          fb.textContent = selectedIdx === correctIdx ? "✓ Correct operational analysis." : "✗ Review the transmission: incorrect deduction.";
          fb.className = selectedIdx === correctIdx ? "text-xs font-bold text-emerald-600" : "text-xs font-bold text-rose-600";
        }
      }

      function renderDrill(ex) {
        registerExercise(ex);
        const parts = ex.parts || parseTemplate(ex);
        const gapHtml = parts.map(p => {
          if (p.type === "text") return `<span>${p.val}</span>`;
          const width = Math.max(75, Math.min(180, (p.accepted[0].length + 2) * 10));
          return `<input type="text" id="${p.id}" placeholder="${p.hint}" class="inline-block px-2 py-0.5 rounded border border-slate-300 bg-white text-slate-800 text-xs font-semibold focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-400 font-mono text-center mx-1 transition-all" style="width: ${width}px;" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">`;
        }).join("");

        const mcqHtml = ex.mcq ? `
          <div id="mcq-${ex.id}" class="p-3 bg-indigo-50/70 border border-indigo-200/80 rounded-xl space-y-2">
            <div class="flex items-center gap-2 text-indigo-950 font-bold text-xs">
              <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-indigo-200 text-indigo-800">Operational Check</span>
              <span>${ex.mcq.q}</span>
            </div>
            <div class="grid grid-cols-1 gap-1.5 pt-1">
              ${ex.mcq.opts.map((opt, idx) => `
                <button type="button" onclick="RadioAudio.selectMcq('${ex.id}', ${idx}, ${ex.mcq.ans})" class="mcq-option text-left px-3 py-2 rounded-lg border border-indigo-200/90 bg-white hover:bg-indigo-100/50 text-xs font-medium text-slate-800 transition-all cursor-pointer flex items-center justify-between gap-2 shadow-2xs">
                  <span class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px] inline-flex items-center justify-center shrink-0">${String.fromCharCode(65 + idx)}</span>
                    <span>${opt}</span>
                  </span>
                  <span class="text-[11px] text-slate-400">Select</span>
                </button>
              `).join('')}
            </div>
            <div id="mcq-fb-${ex.id}" class="text-xs font-bold pt-1"></div>
          </div>
        ` : "";

        return `
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4 text-left">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" id="dot-${ex.id}"></span>
                <h4 class="text-xs sm:text-sm font-black text-slate-900">${ex.title}</h4>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-900 text-cyan-400 border border-slate-700 shadow-2xs">
                  <svg width="12" height="12" class="text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  ${ex.freq}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200">
              <div class="flex items-center gap-2">
                <button type="button" onclick="RadioAudio.play('${ex.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-all cursor-pointer">
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span>Play Transmission</span>
                </button>
                <button type="button" onclick="RadioAudio.stopAll()" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>
                  <span>Stop</span>
                </button>
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-400">
                <label class="flex items-center gap-1">
                  <span>Static:</span>
                  <select id="vhf-noise-select-${ex.id}" class="bg-slate-800 text-slate-200 border border-slate-700 rounded px-1.5 py-0.5 text-[11px] focus:outline-hidden">
                    <option value="0.015">Low</option>
                    <option value="0.035" selected>Standard</option>
                    <option value="0.065">Heavy</option>
                  </select>
                </label>
                <label class="flex items-center gap-1">
                  <span>Speed:</span>
                  <select id="vhf-rate-select-${ex.id}" class="bg-slate-800 text-slate-200 border border-slate-700 rounded px-1.5 py-0.5 text-[11px] focus:outline-hidden">
                    <option value="0.85">0.85x</option>
                    <option value="0.95" selected>1.0x</option>
                    <option value="1.05">1.05x</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl leading-relaxed text-xs sm:text-sm text-slate-800 font-medium">
              ${gapHtml}
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
              <div class="flex flex-wrap items-center gap-2">
                <button type="button" onclick="RadioAudio.checkExercise('${ex.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-2xs transition-all cursor-pointer">
                  <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Check Answers</span>
                </button>
                <button type="button" onclick="RadioAudio.revealExercise('${ex.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer shadow-2xs">
                  <span>Reveal Answers</span>
                </button>
                <button type="button" id="btn-tr-${ex.id}" onclick="RadioAudio.toggleTranscript('${ex.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-all cursor-pointer shadow-2xs">
                  <span>Show Radio Script</span> &rarr;
                </button>
              </div>
              <span id="fb-${ex.id}" class="text-xs font-bold font-mono"></span>
            </div>

            <div id="tr-${ex.id}" class="hidden p-3 bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs rounded-lg space-y-1">
              <div class="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Verbatim Radio Transmission Transcript</span>
              </div>
              <p class="leading-relaxed text-slate-200">${ex.spoken}</p>
            </div>

            ${mcqHtml}
          </div>
        `;
      }

      if (typeof window !== "undefined") {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.onvoiceschanged = loadVoices;
        }
        window.addEventListener("beforeunload", () => stopAll());
      }

      return {
        loadVoices,
        play,
        stopAll,
        checkExercise,
        revealExercise,
        toggleTranscript,
        selectMcq,
        parseTemplate,
        registerExercise,
        renderDrill
      };
    })();

    if (typeof window !== "undefined") {
      window.RadioAudio = RadioAudio;
    }
