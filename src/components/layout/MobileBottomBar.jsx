import { MessageCircle, Phone } from "lucide-react";

/**
 * Mobile-only Fixed Bottom Bar.
 * Provides sticky high-converting access to WhatsApp chat and inquiries on small viewports (<= 768px).
 */
export default function MobileBottomBar() {
  return (
    <aside
      id="mobile-bottom-bar"
      role="toolbar"
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-cream/95 backdrop-blur-md border-t-2 border-cocoa px-4 py-2.5 shadow-hard"
    >
      <div className="flex items-center gap-3 max-w-sm mx-auto">
        <a
          href="tel:+971501234567"
          aria-label="Call TeddyPups Concierge"
          className="w-12 h-11 rounded-full bg-milk border-2 border-cocoa flex items-center justify-center text-cocoa shadow-hard-sm active:translate-y-0.5 active:shadow-none"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 rounded-full bg-green text-milk font-bold text-sm border-2 border-cocoa flex items-center justify-center gap-2 shadow-hard-sm active:translate-y-0.5 active:shadow-none"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Chat about our puppies</span>
        </a>
      </div>
    </aside>
  );
}
