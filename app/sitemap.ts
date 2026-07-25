import type { MetadataRoute } from "next";
import { RESOURCES } from "@/lib/resources";

const BASE_URL = "https://www.godspeedwelding.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/services/structural-steel-erection",
    "/services/welding",
    "/services/fabrication",
    "/building-types",
    "/building-types/retail-big-box",
    "/building-types/industrial-warehouse",
    "/building-types/agricultural-rural",
    "/work",
    "/resources",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const resourceRoutes = RESOURCES.map((r) => ({
    url: `${BASE_URL}/resources/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
