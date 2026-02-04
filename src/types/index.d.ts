import type { CollectionEntry, CollectionKey } from "astro:content";
import type { MarkdownHeading } from "astro";

export type GenericEntry = CollectionEntry<CollectionKey>;

export type AuthorsEntry = CollectionEntry<"authors">;
export type BlogEntry = CollectionEntry<"blog">;
export type DocsEntry = CollectionEntry<"docs">;
export type HomeEntry = CollectionEntry<"home">;
export type IndexCardsEntry = CollectionEntry<"indexCards">;
export type RecipesEntry = CollectionEntry<"recipes">;
export type TermsEntry = CollectionEntry<"terms">;

export type SearchableEntry =
  | AuthorsEntry
  | BlogEntry
  | DocsEntry
  | RecipesEntry
  | TermsEntry;

export type SocialLinks = {
  discord?: string;
  email?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedIn?: string;
  pinterest?: string;
  tiktok?: string;
  website?: string;
  youtube?: string;
}

export type BadgeData = {
  devFront?: boolean;
  devBack?: boolean;
  serveur?: boolean;
  baseDeDonnées?: boolean;
  communication?: boolean;
  application?: boolean;
  graphiste?: boolean;
  designer?: boolean;
  marketing?: boolean;
  photographe?: boolean;
  videaste?: boolean;
}


export type EntryReference = {
  id: string;
  collection: string;
};



// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};
