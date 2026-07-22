import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LgpdBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ok = localStorage.getItem("rd-lgpd");
    if (!ok) setVisible(true);
  }, []);
  if (!visible) return null;
  const accept = () => {
    localStorage.setItem("rd-lgpd", "1");
    setVisible(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl">
      <div className="glass flex flex-col items-start gap-3 rounded-2xl border p-4 shadow-[var(--shadow-elevated)] md:flex-row md:items-center md:gap-6">
        <p className="text-sm text-foreground/85">
          Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar
          tráfego. Ao continuar, você concorda com nossa{" "}
          <a href="/politica-de-privacidade" className="font-medium text-primary underline underline-offset-4">
            Política de Privacidade
          </a>{" "}
          e com a LGPD.
        </p>
        <div className="flex shrink-0 gap-2 md:ml-auto">
          <Button variant="ghost" size="sm" onClick={accept}>Preferências</Button>
          <Button size="sm" onClick={accept} className="bg-gradient-brand text-primary-foreground">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
