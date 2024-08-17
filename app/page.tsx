import { Main, Section, Container } from "@/components/craft";

import { SpeedInsights } from "@vercel/speed-insights/next"

import Hero from "@/components/lp/hero-five"
import FeatureTwo from "@/components/lp/feature-two"
import FooterFour from "@/components/lp/footer-four"

export default function Home() {
  return (
    <Main>
      <Hero />
      <FeatureTwo />
      <FooterFour />
    </Main>
  );
}
