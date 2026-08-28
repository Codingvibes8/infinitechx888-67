import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const BASE_URL = "https://scriptorcode.com";
const LAST_MODIFIED = "2026-08-15";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/essential`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/growth`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/premium`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/landing-pages`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/seo-audit`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/cro`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/email-templates`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/ux-review`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/retainers`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/projects`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
