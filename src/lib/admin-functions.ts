import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAdmin } from "./admin-server";
import { getSupabaseServer } from "./supabase-server";
import { access } from "fs";

const adminRequestSchema = z.object({
  accessToken: z.string().min(1),
});

export const getAdminLeads = createServerFn({ method: "POST" })
  .validator(adminRequestSchema)
  .handler(async ({ data }) => {
    const isAdmin = await verifyAdmin(data.accessToken);

    if (!isAdmin) {
      throw new Error("Acesso não autorizado.");
    }

    const supabase = getSupabaseServer();

    const { data: leads, error } = await supabase
      .from("leads")
      .select(
        ` 
          id,
          nome,
          email,
          whatsapp,
          empresa,
          servico_interesse,
          origem,
          pagina_origem,
          status,
          observacoes,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_content,
          utm_term,
          created_at,
          updated_at
        `,
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao carregar leads:", error);
      throw new Error("Não foi possível carregar os leads.");
    }
    return leads;
  });

const updateLeadStatusSchema = z.object({
  accessToken: z.string().min(1),
  leadId: z.string().uuid(),
  status: z.enum(["novo", "em_contato", "convertido", "descartado"]),
});

export const updateLeadStatus = createServerFn({ method: "POST" })
  .validator(updateLeadStatusSchema)
  .handler(async ({ data }) => {
    const isAdmin = await verifyAdmin(data.accessToken);

    if (!isAdmin) {
      throw new Error("Acesso não autorizado.");
    }
    const supabase = getSupabaseServer();

    const { data: lead, error } = await supabase
      .from("leads")
      .update({
        status: data.status,
      })
      .eq("id", data.leadId)
      .select("id, status, updated_at")
      .single();

    if (error) {
      console.error("Erro ao atualizar status do lead:", error);
      throw new Error("Não foi possível atualizar o status do lead.");
    }
    return lead;
  });

const updateLeadObservacoesSchema = z.object({
  accessToken: z.string().min(1),
  leadId: z.string().uuid(),
  observacoes: z.string().trim().max(2000),
});
export const updateLeadObservacoes = createServerFn({ method: "POST" })
  .validator(updateLeadObservacoesSchema)
  .handler(async ({ data }) => {
    const isAdmin = await verifyAdmin(data.accessToken);

    if (!isAdmin) {
      throw new Error("Acesso não autorizado.");
    }
    const supabase = getSupabaseServer();

    const { data: lead, error } = await supabase
      .from("leads")
      .update({
        observacoes: data.observacoes || null,
      })
      .eq("id", data.leadId)
      .select("id, observacoes, updated_at")
      .single();

    if (error) {
      console.error("Erro ao atualizar observações do lead:", error);
      throw new Error("Não foi possível salvar as observações.");
    }

    return lead;
  });
