    const createModulePages = (modNumber, programKey = 'ag') => {
      const isAas = programKey === 'aas';

      const agSessionTitles = {
        1: {
          s1: "Session 1 - Breaking News & Modern Media Landscape",
          s2: "Session 2 - Global Economy & Social Issues in the News",
          s3: "Session 3 - Climate, Science & Environmental Reporting",
          s4: "Session 4 - Formative Evaluation 1: Live Press Briefing"
        },
        2: {
          s1: "Session 5 - Geopolitics & International Diplomacy",
          s2: "Session 6 - Artificial Intelligence & Tech Ethics in the News",
          s3: "Session 7 - Culture, Tourism & Global Trends in the News",
          s4: "Session 8 - Formative Evaluation 2: Editorial Panel & Debate"
        }
      };

      const aasSessionTitles = {
        1: {
          s1: "Session 1 - ATIS Broadcasts & Airport Weather Decoding",
          s2: "Session 2 - Ground Control, Pushback & Taxi Clearances",
          s3: "Session 3 - AFIS & Uncontrolled Aerodrome Traffic Information",
          s4: "Session 4 - Formative Evaluation 1: Aerodrome Listening Evaluation"
        },
        2: {
          s1: "Session 5 - Tower Control, Line-Up & Departure Clearances",
          s2: "Session 6 - En Route & Area Control Clearances",
          s3: "Session 7 - Approach Control, Arrivals & Non-Nominal Emergencies",
          s4: "Session 8 - Formative Evaluation 2: En Route & Approach Listening Evaluation"
        }
      };

      const titles = (isAas ? aasSessionTitles[modNumber] : agSessionTitles[modNumber]) || (isAas ? aasSessionTitles[1] : agSessionTitles[1]);

      const moduleImages = {
        1: {
          card1: isAas ? "images/aas_m1card1.jpg" : "images/ag_m1card1.jpg",
          card2: isAas ? "images/aas_m1card2.jpg" : "images/ag_m1card2.jpg",
          card3: isAas ? "images/aas_m1card3.jpg" : "images/ag_m1card3.jpg",
          card4: isAas ? "images/fe_aas_mod1.jpg" : "images/fe_progress_check.jpg",
          fe: isAas ? "images/fe_aas_mod1.jpg" : "images/fe_progress_check.jpg",
          ddrs: isAas ? "images/ddrs_aas_mod1.jpg" : "images/ddrs_ag_mod1.jpg",
          admin: "images/course_admin.jpg"
        },
        2: {
          card1: isAas ? "images/aas_m2card1.jpg" : "images/ag_m2card1.jpg",
          card2: isAas ? "images/aas_m2card2.jpg" : "images/ag_m2card2.jpg",
          card3: isAas ? "images/aas_m2card3.jpg" : "images/ag_m2card3.jpg",
          card4: isAas ? "images/fe_aas_mod2.jpg" : "images/fe_progress_check.jpg",
          fe: isAas ? "images/fe_aas_mod2.jpg" : "images/fe_progress_check.jpg",
          ddrs: isAas ? "images/ddrs_aas_mod2.jpg" : "images/ddrs_ag_mod2.jpg",
          admin: "images/course_admin.jpg"
        }
      };

      const images = moduleImages[modNumber] || moduleImages[1];

      const agDescriptions = {
        1: {
          s1: `Welcome to General English Module 1 on Current Events! In this opening session, we explore the modern 24-hour news cycle, editorial perspectives, fact verification, and headline analysis.<br><br><em>Subject overview:</em> Evaluating international news coverage, detecting editorial bias, summarizing breaking headlines, and expressing initial reactions in small group discussions.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s2: `Welcome to Session 2! Continuing our focus on Current Events, we examine how international economic shifts, cost of living, and workforce evolution make headlines worldwide.<br><br><em>Subject overview:</em> Vocabulary of economic trends, labor market transitions, interpreting journalistic charts, and discussing social impacts in peer pairs.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s3: `Welcome to Session 3! In this class, we analyze environmental, ecological, and scientific stories currently leading international media coverage.<br><br><em>Subject overview:</em> Climate summits, clean mobility debates, energy transition policies, and structuring evidence-based arguments with polite disagreement.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s4: `Welcome to Session 4! In this Formative Evaluation, the entire class participates in an interactive live press conference simulation.<br><br><em>Subject overview:</em> Formative Evaluation 1 — Live Press Briefing: Teams analyze a breaking news dossier, deliver a 5-minute spoken briefing, and field questions from peer journalists under teacher assessment.<br><br>All work in this session contributes directly toward your Formative Evaluation 1.`
        },
        2: {
          s1: `Welcome to Module 2 on Global Issues & Debates! In this session, we investigate international diplomacy, multilateral negotiations, and geopolitical tensions in current news.<br><br><em>Subject overview:</em> Cross-border agreements, global trade impacts, diplomatic vocabulary, and expressing nuance and hypothetical scenarios.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s2: `Welcome to Session 6! We examine artificial intelligence, automation, and technology ethics as they dominate contemporary editorial headlines.<br><br><em>Subject overview:</em> Workplace automation, algorithmic decision-making, digital surveillance vs. civil liberties, and debate language in peer discussions.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s3: `Welcome to Session 7! In this class, we analyze global tourism controversies, mega-events, cultural diplomacy, and heritage protection in modern media.<br><br><em>Subject overview:</em> Overtourism headlines, cultural festivals, public policy controversies, and pitching editorial viewpoints to the class.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s4: `Welcome to Session 8! In this Formative Evaluation, the entire class participates in an interactive editorial board debate.<br><br><em>Subject overview:</em> Formative Evaluation 2 — Editorial Panel & Debate: Student pairs present contrasting editorial positions on a major news controversy followed by moderated whole-class floor discussion.<br><br>All work in this session contributes directly toward your Formative Evaluation 2.`
        }
      };

      const aasDescriptions = {
        1: {
          s1: `Welcome to Technical English Module 1 on Operational Listening! In this opening session, we focus on decoding authentic ATIS (Automatic Terminal Information Service) audio broadcasts.<br><br><em>Subject overview:</em> ATIS phonetic designators, METAR/SPECI weather reports, runway surface conditions, transition levels, and operational notices in authentic audio.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s2: `Welcome to Session 2! We explore ground movement communications across apron, taxiway, and holding point operations.<br><br><em>Subject overview:</em> Ground controller and pilot radiotelephony: pushback clearances, taxi instructions, runway crossing permissions, conditional clearances, and identifying taxi conflicts.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s3: `Welcome to Session 3! In this class, we examine Aerodrome Flight Information Service (AFIS) and communications at uncontrolled/advisory airfields.<br><br><em>Subject overview:</em> AFIS advisory reports, pilot blind transmissions, circuit join reports, non-controlled runway safety, and pilot-to-pilot advisory traffic separation.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 4.`,
          s4: `Welcome to Session 4! In this Formative Evaluation, the entire class participates in a comprehensive aerodrome listening and radiotelephony examination.<br><br><em>Subject overview:</em> Formative Evaluation 1 — Aerodrome Listening Evaluation: Authentic audio decoding across ATIS, Ground, and AFIS communications, error detection, and spoken ICAO readbacks.<br><br>All work in this session contributes directly toward your Formative Evaluation 1.`
        },
        2: {
          s1: `Welcome to Module 2 on Control & En Route Communications! In this session, we analyze Tower and Departure radiotelephony clearances.<br><br><em>Subject overview:</em> Line-up clearances, takeoff authorizations, wake turbulence separation advisories, immediate departures, SID routings, and frequency change handoffs.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s2: `Welcome to Session 6! We examine en route and area control (ACC) communications across cruising levels.<br><br><em>Subject overview:</em> Radar vectoring, flight level step climbs and descents, speed adjustments, direct routing clearances, and pilot weather deviation requests.<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s3: `Welcome to Session 7! In this class, we explore Approach control, arrival sequencing, and non-nominal/emergency communications.<br><br><em>Subject overview:</em> Radar vectors to final, STAR arrivals, missed approach instructions, and urgent radiotelephony (Pan-Pan / Mayday, fuel priorities, hydraulic failures).<br><br>All classroom work builds progressively toward your in-class Formative Evaluation in Session 8.`,
          s4: `Welcome to Session 8! In this Formative Evaluation, the entire class completes a tactical en route and terminal listening evaluation.<br><br><em>Subject overview:</em> Formative Evaluation 2 — En Route & Approach Listening Evaluation: Multi-station listening scenarios, incident radiotelephony decoding, and spoken operational debriefing.<br><br>All work in this session contributes directly toward your Formative Evaluation 2.`
        }
      };

      const desc = (isAas ? aasDescriptions[modNumber] : agDescriptions[modNumber]) || (isAas ? aasDescriptions[1] : agDescriptions[1]);
      const sessOffset = modNumber === 1 ? 0 : 4;

      const noticeboardPage = {
        tag: isAas ? "Technical English • Noticeboard" : "General English • Noticeboard",
        title: "Student Noticeboard",
        description: isAas
          ? "Welcome to Technical English (LV122E)! Here is your home bulletin for weekly lessons, operational radiotelephony, listening practice, study materials, and course announcements."
          : "Welcome to General English (LV102E)! Here is your home bulletin for weekly lessons, current events, spoken practice, study materials, immersion guidance, and course announcements.",
        isNoticeboard: true,
        sessionNum: 0,
        imageUrl: "images/semester_objectives.jpg"
      };

      const pages = [
        noticeboardPage,
        {
          tag: `Module ${modNumber} • Session ${sessOffset + 1}`,
          title: titles.s1,
          description: desc.s1,
          sessionNum: sessOffset + 1,
          imageUrl: images.card1
        },
        {
          tag: `Module ${modNumber} • Session ${sessOffset + 2}`,
          title: titles.s2,
          description: desc.s2,
          sessionNum: sessOffset + 2,
          imageUrl: images.card2
        },
        {
          tag: `Module ${modNumber} • Session ${sessOffset + 3}`,
          title: titles.s3,
          description: desc.s3,
          sessionNum: sessOffset + 3,
          imageUrl: images.card3
        },
        {
          tag: `Module ${modNumber} • Formative Evaluation ${modNumber}`,
          title: titles.s4,
          description: desc.s4,
          sessionNum: sessOffset + 4,
          imageUrl: images.card4,
          isFe: true
        },
        {
          tag: `Module ${modNumber} • Focus`,
          title: isAas 
            ? (modNumber === 1 ? "DDRS - Sustainable Aerodromes & Operational Efficiency" : "DDRS - Quiet Flight Procedures & Airspace Efficiency")
            : (modNumber === 1 ? "DDRS - Media Integrity & Sustainable Information" : "DDRS - Climate Journalism & Global Environmental Ethics"),
          description: isAas
            ? "<strong>Definition:</strong> DDRS (Sustainable Development & Social Responsibility) in aeronautical operations combines flight efficiency, noise abatement, continuous descent approaches, and carbon reduction.<br><br><strong>Key areas covered:</strong> Green taxiing, reduced engine taxi-in, continuous descent operations (CDO), and runway safety.<br><br><strong>Why we discuss DDRS in English:</strong> Communicating operational sustainability in international English prepares aviation professionals for global compliance."
            : "<strong>Definition:</strong> DDRS (Sustainable Development & Social Responsibility) in modern media links factual reporting, social responsibility, and ethical deliberation on global challenges.<br><br><strong>Key areas covered:</strong> Media literacy, climate reporting ethics, sustainable development goals (SDGs), and public interest journalism.<br><br><strong>Why we discuss DDRS in English:</strong> Analyzing global challenges in international English develops the critical thinking and communication skills essential for international careers.",
          imageUrl: images.ddrs,
          sessionNum: sessOffset + 5,
          isMuted: isAas
        },
        {
          tag: "GSEA26A • Course Admin",
          title: "Course Admin",
          description: "Welcome to the GSEA26A Course Administration Hub. Access your official class groups (Group A & Group B), teacher assignments, 8-week course calendar, and in-class Formative Evaluation schedules.<br><br><em>Subject overview:</em> Weekly classes run Wednesdays (13h15–15h15) for Aeronautical English (LV122E) and Fridays (08h00–10h00) for General English (LV102E).<br><br>Consult the course calendar for key dates for FE1 (Week 4) and FE2 (Week 8).",
          isAdmin: true,
          adminUrl: "admin.html",
          sessionNum: sessOffset + 6,
          imageUrl: images.admin
        },
        {
          tag: isAas ? "Technical English • Course Guidance" : "General English • Course Guidance",
          title: "Student Guide & Objectives",
          description: "Essential student guidance on how to succeed in English this semester, in-class formative evaluation preparation, portfolio requirements, and the official ENAC course syllabus (English & French).",
          isObjectives: true,
          sessionNum: sessOffset + 7,
          imageUrl: "images/semester_objectives.jpg"
        }
      ];

      if (!isAas && modNumber === 2) {
        pages.push({
          tag: "General English • S2 Milestone",
          title: "English Immersion (End of S2)",
          description: "At the end of Semester 2, GSEA students participate in an intensive 4-week English immersion program in an English-speaking destination: Cork, Dublin, Manchester, Leeds, Liverpool, or Shoreham.<br><br><em>Academic & cultural goals:</em> Enhance daily conversational fluency and complete intensive TOEIC preparation for Semester 3. Students attend morning and afternoon language school sessions, cultural excursions, and aviation-specific visits.<br><br><em>Accommodation:</em> Homestay with vetted local host families (strictly 1 ENAC student per host family) for 100% linguistic immersion.",
          isImmersion: true,
          immersionUrl: "immersion.html",
          sessionNum: 9,
          imageUrl: "images/immersion_card.jpg"
        });
      }

      return pages;
    };

    const MODULE_THEMES = {
      1: {
        primary: "#1e293b", // Deep Transit Slate (Media & Current Events)
        primaryDark: "#0f172a",
        primaryDarker: "#090d16",
        accent: "#ea580c", // Vibrant Sunset Coral / Warm Terracotta
        accentDark: "#c2410c",
        accentDarker: "#9a3412",
        highlight: "#ffedd5",
        worksheet: "#1e293b",
        worksheetDark: "#0f172a",
        activeMenuBg: "rgba(234, 88, 12, 0.12)",
        activeMenuText: "#c2410c",
        activeMenuBorder: "#ea580c"
      },
      2: {
        primary: "#1e293b", // Deep Cockpit Slate
        primaryDark: "#0f172a",
        primaryDarker: "#090d16",
        accent: "#10b981", // Emerald (Global Issues)
        accentDark: "#059669",
        accentDarker: "#047857",
        highlight: "#d1fae5",
        worksheet: "#1e293b",
        worksheetDark: "#0f172a",
        activeMenuBg: "rgba(16, 185, 129, 0.12)",
        activeMenuText: "#059669",
        activeMenuBorder: "#10b981"
      }
    };

    const AAS_MODULE_THEMES = {
      1: {
        primary: "#152438", // Deep Midnight Navy (Surface & Terminal)
        primaryDark: "#0d1724",
        primaryDarker: "#070c14",
        accent: "#d97706", // Runway Amber
        accentDark: "#b45309",
        accentDarker: "#92400e",
        highlight: "#fef3c7",
        worksheet: "#152438",
        worksheetDark: "#0d1724",
        activeMenuBg: "rgba(217, 119, 6, 0.12)",
        activeMenuText: "#d97706",
        activeMenuBorder: "#d97706"
      },
      2: {
        primary: "#182b42", // Stratosphere Blue (Control & En Route)
        primaryDark: "#101f31",
        primaryDarker: "#0a1420",
        accent: "#0284c7", // Aero Horizon Cyan
        accentDark: "#0369a1",
        accentDarker: "#075985",
        highlight: "#e0f2fe",
        worksheet: "#182b42",
        worksheetDark: "#101f31",
        activeMenuBg: "rgba(2, 132, 199, 0.12)",
        activeMenuText: "#0284c7",
        activeMenuBorder: "#0284c7"
      }
    };

    const PROGRAMS_CONFIG = {
      ag: {
        id: "ag",
        code: "AG",
        name: "General English",
        footerDesc: "GSEA Semester 2 General English (AG • LV102E) • Phil PARRIS (LH/LAN) • v1.0.0",
        modules: [
          {
            id: 1,
            name: "Module 1",
            subtitle: "Current Events: Media & Society",
            supertitle: "GSEA AG SEMESTER 2 - MODULE 1: CURRENT EVENTS: MEDIA & SOCIETY",
            ...MODULE_THEMES[1],
            pages: createModulePages(1, 'ag')
          },
          {
            id: 2,
            name: "Module 2",
            subtitle: "Current Events: Global Issues & Debates",
            supertitle: "GSEA AG SEMESTER 2 - MODULE 2: CURRENT EVENTS: GLOBAL ISSUES & DEBATES",
            ...MODULE_THEMES[2],
            pages: createModulePages(2, 'ag')
          }
        ]
      },
      aas: {
        id: "aas",
        code: "AT",
        name: "Technical English",
        footerDesc: "GSEA Semester 2 Technical English (AAS • LV122E) • Phil PARRIS (LH/LAN) • v1.0.0",
        modules: [
          {
            id: 1,
            name: "Module 1",
            subtitle: "Listening: Surface & Terminal",
            supertitle: "GSEA AT SEMESTER 2 - MODULE 1: SURFACE & TERMINAL COMMUNICATIONS",
            ...AAS_MODULE_THEMES[1],
            pages: createModulePages(1, 'aas')
          },
          {
            id: 2,
            name: "Module 2",
            subtitle: "Listening: Control & En Route",
            supertitle: "GSEA AT SEMESTER 2 - MODULE 2: CONTROL & EN ROUTE COMMUNICATIONS",
            ...AAS_MODULE_THEMES[2],
            pages: createModulePages(2, 'aas')
          }
        ]
      }
    };

    let currentProgram = 'ag';
    let modulesData = PROGRAMS_CONFIG[currentProgram].modules;
    let currentModuleIndex = 0;
    let currentIndex = 0;
