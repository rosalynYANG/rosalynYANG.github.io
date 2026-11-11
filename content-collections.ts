import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const shared = z.object({
  title: z.string(),
  summary: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  content: z.string(),
});

async function withMdx(document: Record<string, unknown>, context: Parameters<typeof compileMDX>[0]) {
  const mdx = await compileMDX(context, document as never, { remarkPlugins: [remarkGfm, remarkCodeMeta] });
  return { ...document, mdx };
}

const projects = defineCollection({
  name: "projects", directory: "content/projects", include: "**/*.mdx",
  schema: shared.extend({ type: z.enum(["ai-system", "creative-product", "experiment"]), role: z.string(), outcome: z.string().optional() }),
  transform: withMdx,
});

const notes = defineCollection({
  name: "notes", directory: "content/notes", include: "**/*.mdx",
  schema: shared,
  transform: withMdx,
});

export default defineConfig({ collections: [projects, notes] });
