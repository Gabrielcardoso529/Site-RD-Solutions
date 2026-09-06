import { createServerFn } from "@tanstack/react-start";
import { leadSchema, createLead } from "./lead-server";

export const submitLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const lead = await createLead(data);

    return {
      success: true,
      lead,
    };
  });
