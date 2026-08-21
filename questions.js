window.ALL_AELE_QUESTIONS = [
  // ==========================================
  // 01. AERODYNAMICS
  // ==========================================
  {
    id: "AERO-01",
    subject: "Aerodynamics",
    topic: "Aircraft Performance",
    question: "At an airplane’s minimum drag speed, what is the ratio between induced drag and profile drag (Di/Dp)?",
    options: ["A. 1", "B. 1/3", "C. 1/2", "D. 3"],
    correct_answer: "A",
    explanation: "At minimum drag speed (L/D max), parasite drag equals induced drag, meaning Di / Dp = 1."
  },
  {
    id: "AERO-02",
    subject: "Aerodynamics",
    topic: "Basic Aerodynamics",
    question: "Which of the following aircraft is categorized specifically as a glider / sailplane?",
    options: ["A. Zenith S-5", "B. Zeppelin", "C. DG 1001", "D. F/A-18"],
    correct_answer: "C",
    explanation: "The DG Flugzeugbau DG-1001 is a two-seat sailplane / high-performance glider."
  },
  {
    id: "AERO-03",
    subject: "Aerodynamics",
    topic: "Airspeed & Navigation",
    question: "An aircraft is stabilized in level flight at 6 nautical miles per minute ground speed with a tailwind of 100 knots. What is the aircraft's true airspeed (TAS)?",
    options: ["A. 300 knots", "B. 260 knots", "C. 360 knots", "D. 460 knots"],
    correct_answer: "B",
    explanation: "Ground speed = 6 NM/min * 60 min/hr = 360 knots. True Airspeed = Ground Speed - Tailwind = 360 - 100 = 260 knots."
  },
  {
    id: "AERO-04",
    subject: "Aerodynamics",
    topic: "Maneuvering Flight",
    question: "An aircraft with a gross weight of 2,000 lbs is in a 60-degree constant-altitude coordinated turn. What is the total lift load supported by the wings?",
    options: ["A. 1,500 lbs", "B. 4,000 lbs", "C. 1,862 lbs", "D. 2,820 lbs"],
    correct_answer: "B",
    explanation: "Load factor n = 1 / cos(60°) = 2.0. Total Lift = 2,000 lbs * 2.0 = 4,000 lbs."
  },
  {
    id: "AERO-05",
    subject: "Aerodynamics",
    topic: "Fluid Properties",
    question: "Absolute pressure is defined as:",
    options: ["A. Sum of gage pressure and atmospheric pressure", "B. Difference between gage pressure and vacuum pressure", "C. Dynamic pressure plus total pressure", "D. Pressure measured in a plenum chamber"],
    correct_answer: "A",
    explanation: "Absolute Pressure = Gage Pressure + Atmospheric Pressure."
  },
  {
    id: "AERO-06",
    subject: "Aerodynamics",
    topic: "Supersonic & Compressible Flow",
    question: "Find the speed of sound in air when the barometric pressure is 8.88 in Hg and the density is 0.000902 slug/ft³.",
    options: ["A. 2,047 ft/s", "B. 1,507 ft/s", "C. 1,006 ft/s", "D. 1,570 ft/s"],
    correct_answer: "C",
    explanation: "a = sqrt(gamma * P / rho). P = 8.88 * 70.726 psf = 628 psf. a = sqrt(1.4 * 628 / 0.000902) ≈ 1,006 ft/s."
  },
  {
    id: "AERO-07",
    subject: "Aerodynamics",
    topic: "Fluid Dynamics",
    question: "Across an oblique shock wave, which of the following component relationships is correct?",
    options: [
      "A. Tangential component of velocity in front of and behind the wave are equal.",
      "B. Tangential component of velocity in front is greater than behind.",
      "C. Tangential component of velocity behind is greater than in front.",
      "D. Normal component of velocity behind is greater than in front."
    ],
    correct_answer: "A",
    explanation: "Across an oblique shock wave, only the normal velocity component changes; the tangential component is preserved."
  },
  {
    id: "AERO-08",
    subject: "Aerodynamics",
    topic: "Stability & Control",
    question: "What is the primary consequence of having excessive lateral stability on an airplane?",
    options: [
      "A. During crosswind landing, the aircraft is extremely difficult to control and Dutch roll tendencies increase",
      "B. During tailwind landing, directional control is lost",
      "C. Sideslip is completely eliminated",
      "D. Parasite drag is substantially reduced"
    ],
    correct_answer: "A",
    explanation: "Excessive dihedral causes strong rolling moments when exposed to crosswinds and induces Dutch roll oscillations."
  },
  {
    id: "AERO-09",
    subject: "Aerodynamics",
    topic: "Wing Aerodynamics",
    question: "Which type of drag is NOT present on an aircraft wing flying in subsonic flow?",
    options: ["A. Induced drag", "B. Wave drag", "C. Skin friction drag", "D. Form drag"],
    correct_answer: "B",
    explanation: "Wave drag is caused by shock wave formation and only occurs in transonic and supersonic regimes."
  },
  {
    id: "AERO-10",
    subject: "Aerodynamics",
    topic: "Flight Controls",
    question: "The control surfaces responsible for controlling roll about the longitudinal axis are the:",
    options: ["A. Elevators", "B. Trim tabs", "C. Ailerons", "D. Rudders"],
    correct_answer: "C",
    explanation: "Ailerons provide differential lift on wingtips to control roll about the longitudinal axis."
  },
  {
    id: "AERO-11",
    subject: "Aerodynamics",
    topic: "Dynamic Pressure",
    question: "A 40 mph wind blows against an 8 ft by 10 ft signboard. At standard sea level density (0.002377 slug/ft³) and Cd = 1.28, what is the drag force?",
    options: ["A. 419 lbs", "B. 500 lbs", "C. 194 lbs", "D. 10.4 lbs"],
    correct_answer: "A",
    explanation: "q = 0.5 * 0.002377 * (40 * 1.4667)² = 4.09 psf. Drag = 1.28 * 4.09 * 80 ≈ 419 lbs."
  },
  {
    id: "AERO-12",
    subject: "Aerodynamics",
    topic: "Aspect Ratio",
    question: "Which of the following best describes a wing with a higher aspect ratio compared to a low aspect ratio wing?",
    options: [
      "A. Lower lift-curve slope and higher induced drag",
      "B. Steeper (higher) lift-curve slope and reduced induced drag",
      "C. Same lift-curve slope as a delta wing",
      "D. No effect on induced drag"
    ],
    correct_answer: "B",
    explanation: "High aspect ratio wings produce a steeper lift-curve slope and reduce induced drag due to smaller wingtip vortex effects."
  },

  // ==========================================
  // 02. MATHEMATICS
  // ==========================================
  {
    id: "MATH-01",
    subject: "Mathematics",
    topic: "Algebra & Progressions",
    question: "For an arithmetic progression where the first term is 10, the last term is 40, and the sum of the terms is 250, how many terms (n) are in the progression?",
    options: ["A. 8", "B. 10", "C. 12", "D. 15"],
    correct_answer: "B",
    explanation: "Sn = (n/2)(a1 + an) => 250 = (n/2)(10 + 40) => 250 = 25n => n = 10."
  },
  {
    id: "MATH-02",
    subject: "Mathematics",
    topic: "Calculus Limits",
    question: "Evaluate the limit of (x² + 4x - 5) / (x² - 4x + 3) as x approaches 1.",
    options: ["A. 3", "B. -1", "C. 6", "D. -3"],
    correct_answer: "D",
    explanation: "Factoring: [(x + 5)(x - 1)] / [(x - 3)(x - 1)] = (x + 5)/(x - 3). At x = 1: (1 + 5)/(1 - 3) = 6 / (-2) = -3."
  },
  {
    id: "MATH-03",
    subject: "Mathematics",
    topic: "Trigonometry & Navigation",
    question: "Two aircraft depart the same airport at the same time. Plane A flies on a bearing of N20°E at 30 mph, and Plane B flies on S50°E at 20 mph. Find the distance between them after 3 hours.",
    options: ["A. 124 miles", "B. 110 miles", "C. 145 miles", "D. 95 miles"],
    correct_answer: "A",
    explanation: "Leg A = 90 mi, Leg B = 60 mi. Angle between 020° and 130° = 110°. By Law of Cosines: d = sqrt(90² + 60² - 2*90*60*cos(110°)) = 124.1 miles."
  },
  {
    id: "MATH-04",
    subject: "Mathematics",
    topic: "Differential Calculus",
    question: "Find the point of inflection of the cubic curve y = 2x³ - 12x² - 3x + 35.",
    options: ["A. (2, 5)", "B. (2, -3)", "C. (-2, 3)", "D. (0, 35)"],
    correct_answer: "B",
    explanation: "y' = 6x² - 24x - 3, y'' = 12x - 24 = 0 => x = 2. At x = 2: y = 2(8) - 12(4) - 3(2) + 35 = 16 - 48 - 6 + 35 = -3."
  },
  {
    id: "MATH-05",
    subject: "Mathematics",
    topic: "Integral Calculus",
    question: "Find the area under the curve y = 8 / x² between x = 1 and x = 2.",
    options: ["A. 4", "B. 2", "C. 8", "D. 6"],
    correct_answer: "A",
    explanation: "Integral of 8x^(-2) dx = -8/x. Evaluated from 1 to 2: [-8/2] - [-8/1] = -4 - (-8) = 4."
  },
  {
    id: "MATH-06",
    subject: "Mathematics",
    topic: "Logarithms",
    question: "If log_x(1024) = 5/2, find the value of x.",
    options: ["A. 4", "B. 8", "C. 16", "D. 32"],
    correct_answer: "C",
    explanation: "x^(5/2) = 1024 = 2^10 => x = (2^10)^(2/5) = 2^4 = 16."
  },
  {
    id: "MATH-07",
    subject: "Mathematics",
    topic: "Conic Sections",
    question: "A conic section having an eccentricity e > 1 is classified as a:",
    options: ["A. Circle", "B. Ellipse", "C. Parabola", "D. Hyperbola"],
    correct_answer: "D",
    explanation: "e = 0 is a circle, 0 < e < 1 is an ellipse, e = 1 is a parabola, and e > 1 is a hyperbola."
  },

  // ==========================================
  // 03. STRUCTURES & DESIGN
  // ==========================================
  {
    id: "STRUC-01",
    subject: "Aircraft Structures and Design",
    topic: "Design Philosophy",
    question: "A structural design that incorporates multiple load paths and redundancy so that failure of a single member does not cause collapse is:",
    options: ["A. Safe-life design", "B. Fail-safe design", "C. Infinite-life design", "D. Monocoque design"],
    correct_answer: "B",
    explanation: "Fail-safe design guarantees safety through alternative structural paths in the event of local damage."
  },
  {
    id: "STRUC-02",
    subject: "Aircraft Structures and Design",
    topic: "Mechanics of Materials",
    question: "What force is required to punch a 20 mm diameter hole in an aluminum plate that is 25 mm thick if the material shear strength is 350 MPa?",
    options: ["A. 345 kN", "B. 550 kN", "C. 221 kN", "D. 566 kN"],
    correct_answer: "B",
    explanation: "Shear Area A = π * d * t = π * (0.020 m) * (0.025 m) = 0.0015708 m². Force F = τ * A = (350 * 10^6 N/m²) * 0.0015708 m² ≈ 550 kN."
  },
  {
    id: "STRUC-03",
    subject: "Aircraft Structures and Design",
    topic: "Wing Geometry",
    question: "In biplane wing design, what is the term for the longitudinal offset of the top wing relative to the bottom wing?",
    options: ["A. Decalage", "B. Gap", "C. Stagger", "D. Washout"],
    correct_answer: "C",
    explanation: "Stagger is longitudinal offset. Decalage is the difference in incidence angles."
  },
  {
    id: "STRUC-04",
    subject: "Aircraft Structures and Design",
    topic: "Fuselage Construction",
    question: "Which type of fuselage construction relies primarily on the exterior skin to carry all primary flight and bending loads?",
    options: ["A. Monocoque", "B. Semi-monocoque", "C. Pratt truss", "D. Warren truss"],
    correct_answer: "A",
    explanation: "True monocoque ('single shell') uses the outer skin without longitudinal stiffeners to carry primary loads."
  },
  {
    id: "STRUC-05",
    subject: "Aircraft Structures and Design",
    topic: "Airworthiness Regulations",
    question: "Under FAR Part 23, what is the standard factor of safety applied to limit loads to establish ultimate design loads?",
    options: ["A. 1.25", "B. 1.50", "C. 2.00", "D. 1.15"],
    correct_answer: "B",
    explanation: "Ultimate Load = Limit Load × 1.50."
  },

  // ==========================================
  // 04. ACRM
  // ==========================================
  {
    id: "ACRM-01",
    subject: "Aircraft Construction, Repair and Modification",
    topic: "Hardware & Fasteners",
    question: "In the standard military rivet code MS20430AD8-6, what are the diameter and length of the rivet?",
    options: [
      "A. 1/4 inch diameter and 3/8 inch length",
      "B. 3/8 inch diameter and 1/4 inch length",
      "C. 8/32 inch diameter and 6/16 inch length",
      "D. 1/2 inch diameter and 3/16 inch length"
    ],
    correct_answer: "A",
    explanation: "8 represents diameter in 32nds (8/32\" = 1/4\"), and 6 represents length in 16ths (6/16\" = 3/8\")."
  },
  {
    id: "ACRM-02",
    subject: "Aircraft Construction, Repair and Modification",
    topic: "Heat Treatment",
    question: "Why is steel tempered immediately after being hardened by quenching?",
    options: [
      "A. To increase hardness and reduce ductility",
      "B. To relieve internal stresses and reduce extreme brittleness",
      "C. To raise its annealing point",
      "D. To case-harden the outer surface"
    ],
    correct_answer: "B",
    explanation: "Quenching leaves steel very hard but brittle; tempering relieves internal stresses and restores ductility/toughness."
  },
  {
    id: "ACRM-03",
    subject: "Aircraft Construction, Repair and Modification",
    topic: "Non-Destructive Testing",
    question: "The ferromagnetic particles used in Magnetic Particle Inspection (MPI) must possess which magnetic characteristics?",
    options: [
      "A. High permeability and high retentivity",
      "B. Low permeability and low retentivity",
      "C. High permeability and low retentivity",
      "D. Low permeability and high retentivity"
    ],
    correct_answer: "C",
    explanation: "High permeability allows easy magnetization to attract to defect leakage fields; low retentivity prevents residual magnetic interference."
  },
  {
    id: "ACRM-04",
    subject: "Aircraft Construction, Repair and Modification",
    topic: "Weight and Balance",
    question: "What is the minimum recommended edge distance (distance from hole center to sheet edge) for installing solid aircraft rivets?",
    options: ["A. 1D", "B. 2D (2 times rivet diameter)", "C. 3D", "D. 4D"],
    correct_answer: "B",
    explanation: "Standard aircraft structural practice requires a minimum edge distance of 2D to prevent sheet shear-out."
  },

  // ==========================================
  // 05. POWERPLANT & THERMODYNAMICS
  // ==========================================
  {
    id: "PWR-01",
    subject: "Aircraft Powerplant and Thermodynamics",
    topic: "Thermodynamic Cycles",
    question: "For an ideal air-standard Diesel cycle with a compression ratio of 18 and a cutoff ratio of 2, what is the thermal efficiency (k = 1.4)?",
    options: ["A. 51.2%", "B. 63.2%", "C. 70.5%", "D. 48.0%"],
    correct_answer: "B",
    explanation: "η = 1 - [1 / rk^(k-1)] * [(rc^k - 1) / (k * (rc - 1))]. Substituting rk=18, rc=2, k=1.4 yields η = 0.6316 ≈ 63.2%."
  },
  {
    id: "PWR-02",
    subject: "Aircraft Powerplant and Thermodynamics",
    topic: "Internal Combustion Engines",
    question: "How many degrees of crankshaft rotation are required to complete a full 4-stroke operating cycle in a 6-cylinder engine?",
    options: ["A. 180°", "B. 360°", "C. 720°", "D. 1080°"],
    correct_answer: "C",
    explanation: "All four-stroke engines require 2 complete revolutions (720°) to complete the 4 strokes, regardless of cylinder count."
  },
  {
    id: "PWR-03",
    subject: "Aircraft Powerplant and Thermodynamics",
    topic: "Induction & Turbocharging",
    question: "What is the primary function of the waste gate in a turbo-supercharged aircraft engine system?",
    options: [
      "A. Regulate fuel flow to the injectors",
      "B. Regulate the amount of exhaust gas directed across the turbine",
      "C. Prevent carburetor icing",
      "D. Maintain positive crankcase breathing"
    ],
    correct_answer: "B",
    explanation: "The waste gate controls turbocharger speed and boost pressure by bypassing excess exhaust gas around the turbine wheel."
  },
  {
    id: "PWR-04",
    subject: "Aircraft Powerplant and Thermodynamics",
    topic: "Propellers",
    question: "What is the blade angle of an aircraft propeller?",
    options: [
      "A. The angle between the propeller chord and plane of rotation",
      "B. The angle between relative wind and chord",
      "C. The angle of the crankshaft flange",
      "D. The slipstream angle"
    ],
    correct_answer: "A",
    explanation: "Blade angle is the geometric angle formed between the blade chord line and the propeller's plane of rotation."
  },

  // ==========================================
  // 06. ECONOMICS, LAWS & ETHICS
  // ==========================================
  {
    id: "LAW-01",
    subject: "Engineering Economics, Laws and Ethics",
    topic: "Philippine Aviation Law",
    question: "Under Presidential Decree No. 1570 (Aeronautical Engineering Law), what is the maximum term of office for members of the Board of Aeronautical Engineering?",
    options: ["A. 2 years", "B. 3 years", "C. 5 years", "D. 6 years"],
    correct_answer: "B",
    explanation: "Under PD 1570 Section 6, the members of the Board shall hold office for a term of three (3) years."
  },
  {
    id: "LAW-02",
    subject: "Engineering Economics, Laws and Ethics",
    topic: "Engineering Economics",
    question: "At an annual compound interest rate of 8%, what is the future worth of ₱1,000.00 at the end of 4 years?",
    options: ["A. ₱1,360.49", "B. ₱1,288.90", "C. ₱1,412.20", "D. ₱1,320.00"],
    correct_answer: "A",
    explanation: "F = P(1 + i)^n = ₱1,000 * (1 + 0.08)^4 = ₱1,000 * 1.3604889 = ₱1,360.49."
  },
  {
    id: "LAW-03",
    subject: "Engineering Economics, Laws and Ethics",
    topic: "Code of Professional Ethics",
    question: "According to the Code of Ethics for Aeronautical Engineers, in which relationship is an engineer required to act as a faithful agent or trustee and maintain strict confidentiality of business affairs and technical processes?",
    options: [
      "A. Relations with the State",
      "B. Relations with the Profession",
      "C. Relations with Clients and Employers",
      "D. Relations with the Public"
    ],
    correct_answer: "C",
    explanation: "Acting as a faithful trustee and safeguarding client proprietary data is explicitly governed under 'Relations with Clients and Employers'."
  },
  {
    id: "LAW-04",
    subject: "Engineering Economics, Laws and Ethics",
    topic: "Civil Aviation Regulations",
    question: "Which Republic Act officially created the Civil Aviation Authority of the Philippines (CAAP)?",
    options: ["A. RA 776", "B. RA 9497", "C. PD 1570", "D. RA 9184"],
    correct_answer: "B",
    explanation: "Republic Act No. 9497 (Civil Aviation Authority Act of 2008) created the CAAP."
  }
];