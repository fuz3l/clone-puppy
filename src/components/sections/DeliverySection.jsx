import Container from "@/components/ui/Container";
import { Plane, Truck, Shield, Sparkles } from "lucide-react";

/**
 * DeliverySection covering courier, transport care, and travel guarantees.
 */
export default function DeliverySection() {
  const highlights = [
    {
      title: "VIP Pet Nanny Flight Service",
      desc: "Our trained couriers fly in-cabin with your puppy, providing continuous hydration, soothing care, and regular live updates.",
      icon: Plane,
    },
    {
      title: "Doorstep Temperature Transport",
      desc: "Locally delivered in customized, air-filtered pet transport vehicles driven by experienced veterinary technicians.",
      icon: Truck,
    },
    {
      title: "Complete Travel Passport & Health Book",
      desc: "Arrives with an international veterinary health passport, microchip registration certificate, and vaccination record.",
      icon: Shield,
    },
    {
      title: "Welcome Home Starter Hamper",
      desc: "Includes transitional puppy kibble, organic plush chew toy, soothing mother-scented blanket, and travel water bowl.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="delivery"
      aria-labelledby="delivery-title"
      className="py-16 sm:py-24"
    >
      <Container>
        <div className="border-[2.5px] border-cocoa rounded-3xl bg-cream p-7 sm:p-10 md:p-12 shadow-hard relative bg-storybook-dots">
          {/* Authentic Adhesive Tape Accent */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tape-horizontal.png"
            alt=""
            aria-hidden="true"
            className="absolute -top-3.5 left-8 sm:left-12 w-28 sm:w-32 h-auto -rotate-1 pointer-events-none select-none z-10 drop-shadow-xs"
          />

          {/* Section Header */}
          <div className="max-w-2xl mb-12">
            <span className="font-script text-2xl sm:text-3xl text-rust font-bold">
              Safe & gentle travels
            </span>
            <h2
              id="delivery-title"
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cocoa tracking-tight mt-1"
            >
              Delivery & collection
            </h2>
            <p className="font-body text-sm sm:text-base text-cocoa/85 mt-3 leading-relaxed">
              Whether you choose private doorstep delivery or our boutique
              collection lounge, your puppy&apos;s comfort and stress-free
              transition is our highest priority.
            </p>
          </div>

          {/* 4 Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-milk border-2 border-cocoa shadow-hard-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-sand border-2 border-cocoa flex items-center justify-center text-cocoa shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-cocoa mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-cocoa-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
