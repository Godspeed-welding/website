import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "What a GC Should Check Before Hiring a Steel Erector",
  description:
    "The questions that actually separate a capable steel erector from a liability, before you sign the sub-agreement.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="For General Contractors"
        readTime="8 min read"
        title="What a GC Should Check Before Hiring a Steel Erector"
        dek="The questions that actually separate a capable erector from a liability — before you sign the sub-agreement, not after."
      >
        <p>
          Every steel erection bid looks reasonable on paper. A number, a
          schedule, a list of past projects. The problem is that the things
          that actually determine whether a steel package goes smoothly —
          or turns into the reason your schedule slips six weeks — don't
          show up in a bid tab. They show up in the questions most GCs don't
          think to ask until they're already mid-project with a crew that
          isn't performing.
        </p>

        <h2>Start With Who's Actually Swinging the Iron</h2>
        <p>
          A lot of companies that bid steel erection work are essentially
          brokers — they carry the insurance and the contract, then staff
          the job with whatever labor is available that week. That's not
          automatically a problem, but it is something you need to know
          before you sign, because it changes who's accountable when
          something goes wrong on site.
        </p>
        <p>
          Ask directly: is this the erector's own crew, or subcontracted
          labor? If it's subcontracted, ask who's supervising on site and
          who carries the safety program. A erector that runs its own crews
          top to bottom has more consistency — the same standard shows up on
          every job, not just the ones being watched closely.
        </p>

        <h2>Safety Documentation, Not Just a Safety Statement</h2>
        <p>
          Almost every erector will tell you safety is a priority. What
          matters is whether they can actually produce the paperwork behind
          that claim:
        </p>
        <ul>
          <li>Current OSHA 10 or OSHA 30 certifications for crew members and supervisors</li>
          <li>An EMR (Experience Modification Rate) — and whether it's at, above, or below 1.0</li>
          <li>A written site-specific safety plan, not a generic boilerplate document</li>
          <li>Fall protection procedures specific to structural steel erection, not general construction</li>
        </ul>
        <p>
          An EMR above 1.0 doesn't automatically disqualify a contractor,
          but it's a conversation worth having. It's an insurance-industry
          number that reflects actual claims history, which makes it one of
          the few genuinely objective safety indicators available before a
          contractor ever sets foot on your site.
        </p>

        <h2>Bonding and Insurance Capacity Match the Job Size</h2>
        <p>
          A contractor who's comfortably bonded for a $500,000 job isn't
          automatically ready for a $5 million one. Bonding capacity is a
          reasonable proxy for financial stability — a contractor stretched
          thin financially is a contractor more likely to cut corners on
          schedule or staffing when cash gets tight mid-project.
        </p>

        <h2>How They Talk About Schedule Risk</h2>
        <p>
          This is the part that's easy to miss in a bid review, but it
          matters more than almost anything else: how does the erector talk
          about things that could delay the job? A contractor who insists
          nothing will go wrong is telling you less than one who walks
          through exactly how weather, RFIs, or late deliveries get handled
          and communicated.
        </p>
        <blockquote>
          The erectors worth hiring aren't the ones who promise a perfect
          schedule. They're the ones who can tell you exactly what happens
          the week something goes sideways.
        </blockquote>

        <h2>References From Projects Similar to Yours</h2>
        <p>
          A reference from a small tenant build-out doesn't tell you much
          about how a contractor performs on a 100,000 square foot
          warehouse. Ask for references specifically from projects similar
          in scale and building type to the one you're bidding — and ask
          those references pointed questions about schedule performance and
          communication, not just "would you use them again."
        </p>

        <h2>The Short Version</h2>
        <p>
          Before you sign a steel erection sub-agreement, you should know:
          who's actually on the crew, what their real safety numbers look
          like, whether their bonding capacity matches your job, and how
          they've handled schedule pressure on projects like yours. Every
          one of those is answerable before contract — the mistake is
          waiting to find out until they're not.
        </p>
      </ArticleLayout>
      <CtaBand
        title="Bidding a steel package?"
        subtitle="Send the scope — we'll answer every question on this list directly."
      />
    </>
  );
}
