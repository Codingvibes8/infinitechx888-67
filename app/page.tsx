import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { Results } from "@/components/sections/results";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <WhatWeBuild />
      <Results />
      <FeaturedWork />
      <Process />
      <CTA />
    </>
  );
}
