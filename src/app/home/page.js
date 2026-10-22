import { Suspense } from "react";
import HomeClient from "@/components/home/HomeClient";

export const metadata = {
  title: "TeddyPups — Premium Teacup Puppies in Dubai",
  description:
    "Meet your new best friend. Premium teacup puppies available in Dubai — Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu. Visit our showroom or import from trusted Korean breeders.",
};

export default function HomePage() {
  return (
    <Suspense>
      <HomeClient />
    </Suspense>
  );
}
