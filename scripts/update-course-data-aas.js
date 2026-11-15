const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update src/js/03-core-deck.js (remove old hardcoded aerodrome session ternary)
const fileDeck = path.join(rootDir, 'src/js/03-core-deck.js');
let contentDeck = fs.readFileSync(fileDeck, 'utf8');

const oldTernary = `<p class="text-[11px] text-slate-500">\${modalState.sessionNum === 1 ? 'Access the aviation news warm-up, speed-dating survey, modals practice, and EU261 role-play.' : (modalState.sessionNum === 2 ? 'Access the terminal flow map, spatial prepositions practice, apron access role-play, and guidance workshop.' : (modalState.sessionNum === 4 ? 'Access the aviation roles overview, roles & responsibilities practice, day-in-the-life simulations, and career dilemma debate.' : 'Access the interactive vehicle cards, turnaround clock, and role-play simulations.'))}</p>`;

const newTernary = `<p class="text-[11px] text-slate-500">\${(sessionData.objectives && sessionData.objectives.summary) ? sessionData.objectives.summary : 'Access the authentic audio listening drills, technical phraseology practice, and communicative pair simulations.'}</p>`;

if (contentDeck.includes(oldTernary)) {
  contentDeck = contentDeck.replace(oldTernary, newTernary);
  fs.writeFileSync(fileDeck, contentDeck, 'utf8');
  console.log('Successfully updated 03-core-deck.js bottom action text!');
} else {
  console.log('03-core-deck.js already updated or pattern differs.');
}

// 2. Update data/course-data.js
const fileCourseData = path.join(rootDir, 'data/course-data.js');
let courseSrc = fs.readFileSync(fileCourseData, 'utf8');

// Load current data via node require
const fullData = require(fileCourseData);

// Update AAS Module 1 Session 2
fullData.aas["1"].sessions["2"].objectives = {
  title: "Session 2 Objectives - Ground Control, Pushback & Taxi Clearances",
  summary: "Master clearance delivery, pushback authorizations, slot management (TSAT/CTOT), complex aerodrome taxi routing, and ICAO conditional runway clearances through authentic VHF audio decoding and spoken readback drills.",
  items: [
    {
      num: 1,
      title: "Discuss Aviation News & Ground Movement Terminology (Warm-Up & Fluency)",
      description: "Engage in an opening discussion on airport ground safety headlines, slot delay procedures, and rapid spot-checking of core Ground terminology."
    },
    {
      num: 2,
      title: "Decode Full IFR Route Delivery Clearances (Authentic VHF Audio)",
      description: "Listen to and transcribe clearance delivery instructions including destination, SID, initial climb altitude, and 4-digit transponder squawk codes."
    },
    {
      num: 3,
      title: "Manage Slot Restrictions & Startup Clearances (TSAT / CTOT Flow)",
      description: "Evaluate pushback delays against Air Traffic Flow Management slot allocations and communicate hold-on-stand procedures."
    },
    {
      num: 4,
      title: "Navigate Complex Aerodrome Taxi Routes (Sequential Clearances)",
      description: "Trace taxi routes via multiple taxiway segments, yield to conflicting traffic, and adhere strictly to mandatory runway holding point instructions."
    },
    {
      num: 5,
      title: "Master Conditional Runway Clearances (The ICAO 'Behind' Rule)",
      description: "Analyze the standard phraseology requiring condition-first and condition-last formulation to prevent runway incursion risks."
    },
    {
      num: 6,
      title: "Spoken Readback Challenge (Paired Controller & Pilot Simulation)",
      description: "Execute a paired simulation between Ground Controller and Flight Crew, verifying 100% accurate readbacks of mandatory safety elements."
    }
  ]
};

fullData.aas["1"].sessions["2"].lessonPlan = {
  title: "Session 2 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative operational radiotelephony session featuring clearance delivery, pushback authorization, complex taxiway routing, conditional runway clearances, and a live paired readback challenge.",
  items: [
    {
      time: "Part 1",
      title: "Aviation News & Ground Movement Terminology Retrieval",
      description: "Opening warm-up: discuss recent ground safety headlines, review TSAT vs CTOT slot management, and spot-check mandatory readback items."
    },
    {
      time: "Part 2",
      title: "Cockpit VHF Audio Lab — Ground & Delivery Radiotelephony",
      description: "Listen to 4 authentic ground communications, complete the real-time gap-fills, check answers, and analyze operational decisions."
    },
    {
      time: "Part 3",
      title: "Operational Analysis & Phraseology Clinic",
      description: "Examine golden rules for runway protection, hold-short discipline, and the ICAO conditional clearance 'behind' structure."
    },
    {
      time: "Part 4",
      title: "Communicative Pair Simulation & Readback Challenge",
      description: "Paired roleplay: Ground Controller issues complex taxi and crossing instructions while Flight Crew executes verbatim ICAO readbacks."
    }
  ]
};

fullData.aas["1"].sessions["2"].revision = {
  title: "Session 2 Revision - Ground Control & Taxi Radiotelephony",
  summary: "Essential operational vocabulary for clearance delivery, apron pushback, complex taxiway routing, and runway protection.",
  terms: [
    { num: "01", term: "Clearance Delivery", definition: "ATC position issuing initial IFR route clearance, SID, initial altitude, and transponder squawk code." },
    { num: "02", term: "SID", definition: "Standard Instrument Departure — published IFR departure route linking runway to the en-route airway structure." },
    { num: "03", term: "Squawk Code", definition: "4-digit octal transponder code (digits 0–7) assigned by ATC to identify the flight on radar." },
    { num: "04", term: "Pushback Approved", definition: "ATC authorization for a tug to push the aircraft backwards from the stand, often specifying tail/nose direction." },
    { num: "05", term: "Hold Short of", definition: "Mandatory safety instruction to stop and hold before a specified runway or taxiway intersection." },
    { num: "06", term: "Conditional Clearance", definition: "Clearance predicated on an observed traffic movement, formulated with 'Behind...' at both start and end." },
    { num: "07", term: "TSAT", definition: "Target Startup Approval Time — target time provided by Eurocontrol ATFM for engine startup." },
    { num: "08", term: "CTOT", definition: "Calculated Takeoff Time — precise departure slot window (-5 to +10 mins) allocated by flow management." },
    { num: "09", term: "Stand / Gate", definition: "Designated aircraft parking position on the apron where passenger boarding and ground servicing take place." },
    { num: "10", term: "Runway Incursion", definition: "Any unauthorized occurrence at an aerodrome involving the incorrect presence of an aircraft, vehicle, or person on a runway." },
    { num: "11", term: "Give Way to", definition: "Instruction requiring an aircraft to yield right of way to another taxiing aircraft before proceeding." },
    { num: "12", term: "Verbatim Readback", definition: "Mandatory repeating of exact numbers, runway identifiers, and holding points to verify transmission accuracy." }
  ]
};

// Update AAS Module 1 Session 3
fullData.aas["1"].sessions["3"].objectives = {
  title: "Session 3 Objectives - AFIS & Uncontrolled Aerodrome Traffic Information",
  summary: "Master Aerodrome Flight Information Service (AFIS) protocols, 'at your discretion' phraseology, ICAO Global Reporting Format (GRF / RWYCC), and advisory traffic circuit integration through authentic audio decoding and paired simulation.",
  items: [
    {
      num: 1,
      title: "Differentiate AFIS Information from ATC Clearances (Operational Authority)",
      description: "Analyze the legal distinction between advisory information and control clearances, recognizing pilot decision authority at uncontrolled aerodromes."
    },
    {
      num: 2,
      title: "Decode AFIS Departure Advisories (Authentic VHF Audio)",
      description: "Listen to and transcribe airfield information broadcasts covering runway in use, surface wind, QNH, and reported circuit traffic."
    },
    {
      num: 3,
      title: "Interpret Runway Condition Codes (GRF / RWYCC Matrix)",
      description: "Decode Runway Condition Codes (0 to 6), percentage coverage, and water depth reporting on wet runways."
    },
    {
      num: 4,
      title: "Manage Mixed VFR/IFR Circuit Conflicts (Advisory Separation)",
      description: "Interpret position reports and conflict warnings for aircraft joining overhead, turning base, or operating in aerodrome sectors."
    },
    {
      num: 5,
      title: "Handle Ground Runway Hazards (Runway Inspection Vehicles)",
      description: "Understand advisory hold instructions ('stand by on final') when runway vehicles or temporary obstructions are present."
    },
    {
      num: 6,
      title: "Spoken AFIS Advisory Roleplay (Paired AFISO & Pilot Simulation)",
      description: "Execute paired roleplay between an AFIS Officer providing traffic and runway advisories and an inbound pilot reporting position."
    }
  ]
};

fullData.aas["1"].sessions["3"].lessonPlan = {
  title: "Session 3 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative operational radiotelephony session exploring AFIS advisory standards, pilot decision authority, RWYCC surface condition reporting, and traffic circuit integration before Formative Evaluation 1.",
  items: [
    {
      time: "Part 1",
      title: "Aviation News & AFIS Operational Principles",
      description: "Opening warm-up: review uncontrolled aerodrome operations, legal boundaries of AFIS, and pilot separation authority."
    },
    {
      time: "Part 2",
      title: "Cockpit VHF Audio Lab — AFIS Aerodrome Advisory Broadcasts",
      description: "Listen to 4 authentic regional AFIS transmissions, complete the real-time gap-fills, and analyze advisory phraseology."
    },
    {
      time: "Part 3",
      title: "Operational Analysis & Legal Boundaries Clinic",
      description: "Review why AFISOs never issue clearances, decode RWYCC surface contaminant tables, and map circuit position reports."
    },
    {
      time: "Part 4",
      title: "Spoken Simulation & AFIS Advisory Roleplay",
      description: "Paired roleplay: AFIS Officer transmits traffic and runway warnings while arriving pilot acknowledges and reports position."
    }
  ]
};

fullData.aas["1"].sessions["3"].revision = {
  title: "Session 3 Revision - AFIS Operations & Advisory Phraseology",
  summary: "Essential operational vocabulary for uncontrolled aerodromes, advisory communications, surface reporting, and traffic circuits.",
  terms: [
    { num: "01", term: "AFIS", definition: "Aerodrome Flight Information Service — unit providing flight information and alerting, without air traffic control clearances." },
    { num: "02", term: "At Your Discretion", definition: "Phrase confirming that the pilot-in-command decides when to line up, take off, or land based on advisory info provided." },
    { num: "03", term: "Reported Traffic", definition: "Information on aircraft reported to be operating in or near the aerodrome traffic circuit." },
    { num: "04", term: "Backtrack", definition: "Taxiing along the runway in the direction opposite to takeoff/landing to reach the threshold." },
    { num: "05", term: "Overhead Join", definition: "Joining the aerodrome traffic pattern above circuit height before descending on the deadside." },
    { num: "06", term: "Runway Vacated", definition: "Pilot confirmation that the aircraft has fully crossed beyond the runway holding position markings." },
    { num: "07", term: "RWYCC", definition: "Runway Condition Code (0 to 6 under ICAO Global Reporting Format) quantifying runway surface slipperiness." },
    { num: "08", term: "Traffic Circuit", definition: "Standard rectangular flight path flown by aircraft operating in the vicinity of an aerodrome (upwind, crosswind, downwind, base, final)." },
    { num: "09", term: "Blind Transmission", definition: "Radio transmission made when two-way communication cannot be established, but other aircraft/stations are believed to be listening." },
    { num: "10", term: "Duty of Care", definition: "Legal obligation of an AFIS officer to provide accurate, timely, and complete aerodrome safety advisories." },
    { num: "11", term: "Downwind Leg", definition: "Flight path parallel to the runway in the direction opposite to landing, where landing checks are completed." },
    { num: "12", term: "Base Leg", definition: "Flight path perpendicular to the runway centerline extending from the downwind leg to final approach." }
  ]
};

// Update AAS Module 2 Session 2 (Session 6)
fullData.aas["2"].sessions["2"].objectives = {
  title: "Session 6 Objectives - En Route & Area Control Clearances",
  summary: "Master Area Control Center (ACC) communications, vertical step climbs, direct RNAV routing, high-altitude speed restrictions (Mach number vs IAS), and thunderstorm (CB) weather deviations through authentic VHF audio decoding and controller-pilot roleplay.",
  items: [
    {
      num: 1,
      title: "Understand En Route Airway Structure & Cruising Rules (Airspace Management)",
      description: "Analyze vertical airway separation, cruising level allocation, and semi-circular cruising altitude rules in European upper airspace."
    },
    {
      num: 2,
      title: "Decode ACC Step Climbs & Direct Routings (Authentic VHF Audio)",
      description: "Transcribe en-route radar clearances covering step climbs to cruising FL, direct RNAV waypoints, and sector level restrictions."
    },
    {
      num: 3,
      title: "Request & Authorize Weather Deviations (Storm Cell Avoidance)",
      description: "Master phraseology for requesting and approving lateral radar deviations around convective thunderstorm (CB) clouds."
    },
    {
      num: 4,
      title: "Manage Speed & Level Crossing Restrictions (Mach Spacing)",
      description: "Execute speed adjustments using Mach numbers above FL280, IAS at lower levels, and vertical rate instructions ('expedite')."
    },
    {
      num: 5,
      title: "Execute Sector Handoffs & Transponder Transfers (Frequency Transfer)",
      description: "Manage frequency change handoffs to adjacent ACC sectors and transponder squawk reassignment under radar service termination."
    },
    {
      num: 6,
      title: "Spoken ACC Simulation (Paired Controller & Pilot Simulation)",
      description: "Roleplay realistic en-route scenarios between Area Radar Controller and Airline Crew, resolving storm deviations and crossing constraints."
    }
  ]
};

fullData.aas["2"].sessions["2"].lessonPlan = {
  title: "Session 6 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative operational radiotelephony session exploring Area Control Center (ACC) procedures, step climbs, direct routings, Mach number management, and thunderstorm weather avoidance.",
  items: [
    {
      time: "Part 1",
      title: "Aviation News & En Route Operations Warm-Up",
      description: "Opening warm-up: review upper airspace navigation, cruising level allocation, and high-altitude speed control."
    },
    {
      time: "Part 2",
      title: "Cockpit VHF Audio Lab — Area Control (ACC) Radiotelephony",
      description: "Listen to 4 authentic en-route transmissions, complete the gap-fills, and analyze operational spacing decisions."
    },
    {
      time: "Part 3",
      title: "Operational Analysis & En Route Phraseology Clinic",
      description: "Examine vertical rate authority ('expedite'), lateral storm offset limits, and waypoint level crossing restrictions."
    },
    {
      time: "Part 4",
      title: "Communicative Pair Simulation & Readback Challenge",
      description: "Paired roleplay: ACC Sector Controller manages storm deviations and step climbs while Flight Crew executes standard readbacks."
    }
  ]
};

fullData.aas["2"].sessions["2"].revision = {
  title: "Session 6 Revision - En Route & Area Control Radiotelephony",
  summary: "Essential operational vocabulary for upper airspace radar control, cruising level management, speed restrictions, and weather avoidance.",
  terms: [
    { num: "01", term: "Flight Level (FL)", definition: "Altitude expressed in hundreds of feet based on the standard altimeter pressure setting of 1013.25 hPa." },
    { num: "02", term: "Expedite", definition: "Instruction requiring flight crew to apply maximum safe operational rate of climb or descent without delay." },
    { num: "03", term: "Direct to", definition: "Radar shortcut clearance allowing the aircraft to fly directly toward a downstream RNAV waypoint." },
    { num: "04", term: "Mach Number", definition: "Ratio of true airspeed to the local speed of sound, used for en-route speed control above FL280." },
    { num: "05", term: "Weather Deviation", definition: "Pilot request to steer laterally away from the cleared airway track to avoid convective thunderstorm clouds." },
    { num: "06", term: "Level Crossing Fix", definition: "Airway restriction requiring an aircraft to cross a specific waypoint at or above/below a designated Flight Level." },
    { num: "07", term: "Squawk Ident", definition: "Instruction to press the transponder IDENT button so the aircraft return flashes distinctly on the radar screen." },
    { num: "08", term: "Radar Contact", definition: "Situation where the aircraft radar return is identified on the controller display and radar service is provided." },
    { num: "09", term: "Sector Handoff", definition: "Transfer of communication and control of an aircraft from one air traffic control sector to the next." },
    { num: "10", term: "Own Navigation", definition: "Flight status where the pilot navigates independently via onboard FMS rather than following radar vectors." },
    { num: "11", term: "Indicated Airspeed (IAS)", definition: "Speed shown on the cockpit airspeed indicator, used for speed control during lower altitude climbs and descents." },
    { num: "12", term: "Semi-Circular Rule", definition: "Airspace standard assigning odd Flight Levels to eastbound flights (000°–179°) and even Flight Levels to westbound flights (180°–359°)." }
  ]
};

// Update AAS Module 2 Session 3 (Session 7)
fullData.aas["2"].sessions["3"].objectives = {
  title: "Session 7 Objectives - Approach Control, Arrivals & Non-Nominal Emergencies",
  summary: "Master terminal arrival sequencing, radar vectors to ILS final, holding stack management, urgent medical declarations (PAN-PAN), windshear alerts, and immediate missed approach procedures through authentic VHF audio decoding and emergency roleplay.",
  items: [
    {
      num: 1,
      title: "Differentiate Emergency Levels (Urgency vs Distress Radiotelephony)",
      description: "Distinguish urgent situations (PAN-PAN, priority handling, medical diversion) from grave distress (MAYDAY, immediate danger) and declare fuel urgency."
    },
    {
      num: 2,
      title: "Decode Approach Vectors & Speed Constraints (Authentic VHF Audio)",
      description: "Transcribe radar vectors to ILS localizer intercept, altitude step-downs onto QNH altimeter setting, and speed reductions."
    },
    {
      num: 3,
      title: "Execute Holding Patterns & Interpret EAT (Terminal Delay Management)",
      description: "Analyze holding clearances specifying holding fix, inbound track, non-standard turn direction, and Expected Approach Time (EAT)."
    },
    {
      num: 4,
      title: "Declare In-Flight Medical Urgencies (PAN-PAN Structure)",
      description: "Structure standard urgency transmissions stating nature of medical problem, intentions, souls on board, and ground ambulance requirements."
    },
    {
      num: 5,
      title: "Manage Windshear Alerts & Missed Approaches (Immediate Action)",
      description: "Respond to low-altitude windshear reports, execute immediate go-arounds, and transmit concise missed approach communications."
    },
    {
      num: 6,
      title: "Spoken Emergency Synthesis Simulation (Paired Controller & Pilot Simulation)",
      description: "Roleplay emergency diversion handling between Approach Director and Flight Crew under high-workload non-nominal conditions."
    }
  ]
};

fullData.aas["2"].sessions["3"].lessonPlan = {
  title: "Session 7 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative operational radiotelephony session exploring terminal arrival vectoring, holding stack EAT protocols, in-flight emergency declarations, and missed approach procedures before Formative Evaluation 2.",
  items: [
    {
      time: "Part 1",
      title: "Aviation News & Non-Nominal Operations Warm-Up",
      description: "Opening warm-up: review emergency radiotelephony standards, windshear microburst hazards, and flight crew workload during diversions."
    },
    {
      time: "Part 2",
      title: "Cockpit VHF Audio Lab — Approach & Non-Nominal Radiotelephony",
      description: "Listen to 4 authentic approach and emergency transmissions, complete the gap-fills, and analyze tactical decisions."
    },
    {
      time: "Part 3",
      title: "Operational Analysis & Emergency Golden Rules",
      description: "Analyze the 3-part urgency declaration structure, holding stack radio failure protocols, and immediate go-around phraseology."
    },
    {
      time: "Part 4",
      title: "Spoken Emergency Synthesis Simulation",
      description: "Paired roleplay: Approach Controller provides priority vectoring for an inbound medical emergency while Flight Crew coordinates rescue requirements."
    }
  ]
};

fullData.aas["2"].sessions["3"].revision = {
  title: "Session 7 Revision - Approach Control & Emergency Communications",
  summary: "Essential operational vocabulary for terminal approach control, ILS vectoring, holding stacks, and non-nominal emergency radiotelephony.",
  terms: [
    { num: "01", term: "PAN-PAN", definition: "ICAO urgency signal (transmitted three times) for serious conditions affecting safety but not requiring immediate life-saving rescue." },
    { num: "02", term: "MAYDAY", definition: "ICAO distress signal (transmitted three times) indicating an aircraft is threatened by grave and imminent danger and requires immediate assistance." },
    { num: "03", term: "Go-Around", definition: "Maneuver in which the pilot aborts the landing approach and initiates climb onto the published missed approach procedure." },
    { num: "04", term: "Windshear", definition: "Sudden, rapid change in wind direction and/or velocity over a short distance, causing critical lift and airspeed loss." },
    { num: "05", term: "Diversion", definition: "Changing the aircraft destination in flight to an alternate aerodrome due to weather, technical faults, or medical emergency." },
    { num: "06", term: "Fuel Endurance", definition: "Total remaining flight time available based on usable fuel on board, crucial during holding and diversions." },
    { num: "07", term: "Souls on Board", definition: "Total number of living persons on the aircraft (passengers plus all flight and cabin crew members)." },
    { num: "08", term: "Transition Level", definition: "Lowest usable Flight Level above the Transition Altitude, below which altimeters are set to aerodrome QNH." },
    { num: "09", term: "QNH Setting", definition: "Altimeter barometric pressure setting that causes the altimeter to indicate altitude above Mean Sea Level (AMSL)." },
    { num: "10", term: "ILS Vectoring", definition: "Radar headings issued by the approach controller to guide the aircraft onto the instrument localizer and glidepath." },
    { num: "11", term: "Expected Approach Time (EAT)", definition: "Time at which ATC expects an aircraft holding in a stack to leave the holding fix to commence its approach." },
    { num: "12", term: "Minimum Fuel", definition: "Operational declaration that the aircraft fuel state has reached a point where any undue delay cannot be accepted." }
  ]
};

// Rebuild course-data.js cleanly preserving the UMD wrapper
const newCourseDataContent = `/**
 * GSEA Semester 2 - General English & Technical English (AAS)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const agData = ${JSON.stringify(fullData.ag, null, 2)};
  const aasData = ${JSON.stringify(fullData.aas, null, 2)};

  return {
    "1": agData["1"],
    "2": agData["2"],
    "3": agData["3"],
    ag: agData,
    aas: aasData
  };
});
`;

fs.writeFileSync(fileCourseData, newCourseDataContent, 'utf8');
console.log('Successfully updated data/course-data.js with new AAS Listening Lab data!');
