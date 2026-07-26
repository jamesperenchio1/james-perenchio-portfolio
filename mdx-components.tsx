import type { MDXComponents } from "mdx/types";
import { Diagram } from "@/components/mdx/Diagram";
import { Callout } from "@/components/mdx/Callout";
import { Highlights } from "@/components/mdx/Highlights";
import { VideoEmbed } from "@/components/mdx/VideoEmbed";
import { Figure } from "@/components/mdx/Figure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Diagram,
    Callout,
    Highlights,
    VideoEmbed,
    Figure,
    ...components,
  };
}
