import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Bolted vs. Welded Steel Connections: What's the Difference",
  description:
    "What bolted and welded structural steel connections are each doing, and why the engineer of record picked one over the other.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="Structural Steel Basics"
        readTime="7 min read"
        title="Bolted vs. Welded Steel Connections: What's the Difference"
        dek="Both show up on the same set of structural drawings. Here's what each one is actually doing, and why the engineer of record picked one over the other."
      >
        <p>
          Walk any structural steel job site and you'll see both — bolted
          connections at most beam-to-column joints, welded connections at
          moment frames and column splices. Neither one is "better" in the
          abstract. Each does a specific job, and the structural engineer's
          choice between them usually comes down to load type, field
          conditions, and cost.
        </p>

        <h2>Bolted Connections</h2>
        <p>
          Bolted connections join steel members using high-strength bolts
          through pre-drilled or punched holes, typically through
          connection plates shop-welded to one of the two members being
          joined. The bolts are torqued to a specified tension so the
          connection transfers load through friction and bearing rather
          than through a continuous weld.
        </p>
        <p>Bolted connections are common because they're:</p>
        <ul>
          <li>Faster to make in the field than welding, especially overhead or in tight quarters</li>
          <li>Easier to inspect visually and with simple torque verification</li>
          <li>More forgiving of minor field misalignment than a fit-up weld</li>
          <li>Not weather-dependent the way field welding can be</li>
        </ul>

        <h2>Welded Connections</h2>
        <p>
          Welded connections fuse two steel members directly using a filler
          metal that becomes part of the structural steel itself.
          Structural welds — fillet or groove — are sized and detailed on
          the drawings based on the load the connection has to transfer,
          and the weld itself is inspected against AWS D1.1, the structural
          welding code that governs the industry.
        </p>
        <p>Welded connections show up where:</p>
        <ul>
          <li>The connection needs to transfer moment (bending), not just shear — moment frames are a common example</li>
          <li>Column splices need continuity through the full cross-section</li>
          <li>Architectural or clearance constraints don't leave room for bolted connection plates</li>
          <li>Shop conditions allow for higher-quality, more consistent welds than field conditions would</li>
        </ul>

        <h2>Why Most Buildings Use Both</h2>
        <p>
          Most structural steel buildings aren't purely bolted or purely
          welded — they use welded connections in the shop (where
          conditions are controlled and inspection is easier) and bolted
          connections in the field (where speed and forgiving tolerances
          matter more). A typical beam might arrive with connection plates
          already shop-welded on, then get bolted to the column in the
          field. That combination usually produces the best balance of
          quality, schedule, and cost.
        </p>

        <h2>What This Means If You're Reviewing Drawings</h2>
        <p>
          If you're a GC or developer reviewing structural drawings, the
          connection type at each joint isn't just a construction detail —
          it's an indicator of schedule and inspection requirements. Field
          welding takes longer than bolting and needs weather-appropriate
          conditions and a qualified inspector on site. A structural package
          with heavy field welding scope should have that reflected
          honestly in the erection schedule, not treated the same as a
          fully bolted connection scheme.
        </p>

        <h2>The Short Version</h2>
        <p>
          Bolted connections are faster in the field and easier to inspect;
          welded connections handle loads bolting can't and allow for
          higher-quality shop work. The engineer of record picks between
          them based on the load path, not preference — and knowing which
          one shows up where on your drawings tells you something real
          about how the erection schedule should actually be built.
        </p>
      </ArticleLayout>
      <CtaBand
        title="Reviewing a set of structural drawings?"
        subtitle="Send them over — we'll walk the connection scope with you before you bid it out."
      />
    </>
  );
}
