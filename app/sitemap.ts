export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aydinguleryapi.com";
  const pages = [
    { path: "", priority: 1.0, freq: "monthly" },
    { path: "/hakkimizda", priority: 0.8, freq: "monthly" },
    { path: "/insaat", priority: 0.9, freq: "monthly" },
    { path: "/mimari", priority: 0.9, freq: "monthly" },
    { path: "/danismanlik", priority: 0.8, freq: "monthly" },
    { path: "/alim-satim", priority: 0.9, freq: "monthly" },
    { path: "/projeler", priority: 0.9, freq: "monthly" },
    { path: "/iletisim", priority: 0.7, freq: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.freq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: p.priority,
  }));
}
