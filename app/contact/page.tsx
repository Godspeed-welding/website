import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Get a Bid | Commercial Steel Erection & Fabrication",
  description:
    "Request a bid from Godspeed Welding for structural steel erection, welding, or custom fabrication. We bid nationwide.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get a Bid"
        title="Call, text, or email — whatever's fastest."
        intro="Tell us where the project is, what it is, and when you need steel in the air. We bid nationwide and travel for the right job."
      />
      <Contact />
    </>
  );
}
