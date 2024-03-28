"use client";
import { TextGenerateEffect } from "@/lib/generate-text";

const introWords = `a unique Web3 token that carries the spirit of a true legend—not just any legend,
                    but that of Chuck Norris's own dog, Bear. For those who might not know,
                    Bear was an Akita, a breed admired for its loyalty, bravery, and protective instincts. Qualities
                    that made Bear the perfect sidekick for Chuck Norris, a name synonymous with unparalleled strength and resilience.
`;

export function Intro() {
  return <TextGenerateEffect words={introWords} />;
}
