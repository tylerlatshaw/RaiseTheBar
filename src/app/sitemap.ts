import { navigationLinks } from "@/app/lib/navigation-links";
import { MetadataRoute } from "next";

import type { NavigationLinkType } from "./lib/type-library";

export default function sitemap(): MetadataRoute.Sitemap {

    const fs = require("fs");
    const sitemapLinks: NavigationLinkType[] = [...navigationLinks];
    var sitemapJson: any[] = [];

    for (var i = 0; i < sitemapLinks.length; i++) {

        if (!sitemapLinks[i].display.includes("Sitemap")) {
            var stats = fs.statSync(sitemapLinks[i].filepath);
            sitemapJson.push({
                url: process.env.BASE_URL + sitemapLinks[i].link,
                lastModified: stats.mtime,
                changeFrequency: sitemapLinks[i].changeFrequency,
                priority: sitemapLinks[i].priority,
            });
        } else {
            sitemapJson.push({
                url: process.env.BASE_URL + sitemapLinks[i].link,
                lastModified: new Date,
                changeFrequency: sitemapLinks[i].changeFrequency,
                priority: sitemapLinks[i].priority,
            });
        }
    }

    return sitemapJson;
}