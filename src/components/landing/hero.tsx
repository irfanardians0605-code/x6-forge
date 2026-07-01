"use client";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroNetwork from "./hero-network";

export default function Hero() {
  return (
    <section
      className="
        relative

        flex

        min-h-[88vh]

        items-center
        justify-center

        overflow-hidden

        bg-[#09090B]

        px-6

        pt-24
        pb-20
      "
    >
      {/* Background */}

      <HeroBackground />

      {/* Hero */}

      <div className="relative z-10 flex flex-col items-center">

        <HeroContent />

        <HeroNetwork />

      </div>

    </section>
  );
}