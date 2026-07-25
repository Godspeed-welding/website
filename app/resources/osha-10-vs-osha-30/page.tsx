import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "OSHA 10 vs. OSHA 30: What It Means for Your Steel Crew",
  description:
    "The difference between OSHA 10 and OSHA 30 training, and why it matters for who's qualified to do what on a structural steel job.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="Safety & Compliance"
        readTime="6 min read"
        title="OSHA 10 vs. OSHA 30: What It Actually Means for Your Steel Crew"
        dek="The difference isn't just hours of training — it's who on your crew is qualified to do what, and why that matters on a structural job."
      >
        <p>
          OSHA 10 and OSHA 30 get mentioned constantly in construction bid
          documents and prequalification forms, usually as a checkbox: does
          the contractor's crew have it, yes or no. That framing misses what
          actually matters, which is what each course covers and who on a
          structural steel crew needs which one.
        </p>

        <h2>What OSHA 10 Actually Covers</h2>
        <p>
          The OSHA 10-Hour Construction course is an entry-level safety
          training program covering general construction hazards — fall
          protection basics, electrical hazards, struck-by and
          caught-in/between hazards, and personal protective equipment. It's
          designed for entry-level workers and gives a baseline
          understanding of jobsite hazards.
        </p>
        <p>
          For a steel erection crew, OSHA 10 is the floor, not the ceiling.
          It's appropriate for workers on site, but it isn't designed to
          qualify someone to supervise a crew or make safety-critical
          decisions on a structural job.
        </p>

        <h2>What OSHA 30 Adds</h2>
        <p>
          OSHA 30 covers the same core hazard categories in significantly
          more depth, plus material that OSHA 10 doesn't touch: managing
          subcontractors, more detailed fall protection systems, crane and
          rigging safety considerations, and supervisory responsibilities
          under OSHA regulations. It's built for supervisors, foremen, and
          anyone making safety decisions that affect a whole crew, not just
          themselves.
        </p>
        <p>
          On a structural steel job specifically, that distinction matters.
          Steel erection involves working at height, rigging and crane
          operations, and connections work where a supervisor's judgment
          call directly affects whether the crew below them goes home safe.
          A foreman with only OSHA 10 has a real gap in training relative to
          what the role actually demands.
        </p>

        <h2>What This Should Look Like on a Real Crew</h2>
        <ul>
          <li>Entry-level and journeyman ironworkers: OSHA 10 minimum, OSHA 30 increasingly common</li>
          <li>Foremen and site supervisors: OSHA 30, not OSHA 10 — the supervisory content isn't optional for that role</li>
          <li>Safety officers or competent persons designated for fall protection: OSHA 30 plus role-specific training beyond the general course</li>
        </ul>

        <h2>Why This Should Show Up in a Bid Review</h2>
        <p>
          When you're evaluating a steel erector, "our crew is OSHA
          certified" isn't a complete answer. Ask which certification, and
          ask specifically whether foremen and supervisors carry OSHA 30
          rather than just OSHA 10. It's a quick question that tells you
          whether safety training on that crew matches the actual risk
          profile of structural work, or whether it's a minimum box checked
          to satisfy a prequalification form.
        </p>

        <h2>The Short Version</h2>
        <p>
          OSHA 10 is baseline hazard awareness training appropriate for
          entry-level crew members. OSHA 30 is built for supervisors and
          covers material — rigging, crane safety, subcontractor management
          — that a structural steel foreman actually needs. On a steel
          erection crew, both levels should be represented, matched to the
          role each person is actually filling on site.
        </p>
      </ArticleLayout>
      <CtaBand
        title="Want to see our crew's safety training directly?"
        subtitle="Ask us — we'll walk through it before you sign anything."
      />
    </>
  );
}
