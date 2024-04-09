import type { GqlOps } from "#gql";
import type { Stage } from "#gql/default";

type Props = {
  slug: string,
  type: GqlOps
}

export async function useGetContentForType(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" : "PUBLISHED"

  const { data } = await useAsyncGql(properties.type || 'Page', {
    //@ts-ignore
    slug: properties.slug,
    stage: stage as Stage
  });

  let result = null;
  switch (properties.type) {
    case 'Page':
      result = data.value.page
      break;
    case 'Sponsor':
      result = data.value.sponsor
      break;
    case 'NewsArticle':
      result = data.value.newsArticle
      break;
  }

  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return result
}