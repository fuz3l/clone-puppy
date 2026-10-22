import Container from "@/components/ui/Container";

/**
 * HappyFamilies section highlighting real reviews and happy adoption stories.
 */
export default function HappyFamilies() {
  const stories = [
    {
      id: "coco-story",
      family: "The Al-Mansoor Family",
      location: "Downtown Dubai",
      pup: "Coco (Maltipoo)",
      quote:
        "Coco arrived healthy, energetic, and already paper-trained! The team guided us through every dietary step.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
      tapeRotate: "-rotate-2",
    },
    {
      id: "oliver-story",
      family: "Sarah & Liam",
      location: "Dubai Marina",
      pup: "Oliver (Shih Tzu)",
      quote:
        "The live video consultation was so reassuring. Seeing Oliver play before flying over gave us 100% confidence.",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
      tapeRotate: "rotate-1",
    },
    {
      id: "milo-story",
      family: "Elena K.",
      location: "Palm Jumeirah",
      pup: "Milo (Cavapoo)",
      quote:
        "We couldn't have asked for a more sweet-tempered companion. TeddyPups's lifetime advice has been invaluable.",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
      tapeRotate: "-rotate-3",
    },
  ];

  return (
    <section
      id="happy-families"
      aria-labelledby="happy-families-title"
      className="py-16 sm:py-24 bg-sand/30 border-y-2 border-cocoa/20"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-script text-2xl sm:text-3xl text-rust font-bold">
            Forever home stories
          </p>
          <h2
            id="happy-families-title"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cocoa tracking-tight mt-1"
          >
            Happy families
          </h2>
          <p className="font-body text-sm sm:text-base text-cocoa-muted mt-3">
            Nothing brings us more joy than watching our puppies grow up
            cherished in loving forever homes.
          </p>
        </div>

        {/* Polaroid Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {stories.map((story) => (
            <article
              key={story.id}
              className="relative border-[2.5px] border-cocoa rounded-3xl bg-milk p-5 sm:p-6 shadow-hard flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-200"
            >
              {/* Authentic Adhesive Tape Accent */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tape-horizontal.png"
                alt=""
                aria-hidden="true"
                className={`absolute -top-3 left-8 sm:left-10 w-22 sm:w-26 h-auto ${story.tapeRotate} pointer-events-none select-none z-10 drop-shadow-xs`}
              />

              {/* Photo Frame */}
              <div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-cocoa bg-sand mb-4 shadow-hard-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.image}
                    alt={`${story.pup} with ${story.family}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-1 text-rust mb-2">
                  {"★".repeat(5)}
                </div>

                <p className="font-body text-xs sm:text-sm text-cocoa/85 italic leading-relaxed mb-4">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {/* Family details */}
              <div className="pt-3 border-t border-sand flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm text-cocoa">
                    {story.family}
                  </h3>
                  <p className="font-body text-xs text-cocoa-muted">
                    {story.location}
                  </p>
                </div>
                <span className="font-script text-base text-rust font-bold">
                  {story.pup}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
