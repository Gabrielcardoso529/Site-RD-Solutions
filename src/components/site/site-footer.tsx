import { Instagram, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer id="contato" className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Contabilidade estratégica, tecnologia integrada e atendimento humanizado para empresas
              que querem crescer com segurança.
            </p>
            <div className="flex gap-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="Instagram da RD Solutions"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              {[
                "Contabilidade Mensal",
                "Planejamento Tributário",
                "BPO Financeiro",
                "Abertura de Empresas",
                "Consultoria Empresarial",
              ].map((s) => (
                <li key={s}>
                  <a href="/#servicos" className="hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Empresa
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>
                <a href="/#sobre" className="hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/ferramentas" className="hover:text-primary">
                  Ferramentas inteligentes
                </a>
              </li>
              <li>
                <a href="/area-cliente" className="hover:text-primary">
                  Área do cliente
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-primary">
                  Privacidade e LGPD
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-primary" />{" "}
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp direto
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" />{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              Ver no Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados. CNPJ
            11.219.740/0001-30
          </p>
          <div className="flex gap-4">
            <a href="/politica-de-privacidade" className="hover:text-foreground">
              Política de Privacidade e LGPD
            </a>
            <a href="/#faq" className="hover:text-foreground">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
