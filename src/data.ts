export type Pillar = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metric: { value: string; label: string };
};

export const pillars: Pillar[] = [
  {
    id: "network",
    number: "01",
    title: "Network Design & Footprint",
    tagline: "Where your goods should live.",
    description:
      "We rebuild distribution footprints from first principles — modelling demand, duty regimes, labour markets and service promises across every candidate node before a single lease is signed.",
    capabilities: [
      "Greenfield & brownfield network modelling",
      "Nearshoring and China+1 relocation strategy",
      "Distribution centre siting and automation business case",
      "Cost-to-serve and channel profitability mapping",
    ],
    metric: { value: "18%", label: "median landed-cost reduction" },
  },
  {
    id: "resilience",
    number: "02",
    title: "Risk & Resilience Engineering",
    tagline: "Disruption is a design input.",
    description:
      "Multi-tier supplier visibility, war-gamed scenarios and pre-authorised playbooks that turn a port closure or tariff shock from a quarterly loss into a two-day operational footnote.",
    capabilities: [
      "Tier-2 / Tier-3 supplier discovery and mapping",
      "Scenario war-gaming and continuity playbooks",
      "Dual-sourcing and buffer strategy calibration",
      "Geopolitical and tariff exposure monitoring",
    ],
    metric: { value: "72h", label: "average disruption recovery" },
  },
  {
    id: "digital",
    number: "03",
    title: "Digital Control Towers",
    tagline: "One version of the truth.",
    description:
      "We stand up vendor-neutral control towers that fuse ERP, TMS, WMS and carrier telemetry into a single decision surface — with the governance and change management to make it stick.",
    capabilities: [
      "Control tower architecture and vendor selection",
      "Demand sensing and predictive ETA models",
      "S&OP / IBP process redesign",
      "Data governance and master-data remediation",
    ],
    metric: { value: "99.2%", label: "shipment visibility achieved" },
  },
  {
    id: "sustainability",
    number: "04",
    title: "Decarbonisation & Compliance",
    tagline: "Auditable, not aspirational.",
    description:
      "Scope 3 baselining, modal shift economics and CSRD-ready reporting — built so that your sustainability commitments survive both the auditor and the CFO.",
    capabilities: [
      "Scope 3 logistics emissions baselining (GLEC)",
      "Modal shift and fleet transition roadmaps",
      "CSRD, CBAM and UFLPA readiness",
      "Supplier engagement and abatement programmes",
    ],
    metric: { value: "31%", label: "freight emissions abated" },
  },
];

export type CaseStudy = {
  id: string;
  sector: string;
  region: string;
  title: string;
  challenge: string;
  approach: string;
  image: string;
  duration: string;
  results: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    sector: "Industrial Manufacturing",
    region: "EMEA · APAC",
    title: "Rewiring a €4.2bn components network after the Red Sea diversion",
    challenge:
      "A German tier-one automotive supplier faced 19-day transit extensions and €48m of exposed inventory when Suez routings collapsed. Line-stoppage penalties were accruing at €1.1m per day.",
    approach:
      "We deployed a 9-person team across Hamburg, Chennai and Singapore, rebuilt the multimodal routing model in six weeks, opened a Gulf transload hub and renegotiated 41 carrier contracts under a single index-linked framework.",
    image:
      "https://images.pexels.com/photos/27130409/pexels-photo-27130409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    duration: "22 weeks",
    results: [
      { value: "€31m", label: "annualised freight savings" },
      { value: "11 days", label: "transit time recovered" },
      { value: "0", label: "line stoppages post-launch" },
    ],
  },
  {
    id: "cs-2",
    sector: "Consumer Health",
    region: "North America",
    title: "A cold-chain footprint rebuilt around same-day service promises",
    challenge:
      "A US consumer health group was running 14 legacy DCs with overlapping catchments, 82% on-time delivery and temperature excursions on 3.4% of pharmaceutical lanes.",
    approach:
      "Full network optimisation across 2,100 SKUs, consolidation to seven automated nodes, and a validated cold-chain protocol with continuous telemetry on every pallet from dock to door.",
    image:
      "https://images.pexels.com/photos/4483862/pexels-photo-4483862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    duration: "34 weeks",
    results: [
      { value: "97.6%", label: "on-time in-full" },
      { value: "$54m", label: "working capital released" },
      { value: "0.2%", label: "excursion rate" },
    ],
  },
  {
    id: "cs-3",
    sector: "Fashion & Retail",
    region: "LATAM · EMEA",
    title: "Nearshoring 40% of production without losing a single season",
    challenge:
      "A global apparel retailer needed to de-risk Asian concentration ahead of tariff changes, but its calendar allowed no margin for supplier qualification failure.",
    approach:
      "We ran a 300-supplier capability screen across Mexico, Guatemala and Portugal, built a dual-run transition model, and embedded a joint PMO with the client's sourcing organisation for three cycles.",
    image:
      "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    duration: "48 weeks",
    results: [
      { value: "40%", label: "volume nearshored" },
      { value: "23 days", label: "lead time compression" },
      { value: "18%", label: "Scope 3 reduction" },
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  city: string;
  tz: string;
  focus: string;
  image: string;
};

export const team: Member[] = [
  {
    name: "Adaeze Okonjo",
    role: "Global Managing Partner",
    city: "London",
    tz: "GMT",
    focus: "Network strategy · Board advisory",
    image:
      "https://images.pexels.com/photos/13801472/pexels-photo-13801472.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Henrik Lindqvist",
    role: "Senior Partner, Europe",
    city: "Rotterdam",
    tz: "CET",
    focus: "Port operations · Multimodal",
    image:
      "https://images.pexels.com/photos/37605831/pexels-photo-37605831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Mei-Lin Chao",
    role: "Partner, Asia Pacific",
    city: "Singapore",
    tz: "SGT",
    focus: "Sourcing · Supplier resilience",
    image:
      "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Rafael Duarte",
    role: "Partner, Americas",
    city: "São Paulo",
    tz: "BRT",
    focus: "Nearshoring · Trade compliance",
    image:
      "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Yasmin Al-Harbi",
    role: "Partner, Middle East",
    city: "Dubai",
    tz: "GST",
    focus: "Transload hubs · Free zones",
    image:
      "https://images.pexels.com/photos/11655430/pexels-photo-11655430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Daniel Okafor",
    role: "Head of Digital Practice",
    city: "Chicago",
    tz: "CST",
    focus: "Control towers · Data platforms",
    image:
      "https://images.pexels.com/photos/26834972/pexels-photo-26834972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

export const offices = [
  { city: "London", region: "EMEA HQ", top: 30, left: 47.5, people: 210 },
  { city: "Rotterdam", region: "Europe", top: 31, left: 49.5, people: 96 },
  { city: "Chicago", region: "Americas", top: 35, left: 23, people: 148 },
  { city: "São Paulo", region: "LATAM", top: 70, left: 33, people: 74 },
  { city: "Dubai", region: "Middle East", top: 45, left: 61.5, people: 63 },
  { city: "Singapore", region: "APAC HQ", top: 57, left: 76, people: 185 },
  { city: "Shanghai", region: "Greater China", top: 40, left: 80.5, people: 122 },
  { city: "Johannesburg", region: "Africa", top: 72, left: 55, people: 48 },
];

export const insights = [
  {
    tag: "Trade Policy",
    date: "Feb 2026",
    title: "The tariff cliff: modelling 2026 reciprocal duty scenarios",
    read: "12 min read",
  },
  {
    tag: "Technology",
    date: "Jan 2026",
    title: "Agentic planning: where AI actually belongs in your S&OP cycle",
    read: "9 min read",
  },
  {
    tag: "Sustainability",
    date: "Dec 2025",
    title: "CSRD year two — what auditors are now rejecting in Scope 3 claims",
    read: "15 min read",
  },
];
