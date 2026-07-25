export type Resource = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "hiring-a-steel-erector-checklist",
    title: "What a GC Should Check Before Hiring a Steel Erector",
    dek: "The questions that actually separate a capable erector from a liability — before you sign the sub-agreement, not after.",
    category: "For General Contractors",
    readTime: "8 min read",
  },
  {
    slug: "osha-10-vs-osha-30",
    title: "OSHA 10 vs. OSHA 30: What It Actually Means for Your Steel Crew",
    dek: "The difference isn't just hours of training — it's who on your crew is qualified to do what, and why that matters on a structural job.",
    category: "Safety & Compliance",
    readTime: "6 min read",
  },
  {
    slug: "bolted-vs-welded-connections",
    title: "Bolted vs. Welded Steel Connections: What's the Difference",
    dek: "Both show up on the same set of structural drawings. Here's what each one is actually doing, and why the engineer of record picked one over the other.",
    category: "Structural Steel Basics",
    readTime: "7 min read",
  },
  {
    slug: "steel-erection-bid-timeline",
    title: "How Long Should a Steel Erection Bid Actually Take?",
    dek: "What's realistic to expect from takeoff to number-in-hand, and what slows a bid down that's actually within your control.",
    category: "For General Contractors",
    readTime: "6 min read",
  },
];
