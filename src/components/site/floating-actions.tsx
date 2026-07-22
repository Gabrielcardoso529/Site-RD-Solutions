import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={cn(
          "pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5",
          show ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2"
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_150)] px-4 py-3 text-sm font-medium text-white shadow-[0_20px_50px_-15px_oklch(0.62_0.18_150/0.7)] transition hover:opacity-95"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden pr-1 md:inline">Fale conosco</span>
      </a>
    </div>
  );
}
