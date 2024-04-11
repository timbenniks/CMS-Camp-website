export async function useOGTags(page: any) {
  const { $preview } = useNuxtApp();

  // return useSeoMeta({
  //   title: `${$preview ? "⚡️ " : ""} ${page?.title}`,
  //   ogTitle: page?.title,
  //   description: page?.description,
  //   ogDescription: page?.description,
  //   ogImage: page?.ogImage.url,
  //   ogSiteName: "CMS Camps",
  //   ogType: "website",
  //   twitterCard: "summary_large_image",
  //   twitterDescription: page?.description,
  // });
}