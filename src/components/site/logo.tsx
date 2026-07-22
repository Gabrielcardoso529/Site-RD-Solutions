import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_rd.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="RD Solutions - Assessoria Contábil">
      <img
        src={logoAsset.url}
        alt="RD Solutions Assessoria Contábil"
        className={compact ? "h-9 w-auto" : "h-11 w-auto md:h-12"}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
