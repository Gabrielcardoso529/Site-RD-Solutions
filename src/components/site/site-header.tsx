import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline" className="rounded-full">
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          </Button>
          <Button asChild className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95">
            <a href="/#contato">
              Solicitar proposta <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="glass container-page mt-2 flex flex-col gap-1 rounded-2xl border p-3 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-1 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" className="rounded-full">
              <a href={site.whatsappUrl}>WhatsApp</a>
            </Button>
            <Button asChild className="rounded-full bg-gradient-brand text-primary-foreground">
              <a href="/#contato">Proposta</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function useReserveHeader() {
  return "pt-24";
}

export function Link_(props: React.ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
