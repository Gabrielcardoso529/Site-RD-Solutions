import { useEffect, useState, type ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { link } from "fs";


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 py-2 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <button
          type="button"
          aria-label="Voltar ao início da página"
          className="shrink-0 cursor-pointer"
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

        <nav 
          arial-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>  
          ))}  
        </nav> 

        <div className="hidden items-center gap-2 lg:flex"  >
          <ThemeToggle />

          <Button
            asChild
            variant="outline"
            className="rounded-full"
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              Falar com um especialista
            </a>  
          </Button>  

          <Button
            asChild
            className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
          >
            <a href="/#contato">
              Diagnóstico gratuito
              <ArrowRight className="ml-1.5 h-4 w-4" />
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
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>   
        </div> 
      </div>

      {open && (
        <div className="container-page mt-2 lg:hidden">
          <div className="flex flex-col gap-1 rounded-2x1 border border-border/70 bg-background/95 p-3 shadow-lg backdrop-blur-xl">
            <nav
              aria-label="Navegação mobile"
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.to}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-x1 px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {link.label}
                </a>  
              ))}
            </nav> 

          <div className="mt-2flex flex-col gap-2 border-t border-border/70 pt-3">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full"
              >
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
                className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-95"
              >
                <a 
                  href="/#contato"
                  onClick={() => setOpen(false)}
                >
                  Diagnóstico gratuito
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>  
              </Button>    
            </div>   
          </div>
        </div>
      )}
    </header>
  );
}      

export function useReserveHeader() {
  return "pt-24";
}

export function Link_(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}