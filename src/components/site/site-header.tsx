import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out",
        scrolled
          ? "border-b border-border/50 bg-background/80 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent py-4",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-all duration-500 ease-out",
          scrolled ? "min-h-12" : "min-h-14",
        )}
      >
        <button
          type="button"
          aria-label="Voltar ao início da página"
          className={cn(
            "shrink-0 cursor-pointer transition-tranform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]",
            scrolled ? "scale-[0.94]" : "scale-100",
          )}
          onClick={() => {
            setOpen(false);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Logo />
        </button>

        <nav arial-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-accent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />

          <Button
            asChild
            variant="outline"
            className="group rounded-full border-border/70 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Falar com um especialista
            </a>
          </Button>

          <Button
            asChild
            className="group rounded-full bg-gradient-brand text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-md"
          >
            <a href="/#contato">
              Diagnóstico gratuito
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expended={open}
            className="rounded-full transition-transform duration-300 active:scale-95"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "container-page overflow-hidden transition-all duration-300 ease-out lg:hidden",
          open
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
        )}
      >
        <div className="mt-2 flex flex-col gap-1 rounded-2x1 border border-border/70 bg-background/95 p-3 shadow-xl backdrop-blur-2xl">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className="rounded-x1 px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-2 flex flex-col gap-2 border-t border-border/70 pt-3">
            <Button asChild variant="outline" className="w-full rounded-full">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                Falar com especialista
              </a>
            </Button>

            <Button
              asChild
              className="group w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
            >
              <a href="/#contato" onClick={() => setOpen(false)}>
                Diagnóstico gratuito
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
