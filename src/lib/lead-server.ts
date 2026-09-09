import { z } from "zod";
import { getSupabaseServer } from "./supabase-server";

export const leadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(10).max(20),
  empresa: z.string().trim().max(160).optional().or(z.literal("")),
  servico_interesse: z.string().trim().max(100).optional().or(z.literal("")),
  origem: z.string().trim().min(1).max(100),
  pagina_origem: z.string().trim().max(255).optional().or(z.literal("")),
  utm_source: z.string().trim().max(100).optional().or(z.literal("")),
  utm_medium: z.string().trim().max(100).optional().or(z.literal("")),
  utm_campaign: z.string().trim().max(150).optional().or(z.literal("")),
  utm_content: z.string().trim().max(150).optional().or(z.literal("")),
  utm_term: z.string().trim().max(150).optional().or(z.literal("")),
  observacoes: z.string().trim().max(2000).optional().or(z.literal("")),
});

export async function createLead(input: unknown) {
  const lead = leadSchema.parse(input);
  const whatsappNormalizado = lead.whatsapp.replace(/\D/g, "");

  if (whatsappNormalizado.length < 10 || whatsappNormalizado.length > 15) {
    throw new Error("WhatsApp inválido.");
  }

  const supabase = getSupabaseServer();

  const limiteReenvio = new Date(Date.now() - 60_000).toISOString();
  const { data: leadRecente, error: erroConsulta } = await supabase
    .from("leads")
    .select("id")
    .eq("whatsapp", whatsappNormalizado)
    .gte("created_at", limiteReenvio)
    .maybeSingle();

  if (erroConsulta) {
    console.error("Erro ao verificar lead recente:", erroConsulta);
    throw new Error("Não foi possível verificar o envio.");
  }
  if (leadRecente) {
    throw new Error("Aguarde um momento antes de enviar novamente.");
  }

  const { data, error } = await supabase
    .from("leads")
    .insert({
      nome: lead.nome,
      email: lead.email || null,
      whatsapp: whatsappNormalizado,
      empresa: lead.empresa || null,
      servico_interesse: lead.servico_interesse || null,
      origem: lead.origem,
      pagina_origem: lead.pagina_origem || null,
      utm_source: lead.utm_source || null,
      utm_medium: lead.utm_medium || null,
      utm_campaign: lead.utm_campaign || null,
      utm_content: lead.utm_content || null,
      utm_term: lead.utm_term || null,
      observacoes: lead.observacoes || null,
    })
    .select("id, status, created_at")
    .single();

  if (error) {
    console.error("Erro Supabase ao cadastrar lead:", error);
    throw new Error("Não foi possível cadastrar o lead.");
  }

  return data;
}
