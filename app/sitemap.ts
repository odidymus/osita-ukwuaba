import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return[{url:"https://ositaukwuaba.com",lastModified:new Date(),changeFrequency:"monthly",priority:1},{url:"https://ositaukwuaba.com/cv",lastModified:new Date(),changeFrequency:"monthly",priority:.8}]}
