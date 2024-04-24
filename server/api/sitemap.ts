import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const sitemapSlugs = await GqlSitemap()

  const pages = sitemapSlugs?.pages.map((slug: any) => {
    return asSitemapUrl({
      loc: `/${slug.slug !== "home" ? slug.slug : ""}`,
      lastmod: slug.updatedAt
    }) || []
  })

  const newsArticles = sitemapSlugs?.newsArticles.map((slug: any) => {
    return asSitemapUrl({
      loc: `/news/${slug.slug}`,
      lastmod: slug.updatedAt
    }) || []
  })

  const sponsors = sitemapSlugs?.sponsors.map((slug: any) => {
    return asSitemapUrl({
      loc: `/sponsor/${slug.slug}`,
      lastmod: slug.updatedAt
    })
  }) || []

  return [...pages, ...newsArticles, ...sponsors]
});
