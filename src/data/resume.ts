import type { Lang, Localized, Text } from "@/lib/i18n";

export interface TimelineEntry {
  period: Text;
  title: Text;
  org?: string;
  bullets?: Record<Lang, string[]>;
}

export interface LabeledList {
  label: Text;
  items: Text[];
}

export const profile = {
  name: "Elias Kleinlein",
  photo: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Foto_Lebenslauf.png`,
  headline: {
    de: "Staatlich geprüfter Maschinenbautechniker | Software Engineering & AI",
    en: "State-certified Mechanical Engineering Technician | Software Engineering & AI",
  } satisfies Localized,
  focus: {
    de: "Weiterbildung Software Engineering & AI an der WBS Coding School (03.2026 – 03.2027).",
    en: "Software Engineering & AI program at WBS Coding School (03.2026 – 03.2027).",
  } satisfies Localized,
};

export const ui = {
  focus: { de: "Aktueller Fokus", en: "Current focus" },
  techStack: { de: "Tech Stack", en: "Tech Stack" },
  experience: { de: "Berufserfahrung", en: "Experience" },
  education: { de: "Aus- und Weiterbildung", en: "Education" },
  seminars: { de: "Seminare, Schulungen und Lehrgänge", en: "Seminars, trainings and courses" },
  other: { de: "Sonstiges", en: "Other" },
  skills: { de: "Weitere Kenntnisse und Interessen", en: "Further skills and interests" },
  toggle: { de: "English", en: "Deutsch" },
  toggleLabel: { de: "Sprache auf Englisch umstellen", en: "Switch language to German" },
  layoutToBento: { de: "Bento-Layout", en: "Bento layout" },
  layoutToClassic: { de: "Klassisches Layout", en: "Classic layout" },
  layoutLabel: { de: "Layout wechseln", en: "Switch layout" },
  rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
} satisfies Record<string, Localized>;

export const techStack: LabeledList[] = [
  {
    label: { de: "Sprachen", en: "Languages" },
    items: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["Flask", "React", "Next.js", "ASP.NET"],
  },
  {
    label: { de: "Themen", en: "Topics" },
    items: ["Frontend Engineering", "Backend Engineering", "RESTful APIs", "Testing"],
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "07.2025 – 12.2025",
    title: {
      de: "Vertriebsingenieur – Elektromechanische Komponenten",
      en: "Sales Engineer – Electromechanical Components",
    },
    org: "Neumüller Elektronik GmbH, Weisendorf",
    bullets: {
      de: [
        "Technische Beratung und Betreuung von Industriekunden hinsichtlich elektromechanischer Komponenten wie Steckverbinder, Sensorik, Antriebstechnik und Baugruppen",
        "Analyse von Kundenanforderungen sowie Ausarbeitung maßgeschneiderter Produktlösungen in enger Zusammenarbeit mit Entwicklung, Produktmanagement und Fertigung",
        "Erstellung von Angeboten, Kalkulationen und technischen Spezifikationen sowie Durchführung von Produktpräsentationen und technischen Schulungen",
        "Aktive Neukundenakquise und Ausbau bestehender Kundenbeziehungen durch lösungsorientierte Beratung und regelmäßige MS-Teams Termine",
        "Begleitung des gesamten Vertriebsprozesses von der Anfrage bis zum Projektabschluss inkl. Verhandlungsführung und Vertragsgestaltung",
        "Markt- und Wettbewerbsanalyse zur Identifikation neuer Geschäftsmöglichkeiten und Ableitung strategischer Maßnahmen",
        "Unterstützung des After-Sales-Service sowie Sicherstellung einer hohen Kundenzufriedenheit durch kontinuierliche technische Unterstützung",
      ],
      en: [
        "Technical consulting and support for industrial customers on electromechanical components such as connectors, sensors, drive technology and assemblies",
        "Analysis of customer requirements and development of tailored product solutions in close cooperation with engineering, product management and production",
        "Preparation of quotes, cost calculations and technical specifications; product presentations and technical trainings",
        "Active acquisition of new customers and expansion of existing customer relationships through solution-oriented consulting and regular MS Teams meetings",
        "Managing the entire sales process from inquiry to project completion, including negotiations and contract drafting",
        "Market and competitor analysis to identify new business opportunities and derive strategic measures",
        "Supporting after-sales service and ensuring high customer satisfaction through continuous technical support",
      ],
    },
  },
  {
    period: "01.2025 – 04.2025",
    title: "Branch Manager",
    org: "Aide Personal Service GmbH, Nürnberg",
    bullets: {
      de: [
        "Strategischer und operativer Aufbau sowie Weiterentwicklung der Niederlassung in der Metropolregion Nürnberg",
        "Eigenverantwortliche Führung und Entwicklung des internen Teams, inklusive Coaching, Zielvereinbarungen und Performance Reviews",
        "Planung, Steuerung und Verantwortung des gesamten Vertriebsprozesses: von der Marktanalyse über die Akquise bis hin zur langfristigen Kundenbindung",
        "Ausbau und Pflege eines belastbaren Netzwerks zu Entscheidungsträgern regionaler Unternehmen im industriellen Umfeld",
        "Ganzheitliche Beratung von Kunden hinsichtlich Personalstrategien, Fachkräftesicherung und Projektlösungen",
        "Verantwortung für die Budget- und Umsatzplanung der Niederlassung sowie Steuerung anhand definierter KPIs",
        "Entwicklung und Umsetzung regionaler Vertriebs- und Rekrutierungsstrategien zur nachhaltigen Positionierung am Markt",
        "Aufbau und Pflege eines qualifizierten Kandidatenpools zur schnellen Besetzung offener Vakanzen",
        "Vermittlung qualifizierter Fach- und Führungskräfte – sowohl für temporäre Projekteinsätze als auch in Festanstellung",
        "Sicherstellung eines professionellen Bewerbermanagements: von der Erstellung passgenauer Kandidatenprofile bis hin zur Organisation von Vorstellungsgesprächen",
        "Ansprechpartner für interne und externe Mitarbeitende während des gesamten Employee Lifecycles – vom Onboarding bis zum Offboarding",
      ],
      en: [
        "Strategic and operational set-up and further development of the branch in the Nuremberg metropolitan region",
        "Independent leadership and development of the internal team, including coaching, target agreements and performance reviews",
        "Planning, steering and ownership of the entire sales process: from market analysis and acquisition to long-term customer retention",
        "Building and maintaining a strong network of decision-makers at regional industrial companies",
        "Holistic consulting of clients on staffing strategies, securing skilled workers and project solutions",
        "Responsibility for the branch's budget and revenue planning and steering based on defined KPIs",
        "Development and implementation of regional sales and recruiting strategies for sustainable market positioning",
        "Building and maintaining a qualified candidate pool to fill open vacancies quickly",
        "Placement of qualified specialists and executives – for temporary project assignments as well as permanent positions",
        "Ensuring professional applicant management: from creating tailored candidate profiles to organizing job interviews",
        "Point of contact for internal and external employees throughout the entire employee lifecycle – from onboarding to offboarding",
      ],
    },
  },
  {
    period: "01.2024 – 07.2024",
    title: "Senior Recruitment Consultant",
    org: "Computerfutures (SThree), Nürnberg",
    bullets: {
      de: [
        "Verantwortung für Vertriebsprojekte und Aufbau eines Kandidatennetzwerks",
        "Analyse der Lebensläufe und Erstellung der Kandidatenprofile",
        "Vermittlung von Fach- und Führungskräften in den MINT-Berufen mit Fokus auf IT und Engineering in der Metropolregion Nürnberg",
        "Planung, Vorbereitung und Organisation von Vorstellungsgesprächen und Kundenterminen (360°)",
        "Weitere Aufgaben entsprechen den unten genannten",
      ],
      en: [
        "Responsibility for sales projects and building a candidate network",
        "Analysis of CVs and creation of candidate profiles",
        "Placement of specialists and executives in STEM professions with a focus on IT and engineering in the Nuremberg metropolitan region",
        "Planning, preparation and organization of job interviews and client meetings (360°)",
        "Further tasks as listed below",
      ],
    },
  },
  {
    period: "09.2021 – 12.2023",
    title: { de: "Sales Consultant Industrie", en: "Sales Consultant Industry" },
    org: "DIS AG, Nürnberg-Gebersdorf",
    bullets: {
      de: [
        "Akquirieren von Neukunden",
        "Langfristige Geschäftsbeziehungen gewinnen, ausbauen und festigen",
        "Betreuen und beraten der Entscheidungsträger bei der Personalplanung und Besetzung offener Vakanzen",
        "Verantwortung für Vertriebsprojekte und Unterstützung des Recruitings beim Aufbau eines Kandidatennetzwerks",
        "Vermittlung von Fach- und Führungskräften in den gewerblichen und technischen Berufszweigen",
        "Beratung, Einstellung und Betreuung von Projektmitarbeitern vom On- bis hin zum Offboarding",
        "Planung, Vorbereitung und Organisation von Vorstellungsgesprächen und Kundenterminen",
      ],
      en: [
        "Acquisition of new customers",
        "Winning, expanding and consolidating long-term business relationships",
        "Supporting and advising decision-makers on workforce planning and filling open vacancies",
        "Responsibility for sales projects and supporting recruiting in building a candidate network",
        "Placement of specialists and executives in industrial and technical professions",
        "Consulting, hiring and supporting project employees from onboarding to offboarding",
        "Planning, preparation and organization of job interviews and client meetings",
      ],
    },
  },
  {
    period: "08.2017 – 12.2019",
    title: { de: "Produktmanager/Techniker", en: "Product Manager/Technician" },
    org: "BFT Antriebssysteme GmbH, Oberasbach",
    bullets: {
      de: [
        "Eigenständiger Aufbau von Fachwissen über die Produkte",
        "Kommunikation mit dem technischen Support in englischer Sprache",
        "Teilnahme an Schulungen im Ausland in englischer Sprache",
        "Recherche und Informationsbeschaffung",
        "Betreuung und Beratung der Kunden in technischen Angelegenheiten direkt vor Ort, telefonisch und via E-Mail",
        "Inspektion der Produkte in technischer Hinsicht",
        "Testen und Dokumentieren neuer Produkte",
        "Organisation und Durchführung von Schulungen für Kollegen / Kunden",
        "Aktualisieren der Verkaufs- und Produktunterlagen",
        "Angebotserstellung und Kalkulation",
      ],
      en: [
        "Independently building expert knowledge of the products",
        "Communication with technical support in English",
        "Participation in trainings abroad held in English",
        "Research and information gathering",
        "Supporting and advising customers on technical matters on site, by phone and via email",
        "Technical inspection of products",
        "Testing and documenting new products",
        "Organizing and conducting trainings for colleagues / customers",
        "Updating sales and product documentation",
        "Preparing quotes and cost calculations",
      ],
    },
  },
  {
    period: "11.2016 – 07.2017",
    title: { de: "CAD/CAM-Programmierer", en: "CAD/CAM Programmer" },
    org: "Stepcam CAD-CAM Solutions Integrated, Nürnberg",
    bullets: {
      de: [
        "Programmieren komplexer Bauteile an drei- und fünfachsigen CNC-Fräszentren via Programmiersoftware Cimatron E12",
        "Anschaffung der benötigten Werkzeuge",
        "Rüsten und Einstellen von Einzelteilen",
        "Verantwortung für die Produktion hinsichtlich Qualität und Prozesssicherheit",
        "Koordination der Maschinenbelegung und -auslastung",
        "Maschinenpflege und -wartung",
        "Reparatur von Maschinen",
        "Senkerodieren (Exeron)",
      ],
      en: [
        "Programming complex components on three- and five-axis CNC milling centers using the programming software Cimatron E12",
        "Procurement of the required tools",
        "Setting up and adjusting single parts",
        "Responsibility for production in terms of quality and process reliability",
        "Coordination of machine scheduling and utilization",
        "Machine care and maintenance",
        "Machine repair",
        "Die-sinking EDM (Exeron)",
      ],
    },
  },
  {
    period: "04.2015 – 10.2016",
    title: { de: "CNC-Fräser/-Programmierer", en: "CNC Milling Machinist/Programmer" },
    org: "Stefan Felbinger Sondermaschinenbau, Eckental-Forth",
    bullets: {
      de: [
        "Programmieren komplexer Bauteile an fünfachsigen CNC-Fräszentren",
        "Koordination der Auftragsreihenfolge und Maschinenbelegung",
        "Rüsten und Einstellen von Einzel- und Kleinserienteilen",
        "Entwicklung und Erstellung von Rüstplänen",
        "Weitere Aufgaben entsprechen den bereits genannten (hier nicht: Senkerodieren)",
      ],
      en: [
        "Programming complex components on five-axis CNC milling centers",
        "Coordination of order sequence and machine scheduling",
        "Setting up and adjusting single parts and small series",
        "Development and creation of setup plans",
        "Further tasks as listed above (except die-sinking EDM)",
      ],
    },
  },
  {
    period: "07.2012 – 03.2015",
    title: {
      de: "CNC-Fräser/-Dreher/-Programmierer",
      en: "CNC Milling/Turning Machinist and Programmer",
    },
    org: "Günter Föckersperger GmbH, Münchaurach",
    bullets: {
      de: [
        "Programmieren komplexer Bauteile an vierachsigen CNC-Fräs- und Drehzentren",
        "Weitere Aufgaben entsprechen den oben genannten",
      ],
      en: [
        "Programming complex components on four-axis CNC milling and turning centers",
        "Further tasks as listed above",
      ],
    },
  },
  {
    period: "01.2011 – 04.2012",
    title: {
      de: "Zerspanungsmechaniker, Schlosser, CNC-Fräser/-Programmierer",
      en: "Cutting Machine Operator, Metalworker, CNC Milling Machinist/Programmer",
    },
    org: "Erlangen",
    bullets: {
      de: [
        "11.2011 – 04.2012: CNC-Fräser/-Programmierer, Einzelteilfertigung – Mechanik Center Erlangen GmbH",
        "04.2011 – 05.2011: Schlosser – Horst Böer GmbH & Co. KG Blechbearbeitung",
        "01.2011 – 02.2011: Zerspanungsmechaniker Dreh-Frästechnik – Egon Wambach Mechanische Werkstatt",
      ],
      en: [
        "11.2011 – 04.2012: CNC Milling Machinist/Programmer, single-part production – Mechanik Center Erlangen GmbH",
        "04.2011 – 05.2011: Metalworker – Horst Böer GmbH & Co. KG Blechbearbeitung",
        "01.2011 – 02.2011: Cutting Machine Operator (Turning & Milling) – Egon Wambach Mechanische Werkstatt",
      ],
    },
  },
];

export const education: TimelineEntry[] = [
  {
    period: "03.2026 – 03.2027",
    title: "Software Engineering & AI",
    org: "WBS Coding School",
  },
  {
    period: { de: "07.2024 – heute", en: "07.2024 – present" },
    title: {
      de: "Nebenberufliche Weiterbildung im Finanzwesen",
      en: "Part-time further education in finance",
    },
  },
  {
    period: "09.2015 – 07.2019",
    title: {
      de: "Weiterbildung zum staatlich geprüften Maschinenbautechniker",
      en: "Further education: State-certified Mechanical Engineering Technician",
    },
    org: "Grundig Akademie, Nürnberg",
  },
  {
    period: "09.2004 – 02.2008",
    title: {
      de: "Berufsabschluss: Zerspanungsmechaniker Dreh-Frästechnik",
      en: "Vocational training: Cutting Machine Operator (Turning & Milling)",
    },
    org: "Schaeffler Technologies AG & Co. KG, Herzogenaurach",
  },
];

export const seminars: TimelineEntry[] = [
  {
    period: "10.2020 – 04.2021",
    title: {
      de: "CAD-Schulung (Creo, Solid Works, Autodesk Inventor)",
      en: "CAD training (Creo, Solid Works, Autodesk Inventor)",
    },
  },
  {
    period: "2019",
    title: {
      de: "REFA – Grundlagenausbildung 2.0 (Teil 1–3)",
      en: "REFA basic training 2.0 (parts 1–3)",
    },
  },
  { period: "2017", title: { de: "Lehrgang im Bereich CAD", en: "Course in CAD" } },
  {
    period: "2017",
    title: { de: "Lehrgang im Bereich Senkerodieren", en: "Course in die-sinking EDM" },
  },
  {
    period: "2011",
    title: {
      de: "Lehrgang mit Praktika im Bereich CNC-Technik",
      en: "Course with internships in CNC technology",
    },
  },
];

export const other: TimelineEntry[] = [
  {
    period: { de: "Seit 03.2021", en: "Since 03.2021" },
    title: {
      de: "Stellvertretender Vorstandsvorsitzender",
      en: "Deputy Chairman of the Board",
    },
    org: "Siedlergemeinschaftsverein Aisch-Adelsdorf",
  },
  {
    period: "02.2021 – 12.2024",
    title: { de: "Freiberufliche Tätigkeit", en: "Freelance work" },
    org: "Deutsche Vermögensberatung",
  },
];

export const languages: LabeledList = {
  label: { de: "Sprachen", en: "Languages" },
  items: [
    { de: "Deutsch (Muttersprache)", en: "German (native)" },
    { de: "Englisch (gut in Wort und Schrift)", en: "English (good, written and spoken)" },
    { de: "Russisch (gut in Wort und Schrift)", en: "Russian (good, written and spoken)" },
  ],
};

export const software: LabeledList = {
  label: { de: "EDV/IT", en: "Software/IT" },
  items: [
    "Creo Parametric 5.0", "Solid Works", "Autodesk Inventor", "Shapr3D", "Cimatron E12",
    "FluidSIM 5", "SIMATIC S7", "SAP", "Sage", "Microsoft Office", "DISY", "ERS", "Heroes",
    "ELO", "Personal Dialog", "Alpha Plan",
  ],
};

export const cncControls: LabeledList = {
  label: { de: "CNC-Steuerungen", en: "CNC controls" },
  items: [
    "Siemens 840D", "Heidenhain Dialog iTNC 530", "Sinumerik 810D / 820D",
    "Grundig Eltropilot", "Mazatrol M32B",
  ],
};

export const interests: LabeledList = {
  label: { de: "Interessen", en: "Interests" },
  items: [
    { de: "Weiterbildung", en: "Continuing education" },
    { de: "3D-Druck", en: "3D printing" },
    { de: "Radfahren", en: "Cycling" },
    { de: "Wandern", en: "Hiking" },
  ],
};

export const skills: LabeledList[] = [languages, software, cncControls, interests];
