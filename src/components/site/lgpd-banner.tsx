import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LgpdBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const choice = localStorage.getItem("rd-lgpd");
    if (!choice) setVisible(true);
  }, []);
  if (!visible) return null;
  const accept = () => {
    localStorage.setItem("rd-lgpd", "accepted");
    setVisible(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl">
      <div className="glass flex flex-col items-start gap-4 rounded-2xl border p-4 shadow-[var(--shadow-elevated)] md:flex-row md:items-center md:gap-6">
        <p className="text-sm leading-relaxed text-foreground/85">
          Utilizamos recursos necessários para o funcionamento do site e para lembrar algumas
          preferências de navegação. Saiba mais sobre como tratamos seus dados em nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="font-medium text-primary underline underline-offset-4"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2 md:ml-auto">
          <Button
            size="sm"
            onClick={accept}
            className="rounded-full bg-gradient-brand text-primary-foreground"
          >
            Entendi
          </Button>
        </div>
      </div>
    </div>
  );
}
