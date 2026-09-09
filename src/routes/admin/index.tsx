import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getAdminLeads, updateLeadObservacoes, updateLeadStatus } from "@/lib/admin-functions";
import { supabaseClient } from "@/lib/supabase-client";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/admin/")({
  component: AdminPage,
});

type Lead = {
  id: string;
  nome: string;
  email: string | null;
  whatsapp: string;
  empresa: string | null;
  servico_interesse: string | null;
  origem: string;
  pagina_origem: string | null;
  status: string;
  observacoes: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  created_at: string;
  updated_at: string;
};

function AdminPage() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [updatingLeadId, setUpdatingLeadId] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [observacoesDraft, setObservacoesDraft] = useState("");
  const [savingObservacoes, setSavingObservacoes] = useState(false);
  const totalNovos = leads.filter((lead) => lead.status === "novo").length;

  const totalEmContato = leads.filter((lead) => lead.status === "em_contato").length;
  const totalConvertidos = leads.filter((lead) => lead.status === "convertido").length;
  const totalDescartados = leads.filter((lead) => lead.status === "descartado").length;

  const filteredLeads = leads.filter((lead) => {
    const termo = search.toLowerCase().trim();

    const matchesSearch =
      !termo ||
      lead.nome.toLowerCase().includes(termo) ||
      lead.empresa?.toLowerCase().includes(termo) ||
      lead.whatsapp.includes(termo);
    const matchesStatus = statusFilter === "todos" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    const loadLeads = async () => {
      const {
        data: { session },
      } = await supabaseClient.auth.getSession();

      if (!session?.access_token) {
        await navigate({
          to: "/admin/login",
        });
        return;
      }

      try {
        const data = await getAdminLeads({
          data: {
            accessToken: session.access_token,
          },
        });

        setLeads(data ?? []);
      } catch {
        setError("Você não tem autorização para acessar este painel.");
      } finally {
        setLoading(false);
      }
    };

    void loadLeads();
  }, [navigate]);

  const handleStatusChange = async (
    leadId: string,
    novoStatus: "novo" | "em_contato" | "convertido" | "descartado",
  ) => {
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();

    if (!session?.access_token) {
      await navigate({
        to: "/admin/login",
      });
      return;
    }
    try {
      setUpdatingLeadId(leadId);

      const updateLead = await updateLeadStatus({
        data: {
          accessToken: session.access_token,
          leadId,
          status: novoStatus,
        },
      });

      setLeads((currentLeads) =>
        currentLeads.map((lead) =>
          lead.id === leadId
            ? {
                ...lead,
                status: updateLead.status,
                updated_at: updateLead.updated_at,
              }
            : lead,
        ),
      );

      toast.success("Status atualizado com sucesso.");
    } catch {
      toast.error("Não foi possível atualizar o status do lead.");
    } finally {
      setUpdatingLeadId(null);
    }
  };
  const handleSaveObservacoes = async () => {
    if (!selectedLead) {
      return;
    }
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();

    if (!session?.access_token) {
      await navigate({
        to: "/admin/login",
      });
      return;
    }
    try {
      setSavingObservacoes(true);
      const updatedLead = await updateLeadObservacoes({
        data: {
          accessToken: session.access_token,
          leadId: selectedLead.id,
          observacoes: observacoesDraft,
        },
      });
      setLeads((currentLeads) =>
        currentLeads.map((lead) =>
          lead.id === selectedLead.id
            ? {
                ...lead,
                observacoes: updatedLead.observacoes,
                updated_at: updatedLead.updated_at,
              }
            : lead,
        ),
      );
      setSelectedLead((currentLead) =>
        currentLead
          ? {
              ...currentLead,
              observacoes: updatedLead.observacoes,
              updated_at: updatedLead.updated_at,
            }
          : null,
      );
      toast.success("Observações salvas com sucesso.");
    } catch {
      toast.error("Não foi possível salvar as observações.");
    } finally {
      setSavingObservacoes(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            RD Solutions
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
            Painel Administrativo
          </h1>
          <p className="mt-2 text-muted-foreground">Gerencie os leads recebidos pelo site.</p>
        </div>
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Novos</p>
            <p className="mt-2 text-3xl font-bold">{totalNovos}</p>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Em contato</p>
            <p className="mt-2 text-3xl font-bold">{totalEmContato}</p>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Convertidos</p>
            <p className="mt-2 text-3xl font-bold">{totalConvertidos}</p>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">Descartados</p>
            <p className="mt-2 text-3xl font-bold">{totalDescartados}</p>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, empresa ou WhatsApp..."
            className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary md:w-52"
          >
            <option value="todos">Todos os status</option>
            <option value="novo">Novos</option>
            <option value="em_contato">Em contato</option>
            <option value="convertido">Convertidos</option>
            <option value="descartado">Descartados</option>
          </select>
        </div>

        {loading && (
          <div className="card-premium p-6">
            <p className="text-sm text-muted-foreground">Carregando leads...</p>
          </div>
        )}

        {error && (
          <div className="card-premium p-6">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="card-premium overflow-x-auto p-6">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 pr-4">Nome</th>
                  <th className="pb-3 pr-4">Empresa</th>
                  <th className="pb-3 pr-4">WhatsApp</th>
                  <th className="pb-3 pr-4">Serviço</th>
                  <th className="pb-3 pr-4">Origem</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3">Data</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => {
                      setSelectedLead(lead);
                      setObservacoesDraft(lead.observacoes ?? "");
                    }}
                    className="cursor-pointer border-b border-border/60 transition-colors hover:bg-muted/50"
                  >
                    <td className="py-4 pr-4 font-medium">{lead.nome}</td>
                    <td className="py-4 pr-4">{lead.empresa ?? "—"}</td>
                    <td className="py-4 pr-4">
                      <a
                        href={`https://wa.me/${lead.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-medium text-primary hover:underline"
                      >
                        {lead.whatsapp}
                      </a>
                    </td>
                    <td className="py-4 pr-4">{lead.servico_interesse ?? "—"}</td>
                    <td className="py-4 pr-4">{lead.utm_source ?? lead.origem}</td>
                    <td className="py-4 pr-4">
                      <select
                        value={lead.status}
                        disabled={updatingLeadId === lead.id}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          void handleStatusChange(
                            lead.id,
                            e.target.value as "novo" | "em_contato" | "convertido" | "descartado",
                          )
                        }
                        className="h-9 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <option value="novo">Novo</option>
                        <option value="em_contato">Em contato</option>
                        <option value="convertido">Convertido</option>
                        <option value="descartado">Descartado</option>
                      </select>
                    </td>
                    <td className="py-4">
                      {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: "short",
                        timeStyle: "short",
                        timeZone: "America/Sao_Paulo",
                      }).format(new Date(lead.created_at))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredLeads.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Nenhum lead encontrado.
              </p>
            )}
          </div>
        )}

        <Dialog
          open={selectedLead !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedLead(null);
            }
          }}
        >
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            {selectedLead && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedLead.nome}</DialogTitle>
                  <DialogDescription>Informações completas do lead.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">Empresa</p>
                      <p className="mt-1 text-sm">{selectedLead.empresa ?? "-"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">E-mail</p>
                      <p className="mt-1 text-sm">{selectedLead.email ?? "-"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${selectedLead.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                      >
                        {selectedLead.whatsapp}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">
                        Serviço de interesse
                      </p>
                      <p className="mt-1 text-sm">{selectedLead.servico_interesse ?? "-"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">Status</p>
                      <p className="mt-1 text-sm">{selectedLead.status ?? "-"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">
                        Página de origem
                      </p>
                      <p className="mt-1 text-sm">{selectedLead.pagina_origem ?? "-"}</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-5">
                    <p className="mb-4 text-sm font-semibold">Origem da campanha</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Origem</p>
                        <p className="mt-1 text-sm">
                          {selectedLead.utm_source ?? selectedLead.origem ?? "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Mídia</p>
                        <p className="mt-1 text-sm">{selectedLead.utm_medium ?? "-"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Campanha</p>
                        <p className="mt-1 text-sm">{selectedLead.utm_campaign ?? "-"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Conteúdo</p>
                        <p className="mt-1 text-sm">{selectedLead.utm_content ?? "-"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Termo</p>
                        <p className="mt-1 text-sm">{selectedLead.utm_term ?? "-"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="text-xs font-medium uppercase text-muted-foregroun">
                      Observações
                    </p>
                    <textarea
                      value={observacoesDraft}
                      onChange={(e) => setObservacoesDraft(e.target.value)}
                      maxLength={2000}
                      rows={5}
                      placeholder="Adicione informações importantes sobre este lead..."
                      className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="text-xs text-muted-foreground">
                        {observacoesDraft.length}/2000
                      </p>
                      <button
                        type="button"
                        onClick={() => void handleSaveObservacoes()}
                        disabled={savingObservacoes}
                        className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {savingObservacoes ? "Salvando..." : "Salvar observações"}
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-border pt-5">
                    <p className="text-xs text-muted-foregroun">Lead recebido em</p>
                    <p className="mt-1 text-sm">
                      {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: "long",
                        timeStyle: "short",
                        timeZone: "America/Sao_paulo",
                      }).format(new Date(selectedLead.created_at))}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
