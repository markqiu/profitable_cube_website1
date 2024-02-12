import type { MDXComponents } from "mdx/types";
import defaultComponents from "next-docs-ui/mdx-server";
import {
  Error,
  Info,
  LinkButton,
  Tip,
  Warning,
} from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Error,
    Info,
    LinkButton,
    Tip,
    Warning,
    ...components,
  };
}
