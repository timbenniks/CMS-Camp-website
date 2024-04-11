export async function useOGTags(page: any) {
  const { $preview } = useNuxtApp();

  let title = '';
  let description = '';
  let image = '';

  switch (page.__typename) {
    case 'Page':
      title = page?.openGraphTitle
      description = page?.openGraphDescription
      image = page?.openGraphImage?.url
      break;

    case 'NewsArticle':
      title = page?.title
      description = page?.description
      image = page?.image?.url
      break;

    case 'Sponsor':
      title = page?.name
      description = page?.sponsorDescription
      image = page?.logo?.url
      break;
  }

  return useSeoMeta({
    title: `${$preview ? "⚡️ " : ""} ${title}`,
    ogTitle: title,
    description: description,
    ogDescription: description,
    ogImage: image,
    ogSiteName: "CMS Camp",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterDescription: description,
  });
}