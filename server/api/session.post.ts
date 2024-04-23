import { gql, GraphQLClient } from "graphql-request";

function createClient(endpoint: string, token: string) {
  return new GraphQLClient(
    endpoint,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

export default defineEventHandler(async (event) => {
  const formData = await readBody(event)

  const { hygraphToken, hygraphEndpoint } = useRuntimeConfig()
  const client = createClient(hygraphEndpoint, hygraphToken)

  const mutation = gql`
    mutation CreateSessionWithSpeakerAndImage(
      $sessionTitle: String!, 
      $sessionTheme: String!, 
      $sessionThemeId: ID, 
      $speakerName: String
      $speakerImageUrl: String) {
      createSession(
        data: {
          title: $sessionTitle, 
          theme: $sessionTheme, 
          sessionTheme: {
            connect: {
              id: $sessionThemeId
            }
          }
          speaker: {
            create: {
              name: $speakerName
              image: {
                create: {
                  uploadUrl: $speakerImageUrl
                }
              }
            }
          }
        }
      ) {
        id
        title
      }
    }
  `;

  const sessionTitle = formData.find((d: any) => d.name === "sessionTitle").val
  const sessionTheme = formData.find((d: any) => d.name === "sessionTheme").val
  const sessionThemeId = formData.find((d: any) => d.name === "sessionThemeId").val
  const speakerName = formData.find((d: any) => d.name === "speakerName").val
  const speakerImageUrl = formData.find((d: any) => d.name === "speakerImageUrl").val

  const result = await client.request(mutation,
    {
      sessionTitle,
      sessionTheme,
      sessionThemeId,
      speakerName,
      speakerImageUrl
    }
  );

  return {
    result
  }
})