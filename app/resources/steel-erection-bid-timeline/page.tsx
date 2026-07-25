import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How Long Should a Steel Erection Bid Actually Take?",
  description:
    "What's realistic to expect from takeoff to number-in-hand on a structural steel erection bid, and what actually slows it down.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="For General Contractors"
        readTime="6 min read"
        title="How Long Should a Steel Erection Bid Actually Take?"
        dek="What's realistic to expect from takeoff to number-in-hand, and what slows a bid down that's actually within your control."
      >
        <p>
          "How fast can you get us a number" is one of the first questions
          on almost every steel erection inquiry, and the honest answer is:
          it depends on how complete the bid package is when it lands in
          the erector's inbox. A complete set of structural drawings with
          clear connection details can turn around in days. An incomplete
          package with unresolved RFIs can stretch for weeks — and most of
          that delay traces back to the bid package, not the erector.
        </p>

        <h2>What a Fast, Accurate Bid Actually Requires</h2>
        <ul>
          <li>Complete structural drawings, not a partial or preliminary set</li>
          <li>Connection details specified — bolted, welded, or both — not left to be assumed</li>
          <li>A site plan showing access, laydown area, and any site-specific constraints</li>
          <li>A realistic project schedule, including any hard milestone dates</li>
          <li>Clarity on scope boundaries — does the bid include deck, joists, and bracing, or just primary steel</li>
        </ul>
        <p>
          When all five of those show up in the initial bid request, a
          capable erector can usually turn a bid around in three to seven
          business days, depending on project size. Missing pieces don't
          just slow the bid down — they force assumptions into the number,
          which is exactly what turns into change orders later.
        </p>

        <h2>What Actually Slows a Bid Down</h2>
        <h3>Incomplete or "For Reference Only" Drawings</h3>
        <p>
          A drawing set stamped "not for construction" or missing connection
          details forces a choice: bid with assumptions clearly stated, or
          wait for a complete set. Either is workable, but it should be a
          conscious decision on the GC's side, not a surprise when the bid
          takes longer than expected.
        </p>

        <h3>Unclear Scope Boundaries</h3>
        <p>
          Steel packages sometimes split scope between erector, fabricator,
          and other trades in ways that aren't obvious from the drawings
          alone — who's providing deck, who's installing joists, whether
          miscellaneous metals are in or out. Getting scope boundaries
          explicit up front prevents a bid from having to guess, and
          prevents two different subs from bidding — or not bidding — the
          same scope.
        </p>

        <h3>No Site Visit Option on Complex Sites</h3>
        <p>
          On straightforward sites, drawings and a site plan are usually
          enough. On tight urban sites, sites with existing structures
          nearby, or unusual access conditions, a site visit before bidding
          meaningfully improves bid accuracy — and skipping it to save a few
          days upfront often costs more time later reconciling a bid against
          field conditions no one accounted for.
        </p>

        <h2>What a Realistic Timeline Looks Like</h2>
        <p>
          For a straightforward commercial building with a complete drawing
          set: three to seven business days is realistic for erection
          alone. Add crane availability confirmation and lead time on
          project-specific rigging, and a full mobilization-ready bid
          package might take one to two weeks total. Complex projects —
          heavy industrial loads, unusual site access, phased occupancy —
          reasonably take longer, and a contractor who promises a fast
          number on a genuinely complex job without qualifying that answer
          is telling you something about how carefully they bid, not how
          efficient they are.
        </p>

        <h2>The Short Version</h2>
        <p>
          A complete bid package with clear drawings, connection details,
          and scope boundaries should get you a real number in about a
          week. If a bid is taking noticeably longer than that, the first
          place to look isn't the erector — it's whether the package they
          were handed was actually complete enough to bid accurately.
        </p>
      </ArticleLayout>
      <CtaBand
        title="Have a complete bid package ready?"
        subtitle="Send it over — we'll turn a real number around fast."
      />
    </>
  );
}
