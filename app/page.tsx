import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Credentials from "@/components/Credentials";
import Process from "@/components/Process";
import BuildingTypesTeaser from "@/components/BuildingTypesTeaser";
import ResourcesTeaser from "@/components/ResourcesTeaser";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Credentials />
      <Process />
      <BuildingTypesTeaser />
      <ResourcesTeaser />
      <CtaBand />
    </>
  );
}
