import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work | Commercial Steel Erection Projects",
  description:
    "Structural steel erection, welding, and fabrication work from Godspeed Welding job sites — retail, industrial, and custom architectural steel.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Straight from the job site."
        intro="Erection, welding, and fabrication across multiple states — retail, industrial, and custom architectural steel. No staged photos, just the work."
      />
      <Gallery />
      <CtaBand />
    </>
  );
}
