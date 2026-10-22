import Container from "@/components/ui/Container";
import { Search, Video, ShieldCheck, HeartHandshake } from "lucide-react";

/**
 * HowItWorks section detailing the 4-step ethical adoption process.
 */
export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Browse & Fall in Love",
      desc: "Explore authentic photo albums, birth certificates, and playful video clips of each sweet pup.",
      icon: Search,
      tapeRotate: "-rotate-2",
    },
    {
      num: "02",
      title: "Meet via Video Call",
      desc: "Schedule a live WhatsApp video consultation with your puppy counselor to see their lively personality in real-time.",
      icon: Video,
      tapeRotate: "rotate-2",
    },
    {
      num: "03",
      title: "Complete Vet Check",
      desc: "Every puppy receives a final comprehensive veterinary health clearance, full vaccinations, and microchip registration.",
      icon: ShieldCheck,
      tapeRotate: "-rotate-1",
    },
    {
      num: "04",
      title: "Safe Delivery Home",
      desc: "Doorstep courier in climate-controlled cabins or VIP airport collection, complete with an organic puppy starter hamper.",
      icon: HeartHandshake,
      tapeRotate: "rotate-3",
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="py-16 sm:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-script text-2xl sm:text-3xl text-rust font-bold">
            Simple, honest & caring
          </p>
          <h2
            id="how-it-works-title"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cocoa tracking-tight mt-1"
          >
            How adoption works
          </h2>
          <p className="font-body text-sm sm:text-base text-cocoa-muted mt-3">
            We ensure a transparent, safe, and joyful experience from your first
            hello to their very first cuddle at home.
          </p>
        </div>

        {/* 4 Storybook Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative border-[2.5px] border-cocoa rounded-3xl bg-milk p-6 shadow-hard flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-200"
              >
                {/* Authentic Adhesive Tape Strip */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tape-horizontal.png"
                  alt=""
                  aria-hidden="true"
                  className={`absolute -top-3 left-6 sm:left-8 w-20 sm:w-24 h-auto ${step.tapeRotate} pointer-events-none select-none z-10 drop-shadow-xs`}
                />

                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl text-sand-dark tracking-tight">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-sand border-2 border-cocoa flex items-center justify-center text-cocoa shadow-hard-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-cocoa mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-cocoa-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between text-xs font-bold text-rust">
                  <span>Step {step.num}</span>
                  <span>🐾</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
