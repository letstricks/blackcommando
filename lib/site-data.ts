export const SITE_CONFIG = {
  companyName: "Black Cat Commando Security Force",
  shortName: "Black Cat Commando",
  subLabel: "Security Service",
  tagline: "Confidentiality and vigilance are our strong points.",
  description:
    "Trained, police-verified, and disciplined security personnel for textile mills, industrial plants, corporate offices, residences, and events across Tiruppur and Tamil Nadu.",
  address: {
    line1: "No. 518/418 (Upstairs), P.N. Road",
    landmark: "Opp. Pushpa Theatre Bus Stop",
    city: "Tiruppur",
    state: "Tamil Nadu",
    postalCode: "641602",
    country: "India",
    full: "No. 518/418 (Upstairs), P.N. Road, Opp. Pushpa Theatre Bus Stop, Tiruppur, Tamil Nadu 641602",
    short: "P.N. Road, Opp. Pushpa Bus Stop, Tiruppur — 641602",
  },
  contact: {
    primaryPhoneDisplay: "+91 95004 27215",
    primaryPhoneHref: "tel:+919500427215",
    primaryWhatsappDigits: "919500427215",
    secondaryPhoneDisplay: "+91 86818 17565",
    secondaryPhoneHref: "tel:+918681817565",
    email: "bccsec.force@gmail.com",
    emailHref: "mailto:bccsec.force@gmail.com",
    hours: "Open 24 Hours · 365 Days",
  },
  map: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.03880244639!2d77.3387753!3d11.1104861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907be39d3b881%3A0xe4559940cdad1111!2sBlack%20Cat%20Commando%20Security%20Force!5e0!3m2!1sen!2sin!4v1794385300407!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=11.1104861,77.3387753&destination_place_id=ChIJgbjTOb4HqTsRERGtzUCZVeQ",
    coordinates: "11.1105° N, 77.3388° E",
  },
  credentials: {
    isoStandard: "ISO 9001:2015",
    certificateNo: "230422083182QRA",
    accreditationBody: "Qchecker Reckoning Accreditation (QRA)",
    validity: "03 Jan 2026 — 02 Jan 2029",
    pan: "ABFFB6765P",
    gst: "33ABFFB6765P1ZW",
    sac: "998525",
    govtReg: "1227",
  },
  documents: [
    {
      id: "sahai-quotation",
      title: "Service Agreement & Commercial Quotation",
      subtitle: "Standard Service Terms, Deployment Roster & Rate Schedule (Sahai Automation Qut)",
      fileName: "Sahai automation Qut.pdf",
      href: "/documents/Sahai-automation-Qut.pdf",
      meta: "PDF · 6 Pages · Official Quotation & SLA",
    },
    {
      id: "iso-certificate",
      title: "ISO 9001:2015 Certificate of Registration",
      subtitle: "Quality Management System Accreditation for Private Security (QRA)",
      fileName: "BLACKCAT-COMMANDO-ISO-9001-2015.pdf",
      href: "/documents/ISO-9001-2015-Certificate.pdf",
      meta: "PDF · Cert No. 230422083182QRA",
    },
  ],
  standardRates: [
    {
      cadre: "Security Guard",
      dutyHours: "8 Hours / Day",
      dutyDays: "26 Days / Month",
      monthlyRate: 20000,
    },
    {
      cadre: "Head Guard / Security Officer",
      dutyHours: "8 Hours / Day",
      dutyDays: "26 Days / Month",
      monthlyRate: 22000,
    },
  ],
} as const;

export const SERVICES_LIST = [
  {
    num: "01",
    title: "Armed & Unarmed Guards",
    desc: "Uniformed, police-verified personnel for corporate offices, spinning mills, and commercial campuses.",
  },
  {
    num: "02",
    title: "Residential Security",
    desc: "Gatekeeper access control, visitor register management, and round-the-clock perimeter rounds.",
  },
  {
    num: "03",
    title: "Event & VIP Crowd Security",
    desc: "Structured crowd management, entry screening, and executive stage perimeter protection.",
  },
  {
    num: "04",
    title: "Industrial & Warehouse Security",
    desc: "Material gate-pass verification, shift labor frisking, and inventory loss prevention.",
  },
  {
    num: "05",
    title: "Corporate & Retail Security",
    desc: "Front-desk concierge reception, anti-pilferage surveillance, and visitor pass issuance.",
  },
  {
    num: "06",
    title: "Bodyguard & Escort Services",
    desc: "Discreet personal protection officers (PSO) and secure executive transit convoys.",
  },
  {
    num: "07",
    title: "Patrol & Quick Response Team",
    desc: "Mobile night patrol units with direct 24/7 Tiruppur control room dispatch.",
  },
  {
    num: "08",
    title: "Security Risk Consulting",
    desc: "Physical site audits, CCTV blind-spot mapping, and emergency response SOP design.",
  },
] as const;

export const GUARD_PROFILES = [
  {
    id: "armed",
    num: "01",
    title: "Armed Security Guard",
    category: "High-Security & Cash Transit",
    image: "/guard-armed.jpg",
    specs: [
      "Statutory firearms compliance",
      "Cash transit and high-value escort",
      "Police-verified service records",
    ],
    desc: "Licensed armed operatives deployed for banks, cash replenishment convoys, jewelry showrooms, and high-value industrial yards.",
  },
  {
    id: "radio",
    num: "02",
    title: "Tactical Patrol & Comms Officer",
    category: "24/7 Wireless Command Link",
    image: "/guard-radio.jpg",
    specs: [
      "Direct control room radio link",
      "Hourly shift check-in logs",
      "Rapid backup dispatch protocol",
    ],
    desc: "Equipped with two-way VHF/UHF transceivers maintaining continuous coordination with our Tiruppur central control desk.",
  },
  {
    id: "attention",
    num: "03",
    title: "Commercial & Industrial Guard",
    category: "Static Gate & Mill Discipline",
    image: "/guard-attention.jpg",
    specs: [
      "Material gate-pass verification",
      "Visitor and vehicle register control",
      "Fire safety and first-aid drilled",
    ],
    desc: "Vigilant front-gate access control, shift worker frisking, vehicle inspection, and perimeter watch for textile mills and warehouses.",
  },
  {
    id: "salute",
    num: "04",
    title: "Executive Protocol & Corporate Guard",
    category: "Front-Desk & Executive Presence",
    image: "/guard-salute.jpg",
    specs: [
      "Front-desk concierge etiquette",
      "VIP executive movement escort",
      "Strict uniform & turnout standard",
    ],
    desc: "Courteous, alert protection tailored for corporate headquarters, hospital entrances, and executive hospitality suites.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${SITE_CONFIG.contact.primaryWhatsappDigits}?text=${encodeURIComponent(
    message
  )}`;
}

